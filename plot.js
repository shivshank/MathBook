plot = {
	on: function(id) {
        var ctx = document.getElementById(id).getContext("2d");

        return this.plotter.create(ctx);
    },
    plotter: {
        create: function(ctx) {
            var o = Object.create(this);
            o.ctx = ctx;
            
            o.withWindow(-10, 10, -10, 10);
            return o;
        },
        withWindow: function(xMin, xMax, yMin, yMax) {
            this.window = {
                xMin: xMin, xMax: xMax,
                yMin: yMin, yMax: yMax
            };
            
            // reset the matrix to identity but with +y pointing upward
            this.ctx.setTransform(1, 0, 0, -1, 0, 0);
            
            // put the origin at the center
            var originX = this.ctx.canvas.width / 2,
                originY = -this.ctx.canvas.height / 2;
            
            this.ctx.translate(originX, originY);
            
            // set the scale
            this.ctx.scale(this.ctx.canvas.width/(xMax - xMin),
                           this.ctx.canvas.height/(yMax - yMin));
                           
            // translate the origin in window coordinates
            originX = -(xMin + xMax) / 2;
            originY = -(yMin + yMax) / 2;
            this.ctx.translate(originX, originY);
            
            return this;
        },
        line: function(x, y, m, style) {
            var i;
            
            if (style === undefined) {
                this.ctx.strokeStyle = "#000";
                this.ctx.lineWidth = 1;
            } else {
                for (i in style) {
                    this.ctx[i] = style[i];
                }
            }
            
            if (m === Infinity || m === -Infinity) {
                // draw a vertical line
                this.ctx.beginPath();
                this.ctx.moveTo(x, this.window.yMin);
                this.ctx.lineTo(x, this.window.yMax);
                this.ctx.stroke();
                return this;
            }
            
            this.ctx.beginPath();
            this.ctx.moveTo(this.window.xMin, m * (this.window.xMin - x) + y);
            this.ctx.lineTo(this.window.xMax, m * (this.window.xMax - x) + y);
            this.ctx.stroke();
            
            return this;
        },
        point: function(x, y, radius, style) {
            var i;
            
            for (i in style) {
                this.ctx[i] = style[i];
            }
            
            this.ctx.beginPath();
            this.ctx.arc(x, y, radius, 0, 6.3);
            this.ctx.fill();
            
            return this;
        },
        graph: function(expr, res, style) {
            var i, y;
            
            if (style === undefined) {
                this.ctx.strokeStyle = "#000";
                this.ctx.lineWidth = 1;
            } else {
                for (i in style) {
                    this.ctx[i] = style[i];
                }
            }
            
            this.ctx.beginPath();
            this.ctx.moveTo(0, eval(this.window.xMin));
            for (i=this.window.xMin; i < this.window.xMax; i+=res) {
                y = eval(expr);
                this.ctx.lineTo(i, y);
            }
            this.ctx.stroke();
        },
        withAxes: function() {
            this.ctx.save();
            
            this.ctx.strokeStyle = "#36F";
            this.ctx.lineWidth = 1;
            this.ctx.setLineDash([3]);
            this.ctx.beginPath();
            this.ctx.arc(0, 0, 0.55, 0, 6.3);
            this.ctx.stroke();
            
            this.line(0, 0, Infinity, {strokeStyle: "#36F", lineWidth: 0.25});
            this.line(0, 0, 0, {strokeStyle: "#36F", lineWidth: 0.25});
            
            this.ctx.restore();
            return this;
        }
    }
};
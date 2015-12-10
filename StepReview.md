# Overview
This review is a your-exam's-coming-up-and-you-need-to-pass kind of review; it won't really explain the questions too much, but I will try to give you some good memorization tips and practical step-by-steps.

<div id="table-of-contents">
    <h2>Table of Contents</h2>
</div>

## Identifying Operations
Before we can continue, we need to check that you remember the basics. The following questions all ask you what operation is going on in the expression. For instance:
  * |3 + 4| is addition
  * |7 - 3| is subtraction
  * |3^2| is "three squared", or to be technical it's exponentation/exponents

Questions:
  * |3 * 4| _multiplication_
  * |f(x)| _if |f| is a function, it means f of x_
  * |5/3| _division, 5 divided by 3_
  * |7(2)| _multiplication, 7 times 2, the same as |7 * 2|_
  * |v(t)| _if |v| is a function, then it's |v| of |t|_
  * |r(l)| _if |r| is a function, then it's |r| of |t|_
  * |ab| _multiplication, a times b, as in |a * b|_
  * |Gamma(f)| _if |Gamma| is a function, then it is |Gamma| of |f|_
  * |d/(dx)[5x + 3]| _take the derivative of |5x + 3|_
  * |sin(x)| _|sin| of |x|_
  * |sinx| _|sin| of |x|, same as |sin(x)|_
  * |sin^2x| _this is the same as |(sin(x))^2|_

Bonus (see the Exponents section for help):
  * |3^(1/2)| _is |sqrt(3)|_
  * |8^(-3)| _is |1/(8^3)|_

**Reminders:**
  * "Whatever" of "whatever", such as |f(x)|, means plug |x| into the function |f|
  * If you see a weird symbol, just go with it. Whatever alphabet you use behaves the same. For instance, |Gamma| is a greek letter, "gamma". So |Gamma(f)| is read "gamma of f." Another example: |2mu + 3mu = 5mu|
  * The questions |r(l)|, |Gamma(f)|, and so on can mean two different things. You'll have to think a little and use context clues. If |r| is a variable, then |r(l)| just means |r * l|, but if it is a function, then it means |r| of |l|. The same goes for |Gamma|.
  * Fractions are divison. |5/3| is the same as |5 -: 3|

## What is a Derivative?
When you take the derivative of an equation/function, you are creating a new function. When you plug a number into the derivative, you get the slope of the first function at that number.

**Examples:** The derivative of |(y = 3x + 4)| is |(y' = 3)|. |y| is a line with slope 3, so |y'(|anything|) = 3|. Curves have changing slope. |x^2| is a parabola, which is a curve. It's derivative is |2x|, so you can see how it's slope changes depending on what x is.

## Derivative Notation
There are many ways to write the derivative:
  * |y'| is "y prime", and means "the derivative of y"
  * |(dy)/(dx)| is often read "dee-why-dee-x" and is the same as |y'|
  * |d/(dx)[|whatever|]| means "take the derivative of whatever"

For example, the derivative of |y = 2x^3 + 4x| could be written:
  * |d/(dx)y = d/(dx)[2x^3 + 4x] = 6x^2 + 4|
  * |(dy)/(dx) = 6x^2 + 4|
  * |y' = 6x^2 + 4|
  * |y' = (dy)/(dx)|

Here is an equation showing a few more ways, but you probably don't need to know them:
  * |y' = (dy)/(dx) = D_x(y) = dot y|

If we are taking the derivative of |f(x)|, it's basically the same:
  * |f'(x) = (df)/(dx)(x) = d/(dx)[f(x)]|

Remember that we can take derivatives of derivatives:
  * the first derivative: |d/(dx)[x^3] = 3x^2|
  * the second derivative: |d/(dx)[3x^2] = 6x|
  * the derivative of |y'| is |y''|, is read "y double prime"

## Finding critical points, maxes and mins, and inflection points

Vocab:
  * Stationary points -- where |f'(x) = 0|
  * Critical points -- where |f'(x) = 0| or |f'(x)| is undefined
  * Inflection points -- where |f''(x)| crosses the x axis
  * Extrema -- term for minimums and maximums

To find a minimum or a maximum of a function, you need to find the function's critical points. Let's do an example with the function: |f(x) = 4x^3 + 5x^2 + 2|. Since |f(x)| is never undefined, we just need to find |f'(x) = 0|. You should graph |f(x)| and |f'(x)| on your calculator.

|f'(x) = 12x^2 + 10x|

**Now let's find the critical points:**

|0 = f'(x)|

|0 = 12x^2 + 10x| _substitute |f(x)|_

|0 = x(12x + 10)| _factor x_

Now, think: |x(12x + 10) = 0| is only true if |x = 0| or |12x + 10 = 0|. So now just solve those equations.

Thus, the critical points of |f(x)| are:
  * |x = 0|
  * |x = -5/6 lArr 12x + 10 = 0|

**To find the mins and maxes we can use the first derivative test:**
todo

## When is a function undefined?
The only times that a function is undefined are when you divide by zero or take an even root (square root, fourth root, etc) of a negative number:
  * |1/x| is undefined when |x = 0|;
  * |x/(x + 2)| is undefined when |x + 2 = 0|, which means when |x = -2|
  * |sqrt(x)/3| is undefined when |x < 0|
  * |sqrt(x - 2)| is undefined when |x - 2 < 0|, which means when |x < 2|
  * |sqrt(x - 10)/x| is undefined when |x < 10| or |x = 0|

## Exponents
A lot of people forget how crazy exponents work. Here's the main rules. Read each line and see if it makes sense. If it doesn't you should study ["exponent rules"](https://www.khanacademy.org/math/pre-algebra/exponents-radicals).

 * |x^2 + x^3 = x^2 + x^3| (can't add things with different exponents)
 * |x^3 \* x^4 = x^7 = (x\*x\*x) \* (x\*x\*x\*x)|
 * |x^1/2 = sqrt(x)|
 * |(x^3)^4 = x^12| _note the parentheses_
 * |x^-1 = 1/x|
 * |x^-2 = 1/(x^2) = (x^2)^(-1)| _the negative means make it a fraction, but you keep the exponent_
 * |1/(x^-3) = x^3 = 1/(1/(x^3)) = 1 -: 1/x^3 = 1 * x^3/1| _remember "leave change flip"?_

I can't display them properly on this webpage, but here's a picture from the [wikipedia page](https://en.wikipedia.org/wiki/Nth_root) about nth roots:
![nth root of x](https://upload.wikimedia.org/math/f/6/e/f6e2875466bdf9e5eb4a7db071b8e812.png)

The above is what happens when you have a fractional exponent. If you have a negative fractional exponent, just do |1/(...)| and replace the "..." by following the above rule.

## Coming Soon
  * Finding Derivatives
  * Implicit Differentiation
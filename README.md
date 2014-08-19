drawCircle
==========

I wanted to show how much processing is required for JavaScript to draw a circle a pixel at a time 
(presumably why most people use squares with rounded edges instead).  The formula is very straightforward. It is a for loop starting at the center and incrementing up to the radius (you can vary the distance between steps -- higher is higher resolution but much slower).  At each step, it calculates the four pixels on the circle at that point, 
draws them, and moves to the next.  The only math required is the pythagorean theorem.  I have the default set at 
20,000 (80,000 pixels total) and it still looks fairly "low-res" when you run it.  

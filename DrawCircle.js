// Simple function to draw circle with pixels
// The closer the "constantIncrease" variable is to zero, the higher resolution of the circle 
// Based on the fact that every point in the circle is the leg of a right triangle starting at the
// center, extending length radius to the circle, having a base equal to the contantIncrease.  
// When you calculate the bottomEdge of this triangle (square root of the radius squared - constantIncrease squared)
// you can draw four points with respect to the center.  Once the loop reaches the radius, the circle is
// completed.

var DrawCircle = function(canvas, centerx, centery, radius, constantIncrease){
  var ctx = canvas.getContext("2d");
  var height = 0;
  for(var height = 0; height <= radius; height += constantIncrease){
    var bottomEdge = Math.sqrt(Math.pow(radius, 2) - Math.pow((height + constantIncrease), 2));
    ctx.fillRect(centerx - bottomEdge, centery + height, 1, 1);
    ctx.fillRect(centerx + bottomEdge, centery + height, 1, 1);
    ctx.fillRect(centerx - bottomEdge, centery - height, 1, 1);
    ctx.fillRect(centerx + bottomEdge, centery - height, 1, 1);
  }
}
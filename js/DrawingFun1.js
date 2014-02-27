// JavaScript Document

/* -----------+ Comment Block +-------------------
File:		DrawingFun1.js
Author:     J. Apodaca
Date:       Feb 26, 2014
Purpose:    Drawing functions using Canvas 
Dependedncies: None
    Input:     None
Output:        None

Example of Use: <script type="text/javascript" src="js/DrawingFun1.js"> </script>

Special Thanks to: J. Apodaca

*/

//Note: Unlike PHP scripts, we do NOT use <script> pairs with Javascript

/* Drawing Notes:
	The upper-left corner of the canvas has coordinate (0,0)
	ctx.moveTo(x,y) defines the starting point of the line
	ctx.lineTo(x,y) defines the ending point of the line

*/

var pHereX = 0;
var pHereY = 0;

var xMax = 150;
var yMax = 75;
var xMin = 0;
var yMin = 0;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
	
	function ReportCoordinate(){
	
		document.getElementById('container').innerHTML= " X = " + pHereX + " Y = " + pHereY ;
	} // End ReportCoordinate
	
	function DrawMe(){
		
		// draw a red rectangle
		ctx.fillStyle = "#FF0000";
		ctx.fillRect(0,0,xMax,yMax);
	} // End DrawMe
	
	function DrawUp(){
	
		if (pHereY > yMin) 
			{
			ctx.moveTo(pHereX, pHereY);
			pHereY = pHereY - 1;
			ctx.lineTo(pHereX,pHereY);
			ctx.stroke();
			}
		ReportCoordinate();
	} // End DrawUp.

	function DrawDown(){
	
		if (pHereY < yMax) 
			{
			ctx.moveTo(pHereX, pHereY);
			pHereY = pHereY + 1;
			ctx.lineTo(pHereX,pHereY);
			ctx.stroke();
			}
		ReportCoordinate();
		
	} // End DrawDown.	
	
	function DrawRight(){
	
		if (pHereX < xMax) 
			{
			ctx.moveTo(pHereX, pHereY);
			pHereX = pHereX + 1;
			ctx.lineTo(pHereX,pHereY);
			ctx.stroke();
			}
		ReportCoordinate();
		
	} // End DrawRight.	
    	
	function DrawLeft(){
	
		if (pHereX > xMin) 
			{
			ctx.moveTo(pHereX, pHereY);
			pHereX = pHereX - 1;
			ctx.lineTo(pHereX,pHereY);
			ctx.stroke();
			}
		ReportCoordinate();
		
	} // End DrawLeft.	

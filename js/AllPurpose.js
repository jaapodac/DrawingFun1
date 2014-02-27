// JavaScript Document

/* -----------+ Comment Block +-------------------
File:		AllPurpose.js
Author:     J. Apodaca
Date:       Feb 26, 2014
Purpose:    Generic JavaScript file to be copied as a template in other projects 
Dependedncies: None
    Input:     None
Output:        None

Example of Use: <script type="text/javascript" src="js/AllPurpose.js"> </script>

Special Thanks to: J. Apodaca

*/

//Note: Unlike PHP scripts, we do NOT use <script> pairs with Javascript
 
    function hello(message){
        return "This is a External (file) JavaScript Function that bears a message: " + message;
    }
    
    document.getElementById("container").innerHTML = hello("You're silly");
    	


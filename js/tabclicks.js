
function TabClicks1()
{

var target=document.getElementById('Divs1');
if(document.dispatchEvent) 
{ // W3C AND Support All Browser Without IE
var oEvent = document.createEvent( "MouseEvents" );
oEvent.initMouseEvent("click", true, true,window, 1, 1, 1, 1, 1, false, false, false, false, 0, target);
target.dispatchEvent( oEvent );}
else if(document.fireEvent) 
{ // IE
target.fireEvent("onclick");
}

}

function TabClicks2()
{

var target=document.getElementById('Divs2');
if(document.dispatchEvent) 
{ // W3C AND Support All Browser Without IE
var oEvent = document.createEvent( "MouseEvents" );
oEvent.initMouseEvent("click", true, true,window, 1, 1, 1, 1, 1, false, false, false, false, 0, target);
target.dispatchEvent( oEvent );}
else if(document.fireEvent) 
{ // IE
target.fireEvent("onclick");
}

}

function TabClicks3()
{

var target=document.getElementById('Divs3');
if(document.dispatchEvent) 
{ // W3C AND Support All Browser Without IE
var oEvent = document.createEvent( "MouseEvents" );
oEvent.initMouseEvent("click", true, true,window, 1, 1, 1, 1, 1, false, false, false, false, 0, target);
target.dispatchEvent( oEvent );}
else if(document.fireEvent) 
{ // IE
target.fireEvent("onclick");
}

}

function TabClicks4()
{

var target=document.getElementById('Divs4');
if(document.dispatchEvent) 
{ // W3C AND Support All Browser Without IE
var oEvent = document.createEvent( "MouseEvents" );
oEvent.initMouseEvent("click", true, true,window, 1, 1, 1, 1, 1, false, false, false, false, 0, target);
target.dispatchEvent( oEvent );}
else if(document.fireEvent) 
{ // IE
target.fireEvent("onclick");
}

}


function TabClicks5()
{

var target=document.getElementById('Divs5');
if(document.dispatchEvent) 
{ // W3C AND Support All Browser Without IE
var oEvent = document.createEvent( "MouseEvents" );
oEvent.initMouseEvent("click", true, true,window, 1, 1, 1, 1, 1, false, false, false, false, 0, target);
target.dispatchEvent( oEvent );}
else if(document.fireEvent) 
{ // IE
target.fireEvent("onclick");

}

}
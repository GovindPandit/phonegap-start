$(document).ready(function()
{
	 var a = Math.floor((Math.random() * 9) + 1);
	 var b = Math.floor((Math.random() * 9) + 1);
	 var c = Math.floor((Math.random() * 9) + 1);
	 var d = Math.floor((Math.random() * 9) + 1);
	 
	 
	 var number=[a,b,c,d];
	 var rannum=a+""+b+""+c+""+d;
	 
	 document.getElementById("n").innerHTML=rannum;
	
	 number.sort();
	 
	 var gnum="";
	 for(i=number.length-1;i>=0;i--)
	 {
		 gnum=gnum+number[i];
	 }
	 
	$("button").click(function()
	{
		var unum=document.getElementById("num").value;
		if(gnum==unum)
		{
			alert("your answer is correct");
		}
		else
		{
			alert("incorrect answer");
		}
	});
});

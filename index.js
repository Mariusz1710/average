document.getElementById("but").addEventListener("click", calculate);

function calculate()
{
	let first = document.getElementById("first").value;

	let second = document.getElementById("second").value;

	if(isNaN(first))
	{	
		document.getElementById("e_first").innerHTML = "Wrong number!";
	}
	else
	{
		document.getElementById("e_first").innerHTML = "";
	}

	if(isNaN(second))
{	
		document.getElementById("e_second").innerHTML = "Wrong number!";
	}
	else
	{
		document.getElementById("e_second").innerHTML = "";
	}

	if(!isNaN(first)&& first != "" && !isNaN(second) && second != "")
	{
		first = parseFloat(first);
		second = parseFloat(second);

		let avg = (first + second) / 2;

		document.getElementById("total").innerHTML = "The average " + first + " and " + second + " is " + avg;

	}
	else
	{
		document.getElementById("total").innerHTML = "";

	}

}
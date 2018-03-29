var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);



var squares = document.querySelectorAll(".square");

var pickedcolor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modebuttons = document.querySelectorAll(".mode");
colorDisplay.textContent = pickedcolor;

for(var i = 0 ;i< modebuttons.length ; i++)
{
	modebuttons[i].addEventListener("click" , function(){
		modebuttons[0].classList.remove("selected");
		modebuttons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy")
			numberOfSquares = 3;
		else
			numberOfSquares = 6;
		reseti();
})
}





function reseti(){
	colors = generateRandomColors(numberOfSquares);
	pickedcolor = pickColor();
	colorDisplay.textContent = pickedcolor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	reset.textContent = "New color";
	for(var i=0 ; squares.length ; i++)
	if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	}else{
		squares[i].style.display = "none";
	}

}

reset.addEventListener("click", function(){
	reseti();

	
})









for(var i= 0; i< squares.length ; i++)
{
	squares[i].style.backgroundColor = colors[i]; 

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor,pickedcolor);
		if(clickedColor === pickedcolor){
			messageDisplay.textContent = "Correct";
			reset.textContent = "Play again!"
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			
		}
		
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	}

	);
}
















function changeColor(color)
{
	for(var i=0 ;i< squares.length ;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length) ;
	return colors[random] ;   

}

function generateRandomColors(num)
{
	var arr = [];
	for(var i=0 ; i< num ; i++)
	{
		arr.push(randomColor());
	}


	return arr;
}


function randomColor(){
	var r = Math.floor(Math.random() * 256) ;
	var g = Math.floor(Math.random() * 256) ;
	var b = Math.floor(Math.random() * 256) ;
	return "rgb(" + r +", " + g + ", " +b + ")";

}


var open = setDisplay("OPEN");
var digitCounter = 0;
var chosenNumber = "0";
var pressedNumber = "0";
var lock = "open";
var chosenKey = "";

//Star button resets the digits and returns to OPEN or LOCKED
function buttonStar() {
	chosenNumber = "0";
	digitCounter = 0;
	if (lock == "locked") {
		setDisplay("LOCKED");
	} else {
		setDisplay("OPEN");
	}
	clearTimeout(timeOut);
}

//Timeout resets digits and returns to OPEN or LOCKED state
function timeOutFunction() {
	chosenNumber = "0";
	digitCounter = 0;
	if (lock == "locked") {
		setDisplay("LOCKED");
	} else {
		setDisplay("OPEN");
	}
}

//This function is called whenever a number button is pressed
function addNumber() {
	if (digitCounter == 0) {
		chosenNumber = pressedNumber;
		setDisplay(chosenNumber);
		digitCounter++;
		timeOut = setTimeout(timeOutFunction, 10000); //timeout after 10 seconds of the first digit input
	} else if (digitCounter == 1) {
		chosenNumber += pressedNumber;
		setDisplay(chosenNumber);
		digitCounter++;
	} else if (digitCounter == 2) {
		chosenNumber += pressedNumber;
		setDisplay(chosenNumber);
		digitCounter++;
	} else if (digitCounter == 3) {
		chosenNumber += pressedNumber;
		setDisplay(chosenNumber);
		digitCounter++;
	}
}

//Button numbers determines value to send to addNumber function
function button1() {
	pressedNumber = "1";
	addNumber();
}

function button2() {
	pressedNumber = "2";
	addNumber();
}

function button3() {
	pressedNumber = "3";
	addNumber();
}

function button4() {
	pressedNumber = "4";
	addNumber();
}

function button5() {
	pressedNumber = "5";
	addNumber();
}

function button6() {
	pressedNumber = "6";
	addNumber();
}

function button7() {
	pressedNumber = "7";
	addNumber();
}

function button8() {
	pressedNumber = "8";
	addNumber();
}

function button9() {
	pressedNumber = "9";
	addNumber();
}

function button0() {
	pressedNumber = "0";
	addNumber();
}

//Hash button only works at digit count of 4 to lock/open
function buttonHash() {
	if (digitCounter == 4) {
		if (lock != "locked") {					//if lock is open
			setDisplay("LOCKED");	
			chosenKey += chosenNumber;			//save key as chosen digits
			lock = "locked";
			chosenNumber = "0";
			digitCounter = 0;
			clearTimeout(timeOut);
			setLocked(locked);
		} else {								//if lock is locked
			if (chosenNumber === chosenKey) {	//correct key entered
				setDisplay("OPEN");
				lock = "open";
				chosenNumber = "0";
				chosenKey = "";
				digitCounter = 0;
				clearTimeout(timeOut);
				setLocked("open");
			} else {							//incorrect key
				chosenNumber = "0";
				digitCounter = 0;
				setDisplay("LOCKED");
				clearTimeout(timeOut);
			}
		}
	}
}
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function verifyNumber() {
    if( currentNumber < 0 ){
        currentNumberWrapper.classList.add('numeroNegativo');
    } else {
        currentNumberWrapper.classList.remove('numeroNegativo');
    }
}

function increment() {
    currentNumber++;
    verifyNumber();
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber--;
    verifyNumber();
    currentNumberWrapper.innerHTML = currentNumber;
}

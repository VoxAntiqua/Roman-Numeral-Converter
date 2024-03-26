const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

const decimalToRoman = () => {
    const decimalInt = parseInt(numberInput.value);
    if (isValid(decimalInt) !== "") {
        outputDiv.textContent = isValid(decimalInt);
        return;
    }
    else {
        const thousands = Math.floor(decimalInt/1000);
        const hundreds = Math.floor((decimalInt%1000)/100);
        const tens = Math.floor((decimalInt%100)/10);
        const ones = decimalInt%10;
        outputDiv.textContent = `
        ${decimalInt} in Roman numerals is ${
            thousandsPlace(thousands) +
            hundredsPlace(hundreds) +
            tensPlace(tens) +
            onesPlace(ones)
        }.`
    }
};

const isValid = (input) => {
     let errMsg = "";
     if (!input) {
        errMsg = "Please enter a valid number";
    } else if (input < 1) {
        errMsg = "Please enter a number greater than or equal to 1";
    } else if (input > 3999) {
        errMsg = "Please enter a number less than or equal to 3999";
    }
    return errMsg;
};

const onesPlace = (ones) => {
    switch (ones) {
        case 0: return "";
        case 1: return "I";
        case 2: return "II";
        case 3: return "III";
        case 4: return "IV";
        case 5: return "V";
        case 6: return "VI";
        case 7: return "VII";
        case 8: return "VIII";
        case 9: return "IX";
    }
}

const tensPlace = (tens) => {
    switch (tens) {
        case 0: return "";
        case 1: return "X";
        case 2: return "XX";
        case 3: return "XXX";
        case 4: return "XL";
        case 5: return "L";
        case 6: return "LX";
        case 7: return "LXX";
        case 8: return "LXXX";
        case 9: return "XC"
    }
}

const hundredsPlace = (hundreds) => {
    switch (hundreds) {
        case 0: return "";
        case 1: return "C";
        case 2: return "CC";
        case 3: return "CCC";
        case 4: return "CD";
        case 5: return "D";
        case 6: return "DC";
        case 7: return "DCC";
        case 8: return "DCCC";
        case 9: return "CM";
    }
}

const thousandsPlace = (thousands) => {
    switch (thousands) {
        case 0: return "";
        case 1: return "M";
        case 2: return "MM";
        case 3: return "MMM";
    }
}

convertBtn.addEventListener("click", decimalToRoman);
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
        const ref = [
            ["M", 1000],
            ["CM", 900],
            ["D", 500],
            ["CD", 400],
            ["C", 100],
            ["XC", 90],
            ["L", 50],
            ["XL", 40],
            ["X", 10],
            ["IX", 9],
            ["V", 5],
            ["IV", 4],
            ["I", 1]
        ];
        const result = [];
        let num = decimalInt;

        ref.forEach((arr) => {
            while (num >= arr[1]) {
                result.push(arr[0]);
                num -= arr[1];
            }
        });

        outputDiv.textContent = result.join("");}
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

convertBtn.addEventListener("click", decimalToRoman);
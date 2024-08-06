import inquirer from "inquirer";
// Initialize user balance and pin code
let myBalance = 10000;
let myPin = 1234;
// print welcome message
console.log("Welcome to Code with Zubia - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is Correct, Login Successfully!");
    //  console.log(`Current Account Balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw successfully`);
            console.log(`Your Remaining Balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log("Pin is Incorrect, Try Again!");
}

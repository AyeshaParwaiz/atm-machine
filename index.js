#! usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let Pincode = 9876;
let answer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your Pin"
    }
]);
if (answer.pin === Pincode) {
    {
        console.log("Correct Pincode!!!");
    }
    // else (console.log("Incorrect Pincode"));
    let operationans = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select option",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    // console.log(operationans);
    if (operationans.operation === "withdraw") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter your amount",
            }
        ]);
        myBalance -= amountans.amount;
        console.log("Your remaining balance is:" + myBalance);
    }
    else if (operationans.operation === "check balance") {
        console.log("your balance is:" + myBalance);
    }
    else if (operationans.operation === "fast cash") {
        let cash = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "choose anyone option",
                choices: ["5000", "10000", "15000"]
            }
        ]);
        myBalance -= cash.fastcash;
        console.log("your remaining balance is :" + myBalance);
    }
    //     else if(operationans.operation > myBalance)
    //  {
    //     console.log("Insufficient balance")
    // }
}
else {
    console.log("Incorrect Pincode");
}

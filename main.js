let submitButton = document.querySelector("#answerSubmitButton");

let display = document.querySelector("#display");
let questionDisplay = document.querySelector("#questionDisplay");
let resultDisplay = document.querySelector("#resultDisplay");
let scoreDisplay = document.querySelector(".display-7");

let row100 = document.querySelectorAll("#row100 .col");
let row200 = document.querySelectorAll("#row200 .col");
let row400 = document.querySelectorAll("#row400 .col");
let row600 = document.querySelectorAll("#row600 .col");
let row800 = document.querySelectorAll("#row800 .col");

let answer = document.querySelector("#input");
let scoreSum = 0;

let readJeopardyData = async () => {
    let rawJeopardyData = await fetch("jeopardy.json");
    let data = await rawJeopardyData.json();

    //group the data by value to put same value questions into an array
    let groupedData = _.groupBy(data, "value");

    // $100 value row
    for (let i = 0; i < row100.length; i++) {
        row100[i].addEventListener("click", function () {
            let random100Question = groupedData.$100[Math.round(Math.random() * groupedData.$100.length)];
            questionDisplay.innerHTML = `${random100Question.question}`;

            console.log(random100Question.question);
            console.log(random100Question.answer);

            resultDisplay.innerText = "";

            //submit answer
            submitButton.addEventListener("click", function (event) {
                event.preventDefault();

                //clears question:
               questionDisplay.innerText = "";
                
                if (answer.value.toLowerCase() === random100Question.answer.toLowerCase()) {
                    scoreSum += parseInt(random100Question.value.substr(1));
                    resultDisplay.innerText = "Correct!";
                    scoreDisplay.innerText = `Your Score: $${scoreSum}`;

                    row100[i].style.backgroundColor = "grey";
                    
                    answer.value = "";
                    

                } else {
                    resultDisplay.innerText = `Incorrect! The correct answer is: ${random100Question.answer}`;
                    scoreDisplay.innerText = `Your Score: $${scoreSum}`;
                }
               
            })
        })
    }

    //$200 row
    for (let i = 0; i < row200.length; i++) {
        row200[i].addEventListener("click", function () {
            let random200Question = groupedData.$200[Math.round(Math.random() * groupedData.$200.length)];
            questionDisplay.innerHTML = `${random200Question.question}`;

            console.log(random200Question.question);
            console.log(random200Question.answer);

            resultDisplay.innerText = "";

            //submit answer
            submitButton.addEventListener("click", function (event) {
                event.preventDefault();
                console.log(answer.value); 

            //clears question:
            questionDisplay.innerText = "";
                
                if (answer.value.toLowerCase() === random200Question.answer.toLowerCase()) {
                    scoreSum += parseInt(random200Question.value.substr(1));
                    resultDisplay.innerText = "Correct!";
                    scoreDisplay.innerText = `Your Score: $${scoreSum}`;

                    row200[i].style.backgroundColor = "grey";
                    
                    answer.value = "";
                    
                } else {

                    resultDisplay.innerText = `Incorrect! The correct answer is: ${random200Question.answer}`;
                }
            })
        })
    }

    //$400 row
    for (let i = 0; i < row400.length; i++) {
        row400[i].addEventListener("click", function () {
            let random400Question = groupedData.$400[Math.round(Math.random() * groupedData.$400.length)];
            questionDisplay.innerHTML = `${random400Question.question}`;

            console.log(random400Question.question);
            console.log(random400Question.answer);

            resultDisplay.innerText = "";

            //submit answer
            submitButton.addEventListener("click", function (event) {
                event.preventDefault();
                console.log(answer.value); 
                
            //clears question:
            questionDisplay.innerText = "";
                
                if (answer.value.toLowerCase() === random400Question.answer.toLowerCase()) {
                    scoreSum += parseInt(random400Question.value.substr(1));
                    resultDisplay.innerText = "Correct!";
                    scoreDisplay.innerText = `Your Score: $${scoreSum}`;

                    row400[i].style.backgroundColor = "grey";
                    
                    answer.value = "";

                } else {

                    resultDisplay.innerText = `Incorrect! The correct answer is: ${random400Question.answer}`;
                }
            })
        })
    }

    //$600 row
    for (let i = 0; i < row600.length; i++) {
        row600[i].addEventListener("click", function () {
            let random600Question = groupedData.$600[Math.round(Math.random() * groupedData.$600.length)];
            questionDisplay.innerHTML = `${random600Question.question}`;

            console.log(random600Question.question);
            console.log(random600Question.answer);

            resultDisplay.innerText = "";

            //submit answer
            submitButton.addEventListener("click", function (event) {
                event.preventDefault();
                console.log(answer.value); 
                
            //clears question:
            questionDisplay.innerText = "";
                
                if (answer.value.toLowerCase() === random600Question.answer.toLowerCase()) {
                    scoreSum += parseInt(random600Question.value.substr(1));
                    resultDisplay.innerText = "Correct!";
                    scoreDisplay.innerText = `Your Score: $${scoreSum}`;

                    row600[i].style.backgroundColor = "grey";
                    
                    answer.value = "";

                } else {

                    resultDisplay.innerText = `Incorrect! The correct answer is: ${random600Question.answer}`;
                }
            })
        })
    }

    //$800 row
    for (let i = 0; i < row800.length; i++) {
        row800[i].addEventListener("click", function () {
            let random800Question = groupedData.$800[Math.round(Math.random() * groupedData.$800.length)];
            questionDisplay.innerHTML = `${random800Question.question}`;

            console.log(random800Question.question);
            console.log(random800Question.answer);

            resultDisplay.innerText = "";

            //submit answer
            submitButton.addEventListener("click", function (event) {
                event.preventDefault();
                console.log(answer.value); 
                
            //clears question:
            questionDisplay.innerText = "";
                
                if (answer.value.toLowerCase() === random800Question.answer.toLowerCase()) {
                    scoreSum += parseInt(random800Question.value.substr(1));
                    resultDisplay.innerText = "Correct!";
                    scoreDisplay.innerText = `Your Score: $${scoreSum}`;

                    row800[i].style.backgroundColor = "grey";
                    
                    answer.value = "";

                } else {

                    resultDisplay.innerText = `Incorrect! The correct answer is: ${random800Question.answer}`;
                }
            })
        })
    }



}

readJeopardyData();


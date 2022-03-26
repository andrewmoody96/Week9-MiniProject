const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = ({
  name,
  location,
  email,
  github,
  linkedin,
}) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body style="background-color: cornflowerblue">
   <div class="jumbotron jumbotron-fluid primary"> 
       <div class="container">
       <img src="./blank.png" class="img-thumbnail" style="width: 200px; height: 200px; border-radius: 50%;" alt="blank image">
        <h1 class="display-4" style="font-family: 'Josefin Sans', sans-serif;" > My name is ${name}</h1>
        <p class="lead" style="font-family: 'Josefin Sans', sans-serif; color: blue;">I am from ${location}</p>
        <ul class="list-group" style="font-family: 'Josefin Sans', sans-serif; color: blue;">
        <li class="list-group-item"style="font-family: 'Josefin Sans', sans-serif; color: blue;">My Github link is ${github}</li>
        <li class="list-group-item"style="font-family: 'Josefin Sans', sans-serif; color: blue;">My Linkedin link is ${linkedin}</li>
        <li class="list-group-item"style="font-family: 'Josefin Sans', sans-serif; color: blue;">My email is ${email}</li>
        </ul>
        </div>
    </div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "Where are you from?",
      name: "location",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your LinkedIn?",
      name: "linkedin",
    },
    {
      type: "input",
      message: "What is your GitHub?",
      name: "github",
    },
  ])

  .then((response) => {
    console.log(response);
    let html = generateHTML(response);
    // fs.writeFile('index2.html', JSON.stringify(response),(err) =>
    fs.writeFile("index2.html", html, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

// JavaScript 1
// Module Assignment 1
// 29.3.2020

// Question 1
var cat = {
    complain: function () {
        console.log("Meow!");
    }
};

// Question 2
var heading = document.querySelector("h3");

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.classList.add("subheading");

// Question 5
var paragraphs = document.querySelectorAll("p");

// Question 6
var resultsContainer = document.querySelector("div.results");
resultsContainer.innerHTML = "<p>New paragraph</p>";

// Question 7
function catNames (catArray) {
    for(let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
}

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

catNames(cats);

// Question 8
function catNames (catArray) {
    let catHTML = "";

    for(let i = 0; i < catArray.length; i++) {
        catHTML += `<div>
        <h5>${catArray[i].name}</h5>
        <p>${catArray[i].age}</p>
        </div>`
    }

    return catHTML
}
console.log(catNames(cats));

// Question 9
resultsContainer.innerHTML = catNames(cats);

// Question 10
function catNames (catArray) {
    let catHTML = "";

    for(let i = 0; i < catArray.length; i++) {

        let catAge = "Age uknown";

        if(catArray[i].age) {
            catAge = catArray[i].age;
        }

        catHTML += `<div>
        <h5>${catArray[i].name}</h5>
        <p>${catAge}</p>
        </div>`
    }

    return catHTML
}
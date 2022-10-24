"use strict";
// const newBookForm = document.getElementById('form-new-book');
const title = document.getElementById('title');
const author = document.getElementById('author');
const description = document.getElementById('description');
const pages = document.getElementById('pages');
const submit = document.getElementById('submit-book-btn');

function getFormVal(e) {
 e.preventDefault();
 let newBook = {};
// newBook.id =  Math.floor(Math.random() * 500);
newBook.title = title.value;
newBook.author = author.value;
newBook.description = description.value;
newBook.pages = pages.value;
//  console.log(titleVal)
//  console.log(authorVal)
//  console.log(descriptionVal)
//  console.log(pagesVal)
console.log(newBook)

postBook(newBook)

}


function postBook(obj) {
    const options = {
        method: 'POST',
        headers: 
        {
        Accept: "application/json",
        "Content-Type": "application/json"
        
        },
        body: JSON.stringify(obj),
        
    };
    
    const url = 'http://localhost:3000/library'
    
    fetch(url,options)
        .then(response => {
            response.text()
                .then(function (text) {
                    console.log(text);
                })
        })
    
}
submit.addEventListener('click', getFormVal)
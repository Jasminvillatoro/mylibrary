"use strict";
fetch('/library.JSON')
.then(res => res.json())
.then(books => {
    console.log(books.library)
    const libraryArr = books.library;
    displayBooks(libraryArr)
})

function displayBooks(arr) {
    console.log(arr)
    const booksCnt = document.getElementById('books-cnt')
    arr.map(book => {
        const card = `
            <div class="book-card">
            <img class="book-cover" src="${book.imageUrl}" alt="book cover" width="120" height="200">
                <h2>Title: ${book.title}</h2>
                <h3> Author: ${book.author} </h3>
                <p> ${book.description}</p>
                <p> Pages: ${book.pages}</p>
            </div>`

    booksCnt.insertAdjacentHTML("beforeend", card)
    })
}
 
 
 
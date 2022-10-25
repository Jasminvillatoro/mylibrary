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
                <h2 class="title">Title: ${book.title}</h2>
                <h3 class="author"> Author: ${book.author} </h3>
                <p class="description"> ${book.description}</p>
                <h3 class="pages"> Pages: ${book.pages}</h3>
            </div>`

    booksCnt.insertAdjacentHTML("beforeend", card)
    })
}
 
 
 
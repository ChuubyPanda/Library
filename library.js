let myLibrary = [];

const add = document.querySelector('.add');
const addBook = document.querySelector('.add_book');
const exit = document.querySelector('.exitButton');
const submit = document.querySelector('.submit');
const grid = document.querySelector('.grid');

function Book(author, title, numberOfPages) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function display(){
}
kenrich = new Book("Kenrich Huynh", "HOW TO WIN ANY GAME IN TFT", 100);
add.addEventListener('click', function(){
    addBook.classList.add("adding_book");
});
exit.addEventListener('click', function(){
    addBook.classList.remove("adding_book");
})
submit.addEventListener('click', function(){
    const x = getBookFromInput();
    addBookToLibrary(x)
    const book = document.createElement('div')
    book.classList.add('.book');
    grid.appendChild(book);
})

function getBookFromInput(){
    const title = document.querySelector('.b-title').value;
    const author = document.querySelector('.b-author').value;
    const pages = document.querySelector('.b-nbr_of_pages').value;

    return Book(title,author,pages);
}
addBookToLibrary(kenrich);

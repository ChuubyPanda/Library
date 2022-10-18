let myLibrary = [];

function Book(author, title, numberOfPages) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function display(){
    myLibrary.forEach(element => {
        console.log(element.author);
        console.log(element.title);
        console.log(element.numberOfPages);
        });
}
kenrich = new Book("Kenrich Huynh", "HOW TO WIN ANY GAME IN TFT", 100);
addBookToLibrary(kenrich);
display();
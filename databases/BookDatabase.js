class BookDatabase
{
    constructor() 
    {
        this.books = [];
        this.currentId = 0;
    }

    create(title, author, bookReference)
    {
        this.books.push(new Book(title, author, bookReference, this.currentId ));
        this.currentId++;
    }

    readById(bookId)
    {
        return this.books.find(book => book.id == bookId);
    }

    readByReference(bookReference)
    {
        return this.books.find(book => book.bookReference == bookReference);
    }

    update(title, author, bookReference, bookId)
    {
        let index = this.books.findIndex(book => book.id == bookId);
        if(index != -1)
        {
            this.books[index] = new Book(title, author, bookReference, bookId)
        }
    }

    delete(bookId)
    {
        let index = this.books.findIndex(book => book.id == bookId);
        if(index != -1)
        {
            this.books.splice(index,1);
        }
    }
}

class Book
{
    constructor (title, author, bookReference, id)
    {
        this.title = title;
        this.author = author;
        this.bookReference = bookReference;
        this.id = id;
    }
}

module.exports = BookDatabase
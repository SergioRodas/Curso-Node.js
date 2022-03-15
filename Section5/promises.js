// Callbacks
const booksDB = [
    {
        id: 1,
        title: "Clean Code",
    },
    {
        id: 2,
        title: "The pragmatic programmer",
    },
    {
        id: 3,
        title: "Web Development with Node.js",
    }
];

function getBookByID(id) {
    return new Promise((resolve, reject) => {
        const book = booksDB.find((book) => book.id === id);
        if (!book) {
            const error = new Error;
            error.message = 'Book not found!';
            return reject(error);
        }

        resolve(book);
    })
}

getBookByID(1).then(book => {
    console.log(book);
}).catch(error => {
    console.log(error.message);
})
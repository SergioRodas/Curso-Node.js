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

async function getBookByID(id) {
    const book = booksDB.find((book) => book.id === id);
    if (!book) {
        const error = new Error;
        error.message = 'Book not found!';
        throw error;
    }

    return book;
}

async function main () {
    try {
        const book = await getBookByID(1);
        console.log(`El título del libro es '${book.title}'.`);
    } catch (ex) {
        console.log(ex.message);
    }

}

main();
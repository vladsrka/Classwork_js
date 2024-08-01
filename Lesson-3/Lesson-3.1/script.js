const library = [
    {
        author: "Vasya",
        year: 1920,
        title: "Hi",
    },
    {
        author: "Vlad",
        year: 1974,
        title: "Hello",
    },
    {
        author: "Tanya",
        year: 1899,
        title: "Work",
    },
    {
        author: "Andrey",
        year: 1950,
        title: "Hi",
    },
    {
        author: "Vika",
        year: 1740,
        title: "Start",
    },
    {
        author: "Sasha",
        year: 1308,
        title: "Bye",
    },
]

const getBookTitle = (title) => {
    return library.find((book) => book.title.includes(title));
};

console.log(getBookTitle("Work"))


const getBookAutor = (author) => {
    return library.find((book) => book.author.includes(author));
};

console.log(getBookAutor("Vika"))


// getBookTitle("");
// getBookAutor("");

// removeBookByTitle("");
// removeBookByAutor("");


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
        author: "Tanya",
        year: 1992,
        title: "Work2",
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

// 
const getBookTitle = (title) => {
    return library.find((book) => book.title.includes(title));
};

console.log(getBookTitle("Work"));

// 
const getBooksTitle = (title) => {
    return library.filter((book) => book.title.includes(title));
};

console.log(getBooksTitle("Work"));

// 
const getBookAutor = (author) => {
    return library.find((book) => book.author.includes(author));
};

console.log(getBookAutor("Vika"));


// 
const removeBookByTitle = (title) => {
    const index = library.findIndex((book) => book.title === title);

    if (index !== -1) {
        library.splice(index, 1);
    }

    return library;
};

console.log(removeBookByTitle("Work"));
// getBookTitle("");
// getBookAutor("");

// removeBookByTitle("");
// removeBookByAutor("");


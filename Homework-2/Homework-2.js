const books = [
    {name: 'Kitap 1', author: 'Yazar 1', year: 2000},
    {name: 'Kitap 2', author: 'Yazar 2', year: 2001},
    {name: 'Kitap 3', author: 'Yazar 3', year: 2002},
    {name: 'Kitap 4', author: 'Yazar 4', year: 2003},
    {name: 'Kitap 5', author: 'Yazar 5', year: 2004}
];

const listbook = () => {
    books.map(book => {
        console.log(`Kitap Adı: ${book.name} | Yazar Adı: ${book.author} | Basım Yılı: ${book.year}`);
    });
};

const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        reject('Bir hata oluştu');
    });
    return promise1;
};

async function showsBooks() {
    try {
        await addBook({name: 'Kitap 6', author: 'Yazar 6', year: 2005});
        console.log('Veri eklendi. Yeni Liste:')
        listbook();
    }
    catch (err){
        console.log(err);
    }
};

listbook();
showsBooks();
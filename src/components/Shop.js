import { useState, useEffect } from 'react';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://fakerapi.it/api/v1/books?_quantity=9');
    const books = await data.json();
    console.log(books.data);
    setBooks(books.data);
  }

  return (
    <div className='shop-container'>
      <h1>Shop</h1>
      <div className='books-container'>
        {books.map((book) => (
          <div key={book.isbn} className='book-container'>
            <img src={book.image} alt='some book' />
            <h2>{book.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop;

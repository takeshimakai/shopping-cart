import { useState, useEffect } from 'react';

const Shop = (props) => {
  const { addToCart } = props;

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://fakerapi.it/api/v1/books?_quantity=9');
    const books = await data.json();
    setBooks(books.data.map((book) => (
      {
        ...book,
        price: Math.floor(Math.random() * Math.floor(100))
      }))
    )
  }

  return (
    <div className='shop-container'>
      <h1>Shop</h1>
      <div className='books-container'>
        {books.map((book) => (
          <div key={book.isbn} id={book.isbn} className='book-container'>
            <img src={book.image} alt='some book' />
            <h2>{book.title}</h2>
            <p>${book.price}</p>
            <button type='button' onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop;

import React, { useState, useEffect } from 'react';

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
    <div className='shop-container main-container'>
      <h1>Shop</h1>
      <div className='books-container'>
        {books.map((book) => {
          const quantity = React.createRef();
          return (
            <div key={book.isbn} id={book.isbn} className='book-container'>
              <img src={book.image} alt='some book' />
              <h2>{book.title}</h2>
              <p>${book.price}</p>
              <label className='quantity'>
                Quantity:
                <input
                  ref={quantity}
                  className='quantity-input'
                  type='number'
                  defaultValue='1'
                  min='1'
                />
              </label>
              <button
                className='add-btn'
                type='button'
                onClick={(e) => {
                  const button = e.target;
                  addToCart(book, quantity);
                  button.textContent = 'Added!';
                  button.disabled = true;
                  setTimeout(() => {
                    button.textContent = 'Add to Cart';
                    button.disabled = false;
                  }, 800);
                }}
              >
                Add to Cart
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Shop;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../index.css';

let numCount;
class SpecificBook extends React.Component {
  constructor(props) {
    super(props);

    // Знаходимо передані значення книги з локального стейту
    const storedBooks = localStorage.getItem('books');
    const booksInState = storedBooks ? JSON.parse(storedBooks) : {};
    const bookInState = booksInState[this.props.book.title] ? booksInState[this.props.book.title] : 0;

    this.state = {
      bookQuantity: bookInState
    };
  }

  componentDidMount() {
    numCount = document.getElementById('num_count');
    let plusBtn = document.getElementById('button_plus');
    let minusBtn = document.getElementById('button_minus');
    let addToCartBtn = document.querySelector('button.add-to-cart');

    if (numCount && plusBtn && minusBtn && addToCartBtn) {
      const addOrSubtract = (bookQuantity, operation) => {
        if (operation === '+') {
          bookQuantity = bookQuantity + 1;
        } else if (operation === '-') {
          bookQuantity = bookQuantity - 1;
        }
        // Перевірка на неЧисло або текстове значення
        if (isNaN(bookQuantity) || bookQuantity === '') {
          alert('Неприпустиме значення');
          return;
        }
        if (bookQuantity >= 42 || bookQuantity <= 0) {
          alert('Неприпустиме значення');
          return;
        }
        numCount.value = bookQuantity;
      };

      plusBtn.onclick = function () {
        let bookQuantity = parseInt(numCount.value);
        addOrSubtract(bookQuantity, '+');
      }
      minusBtn.onclick = function () {
        let bookQuantity = parseInt(numCount.value);
        addOrSubtract(bookQuantity, '-');
      }
      // Додавання книги до кошика
      addToCartBtn.onclick = function () {
        let bookQuantity = parseInt(numCount.value);
        // Перевірка на неЧисло або текстове значення
        if (isNaN(bookQuantity) || bookQuantity === '') {
          alert('Неприпустиме значення');
          return;
        }
        if (bookQuantity >= 42 || bookQuantity <= 0) {
          alert('Неприпустиме значення');
          return;
        }
        // Змінюємо значення книги в локальному стейті
        let storedBooks = localStorage.getItem('books');
        let booksInState = storedBooks ? JSON.parse(storedBooks) : {};
        booksInState[this.props.book.title] = bookQuantity;
        localStorage.setItem('books', JSON.stringify(booksInState));

        alert('Книга додана до кошика');
      }.bind(this);
    }
  }

  render() {
    const bookImage = this.props.book.image ? this.props.book.image : './images/no_photo.jpg';
    return (
      <div>
        <Header />
        <Navbar />
        <div className='book'>
          <h2>{this.props.book.author}</h2>
          <b>{this.props.book.price}$</b>
          <img src={bookImage} alt="book" />
          <h2>{this.props.book.title}</h2>
          <p>{this.props.book.shortDescription}</p>
          <p>{this.props.book.description}</p>
          <div className='add-to-cart'>+</div>
        </div>
          {/* кількість товару */}
          <div className="col-md-4">
            <aside className="aside-block">
              <div>
              <p className="price">Price, $<span>{this.props.book.price}</span></p>
                <div className="input-group quantity_goods">
                  <span className="count">Count</span>
                  <input
                    type="number"
                    step="1"
                    min="1"
                    max="42"
                    id="num_count"
                    name="quantity"
                    value={this.state.bookQuantity}
                    title="Qty"
                  />
                  <input type="button" value="-" id="button_minus" />
                  <input type="button" value="+" id="button_plus" />
                </div>
              </div>

              <div className="price">
                Total Price <span className="total-price">{this.props.book.price * this.state.bookQuantity}</span>
              </div>
              <label for="add-to-cart">
                <button
                  type="submit"
                  tittle="Add to cart"
                  className="add-to-cart"
                >
                  Add to cart
                </button>
              </label>
            </aside>
          </div>
          <Footer />
      </div>
    ); 
  };
}
export default SpecificBook;
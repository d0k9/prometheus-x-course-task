import React from 'react'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchTerm: '',
      priceFilter: ''
    };
  }
componentDidMount() {
    fetch('https://run.mocky.io/v3/adee05a7-8b74-40f8-b3c1-a98c7a0ab8de')
      .then(res => res.json())
      .then(data => this.setState({ books: data.books }));
  }
  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handlePriceFilter = (event) => {
    this.setState({ priceFilter: event.target.value });
  }

  render() {
    let filteredBooks = this.state.books.filter(book => { 
      return book.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    });
    if(this.state.priceFilter !== '') {
      // eslint-disable-next-line  
      filteredBooks = filteredBooks.filter(book => {
            if(this.state.priceFilter === '0-15') {
                return book.price > 0 && book.price < 15;
            } else if (this.state.priceFilter === '15-30') {
                return book.price >= 15 && book.price < 30;
            } else if (this.state.priceFilter === '30-above') {
                return book.price >= 30;
            }
        });
    }
    return (
      <div>
        <Header />
        <div>
        <input
          type="text"
          placeholder="Введіть назву книги"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <select value={this.state.priceFilter} onChange={this.handlePriceFilter}>
            <option value="">Всі</option>
            <option value="0-15">до 15$</option>
            <option value="15-30">від 15$ до 30$</option>
            <option value="30-above">дорожче 30$</option>
        </select>
        </div>
        {filteredBooks.length && filteredBooks.map(book => (
          <div key={book.id} style={{display: 'inline-flex', flexWrap: 'wrap', width: '30%'}}>
            <h2>{book.author}</h2>
            <p>{book.price}$</p>
            <img src={book.image || './images/no_photo.jpg'} alt={book.title} /> 
            <h2>{book.title.length > 24 ? book.title.slice(0, 24) + '...' : book.title}</h2>
            <p style={{fontWeight: 'bold'}}>{book.shortDescription}</p>
            <p>{book.description}</p>
            <button type='button' className="btn btn-info" onClick={() => window.location.href=`/SpecificBook/${book.id}`}>View</button>

          </div>
          
        ))}
        <Footer />
      </div>
    );
  }
}
export default BookList;
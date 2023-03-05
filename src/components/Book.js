import React, { Component } from 'react'

export class Book extends Component {
  render() {
    return (
      <div className='book'>
        <h2>{this.props.book.author}</h2>
        <b>{this.props.book.price}$</b>
        <img>{this.props.book.image}</img>
        <h2>{this.props.book.title}</h2>
        <p>{this.props.book.shortDescription}</p>
        <p>{this.props.book.description}</p>
        <div className='add-to-cart'>+</div>
        </div>
    )
  }
}
export default Book;
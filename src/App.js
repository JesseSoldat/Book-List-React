import React, { Component } from 'react';
import './App.css';
import BookList from './containers/book-list';
import BookDetail from './containers/book-details';

class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
        <BookDetail/>
      </div>
    );
  }
}

export default App;

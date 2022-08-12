import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => (
  <>
    <Book
      title="Hunger Games"
      author="Suzanne Collins"
      status="24%"
      chapter="chapter 8"
    />
    <Book
      title="The Adventure Of Sherlocks Holmes"
      author="Sir Author Conan Doyle"
      status="75%"
      chapter="chapter 9"
    />
    <Book
      title="Mind Games"
      author="Maddy"
      status="50%"
      chapter="chapter 10"
    />
    <AddBook />
  </>
);

export default Books;

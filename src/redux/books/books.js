import axios from 'axios';

const ADD_BOOK = '/bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const BaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
export const res = async () => {
  const books = await axios.post(BaseUrl);
  return console.log(books.data);
};
res();

const initialState = [
  {
    id: '1',
    title: 'The Adventure Of Sherlocks Holmes',
    author: 'Sir Author Conan Doyle',
  },
  {
    id: '2',
    title: 'Robinson Crusoe',
    author: 'Daniel Defoe',
  },
  {
    id: '3',
    title: 'Around The World In 80 Days',
    author: 'Jules Verne',
  },
];

export const addBookAction = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBookAction = (book) => ({
  type: REMOVE_BOOK,
  book,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export default booksReducer;

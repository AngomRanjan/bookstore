import axios from 'axios';

const ADD_BOOK = '/bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';

const BaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ts125qXKuEDru2Y4QhZP/books';

const initialState = [];

export const addBookAction = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBookAction = (book) => ({
  type: REMOVE_BOOK,
  book,
});

const fetchBook = (book) => ({
  type: FETCH_BOOK,
  book,
});

export const fetchBookApiAction = () => async (dispatch) => {
  const books = await axios.get(BaseUrl);
  const booksFetched = Object.entries(books.data).map((item) => {
    const { title, author } = item[1][0];
    return { id: item[0], title, author };
  });
  dispatch(fetchBook(booksFetched));
};

export const addBookApiAction = (book) => async (dispatch) => {
  const { id, title, author } = book;
  const newBook = {
    item_id: id,
    title,
    author,
    category: 'Fiction',
  };
  await axios.post(BaseUrl, newBook);
  dispatch(addBookAction(book));
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    case FETCH_BOOK:
      return action.book;
    default:
      return state;
  }
};

export default booksReducer;

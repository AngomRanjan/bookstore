import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookApiAction } from '../redux/books/books';

const Book = ({ book }) => {
  const {
    id,
    title,
    author,
    category,
  } = book;

  const dispatch = useDispatch();
  const removeBookStore = () => {
    dispatch(removeBookApiAction(id));
  };
  return (
    <>
      <div className="book row container mx-auto mb-4 px-4 py-3 bg-white d-flex align-items-between justify-content-between">
        <div className="col-5 m-0 p-0">
          <div className="mx-0 mb-2 p-0">
            <p className="m-0 px-0 pt-3 pb-1 text-1 font-style-1 category">{category}</p>
            <h4 className="m-0 px-0 py-1 text-2 font-style-1">{title}</h4>
            <p className="m-0 p-0 py-1 text-3 font-style-1">{author}</p>
          </div>
          <div className="d-flex align-items-center justify-content-start m-0 px-0 py-2">
            <button
              type="button"
              className="btn1 border-end pe-3 py-0 m-0 text-3 font-style-1"
            >
              Comments
            </button>
            <button
              type="button"
              className="btn1 border-end px-3 py-0 m-0 text-3 font-style-1"
              onClick={removeBookStore}
            >
              Remove
            </button>
            <button
              type="button"
              className="btn1 border-start px-3 py-0 m-0 text-3 font-style-1"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="row col-7 m-0  p-0 d-flex align-items-center justify-content-between">
          <div className="border-end col-6 m-0 ps-4 d-flex align-items-center justify-content-start">
            <div>
              <div className="circle-bar" />
            </div>
            <div className="m-0 ps-4">
              <p className="p-0 m-0 text-5 font-style-1">0%</p>
              <p className="p-0 m-0 text-6 font-style-1">completed</p>
            </div>
          </div>
          <div className="col-6 m-0 py-0 ps-5">
            <p className="m-0 p-0 text-4 font-style-1">CURRENT CHAPTER</p>
            <p className="mx-0 my-2 p-0 text-7 font-style-1">chapter</p>
            <button type="button" className="btn">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;

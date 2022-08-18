import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  const updateCategories = (event) => {
    event.preventDefault();

    dispatch(checkStatusAction());
  };

  return (
    <>
      <div className="container p-0">
        <button type="button" className="btn font-style-1" onClick={updateCategories}>
          Check Status
        </button>
        <h4 className="pt-5 text-5 font-style-1">{status}</h4>
      </div>
    </>
  );
};
export default Categories;

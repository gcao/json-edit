import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { updateData } from '../slice';
import { hide, selectEditing } from './slice';

export default function EditPopup({children}: any) {
  const dispatch = useDispatch();
  const editing = useSelector(selectEditing);

  const closeHandler = () => {
    hide();
  };
  const saveHandler = () => {
    hide();
    dispatch(updateData(""));
  };

  return (
    <div className={classNames("modal", {"is-active": editing})}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button className="delete" aria-label="close" onClick={closeHandler}></button>
        </header>
        <section className="modal-card-body">
          {children}
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={saveHandler}>Save changes</button>
          <button className="button" onClick={closeHandler}>Cancel</button>
        </footer>
      </div>
    </div>
  );
}

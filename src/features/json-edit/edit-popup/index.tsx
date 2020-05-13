import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hide, selectEditing } from './slice';

export default function EditPopup({onSave, children}: any) {
  const dispatch = useDispatch();
  const editing = useSelector(selectEditing);

  const closeHandler = () => {
    dispatch(hide());
  };
  const saveHandler = () => {
    dispatch(hide());
    onSave();
  };

  return (
    <div className={classNames("modal", {"is-active": editing})}>
      <form onSubmit={saveHandler}>
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
            <button type="submit" className="button is-success">Save changes</button>
            <button type="button" className="button" onClick={closeHandler}>Cancel</button>
          </footer>
        </div>
      </form>
    </div>
  );
}

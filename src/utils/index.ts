import JsonPath from '../json-path';
import { setPath } from '../actions';

export function createMouseOutHandler(dispatch: any) {
  return (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setPath(new JsonPath([])));
  };
}

export function createMouseOverHandler(dispatch: any, path: any, pathUnderMouse: any) {
  return (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (path && pathUnderMouse && path.toString() !== pathUnderMouse.toString()) {
      dispatch(setPath(path));
    }
  };
}
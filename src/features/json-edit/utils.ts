import { setPath } from './slice';

export function stringify(obj: any) {
  return JSON.stringify(obj, null, 2);
}

export function createMouseOverHandler(dispatch: any, path: any, pathUnderMouse: any) {
  return (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (!pathUnderMouse || path.toString() !== pathUnderMouse.toString()) {
      dispatch(setPath(path));
    }
  };
}
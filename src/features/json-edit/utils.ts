import { clearPath, setPath } from './slice';

export function createMouseOutHandler(dispatch: any) {
  return (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(clearPath());
  };
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
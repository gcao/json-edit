import { setPath } from './slice';

export function createMouseOverHandler(dispatch: any, path: any, pathUnderMouse: any) {
  return () => {
    if (!pathUnderMouse || path.toString() !== pathUnderMouse.toString()) {
      dispatch(setPath(path));
    }
  };
}
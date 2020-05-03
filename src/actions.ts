export let SET_PATH    = 'SET_PATH';
export let UPDATE_JSON = 'UPDATE_JSON';
export let UPDATE_DATA = 'UPDATE_DATA';
export let UPDATE_PROP_NAME = 'UPDATE_PROP_NAME';

export function setPath(path: any) {
    return {
        type: SET_PATH,
        path: path
    };
}

export function updateJSON(json: any) {
    return {
        type: UPDATE_JSON,
        json: json
    };
}

export function updateData(path: any, value: any) {
    //console.warn('UPDATE', path, value);
    return {
        type: UPDATE_DATA,
        path: path,
        value: value
    };
}

export function updatePropName(path: any, oldName: any, newName: any) {
    //console.warn('UPDATE', path, value);
    return {
        type: UPDATE_PROP_NAME,
        path: path,
        oldName: oldName,
        newName: newName
    };
}

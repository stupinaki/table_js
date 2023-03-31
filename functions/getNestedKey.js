
export function getNestedKey(obj, path) {
    const subPath = path.split('.');
    let result = obj;
    for (let i = 0; i < subPath.length; i++) {
        result = result[subPath[i]];
    }
    return result;
}

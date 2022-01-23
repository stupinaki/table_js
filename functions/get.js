

//получаем в переданном объекте свойство(значение по ключу) на основании пути, вне зависимости от его вложенности
//path - это строка типа "a.b.c", где каждая буква это элемент пути
export function get(obj, path) {
    const subPath = path.split('.');
    let result = obj;
    for (let i = 0; i < subPath.length; i++) {
        result = result[subPath[i]];
    }
    return result;
}

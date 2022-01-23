
//получает объект (строка таблицы), путь, новое значение
//доходит до предпоследнего элемента пути и перезаписывает значение после него на новоеж
export function set(object, path, value){
    const subPath = path.split('.');
    let target = object;
    for(let i = 0; i < subPath.length - 1; i++){
        target = target[subPath[i]];
    }
    target[subPath[subPath.length-1]] = value;
}
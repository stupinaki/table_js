
//функция получает имя тега и его содержадение, генерирует html эллемент
export function createElementHTML(tagName, content){
    const elementByTagName = document.createElement(tagName);
    elementByTagName.innerHTML = content;
    return elementByTagName;
}

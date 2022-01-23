
//получат html эллемент и id элемента, в который необходимо вставить данный элемент
export function insertElementInDOM(contentToInsert, id){
    const targetElement = document.getElementById(id);
    if (!targetElement) {
        throw new Error(`cannot find target element to insert with id: ${id}`);
    }
    targetElement.append(contentToInsert);
}

//получат html эллементы и их id в виде массива, итерируясь по которому вставляет елементы в таблицу
export function insertsElementInDOM(array, id){
    const targetElement = document.getElementById(id);
    if (!targetElement) {
        throw new Error(`cannot find target element to insert with id: ${id}`);
    }
    array.forEach((item) => {
        targetElement.append(item);
    })
}
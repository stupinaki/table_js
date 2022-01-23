
// создаем массив с заголовками таблицы, представленными в виде объекта.
export const columns = [
    {
        title: 'Имя',
        id: 'name.firstName',
        direction: '',
        visible: true,

    },
    {
        title: 'Фамилия',
        id: 'name.lastName',
        direction: '',
        visible: true,

    },
    {
        title: 'Описание',
        id: 'about',
        direction: '',
        visible: true,
        render(content){
            const td = document.createElement('td');
            const divContent = document.createElement('div');
            // const divDots = document.createElement('div');
            divContent.style = "max-height: 3rem;" +
                            "overflow: hidden; " +
                            "display: -webkit-box; " +
                            "-webkit-line-clamp: 2; " +
                            "-webkit-box-orient: vertical";
            divContent.innerHTML = content;
            td.append(divContent);
            return td;
        },
    },
    {
        title: 'Цвет глаз',
        id: 'eyeColor',
        direction: '',
        visible: true,
        render(content){
            const td = document.createElement('td');
            const div = document.createElement('div');
            div.style = `background-color: ${content}; 
                        border-radius: 50%; 
                        height: 4rem; 
                        width: 4rem`;
            td.append(div);
            return td;
        },
    },
]






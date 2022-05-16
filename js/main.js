import arr from './data.js'
import { name, surname, group, gender, search, listGroup } from './library.js'
let storage = window.localStorage
let list = storage.getItem('ism')

let data = list ? JSON.parse(list) : arr

function start(ism, familiya, guruh, jins) {
    let LI = document.createElement('li')
    LI.setAttribute('class', 'list-group-item d-flex')

    let DIV = document.createElement('div')
    DIV.setAttribute('class', 'ms-4 me-auto')

    let h3 = document.createElement('h3')
    h3.textContent = ism + ' ' //probel berish
    h3.textContent += familiya //familiya oldiga keladi

    let h4 = document.createElement('span')
    span.textContent = guruh

    let p = document.createElement('p')
    p.textContent = jins


    DIV.append(h3)
    DIV.append(h4)
    LI.append(DIV)
    LI.append(p)

    return LI
}

function get() {
    if (name.value.trim() == '' || surname.value.trim() == '' || group.value.trim() == '') {
        alert('PLEASE fill the list')
        return;
    }
    return {
        ism: name.value,
        fam: surname.value,
        guruh: group.value,
        jins: gender.value,
    }
}

search.addEventListener("click", () => {
    let getImp = get()
    data.push(getImp)

    storage.setItem('ism', JSON.stringify(data))
    listGroup.prepend

    let items = start(getImp.name, getImp.surname, getImp.group, getImp.gender)
    listGroup.prepend(items)
    console.log(data);
    name.value == ''
    surname.value == ''
    group.value == ''

})
JSON.parse(storage.getItem('name')).forEach(nick => {
    let items = start(nick.ism, nick.fam, nick.guruh, nick.jins)
    listGroup.prepend(items)
})
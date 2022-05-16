import { name, surname, group, gender } from library.js

export function get(ism, familiya, guruh, jins) {
    return { ism: name.value, familiya: surname.value, guruh: group.value, jins: gender.value }
}
let person = {
    name: 'zs',
    age: 20
}

let p = {}
// Vue2中的响应式
const keys = Object.keys(person)
keys.forEach(item => {
    Object.defineProperty(p, item, {
        get() {
            console.log(`有人获取了${item}属性`)
            return person[item]
        },
        set(value) {
            console.log(`有人修改了${item}属性`)
            person[item] = value
        }
    })
})

console.log(person)

console.log(p.name)
console.log(p.age)
p.name = 'ls'
p.age = 21

console.log(person)

/*console.log(person['name'])*/

// Vue3中的响应式

/*
const p = new Proxy(person, {
    get(target, propName) {
        console.log(`有人读取了p身上的${propName}属性`)
        return target[propName]
    },
    set(target, propName, value) {
        console.log(`有人修改了p身上的${propName}属性，我要去更新界面了！`)
        target[propName] = value
    }
})

console.log(person)

p.name = 'ls'

console.log(person)
*/

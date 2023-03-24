const todoListId_1 = "23hf-76jh"
const todoListId_2 = "98kh-md09"

const todoLists = [
    {
        id: todoListId_1,
        title: "What to learn",
        filter: "all",
    },
    {
        id: todoListId_2,
        title: "What to buy",
        filter: "all",
    }
]

const tasks = {
    [todoListId_1]: [
        {id: 1, title: "HTML", isDone: false},
        {id: 2, title: "CSS", isDone: false},
        {id: 3, title: "JS/TS", isDone: false},
    ],
    [todoListId_2]: [
        {id: 4, title: "Bread", isDone: false},
        {id: 5, title: "Milk", isDone: false},
        {id: 6, title: "Chicken", isDone: false},
    ]
}
console.log(tasks[todoLists[0].id][1].isDone)

const nums = [2, 4, 6, 3, 5]
nums.reduce((acc, el) => {
    return acc + el
}, 0)

console.log(nums.reduce((acc, el) => acc > el ? acc : el))

const newData = {
    "1": {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    "2": {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    }
}
console.log(newData)

const data = students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {})

console.log(data)

const st20 = students.map(s => ({...s, scores: s.scores + 20}))
console.log(st20)

const st20reduce = students.reduce((acc, el) => {
    const copy = {...el}
    copy.scores = el.scores + 20
    acc.push(copy)
    return acc
}, [])

console.log(st20reduce)

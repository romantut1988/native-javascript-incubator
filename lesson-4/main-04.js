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
console.log(tasks[todoLists[0].id])

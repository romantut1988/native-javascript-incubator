const todoListID_1 = '23ht-83kf'
const todoListID_2 = '89hd-03lj'

const todoLists = [
    {
        id: todoListID_1,
        title: 'What to learn',
        filter: 'all',
        // tasks: [
        //     {id: '57hf', title: 'HTML', iDone: true},
        //     {id: '68ko', title: 'CSS', iDone: true},
        //     {id: '03lk', title: 'REACT', iDone: true},
        // ]
    },
    {
        id: todoListID_2,
        title: 'What to buy',
        filter: 'all',
        // tasks: [
        //     {id: '57hf', title: 'Meat', iDone: true},
        //     {id: '68ko', title: 'Bear', iDone: true},
        //     {id: '03lk', title: 'Milk', iDone: true},
        // ]
    },
]

const tasks = {
    [todoListID_1]: [  // 'todoListID_1' -> '23ht-83kf'
        {id: '57hf', title: 'HTML', iDone: true},
        {id: '68ko', title: 'CSS', iDone: true},
        {id: '03lk', title: 'REACT', iDone: true},
    ],
    [todoListID_2]: [
        {id: '57hf', title: 'Meat', iDone: true},
        {id: '68ko', title: 'Bear', iDone: true},
        {id: '03lk', title: 'Milk', iDone: true},
    ]
}

console.log(tasks[todoListID_1])
console.log(...tasks[todoListID_1].filter(t => t.title === 'HTML'))
console.log([tasks[todoListID_1]])
console.log([...tasks[todoListID_1]] === tasks[todoListID_1])
console.log([...tasks[todoListID_1], {id: '57hf', title: 'Meat', iDone: true}])

console.log({...tasks,
    [todoListID_1]: [
        ...tasks[todoListID_1],
        {id: '57hf', title: 'HTML', iDone: true}
    ]
})

console.log(todoLists)
// reduce
const nums = [1, 2, 3, 4, 5]
console.log(nums.reduce( (sum, el) => sum + el)) // 15

let sum = nums[0]
for (let i = 1; i < nums.length; i++) {
    sum = sum + nums[i]
}

console.log(nums.reduce( (max, el) => max > el ? max: el))

const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 120
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Michell',
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((sum, st) => sum + st.scores, 0))
console.log(students.reduce((best, st) => best.scores >  st.scores ? best: st,))


console.log(students.reduce((arr, st) => {
    return arr.concat({...st, scores: st.scores +10})
}, []))

console.log(students.reduce((data, st) => {
        data[st.name] = [st.age, st.scores, st.isMarried]
    return data
}, {})
)

let data = {}
for (let i = 0; i < students.length; i++) {
    data[students[i].name] = [students[1].age, students[1].scores, students[1].isMarried]
}

const todolistID_1 = "12hf-45jf";
const todolistID_2 = "34sd-00lq";

const todolists = [
    {
        id: todolistID_1,
        title: "What to learn",
        filter: "all",
        // tasks: [
        //     {id: 12, title: "JS", isDone: false},
        //     {id: 13, title: "TS", isDone: false},
        //     {id: 14, title: "HTML", isDone: false},
        // ]
    },
    {
        id: todolistID_2,
        title: "What to buy",
        filter: "all",
        // tasks: [
        //     {id: 22, title: "Beer", isDone: false},
        //     {id: 23, title: "Meat", isDone: false},
        //     {id: 24, title: "Fish", isDone: false},
        // ]
    },
]

const tasks = {
    [todolistID_1]: [
        {id: 12, title: "JS", isDone: false},
        {id: 13, title: "TS", isDone: false},
        {id: 14, title: "HTML", isDone: false},
    ],
    [todolistID_2]: [
        {id: 22, title: "Beer", isDone: false},
        {id: 23, title: "Meat", isDone: false},
        {id: 24, title: "Fish", isDone: false},
    ]
}

console.log(tasks[todolistID_1].find(t => t.id === 12).title);
console.log([...tasks[todolistID_2], {id: 25, title: "Water", isDone: false}]);
console.log(tasks[todolistID_1].map(t => t.title));

const nums = [10, 20, 30] //
console.log(nums.reduce((acc, el) => acc + el, 0));
console.log(nums.reduce((acc, el) => acc > el ? acc : el));

let students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 88
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    },
];

const sts = {
    "1": {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
}

console.log(students.reduce((acc, el) => {
    acc[el.id] = {...el};
    delete acc[el.id].id;
    return acc
}, {}))

console.log(students.reduce((acc, el) => acc + el.age, 0))
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


const boards = [
    {
        title: 'Automation Project',
        created: 12/20/21,
        members: ['Ritik', 'Ankit', 'John', 'Mary', 'Doe'],
        stories: {
            'start': [
                {
                    'title': 'Start Story 1'
                },
                {
                    'title': 'Start Story 2'
                }
                ],
                'inprogress': [
                    {
                    'title': 'In Progeee Story 1'
                },
                {
                    'title': 'In Progress Story 2'
                }
                    ]
        }
    }
]

console.log(boards[0].stories)
console.log("----------")
Object.entries(boards[0].stories).map((obj) => {
    console.log("OBJ Key",obj[0])
     console.log("OBJ Value",obj[1])
})
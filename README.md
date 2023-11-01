input:

[ 
{id: "one", next: "two", value: null}, 
{id: "two", next: "three", value: null}, 
{id: "three", next: null, value: null}, 
];

output:

[ 
    { id: 'one', next: 'two', value: { id: 'two', next: 'three', value: [Object] } },
     { id: 'two', next: 'three', value: { id: 'three', next: null, value: null } }, 
     { id: 'three', next: null, value: null } 
]

interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string
}

const messy: Player = {
    name: 'L Messy',
    club: 'mohamedan',
    salary: 15000,
    wife: 'khatun'
}

const rasel: Player = {
    name: 'rasel',
    club: 'mohamedan',
    salary: 2000,
}

interface Employee {
    name: string,
    cv?: string,
    age: number,
    salary: number
}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number
}

const zuku: Developer = {
    name: 'zukurberg',
    // cv: 'web developer',
    age: 32,
    salary: 15000,
    language: 'javaScript',
    codeEditor: 'vs Code',
    typingSpeed: 55
}




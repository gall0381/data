
import students from '../data/students.js';

let ids = students.map(item => {
    return item.id
})

const courses = [
    { id: 1, code: 'MAT2', title: 'Math', description: 'Math Level 2', url: 'math.gonq.ca', students: ids }, 
    { id: 2, code: 'ENG3', title: 'English', description: 'English Level 3', url: 'eng.gonq.ca', students: ids },
    { id: 3, code: 'SCI2', title: 'Science', description: 'Science Level 2', url: 'sci.gonq.ca', students: ids },
    { id: 4, code: 'ART3', title: 'Art', description: 'Art Level 3', url: 'art.gonq.ca', students: ids },
]

console.log(courses)

export default courses
import bcrypt from 'bcryptjs';

const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name:'Ram',
        email:'ram@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Sham',
        email:'sham@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Ganesh',
        email:'ganesh@example.com',
        password:bcrypt.hashSync('123456',10),
    },
]

export default users
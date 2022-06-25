import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('shub', 5),
    isAdmin: true,
  },
  {
    name: 'akshay',
    email: 'akshay@gmail.com',
    password: bcrypt.hashSync('shub', 5),
  },
  {
    name: 'tushar',
    email: 'tushar@gmail.com',
    password: bcrypt.hashSync('shub', 5),
  },
]

export default users

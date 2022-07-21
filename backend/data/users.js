import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 5),
    isAdmin: true,
  },
  {
    name: 'user',
    email: 'user@gmail.com',
    password: bcrypt.hashSync('123456', 5),
  },
  {
    name: 'akshay',
    email: 'akshay@gmail.com',
    password: bcrypt.hashSync('123456', 5),
  },
]

export default users

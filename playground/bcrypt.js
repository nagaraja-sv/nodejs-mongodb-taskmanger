const bcrypt = require('bcryptjs')
const myFunction = async ()=>{
    const password = 'Spiderman@57'
    const hashedPassword = await bcrypt.hash(password,8)
    console.log(password)
    console.log(hashedPassword)

    const isMatch= await bcrypt.compare('spiderman@57',hashedPassword)
    console.log(isMatch)
}

myFunction()
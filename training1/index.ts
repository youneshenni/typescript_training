
import scripts from './scripts/index.js';

const newDatabase = scripts.addToDatabase({
    name: "New",
    email: "new@gmail.com"
})
const finalDatabase = scripts.removeFromDatabase("youn.henni@gmail.com")

console.log(finalDatabase)
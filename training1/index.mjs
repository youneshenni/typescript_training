
import scripts from './scripts/index.mjs';

const newDatabase = scripts.addToDatabase({
    name: "New",
    email: "new@gmail.com"
})
const finalDatabase = scripts.removeFromDatabase("youn.henni@gmail.com")

console.log(finalDatabase)
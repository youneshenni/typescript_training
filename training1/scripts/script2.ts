import originalDatabase from './database'
function removeFromDatabase(database: typeof originalDatabase, email: typeof originalDatabase[number]['email']) {
    return database.filter(({email: emailFound}) => emailFound !== email)
}

export default removeFromDatabase
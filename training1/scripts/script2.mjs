function removeFromDatabase(database, email) {
    return database.filter(({email: emailFound}) => emailFound !== email)
}

export default removeFromDatabase
import originalDatabase from "./database";
function addToDatabase(database: typeof originalDatabase, object: typeof originalDatabase[number]) {
    return database.concat(object);
}

export default addToDatabase
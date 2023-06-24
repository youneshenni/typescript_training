import * as addToDatabase from './script1.mjs';
import * as removeFromDatabase from './script2.mjs';
import defaultDatabase from './database.mjs';
let database = defaultDatabase;

const scriptWrapper = func => (...params) => {
    database = func(database, ...params);
    return database;
};

const scripts = {addToDatabase:addToDatabase.default, removeFromDatabase:removeFromDatabase.default};

export default Object.keys(scripts).reduce((acc, cur) => ({...acc, [cur]: scriptWrapper(scripts[cur])}), {});


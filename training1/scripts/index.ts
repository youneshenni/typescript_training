import * as addToDatabase from './script1.js';
import * as removeFromDatabase from './script2.js';
import defaultDatabase from './database.js';
let database = defaultDatabase;

const scriptWrapper = func => (...params) => {
    database = func(database, ...params);
    return database;
};

const scripts = {addToDatabase:addToDatabase.default, removeFromDatabase:removeFromDatabase.default};

export default Object.keys(scripts).reduce((acc, cur) => ({...acc, [cur]: scriptWrapper(scripts[cur])}), {} as {[key in keyof typeof scripts]: ReturnType<typeof scriptWrapper>});


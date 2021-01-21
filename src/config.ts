import dotenv from 'dotenv';
import dotenvExpand  from 'dotenv-expand';
import assert from 'assert'

const myEnv = dotenv.config();//con esto lee el .env y busca las variables
dotenvExpand(myEnv);

const { PORT, MONGODB_URI, MONGODB_USER, MONGODB_PASS, MONGODB_DOMAIN, MONGO_DB } = process.env;

assert(PORT, 'PORT IS REQUIRED');
assert(MONGODB_URI, 'MONGODB_URI IS REQUIRED');
assert(MONGODB_USER, 'MONGODB_USER IS REQUIRED');
assert(MONGODB_PASS, 'MONGODB_PASS IS REQUIRED');
assert(MONGODB_DOMAIN, 'MONGODB_DOMAIN IS REQUIRED');
assert(MONGO_DB, 'MONGO_DB IS REQUIRED');


export default {
    mongodbUri: process.env.MONGODB_URI,
    // secretJwt: process.env.SECRET_JWT,
    port:process.env.PORT
}

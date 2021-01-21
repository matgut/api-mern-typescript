"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const dotenv_expand_1 = __importDefault(require("dotenv-expand"));
const assert_1 = __importDefault(require("assert"));
const myEnv = dotenv_1.default.config(); //con esto lee el .env y busca las variables
dotenv_expand_1.default(myEnv);
const { PORT, MONGODB_URI, MONGODB_USER, MONGODB_PASS, MONGODB_DOMAIN, MONGO_DB } = process.env;
assert_1.default(PORT, 'PORT IS REQUIRED');
assert_1.default(MONGODB_URI, 'MONGODB_URI IS REQUIRED');
assert_1.default(MONGODB_USER, 'MONGODB_USER IS REQUIRED');
assert_1.default(MONGODB_PASS, 'MONGODB_PASS IS REQUIRED');
assert_1.default(MONGODB_DOMAIN, 'MONGODB_DOMAIN IS REQUIRED');
assert_1.default(MONGO_DB, 'MONGO_DB IS REQUIRED');
exports.default = {
    mongodbUri: process.env.MONGODB_URI,
    // secretJwt: process.env.SECRET_JWT,
    port: process.env.PORT
};

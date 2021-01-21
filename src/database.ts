import mongoose, {ConnectOptions} from 'mongoose';
import config from './config';


(
    async () => {
       try {
            const mongooseOptions: ConnectOptions  = {//mongoose options es de tipo ConnectOptions
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            };
            const uri : string =  config.mongodbUri!;// ! -> non-null assertion operator, le dice a TypeScript que aunque algo parezca que podría ser nulo, puede confiar en que no
            const db = await mongoose.connect(uri,mongooseOptions);
            console.log('database is connected to:',db.connection.name);
       } catch (error) {
           console.error(error)
       }
    }
)();
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import routes from './src/app.js';
import { swaggerDocumentation } from './swagger.js';

dotenv.config();

const app = express();
const port = process.env.PORT ||3000 ;

app.use(express.json());

mongoose.connect(process.env.MONGO_DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('error',() =>{
console.log("database connection failed");
})

db.once('open',() =>{
    console.log("database connection succefully");
})
const server = app.listen(port, () =>{
    console.log(`server is listenning on port ${port}`);
});
app.use('/api/v1',routes);
app.use('/doc',swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));

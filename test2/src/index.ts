import { app } from './server';
import * as database from './config/database';
import * as env from 'dotenv';

env.config();
database.default.sync();
const port = process.env.SERVER_PORT;
app.listen(port);

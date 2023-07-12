import express from 'express';
import usersRouters from './routes/users.js';

//body parser is a middleware
import bodyParser from 'body-parser';

const app = express();
const PORT =5001;
app.use(bodyParser.json());

app.use('/users', usersRouters );

app.get('/', (req, res) =>   res.send('Hello from BackEnd'));
app.listen(PORT, () => console.log(`Server running on PORT: http://localhost:${PORT}`));
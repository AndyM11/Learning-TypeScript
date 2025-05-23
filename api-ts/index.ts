import express from 'express';
import usersRouter from './users';


const app = express();
app.use(express.json());

app.use('/', usersRouter);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
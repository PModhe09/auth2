const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;

app.use(cors());
// app.use(express.json());
// const db = mysql.createConnection({
//   user: 'root',
//   host: 'localhost',
//   password: 'mayankm698',
//   database: 'form_db',
// });

const itemsRouter = require('./router');

app.use('/api', itemsRouter);

// app.post('/addpassword', (req, res) => {
//   const { password, service } = req.body;

//   db.query(
//     'INSERT INTO PASSWORDS {password,service} VALUES (?,?)',
//     [password, service],
//     (err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send('Operation successfull');
//       }
//     }
//   );
// });

app.listen(PORT, () => {
  console.log('Server is running on PORT no ==>  ', `${PORT}`);
});

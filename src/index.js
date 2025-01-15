import express from 'express';

const PORT = 3000;
const app = express();

const requestValidator = (err , req , res , next) => {
  if(err){
    return res.status(400).send(err);
  }
  next();
}
app.get('/' , requestValidator , (req , res) => {
  return res.send(`<h1>Welcom in ${req.url}</h1>`);
})

app.listen(PORT, () => {
  console.log(`server listen at port ${PORT}`)
})
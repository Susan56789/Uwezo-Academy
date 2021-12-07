const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded());


app.get('https://www.udemy.com/api-2.0/courses', async (req, res) => {
res.setHeader(
        {
            Accept: "application/json, text/plain, */*",
               "Content-Type": "application/json",
               Authorization: 
               "Basic WnNPY0txUnlhVU9WaWx4VFdCSE0yZGo2Uk5BUGdRM05BNzRMbUJlYTpYZlVZUXprazc3T2FmWFJ5bHVONW5RQ1hRNThGeHBtd1NYTE9HaXJQa0hDQ0lBT0N5aVRGYVZYV3htZ1V3YTBtQURab3drc2I4YzEzYVFrblNLWGlKS1ZWMUFqb2t3M3ZQNm13NTU5dXNIYXAxeU9oZFo2VHJQZERnUTlKanF1aA==",
                
             },
          'Content-Type', 'application/json',
          'Access-Control-Allow-Headers','X-Requested-With',
          'Access-Control-Allow-Credentials','true',
          "Access-Control-Allow-Origin", "https://localhost:4200",
         "Access-Control-Allow-Methods", "GET, DELETE, HEAD, OPTIONS",
         
          );
        let result = await(req.headers);
        console.log(result);
  //res.json(result);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
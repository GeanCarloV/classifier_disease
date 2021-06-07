const express = require ('express');
const cors = require ('cors');
const app = express ();

app.use (cors ());
app.use (express.json ({extend: true}));

const port = process.env.port || 4000;

app.use ('/hypertension', require ('./routes/hypertension'));
app.use ('/kidney', require ('./routes/kidney'));

app.listen (port, () => {
  console.log (`The server is working on http://localhost:${port}`);
});

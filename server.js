const express = require('express');

const PORT = 3001;
const app = express();

app.get('/', (req, res) => {
  res.send(
    `<p>DevTek<p>`
  );
});

app.get('/api', (req, res) => {
  res.json({
    term: 'api',
    description:
      'theres nothing here yet go away',
  });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


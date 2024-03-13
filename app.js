const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const search_query = req.query.search_query || "";
  const pattern = /[\(\)']/;

  if (pattern.test(search_query)) {
    res.status(400).send("<h1>400 Forbidden</h1>");
    return;
  }

  res.send(search_query);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// chama express
const express = require('express');

// executa express
const app = express();

// declara porta
const PORT = 3333;
// app escuta porta
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
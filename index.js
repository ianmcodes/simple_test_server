const express = require('express');
const program = require('commander');

const app = express();

program
  .option('-p, --port <number>', 'Port', parseInt)
  .option('-d, --dir <path>', 'Directory')
  .parse(process.argv);

app.use(express.static(program.dir));

app.listen(program.port, () => console.log(`listening on port ${program.port}`));


#!/usr/bin/env node

const express = require('express');
const program = require('commander');

const app = express();

program
  .option('-p, --port <number>', 'Port', parseInt)
  .option('-d, --dir <path>', 'Directory')
  .parse(process.argv);

app.use(express.static(program.dir, {
  setHeaders: (res, path, stat) => {
    if (/\.wasm$/.test(path)) {
      res.set('Content-Type', 'application/wasm');
    }
  }
}));

app.listen(program.port, () => console.log(`listening on port ${program.port}`));


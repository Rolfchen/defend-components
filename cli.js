#!/usr/bin/env node

//Grab args
const [,, ...args] = process.argv;
if (args.length <= 0) {
  console.log("Require directory name");
  return;
}

const dirName = args[0];

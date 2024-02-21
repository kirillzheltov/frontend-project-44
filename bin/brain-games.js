#!/usr/bin/env node
import getName from '../src/cli.js';

const text = 'Welcome to the Brain Games!';
console.log(text);

const name = getName();
console.log(`Hello, ${name}!`);

#!/usr/bin/env node
import { greet, sayHello } from '../src/index.js';
import getName from '../src/cli.js';

greet();
const playerName = getName();
sayHello(playerName);

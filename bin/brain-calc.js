#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { getGameData } from '../src/games/brain-calc.js';

startGame(getGameData);

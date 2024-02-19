#!/usr/bin/env node
import brainGames from '../src/brain-games.js';
import brainEven from '../src/brain-even.js';

const playerName = brainGames();
brainEven(playerName);

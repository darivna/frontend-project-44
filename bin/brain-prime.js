#!/usr/bin/env node

import { gameDescription, savePrimeGameVariables } from '../src/games/prime-game.js';

import runEngine from '../src/index.js';

runEngine(gameDescription, savePrimeGameVariables);

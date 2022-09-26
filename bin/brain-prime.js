#!/usr/bin/env node

import { getGamesRule, primeGame } from '../src/games/prime-game.js';

import runEngine from '../src/index.js';

runEngine(getGamesRule, primeGame);

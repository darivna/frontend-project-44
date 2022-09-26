#!/usr/bin/env node

import { getGamesRule, calcGame } from '../src/games/calc-game.js';

import runEngine from '../src/index.js';

runEngine(getGamesRule, calcGame);

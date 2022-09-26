#!/usr/bin/env node

import { getGamesRule, evenGame } from '../src/games/even-game.js';

import runEngine from '../src/index.js';

runEngine(getGamesRule, evenGame);

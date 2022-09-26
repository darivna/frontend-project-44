#!/usr/bin/env node

import { getGamesRule, progressionGame } from '../src/games/progression-game.js';

import runEngine from '../src/index.js';

runEngine(getGamesRule, progressionGame);

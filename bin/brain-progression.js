#!/usr/bin/env node

import { gameDescription, saveProgressionGameVariables } from '../src/games/progression-game.js';

import runEngine from '../src/index.js';

runEngine(gameDescription, saveProgressionGameVariables);

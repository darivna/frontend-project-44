#!/usr/bin/env node

import { gameDescription, saveCalcGameVariables } from '../src/games/calc-game.js';

import runEngine from '../src/index.js';

runEngine(gameDescription, saveCalcGameVariables);

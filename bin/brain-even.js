#!/usr/bin/env node

import { gameDescription, saveEvenGameVariables } from '../src/games/even-game.js';

import runEngine from '../src/index.js';

runEngine(gameDescription, saveEvenGameVariables);

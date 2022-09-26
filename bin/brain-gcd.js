#!/usr/bin/env node

import { gameDescription, saveGcdGameVariables } from '../src/games/gcd-game.js';

import runEngine from '../src/index.js';

runEngine(gameDescription, saveGcdGameVariables);

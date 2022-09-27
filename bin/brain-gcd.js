#!/usr/bin/env node

import { gameDescription, generateGameData } from '../src/games/gcd.js';

import runEngine from '../src/engine.js';

runEngine(gameDescription, generateGameData);

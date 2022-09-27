#!/usr/bin/env node

import { gameDescription, generateGameData } from '../src/games/prime.js';

import runEngine from '../src/engine.js';

runEngine(gameDescription, generateGameData);

#!/usr/bin/env node

import { getGamesRule, getGreatestDivisor } from '../src/games/gcd-game.js';

import runEngine from '../src/index.js';

runEngine(getGamesRule, getGreatestDivisor);
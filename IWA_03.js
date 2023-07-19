// scripts.js

// solution

import { company, year } from './configuration.js';

const message = `© ${company} (${year})`;
document.querySelector('footer').innerText = message;


// configuration.js

// solution

const company = 'ACME Inc.';
const year = 2022;
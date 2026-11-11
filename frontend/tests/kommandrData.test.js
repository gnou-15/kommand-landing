/**
 * Kommandr OS — Automated Data & Pricing Integrity Test Suite
 * Runs via Node's built-in test runner (`node --test`) during CI/CD
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  NAV_LINKS,
  HERO_CALLOUTS,
  LIFECYCLE_PILLARS,
  SIMULATOR_DEALS,
  COMPARISON_ROWS,
  FAQ_ITEMS,
} from '../src/data/kommandrData.js';

test('Navigation links are properly structured', () => {
  assert.ok(Array.isArray(NAV_LINKS), 'NAV_LINKS should be an array');
  assert.equal(NAV_LINKS.length, 5, 'Should have 5 primary navigation links');
  for (const link of NAV_LINKS) {
    assert.ok(link.label.length > 0, 'Link label must not be empty');
    assert.ok(link.href.startsWith('#'), 'Link href must be an anchor');
  }
});

test('Hero callouts contain valid flip spread data', () => {
  assert.equal(HERO_CALLOUTS.length, 3, 'Hero should have 3 live feed callouts');
  for (const item of HERO_CALLOUTS) {
    assert.ok(item.id && item.title && item.netProfit, 'Callout must have id, title, and netProfit');
  }
});

test('6-Step Resale Lifecycle pillars cover Source through Books', () => {
  assert.equal(LIFECYCLE_PILLARS.length, 6, 'Must have all 6 Kommandr OS lifecycle steps');
  const expectedCodes = ['SOURCE', 'COMP', 'LIST', 'SELL', 'FOLLOW UP', 'BOOKS'];
  assert.deepEqual(
    LIFECYCLE_PILLARS.map((p) => p.code),
    expectedCodes
  );
});

test('Live Simulator deals produce positive net profit spread', () => {
  assert.ok(SIMULATOR_DEALS.length >= 3, 'Should provide at least 3 live sniper deals');
  for (const deal of SIMULATOR_DEALS) {
    const totalCost = deal.sourcePrice + deal.cleaningCost + deal.deliveryFuel;
    const spread = deal.estimatedResale - totalCost;
    assert.ok(spread > 397, `Deal ${deal.id} spread ($${spread}) should exceed the $397/mo plan cost`);
  }
});

test('Competitor comparison matrix & FAQ items are populated', () => {
  assert.ok(COMPARISON_ROWS.length >= 6, 'Comparison matrix should compare at least 6 core modules');
  assert.ok(FAQ_ITEMS.length >= 4, 'FAQ should answer at least 4 core buyer questions');
});


import test from 'node:test';
import assert from 'node:assert/strict';
import { getHealthPayload, calculateFlipProfit, createKommandrServer } from '../src/server.js';

test('Backend /health payload returns online status and all 6 Kommandr OS modules', () => {
  const data = getHealthPayload();
  assert.equal(data.status, 'online');
  assert.equal(data.service, 'kommandr-os-backend');
  assert.equal(data.modules.length, 6);
});

test('Backend Sniper profit engine accurately computes netProfit, taxSetAside & ROI multiple', () => {
  const result = calculateFlipProfit({
    sourcePrice: 220,
    estimatedResale: 1250,
    expenses: 75,
    taxRate: 0.2,
  });

  assert.equal(result.status, 'verified');
  assert.equal(result.netProfit, 764);
  assert.equal(result.taxSetAside, 191);
  assert.equal(result.roiMultiple, 5.68);
});

test('HTTP Server instance initializes cleanly', () => {
  const server = createKommandrServer();
  assert.ok(server, 'HTTP server instance should be created');
});

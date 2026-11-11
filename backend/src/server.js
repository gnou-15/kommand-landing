/**
 * Kommandr OS — Backend Health & Telemetry Service
 * Provides /health and /api/sniper/calculate-profit endpoints for E2E CI/CD Validation Gates
 */
import http from 'node:http';

const PORT = process.env.PORT || 5000;

export function getHealthPayload() {
  return {
    status: 'online',
    service: 'kommandr-os-backend',
    modules: ['sniper', 'comp', 'crosspost', 'storefront', 'muse-crm', 'books'],
    timestamp: new Date().toISOString(),
  };
}

export function calculateFlipProfit(payload = {}) {
  const sourcePrice = Number(payload.sourcePrice ?? 220);
  const estimatedResale = Number(payload.estimatedResale ?? 1250);
  const expenses = Number(payload.expenses ?? 75);
  const taxRate = Number(payload.taxRate ?? 0.2);

  const grossSpread = estimatedResale - (sourcePrice + expenses);
  const taxSetAside = Math.round(grossSpread * taxRate);
  const netProfit = grossSpread - taxSetAside;

  return {
    status: 'verified',
    netProfit,
    taxSetAside,
    roiMultiple: Number((estimatedResale / Math.max(1, sourcePrice)).toFixed(2)),
  };
}

export function createKommandrServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET' && url.pathname === '/health') {
      res.writeHead(200);
      res.end(JSON.stringify(getHealthPayload()));
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/sniper/calculate-profit') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        try {
          const payload = body ? JSON.parse(body) : {};
          res.writeHead(200);
          res.end(JSON.stringify(calculateFlipProfit(payload)));
        } catch {
          res.writeHead(400);
          res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
        }
      });
      return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route not found' }));
  });
}

if (
  import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/')}` ||
  process.argv[1]?.endsWith('server.js')
) {
  const server = createKommandrServer();
  server.listen(PORT, () => {
    console.log(`Kommandr OS Backend service online on port ${PORT}`);
  });
}

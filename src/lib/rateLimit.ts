/**
 * Zero-budget sliding window in-memory rate limiter for Edge/Serverless runtimes.
 * Prevents automated form submission spam without requiring paid external Redis instances.
 */

interface RateLimitStore {
  [ip: string]: number[];
}

const windowMs = 60 * 1000; // 1 minute window
const maxRequests = 6;      // Max 6 form submissions per window per IP
const store: RateLimitStore = {};

// Clean up stale IPs periodically
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const ip in store) {
      store[ip] = store[ip].filter((time) => now - time < windowMs);
      if (store[ip].length === 0) {
        delete store[ip];
      }
    }
  }, 5 * 60 * 1000); // Purge every 5 minutes
}

export function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = store[identifier] || [];

  // Filter out timestamps outside the active window
  const activeTimestamps = timestamps.filter((time) => now - time < windowMs);

  if (activeTimestamps.length >= maxRequests) {
    return true; // Rate limit exceeded
  }

  activeTimestamps.push(now);
  store[identifier] = activeTimestamps;
  return false;
}


import { describe, it, expect } from 'vitest';
import { 
  sanitizeInput, 
  isValidEmail, 
  isValidPhone,
  RateLimiter 
} from '../security';

describe('Security Utils', () => {
  describe('sanitizeInput', () => {
    it('removes script tags', () => {
      const input = '<script>alert("xss")</script>Hello';
      expect(sanitizeInput(input)).toBe('Hello');
    });

    it('removes javascript: protocol', () => {
      const input = 'javascript:alert("xss")';
      expect(sanitizeInput(input)).not.toContain('javascript:');
    });

    it('trims whitespace', () => {
      const input = '  Hello World  ';
      expect(sanitizeInput(input)).toBe('Hello World');
    });
  });

  describe('isValidEmail', () => {
    it('validates correct email', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
    });

    it('rejects invalid email', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
    });
  });

  describe('isValidPhone', () => {
    it('validates correct phone number', () => {
      expect(isValidPhone('+1 (555) 123-4567')).toBe(true);
      expect(isValidPhone('5551234567')).toBe(true);
    });

    it('rejects invalid phone number', () => {
      expect(isValidPhone('123')).toBe(false);
      expect(isValidPhone('abc')).toBe(false);
    });
  });

  describe('RateLimiter', () => {
    it('allows attempts within limit', () => {
      const limiter = new RateLimiter(3, 60000);
      expect(limiter.canAttempt('user1')).toBe(true);
      expect(limiter.canAttempt('user1')).toBe(true);
      expect(limiter.canAttempt('user1')).toBe(true);
    });

    it('blocks attempts over limit', () => {
      const limiter = new RateLimiter(2, 60000);
      limiter.canAttempt('user2');
      limiter.canAttempt('user2');
      expect(limiter.canAttempt('user2')).toBe(false);
    });
  });
});

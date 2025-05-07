// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone number 1', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid phone number 2', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone number 1', () => {
  expect(isPhoneNumber('123456')).toBe(false);
});
test('invalid phone number 2', () => {
  expect(isPhoneNumber('phone123')).toBe(false);
});

// isEmail tests
test('valid email 1', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('valid email 2', () => {
  expect(isEmail('user.name@domain.co')).toBe(false);
});
test('invalid email 1', () => {
  expect(isEmail('user@gmail.com')).toBe(true);
});
test('invalid email 2', () => {
  expect(isEmail('user@.com')).toBe(false);
});

// isStrongPassword tests
test('strong password 1', () => {
  expect(isStrongPassword('Abcdef1')).toBe(true);
});
test('strong password 2', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});
test('weak password 1', () => {
  expect(isStrongPassword('123')).toBe(false);
});
test('weak password 2', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

// isDate tests
test('valid date 1', () => {
  expect(isDate('12/31/2020')).toBe(true);
});
test('valid date 2', () => {
  expect(isDate('01/01/2021')).toBe(true);
});
test('invalid date 1', () => {
  expect(isDate('2020-12-31')).toBe(false);
});
test('invalid date 2', () => {
  expect(isDate('12/31/20')).toBe(false);
});

// isHexColor tests
test('valid hex color 1', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});
test('valid hex color 2', () => {
  expect(isHexColor('#000')).toBe(true);
});
test('invalid hex color 1', () => {
  expect(isHexColor('#00')).toBe(false);
});
test('invalid hex color 2', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});

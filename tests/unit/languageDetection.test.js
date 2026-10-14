import assert from 'node:assert/strict'
import test from 'node:test'
import { detectPreferredLanguage } from '../../src/languageDetection.js'

test('detects German browser language tags', () => {
  for (const language of ['de', 'de-DE', 'de-AT', 'de-CH', 'DE-de']) {
    assert.equal(detectPreferredLanguage([language], 'en-US'), 'de')
  }
})

test('uses only the most preferred browser language', () => {
  assert.equal(detectPreferredLanguage(['en-US', 'de-DE'], 'de-DE'), 'en')
  assert.equal(detectPreferredLanguage(['de-AT', 'en-US'], 'en-US'), 'de')
})

test('defaults to English for other languages and falls back to navigator.language', () => {
  assert.equal(detectPreferredLanguage(['fr-FR'], 'de-DE'), 'en')
  assert.equal(detectPreferredLanguage([], 'de-CH'), 'de')
  assert.equal(detectPreferredLanguage([], 'nb-NO'), 'en')
})

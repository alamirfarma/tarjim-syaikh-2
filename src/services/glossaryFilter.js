/**
 * glossaryFilter.js — Mesin Filter Istilah
 *
 * Dua fungsi yang bekerja berpasangan:
 *
 *   applyArabicGlossary(arabicText)
 *     → Ganti frasa Arab dari glossary dengan token __SALAF_0__, dst.
 *       Mengembalikan { processedText, placeholderMap }
 *
 *   restorePlaceholders(translatedText, placeholderMap)
 *     → Ganti token kembali ke terjemahan istilah yang benar.
 */

import { ARABIC_GLOSSARY } from './glossary.js';

export function applyArabicGlossary(arabicText) {
  let processedText = arabicText;
  const placeholderMap = {};

  Object.entries(ARABIC_GLOSSARY).forEach(([arabicPhrase, correctTranslation], index) => {
    if (processedText.includes(arabicPhrase)) {
      const token = `__SALAF_${index}__`;
      processedText = processedText.split(arabicPhrase).join(token);
      placeholderMap[token] = correctTranslation;
    }
  });

  return { processedText, placeholderMap };
}

export function restorePlaceholders(translatedText, placeholderMap) {
  let result = translatedText;
  for (const [token, correctTranslation] of Object.entries(placeholderMap)) {
    result = result.split(token).join(correctTranslation);
  }
  return result;
}

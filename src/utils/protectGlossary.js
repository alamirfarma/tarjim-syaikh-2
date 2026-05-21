import glossary from '../glossary/salafGlossary.json';

export function protectGlossary(text) {
  let protectedText = text;
  const placeholders = {};

  let i = 0;

  // urutkan yang paling panjang dulu
  const terms = Object.keys(glossary)
    .sort((a, b) => b.length - a.length);

  for (const arabic of terms) {
    if (protectedText.includes(arabic)) {

      const token = `__TERM_${i}__`;

      protectedText =
        protectedText.replaceAll(
          arabic,
          token
        );

      placeholders[token] =
        glossary[arabic];

      i++;
    }
  }

  return {
    text: protectedText,
    placeholders
  };
}

export function restoreGlossary(
  translatedText,
  placeholders
) {
  let result = translatedText;

  for (const token in placeholders) {
    result = result.replaceAll(
      token,
      placeholders[token]
    );
  }

  return result;
}

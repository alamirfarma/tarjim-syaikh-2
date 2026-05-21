/**
 * translationService.js
 *
 * Menerjemahkan teks Arab ke Indonesia melalui Vercel API Route (/api/translate).
 * Request dilakukan server-side sehingga tidak ada CORS issue.
 */

export async function translateArabicToIndonesian(text) {
  if (!text || text.trim().length === 0) return '';

  const params = new URLSearchParams({ q: text.trim() });
  const res = await fetch(`/api/translate?${params.toString()}`);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Server error: ${res.status}`);
  }

  const data = await res.json();

  if (!data.result) {
    throw new Error('Respons terjemahan kosong');
  }

  return data.result;
}

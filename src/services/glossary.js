/**
 * glossary.js — Kamus Istilah Salaf
 *
 * Kunci   = teks Arab asli yang muncul dalam ucapan syaikh.
 * Nilai   = terjemahan istilah yang benar menurut pemahaman salaf.
 *
 * Cara kerja: sebelum teks Arab dikirim ke Google Translate, setiap
 * frasa Arab di sini diganti token sementara agar mesin tidak
 * menerjemahkannya. Setelah terjemahan kembali, token diganti dengan
 * nilai yang benar di sini.
 *
 * ── Cara menambah entri baru ────────────────────────────────────────
 *  Tambahkan baris baru di bawah tanda ↓, ikuti format yang sama.
 * ────────────────────────────────────────────────────────────────────
 */

export const ARABIC_GLOSSARY = {
  // Aqidah & Tauhid
  "صلى الله وسلم عليه":"Semoga Allah senantiasa melimpahkan shalawat dan salam kepadanya",
  "اما بعد":"Adapun setelahnya",
  "لا اله الا الله":"tidak ada sesembahan yang berhak untuk disembah selain Allah",
  "لا اله الا الله وحده لا شريك له":"tidak ada sesembahan yang berhak untuk disembah selain Allah semata, tidak ada sekutu bagi-Nya",
  "الحمد لله رب العالمين":"Segala puji hanya bagi Allah Rabb semesta alam",
  "بسم الله الرحمن الرحيم":"Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang",
  "أهل السنة والجماعة":  "Ahlus Sunnah wal Jamaah",
  "السلف الصالح":        "as-Salafus Shalih",
  "الله":        "Allah",
  "رب":        "Rabb",
  "البدعة":              "bid'ah",
  "التوحيد":             "tauhid",
  "الشرك":               "syirik",
  "الاستواء":            "istiwa'",
  "الولاء والبراء":      "al-wala' wal-bara'",
  "الطاغوت":             "thaghut",
  "العقيدة":             "aqidah",
  "منهج السلف":          "manhaj salaf",

  // Tambah entri baru di bawah ini ↓

};

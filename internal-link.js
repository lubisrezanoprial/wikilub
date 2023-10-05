// auto-link.js

var internalLinks = {
  "guru": "/2023/09/guru.html",
  "peserta didik": "/2023/09/peserta-didik.html",
  "lembaga pendidikan": "/2023/09/lembaga-pendidikan.html",
  "pendidikan formal": "/2023/09/pendidikan-formal.html",
  "kepala sekolah": "/2023/09/kepala-sekolah.html",
  "media pembelajaran": "/2023/09/media-pembelajaran.html",
  "kurikulum": "/2023/10/kurikulum.html",
  "transformasi ilmu": "/2023/09/transformasi-ilmu.html",
  "transfer pengetahuan": "/2023/09/transformasi-ilmu.html",
  "pendidikan non-formal": "/2023/10/pendidikan-non-formal.html",
  "pendidikan kecakapan hidup": "/2023/10/pendidikan-kecakapan-hidup.html",
  "pendidikan anak usia dini": "/2023/10/pendidikan-anak-usia-dini.html",
  "PAUD": "/2023/10/pendidikan-anak-usia-dini.html",
  // tambahkan lebih banyak kata kunci dan URL sesuai kebutuhan
};

document.addEventListener("DOMContentLoaded", function() {
  var articleContent = document.getElementById("post_body");
  if (articleContent) {
    var usedKeywords = {}; // Membuat objek untuk melacak kata kunci yang sudah digunakan.
    var contentHTML = articleContent.innerHTML; // Salin konten HTML untuk menghindari perubahan langsung.

    for (var keyword in internalLinks) {
      if (internalLinks.hasOwnProperty(keyword)) {
        var regex = new RegExp("\\b" + keyword + "\\b", "g");
        contentHTML = contentHTML.replace(regex, function(match) {
          if (!usedKeywords[match]) { // Cek apakah kata kunci sudah digunakan sebelumnya.
            usedKeywords[match] = true; // Tandai kata kunci sebagai sudah digunakan.
            return '<a href="' + internalLinks[keyword] + '">' + match + '</a>';
          } else {
            return match; // Jika kata kunci sudah digunakan, biarkan teks aslinya.
          }
        });
      }
    }

    articleContent.innerHTML = contentHTML; // Setel konten HTML yang sudah dimodifikasi kembali ke elemen.
  }
});

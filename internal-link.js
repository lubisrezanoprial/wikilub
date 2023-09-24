// auto-link.js

var internalLinks = {
  "guru": "/2023/09/guru.html",
  "peserta didik": "/2023/09/peserta-didik.html",
  "lembaga pendidikan": "/2023/09/lembaga-pendidikan.html",
  "pendidikan formal": "/2023/09/pendidikan-formal.html",
  "kepala sekolah": "/2023/09/kepala-sekolah.html",
  "media pembelajaran": "/2023/09/media-pembelajaran.html",
  "transformasi ilmu": "/2023/09/transformasi-ilmu.html",
  "transfer pengetahuan": "/2023/09/transformasi-ilmu.html",
  // tambahkan lebih banyak kata kunci dan URL sesuai kebutuhan
};

document.addEventListener("DOMContentLoaded", function() {
  var articleContent = document.getElementById("post_body");
  if (articleContent) {
    for (var keyword in internalLinks) {
      if (internalLinks.hasOwnProperty(keyword)) {
        var regex = new RegExp("\\b" + keyword + "\\b", "g");
        articleContent.innerHTML = articleContent.innerHTML.replace(regex, '<a href="' + internalLinks[keyword] + '">' + keyword + '</a>');
      }
    }
  }
});

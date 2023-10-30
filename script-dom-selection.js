// DOM SELECTION
// tag script berada di paling bawah elemen html, supaya elemen html diload duluan baru digunakan di js

// getElemenyById -> element
const ambilJudul = document.getElementById("judul");
document.writeln(`ambil judul: <i>${ambilJudul}</i></br>`);

// getElemenyByTag -> HTML Collection
// meskipun misal h1 cuma ada 1, return tetap HTML collection bukan element
const ambilH1 = document.getElementsByTagName("h1");
document.writeln(`ambil h1: <i>${ambilH1}</i></br>`);

// getElemenyByClass -> HTML Colection
const ambilP2 = document.getElementsByClassName("p2");
document.writeln(`ambil p2: <i>${ambilP2}</i></br>`);

// querySelector -> element
// digunakan untuk kasus specificity. Lihat contoh kasusnya
const item2 = document.querySelector("section#b ul li:nth-child(2");
document.writeln(`ambil item 2: <i>${item2}</i></br>`);
item2.style.backgroundColor = "red";

// querySelectorAll -> node list
// memilih semua elemen yang dipilih

// modifikasi
// akan ditambahkan inline css di tag judul
ambilJudul.style.color = "red";
// modifikasi text di dalam tag
ambilJudul.innerHTML = "aaa";
// tambahkan inline css di array(mirip array)
ambilP2[0].style.backgroundColor = "grey";

// root node dapat DIUBAH
const sectionB = document.getElementById("b");
const item1 = sectionB.getElementsByTagName("li");
item1[0].style.backgroundColor = "green";

const p = document.getElementsByTagName("p");
// ambilLi.map((x) => (ambilLi.style.backgroundColor = "yellow")); Error: ternyata return li BUKAN ARRAY
for (let pp in p) {
  p[pp].style.backgroundColor = "yellow";
}

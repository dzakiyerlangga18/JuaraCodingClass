// 1. event listener
let buttonPenjumlahan = document.querySelector("button");

// addEventListener untuk penjumlahan
buttonPenjumlahan.addEventListener("click", function () {
  let inputNumber1 = document.querySelector("#angka1");
  let inputNumber2 = document.querySelector("#angka2");

  // validasi kalo kosong
  if (inputNumber1.value && !inputNumber2.value) {
    alert("input number 1 harus ada.");
    return;
  }

  // untuk mengambil nilai dari objek input, gunakan
  // properti .value

  // menampilkan hasil perhitungan ke dalam span
  // 1. kaitkan elemen span ke js
  let spanHasil = document.querySelector("span");
  spanHasil.innerHTML =
    parseInt(inputNumber1.value) + parseInt(inputNumber2.value);
});

// ambil input

let buttonLuas = document.querySelector("#Luassegitiga");

// add event
buttonLuas.addEventListener("click", function () {
  let alas = document.querySelector("#alas");
  let tinggi = document.querySelector("#tinggi");

  //   validasi jika losong
  if (!alas.value || !tinggi.value) {
    alert("input number 1 harus ada.");
    return;
  }

  //   ini jumlahnya
  let spanH = document.querySelector("#segitiga");
  spanH.innerHTML = (1 / 2) * parseInt(alas.value) * parseInt(alas.value);
});

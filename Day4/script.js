// 1. event listener
let buttonPenjumlahan = document.querySelector("button");


    return;
  }



  // menampilkan hasil perhitungan ke dalam span
  // 1. kaitkan elemen span ke js
  let spanHasil = document.querySelector("span");
  spanHasil.innerHTML =
    parseInt(inputNumber1.value) + parseInt(inputNumber2.value);
});

// ambil input

let buttonLuas = document.querySelector("#Luassegitiga");



  //   validasi jika losong
  if (!alas.value || !tinggi.value) {
    alert("input number 1 harus ada.");
    return;
  }

  //   ini jumlahnya
  let spanH = document.querySelector("#segitiga");
  spanH.innerHTML = (1 / 2) * parseInt(alas.value) * parseInt(alas.value);
});

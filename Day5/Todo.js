let button = document.querySelector("#tambah-item");
let inputTodo = document.querySelector("#input-nama");
let daftarItem = document.querySelector("#daftar-item");
let inputHarga = document.querySelector("#input-harga");
let setBudget = document.querySelector("#set-budget");
let totalHargaKeseluruhan = document.querySelector("#total-harga-keseluruhan");
let totalKeseluruhanDiskon = document.querySelector("#total-harga-keseluruhan-setelah-diskon");
let inputBudget = document.querySelector("#input-budget");
let inputDiskon = document.querySelector("#input-diskon");
let setDiskon = document.querySelector("#set-diskon")
let totalHarga = 0;
let tampungBudget = 0;
let tampungDiskon = 0;
let hasilDiskon = 0;

button.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = `${inputTodo.value} ${inputHarga.value}`;
  daftarItem.appendChild(item);

  // Total Harga
  totalHarga = totalHarga + parseInt(inputHarga.value);
  totalHargaKeseluruhan.innerHTML = totalHarga;

  if (totalHarga <= tampungBudget) {
    totalHargaKeseluruhan.setAttribute("class", "aman");
    // ketika budget masih sesuai dengan total belanja
    console.log("Budget Masih Aman");
  } else {
    // ketika budget gak cukup
    totalHargaKeseluruhan.setAttribute("class", "danger");
    console.log("Budget kaga cukup cui...");
  }



});

setBudget.addEventListener("click", function () {
  tampungBudget = parseInt(inputBudget.value);

  console.log(tampungBudget);
});


setDiskon.addEventListener("click", function() {
  tampungDiskon = parseInt(inputDiskon.value)
  
  diskon = totalHarga * (tampungDiskon/100);

  hasilDiskon= totalHarga - diskon

  totalKeseluruhanDiskon.innerHTML = `anda mendapat diskon (${tampungDiskon}%) sebesar ${diskon}  menjadi (${hasilDiskon})`;

  console.log(tampungDiskon)
})



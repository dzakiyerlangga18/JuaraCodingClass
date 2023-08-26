let btnRegister = document.querySelector("#btn-register");
let btnSignin = document.querySelector("#btn-signin");
let inputUsername = document.querySelector("#input-username");
let inputPassword = document.querySelector("#input-password");
let txtHasil = document.querySelector("#txt-hasil");
// let noAccount = document.querySelector("#no-account");
// let haveAccount = document.querySelector("#have-account");

let daftarPengguna = [];

// sate = {
//   value: null,
// };

// button register/ login

// const noaccount = () => {
//   this.setState({ value: false });
// };
// const haveaccount = () => {
//   this.setState({ value: true });
// };

// click tombol

// noAccount.addEventListener("click", function(){
//   if (state.value === true) {

//   } else {

//   }
// })

btnSignin.addEventListener("click", function () {
  // validasi simple
  if (!inputUsername.value) {
    txtHasil.innerHTML = "tidak valid karena username kosong";
    return;
  }

  if (!inputPassword.value) {
    txtHasil.innerHTML = "tidak valid karena password kosong";
    return;
  }

  // cek di database local storage
  // ubah data object string ke object js menggunakan JSON.parse
  let members = JSON.parse(localStorage.getItem("members"));
  let status = false;

  if (members) {
    for (let i = 0; i < members.length; i++) {
      let passwordFromDB = members[i].password;
      let usernameFromDB = members[i].username;

      if (
        usernameFromDB === inputUsername.value &&
        passwordFromDB === inputPassword.value
      ) {
        status = true;
      }
    }
  }

  if (status) {
    console.log("login suskses");
  } else {
    console.log("login gagal");
  }
});

btnRegister.addEventListener("click", function () {
  // validasi simple
  console.log("ini aawl");
  if (!inputUsername.value) {
    txtHasil.innerHTML = "tidak valid karena username kosong";
    return;
  }

  if (!inputPassword.value) {
    txtHasil.innerHTML = "tidak valid karena password kosong";
    return;
  }

  // proses
  daftarPengguna.push({
    username: inputUsername.value,
    password: inputPassword.value,
  });

  localStorage.setItem("members", JSON.stringify(daftarPengguna));
});

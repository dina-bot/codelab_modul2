function validateForm() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;

  if (nama === "" || email === "" || alamat === "") {
    alert("Semua bidang harus diisi!");
    return false;
  }

  // Jika semua bidang diisi, maka tampilkan pesan "Pendaftaran berhasil"
  else {
    alert("Pendaftaran berhasil!");
  }

  // Pastikan Anda mengembalikan false agar form tidak terkirim
  return false;
}

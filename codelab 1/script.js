document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan referensi ke elemen-elemen HTML yang diperlukan
  var bilangan1Input = document.getElementById("bilangan1");
  var bilangan2Input = document.getElementById("bilangan2");
  var jumlahkanButton = document.getElementById("jumlahkanButton");
  var ulangButton = document.getElementById("ulangButton");

  // Menambahkan event listener ke tombol "Jumlahkan"
  jumlahkanButton.addEventListener("click", function () {
    // Mengambil nilai dari input
    var bilangan1 = parseFloat(bilangan1Input.value);
    var bilangan2 = parseFloat(bilangan2Input.value);

    // Melakukan operasi penjumlahan
    var hasil = bilangan1 + bilangan2;

    // Menampilkan hasil menggunakan alert
    alert("Hasil penjumlahan = " + hasil);
  });

  // Menambahkan event listener ke tombol "Ulang"
  ulangButton.addEventListener("click", function () {
    // Mengosongkan input dan hasil
    bilangan1Input.value = "";
    bilangan2Input.value = "";
    alert("Input telah direset.");
  });
});

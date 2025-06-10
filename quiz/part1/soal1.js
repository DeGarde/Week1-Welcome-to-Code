// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
// 1. buat 2 variabel. yaitu: nama dan pran
// 2. bila nama kosong pemain akan diperingatkan "nama wajib diisi"
// 3. begitupun juga peran, jika ridak diiisi pemain akan diperingatkan "pilih peran mu untuk memulai game"
// 4. selanjutnya, buatlah 3 macam peran, yaitu: kesatria, tabib, dan penyihir
// 5. buatlah dialog dari masing2 peran. Kesatria "halo kesatria $(nama), kamu dapat menyerang dengan senjatamu",
// Tabib "halo tabib $(nama), kamu akan membantu temanmu yang terluka", Penyihir "halo penyihir $(nama), ciptakan keajaiban yang membantu kemenanganmu"
// 6. bila peran yang diisi tidak ada ketiga  pera yang diatas, maka berikan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

let nama = "Dgarde", peran = "Kesatria"; // assign nilai variabel nama dan peran disini! (dengan string)

if (nama === "") {
    console.log("nama wajib diisi");
  } else if (peran === "") {
    console.log("Pilih Peranmu untuk memulai game");
  } else {
      if (peran === "Kesatria") {
          console.log(`halo Kesatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
      } else if (peran === "Tabib") {
          console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
      } else if (peran === "Penyihir") {
          console.log(`halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
      } else {
          console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
      }
  }
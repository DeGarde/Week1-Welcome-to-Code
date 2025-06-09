// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal.
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 31; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "januari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
switch (tanggal) {
    case 1:
        tanggal = "1";
        break;
    case 2:
        tanggal = "2";
        break;
    case 3:
        tanggal = "3";
        break;
    case 4:
        tanggal = "4";
        break;
    case 5:
        tanggal = "5";
        break;
    case 6:
        tanggal = "6";
        break;
    case 7:
        tanggal = "7";
        break;
    case 8:
        tanggal = "8";
        break;
    case 9:
        tanggal = "9";
        break;
    case 10:
        tanggal = "10";
        break;
    case 11:
        tanggal = "11";
        break;
    case 12:
        tanggal = "12";
        break;
    case 13:
        tanggal = "13";
        break;
    case 14:
        tanggal = "14";
        break;
    case 15:
        tanggal = "15";
        break;
    case 16:
        tanggal = "16";
        break;
    case 17:
        tanggal = "17";
        break;
    case 18:
        tanggal = "18";
        break;
    case 19:
        tanggal = "19";
        break;
    case 20:
        tanggal = "20";
        break;
    case 21:
        tanggal = "21";
        break;
    case 22:
        tanggal = "22";
        break;
    case 23:
        tanggal = "23";
        break;
    case 24:
        tanggal = "24";
        break;
    case 25:
        tanggal = "25";
        break;
    case 26:
        tanggal = "26";
        break;
    case 27:
        tanggal = "27";
        break;
    case 28:
        tanggal = "28";
        break;
    case 29:
        tanggal = "29";
        break;
    case 30:
        tanggal = "30";
        break;
    case 31:
        tanggal = "31";
        break;
    default:
        tanggal = "Tanggal tidak valid";
        break;
}

switch (bulan) {
    case "januari":
        bulan = "Januari";
        break;
    case "februari":
        bulan = "Februari";
        break;
    case "maret":
        bulan = "Maret";
        break;
    case "april":
        bulan = "April";
        break;
    case "mei":
        bulan = "Mei";
        break;
    case "juni":
        bulan = "Juni";
        break;
    case "juli":
        bulan = "Juli";
        break;
    case "agustus":
        bulan = "Agustus";
        break;
    case "september":
        bulan = "September";
        break;
    case "oktober":
        bulan = "Oktober";
        break;
    case "november":
        bulan = "November";
        break;
    case "desember":
        bulan = "Desember";
        break;
    default:
        bulan = "Bulan tidak valid";
        break;
}

switch (tahun) {
    case 1900:
    case 1901:
    case 1902:
    case 1903:
    case 1904:
    case 1905:
    case 1906:
    case 1907:
    case 1908:
    case 1909:
    case 1910:
    case 1911:
    case 1912:
    case 1913:
    case 1914:
    case 1915:
    case 1916:
    case 1917:
    case 1918:
    case 1919:
    case 1920:
    case 1921:
    case 1922:
    case 1923:
    case 1924:
    case 1925:
    case 1926:
    case 1927:
    case 1928:
    case 1929:
    case 1930:
    case 1931:
    case 1932:
    case 1933:
    case 1934:
        tahun = "Tahun " + tahun;
        break;
    default:
        tahun = "Tahun tidak valid";
        break;
}

console.log(`${tanggal} ${bulan} ${tahun}`); // tampilkan hasil format tanggal
// Output: '31 Januari 2001' (atau sesuai dengan nilai variabel yang telah diisi)

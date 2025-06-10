// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal.
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 21; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
switch (tanggal) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
        
        tanggal = tanggal; // jika tanggal valid, tetap gunakan nilai tanggal
        break;
    default:
        tanggal = "Tanggal tidak valid";
        break;
}

switch (bulan) {
    case 1:
        bulan = "Januari";
        break;
    case 2:
        bulan = "Februari";
        break;
    case 3:
        bulan = "Maret";
        break;
    case 4:
        bulan = "April";
        break;
    case 5:
        bulan = "Mei";
        break;
    case 6:
        bulan = "Juni";
        break;
    case 7:
        bulan = "Juli";
        break;
    case 8:
        bulan = "Agustus";
        break;
    case 9:
        bulan = "September";
        break;
    case 10:
        bulan = "Oktober";
        break;
    case 11:
        bulan = "November";
        break;
    case 12:
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
    case 1935:
    case 1936:
    case 1937:
    case 1938:
    case 1939:
    case 1940:
    case 1941:
    case 1942:
    case 1943:
    case 1944:
    case 1945:
    case 1946:
    case 1947:
    case 1948:
    case 1949:
    case 1950:
    case 1951:
    case 1952:
    case 1953:
    case 1954:
    case 1955:
    case 1956:
    case 1957:
    case 1958:
    case 1959:
    case 1960:
    case 1961:
    case 1962:
    case 1963:
    case 1964:
    case 1965:
    case 1966:
    case 1967:
    case 1968:
    case 1969:
    case 1970:
    case 1971:
    case 1972:
    case 1973:
    case 1974:
    case 1975:
    case 1976:
    case 1977:
    case 1978:
    case 1979:
    case 1980:
    case 1981:
    case 1982:
    case 1983:
    case 1984:
    case 1985:
    case 1986:
    case 1987:
    case 1988:
    case 1989:
    case 1990:
    case 1991:
    case 1992:
    case 1993:
    case 1994:
    case 1995:
    case 1996:
    case 1997:
    case 1998:
    case 1999:
    case 2000:
    case 2001:
    case 2002:
    case 2003:
    case 2004:
    case 2005:
    case 2006:
    case 2007:
    case 2008:
    case 2009:
    case 2010:
    case 2011:
    case 2012:
    case 2013:
    case 2014:
    case 2015:
    case 2016:
    case 2017:
    case 2018:
    case 2019:
    case 2020:
    case 2021:
    case 2022:
    case 2023:
    case 2024:
    case 2025:
    case 2026:
    case 2027:
    case 2028:
    case 2029:
    case 2030:
    case 2031:
    case 2032:
    case 2033:
    case 2034:
    case 2035:
    case 2036:
    case 2037:
    case 2038:
    case 2039:
    case 2040:
    case 2041:
    case 2042:
    case 2043:
    case 2044:
    case 2045:
    case 2046:
    case 2047:
    case 2048:
    case 2049:
    case 2050:
    case 2051:
    case 2052:
    case 2053:
    case 2054:
    case 2055:
    case 2056:
    case 2057:
    case 2058:
    case 2059:
    case 2060:
    case 2061:
    case 2062:
    case 2063:
    case 2064:
    case 2065:
    case 2066:
    case 2067:
    case 2068:
    case 2069:
    case 2070:
    case 2071:
    case 2072:
    case 2073:
    case 2074:
    case 2075:
    case 2076:
    case 2077:
    case 2078:
    case 2079:
    case 2080:
    case 2081:
    case 2082:
    case 2083:
    case 2084:
    case 2085:
    case 2086:
    case 2087:
    case 2088:
    case 2089:
    case 2090:
    case 2091:
    case 2092:
    case 2093:
    case 2094:
    case 2095:
    case 2096:
    case 2097:
    case 2098:
    case 2099:
    case 2100:
    case 2101:
    case 2102:
    case 2103:
    case 2104:
    case 2105:
    case 2106:
    case 2107:
    case 2108:
    case 2109:
    case 2110:
    case 2111:
    case 2112:
    case 2113:
    case 2114:
    case 2115:
    case 2116:
    case 2117:
    case 2118:
    case 2119:
    case 2120:
    case 2121:
    case 2122:
    case 2123:
    case 2124:
    case 2125:
    case 2126:
    case 2127:
    case 2128:
    case 2129:
    case 2130:
    case 2131:
    case 2132:
    case 2133:
    case 2134:
    case 2135:
    case 2136:
    case 2137:
    case 2138:
    case 2139:
    case 2140:
    case 2141:
    case 2142:
    case 2143:
    case 2144:
    case 2145:
    case 2146:
    case 2147:
    case 2148:
    case 2149:
    case 2150:
    case 2151:
    case 2152:
    case 2153:
    case 2154:
    case 2155:
    case 2156:
    case 2157:
    case 2158:
    case 2159:
    case 2160:
    case 2161:
    case 2162:
    case 2163:
    case 2164:
    case 2165:
    case 2166:
    case 2167:
    case 2168:
    case 2169:
    case 2170:
    case 2171:
    case 2172:
    case 2173:
    case 2174:
    case 2175:
    case 2176:
    case 2177:
    case 2178:
    case 2179:
    case 2180:
    case 2181:
    case 2182:
    case 2183:
    case 2184:
    case 2185:
    case 2186:
    case 2187:
    case 2188:
    case 2189:
    case 2190:
    case 2191:
    case 2192:
    case 2193:
    case 2194:
    case 2195:
    case 2196:
    case 2197:
    case 2198:
    case 2199:
    case 2200:
        tahun = tahun;
        break;
    default:
        tahun = "Tahun tidak valid";
        break;
}

console.log( tanggal + " " + bulan + " " + tahun); // tampilkan hasil format tanggal
// Output: '31 Januari 2001' (atau sesuai dengan nilai variabel yang telah diisi)

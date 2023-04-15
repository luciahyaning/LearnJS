const deretBilangan = [4,9,12,5] // inputan dari user
let urutan, index

function bubblesort(deretAngka) {

  const panjangArray = deretAngka.length // panjang array = 4

  for (urutan = 0; urutan < panjangArray; urutan ++) { // mengulang dari urutan pertama sampai keempat
    for (index = 0; index < panjangArray - 1; index ++ ) {
      if (deretAngka[index] > deretAngka[index + 1]) { // cek apakah deretAngka saat ini lebih besar daripada deretAngka setelahnya
        // jika iya, ditukar
        const tampung = deretAngka[index] // 6
        deretAngka[index] = deretAngka[index + 1] // deretAngka[index] = 3
        deretAngka[index + 1] = tampung // deretAngka[index + 1] = 6
      }
    }
  }

  return deretAngka
}

const print = bubblesort(deretBilangan)
document.write(print)
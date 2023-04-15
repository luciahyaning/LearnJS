const deretBilangan = [4,9,12,5] // inputan dari user
let urutan, index

function insertionSort(deretAngka) {
  const panjangArray = deretAngka.length // panjang array = 4

  for(urutan = 1; urutan < panjangArray; urutan++) { // mengulang dari urutan 1 sampai 3
    for (index = urutan; index > 0; index--) { // ulang terus mulai dari index = urutan selama index lebih dari 0

      if (deretAngka[index] < deretAngka[index - 1]) { // apakah angka di index saat ini kurang dari angka di index sebelumnya
        // jika iya, maka ditukar
        const tampung = deretAngka[index]
        deretAngka[index] = deretAngka[index - 1] 
        deretAngka[index - 1] = tampung 
      }
    }
  }

  return deretAngka
}

const print = insertionSort(deretBilangan)
document.write(print)

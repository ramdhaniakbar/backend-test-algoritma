const reverseSentence = (str: string): string => {
   // ambil semua karakter kecuali karakter terakhir
   let sentence = str.slice(0, -1)

   // ambil karakter terakhir
   let number = str.slice(-1)

   // balik urutan text menggunakan fungsi reverse
   let reverseText = sentence.split('').reverse().join('')

   // gabung text reverse tadi dengan angka dibelakang dan kembalikan valuenya
   return reverseText + number
}

let result = reverseSentence("NEGIE1")
console.log(result);
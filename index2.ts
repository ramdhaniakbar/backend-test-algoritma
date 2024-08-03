const findLongestWord = (sentence: string): string => {
   // pisahkan kalimat menjadi array
   let words = sentence.split(' ');

   // buat satu variable sementara yang akan ditampung untuk kata terpanjang
   let longestWord = '';

   // looping array untuk mencari kata terpanjang
   for (let word of words) {
      if (word.length > longestWord.length) {
         longestWord = word;
       }
   }

   // return kata terpanjang
   return longestWord
}

let sentence = "Saya sangat senang mengerjakan soal algoritma";
let longestWord = findLongestWord(sentence);
console.log(longestWord);
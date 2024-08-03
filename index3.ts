const countTextInArray = (input: string[], query: string[]): number[] => {
  // inisialisasi array untuk menyimpan hasil
  let output: number[] = []

  // looping setiap kata dalam QUERY
  for (let q of query) {
    // hitung berapa kali kata tersebut muncul dalam INPUT
    let count = input.filter((word) => word === q).length

    // tambah hasil tersebut ke datam array output
    output.push(count)
  }

  // return value output
  return output
}

const input = ["xc", "dz", "bbb", "dz"]
const query = ["bbb", "ac", "dz"]

const output = countTextInArray(input, query)
console.log(output)

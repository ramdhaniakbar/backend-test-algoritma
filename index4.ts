const diagonalReductionMatrix = (matrix: number[][]): number => {
  // inisialisasi diagonal pertama
  let diagonalPertama = 0

  // inisialisasi diagonal kedua
  let diagonalKedua = 0

  // inisialisasi panjang matrix n
  let n = matrix.length

  // looping setiap baris matrix hingga ke n
  for (let i = 0; i < n; i++) {
    diagonalPertama += matrix[i][i]
    diagonalKedua += matrix[i][n - i - 1]
  }

  return Math.abs(diagonalPertama - diagonalKedua)
}

const matrix: number[][] = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
]

const resultMatrix = diagonalReductionMatrix(matrix)
console.log('hasilnya adalah:', resultMatrix);
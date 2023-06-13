/*
Dada una matriz, escribe un algoritmo para establecer ceros en la fila F y columna C si existe un 0 en la celda F:C
Ejemplo:

Input: 
21302
74138
40121
93419

Output: 
00000
70108
00000
90409
*/

const getZeroPosition = (matrix: number[][]): number[][] => {
  const rowsWithZero: number[] = [];
  const columnsWithZeros: number[] = [];

  matrix.forEach((row, rowIndex) => {
    const findZero = row.findIndex((value) => value === 0);
    if (findZero > 0) {
      columnsWithZeros.push(findZero);
      rowsWithZero.push(rowIndex);
    }
  });

  return [rowsWithZero, columnsWithZeros];
};

const updateZerosInMatrix = (
  matrix: number[][],
  rowsWithZero: number[],
  columnsWithZeros: number[]
): number[][] => {
  return matrix.map((row, rowIndex) => {
    if (rowsWithZero.includes(rowIndex)) {
      return [0, 0, 0, 0, 0];
    }

    columnsWithZeros.forEach((columnIndex) => {
      row[columnIndex] = 0;
    });

    return row;
  });
};

const zeroMatrix = (matrix: number[][]): number[][] => {
  const [rowsWithZero, columnsWithZeros] = getZeroPosition(matrix);

  return updateZerosInMatrix(matrix, rowsWithZero, columnsWithZeros);
};

export default zeroMatrix;

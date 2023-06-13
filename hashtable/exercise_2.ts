/*
Dado un array de números enteros y un target, retorna los índices de dos * números para los que la suma de ambos sea igual al target.
Puedes asumir que hay solamente una solución.
Ejemplo 1:
Input: nums = [9,2,5,6], target = 7
Output: [1,2]
Explicación: nums[1] + nums [2] == 7, devolvemos [1, 2].
Ejemplo 2:
Input: nums = [9,2,5,6], target = 100
Output: null
*/

const indexOfSum = (numbers: number[], target: number): number[] | null => {
  if (numbers.length < 2) return null;

  const numbersProcessed: { [key: string]: number } = {};

  let result: [number, number] | null = null;

  for (let index = 0; index < numbers.length; index++) {
    const subtractionFormTarget = target - numbers[index];

    if (isNaN(numbersProcessed[subtractionFormTarget]) === false) {
      result = [numbersProcessed[subtractionFormTarget], index];
      break;
    }
    if (subtractionFormTarget > 0) {
      numbersProcessed[numbers[index]] = index;
    }
  }
  return result;
};

export default indexOfSum;

/*
Un anagrama es una palabra creada a partir de la reordenación de las letras de otra palabra. Ej: saco - caso
Dado un array de strings, devuelve los anagramas agrupados. Cualquier orden es válido.
Ejemplo:
Input: words = ["saco", "arresto", "programa", "rastreo", "caso"].
Output: [["saco", "caso"], ["arresto", "rastreo"], ["programa"]].
*/

const groupByAnagram = (words: string[]): string[][] => {
  const wordsProcessed: { [key: string]: string[] } = {};

  for (let index = 0; index < words.length; index++) {
    const key = [...words[index]].sort().join("");

    wordsProcessed[key] = [...(wordsProcessed[key] || []), words[index]];
  }

  return Object.values(wordsProcessed);
};

export default groupByAnagram;

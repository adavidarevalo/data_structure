// Dado un método que recibe una String, comprobar si todos los caracteres son únicos o no.
// isUnique("abcde") => true; isUnique("abcded") => false;

const IsUnique = (word: string) => {
  const asiic_total = 128;

  if (word.length > asiic_total) return false;

  const characters: { [key: string]: string } = {};

  for (let i = 0; i < word.length; i++) {
    if (characters[word[i]]) return false;

    characters[word[i]] = word[i];
  }
  return true;
};

export default IsUnique;

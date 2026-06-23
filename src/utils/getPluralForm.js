 /**
 * Повертає правильну форму слова залежно від числа
 * @param {number} count - кількість
 * @param {string} singular - форма для 1 (книжка)
 * @param {string} plural2to4 - форма для 2-4 (книжки)
 * @param {string} plural5plus - форма для 5+ (книжок)
 * @returns {string} - правильна форма слова
 */
export const getPluralForm = (count, singular, plural2to4, plural5plus) => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  // Якщо закінчується на 11-14, то завжди plural5plus
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return plural5plus;
  }

  // Якщо закінчується на 1, то singular
  if (lastDigit === 1) {
    return singular;
  }

  // Якщо закінчується на 2, 3, 4, то plural2to4
  if (lastDigit >= 2 && lastDigit <= 4) {
    return plural2to4;
  }

  // В інших випадках plural5plus
  return plural5plus;
};

/**
 * Для більш зручного використання з українськими книжками
 */
export const getBooksWord = (count) => {
  return getPluralForm(count, "книжка", "книжки", "книжок");
};

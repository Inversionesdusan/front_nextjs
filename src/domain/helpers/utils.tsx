export const removeAccents = (text: string): string => {
  const accentsMap: { [key: string]: string } = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
    ñ: "n",
    Ñ: "N",
    // Puedes agregar más pares de acentos aquí si es necesario
  };

  return text.replace(/[áéíóúÁÉÍÓÚñÑ]/g, (match) => accentsMap[match]);
};

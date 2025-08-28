// Normalizar: minúsculas, quitar tildes, trim
export const normalize = (s) =>
    s
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "") // acentos
.replace(/[^\w\s]|_/g, " ")      // puntuación -> espacio
.replace(/\s+/g, " ")            // colapsar espacios
.trim();


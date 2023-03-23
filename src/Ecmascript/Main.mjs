// Import de la fonction Search
import { Search } from './Fonction.mjs';

const findLongestWord = (words) => {
  // Utilisation de l'affectation par décomposition pour extraire la longueur des mots
  let lengths = words.map(({ length }) => length);
  
  // Utilisation de la méthode reduce pour trouver la longueur maximale
  let maxLength = lengths.reduce((a, b) => Math.max(a, b));
  
  // Utilisation de la méthode find pour trouver le mot correspondant à la longueur maximale
  let longestWord = words.find(({ length }) => length === maxLength);
  
  // Retourner le résultat sous forme d'objet
  return { mot: longestWord, longueur: maxLength };
}

// Exemple d'utilisation
let words = ["chien", "chat", "éléphant", "girafe"];
let result = findLongestWord(words);
console.log(result); // { mot: "éléphant", longueur: 8 }



const countOccurrences = (arr) => {
  // Utiliser la méthode .flat() pour aplatir le tableau et le transformer en un tableau de chaînes de caractères
  let flatArr = arr.flat();
  
  // Utiliser la méthode .reduce() pour compter les occurrences de chaque élément
  let count = flatArr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  
  // Retourner le résultat sous forme d'objet
  return count;
}

// Exemple d'utilisation
let arr = [["a", "b", "c"], ["b", "c", "d", "d"]];
let results = countOccurrences(arr);
console.log(results); // { a: 1, b: 2, c: 2, d: 2 }




const calculateTotalScore = (students) => {
  let totalScore = students
    // Filtrer les étudiants ayant une note supérieure à 50
    .filter((student) => student.score > 50)
    // Ajouter un bonus de 15 points aux étudiants ayant une note inférieure à 50
    .map((student) => {
      if (student.score < 50) {
        return { ...student, score: student.score + 15 };
      } else {
        return student;
      }
    })
    // Calculer le total des notes
    .reduce((total, student) => total + student.score, 0);

  return totalScore;
}

// Exemple d'utilisation
let students = [
  { name: "Alice", score: 75 },
  { name: "Bob", score: 40 },
  { name: "Charlie", score: 85 },
  { name: "Dave", score: 60 }
];
let result2 = calculateTotalScore(students);
console.log(result2); // 200 (75 + 60 + 65)



let lastID = 0; // Variable globale pour stocker la dernière valeur ID utilisée

let Tab = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

// Ajout de nouvelles entrées avec la méthode "push"
Tab.push({ name: "Dave", age: 40 });
Tab.push({ name: "Eve", age: 45 });

// Ajout de propriétés ID à chaque objet
Tab.forEach((item) => {
  item.ID = ++lastID; // Incrémentation de la variable globale et affectation de la nouvelle valeur à la propriété ID de l'objet
});

// Utilisation de la fonction Search pour rechercher l'objet avec l'ID 2 dans le tableau Tab
let result3 = Search(Tab, 2);
console.log(result3); // { name: "Bob", age: 30, ID: 2 }
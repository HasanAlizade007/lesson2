// Əlavə olunacaq tələbələrin siyahısı
const studentsData = [
    "Luis Montes",
    "Dylan Schiemann",
    "Christian Heilmann",
    "Jyoti Bishnoi",
    "Paul Shannon",
    "Liz Parody",
    "Daniel Khan",
    "April Wensel",
    "Yan Cui",
    "Marcus Blankenship",
    "Tony Edwards",
    "Emma Wedekind",
    "Tim Cook"
];

let currentIndex = 0;

function addStudent() {
    const list = document.getElementById('student-list');

    // Əgər siyahıda hələ ad qalıbsa
    if (currentIndex < studentsData.length) {
        // Yeni 'li' elementi yaradılır
        const newEntry = document.createElement('li');
        
        // Massivdəki növbəti ad mətni kimi mənimsədilir
        newEntry.textContent = studentsData[currentIndex];
        
        // Siyahıya (ul) əlavə edilir
        list.appendChild(newEntry);
        
        // Növbəti dəfə üçün indeks bir vahid artırılır
        currentIndex++;
    } else {
        alert("Bütün iştirakçılar siyahıya əlavə edildi.");
    }
}
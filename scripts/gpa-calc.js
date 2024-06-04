document.querySelector("button").addEventListener("click", () => {
    // 1. Get the string of grades from the input
    const grades = document.querySelector("input").value;

    // 2. Convert the string into an array
    const gradeArray = grades.split(",");
    console.log(gradeArray);

    const cleanGrades = gradeArray.map((grade) => grade.trim().toUpperCase());
    
    return cleanGrades;
});

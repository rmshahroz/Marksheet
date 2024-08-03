function calculateResult() {
    const ChemMarks = parseInt(document.getElementById('ChemMarks').value);
    const PhyMarks = parseInt(document.getElementById('PhyMarks').value);
    const UrduMarks = parseInt(document.getElementById('UrduMarks').value);
    const EngMarks = parseInt(document.getElementById('EngMarks').value);

    if (isNaN(ChemMarks) || isNaN(PhyMarks) || isNaN(UrduMarks) || isNaN(EngMarks)) {
        alert("Please enter valid marks for all subjects.");
        return;
    }

    const totalMarks = ChemMarks + PhyMarks + UrduMarks + EngMarks;
    const percentage = (totalMarks / 400) * 100;

    let grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('totalMarks').textContent = `Total Marks: ${totalMarks} / 400`;
    document.getElementById('percentage').textContent = `Percentage: ${percentage.toFixed(2)}%`;
    document.getElementById('grade').textContent = `Grade: ${grade}`;
    
    document.getElementById('result').style.display = 'block';
}
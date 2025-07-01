document.addEventListener('DOMContentLoaded', function () {
    const resultsData = [];

    // Add a student's full result data manually
    function addStudentResult(fullName, dob, yearEnrolled, fullResults) {
        resultsData.push({
            name: fullName,
            dob: dob,
            yearEnrolled: yearEnrolled,
            results: fullResults
        });
    }

    // Example: Manually adding full results for Alidu Abdul-Aziz
    addStudentResult(
        "Alidu Abdul-Aziz",
        "06/06/2004",
        2016,
        {
            "Form 1": {
                "Term 1": {
                    year: 2016,
                    subjects: [
                        { name: "English", score: 75, grade: "2" },
                        { name: "Core Maths", score: 88, grade: "A" },
                        { name: "Integrated Science", score: 82, grade: "1" },
                        { name: "Social Studies", score: 70, grade: "2" },
                        { name: "Gonja", score: 65, grade: "C" },
                        { name: "Computing (ICT)", score: 80, grade: "1" },
                        { name: "Career Technology", score: 79, grade: "2" },
                        { name: "Creative Art and Technology", score: 85, grade: "1" }
                    ],
                    position: "4th",
                    remarks: "Well done!"
                },
                "Term 2": {
                    year: 2016,
                    subjects: [
                        { name: "English", score: 80, grade: "A" },
                        { name: "Core Maths", score: 82, grade: "A" },
                        { name: "Integrated Science", score: 88, grade: "A+" },
                        { name: "Social Studies", score: 74, grade: "B" },
                        { name: "Gonja", score: 68, grade: "C" },
                        { name: "Computing (ICT)", score: 90, grade: "A+" },
                        { name: "Career Technology", score: 72, grade: "B" },
                        { name: "Creative Art and Technology", score: 77, grade: "B" }
                    ],
                    position: "3rd",
                    remarks: "Consistent performance."
                },
                "Term 3": {
                    year: 2016,
                    subjects: [
                        { name: "English", score: 72, grade: "B" },
                        { name: "Core Maths", score: 84, grade: "A" },
                        { name: "Integrated Science", score: 90, grade: "A+" },
                        { name: "Social Studies", score: 76, grade: "B" },
                        { name: "Gonja", score: 70, grade: "B" },
                        { name: "Computing (ICT)", score: 88, grade: "A" },
                        { name: "Career Technology", score: 78, grade: "B" },
                        { name: "Creative Art and Technology", score: 80, grade: "A" }
                    ],
                    position: "2nd",
                    remarks: "Excellent term."
                }
            },
            "Form 2": {
                "Term 1": { year: 2017, subjects: [], position: "", remarks: "" },
                "Term 2": { year: 2017, subjects: [], position: "", remarks: "" },
                "Term 3": { year: 2017, subjects: [], position: "", remarks: "" }
            },
            "Form 3": {
                "Term 1": { year: 2018, subjects: [], position: "", remarks: "" },
                "Term 2": { year: 2018, subjects: [], position: "", remarks: "" },
                "Term 3": { year: 2018, subjects: [], position: "", remarks: "" }
            }
        }
    );

    // Form search logic
    document.getElementById('results-search-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('student-name').value.trim();
        const year = parseInt(document.getElementById('student-class').value);
        const dob = document.getElementById('dob').value.trim();

        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dob)) {
            alert('Please enter date of birth in DD/MM/YYYY format');
            return;
        }

        const student = resultsData.find(s =>
            s.name.toLowerCase() === name.toLowerCase() &&
            s.dob === dob &&
            s.yearEnrolled === year
        );

        if (!student) {
            displayNoResults();
        } else {
            displayFullResults(student);
        }
    });

    function displayNoResults() {
        document.getElementById('results-display').innerHTML = `
            <div class="no-results">
                <h3>No Results Found</h3>
                <p>Please check the information you entered and try again.</p>
            </div>
        `;
    }

    function displayFullResults(student) {
        let html = `<h2>Results for ${student.name}</h2>`;
        html += `<p><strong>Date of Birth:</strong> ${student.dob}</p>`;
        html += `<p><strong>Year Enrolled:</strong> ${student.yearEnrolled}</p>`;

        for (let form = 1; form <= 3; form++) {
            const formKey = `Form ${form}`;
            html += `<h3>${formKey}</h3>`;

            for (let term = 1; term <= 3; term++) {
                const termKey = `Term ${term}`;
                const termResult = student.results[formKey][termKey];

                if (!termResult || termResult.subjects.length === 0) {
                    html += `<p><strong>${termKey}:</strong> No data.</p>`;
                    continue;
                }

                const total = termResult.subjects.reduce((sum, s) => sum + s.score, 0);
                const avg = total / termResult.subjects.length;

                const subjectsHTML = termResult.subjects.map(subject => `
                    <tr><td>${subject.name}</td><td>${subject.score}</td><td>${subject.grade}</td></tr>
                `).join('');

                html += `
                    <h4>${termKey} (${termResult.year})</h4>
                    <table>
                        <thead>
                            <tr><th>Subject</th><th>Score</th><th>Grade</th></tr>
                        </thead>
                        <tbody>${subjectsHTML}</tbody>
                        <tfoot>
                            <tr><th>Total</th><td>${total}</td><td></td></tr>
                            <tr><th>Average</th><td>${avg.toFixed(2)}</td><td></td></tr>
                        </tfoot>
                    </table>
                    <p><strong>Position:</strong> ${termResult.position}</p>
                    <p><strong>Remarks:</strong> ${termResult.remarks}</p>
                `;
            }
        }

        html += `<div class="results-actions"><button onclick="window.print()">Print</button></div>`;
        document.getElementById('results-display').innerHTML = html;
    }
});
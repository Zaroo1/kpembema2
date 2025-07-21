// Academics page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Timetable data for JHS1, JHS2, and JHS3 (based on JH7, JH8, JH9 adjusted)
    const timetableData = {
        "JHS1": [
            {"day": "Monday", "periods": [
                {"time": "7:00 - 7:15", "subject": "CLEANING"},
                {"time": "7:15 - 7:20", "subject": "REGISTER MARKING"},
                {"time": "7:20 - 7:55", "subject": "English Language"},
                {"time": "7:55 - 8:30", "subject": "English language"},
                {"time": "8:30 - 9:05", "subject": "R.M.E"},
                {"time": "9:05 - 9:40", "subject": "R.M.E"},
                {"time": "9:40 - 10:10", "subject": "Break"},
                {"time": "10:10 - 10:45", "subject": "Mathematica"},
                {"time": "10:45 - 11:20", "subject": "Mathematics"},
                {"time": "11:20 - 11:55", "subject": " Int. Science"},
                {"time": "11:55 - 12:30", "subject": "Int. Science"},
                {"time": "12:30 - 12:50", "subject": "Int. Science"},
                {"time": "12:50 - 1:25", "subject": "Career Tech."},
                {"time": "1:25 - 2:00", "subject": "Career Tech."}
            ]},
            {"day": "Tuesday", "periods": [
                {"time": "7:00 - 7:15", "subject": "CLEANING"},
                {"time": "7:15 - 7:20", "subject": "REGISTER"},
                {"time": "7:20 - 7:55", "subject": "Mathematics"},
                {"time": "7:55 - 8:30", "subject": "Mathematics"},
                {"time": "8:30 - 9:05", "subject": "Computing"},
                {"time": "9:05 - 9:40", "subject": "Computing"},
                {"time": "9:40 - 10:10", "subject": "Break"},
                {"time": "10:10 - 10:45", "subject": "Emglish language"},
                {"time": "10:45 - 11:20", "subject": "English Language"},
                {"time": "11:20 - 11:55", "subject": "Gonja"},
                {"time": "11:55 - 12:30", "subject": "Gonja"},
                {"time": "12:30 - 12:50", "subject": "Break"},
                {"time": "12:50 - 1:25", "subject": "Social Studies"},
                {"time": "1:25 - 2:00", "subject": "Social Studies"}
            ]},
            {"day": "Wednesday", "periods": [
                {"time": "7:00 - 7:15", "subject": "Cleaning"},
                {"time": "7:15 - 7:20", "subject": "Register"},
                {"time": "7:20 - 7:55", "subject": "P.H.E"},
                {"time": "7:55 - 8:30", "subject": "P.H.E"},
                {"time": "8:30 - 9:05", "subject": "English Language"},
                {"time": "9:05 - 9:40", "subject": "Break"},
                {"time": "9:40 - 10:10", "subject": "Break"},
                {"time": "10:10 - 10:45", "subject": "Computing"},
                {"time": "10:45 - 11:20", "subject": "Computing"},
                {"time": "11:20 - 11:55", "subject": "Computing"},
                {"time": "11:55 - 12:30", "subject": "Social Studies"},
                {"time": "12:30 - 12:50", "subject": "Social studies"},
                {"time": "12:50 - 1:25", "subject": "R.M.E"},
                {"time": "1:25 - 2:00", "subject": "R.M.E"}
            ]},
            {"day": "Thursday", "periods": [
                {"time": "7:00 - 7:15", "subject": "Cleaning"},
                {"time": "7:15 - 7:20", "subject": "Register"},
                {"time": "7:20 - 7:55", "subject": "Int. Science"},
                {"time": "7:55 - 8:30", "subject": "Int. Science"},
                {"time": "8:30 - 9:05", "subject": "Mathematics"},
                {"time": "9:05 - 9:40", "subject": "Break"},
                {"time": "9:40 - 10:10", "subject": "Break"},
                {"time": "10:10 - 10:45", "subject": "Emglish Language"},
                {"time": "10:45 - 11:20", "subject": "English Language"},
                {"time": "11:20 - 11:55", "subject": "Gonja"},
                {"time": "11:55 - 12:30", "subject": "Gonja"},
                {"time": "12:30 - 12:50", "subject": "2nd Break"},
                {"time": "12:50 - 1:25", "subject": "2nd Break"},
                {"C.A.D": "1:25 - 2:00", "subject": "C.A.D"}
            ]},
            {"day": "Friday", "periods": [
                {"time": "7:00 - 7:15", "subject": "Cleaning"},
                {"time": "7:15 - 7:20", "subject": "Register marking"},
                {"time": "7:20 - 7:55", "subject": "Social Studies"},
                {"time": "7:55 - 8:30", "subject": "Social Studies"},
                {"time": "8:30 - 9:05", "subject": "Career Tech."},
                {"time": "9:05 - 9:40", "subject": "Career Tech."},
                {"time": "9:40 - 10:10", "subject": "1st Break"},
                {"time": "10:10 - 10:45", "subject": "1st Break"},
                {"time": "10:45 - 11:20", "subject": "Social Studies"},
                {"time": "11:20 - 11:55", "subject": "C.A.D"},
                {"time": "11:55 - 12:30", "subject": "C.A.D"},
                {"time": "12:30 - 12:50", "subject": "Break"},
                {"time": "12:50 - 1:25", "subject": ""},
                {"time": "1:25 - 2:00", "subject": ""}
            ]}
        ],
        "JHS2": [
            {"day": "Monday", "periods": [
                {"time": "7:00 - 7:15", "subject": "Cleaning"},
                {"time": "7:15 - 7:20", "subject": "Register"},
                {"time": "7:20 - 7:55", "subject": "Core Mathematics"},
                {"time": "7:55 - 8:30", "subject": "Core Mathematics"},
                {"time": "8:30 - 9:05", "subject": "Social Studies"},
                {"time": "9:05 - 9:40", "subject": "Social Studies"},
                {"time": "9:40 - 10:10", "subject": "BREAK"},
                {"time": "10:10 - 10:45", "subject": "English Lnguage"},
                {"time": "10:45 - 11:20", "subject": "English Language"},
                {"time": "11:20 - 11:55", "subject": "R.M.E"},
                {"time": "11:55 - 12:30", "subject": "R.M.E"},
                {"time": "12:30 - 12:50", "subject": "Break"},
                {"time": "12:50 - 1:25", "subject": "Int. Science"},
                {"time": "1:25 - 2:00", "subject": "Int. Science"}
            ]},
            {"day": "Tuesday", "periods": [
                {"time": "7:00 - 7:15", "subject": "Cleaning"},
                {"time": "7:15 - 7:20", "subject": "Register"},
                {"time": "7:20 - 7:55", "subject": "English Language"},
                {"time": "7:55 - 8:30", "subject": "English Language"},
                {"time": "8:30 - 9:05", "subject": "Gonja"},
                {"time": "9:05 - 9:40", "subject": "Gonja"},
                {"time": "9:40 - 10:10", "subject": "Break"},
                {"time": "10:10 - 10:45", "subject": "Computing"},
                {"time": "10:45 - 11:20", "subject": "Computing"},
                {"time": "11:20 - 11:55", "subject": "Career Tech"},
                {"time": "11:55 - 12:30", "subject": "Career Tech"},
                {"time": "12:30 - 12:50", "subject": "Break"},
                {"time": "12:50 - 1:25", "subject": "C.A.D"},
                {"time": "1:25 - 2:00", "subject": "C.A.D"}
            ]},
            {"day": "Wednesday", "periods": [
                {"time": "7:00 - 7:15", "subject": "Cleaning"},
                {"time": "7:15 - 7:20", "subject": "Register"},
                {"time": "7:20 - 7:55", "subject": "R.M.E"},
                {"time": "7:55 - 8:30", "subject": "R.M.E"},
                {"time": "8:30 - 9:05", "subject": "C.A.D"},
                {"time": "9:05 - 9:40", "subject": "C.A.D"},
                {"time": "9:40 - 10:10", "subject": "Break"},
                {"time": "10:10 - 10:45", "subject": "English Lang"},
                {"time": "10:45 - 11:20", "subject": "English Lang"},
                {"time": "11:20 - 11:55", "subject": "Int. Science"},
                {"time": "11:55 - 12:30", "subject": "Int. Science"},
                {"time": "12:30 - 12:50", "subject": "Break"},
                {"time": "12:50 - 1:25", "subject": "Social Studies"},
                {"time": "1:25 - 2:00", "subject": "Social Studies"}
            ]},
            {"day": "Thursday", "periods": [
                {"time": "7:00 - 7:15", "subject": "Cleaning"},
                {"time": "7:15 - 7:20", "subject": "Register"},
                {"time": "7:20 - 7:55", "subject": "Career Tech"},
                {"time": "7:55 - 8:30", "subject": "Career Tech"},
                {"time": "8:30 - 9:05", "subject": "Gonja"},
                {"time": "9:05 - 9:40", "subject": "Gonja"},
                {"time": "9:40 - 10:10", "subject": "Break"},
                {"time": "10:10 - 10:45", "subject": "Social Studies"},
                {"time": "10:45 - 11:20", "subject": "Social Studies"},
                {"time": "11:20 - 11:55", "subject": "Computing"},
                {"time": "11:55 - 12:30", "subject": "Computing"},
                {"time": "12:30 - 12:50", "subject": "Break"},
                {"time": "12:50 - 1:25", "subject": "Mathematics"},
                {"time": "1:25 - 2:00", "subject": "Mathematics"}
            ]},
            {"day": "Friday", "periods": [
                {"time": "7:00 - 7:15", "subject": "Cleaning"},
                {"time": "7:15 - 7:20", "subject": "Register"},
                {"time": "7:20 - 7:55", "subject": "Mathematics"},
                {"time": "7:55 - 8:30", "subject": "English Language"},
                {"time": "8:30 - 9:05", "subject": "Break"},
                {"time": "9:05 - 9:40", "subject": "Integrated Science"},
                {"time": "9:40 - 10:10", "subject": "Gonja"},
                {"time": "10:10 - 10:45", "subject": "Break"},
                {"time": "10:45 - 11:20", "subject": "Social Studies"},
                {"time": "11:20 - 11:55", "subject": ""},
                {"time": "11:55 - 12:30", "subject": ""},
                {"time": "12:30 - 12:50", "subject": "Break"},
                {"time": "12:50 - 1:25", "subject": ""},
                {"time": "1:25 - 2:00", "subject": ""}
            ]}
        ],
        "JHS3": [
            {"day": "Monday", "periods": [
                {"time": "7:00 - 7:15", "subject": "C"},
                {"time": "7:15 - 7:20", "subject": "R"},
                {"time": "7:20 - 7:55", "subject": "Career Tech."},
                {"time": "7:55 - 8:30", "subject": "Inter. Science"},
                {"time": "8:30 - 9:05", "subject": "Break"},
                {"time": "9:05 - 9:40", "subject": "Gonja"},
                {"time": "9:40 - 10:10", "subject": "Social Studies"},
                {"time": "10:10 - 10:45", "subject": "Break"},
                {"time": "10:45 - 11:20", "subject": "English Language"},
                {"time": "11:20 - 11:55", "subject": ""},
                {"time": "11:55 - 12:30", "subject": ""},
                {"time": "12:30 - 12:50", "subject": "Break"},
                {"time": "12:50 - 1:25", "subject": ""},
                {"time": "1:25 - 2:00", "subject": ""}
            ]},
            {"day": "Tuesday", "periods": [
                {"time": "7:00 - 7:15", "subject": "C"},
                {"time": "7:15 - 7:20", "subject": "R"},
                {"time": "7:20 - 7:55", "subject": "R.M.E"},
                {"time": "7:55 - 8:30", "subject": "Social Studies"},
                {"time": "8:30 - 9:05", "subject": "Break"},
                {"time": "9:05 - 9:40", "subject": "Mathematics"},
                {"time": "9:40 - 10:10", "subject": "English Language"},
                {"time": "10:10 - 10:45", "subject": "Break"},
                {"time": "10:45 - 11:20", "subject": "Gonja"},
                {"time": "11:20 - 11:55", "subject": ""},
                {"time": "11:55 - 12:30", "subject": ""},
                {"time": "12:30 - 12:50", "subject": "Break"},
                {"time": "12:50 - 1:25", "subject": ""},
                {"time": "1:25 - 2:00", "subject": ""}
            ]},
            {"day": "Wednesday", "periods": [
                {"time": "7:00 - 7:15", "subject": "C"},
                {"time": "7:15 - 7:20", "subject": "R"},
                {"time": "7:20 - 7:55", "subject": "English Language"},
                {"time": "7:55 - 8:30", "subject": "Mathematics"},
                {"time": "8:30 - 9:05", "subject": "Break"},
                {"time": "9:05 - 9:40", "subject": "Integrated Science"},
                {"time": "9:40 - 10:10", "subject": "Social Studies"},
                {"time": "10:10 - 10:45", "subject": "Break"},
                {"time": "10:45 - 11:20", "subject": "Gonja"},
                {"time": "11:20 - 11:55", "subject": ""},
                {"time": "11:55 - 12:30", "subject": ""},
                {"time": "12:30 - 12:50", "subject": "Break"},
                {"time": "12:50 - 1:25", "subject": ""},
                {"time": "1:25 - 2:00", "subject": ""}
            ]},
            {"day": "Thursday", "periods": [
                {"time": "7:00 - 7:15", "subject": "C"},
                {"time": "7:15 - 7:20", "subject": "R"},
                {"time": "7:20 - 7:55", "subject": "Mathematics"},
                {"time": "7:55 - 8:30", "subject": "Integrated Science"},
                {"time": "8:30 - 9:05", "subject": "Break"},
                {"time": "9:05 - 9:40", "subject": "English Language"},
                {"time": "9:40 - 10:10", "subject": "R.M.E"},
                {"time": "10:10 - 10:45", "subject": "Break"},
                {"time": "10:45 - 11:20", "subject": "Social Studies"},
                {"time": "11:20 - 11:55", "subject": ""},
                {"time": "11:55 - 12:30", "subject": ""},
                {"time": "12:30 - 12:50", "subject": "Break"},
                {"time": "12:50 - 1:25", "subject": ""},
                {"time": "1:25 - 2:00", "subject": ""}
            ]},
            {"day": "Friday", "periods": [
                {"time": "7:00 - 7:15", "subject": "C"},
                {"time": "7:15 - 7:20", "subject": "R"},
                {"time": "7:20 - 7:55", "subject": "Social Studies"},
                {"time": "7:55 - 8:30", "subject": "Mathematics"},
                {"time": "8:30 - 9:05", "subject": "Break"},
                {"time": "9:05 - 9:40", "subject": "English Language"},
                {"time": "9:40 - 10:10", "subject": "Career Tech."},
                {"time": "10:10 - 10:45", "subject": "Break"},
                {"time": "10:45 - 11:20", "subject": "Integrated Science"},
                {"time": "11:20 - 11:55", "subject": ""},
                {"time": "11:55 - 12:30", "subject": ""},
                {"time": "12:30 - 12:50", "subject": "Break"},
                {"time": "12:50 - 1:25", "subject": ""},
                {"time": "1:25 - 2:00", "subject": ""}
            ]}
        ]
    };
    
    // Exam timetable data for Term 1, Term 2, and Term 3
    const examTimetableData = {
        "Term 1": [
            {"date": "07/15/2025", "day": "Tuesday", "subject": "Mathematics", "time": "8:00 - 10:00"},
            {"date": "07/16/2025", "day": "Wednesday", "subject": "English Language", "time": "8:00 - 10:00"},
            {"date": "07/17/2025", "day": "Thursday", "subject": "Integrated Science", "time": "8:00 - 10:00"},
            {"date": "07/18/2025", "day": "Friday", "subject": "Social Studies", "time": "8:00 - 10:00"}
        ],
        "Term 2": [
            {"date": "11/05/2025", "day": "Wednesday", "subject": "Gonja", "time": "8:00 - 10:00"},
            {"date": "11/06/2025", "day": "Thursday", "subject": "R.M.E", "time": "8:00 - 10:00"},
            {"date": "11/07/2025", "day": "Friday", "subject": "Computing", "time": "8:00 - 10:00"},
            {"date": "11/10/2025", "day": "Monday", "subject": "Career Tech.", "time": "8:00 - 10:00"}
        ],
        "Term 3": [
            {"date": "03/10/2026", "day": "Tuesday", "subject": "Mathematics", "time": "8:00 - 10:00"},
            {"date": "03/11/2026", "day": "Wednesday", "subject": "English Language", "time": "8:00 - 10:00"},
            {"date": "03/12/2026", "day": "Thursday", "subject": "Integrated Science", "time": "8:00 - 10:00"},
            {"date": "03/13/2026", "day": "Friday", "subject": "Social Studies", "time": "8:00 - 10:00"}
        ]
    };
    
    // Load timetable when tab is clicked
    document.querySelector('[data-tab="timetable"]').addEventListener('click', function() {
        // In a real implementation, you would fetch this data or generate it
        const timetableHTML = `
            <div class="timetable-options">
                <select id="class-select">
                    <option value="JHS1">JHS 1</option>
                    <option value="JHS2">JHS 2</option>
                    <option value="JHS3">JHS 3</option>
                </select>
                <button id="view-timetable" class="btn-small">View Timetable</button>
            </div>
            <div id="timetable-view"></div>
        `;
        
        document.getElementById('timetable-container').innerHTML = timetableHTML;
        
        document.getElementById('view-timetable').addEventListener('click', function() {
            const selectedClass = document.getElementById('class-select').value;
            displayTimetable(selectedClass);
        });
    });
    
    function displayTimetable(className) {
        const timetableView = document.getElementById('timetable-view');
        let tableHTML = `<h3>${className} Timetable</h3><table><tr><th>Day</th><th>Time</th><th>Subject</th></tr>`;
        
        timetableData[className].forEach(day => {
            day.periods.forEach(period => {
                tableHTML += `<tr><td>${day.day}</td><td>${period.time}</td><td>${period.subject}</td></tr>`;
            });
        });
        
        tableHTML += `</table><p class="note">Note: This is a sample timetable. Actual timetable may vary.</p>`;
        timetableView.innerHTML = tableHTML;
    }
    
    // Similar implementation for exam timetable
    document.querySelector('[data-tab="exam-timetable"]').addEventListener('click', function() {
        const examTimetableHTML = `
            <div class="exam-options">
                <select id="term-select">
                    <option value="Term 1">Term 1</option>
                    <option value="Term 2">Term 2</option>
                    <option value="Term 3">Term 3</option>
                </select>
                <button id="view-exam-timetable" class="btn-small">View Exam Timetable</button>
            </div>
            <div id="exam-timetable-view"></div>
        `;
        
        document.getElementById('exam-timetable-container').innerHTML = examTimetableHTML;
        
        document.getElementById('view-exam-timetable').addEventListener('click', function() {
            const selectedTerm = document.getElementById('term-select').value;
            displayExamTimetable(selectedTerm);
        });
    });
    
    function displayExamTimetable(term) {
        const examTimetableView = document.getElementById('exam-timetable-view');
        let tableHTML = `<h3>${term} Examination Timetable</h3><table><tr><th>Date</th><th>Day</th><th>Subject</th><th>Time</th></tr>`;
        
        examTimetableData[term].forEach(exam => {
            tableHTML += `<tr><td>${exam.date}</td><td>${exam.day}</td><td>${exam.subject}</td><td>${exam.time}</td></tr>`;
        });
        
        tableHTML += `</table><p class="note">Note: Timetable might not always be followed strictly</p>`;
        examTimetableView.innerHTML = tableHTML;
    }
});

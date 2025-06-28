// Academics page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Sample timetable data - replace with your actual data
    const timetableData = {
        "JHS1": [
            {"day": "Monday", "periods": [
                {"time": "7:30 - 8:30", "subject": "Mathematics", "teacher": "Mr. Adam"},
                {"time": "8:30 - 9:30", "subject": "English", "teacher": "Ms. Beatrice"},
                // Add more periods...
            ]},
            // Add more days...
        ],
        // Add data for JHS2 and JHS3
    };
    
    const examTimetableData = {
        "Term 1": [
            {"date": "10/03/2025", "day": "Monday", "subject": "Mathematics", "time": "8:00 - 10:00"},
            // Add more exams...
        ],
        // Add data for other terms
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
        // This is a simplified example - in reality, you'd use the timetableData
        const timetableView = document.getElementById('timetable-view');
        timetableView.innerHTML = `
            <h3>${className} Timetable</h3>
            <table>
                <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Subject</th>
                    <th>Teacher</th>
                </tr>
                <tr>
                    <td>Monday</td>
                    <td>7:30 - 8:30</td>
                    <td>Mathematics</td>
                    <td>Mr. Adam</td>
                </tr>
                <!-- Add more rows as needed -->
            </table>
            <p class="note">Note: This is a sample timetable. Actual timetable may vary.</p>
        `;
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
        examTimetableView.innerHTML = `
            <h3>${term} Examination Timetable</h3>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Subject</th>
                    <th>Time</th>
                </tr>
                <tr>
                    <td>10/03/2025</td>
                    <td>Monday</td>
                    <td>Mathematics</td>
                    <td>8:00 - 10:00</td>
                </tr>
                <!-- Add more rows as needed -->
            </table>
            <p class="note">Note: This is a sample timetable. Actual exam timetable may vary.</p>
        `;
    }
});
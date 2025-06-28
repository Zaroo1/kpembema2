// Staff page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Sample staff data - replace with actual staff information
    const staffData = [
        {
            "name": "Mr. Alhassan Adam",
            "position": "Headteacher",
            "subjects": ["Mathematics", "Science"],
            "phone": "+233 XX XXX XXXX",
            "email": "headteacher@kpembemajhs.edu.gh",
            "bio": "Mr. Adam has been the headteacher of KPEMBE M/A JHS since 2015. He holds a Bachelor's degree in Education from the University of Education, Winneba.",
            "photo": "head.jpg"
        },
        {
            "name": "Ms. Beatrice Bawa",
            "position": "English Teacher",
            "subjects": ["English Language", "Literature"],
            "phone": "+233 XX XXX XXXX",
            "email": "bbawa@kpembemajhs.edu.gh",
            "bio": "Ms. Bawa joined the school in 2018. She specializes in English language teaching and has helped improve students' performance in BECE.",
            "photo": "english.jpg"
        },
        // Add more staff members
    ];
    
    // Display all staff initially
    displayStaff(staffData);
    
    // Search functionality
    document.getElementById('staff-search').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredStaff = staffData.filter(staff => 
            staff.name.toLowerCase().includes(searchTerm) ||
            staff.subjects.some(subject => subject.toLowerCase().includes(searchTerm)) ||
            staff.position.toLowerCase().includes(searchTerm)
        );
        displayStaff(filteredStaff);
    });
    
    function displayStaff(staffList) {
        const staffContainer = document.getElementById('staff-container');
        
        if (staffList.length === 0) {
            staffContainer.innerHTML = '<p>No staff members found matching your search.</p>';
            return;
        }
        
        let html = '<div class="staff-grid">';
        
        staffList.forEach(staff => {
            html += `
                <div class="staff-card">
                    <div class="staff-photo">
                        <img src="${staff.photo}" alt="${staff.name}">
                    </div>
                    <div class="staff-info">
                        <h3>${staff.name}</h3>
                        <p class="position">${staff.position}</p>
                        <p class="subjects">Teaches: ${staff.subjects.join(', ')}</p>
                        <div class="contact-info">
                            <p><strong>Phone:</strong> ${staff.phone}</p>
                            <p><strong>Email:</strong> ${staff.email}</p>
                        </div>
                        <div class="bio">
                            <p>${staff.bio}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        staffContainer.innerHTML = html;
    }
});
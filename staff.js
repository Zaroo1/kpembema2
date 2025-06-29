// Staff page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Sample staff data - replace with actual staff information
    const staffData = [
        {
            "name": "MEET OUT DEDICATED AND HARDWORKING STAFF", "position": "Number of Teachers",
            "subjects": ["Eleven(11)"],
            "phone": "+233 Loading...",
            "email": "kpembemajhs441@gmail.com",//
            "bio": "Education and Culture for Development",
           
            "photo": "staff.jpg"
        },
        
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
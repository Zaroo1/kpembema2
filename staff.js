// Staff page JavaScript (Name, Phone, and Photo only)

document.addEventListener('DOMContentLoaded', function() {
    // Staff data - name, phone, and photo only
    const staffData = [
        {
            "name": "MEET OUT DEDICATED AND HARDWORKING STAFF",
            "phone": "Loading below....",
            "photo": "staff.jpg"
        },
        {
            "name": "Mr Zak: Mathematics",
            "phone": "+233 24 692 2670",
            "photo": "zak.jpg"
        },
        // Add more staff members as needed
 {
            "name": "Mr Inusah Rashad: Gonja",
            "phone": "+233 54 920 2640",
            "photo": "rashad.jpg"
        },


    ];

    // Display all staff initially
    displayStaff(staffData);

    // Search functionality (searches by name only)
    document.getElementById('staff-search').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredStaff = staffData.filter(staff => 
            staff.name.toLowerCase().includes(searchTerm)
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
                        <p><strong>Phone:</strong> ${staff.phone}</p>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        staffContainer.innerHTML = html;
    }
});
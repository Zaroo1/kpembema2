// Staff page JavaScript (Name, Phone, Photo, and optional Bio)

document.addEventListener('DOMContentLoaded', function() {
    // Staff data - name, phone, photo, and optional bio
    const staffData = [
        {
            "name": "MEET OUT DEDICATED AND HARDWORKING STAFF",
            "phone": "kpembemajhs441@gmail.com",
            "photo": "staff.jpg"
            // No bio for this one
        },
        {
            "name": "Alhaji Abubakari Wahab (Headteacher)",
            "phone": "Loading...",
            "photo": "head.jpg",
            "bio": "Dedicated headteacher with a focus on academic excellence and discipline. Has been serving in the school since 2024!"
        },
        {
            "name": "Sulemana Zakaria: Core Mathematics",
            "phone": "Loading...",
            "photo": "zak.jpg",
            "bio": "Experienced mathematics teacher known for making complex topics easy to understand. Has been serving in the school since 2016!"
        },
        {
            "name": "Bukari Mohammed Shaibu(BMS): Integrated Science",
            "phone": "Loading...",
            "photo": "bms.jpg",
            "bio": "Science enthusiast who encourages curiosity and hands-on learning in the classroom. Has been serving in the school since 2019"
        },
        {
            "name": "Inusah Rashad: Social Studies and Gonja",
            "phone": "Loading...",
            "photo": "rashad.jpg",
            "bio": "Loves teaching Ghanaian traditions, History, relations and culture through language and social studies!"
        },
        {
            "name": "Abdul Rahman Mohammed Awal: English Language",
            "phone": "Loading...",
            "photo": "english.jpg",
            "bio": "Passionate about English literature and grammar. Loves helping students express themselves."
        },
        {
            "name": "Madam Asare Deborah: English Language",
            "phone": "Loading...",
            "photo": "deborah.jpg",
            "bio": "Passionate about English literature and grammar."
        }
        //{
           // "name": "Linda Mensah: Home Economics",
           // "phone": "Loading...",
            //"photo": "linda.jpg",
            //"bio": "Creative and skilled in teaching cooking, sewing, and home management."
       // },
     //   {
      //      "name": "Kofi Boakye: PE & Sports",
         //   "phone": "Loading...",
           // "photo": "kofi.jpg",
          //  "bio": "Energetic sports coach who promotes fitness and teamwork among students."
        //},
        //{
         //   "name": "Grace Abena: Social Studies",
          //  "phone": "Loading...",
           // "photo": "grace.jpg",
          //  "bio": "Enjoys helping students understand society, culture, and civic responsibility."
        //}//
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
                        ${staff.bio ? `<p><em>${staff.bio}</em></p>` : ''}
                    </div>
                </div>
            `;
        });

        html += '</div>';
        staffContainer.innerHTML = html;
    }
});
// News page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Sample news data - replace with actual news items
    const newsData = [
        {
            "title": "Internal Quiz Competitions",
            "date": "15/06/2025",
            "category": "events",
            "content": "At our school, we believe in nurturing not just academic excellence, but also confidence, critical thinking, and teamwork. One of the ways we achieve this is through regularly organized quizzes and debates. These competitions are held internally and often involve either inter-class contests or inter-compound challenges. The goal is to encourage students to take their studies seriously and to prepare them to excel in their final exams. Through these engaging and friendly competitions, students develop a healthy spirit of academic rivalry, boost their self-confidence, and deepen their understanding of classroom topics in a fun and interactive way.",
            "image": "quiz.jpg"
        },
        {
            "title": "Speech by outgone prefects",
            "date": "15/06/2025",
            "category": "events",
            "content": "The school Bids farewell to its last batch of prefects",
            "image": "prefects.jpg"
        },
        // Add more news items
    ];
    
    // Display all news initially
    displayNews(newsData);
    
    // Filter functionality
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            if (filter === 'all') {
                displayNews(newsData);
            } else {
                const filteredNews = newsData.filter(item => item.category === filter);
                displayNews(filteredNews);
            }
        });
    });
    
    function displayNews(newsList) {
        const newsContainer = document.getElementById('news-container');
        
        if (newsList.length === 0) {
            newsContainer.innerHTML = '<p>No news items found in this category.</p>';
            return;
        }
        
        let html = '';
        
        newsList.forEach(news => {
            html += `
                <div class="news-item" data-category="${news.category}">
                    <div class="news-image">
                        <img src="${news.image}" alt="${news.title}">
                    </div>
                    <div class="news-content">
                        <span class="news-date">${news.date}</span>
                        <h3>${news.title}</h3>
                        <p>${news.content}</p>
                    </div>
                </div>
            `;
        });
        
        newsContainer.innerHTML = html;
    }
});
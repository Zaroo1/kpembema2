// News page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Sample news data - replace with actual news items
    const newsData = [
        {
            "title": "School introduces a new headmaster",
            "date": "15/06/2025",
            "category": "achievements",
            "content": "Our school has got a new head",
            "image": "head.jpg"
        },
        {
            "title": "Cultural Day Celebration",
            "date": "05/06/2025",
            "category": "events",
            "content": "The school celebrated its annual Cultural Day with performances showcasing the rich traditions of the various ethnic groups in Ghana.",
            "image": "english.jpg"
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
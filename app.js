const songs = [
    {
        "id": "song-001",
        "title": "Runaway (feat. Pusha T)",
        "artist": "Kanye West",
        "category": "Conscious Rap",
        "youtubeUrl": "https://www.youtube.com/embed/Bm5iA4Zupek",
        "description": "出自 Pitchfork 滿分 10/10 世紀神專《My Beautiful Dark Twisted Fantasy》。長達九分鐘的史詩巨作，將自省與華麗編曲完美融合。",
        "coverUrl": "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=500&q=80"
    },
    {
        "id": "song-002",
        "title": "A Milli",
        "artist": "Lil Wayne",
        "category": "Southern Hip Hop",
        "youtubeUrl": "https://www.youtube.com/embed/O8Uhn-dU3Gg",
        "description": "出自 Pitchfork 評分 8.7 的經典作《Tha Carter III》。極簡卻洗腦的採樣與 Weezy 巔峰時期的頂級 Flow，成為千禧年南方嘻哈的黃金標竿。",
        "coverUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80"
    },
    {
        "id": "song-003",
        "title": "All Falls Down",
        "artist": "Kanye West",
        "category": "Soul-Sample",
        "youtubeUrl": "https://www.youtube.com/embed/8kyWDhB_Qfe",
        "description": "出自 Pitchfork 8.5 分神級初登場專《The College Dropout》。溫暖人心的靈魂樂採樣（Soul-Sample）與諷刺消費主義的經典歌詞。",
        "coverUrl": "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500&q=80"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('music-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderSongs(categoryFilter = 'all') {
        grid.innerHTML = '';

        const filteredSongs = categoryFilter === 'all'
            ? songs
            : songs.filter(song => song.category === categoryFilter);

        filteredSongs.forEach(song => {
            const card = document.createElement('div');
            card.className = 'music-card';
            card.innerHTML = `
                <div class="cover-wrapper">
                    <img src="${song.coverUrl}" alt="${song.title}" class="cover-img">
                    <span class="category-tag">${song.category}</span>
                </div>
                <div class="card-content">
                    <h3 class="song-title">${song.title}</h3>
                    <p class="artist">${song.artist}</p>
                    <p class="description">${song.description}</p>
                    <div class="player-container">
                        <iframe src="${song.youtubeUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // 監聽篩選按鈕點擊事件
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderSongs(e.target.dataset.category);
        });
    });

    // 初始渲染
    renderSongs();
});

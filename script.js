// script.js
const newsList = document.getElementById('newsList');
const pageInfo = document.getElementById('pageInfo');
const pageSelect = document.getElementById('pageSelect');
const newsItems = [
    {title:'文化传承',content:"恩施土家族苗族自治州开展'守艺人'培训活动    ----11.12"},
    {title:'非遗聚焦',content:"南京鼓楼区开展金箔画进社区活动     ----11.5"},
    {title:'新兴文艺',content:"数字化助力文化传承：新技术为传统文化注入新活力   ---11.1"},
    {title:'云游',content:"甘肃省文旅厅官方微博账号“微游甘肃”推出“甘肃非遗百科   ----10.20"},

    /* Array of news items, each should be an object with a title and content */
    // ... (your news items here)
];

const itemsPerPage = 3; // Number of news items per page
let currentPage = 1;

function renderNews() {
    newsList.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageNews = newsItems.slice(startIndex, endIndex);

    pageNews.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `<h2>${news.title}</h2><p>${news.content}</p>`;
        newsList.appendChild(newsItem);
    });

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(newsItems.length / itemsPerPage);
    pageInfo.textContent = `第 ${currentPage} 页（共 ${totalPages} 页）`;

    // Clear existing options in the dropdown
    pageSelect.innerHTML = '';

    // Populate the dropdown with page numbers
    for (let i = 1; i <= totalPages; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        if (i === currentPage) {
            option.selected = true;
        }
        pageSelect.appendChild(option);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderNews();
    }
}

function nextPage() {
    if (currentPage < Math.ceil(newsItems.length / itemsPerPage)) {
        currentPage++;
        renderNews();
    }
}

function goToPage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(newsItems.length / itemsPerPage)) {
        currentPage = parseInt(pageNumber, 10);
        renderNews();
    }
}

// Initial render
renderNews();
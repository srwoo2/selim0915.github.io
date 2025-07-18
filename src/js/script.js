document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.dataset.page;
      if (!page) return;
      window.loadPage(page);
      window.setActiveNav(page);
    });
  });

  // 초기 로딩
  window.loadPage('home');
  window.setActiveNav('home');
});

window.loadPage = function(page) {
  const fileMap = {
    home: 'src/pages/home.html',
    skills: 'src/pages/skills.html',
    project: 'src/pages/project.html',
    career: 'src/pages/career.html',
    contact: 'src/pages/contact.html'
  };
  const file = fileMap[page] || fileMap.home;
  const main = document.getElementById('main-content');
  main.innerHTML = '<p>로딩 중...</p>';
  
  fetch(file)
    .then(res => res.text())
    .then(html => {
      main.innerHTML = html;
      // 섹션 스크롤 (id가 page와 동일한 경우)
      setTimeout(() => {
        const section = main.querySelector(`#${page}`);
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    })
    .catch(() => {
      main.innerHTML = '<p>페이지를 불러올 수 없습니다.</p>';
    });
};

window.setActiveNav = function(page) {
  document.querySelectorAll('nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
};

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
  window.loadPage('about');
  window.setActiveNav('');
});

window.loadPage = function(page) {
  const fileMap = {
    project: 'src/pages/project.html',
    career: 'src/pages/career.html',
    about: 'src/pages/about.html',
    blog: null
  };

  const main = document.getElementById('main-content');
  if (page === 'blog') {
    main.innerHTML = "<p class='container page_message'>Blog 페이지는 준비 중입니다.</p>";
    return;
  }

  const file = fileMap[page] || fileMap.about;
  main.innerHTML = "<p class='container page_message'>로딩중</p>";
  
  fetch(file)
    .then(res => res.text())
    .then(html =>  main.innerHTML = html)
    .catch(() => {
      main.innerHTML = "<p class='container page_message'>페이지를 불러올 수 없습니다.</p>";
    });
};

window.setActiveNav = function(page) {
  document.querySelectorAll('nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
};

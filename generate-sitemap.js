// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const hostname = 'https://selim0915.github.io';
const sitemap = new SitemapStream({ hostname });

// URL 목록
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  // { url: '/about', changefreq: 'weekly', priority: 0.7 },
  // { url: '/blog/post-1', changefreq: 'daily', priority: 0.5 },
];

// 파일로 스트림 연결
const writeStream = createWriteStream('sitemap.xml');
sitemap.pipe(writeStream);

// URL 작성
urls.forEach(u => sitemap.write(u));
sitemap.end();

// 완료 이벤트
writeStream.on('finish', () => {
  console.log('sitemap.xml 생성 완료!');
});
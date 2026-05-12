import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const URL = 'https://tipa-corp.com/';
const DIR = './public/assets/tipa';

if (!fs.existsSync(DIR)) {
  fs.mkdirSync(DIR, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(`Failed to download ${url}: ${response.statusCode}`);
      }
    });
    req.on('error', reject);
  });
}

async function scrape() {
  console.log(`Fetching ${URL}...`);
  const res = await fetch(URL, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const html = await res.text();
  
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const dataSrcRegex = /data-src="([^">]+)"/g;
  const videoRegex = /<video[^>]+>\s*<source[^>]+src="([^">]+)"/g;
  const videoSrcRegex = /<video[^>]+src="([^">]+)"/g;

  const urls = new Set();
  
  let match;
  while ((match = imgRegex.exec(html)) !== null) urls.add(match[1]);
  while ((match = dataSrcRegex.exec(html)) !== null) urls.add(match[1]);
  while ((match = videoRegex.exec(html)) !== null) urls.add(match[1]);
  while ((match = videoSrcRegex.exec(html)) !== null) urls.add(match[1]);

  // Try to find the hero video explicitly
  const extraVideo = "https://tipa-corp.com/wp-content/uploads/2024/02/hero_video_desktop.mp4"; 
  // Guessing URL or we can search for .mp4 in html
  const mp4Regex = /https?:\/\/[^"'\s]+?\.mp4/g;
  while ((match = mp4Regex.exec(html)) !== null) urls.add(match[0]);

  console.log(`Found ${urls.size} media URLs. Downloading valid ones...`);
  
  let count = 0;
  for (let u of urls) {
    if (u.startsWith('data:')) continue;
    if (u.startsWith('/')) u = 'https://tipa-corp.com' + u;
    
    // Check if it's an image or video
    if (u.match(/\.(png|jpe?g|webp|gif|mp4)(\?.*)?$/i)) {
      try {
        const urlObj = new URL(u);
        let filename = path.basename(urlObj.pathname);
        if (!filename) continue;
        
        console.log(`Downloading ${filename}...`);
        await download(u, path.join(DIR, filename));
        count++;
      } catch (e) {
        console.error(`Error with ${u}:`, e);
      }
    }
  }
  console.log(`Downloaded ${count} files to ${DIR}`);
}

scrape().catch(console.error);

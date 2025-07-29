import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    name: 'weather.jpg',
    url: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'Weather App Dashboard'
  },
  {
    name: 'task-manager.jpg',
    url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'Task Manager App'
  },
  {
    name: 'blog-api.jpg',
    url: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'Blog API'
  },
  {
    name: 'face-detection.jpg',
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'Face Detection System'
  },
  {
    name: 'fake-news.jpg',
    url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'Fake News Detection'
  },
  {
    name: 'spam-detection.jpg',
    url: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&h=500&q=80',
    alt: 'Spam Mail Classification'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const targetPath = path.join(__dirname, '..', 'public', 'projects', filename);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(targetPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(targetPath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};

// Create projects directory if it doesn't exist
const projectsDir = path.join(__dirname, '..', 'public', 'projects');
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
  console.log('Created projects directory');
}

// Download all images
Promise.all(images.map(img => downloadImage(img.url, img.name)))
  .then(() => console.log('\n✨ All images downloaded successfully!'))
  .catch(err => console.error('\n❌ Error:', err)); 
const fs = require('fs');
const folderName = process.argv[2] || 'Project';

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('In the callback');
//     if(err) throw err;
// });

fs.mkdirSync(folderName);
fs.writeFile(`${folderName}/index.html`);
fs.writeFile(`${folderName}/styles.css`);
fs.writeFile(`${folderName}/app.js`);
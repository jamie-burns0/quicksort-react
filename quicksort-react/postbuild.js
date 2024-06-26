const fs = require('fs');
const packageJsonPath = './.next/package.json';

fs.readFile(packageJsonPath, (err, data) => {
  if (err) throw err;
  const json = JSON.parse(data);
  json.scripts = json.scripts || {};
  json.scripts.start = 'next start';
  fs.writeFile(packageJsonPath, JSON.stringify(json, null, 2), (err) => {
    if (err) throw err;
    console.log('Start script added to package.json.');
  });
});
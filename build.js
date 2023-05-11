// convert markdown and the template.ejs file into a single html file

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const marked = require('marked');

const content = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8');
const html = ejs.render(fs.readFileSync(path.join(__dirname, 'resources/template.ejs'), 'utf8'), {
    content: marked.parse(content),
    title: 'JavaScript to PHP Guide',
    description: 'A (very) basic list for JavaScript developers interested in learning PHP',
    image: 'https://jstophp.com/javascript-to-php.png'
});

fs.copyFileSync(path.join(__dirname, 'resources/assets/favicon-32x32.png'), path.join(__dirname, 'dist/favicon-32x32.png'));
fs.copyFileSync(path.join(__dirname, 'resources/assets/favicon-16x16.png'), path.join(__dirname, 'dist/favicon-16x16.png'));
fs.copyFileSync(path.join(__dirname, 'resources/assets/favicon.ico'), path.join(__dirname, 'dist/favicon.ico'));
fs.copyFileSync(path.join(__dirname, 'resources/assets/apple-touch-icon.png'), path.join(__dirname, 'dist/apple-touch-icon.png'));
fs.copyFileSync(path.join(__dirname, 'resources/assets/javascript-to-php.png'), path.join(__dirname, 'dist/javascript-to-php.png'));

fs.writeFileSync(path.join(__dirname, 'dist/index.html'), html);
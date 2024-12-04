const fs = require('fs');
const path = require('path');

// Получаем список всех Markdown-файлов в текущей директории
const files = fs
  .readdirSync(__dirname)
  .filter((file) => file.endsWith('.md') && file !== 'README.md');

// Сортируем файлы по имени (опционально)
files.sort();

// Читаем содержимое файлов и объединяем их
files.forEach((file) => {
  const content = fs.readFileSync(path.join(__dirname, file), 'utf8');
});

// Записываем результат в README.md
fs.writeFileSync(path.join(__dirname, 'README.md'), '===============', 'utf8');

console.log('Файлы объединены в README.md');

import fs from 'fs';
import path from 'path';

const fileArr: string[] = ['剑指offer', '每日一题', '数据结构', '算法'];
const basePath = path.resolve(__dirname, '../');
const basePathDir = getDirName(basePath);
const README_FILE = path.resolve(basePath, 'README.md');
let README_CONTENT = '';

class FileObj {
  public dir: string;
  public childFiles: string[];
  public childDir: FileObj[];
  public constructor(dir: string, childFiles?: string[], childDir?: FileObj[]) {
    this.dir = dir;
    this.childFiles = childFiles === undefined ? [] : childFiles;
    this.childDir = childDir === undefined ? [] : childDir;
  }
}

const fileObj = new FileObj(basePathDir);
fileArr.forEach((item) => {
  let filePath = path.resolve(basePath, item);
  fileObj.childDir.push(readFile(filePath));
});

function readFile(filePathParam: string): any {
  const obj = new FileObj(getDirName(filePathParam));
  const files = fs.readdirSync(filePathParam);

  files.forEach((file, index) => {
    const filePath = path.join(filePathParam, file);
    if (isFile(filePath)) {
      obj.childFiles.push(file);
    } else {
      obj.childDir.push(readFile(filePath));
    }
  });
  return obj;
}

// 判断制定路径是否是文件
function isFile(dir: string) {
  return fs.statSync(dir).isFile();
}

// 获取目录名
function getDirName(dir: string) {
  let tempDir = dir.slice(dir.lastIndexOf('\\') + 1, dir.length);
  return tempDir;
}

// 写入README
let level = 0;
function writeFile(obj: FileObj) {
  README_CONTENT += `### ${obj.dir}\n\n`;
  level = level <= 6 ? level + 1 : level;
  obj.childFiles.forEach((item) => {
    README_CONTENT += '  ' + item + '\n';
  });
  README_CONTENT += '\n';
  obj.childDir.forEach((item) => {
    writeFile(item);
  });
}

writeFile(fileObj);

fs.writeFile(README_FILE, README_CONTENT, { flag: 'w+' }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('写入 README.md 成功');
});

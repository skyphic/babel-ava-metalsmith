//設定例です。適宜更新してください。


// htmlを読み込む
const fs = require('fs');
const getHtml = () => {
  const content = fs.readFileSync('./src/html/pages/entry.html', 'utf8');
  return content.replace(/^---[\s\S]*---/g, '');
};

document.body.innerHTML = getHtml() +
  '<div class="c-overlay js-overlay"></div><div class="c-overlay --header js-header-overlay"></div>';

process.env = {
  local_variable: {
    imgUploadTimeOut: 3000
  }
}

// DOM, global変数を初期化
window.INITIAL_STATE = {
  "apiUrl": {
    "imgUploadUrl": "entry-img_upload.php",
    "timeline": "exists.php",
    "validation": "validation.php",
    "submit": "/livejapan/smart/user/spot/timeline/input/select/"
  },

};

document.entry_form = {
  'register_date': {
    value: ''
  }
};
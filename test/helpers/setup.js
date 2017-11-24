import browserEnv from 'browser-env';

require('babel-register')({
  plugins: ['babel-plugin-rewire']
});
browserEnv(['window', 'document', 'navigator']);

window.INITIAL_STATE = {
  "apiUrl": {},
  "imgUploadData": {},
  "calenderRange": {}
};
document.body.innerHTML = '';
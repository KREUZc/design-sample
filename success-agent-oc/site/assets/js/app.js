function byId(id){return document.getElementById(id)}
const now = new Date();
const el = byId('build-time');
if (el) el.textContent = now.toLocaleString('zh-TW');

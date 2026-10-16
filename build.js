/* Cloudflare Pages için yayın klasörünü (dist) hazırlar: yalnızca gerekli dosyaları kopyalar */
const fs=require('fs'),path=require('path');
const FILES=['index.html','Canli_Kartlari.html','three.min.js'];
fs.rmSync('dist',{recursive:true,force:true});
fs.mkdirSync('dist');
for(const f of FILES){fs.copyFileSync(f,path.join('dist',f));console.log('dist/'+f);}

# Cloudflare Pages'e yayınlama

Proje tamamen statik; sunucu kodu yok. Yayınlanacak dosyalar: `index.html` (simülasyon), `Canli_Kartlari.html` (kart çıktısı), `three.min.js`.

1. Yayın klasörünü hazırla:
   ```
   npm run build
   ```
   Bu, `dist/` klasörünü oluşturur.

2. İki yoldan biriyle yayınla:
   - **Panelden:** dash.cloudflare.com → Workers & Pages → Create → Pages → *Upload assets* → `dist` klasörünü sürükle.
   - **Komutla** (Cloudflare hesabına giriş gerekir): `npx wrangler pages deploy dist --project-name ekosistem`

Git ile bağlarsan: Build command `npm run build`, Build output directory `dist`.

Yerelde denemek için: `npm start` → http://localhost:8080

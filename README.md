# PlantApp HubX React Native Developer Case

## Proje Hakkında

PlantApp, bitki severler için geliştirilmiş, bitki tanımlama, bakım önerileri ve topluluk etkileşimi sunan modern bir mobil uygulamadır. Kullanıcılar bitkileri kolayca tanıyabilir, bakım ipuçları alabilir ve uygulama içi çeşitli özelliklerden faydalanabilirler. 

---

## Özellikler
- Bitki tanımlama (fotoğraf ve başlık ile)
- Kategorilere göre bitki listesi
- Sıkça sorulan sorular ve öneriler
- Premium üyelik ve özel içerikler
- Modern onboarding ve splash ekranı
- Hata yönetimi ve NotFound (404) ekranı
- Kapsamlı tab navigasyonu ve özel ikonlar

---

## Kurulum

### Gereksinimler
- Node.js (>= 14.x)
- npm veya yarn
- Android Studio veya Xcode
- React Native CLI

### Adımlar
1. **Depoyu klonlayın:**
   ```bash
   git clone https://github.com/ktugbaa7/onboarding
   cd plantapp
   ```
2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   # veya
   yarn install
   ```
3. **Android/iOS için gerekli native modülleri kurun:**
   ```bash
   npx pod-install
   # veya
   cd ios && pod install && cd ..
   ```
4. **Uygulamayı başlatın:**
   ```bash
   npx react-native run-android ya da npm run android
   # veya
   npx react-native run-ios
   ```

---

## Klasör Yapısı

```
src/
  api/           # API istekleri ve servisler
  assets/        # Görseller, ikonlar, fontlar
  components/    # Tekrar kullanılabilir bileşenler
  navigation/    # Navigasyon ve yönlendirme dosyaları
  redux/         # Global state yönetimi
  screens/       # Ekranlar (Home, Onboarding, NotFound, vs.)
  types/         # TypeScript tip tanımlamaları
```

---

## Kullanılan Teknolojiler
- **React Native**: Mobil uygulama geliştirme
- **TypeScript**: Tip güvenliği
- **Redux**: Global state yönetimi
- **redux-persist**: State'in kalıcı olarak saklanması
- **@react-navigation**: Navigasyon
- **@react-native-community/blur**: Blur efektleri
- **@react-native-async-storage/async-storage**: Lokal veri saklama
- **react-native-svg**: SVG desteği ve özel ikonlar
- **Axios**: API istekleri
- **Figma**: UI/UX tasarımı

---

## Ortam Değişkenleri (.env Dosyası)

Projede API anahtarları, sunucu adresleri gibi hassas ve ortama göre değişebilen bilgileri yönetmek için kök dizinde bir `.env` dosyası kullanılır. .env dosyasını kök dizine eklemeyi unutmayın.

### Örnek `.env` Dosyası

```
API_URL=https://api.example.com
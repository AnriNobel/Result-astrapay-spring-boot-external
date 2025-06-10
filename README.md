# 📝 Notes App

Simple Notes Application menggunakan:

- ✅ Spring Boot (Java) — Backend REST API
- ✅ Angular (v17+) — Frontend SPA
- ✅ Maven, RxJS, Standalone Component Angular
- ✅ HTTP Client, JSON, RESTful Pattern

---

## 🚀 Features

- Melihat daftar catatan (`GET /api/notes`)
- Menambah catatan baru (`POST /api/notes`)
- Menghapus catatan (`DELETE /api/notes/{id}`)
- Real-time update dari backend (tanpa reload)
- UI responsif, input dengan `ngModel`

---

## 📁 Folder Structure

```bash
.
├── astrapay-spring-boot-external   # Backend: Spring Boot API
└── notes-frontend                  # Frontend: Angular App

```
---
🔧 How to Run
1. Jalankan Backend (Spring Boot)
bash
Copy
Edit
cd astrapay-spring-boot-external
mvn spring-boot:run
API berjalan di: http://localhost:8000/api/notes

2. Jalankan Frontend (Angular)
bash
Copy
Edit
cd notes-frontend
npm install
ng serve
Aplikasi berjalan di: http://localhost:4200

📸 Screenshots

Postman Testing : 

![get-empty](https://github.com/user-attachments/assets/84eab6b4-93b6-4270-862d-d73dcc5900c5)

Mencoba untuk menambah catatan dengan postman : 

![post-success](https://github.com/user-attachments/assets/7a3ed7a7-fd9b-4af4-a586-a222294018dc)

Mentest 6 list dengan Postman dan di get kembali : 

![get-6-notes](https://github.com/user-attachments/assets/c87e0ff9-54fd-4ad4-bf30-8918a34fe585)


Mencheck apakah delete berhasil dengan memasukan ID: 

![delete-note](https://github.com/user-attachments/assets/e55c3780-87bf-40b3-a14f-a4b6e0d07c14)


----
📸 Screenshots 

Posisi Awal ( Kosong pada backed )
![Backend_Empty](https://github.com/user-attachments/assets/bd30d6c6-aea5-4ea1-ae0d-50117d750ac4)


Menggabungkan Frontend dan Backend  , testing Backend pada Browser : 
![ConnectBackend](https://github.com/user-attachments/assets/8f76e78e-69b7-4e3d-8a28-fbff28b238ba)

Menampilkan Frontend pada Browser ( Angular ) : 

![UI_Empty](https://github.com/user-attachments/assets/0d4827d3-e461-48b0-bc8b-1fd1a0b8ba93)

----

Menguji Frontend dan backend 
- Setelah mengisi list hinggal 6 dan mencoba untuk mendelete satu 

📸 Screenshots 
Memasukan Hari hingga Jumat

![Test_input](https://github.com/user-attachments/assets/d24de5ce-7da6-4358-90fe-7316ab1749e3)

Mendelete Jumat : 

![Delete_Jumat](https://github.com/user-attachments/assets/9485bb59-0563-4b74-9cd6-bc3ec0e14a76)

Ini Hasil sebelum didelete dan sudah terinput pada backend : 

![ConnectBackend](https://github.com/user-attachments/assets/eec59898-6dad-4d57-882a-7a2cfb4464a9)

dan hasil dari delete : 

![Delete_Bk](https://github.com/user-attachments/assets/ccc4dda7-7613-433e-8317-30383ac918df)

---
## 🔒 CORS & Security
CORS diaktifkan dengan @CrossOrigin(origins = "http://localhost:4200")

Spring Security dinonaktifkan sementara untuk keperluan testing

---

##
✍️ Author
Built with ❤️ by Anri Nobel Ibrahim












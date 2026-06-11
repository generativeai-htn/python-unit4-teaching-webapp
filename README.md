# Python Unit 4 Teaching WebApp

สื่อการสอนวิชาการเขียนโปรแกรม Python หน่วยที่ 4 เรื่อง **ตัวแปรและชนิดของข้อมูล (Variables & Data Types)** สำหรับใช้ประกอบการสอนในห้องเรียน

## สิ่งที่มีในเว็บ

- เดโมรันโค้ดจำลอง 3 เรื่อง: การคูณข้อความ, `type()`, และใบงาน 4.2
- สนามทดลองให้ผู้เรียนเปลี่ยนข้อความและจำนวนครั้งของ String Multiplication
- ภาพประกอบจากสไลด์บทที่ 4
- เครื่องมือคำนวณโจทย์นายวัฒนาซื้อโทรศัพท์
- มินิควิซกฎการตั้งชื่อตัวแปร ตอบ “ได้/ไม่ได้” พร้อมเฉลยทันที
- หน้าเว็บ static อัปขึ้น GitHub Pages ได้โดยตรง

## วิธีเปิดใช้งานในเครื่อง

เปิดไฟล์ `index.html` ด้วยเบราว์เซอร์ได้ทันที หรือรัน local server:

```powershell
python -m http.server 8000
```

จากนั้นเปิด:

```text
http://localhost:8000
```

## วิธีอัปขึ้น GitHub Pages

1. สร้าง repository ใหม่บน GitHub
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้น repository
3. ไปที่ Settings > Pages
4. เลือก Deploy from a branch
5. เลือก branch หลัก และโฟลเดอร์ root
6. กด Save แล้วรอ GitHub สร้างลิงก์เว็บ

## โครงสร้างไฟล์

```text
python-unit4-teaching-webapp/
  index.html
  styles.css
  app.js
  assets/
    unit4-cover.png
    data-types.png
    type-function.png
    worksheet-4-2.png
```

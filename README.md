# BÀI THỰC HÀNH SỐ 3: DỊCH VỤ QUẢN LÝ SẢN PHẨM (PRODUCT SERVICE)

## 1. Thông tin sinh viên
- **Họ và tên:** Huỳnh Ngọc Khương
- **MSSV:** 4651050123
- **Lớp:**  CNPM 46D

## 2. Mô tả kiến trúc
- **Cổng hoạt động:** 3003 (Độc lập với Bài 2)
- **Database:** `product_db` (Độc lập với Database của Bài 2)
- **Cơ chế xác thực:** Sử dụng JWT (JSON Web Token) được cấp từ service của Bài thực hành số 2. File `.env` chứa `JWT_SECRET` trùng khớp với bài 2 để giải mã token.

## 3. Hướng dẫn cài đặt và chạy
1. Cài đặt các thư viện:
   ```bash
   npm install
   ```

2. Khởi tạo Database:

- Mở MySQL, tạo database tên là `product_db`.
- Chạy script SQL tạo bảng `products` (đúng theo phụ lục đề bài).

3. Cấu hình file `.env`:

- Mở file `.env` và kiểm tra lại `DB_USER`, `DB_PASSWORD`, `DB_HOST` cho đúng với máy tính của bạn.

4. Khởi chạy server:

   ```bash
   node index.js
   ```

5. Sử dụng Postman để test API `http://localhost:3003/products` (Nhớ gắn Header `Authorization: Bearer <Token_lấy_từ_bài_2>`).

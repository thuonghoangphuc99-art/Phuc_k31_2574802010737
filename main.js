
/* =========================================================
   BÀI TẬP MỞ RỘNG: thêm Đăng nhập / Đăng ký vào ứng dụng
   Cửa Hàng Online mà em đã hoàn thiện ở bài trước.

   Phần sản phẩm / giỏ hàng bên dưới (PHẦN B) đã có sẵn đầy
   đủ, giữ nguyên không cần sửa. Nhiệm vụ của em là hoàn
   thiện 5 hàm còn thiếu ở PHẦN A - đánh dấu TODO 1 đến TODO 5.

   Làm lần lượt từng TODO, test lại ngay sau mỗi bước (nhớ
   tải lại trang F5 sau khi lưu file để chạy code mới).
   ========================================================= */

/* =========================================================
   PHẦN A: ĐĂNG NHẬP / ĐĂNG KÝ
   ========================================================= */

// Danh sách tài khoản
let danhSachTaiKhoan = [
  { taiKhoan: "khach1", matKhau: "123456" }
];

// Tài khoản đang đăng nhập
let taiKhoanDangNhap = null;

// Tham chiếu DOM
const oTaiKhoan = document.getElementById("oTaiKhoan");
const oMatKhau = document.getElementById("oMatKhau");
const oThongBaoLoi = document.getElementById("thongBaoLoi");
const oManHinhDangNhap = document.getElementById("manHinhDangNhap");
const oManHinhCuaHang = document.getElementById("manHinhCuaHang");
const oTenDangNhap = document.getElementById("tenDangNhap");

/* =========================================================
   TODO 1: Hàm timTaiKhoan(taiKhoan)
   ========================================================= */
function timTaiKhoan(taiKhoan) {
  for (let i = 0; i < danhSachTaiKhoan.length; i++) {
    if (danhSachTaiKhoan[i].taiKhoan === taiKhoan) {
      return danhSachTaiKhoan[i];
    }
  }

  return null;
}

/* =========================================================
   TODO 2: Hàm dangKy()
   ========================================================= */
function dangKy() {
  const taiKhoan = oTaiKhoan.value.trim();
  const matKhau = oMatKhau.value;

  if (taiKhoan === "" || matKhau === "") {
    oThongBaoLoi.className = "thong-bao loi";
    oThongBaoLoi.textContent =
      "Vui lòng nhập đầy đủ tài khoản và mật khẩu.";
    return;
  }

  if (timTaiKhoan(taiKhoan) !== null) {
    oThongBaoLoi.className = "thong-bao loi";
    oThongBaoLoi.textContent =
      "Tài khoản đã tồn tại, vui lòng chọn tên khác hoặc đăng nhập.";
    return;
  }

  danhSachTaiKhoan.push({
    taiKhoan: taiKhoan,
    matKhau: matKhau
  });

  oThongBaoLoi.className = "thong-bao thanh-cong";
  oThongBaoLoi.textContent =
    "Đăng ký thành công! Bây giờ hãy đăng nhập.";
}

/* =========================================================
   TODO 3: Hàm dangNhap()
   ========================================================= */
function dangNhap() {
  const taiKhoan = oTaiKhoan.value.trim();
  const matKhau = oMatKhau.value;
  const tk = timTaiKhoan(taiKhoan);

  if (tk === null || tk.matKhau !== matKhau) {
    oThongBaoLoi.className = "thong-bao loi";
    oThongBaoLoi.textContent = "Sai tài khoản hoặc mật khẩu.";
    return;
  }

  taiKhoanDangNhap = tk.taiKhoan;

  oTaiKhoan.value = "";
  oMatKhau.value = "";
  oThongBaoLoi.textContent = "";

  hienThiManHinh();
}

/* =========================================================
   TODO 4: Hàm dangXuat()
   ========================================================= */
function dangXuat() {
  taiKhoanDangNhap = null;
  hienThiManHinh();
}

/* =========================================================
   TODO 5: Hàm hienThiManHinh()
   ========================================================= */
function hienThiManHinh() {
  if (taiKhoanDangNhap === null) {
    oManHinhDangNhap.style.display = "block";
    oManHinhCuaHang.style.display = "none";
  } else {
    oManHinhDangNhap.style.display = "none";
    oManHinhCuaHang.style.display = "block";
    oTenDangNhap.textContent = taiKhoanDangNhap;
  }
}

/* =========================================================
   PHẦN B: SẢN PHẨM VÀ GIỎ HÀNG
   ========================================================= */

let danhSachSanPham = [
  { id: "SP001", ten: "Áo thun", gia: 150000 },
  { id: "SP002", ten: "Quần jean", gia: 350000 },
  { id: "SP003", ten: "Giày sneaker", gia: 500000 },
  { id: "SP004", ten: "Mũ lưỡi trai", gia: 80000 },
  { id: "SP005", ten: "Balo", gia: 250000 }
];

let gioHang = [];

const oBangSanPham = document.getElementById("bangSanPham");
const oBangGioHang = document.getElementById("bangGioHang");
const oTongTien = document.getElementById("tongTien");

function dinhDangTien(soTien) {
  return soTien.toLocaleString("vi-VN") + "đ";
}

function timSanPham(id) {

}

function hienThiSanPham() {

}

function hienThiGioHang() {

}

function themVaoGio(id) {

}

function xoaKhoiGio(viTri) {

}

function thanhToan() {

}

/* =========================================================
   HIỂN THỊ LẦN ĐẦU KHI TẢI TRANG
   ========================================================= */
hienThiManHinh();
hienThiSanPham();
hienThiGioHang();

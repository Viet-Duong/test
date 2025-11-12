const inputTen = document.getElementById("ten");
const inputGia = document.getElementById("gia");
const btnThem = document.getElementById("them");
const tbody = document.querySelector("#sanpham tbody");
const hTong = document.getElementById("tong");

let tongTien = 0;

btnThem.addEventListener("click", function() {
    const ten = inputTen.value.trim();
    const gia = Number(inputGia.value.trim());

    if (ten === "" || isNaN(gia) || gia <= 0) {
        alert("Vui lòng nhập đủ tên và giá!");
        return;
    }

    const tr = document.createElement("tr");

    const tdTen = document.createElement("td");
    tdTen.textContent = ten;
    const tdGia = document.createElement("td");
    tdGia.textContent = gia;
    const tdXoa = document.createElement("td");

    const btnXoa = document.createElement("button");
    btnXoa.textContent = "Xóa";

    btnXoa.addEventListener("click", function() {
        tr.remove();
        tongTien -= gia;
        hTong.textContent = "Tổng:" + tongTien;
    });

    tdXoa.appendChild(btnXoa);

    tr.appendChild(tdTen);
    tr.appendChild(tdGia);
    tr.appendChild(tdXoa);

    tbody.appendChild(tr);

    tongTien += gia;
    hTong.textContent = "Tổng: " + tongTien;
    inputTen.value = "";
    inputGia.value = "";
    inputTen.focus();
});
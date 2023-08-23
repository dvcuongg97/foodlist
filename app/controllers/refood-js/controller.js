//////////////////////// RE FOODLIST /////////////////////////////

export const BASE_URL = "https://64d6fb012a017531bc12e76b.mockapi.io/product";
const MON_CHAY = true;
const CON_MON = true;
const KHUYEN_MAI = true;

let renderDataFood = (data) => {
  let contentHTML = "";
  data.forEach((food) => {
    let { ma, ten, loai, gia, tinhTrang, khuyenMai, moTa } = food;
    let contentTr = `<tr>
        <td>${ma}</td>
        <td>${ten}</td>
        <td>${loai == MON_CHAY ? "Chay" : "Mặn"}</td>
        <td>${(gia * 1).toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}</td>
        <td>${khuyenMai == CON_MON ? "10" : "20"}</td>
        <td>${moTa}</td>
        <td>${tinhTrang == KHUYEN_MAI ? "Còn" : "Không"}</td>
        <td>
        <button onclick="editFoodData(${ma})" class="btn btn-info">Sửa</button>
        <button onclick="deleteFood(${ma})" class="btn btn-danger">Xóa</button>
        </td>
      </tr>`;
    contentHTML += contentTr;
  });
  document.getElementById("tbodyFood").innerHTML = contentHTML;
};
// fetch api
export let fetchFoodData = () => {
  axios
    .get(BASE_URL)
    .then((res) => {
      console.log(res);
      renderDataFood(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// get data
export let getDataForm = () => {
  let ma = document.getElementById("foodID").value;
  let ten = document.getElementById("tenMon").value;
  let loai = document.getElementById("loai").value == "loai1";
  let gia = document.getElementById("giaMon").value;
  let khuyenMai = document.getElementById("khuyenMai").value == "10";
  let tinhTrang = document.getElementById("tinhTrang").value == "1";
  let moTa = document.getElementById("moTa").value;
  return {
    ma,
    ten,
    loai,
    gia,
    tinhTrang,
    khuyenMai,
    moTa,
  };
};

// show data
export let showDataForm = (food) => {
  let { ma, ten, loai, gia, tinhTrang, khuyenMai, moTa } = food;
  document.getElementById("foodID").value = ma;
  document.getElementById("tenMon").value = ten;
  document.getElementById("loai").value = loai == MON_CHAY ? "loai1" : "loai2";
  document.getElementById("giaMon").value = gia;
  document.getElementById("khuyenMai").value =
    khuyenMai == KHUYEN_MAI ? "10" : "20";
  document.getElementById("tinhTrang").value = tinhTrang == CON_MON ? "1" : "0";
  document.getElementById("moTa").value = moTa;
};

// toastify
export let showMessage = (mess, isSuccess = true) => {
  Toastify({
    text: mess,
    className: "info",
    style: {
      background: isSuccess ? "green" : "red",
    },
  }).showToast();
};

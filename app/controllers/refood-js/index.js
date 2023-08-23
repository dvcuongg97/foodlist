/////////////////// index js ///////////////////////////

import { BASE_URL, showMessage } from "./controller.js";
import { fetchFoodData } from "./controller.js";
import { getDataForm } from "./controller.js";
import { showDataForm } from "./controller.js";

fetchFoodData();

// button sửa
window.editFoodData = (id) => {
  $("#exampleModal").modal("show");
  document.getElementById("foodID").readOnly = true;

  let url = `${BASE_URL}/${id}`;
  axios
    .get(url)
    .then((res) => {
      console.log(res);
      showDataForm(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
// button cập nhật
window.updateDataFood = () => {
  console.log("ok");
  let data = getDataForm();
  console.log("🚀 ~ file: index.js:29 ~ data:", data);
  axios
    .put(`${BASE_URL}/${data.ma}`, data)
    .then((res) => {
      console.log(res);
      $("#exampleModal").modal("hide");
      showMessage("Update thành công");
      fetchFoodData();
    })
    .catch((err) => {
      console.log(err);
    });
};

// button xoa
window.deleteFood = (id) => {
  axios
    .delete(`${BASE_URL}/${id}`)
    .then((res) => {
      console.log(res);
      fetchFoodData();
      showMessage("Xóa thành công");
    })
    .catch((err) => {
      console.log(err);
    });
};

//  button thêm
window.addFood = () => {
  let data = getDataForm();
  axios
    .post(BASE_URL, data)
    .then((res) => {
      console.log(res);
      fetchFoodData();
      showMessage("Thêm Thành Công");
      $("#exampleModal").modal("hide");
    })
    .catch((err) => {
      console.log(err);
    });
};

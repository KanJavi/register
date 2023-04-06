function registerUser() {
    let listUserRegister = JSON.parse(localStorage.getItem("listUserRegister"));
    let userNameRegister = document.getElementById("userNameRegister").value;
    let emailRegister = document.getElementById("emailRegister").value;
    let passwordRegister = document.getElementById("passwordRegister").value;
    let comfirmPasswordRegister = document.getElementById("comfirmPasswordRegister").value;
    let registerInfo = {
      userName: userNameRegister,
      email: emailRegister,
      password: passwordRegister,
      comfirmPassword: comfirmPasswordRegister,
    };
    if (listUserRegister == null) {
      listUserRegister = [];
      listUserRegister.push(registerInfo);
      localStorage.setItem("listUserRegister", JSON.stringify(listUserRegister));
      alert("Đăng ký thành công!");
      
    } else {
      let duplicateUser = listUserRegister.find((user) => user.email === emailRegister);
      if (duplicateUser) {
        alert("Email đã được sử dụng. Vui lòng nhập email khác.");
      } else {
        listUserRegister.push(registerInfo);
        localStorage.setItem("listUserRegister", JSON.stringify(listUserRegister));
        alert("Đăng ký thành công!");
        
      }
    }
  }
  
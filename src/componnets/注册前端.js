class stu {
    constructor(id, user, password) {
        this.id = id;
        this.user = user;
        this.password = password;
    }
}
let ew = /^[\u4e00-\u9fa5]{2,8}$/;
let ss = /^\d{4,16}$/;
let a = 0;
ee('user').oninput = function () {
    if (ee('user').value == '') {
        ee('usere').innerHTML = '';
        return
    }
    if (ew.test(ee('user').value)) {
        ee('usere').innerHTML = '格式正确';
        ee('usere').style.color = 'green';
    } else {
        ee('usere').innerHTML = '格式错误';
        ee('usere').style.color = 'red';
    }
}
ee('password').oninput = function () {
    if (ee('password').value == '') {
        ee('passworde').innerHTML = '';
        return
    }
    if (ss.test(ee('password').value)) {
        ee('passworde').innerHTML = '格式正确';
        ee('passworde').style.color = 'green';
    } else {
        ee('passworde').innerHTML = '格式错误';
        ee('passworde').style.color = 'red';
    }
}
function addById2() {
    let stus = new stu(a, ee('user').value, ee('password').value);
    $.ajax({
        type: 'post',
        url: "/api/addById2",
        data: JSON.stringify(stus),
        dataType: "json",
        success: function (enw) {
            if (enw == true) {
                alert("添加失败")
            }
            if (enw == false) {
                alert("添加成功 ")
                window.location.href = "../views/登录.html";
                ee('password').value == '';
                ee('user').value == '';
            }
            if (enw == 'c') {
                alert("用户名重复")
            }
        }
    })
}
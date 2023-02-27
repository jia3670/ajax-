class stu {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
}
//点击显示
function san() {
    ee('e1').style.display = 'block'
    ee('eew1').style.display = 'block'
}
function addById3() {
    let stus = new stu(ee('user').value, ee('password').value);
    $.ajax({
        type: 'post',
        url: "/api/addById3",
        data: JSON.stringify(stus),
        dataType: "json",
        success: function (enw) {
            if (enw == true) {
                alert("用户名或密码错误")
            }
            if (enw == false) {
                alert("登陆成功 ")
                window.location.href = ".././views/简介.html"
            }
        }
    })
}
class stu {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
}
//点击显示
function san() {
    $('e1').style.display = 'block'
    $('eew1').style.display = 'block'
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
                
            }
        }
    })
}
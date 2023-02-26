Mock.mock("/api/addById3", "post", function (data) {
    let datas = JSON.parse(data.body);
    if (localStorage.student == undefined) {
        return true
    }
    let user = JSON.parse(localStorage.student);
    let users = user.user;
    if (users == '') {
        return true
    }
    for (let i = 0; i < users.length; i++) {
        datas.password = hex_md5(datas.password)
        if (users[i].user == datas.user && users[i].password == datas.password) {
            return false
        } else {
            return true
        }
    }
})
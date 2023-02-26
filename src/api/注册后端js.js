Mock.mock("/api/addById2", "post", function (data) {
    let datas = JSON.parse(data.body);
    if (ew.test(datas.user) == false || ss.test(datas.password) == false) {
        return true;
    }
    if (localStorage.student == undefined) {
        a = 1;
        datas.id = a;
        datas.password = hex_md5(datas.password)
        student = {
            'user': [
                {
                    'id': datas.id,
                    'user': datas.user,
                    'password': datas.password
                }
            ],
        }
        localStorage.student = JSON.stringify(student)
        return false
    }
    let user = JSON.parse(localStorage.student);
    let users = user.user;
    if (users == '') {
        a = 1;
        datas.id = a;
        datas.password = hex_md5(datas.password)
        users[users.length] = datas;
        user.user = users
        localStorage.student = JSON.stringify(user);
        return false
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].user == datas.user) {
            return 'c'
        } else {
            a = users[users.length-1].id + 1;
            datas.id = a;
            datas.password = hex_md5(datas.password)
            users[users.length] = datas;
            user.user = users
            localStorage.student = JSON.stringify(user);
            return false
        }
    }
})
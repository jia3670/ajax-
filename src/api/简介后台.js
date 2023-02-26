//删除
Mock.mock("/api/shan", "post", function (data) {
    let datas = JSON.parse(data.body);
    let tt = localStorage.dy;
    let tts = JSON.parse(tt);
    let students = tts.dian;
    for (let i = 0; i < students.length; i++) {
        if (datas == students[i].id) {
            students.splice(i, 1);
        }
    }
    tts.dian = students;
    tt = JSON.stringify(tts);
    localStorage.dy = tt;
    return false
})

//增加
Mock.mock("/api/addById4", "post", function (data) {
    let datas = JSON.parse(data.body);
    if (!(datas.name.trim() != '' && datas.url.trim() != '' && datas.daoyan.trim() != '' && datas.yanyuan.trim() != '' && datas.time.trim() != '')) {
        return 'nu'
    }
    if (localStorage.dy == undefined) {
        a = 1;
        datas.id = a;
        let ter = {
            'dian': [
                {
                    'id': a,
                    'url': datas.url,
                    'name': datas.name,
                    'daoyan': datas.daoyan,
                    'yanyuan': datas.yanyuan,
                    'time': datas.time,
                }
            ],
        }
        localStorage.dy = JSON.stringify(ter)
        return false
    }
    let dians = JSON.parse(localStorage.dy);
    let dian = dians.dian;
    if (dian == '') {
        a = 1;
        datas.id = a;
        dian[dian.length] = datas;
        dians.dian = dian
        localStorage.dy = JSON.stringify(dians);
        return false
    } else {
        let tt = localStorage.dy;
        let tts = JSON.parse(tt);
        let students = tts.dian;
        students[students.length] = datas;
        tts.dian = students;
        let studentr = JSON.stringify(tts);
        localStorage.dy = studentr;
        return false

    }
})
//修改2
Mock.mock("/api/xiugai", "post", function (data) {
    let tt = localStorage.dy;
    let tts = JSON.parse(tt);
    let students = tts.dian;
    let datas = JSON.parse(data.body);
    if (!(datas.name.trim() != '' && datas.url.trim() != '' && datas.daoyan.trim() != '' && datas.yanyuan.trim() != '' && datas.time.trim() != '')) {
        return 'nu'
    }

    students[b].url = datas.url;
    students[b].name = datas.name;
    students[b].daoyan = datas.daoyan;
    students[b].yanyuan = datas.yanyuan;
    students[b].time = datas.time;
    tts.dian = students;
    localStorage.dy = JSON.stringify(tts);
    return false
})

//查找
Mock.mock("/api/cha", "post", function (data) {
    let datas = JSON.parse(data.body);
    let tt = localStorage.dy;
    let tts = JSON.parse(tt);
    let dian = tts.dian;
    let ccs = false;
    if (datas == '') {
        return 'ss';
    }
    for (let i = 0; i < dian.length; i++) {
        if (dian[i].id == datas) {
            ccs = true;
            s = `<tr class='shai animate__animated animate__fadeInLeftBig' class='cha'>
                <td><input type="checkbox" name=""class="ck1"index='${dian[i].id}'></td>
                <td><img src="${dian[i].url}" alt=""></td>
                <td>${dian[i].name}</td>
                <td>${dian[i].daoyan}</td>
                <td>${dian[i].yanyuan}</td>
                <td>${dian[i].time}</td>
                <td><button onclick="shan(${dian[i].id})">删除</button>
                <button onclick="xiu1(${dian[i].id})">修改</button></tr >`
            ee('ew').innerHTML = s;
            return false
        }
    }
    if (ccs == false) {
        s = `<tr>
        <td colspan='1' align='center' style='color:red;' class='cha'>暂无数据</td>
        </tr>`
        ee('ew').innerHTML = s;
        return true
    }
})

//选中删除
Mock.mock("/api/shane1", "post", function (data) {
    let datas = JSON.parse(data.body);
    let tt = localStorage.dy;
    let tts = JSON.parse(tt);
    let dian = tts.dian;
    for (let item of datas) {
        for (let j = 0; j < dian.length; j++) {
            if (item == dian[j].id) {
                dian.splice(j, 1);
            }
        }
    }
    tts.dian = dian;
    tt = JSON.stringify(tts);
    localStorage.dy = tt;
    return false
})
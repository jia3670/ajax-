let qe = '';
// 拼接路径
ee('tup1').onchange = function () {
    ee("box1").style.display = 'block'
    qe = '../../public/img/' + (ee('tup1').value).slice(11)
    ee("box1").src = qe
}
ee('tup2').onchange = function () {
    ee("box2").style.display = 'block'
    qe = '../../public/img/' + (ee('tup2').value).slice(11)
    ee("box2").src = qe
}
let a = 0;
class stu {
    constructor(id, url, name, daoyan, yanyuan, time) {
        this.id = id;
        this.url = url;
        this.name = name;
        this.daoyan = daoyan;
        this.yanyuan = yanyuan;
        this.time = time;
    }
}
function san() {
    ee('e1').style.display = 'block'
    ee('eew1').style.display = 'block'
}
//渲染
function tj() {
    let s = '';
    let ew = document.getElementById('ew');
    if (localStorage.dy == undefined) {
        s = `<tr class='cha'>
        <td colspan='7' align='center' style='color:red;' class='cha'>暂无数据</td>
        </tr>`;
        document.getElementById('ew').innerHTML = s;
        return
    }
    let tt = localStorage.dy;
    let tts = JSON.parse(tt);
    let students = tts.dian;
    if (students == '') {
        s = `<tr class='cha'>
        <td colspan='7' align='center' style='color:red;'>暂无数据</td>
        </tr>`;
        document.getElementById('ew').innerHTML = s;
        a = 1;
        return
    }
    for (let i = 0; i < students.length; i++) {
        s += `<tr class='shai animate__animated animate__fadeInLeftBig' class=cha>
        <td><input type="checkbox" name=""class="ck1"index='${students[i].id}'></td>
        <td><img src="${students[i].url}" alt=""></td>
        <td>${students[i].name}</td>
        <td>${students[i].daoyan}</td>
        <td>${students[i].yanyuan}</td>
        <td>${students[i].time}</td>
        <td><button onclick="shan(${students[i].id})">删除</button>
        <button onclick="xiu1(${students[i].id})">修改</button>
                         </tr >`;
    }
    a = students[students.length - 1].id + 1;
    document.getElementById('ew').innerHTML = s;
}
tj();
//添加数据
function addById4() {
    let stus = new stu(a, qe, ee('ewm1').value, ee('ewd1').value, ee('ewy1').value, ee('ews1').value);
    $.ajax({
        type: 'post',
        url: "/api/addById4",
        data: JSON.stringify(stus),
        dataType: "json",
        success: function (enw) {
            if (enw == true) {
                alert("添加失败")
            }
            if (enw == false) {
                alert("添加成功")
                ee('e1').style.display = 'none';
                ee('eew1').style.display = 'none';
                ee('ewm1').value = '';
                ee('ewd1').value = '';
                ee('ewy1').value = '';
                ee('ews1').value = '';
                ee('tup1').value = '';
                ee('box1').src = '';
                qe = '';
                tj();
            }
            if (enw == 'nu') {
                alert("数据不得为空")
            }
        }
    })
}


//修改  显示传参
let b = 0;
function xiu1(that) {
    ee('e1').style.display = 'block'
    ee('eew2').style.display = 'block'
    let c = that;
    let tt = localStorage.dy;
    let tts = JSON.parse(tt);
    let students = tts.dian;
    for (let i = 0; i < students.length; i++) {
        if (c == students[i].id) {
            b = i;
            ee('box2').src = students[i].url;
            ee('ewm2').value = students[i].name;
            ee('ewd2').value = students[i].daoyan;
            ee('ewy2').value = students[i].yanyuan;
            ee('ews2').value = students[i].time;
            ee('box2').style.display = 'block';
        }
    }
}
class stue {
    constructor(url, name, daoyan, yanyuan, time) {
        this.url = url;
        this.name = name;
        this.daoyan = daoyan;
        this.yanyuan = yanyuan;
        this.time = time;
    }
}
//修改
function xiugai() {
    let stus = new stue(ee('box2').src, ee('ewm2').value, ee('ewd2').value, ee('ewy2').value, ee('ews2').value);
    $.ajax({
        type: 'post',
        url: "/api/xiugai",
        data: JSON.stringify(stus),
        dataType: "json",
        success: function (enw) {
            if (enw == false) {
                ee('eew2').style.display = 'none';
                ee('e1').style.display = 'none'
                ee('ewm2').value = '';
                ee('tup2').value = '';
                ee('ewd2').value = '';
                ee('ewy2').value = '';
                ee('ews2').value = '';
                ee('box2').src = '';
                qe = '';
                alert('修改成功')
                tj();
            }
            if (enw == 'nu') {
                alert('数据不得为空')
            }
        }
    })
}
//删除
function shan(that) {
    let stus = that;
    $.ajax({
        type: 'post',
        url: "/api/shan",
        data: JSON.stringify(stus),
        dataType: "json",
        success: function (enw) {
            if (enw == false) {
                alert('删除成功')
                tj();
            }
        }
    })
}
//查找
function cha() {
    let stus = ee('cha').value;
    $.ajax({
        type: 'post',
        url: "/api/cha",
        data: JSON.stringify(stus),
        dataType: "json",
        success: function (enw) {
            if (enw == false) {
                alert('有数据')
            }
            if (enw == true) {
                alert('暂无数据')
            }
            if (enw == 'ss') {
                tj();
            }
        }
    })
}


//全选

ee('boxx').onclick = function () {
    let selectList1 = document.getElementsByClassName('ck1');
    for (let i = 0; i < selectList1.length; i++) {
        if (ee('boxx').checked) {
            selectList1[i].checked = true;
        } else {
            selectList1[i].checked = false;
        }
    }
}

//选择删除
function shane1() {
    let abc = [];
    let tt = localStorage.dy;
    let tts = JSON.parse(tt);
    let dian = tts.dian;
    let selectList1 = document.getElementsByClassName('ck1');
    for (let i = 0; i < selectList1.length; i++) {
        if (selectList1[i].checked) {
            for (var j = 0; j < dian.length; j++) {
                let aaa = selectList1[i].getAttribute('index');
                abc.push(aaa);
            }
        }
    }
    $.ajax({
        type: 'post',
        url: "/api/shane1",
        data: JSON.stringify(abc),
        dataType: "json",
        success: function (enw) {
            if (enw == false) {
                alert('删除成功')
                tj();
            }
        }
    })
}
//选择修改
function xiu11() {
    let bbab = 0;
    let num = 0;
    let selectList1 = document.getElementsByClassName('ck1');
    for (let i = 0; i < selectList1.length; i++) {
        if (selectList1[i].checked) {
            bbab++;
            num = selectList1[i].getAttribute('index');
        }
    }
    if (bbab == 0) {
        alert("未选中数据")
        return
    }
    if (bbab > 1) {
        alert("请勿选中多条数据")
        return
    }
    if (bbab == 1) {
        xiu1(num);
    }
}
function quxiao1() {
        ee('e1').style.display = 'none';
        ee('eew1').style.display = 'none';
        ee('ewm1').value = '';
        ee('ewd1').value = '';
        ee('ewy1').value = '';
        ee('ews1').value = '';
        ee('tup1').value = '';
        qe = '';
        $('box1').src = '';
    }

function quxiao2() {
        ee('e1').style.display = 'none';
        ee('eew2').style.display = 'none';
        ee('ewm2').value = '';
        ee('ewd2').value = '';
        ee('ewy2').value = '';
        ee('ews2').value = '';
        ee('tup2').value = '';
        qe = '';
        ee('box2').src = '';
}

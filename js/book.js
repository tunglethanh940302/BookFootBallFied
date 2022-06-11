function send() {
    var arr = document.getElementsByTagName('input');
    var name = arr[0].value;
    var phone = arr[1].value;
    var howmanytimes = arr[2].value;
    var howmanymembers = arr[3].value;
    var howmanyteams = arr[4].value;
    var ten = document.querySelector('#ten');
    var z = "Hãy lựa chọn thông tin đặt sân";
    //name

    if (name == "") {
        var text_ten = "Hãy điền tên của bạn";
        ten.style.display = 'block';
        ten.innerHTML = text_ten;

    } else if (name.length > 50) {
        var text_ten_dodai = "Tên không dài quá 50 kí tự.";
        ten.style.display = 'bock';
        ten.innerHTML = text_ten_dodai;
    } else {
        ten.style.display = 'none';
    }

    //phone

    if (phone == "") {
        var text_phone = "Hãy điền số điện thoại của bạn.";
        document.querySelector('#sdt').style.display = 'block';
        document.querySelector('#sdt').innerHTML = text_phone;

    } else if (phone.length > 50) {
        var text_phone_dodai = "Số điện thoại không dài quá 50 kí tự.";
        document.querySelector('#sdt').style.display = 'block';
        document.querySelector('#sdt').innerHTML = text_phone_dodai;
    } else {
        document.querySelector('#sdt').style.display = 'none';
    }


    //khung gio 

    var khunggio = document.querySelector('#khunggio').value;
    var text = "Hãy chọn khung giờ muốn đặt sân.";

    if (khunggio == "") {
        document.querySelector('#chonkhunggio').style.display = 'block';
        document.querySelector('#chonkhunggio').innerHTML = text;

    } else {
        document.querySelector('#chonkhunggio').style.display = 'none';
    }



    //số giờ 

    if (howmanytimes == "") {
        text_sogio = "Hãy nhập số giờ muốn đặt sân.";
        document.querySelector('#sogio').style.display = 'block';
        document.querySelector('#sogio').innerHTML = text_sogio;


    } else if (howmanytimes < 0) {
        var soam = "Chỉ được phép nhập số dương.";
        document.querySelector('#sogio').style.display = 'block';
        document.querySelector('#sogio').innerHTML = soam;
    } else {
        document.querySelector('#sogio').style.display = 'none';
    }


    //số người chơi 

    if (howmanymembers == "") {
        text_songuoi = "Hãy nhập số người chơi.";
        document.querySelector('#songuoi').style.display = 'block';
        document.querySelector('#songuoi').innerHTML = text_songuoi;

    } else {
        document.querySelector('#songuoi').style.display = 'none';
    }

    // so doi


    if (howmanyteams == "") {
        text_soteam = "Hãy nhập số đội chơi.";
        document.querySelector('#sodoi').style.display = 'block';
        document.querySelector('#sodoi').innerHTML = text_soteam;


    } else if (howmanyteams < 0) {
        var soam1 = "Chỉ được phép nhập số nguyên dương.";
        document.querySelector('#sodoi').style.display = 'block';
        document.querySelector('#sodoi').innerHTML = soam1;

    } else {
        document.querySelector('#sodoi').style.display = 'none';
    }


    // tính tổng tiền
    var tientrongtai = 0;
    var tiendongphuc = 0;
    var tongtien = 0;
    var x = "0 VND";
    var z = "Hãy lựa chọn thông tin đặt sân";
    var tiensan = 0;
    if (khunggio == 1) {
        tiensan = 30000 * howmanytimes;
    } else if (khunggio == 2) {
        tiensan = 60000 * howmanytimes;
    } else if (khunggio == 3) {
        tiensan = 80000 * howmanytimes;
    } else if (khunggio == 4) {
        tiensan = 40000 * howmanytimes;
    }

    if (arr[9].checked) {
        tiendongphuc += 30000 * howmanyteams;

    }
    if (arr[10].checked) {
        tientrongtai += 20000 * howmanytimes;
    }
    tongtien = tiensan + tiendongphuc + tientrongtai + x;


    if (tongtien == "00 VND") {
        document.querySelector('#total').innerHTML = z;
        document.querySelector('#total').style.color = 'red';

    } else {
        document.querySelector('#total').innerHTML = tongtien;
        document.querySelector('#total').style.color = 'black';

    }

}

function thongbao() {
    choise = confirm('Xác nhận đặt sân!!!');
    if (choise == 1) {
        alert('Bạn đã đặt sân thành công!');

    } else {
        alert('Đã hủy!');
    }
}


// click menu bar

function myFunction() {
    var link = document.getElementById('navbar');
    if (link.className === "navbar") {
        link.className += " responsive";
        console.log(link);
    } else {
        link.className = "navbar";
    }
}
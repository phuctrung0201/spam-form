var request = require('request');
let listOptions = [1,2,3,4,5];
let firstName = ['Nguyễn','Bùi','Đinh','Trần','Võ','Lê','Trịnh','Ngô','Đồng','Đặng'];
let middleName = ['Phúc','Phương','Ngọc','Thành','Đức','Ngọc','Đình','Công','Quốc','Minh','Hữu','Hoàng','Tuyết','Thảo','Phước'];
let lastName = ['Trung','Quyên','Tuyền','Tuấn','Vàng','Nghiêm','Anh','Quyền','Uyên','Quỳnh','Thành','Phú','Vỹ','Quyền','Ân','Nguyệt','Phương','Minh'];
let gender = ['Female (Nữ)','Male (Nam)'];
let position =['Quản lý cấp trung','Quản lý cấp cơ sở'];
let income=['Từ 15 - 35 triệu','Từ 35 - 50 triệu'];
let capital = ['Từ 10 - 50 tỷ','Từ 10 - 50 tỷ','Từ 10 - 50 tỷ','Từ 10 - 50 tỷ','Từ 3 - 10 tỷ']
let age = ['Dưới 35 tuổi','Từ 35 - 45 tuổi'];
let a = 0;
let uni = ['Đại học Công nghệ Thông tin','Đại học Bách Khoa','Đại học Khoa học Tự nhiên','Đại học Kinh tế','Đại học Luật','Đại học Kiến Trúc','Đại học Xã hội và Nhân văn'];

let sendRequest = setInterval(()=>{
  if(a != 10){
    var options = {
      'method': 'POST',
      'url': 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfQPzR8LbCOZXN9bCJzZBoicxa9NwH6KodyHvzVykdTd-t42w/formResponse',
      'headers': {
        'Cookie': 'S=spreadsheet_forms=hnt0VR_-sei4RovuAxgdXvLAmsvgKxZUCrpsR1eDN9M; NID=201=Ix8PX16ooSoRipdgOqTzTBxi9pTRfneh5qFPdzM3OkVnbROtkyA7IQbgNKdfqQMmOWIlAMzMvaJoGbYRM8SE0XK3LJbkSfH7ED7wc_bXvbAWCPHv6MOa74gbWu0g1w96e8lfVzXec1-1GCM97SQZVXUTOm0JmKsTYk-N5e9wCkw'
      },
      formData: {
        'fvv': '1',
        'draftResponse': `[[[null,1375445574,["${age[Math.floor(Math.random()*age.length)]}"]\n,0]\n,[null,2105948542,["${position[Math.floor(Math.random()*position.length)]}"]\n,0]\n,[null,88823529,["${income[Math.floor(Math.random()*income.length)]}"]\n,0]\n,[null,681654640,["Trên 100 người"]\n,0]\n,[null,280252252,["${capital[Math.floor(Math.random()*capital.length)]}"]\n,0]\n,[null,616992030,["Trên 10 năm"]\n,0]\n,[null,112216987,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,965953911,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,566680376,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,976455380,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,950790272,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,797735312,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1578891291,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,445937188,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,177793519,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1184888191,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,733532114,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,330839177,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1005739473,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,2115790494,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,529533167,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1003821097,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1025678114,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1512327162,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1081719143,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,50563395,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,743941376,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,337468218,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,31134597,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,842780442,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,272678880,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,560904602,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,445875667,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1161027169,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,572061381,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,112517641,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,153634561,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1123137661,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1994497098,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1261525188,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,246351408,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,457861679,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1807755614,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1474745160,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,892893350,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,2146106981,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,276089967,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1509668195,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,687629829,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,156095348,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1729982217,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1071681845,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1502024172,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n,[null,1833309304,["${listOptions[Math.floor(Math.random()*listOptions.length)]}"]\n,0]\n]\n,null,"4662197306235684285"]\n`,
        'pageHistory': '0,1,2,3,4,5,6,7,8,9,10',
        'fbzx': '4662197306235684285',
        'hidden': ''
      }
    };
    request(options, function (error, response) { 
      if (!error){
        a++;
        console.log(`${a} is success`);
      }
    })
  }else{
    console.log('Done');
    clearInterval(sendRequest);
  }
},10000);




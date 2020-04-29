var request = require('request');
let listOptions = [1,2,3,4,5];
let listOptions1 = [3,4,5];
let listOptions2 = [1,2];
let firstName = ['Nguyễn','Bùi','Đinh','Trần','Võ','Lê','Trịnh','Ngô','Đồng','Đặng'];
let middleName = ['Phúc','Phương','Ngọc','Thành','Đức','Ngọc','Đình','Công','Quốc','Minh','Hữu','Hoàng','Tuyết','Thảo','Phước'];
let lastName = ['Trung','Quyên','Tuyền','Tuấn','Vàng','Nghiêm','Anh','Quyền','Uyên','Quỳnh','Thành','Phú','Vỹ','Quyền','Ân','Nguyệt','Phương','Minh'];
let gender = ['Female (Nữ)','Male (Nam)'];
let positions =[{name: 'Quản lý cấp trung', income: 'Từ 35 - 50 triệu'},{name: 'Quản lý cấp cơ sở', income: 'Từ 15 - 35 triệu'},{name: 'Quản lý cấp cơ sở', income: 'Dưới 15 triệu'},{name: 'Quản lý cấp cao', income: 'Trên 50 triệu'}];
let income=['Từ 15 - 35 triệu','Từ 35 - 50 triệu'];
let capital = ['Từ 10 - 50 tỷ','Từ 10 - 50 tỷ','Từ 10 - 50 tỷ','Từ 10 - 50 tỷ','Từ 3 - 10 tỷ']
let age = ['Dưới 35 tuổi','Từ 35 - 45 tuổi'];
let uni = ['Đại học Công nghệ Thông tin','Đại học Bách Khoa','Đại học Khoa học Tự nhiên','Đại học Kinh tế','Đại học Luật','Đại học Kiến Trúc','Đại học Xã hội và Nhân văn'];
let time = ['Dưới 3 năm','Từ 5 - 10 năm','Trên 10 năm'];
let scales = [{capital: 'Dưới 3 tỷ',resource:'Dưới 50 người'},{capital: 'Từ 3 - 10 tỷ',resource:'Từ 50 - 100 người'},{capital: 'Từ 10 - 50 tỷ',resource:'Trên 100 người'},{capital: 'Trên 50 tỷ',resource:'Trên 100 người'}]
let a = 0;

console.log('Start!!!')
let intervalTesting = setInterval(()=>{
  if(a < 200){
    setTimeout(()=>{
      //Set up request
      let currentPosition =  positions[Math.floor(Math.random()*positions.length)];
      let currentScale =  scales[Math.floor(Math.random()*scales.length)];
      let options = {
        'method': 'POST',
        'url': 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfQPzR8LbCOZXN9bCJzZBoicxa9NwH6KodyHvzVykdTd-t42w/formResponse',
        'headers': {
          'Cookie': 'NID=201=Ix8PX16ooSoRipdgOqTzTBxi9pTRfneh5qFPdzM3OkVnbROtkyA7IQbgNKdfqQMmOWIlAMzMvaJoGbYRM8SE0XK3LJbkSfH7ED7wc_bXvbAWCPHv6MOa74gbWu0g1w96e8lfVzXec1-1GCM97SQZVXUTOm0JmKsTYk-N5e9wCkw'
        },
        formData: {
          'fvv': '1',
          'draftResponse': `[[
            [null,1375445574,["${age[Math.floor(Math.random()*age.length)]}"]\n,0]\n,
            [null,2105948542,["${currentPosition.name}"]\n,0]\n,
            [null,88823529,["${currentPosition.income}"]\n,0]\n,
            [null,681654640,["${currentScale.resource}"]\n,0]\n,
            [null,280252252,["${currentScale.capital}"]\n,0]\n,
            [null,616992030,["${time[Math.floor(Math.random()*time.length)]}"]\n,0]\n,
            [null,112216987,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,965953911,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,566680376,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,976455380,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,950790272,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,797735312,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1578891291,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,445937188,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,177793519,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1184888191,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,733532114,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,330839177,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1005739473,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,2115790494,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,529533167,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1003821097,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1025678114,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1512327162,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1081719143,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,50563395,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,442200022,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,150225545,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1004607493,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,337378208,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,743941376,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,337468218,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,31134597,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,842780442,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,272678880,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,560904602,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,445875667,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1161027169,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,572061381,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,112517641,["${listOptions2[Math.floor(Math.random()*listOptions2.length)]}"]\n,0]\n,
            [null,153634561,["${listOptions2[Math.floor(Math.random()*listOptions2.length)]}"]\n,0]\n,
            [null,1123137661,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1994497098,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1261525188,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,246351408,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,457861679,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1807755614,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1474745160,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,892893350,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,2146106981,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,276089967,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1509668195,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,687629829,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,156095348,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1729982217,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1071681845,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1502024172,["${listOptions1[Math.floor(Math.random()*listOptions1.length)]}"]\n,0]\n,
            [null,1833309304,["${listOptions[Math.floor(Math.random()*3)]}"]\n,0]\n
          ]\n,null,"-7728769148037007036"]\n`,
          'pageHistory': '0,1,2,3,4,5,6,7,8,9,10,11',
          'fbzx': '-7728769148037007036'
        }
      };
      request(options, function (error, response) { 
        if(response.statusCode == 200){
          let now = new Date();
          console.log(`${ now.toString() } ---> ${++a}`)
        }else{
          console.log(response.statusCodetus);
        }
      });
    },Math.floor(Math.random()*3*60)*1000);
  }else{
    console.log('Done!!!');
    clearInterval(intervalTesting);
  }
  
},3*60000) 
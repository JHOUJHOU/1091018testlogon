
var data= [{
    "class": "四資四一",
    "strid": "410912001",
    "name": "王小名",
    "strpasssword": "1111",
    "username": "1080C-51904678",
    "password": "UXVEWFDS",
    "login" : "",
    "data" : ""
},
{
    "class": "四資四一",
    "strid": "410912002",
    "name": "黃小名",
    "strpasssword": "1112",
    "username": "1080C-65189302",
    "password": "MRNCVGQY",
    "login" : "",
    "data" : ""
},
{
    "class": "四資四一",
    "strid": "410912003",
    "name": "陳小名",
    "strpasssword": "1113",
    "username": "1080C-62739801",
    "password": "SWFHXPGA",
    "login" : "",
    "data" : ""
},
{
    "class": "四資四一",
    "strid": "410912004",
    "name": "黑小名",
    "strpasssword": "1114",
    "username": "1080C-12634078",
    "password": "JEMCSZGW",
    "login" : "",
    "data" : ""
},
{
    "class": "四資四一",
    "strid": "410912005",
    "name": "白小名",
    "strpasssword": "1115",
    "username": "1080C-28514039",
    "password": "QEZHIYPX",
    "login" : "",
    "data" : ""
}];
document.getElementById('login').onclick = function(){
    var stu = document.getElementById('loginuser').value;
    var stupassword = document.getElementById('loginpassword').value;
    //var mydata = JSON.stringify(data);
    // console.log(mydata);
    var mydatalen = data.length;
    for(var i=0;i<mydatalen;i++){
        if(stu == data[i].strid && stupassword == data[i].strpasssword){
            var usernameid = document.querySelector('.username');
            var passwordid = document.querySelector('.password');
            usernameid.innerHTML = '平台帳號 : ' + data[i].username;
            passwordid.innerHTML = '平台密碼 : ' + data[i].password;
        
        }
    }
}


// function AutoSetHeight() {
//     var WinHeight = window.innerHeight;
//     var tag = document.getElementById('BrowserHeight')
//     var body = document.getElementsByTagName('body')[0];

//     tag.innerText = WinHeight;
//     body.style.height = WinHeight + "px";
// }
document.write('<script src="js/checklist.js"></script>');
document.getElementById('login').onclick = function(){
    var stu = document.getElementById('loginuser').value;
    var stupassword = document.getElementById('loginpassword').value;
    //var mydata = JSON.stringify(data);
    // console.log(mydata);
    var mydatalen = data.length;
    for(var i=0;i<mydatalen;i++){
        if(stu === data[i].stuid && stupassword === data[i].stupassword){
            var usernameid = document.querySelector('.username');
            var passwordid = document.querySelector('.password');
            usernameid.innerHTML = '平台帳號 : ' + data[i].username;
            passwordid.innerHTML = '平台密碼 : ' + data[i].password;
        }  
    }
}

document.getElementById('clear').onclick = function(){
    document.getElementById("loginuser").value = "";//清空input
    document.getElementById("loginpassword").value = "";//清空畫面文字
    document.querySelector('.username').innerHTML = "";//清空畫面文字
    document.querySelector('.password').innerHTML = "";//清空畫面文字
}
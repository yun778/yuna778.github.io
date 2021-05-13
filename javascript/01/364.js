id=prompt('아이디 입력');
if(id=='st01') {
    password=prompt('비밀번호 입력');
    if(password==='1111') {
        location.href="./success.html"
    }
    else {
        location.href="./fail.html"
    }
}
else if(id=='st02') {
    password=prompt('비밀번호 입력');
    if(password==='2222') {
        location.href="./success.html"
    }
    else {
        location.href="./fail.html"
    }
}
else if(id=='st03') {
    password=prompt('비밀번호 입력');
    if(password==='3333') {
        location.href="./success.html"
    }
    else {
        location.href="./fail.html"
    }
}
else {
    location.href="./fail.html"
}
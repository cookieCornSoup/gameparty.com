// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

/* 올바른 이메일 양식인가? */
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
/* 숫자만 있는가? */
function validateNumberOnlyString(str) {
    const re = /^[0-9]*$/
    return re.test(String(str));
}
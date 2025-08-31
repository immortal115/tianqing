function getIP(json) {
    dataLayer.push({
    'event':'ipEvent',
    'GA4_sky_ip':json.ip 
  });
    window.skyIp = json.ip;
    console.log("skyIp:" + window.skyIp);
}
window.skyUserAgent = btoa(navigator.userAgent);
console.log("skyUserAgent:" + window.skyUserAgent);

setTimeout(() => {
  window.skyVisitorsId = getCookie("_ga");
  console.log("skyVisitorsId:" + window.skyVisitorsId);
}, 2000);
// 设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

// 获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// 检查cookie
function checkCookie(cname) {
    var cvalue = getCookie(cname);
    console.log("cvalue=" + cvalue);
    if (cvalue != null && cvalue != "") {
        return true;
    } else {
        return false;
    }
}
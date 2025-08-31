(function () {
  function cookieToJson() {
    let cookieArr = document.cookie.split(";");
    let obj = {};
    cookieArr.forEach((i) => {
      let arr = i.split("=");
      obj[arr[0].trim()] = arr[1];
    });
    return obj;
  }
  function isObj(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
  // here "this" points to the XMLHttpRequest Object.
  var newSend = function (vData) {
    try {
      vObj = JSON.parse(vData);
      const thirdCodeObj = {
        path: location.href,
        cookie: cookieToJson(),
        title: document.title,
      };
      if (isObj(vObj)) {
        return this.realSend(JSON.stringify({ args: thirdCodeObj, ...vObj }));
      } else {
        return this.realSend(vData);
      }
    } catch (e) {
      return this.realSend(vData);
    }
  };
  XMLHttpRequest.prototype.send = newSend;
})();
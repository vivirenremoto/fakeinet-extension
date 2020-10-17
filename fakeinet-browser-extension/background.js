var version = 1;
var url = 'https://vivirenremoto.github.io/fakeinet-extension/domains.json?v=' + version;
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = function () {
    if (xhr.status === 200) {
        var domains = xhr.response;
        if (domains.indexOf(document.location.host) > -1) {
            var url = 'https://vivirenremoto.github.io/fakeinet-extension/info.html?v=' + version;
            var xhr2 = new XMLHttpRequest();
            xhr2.open('GET', url);
            xhr2.onload = function () {
                if (xhr.status === 200) {
                    var elem = document.createElement('div');
                    elem.innerHTML = xhr2.responseText;
                    document.getElementsByTagName("body")[0].appendChild(elem);
                }
            };
            xhr2.send();
        }
    }
};
xhr.send();

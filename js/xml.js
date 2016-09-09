var i = 0;
display(i);

function display(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            showXml(xmlhttp, i);
        }
    };
    xmlhttp.open("GET", "portfolio.xml", true);
    xmlhttp.send();
}

function showXml(xml, i) {
    var xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("images");
    document.getElementById('titleOne').innerHTML =
    x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;

    document.getElementById('titleTwo').innerHTML =
    x[i].getElementsByTagName("title")[1].childNodes[0].nodeValue;

    document.getElementById('titleThree').innerHTML =
    x[i].getElementsByTagName("title")[2].childNodes[0].nodeValue;

    /*document.getElementById('xmlImage').src =
    x[i].getElementsByTagName("src")[0].childNodes[0].nodeValue;*/

}

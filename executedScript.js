var links = document.getElementsByTagName("a"); 
for (var i = 0; i < links.length; i ++) {
  var ele = links[i];
  ele.setAttribute("target", "_blank");
}
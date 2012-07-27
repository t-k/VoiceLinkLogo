document.addEventListener('DOMContentLoaded', function() {
  var getOffset = function(index){
    var offset = 25* index;
    return offset;
  };
  var addClass = function (el, cl) {
    el.className += ' ' + cl;
  };
  var drawLine = function(x1, y1, x2, y2){
    var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
    var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    var transform = 'rotate('+angle+'deg)';
    var container = document.querySelector('#container');
    var div = document.createElement('div');
    addClass(div, 'line');
    div.style.position = 'absolute';
    div.style.webkitTransform = transform;
    div.style.MozTransform = transform;
    div.style.transform = transform;
    div.style.msTransform = transform;
    div.style.width = length + 'px';
    div.style.left = x1 + 'px';
    div.style.top = y1 + 'px';
    container.appendChild(div);
  };
  var drawCircle = function(x, y, r){
    var container = document.querySelector('#container');
    var div = document.createElement('div');
    addClass(div, 'circle');
    div.style.position = 'absolute';
    div.style.width = r + 'px';
    div.style.height = r + 'px';
    var _r = r / 2;
    div.style.left = (x - _r) + 'px';
    div.style.top = y + 'px';
    container.appendChild(div);
  };
  var draw = function(){
    var r = 30;
    drawCircle(getOffset(1), getOffset(12), r);
    drawLine(getOffset(1), getOffset(12), getOffset(5), getOffset(12));
    drawCircle(getOffset(5), getOffset(12), r);
    drawLine(getOffset(5), getOffset(12), getOffset(9), getOffset(19));
    drawCircle(getOffset(9), getOffset(19), r);
    drawLine(getOffset(9), getOffset(19), getOffset(14), getOffset(4));
    drawCircle(getOffset(14), getOffset(4), r);
    drawLine(getOffset(14), getOffset(4), getOffset(15), getOffset(12));
    drawCircle(getOffset(15), getOffset(12), r);
    drawLine(getOffset(15), getOffset(12), getOffset(20), getOffset(12));
    drawCircle(getOffset(20), getOffset(12), r);
  };
  draw();
});
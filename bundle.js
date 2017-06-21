(function () {
'use strict';

var measureScrollbar = (function () {
  const div = document.createElement('div');

  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';

  document.body.appendChild(div);

  const scrollbarWidth = div.offsetWidth - div.clientWidth;

  document.body.removeChild(div);

  return scrollbarWidth;
});

const scrollbarWidth = measureScrollbar();

document.getElementById('value').textContent = scrollbarWidth + 'px';

}());

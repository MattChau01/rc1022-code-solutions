// handleClick
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log('event.target: ', $click);
}

var $click = document.querySelector('.click-button');
$click.addEventListener('click', handleClick, false);

// handleMouseover
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log('event.target: ', $mouse);
}

var $mouse = document.querySelector('.hover-button');
$mouse.addEventListener('mouseover', handleMouseover, false);

// handleDoubleClick
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log('event.target: ', $dblClick);
}

var $dblClick = document.querySelector('.double-click-button');
$dblClick.addEventListener('dblclick', handleDoubleClick, false);

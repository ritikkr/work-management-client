const colors = [
  '#82C192',
'#B60D75',
'#EAD1F0',
'#CEE787',
'#CB8AF5',
'#8F8008',
'#A4FA1B',
'#828C74',
'#31AEE0',
'#02D5B5',
'#789969',
]
export function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return colors[Math.floor(Math.random() * 10)];
}

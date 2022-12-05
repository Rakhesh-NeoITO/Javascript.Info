let styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');
styles[styles.length%2 ] = 'Classic';
console.log(styles[styles.length%2 ])

console.log(styles);
console.log(styles.shift());
console.log(styles);

styles.unshift('Rap', 'Reggae');

console.log(styles);
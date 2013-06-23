var model = {
  title: 'Example Line Chart',
  xAxis: {
    units: 'Seconds'
  },
  yAxis: {
    units: ''
  },
  lines: []
};

var start = 0; // 0 seconds
var end = 10 * 60; // 10 minutes

/*
var start = 1104577200 * 1000; // Jan 1 2005 3:00
var end = 1104588000 * 1000; // Jan 1 2005 6:00
*/

var diff = end - start;
var numDataPoints = 400;
var increment = diff / numDataPoints;

// create lines
for (var n=0; n<2; n++) {
  var line = {
    title: 'Line Title ' + n,
    points: [] 
  }
  var lastY = Math.round(((Math.random() * 100) - 50) * 1);
  
  // create points
  for (var i=start; i<end; i+=increment) {
    var y = Math.round((lastY + (Math.random() * 10) - 5) * 1);
    lastY = y;
    line.points.push({
        x: i,
        y: y
    });
  }

  model.lines.push(line);
}

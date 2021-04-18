var colors = {
  'dark-green': '#009a6b',
  'medium-green': '#a0d2ad',
  'light-green': '#dee7cc',
  'fluo-green' : '#0DDE29',
  'dark': '#212529',
};

var width = 300;
var height = 300;

// Create an svg element
var svg = d3.select('.section_1')
            .append('svg')
            .attr('width', width)
            .attr('height', height)


// Create an arc
var arc = d3.svg.arc()
            .innerRadius(50)
            .outerRadius(70)
            .startAngle(45 * (Math.PI/180)) //converting from degs to radians
            .endAngle(3) //just radians


// Append arc
svg
  .append('path')
  .attr('d', arc)
  .attr('fill', colors.light-green)

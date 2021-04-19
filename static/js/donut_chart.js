var colors = {
  'dark-green': '#009a6b',
  'medium-green': '#a0d2ad',
  'light-green': '#dee7cc',
  'fluo-green' : '#0DDE29',
  'dark': '#212529',
};

function donut_chart(section, data) { 

var color;
  if (section == '.final_scores') {
    color = colors['fluo-green']
  }
  else if (data >= 0.6) {
    color = colors['dark']
  }
  else if (data > 0.3) {
    color = colors['dark-green']
  }
  else {
    color = colors['medium-green']
  }

var radius = 100;
var border = 35;
var padding = 30;
var startPercent = 0;
var endPercent = parseFloat(data);

var twoPi = Math.PI * 2;
var formatPercent = d3.format('.0%');
var boxSize = (radius + padding) * 2;


var count = Math.abs((endPercent - startPercent) * 100);
var step = endPercent < startPercent ? -0.01 : 0.01;

var arc = d3.arc()
  .startAngle(0)
  .innerRadius(radius)
  .outerRadius(radius - border);

var parent = d3.select(section);

var svg = parent.append('svg')
  .attr('width', boxSize)
  .attr('height', boxSize);


var g = svg.append('g')
  .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

var meter = g.append('g')
  .attr('class', 'progress-meter');

meter.append('path')
  .attr('class', 'background')
  .attr('fill', '#ccc')
  .attr('fill-opacity', 0.5)
  .attr('d', arc.endAngle(twoPi));

var foreground = meter.append('path')
  .attr('class', 'foreground')
  .attr('fill', color)
  .attr('fill-opacity', 1)

var front = meter.append('path')
  .attr('class', 'foreground')
  .attr('fill', color)

var numberText = meter.append('text')
  .attr('text-anchor', 'middle')
  .attr('dy', '.35em');

function updateProgress(progress) {
  foreground.attr('d', arc.endAngle(twoPi * progress));
  front.attr('d', arc.endAngle(twoPi * progress));
  numberText.text(formatPercent(progress));
}

var progress = startPercent;

(function loops() {
  updateProgress(progress);

  if (count > 0) {
      count--;
      progress += step;
      setTimeout(loops, 10);
  }
})();
}
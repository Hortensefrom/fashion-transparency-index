var colors = {
    'dark-green': '#009a6b',
    'medium-green': '#a0d2ad',
    'light-green': '#dee7cc',
    'fluo-green' : '#0DDE29',
    'dark': '#212529',
  };
  
  var width = 200;
  var height = 200;
  
  function create_arc(section, data, color) {
    // Create an svg element
    var svg = d3.select(section)
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .attr('transform', 'translate(100,100)')
    
      var angle = data*2*Math.pi
  
    // Create an arc
    var arc = d3.arc()
                .innerRadius(50)
                .outerRadius(70)
                .startAngle(6.28)
                .endAngle(angle) 
    
    // Append arc
    svg
      .append('path')
      .attr('d', arc)
      .attr('fill', color)
  
      return svg
  }

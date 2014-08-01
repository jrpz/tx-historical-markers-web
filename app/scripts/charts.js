var width  = 600,
    height = 400;

var getCitiesCount = function (data) {
  return _.countBy(data, 'city');
};

var getYearsCount = function(data) {
  return _.countBy(data, 'year');
}

d3.json('/data/markers_hidalgo.json', function (err, json) {
  if (err) console.log('Error!');
  getCitiesCount(json);
  getYearsCount(json);
});



// var svg = d3.select('#chart-cities').selectAll('svg')
//               .attr('width', width)
//               .attr('height', height)
//             .append('g');
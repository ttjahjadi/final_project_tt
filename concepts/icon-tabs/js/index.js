$('.feature-item').on('click', function() {
  var iconID = $(this).attr('data-id');
  console.log(iconID)
  $('#description-' + iconID).toggle().siblings().hide();
});
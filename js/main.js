var data = [
  { 'title' : '' , 'subtitle' : '#corso' , 'img' :  'image/corso.jpg' },
  { 'title' : '' , 'subtitle' : '#church' , 'img' :  'image/church.jpg' },
  { 'title' : '' , 'subtitle' : '#newtown' , 'img' :  'image/newtown.jpg' },
  { 'title' : '' , 'subtitle' : '#yelp' , 'img' :  'image/yelp.jpg' },
  { 'title' : '' , 'subtitle' : '#selfie' , 'img' :  'image/yucun.jpg' },
];

(function ( $ ) {

  $('#photocols').photocols({
    colswidth : 200,
    height : 440,
    bgcolor : '#fff',
    opacity: 0.6,
    gap: 2,
    data: data});

}( jQuery ));

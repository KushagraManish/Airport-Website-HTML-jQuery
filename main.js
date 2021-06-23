$( function() {
    $( "datepicker1" ).datepicker();
    $("#datepicker2").datepicker();
     $( "#datepicker5" ).datepicker();
    $( "#datepicker6" ).datepicker();
    $( "#datepicker9" ).datepicker();
  } );
    $( function() {
    $( "#datepicker3" ).datepicker(({minDate: 0}));
   
   $('.timepicker').timepicker({
    timeFormat: 'h:mm p',
    interval: 60,
    minTime: '10',
    maxTime: '6:00pm',
    defaultTime: '11',
    startTime: '10:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});
  } );

  $(document).ready(function(){
  $("#cf").click(function(){
    $("#cf").addClass("hoverable");
    $("#cf1").slideDown("slow");

  });
  $("#chk").click(function(){
    $("#chk").addClass("hoverable");
    $("#chk1").slideDown("slow");

  });
   $("#lng").click(function(){
    $("#lng").addClass("hoverable");
    $("#lng1").slideDown("slow");
});
   $("#vac").click(function(){
    $("#vac").addClass("hoverable");
    $("#vac1").slideDown("slow");
});
   
   $("#switch1").click(function(){
        $("#retdate").toggle();
    });
   $("#park1").click(function(){

$("#park1").addClass("hoverable");
    $("#park").slideDown("slow");
});
});

$(document).mouseup(function(e) 
{
    var container = $("#lng1");


    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.slideUp();
         $("#lng").removeClass("hoverable");
    }
});
$(document).mouseup(function(e) 
{
    var container = $("#chk1");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.slideUp();
        $("#chk").removeClass("hoverable");
    }
});
$(document).mouseup(function(e) 
{
    var container = $("#vac1");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.slideUp();
         $("#vac").removeClass("hoverable");
    }
});
$(document).mouseup(function(e) 
{
    var container = $("#park");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
         $("#park1").removeClass("hoverable");
        container.slideUp();
    }
});
$(document).mouseup(function(e) 
{
    var container = $("#cf1");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.slideUp();
         $("#cf").removeClass("hoverable");
    }
});

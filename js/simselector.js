jQuery(document).ready(function($) {

	// setup defaults
	hideElements = function(){
		$('.slide-title a').hide();
		$('.slide-title').removeClass('active');
        $('.sim-detail').hide();
	}
        
    //setup elements        
    $( '.draggable' ).draggable({ 
        revert: 'invalid',
        snap: '.droppable',
        snapMode: 'inner',
        snapTolerance: 30,
        axis: 'x',
        containment: 'parent',
        cssClasses: false
    });
    
    $( '.droppable' ).droppable({
        activeClass: 'ui-state-hover',
        hoverClass: 'ui-state-active',
        cssClasses: false,
        drop: function( event, ui ) {}
    });            
       
    //Set Up Click Events.
    $( '#orig' ).click(function() {
        $('.draggable').css('left', '0px');
        hideElements();
        $('.tle-orig a').show();
        $('.tle-orig').addClass('active');
        $('.detail-orig').fadeIn();
    });
    
    $( '#elite' ).click(function() {
        $('.draggable').css('left', '202px');
        hideElements();
        $('.tle-elite a').show();
        $('.tle-elite').addClass('active');
        $('.detail-elite').fadeIn();
    });
    
    $( '#wide' ).click(function() {
        //alert('clock');
        $('.draggable').css('left', '402px');
        hideElements();
        $('.tle-wide a').show();
        $('.tle-wide').addClass('active');
        $('.detail-wide').fadeIn();
    });


    $( '#sport' ).click(function() {
        //alert('clock');
        $('.draggable').css('left', '602px');
        hideElements();
        $('.tle-sport a').show();
        $('.tle-sport').addClass('active');
        $('.detail-sport').fadeIn();
    });
            
    //setup draggable
    $( '#orig' ).droppable({
        drop: function( event, ui ) {
            hideElements();
            $('.tle-orig a').show();
            $('.tle-orig').addClass('active');
            $('.detail-orig').fadeIn();       
        }
    });
    
    $( '#elite' ).droppable({
        drop: function( event, ui ) {
            hideElements();
            $('.tle-elite a').show();
            $('.tle-elite').addClass('active');
            $('.detail-elite').fadeIn();
        }
    });
    
    $( '#wide' ).droppable({
        drop: function( event, ui ) {
            hideElements();
            $('.tle-wide a').show();
            $('.tle-wide').addClass('active');  
            $('.detail-wide').fadeIn();         
        }
    });

    $( '#sport' ).droppable({
        drop: function( event, ui ) {
            hideElements();
            $('.tle-sport a').show();
            $('.tle-sport').addClass('active');
            $('.detail-sport').fadeIn();            
        }
    });
    
 });

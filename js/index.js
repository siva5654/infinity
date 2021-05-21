$(function() {
	  $('.tabs-nav a').click(function() {

	    // Check for active
	    $('.tabs-nav li').removeClass('active');
	    $(this).parent().addClass('active');

	    // Display active tab
	    let currentTab = $(this).attr('href');
	    $('.tabs-content .tab_list_cont').addClass('none')
	    $(currentTab).addClass('show').removeClass('none');

	    return false;
	  });
	});


$('.fb_inp').keyup(function(){
	if (event.keyCode === 13) {
  		let dynamic_val = $(this).val();
  		if(dynamic_val !== ''){
  			$('.dynamic_values').append('<span id="testSpan">'+dynamic_val+'</span>');
  			$('.fb_inp').val('');
  			$('.go_ing').removeClass('none').addClass('active');
  		}
  		
  }
})


$('.pr_ct').click(function(){
	$('.mg_fine_pr').removeClass('none')
})

$('.ch_bx').change(function() {
	var numberNotChecked = $('.ch_bx:checked').length;
        if($(this).is(":checked")) {
          $('.sc_nav_linsk').addClass('active');
          let cheVl = $(this).val();
         



          if(cheVl =="facebook"){
          	$('.fb_container').removeClass('none');
          	$('.tab_container').removeClass('none');
          }
          else if(cheVl=="youtube"){
			$('.yb_container').removeClass('none');
          	$('.tab_container').removeClass('none');
          }
           else if(cheVl=="twitter"){
			$('.twitter_container').removeClass('none');
          	$('.tab_container').removeClass('none');
          }
          else{
          $('.linkedin_container').removeClass('none');
          	$('.tab_container').removeClass('none');
          }
        }
        else{ 
        	if(numberNotChecked == 0){
        		 $('.sc_nav_linsk').removeClass('active');
        		 $('.mg_fine_pr').addClass('none');
        		 $('.tab_container').addClass('none');
        		 $('.twitter_container, .yb_container , .linkedin_container , .fb_container').addClass('none');
        	}

        }   
         
   

    });
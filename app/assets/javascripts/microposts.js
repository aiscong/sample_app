function updateCountdown() {
    // 140 is the max message length
    var remaining = 140 - jQuery('#micropost_content').val().length;
    if(remaining > 1){ 
    	jQuery('.countdown').text(remaining + ' characters remaining');
    }else if(remaining == 1 || remaining == 0){
    	jQuery('.countdown').text(remaining + ' character remaining');
    }else if(remaining == -1){
    	jQuery('.countdown').text(' over limit by ' + (-1 * remaining) +
    		' character');
    }else{
    	jQuery('.countdown').text(' over limit by ' + (-1 * remaining) +
    		' characters');
    }
   
}

jQuery(document).ready(function($) {
    updateCountdown();
    $('#micropost_content').change(updateCountdown);
    $('#micropost_content').keyup(updateCountdown);
});
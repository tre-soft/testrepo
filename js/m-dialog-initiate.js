$(function() {
        // Options (defaults):
        // zIndex:100,
        // eventType:'click',
        // addOffset:10,
        // animation:'fade',
        // animationSpeed:250
        $('.one').mouseyDialog();
        
        $('.two').mouseyDialog({
          eventType:'hover',
          animation:'slide',
          animationSpeed:100,
		  addOffset:5
        });
      });
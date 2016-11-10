/*var button =document.getElementById("counter");
button.onclick= function(){
    //create a request object
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a var
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE ){
            if(request.status === 200){
                var counter=request.responseText;
                var span = document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    // make the request
    request.open('GET','http://vizhiyalm.imad.hasura-app.io/counter',true);
    request.send(null);
};*/

	$(window).preloader({
  delay: 1500
});
  $(window).preloader({

  // preloader selector

  selector: '#preloader',

  // Preloader container holder

  type: 'document',

  // 'fade' or 'remove'

  removeType: 'fade',

  // fade duration

  fadeDuration: 750,

  // auto disimss after x milliseconds

  delay: 0

});
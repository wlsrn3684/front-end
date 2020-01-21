/* start header js */

  function testAnim(x) {
    $("#animationSandbox").removeClass().addClass(x + " animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
      $(this).removeClass();
    });
  };

  $(document).ready(function(){
    $(".js--triggerAnimation").click(function(e){
      e.preventDefault();
      var anim = $(".js--animations").val();
      testAnim(anim);
    });

    $(".js--animations").change(function(){
      var anim = $(this).val();
      testAnim(anim);
    });

    var lock = false
    $("#dropdown-item-2").hover(
      ()=>{
        lock = false
        $("#dropmenu-2").css({"display": ""})
        $("#dropmenu-2").removeClass('animated')
        $("#dropmenu-2").removeClass('fadeOut')
        $("#dropmenu-2").addClass('fadeIn')
        $("#dropmenu-2").addClass('animated')
      }, ()=>{
        lock = true
        $("#dropmenu-2").removeClass('animated')
        $("#dropmenu-2").removeClass('fadeIn')
        $("#dropmenu-2").addClass('fadeOut')
        $("#dropmenu-2").addClass('animated')

      }
    )

    $("#dropmenu-2").on("animationend", ()=>{
      if (lock){
        $("#dropmenu-2").css({"display": "none"})
      }
    })

    $(window).scroll(()=>{

      /*scrollTop == 0 ?? else */
      if($(this).scrollTop() == 0) {
        $("#header").css({'background-color': '', 'box-shadow': ''})
        $("#nav-item").removeClass('text-black')
        $("#nav-item").addClass('text-light')
      }
      else {
        $("#header").css({'background-color': 'lightgray', 'box-shadow': '0px 5px 10px #999999'})
        $("#nav-item").removeClass('text-light')
        $("#nav-item").addClass('text-black')
      }

    })

  });



  /* end header js */

  /* start content js */



  /* end content js */

  /* start footer js */



  /* end footer js */

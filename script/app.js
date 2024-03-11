$(function(){

    //menu
    $(".menu li").on({
        mouseover:function(){
          $(".submenu",this).stop().slideDown();
        },
        mouseout:function(){
          $(".submenu",this).stop().slideUp();
        }
      });

    //#ham 클릭시 hmenu보이기
    // $("#ham").click(function(){
    //   $(".h_menu").next().toggle();
    // });


    $("#ham").click(function(){
      $(".h_menu").toggle('600');         
    });
        
    
    $(".hmenu li").on({
      mouseover:function(){
        $(".hsubmenu",this).stop().slideDown();
      },
      mouseout:function(){
        $(".hsubmenu",this).stop().slideUp();
      }
    });

});
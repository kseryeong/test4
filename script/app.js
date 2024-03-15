$(function () {

  //menu
  $(".menu li").on({
    mouseover: function () {
      $(".submenu", this).stop().slideDown();
    },
    mouseout: function () {
      $(".submenu", this).stop().slideUp();
    }
  });

  //#ham 클릭시 hmenu보이기
  // $("#ham").click(function(){
  //   $(".h_menu").next().toggle();
  // });


  $("#ham").click(function () {
    $(".h_menu").toggle('600');
  });


  $(".hmenu li").on({
    mouseover: function () {
      $(".hsubmenu", this).stop().slideDown();
    },
    mouseout: function () {
      $(".hsubmenu", this).stop().slideUp();
    }
  });

  $("#schedule .list tr:nth-child(1) td:last-child .info").on({
    mouseover: function () {
      $("#schedule .list tr:nth-child(1) td:last-child .info", this).css(
        {
          color: '#034A62',
          backgroundColor: '#D1F3FF'
        }
      )
    },
    mouseout: function () {
      $("#schedule .list tr:nth-child(1) td:last-child .info", this).css(
        {
          color: '#D1F3FF',
          backgroundColor: '#034A62',
          transiton: '0.6s'
        }
      )
    }
  });

});
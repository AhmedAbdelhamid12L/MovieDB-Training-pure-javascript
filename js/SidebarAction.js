export class SidebarAction {
  constructor() {
    this.SidebarJQuery();
  }
  SidebarJQuery() {
    let pageLinksWidth = $(".page-links").outerWidth();
    $("#hiddenSidebar").css("left" , -pageLinksWidth );
    $("#toggleBtn").click(function(){
      if($("#hiddenSidebar").css("left") == "0px") {
        $("#hiddenSidebar").animate({left: `-${pageLinksWidth}`} , 700);
        $("#toggleBtn").removeClass("fa-times");
        $("#toggleBtn").addClass("fa-bars");
        $(".hidden-effect").slideDown(200);
        $("#linkOne").hide(100 , ()=> {
          $("#linkTwo").hide( 100, ()=> {
            $("#linkThree").hide(100 , ()=> {
              $("#linkFour").hide(100 , ()=> {
                $("#linkFive").hide(100 , ()=> {
                  $("#linkSix").hide(100);
                })
              })
            })
          })
        });
      }else {
        $("#hiddenSidebar").animate({left: `0px`} , 700);
        $("#toggleBtn").removeClass("fa-bars");
        $("#toggleBtn").addClass("fa-times");
        $(".hidden-effect").slideUp(1200);
        $("#linkOne").show(200 , ()=> {
          $("#linkTwo").show( 200, ()=> {
            $("#linkThree").show(200 , ()=> {
              $("#linkFour").show(200 , ()=> {
                $("#linkFive").show(180 , ()=> {
                  $("#linkSix").show(160);
                })
              })
            })
          })
        });
      }
    })
  }
}
//xu.Tabs.
var tabPanel,tabTit;

//(function(jQuery){
//$=jQuery.noConflict();
$('[data-tab=nav] a').click(function(){
  $(this).addClass('current').siblings().removeClass();
  $('[data-tab=content] > [data-tab=panel]').eq($('.tabNav a').index(this)).addClass('current').show(100).siblings().hide(100);
  $('[data-tab=content]').scrollTop(0);
});
//})(jQuery);
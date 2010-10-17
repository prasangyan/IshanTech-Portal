animatedcollapse.addDiv('cart_bag_sec', 'fade=0,speed=400,group=AccountDiv')
animatedcollapse.ontoggle=function($, divobj, state){ //fires each time a DIV is expanded/contracted
//$: Access to jQuery
//divobj: DOM reference to DIV being expanded/ collapsed. Use "divobj.id" to get its ID
//state: "block" or "none", depending on state
}
jQuery(document).ready(function($){
var btn, n, toggleButtons = {
'manageMyAccount': {
open: 'images/cart_btn.png',
closed: 'images/cart_btn_rol.png'
}
}
for (btn in toggleButtons) {
n = document.getElementById(btn);
n.setAttribute('data-openimage', toggleButtons[btn].open);
n.setAttribute('data-closedimage', toggleButtons[btn].closed);
}

});
animatedcollapse.init();
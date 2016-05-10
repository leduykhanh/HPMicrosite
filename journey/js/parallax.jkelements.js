var responsive = 1;
var transitionSpeed = 2500;


var items =[];
//gradient background
var item = {};
item.name = "#understand";
item.stackOrder = 300;
item.content = "image";
item.image = "images/hp/Journey-Understand.jpg";
item.sizes = {w:window.innerWidth+300+"",h:window.innerHeight+""};
item.screenPos = ["center","-150%","-250%","-350%","-450%","-550%"];
item.visibility = ["true","true","true","true","true","true"];
item.parallaxScene = true;
item.bPos = 0;
item.mouseSpeed = 15;
items.push(item);

var item = {};
item.name = "#validate";
item.stackOrder = 300;
item.content = "image";
item.image = "images/hp/Journey-Validate.jpg";
item.sizes = {w:window.innerWidth+100+"",h:window.innerHeight+""};
item.screenPos = ["150%","center","-150%","-250%","-350%","-400%"];
item.visibility = ["true","true","true","true","true","true"];
item.parallaxScene = true;
item.bPos = 0;
item.mouseSpeed = 15;
items.push(item);

var item = {};
item.name = "#qualify";
item.stackOrder = 300;
item.content = "image";
item.image = "images/hp/Journey-Qualify.jpg";
item.sizes = {w:window.innerWidth+100+"",h:window.innerHeight+""};
item.screenPos = ["200%","100%","center","-100%","-200%","-300%"];
item.visibility = ["true","true","true","true","true","true"];
item.parallaxScene = true;
item.bPos = 0;
item.mouseSpeed = 15;
items.push(item);

var item = {};
item.name = "#develop";
item.stackOrder = 300;
item.content = "image";
item.image = "images/hp/Journey-Develop.jpg";
item.sizes = {w:window.innerWidth+100+"",h:window.innerHeight+""};
item.screenPos = ["300%","200%","100%","center","-100%","-200%"];
item.visibility = ["true","true","true","true","true","true"];
item.parallaxScene = true;
item.bPos = 0;
item.mouseSpeed = 15;
items.push(item);
var item = {};
item.name = "#nego";
item.stackOrder = 300;
item.content = "image";
item.image = "images/hp/Journey-Negotiate.jpg";
item.sizes = {w:window.innerWidth+100+"",h:window.innerHeight+""};
item.screenPos = ["400%","200%","100%","100%","center","-200%"];
item.visibility = ["true","true","true","true","true","true"];
item.parallaxScene = true;
item.bPos = 0;
item.mouseSpeed = 15;
items.push(item);

var item = {};
item.name = "#win-and-d";
item.stackOrder = 300;
item.content = "image";
item.image = "images/hp/Journey-Win.jpg";
item.sizes = {w:window.innerWidth+100+"",h:window.innerHeight+""};
item.screenPos = ["550%","450%","350%","250%","100%","center"];
item.visibility = ["true","true","true","true","true","true"];
item.parallaxScene = true;
item.bPos = 0;
item.mouseSpeed = 15;
items.push(item);


var item = {};
item.name = "#home-page";
item.stackOrder = 99;
item.content = "html";
item.screenPos = ["center","-150%","-250%","-350%","-450%","-550%"];
item.offsetV = 0;
item.visibility = ["true","true","true","true","true","true"];
items.push(item);

var item = {};
item.name = "#aboutus-page";
item.stackOrder = 99;
item.content = "html";
item.screenPos = ["150%","center","-150%","-250%","-350%","-400%"];
item.offsetV = 0;
item.visibility = ["true","true","true","true","true","true"];
items.push(item);

var item = {};
item.name = "#blog-page";
item.stackOrder = 99;
item.content = "html";
item.screenPos = ["250%","150%","center","-150%","-250%","-350%"];
item.offsetV = 0;
item.visibility = ["true","true","true","true","true","true"];
items.push(item);

var item = {};
item.name = "#portfolio-page";
item.stackOrder = 99;
item.content = "html";
item.screenPos = ["350%","250%","150%","center","-150%","-250%"];
item.offsetV = 0;
item.visibility = ["true","true","true","true","true","true"];
items.push(item);

var item = {};
item.name = "#close-page";
item.stackOrder = 99;
item.content = "html";
item.screenPos = ["450%","350%","250%","150%","center","-100%"];
item.offsetV = 0;
item.visibility = ["true","true","true","true","true","true"];
items.push(item);

var item = {};
item.name = "#win-page";
item.stackOrder = 99;
item.content = "html";
item.screenPos = ["550%","450%","350%","250%","100%","center"];
item.offsetV = 0;
item.visibility = ["true","true","true","true","true","true"];
items.push(item);

var HORILLAX = {};

(function($) {
//Check of url has a query
$.QueryString = (function(a) {
		if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'))
    
})(jQuery);

if( $.isNumeric($.QueryString["page"])){
	var pagemove = $.QueryString["page"];
}
else{
	var pagemove = 0;
}




//Start Animating
jQuery(document).ready(function($) {
	window.total_num_pages = $("div.parallax-page").length;
	$(".nano").nanoScroller({ alwaysVisible: true });
	this.ANIM = new HORILLAX.ANIM();
	HORILLAX.ANIM.instance.move(pagemove);
});



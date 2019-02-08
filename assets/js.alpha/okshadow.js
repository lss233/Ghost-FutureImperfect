/*
 * OKShadow by OKFocus - http://okfoc.us - @okfocus
 * Version 1.3
 * Licensed under MIT.
 *
 */
(function(c){c.okshadow=function(e,j){var a=this;a.$el=c(e);a.el=e;a.$el.data("okshadow",a);var h=!0;a.init=function(){a.options=c.extend({},c.okshadow.options,j);a.build()};a.build=function(){a.start()};a.clamp=function(a,d,c){return Math.max(d,Math.min(c,a))};a.setoption=function(b,d){if("string"===typeof b){if(a.options[b]=d,"color"===b)return a.update(a.sx,a.sy,a.fuzz)}else a.options=c.extend(a.options,b);a.mousemove(a)};a.start=function(){(-1!==navigator.userAgent.indexOf("Mobile")||-1!==navigator.userAgent.indexOf("Android"))&&
"DeviceOrientationEvent"in window?(window.addEventListener("deviceorientation",a.deviceorientation,!1),a.deviceorientation({alpha:0,beta:0,gamma:0}),window.addEventListener("resize",a.resize,!1),a.portraitMode=!0):(c(window).bind({mousemove:a.mousemove}),a.mousemove({pageX:c(window).width()/2,pageY:c(window).height()/2}));a.options.transparent&&(a.el.style.color="transparent");a.update()};a.resize=function(){var b=c(window).height()/c(window).width();a.portraitMode=1<=b};a.deviceorientation=function(b){if(b&&
"beta"in b){var d;a.portraitMode?(d=b.beta,b=b.gamma):(d=b.gamma,b=b.beta);distance=Math.sqrt(d*d+b*b);a.sx=null!=a.options.xMax?b/90*a.options.xMax:50*(b/90);a.sy=null!=a.options.yMax?d/90*a.options.yMax:50*(d/90);a.fuzz=null!=a.options.fuzzMax?Math.min(Math.abs(distance/90*(a.options.fuzzMax-a.options.fuzzMin)+a.options.fuzzMin),a.options.fuzzMax):Math.abs(distance/90*(30-a.options.fuzzMin)+a.options.fuzzMin,30);a.options.downwards&&(a.sy=Math.abs(a.sy));a.sx+=a.options.xOffset;a.sy+=a.options.yOffset}};
a.mousemove=function(b){var d=a.$el.offset(),c=b.pageX;b=b.pageY;var f=d.top+a.$el.height()/2,d=d.left+a.$el.width()/2-c,e=f-b,f=d/a.options.xFactor,g=e/a.options.yFactor,d=Math.sqrt(d*d+e*e)/a.options.fuzz+a.options.fuzzMin;null!=a.options.xMax&&(f=a.clamp(f,-1*a.options.xMax,a.options.xMax));null!=a.options.yMax&&(g=a.clamp(g,-1*a.options.yMax,a.options.yMax));null!=a.options.fuzzMax&&(d=a.clamp(d,a.options.fuzzMin,a.options.fuzzMax));f+=a.options.xOffset;g+=a.options.yOffset;a.pageX=c;a.pageY=
b;a.sx=f;a.sy=g;a.fuzz=d};a.browsers=["","-moz-","-webkit-","-ms-"];a.update=function(){if(h){requestAnimFrame(a.update);var b=a.sx+"px "+a.sy+"px "+a.fuzz+"px "+a.options.color,d=a.options.textShadow?"text-shadow":"box-shadow",c={},e;for(e in a.browsers)c[a.browsers[e]+d]=b;a.$el.css(c)}};a.pause=function(){h=!1};a.unpause=function(){h||(h=!0,a.update())};a.init()};c.okshadow.options={color:"#888",fuzz:40,fuzzMin:0,fuzzMax:30,xOffset:0,xFactor:30,xMax:30,yOffset:0,yFactor:30,yMax:30,downwards:!0,
textShadow:!1,transparent:!1};c.fn.okshadow=function(e){return this.each(function(){new c.okshadow(this,e)})};window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(c){window.setTimeout(c,1E3/60)}})(jQuery);
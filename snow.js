(function(){
	var	d = document.createElement('div'),
		ca = document.createElement('canvas'),
		w = 0;h = 0;
	document.body.appendChild(d);
	d.appendChild(ca);
	w = d.offsetWidth;h = d.offsetHeight;
	ca.setAttribute('width',w);
	ca.setAttribute('height',h);
	ca.onselectstart = function(){return false};
	ct = ca.getContext('2d');

	//snow
	var sd = document.createElement('div');
	document.body.appendChild(sd);
	sd.style.cssText += ';position:fixed;top:0;left:0;right:0;bottom:0;z-index:100000;overflow:hidden;';
	var ss = [];
	var limit = 0;
	var stime = setInterval(function(){
		if(limit++ == 5){
			limit = 0;
			var ns = document.createElement('div');
			ns.innerHTML = '\u2745';
			ns.style.cssText += ';position:absolute;top:-2px;color:#888;opacity:0.8;';
			//-webkit-transition:top 0.05 linear;-webkit-transition:left 0.05 linear;-moz-transition:top 0.05 linear;-moz-transition:left 0.05 linear;-o-transition:top 0.05 linear;-o-transition:left 0.05 linear;
			ns.ztop = -2;
			ns._ztop = 2+Math.random()*5;
			ns.zleft = Math.random()*sd.offsetWidth;
			ns._zleft = Math.random()<0.5? Math.random() : Math.random()*(-1);
			ns.style.fontSize = 32*Math.random()+'px';
			ns.style.opacity = 0.5+Math.random()*0.5;
			ns.style.left = ns.zleft+'px';
			sd.appendChild(ns);
			ss.push(ns);			
		}
		for(var i=0;i<ss.length;i++){
			ss[i].ztop += ss[i]._ztop;
			ss[i].zleft += ss[i]._zleft;				
			if(ss[i].ztop > sd.offsetHeight){
				sd.removeChild(ss[i]);
				ss.splice(i,1);
			}else{
				ss[i].style.top = ss[i].ztop+'px';
				ss[i].style.left = ss[i].zleft+'px';
			}
		}
	},40);
	window.zythumsgooglesnowloaded = true;
})();
gsap.config({trialWarn: false});
let select = s => document.querySelector(s),
		q = gsap.utils.selector(document),
		toArray = s => gsap.utils.toArray(s),
		container = select('#container'),
		line = select('.line'),
		tri = select('.tri'),
		mainSVG = select('#mainSVG'),
		displayText = select('#displayText'),
		allLines = [],
		allTri = [],
		numLines = 60,
		mainCircleRadius = 190, //change this, maybe?
		time = 12, //change this
		currentTime = time,
		mainTl,
		hasPlayed = false

function setDisplay(_time) {
	//console.log(time / 60)
	let str = "";
	if(_time == 0) {
		str = `00:00`
	}
	if(_time < 10) {
		str = `00:0${_time}`
	}
	if(_time > 9 && _time < 60) {
		str = `00:${_time}`
	}
	if(_time > 59) {
		//console.log(_time)
		let diff = parseFloat(_time / 60).toFixed(2);
		let integer = Number(String(diff).split('.')[0]);
		let remainder = (Number(String(diff).split('.')[1])/100) * 60;
		let remainderStr = Math.round(remainder) <= 9 ? `0${Math.round(remainder)}` : Math.round(remainder)
		//console.log(diff, integer, remainder, remainderStr)
		//console.log(integer * 60 + (remainder * 60))
		if(integer > 9) {
			
			str = `${integer}:${remainderStr}`
		}
		if(integer < 10) {
			
			str = `0${integer}:${remainderStr}`
		}
		//str = `00:${time}`
	}
	
	return str
}


gsap.set('svg', {
	visibility: 'visible'
})
let circumference = Math.ceil(2 * Math.PI * mainCircleRadius);
let lineHeight = Math.ceil(circumference/numLines);

for(let i = 0; i < numLines; i++) {
	let angle = (360/numLines) * i - 90;
	let c = tri.cloneNode(true);
	container.appendChild(c)
	let point = {
  	x: (Math.cos(angle * Math.PI / 180) * mainCircleRadius) + 400,
  	y: (Math.sin(angle * Math.PI / 180) * mainCircleRadius) + 300	
	}		
	gsap.set(c, {
		x: point.x,
		y: point.y,
		attr: {
			y1:10,
			y2: lineHeight+10
		},				
		transformOrigin: '50% 50%',
	})

	gsap.set(c, {
		rotation: angle ,
		transformOrigin: '50% 50%'
	})
	allLines.push(c);
}

function animate() {

	let duration = Math.ceil(time / numLines); 
	mainTl = gsap.timeline({
		onUpdate: function() {
			let count = Math.floor(time - this.time());
			if(count <= 0) {count = 0};			
			displayText.innerHTML = setDisplay(count);
		}
	});
	mainTl.to(allLines, {
		duration: duration,
		rotation:'+=90',
		transformOrigin: '50% 50%',
		fillOpacity: 0,
		stagger: {
			amount: time - duration,
			from: 'end'
		},
		ease: 'elastic(0.83, 0.8)'
	}).timeScale(1)
}

displayText.innerHTML = setDisplay(time)
gsap.set(displayText, {
	x: 400,
	y: 300
})	

function start() {
	allLines.reverse();
	currentTime = time;
	if(hasPlayed) {
		mainTl.timeScale(10)
		mainTl.reverse();
		hasPlayed = false;
	} else {
		animate();
		hasPlayed = true;		
	}
}
document.onclick = start;

let introTl = gsap.timeline();

introTl.from(allLines.reverse(), {
	opacity: 0,
	scale: 0.6,
	transformOrigin: '50% 50%',
	stagger: {
		each: 0.01
	}
})
.from('#displayText', {
	opacity: 0,
	scale: 0.2,
	transformOrigin: '50% 50%',
	ease: 'elastic(0.3, 0.6)'
}, '-=0.5')
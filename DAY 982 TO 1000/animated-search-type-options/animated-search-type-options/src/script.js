window.addEventListener("DOMContentLoaded",() => {
	const search = new SearchWithTypeOptions(".search");
});

class SearchWithTypeOptions {
	type = 0;
	typeMax = 5;
	animation1 = null;
	animation2 = null;

	constructor(el) {
		this.el = document.querySelector(el);
		this.el?.addEventListener("click",this.nextType.bind(this));
		this.el?.addEventListener("submit",this.fakeSearch.bind(this));
	}
	fakeSearch(e) {
		e.preventDefault();
	}
	nextType(e) {
		const { target } = e;
		if (target.hasAttribute("data-type")) {
			this.el?.reset();
			// set the type
			++this.type;
			this.type %= this.typeMax + 1;
			target.setAttribute("data-type",this.type);
			// animate the search icon and placeholder rotations
			this.animateTypeChange();
		}
	}
	animateTypeChange() {
		const placeholders = this.el?.querySelector("[data-placeholders]");
		const icon = this.el?.querySelector("[data-icon]");
		const angleInc = 360 / (this.typeMax + 1);
		const angleStart = angleInc * (this.type - 1);
		const angleEnd = angleInc * this.type;
		const animKeyframes = [
			{ transform: `rotate(${angleStart}deg)` },
			{ transform: `rotate(${angleEnd}deg)` }
		];
		const animParams = {
			duration: 300,
			easing: "cubic-bezier(0.65,-0.5,0.35,1.5)"
		};

		this.animation1 = icon?.animate(animKeyframes,animParams);
		this.animation2 = placeholders?.animate(animKeyframes,animParams);
	}
}
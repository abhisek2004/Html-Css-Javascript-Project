class TCIClean {
	constructor(_container) {
		if (!_container) throw "Container es requerido"
		this.container = document.querySelector(_container)
		this.clean = this.container.querySelector(".sneaker-clean")
		this.dirty = this.container.querySelector(".sneaker-dirty")
		this.friction = 0.15
		this.x = 50
		this.inOver = false
		this.mouse = {
			x: 0,
			y: 0
		}
		this.events()
		this.animate()
	}
	
	events() {
		this.container.addEventListener("pointerenter", (e) => this.onPointerEnter(e), false)
    this.container.addEventListener("pointerleave", (e) => this.onPointerLeave(e), false)
		this.container.addEventListener("pointermove", (e) => this.onPointerMove(e), false)
	}
	
	onPointerEnter(e) {
		this.friction = 0.15
		this.inOver = true
	}
	
	onPointerLeave(e) {
		this.friction = 0.075
		this.inOver = false
	}
	
	onPointerMove(e) {
		this.mouse = {
			x: e.clientX,
			y: e.clientY
		}
		this.render()
	}
	
	get percentX() {
		if (!this.inOver) return 50
		const _x = (this.mouse.x - this.offset.x)
		return parseInt((_x / this.rect.width) * 100)
	}
	
	get rect() {
		return this.container.getBoundingClientRect()
	}
	
	get offset() {
			return {
					x: this.rect.left,
					y: this.rect.top
			}
	}
	
	animate(){
		requestAnimationFrame(() => this.animate())
		this.render()
	}
	
	render() {
		this.x += (this.percentX - this.x) * this.friction
		this.dirty.style.clipPath = `inset(0% 0% 0% ${this.x}%)`
	}
}

const sneaker = new TCIClean(".sneaker-container")
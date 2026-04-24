var tl = gsap.timeline()


tl.from("#nav",{
    y:-100,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:0.5
})

tl.from(".elem h1, button",{
    x:-100,
    duration:0.4,
    opacity:0,
    blur:1,
    stagger:0.5
})

tl.from("#imagediv",{
    x:50,
    duration:0.5,
    opacity:0,
    blur:1,
    scale:0,
    stagger:0.5
})

tl.from("#heroright p",{
    x:100,
    duration:0.4,
    opacity:0,
    blur:1,
    stagger:0.5
})

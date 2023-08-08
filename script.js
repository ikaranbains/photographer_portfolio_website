gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: 'play none none reverse'
})

gsap.to('.img-container', {
    scale: 52,
    ease: 'ease',
    scrollTrigger: {
        trigger: '.video-section',
        scrub: 1,
        start: 'top top',
        end: 'bottom bottom',
        pin: true
    }
})

gsap.to('.right', {
    autoAlpha: 0,
    x: 500,
    duration: 1.5,
    scrollTrigger: {
        start: 1
    }
})

gsap.to('.left', {
    autoAlpha: 0,
    x: -500,
    duration: 1.5,
    scrollTrigger: {
        start: 1
    }
})

gsap.to('.txt-bottom', {
    autoAlpha: 0,
    letterSpacing: -10,
    duration: 2,
    scrollTrigger: {
        start: 2,
    }
})


const tl = gsap.timeline();

tl.from('.left-side', {
    y: 150,
    opacity: 0,
    stagger: {
        amount: .4
    },
    delay: .5
})
    .from('.right-side', {
        opacity: 0,
        duration: 2
    }).to('.wrapper', {
        x: - window.innerWidth,
    })


ScrollTrigger.create({
    animation: tl,
    trigger: '.wrapper',
    start: 'top top',
    end: '+=400',
    scrub: 1,
    pin: true,
    ease: 'ease'
})


gsap.utils.toArray('.col').forEach(image => {
    gsap.fromTo(image, {
        opacity: .4,
        x: 0
    }, {
        opacity: 1,
        x: -50,
        scrollTrigger: {
            trigger: image,
            start: '4%',
            stagger: {
                amount: .4
            }
        }
    })
})


const timeline = gsap.timeline();

timeline.from('.title span', {
    y: 150,
    skewY: 7,
    duration: 2.5
})
    .from('.txt-bottom', {
        letterSpacing: -1,
        opacity: 0,
        duration: 2.5
    })
const initSmoothScrolling = ()=>{
    const lenis = new Lenis({
        duration:2,
        lerp:0.2,
        smoothWheel:true
    });

    function raf(time){
        lenis.raf(time)
        requestAnimationFrame(raf)
    };

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time)=>{
        lenis.raf(time*1000)
    });
}

initSmoothScrolling();
startLoader();

gsap.to(".overlay", 1.5, {
    delay:3,
    ease: "power4.inOut",
    top: "-100%"
})

gsap.from(".aboutContainer", 2.2, {
    delay:3.3,
    ease: "power4.inOut",
    opacity: 0
})

const splitText = document.querySelectorAll('.gspTxtAnim');

splitText.forEach((char, i)=>{
    const text = new SplitType(char, {types:'chars'});

    gsap.from(text.chars,{
        scrollTrigger:{
            trigger:char,
            start: 'top 100%',
            end: 'top 75%',
            scrub: true,
            markers:false
        },
        y: 200,
        x: 20,
        fontSize: '1.1em',
        transformOrigin:'bottom',
        opacity:0,
        stagger:false
    })
});

const skillSvg = document.querySelectorAll('.skill svg');

skillSvg.forEach((svgs, i)=>{

    gsap.from(svgs, {
        scrollTrigger:{
            trigger:svgs,
            start: 'top 100%',
            end: 'top 75%',
            scrub: true,
            markers:false
        },
        y: 50,
        x: 10,
        transformOrigin:'bottom',
        opacity:0,
        stagger:false
    })
});


document.getElementById('resumeBtn').addEventListener('click', function() {
    const pdfUrl = './Assets/sushilNair.pdf';
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'sushilNair.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

function startLoader(){
    let counterElement = document.getElementById('counterElem');
    let currentValue = 0;

    function updateCounter(){
        if(currentValue === 100){
            return
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if(currentValue > 100){
            currentValue = 100;
        }

        // counterElement.textContent = `Loading ${currentValue}`;
        counterElement.textContent = currentValue;

        let delay =  Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}
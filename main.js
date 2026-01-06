//scroll shadow implementation
window.addEventListener("scroll",function(){
    const shadow = this.document.getElementById("myBox");
    if(this.window.scrollY>0){
        shadow.classList.add("scrolled");
    }
    else{
        shadow.classList.remove("scrolled");
    }
});

//odometer js implementation
const createOdometer = (el,value ) => {
    const odometer = new Odometer({
        el:el,
        value:0,
    });
    odometer.update(value);
};

//delay for the odometer
setTimeout(() => {
const clientOdometer = document.querySelector('.client-odometer');
createOdometer(clientOdometer, 123);

const completedProjectOdometer = document.querySelector('.completed-project-odometer');
createOdometer(completedProjectOdometer, 456);

const awardsOdometer = document.querySelector('.awards-odometer');
createOdometer(awardsOdometer, 789);
    
}, 3000);

//loading screen implementation
window.addEventListener("load", () => {
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.body.style.overflow = "auto"; // allow scrolling again
      }, 3000); // 5 seconds
    });
//AOS animation
AOS.init({
    duration:800,
    once: true
});

// Mouse Follower - Only enable on desktop screens (min-width: 768px)
if (window.matchMedia("(min-width: 768px)").matches) {
    const cursor = new MouseFollower({
        el: null,
        container: document.body,
        className: 'mf-cursor',
        innerClassName: 'mf-cursor-inner',
        textClassName: 'mf-cursor-text',
        mediaClassName: 'mf-cursor-media',
        mediaBoxClassName: 'mf-cursor-media-box',
        iconSvgClassName: 'mf-svgsprite',
        iconSvgNamePrefix: '-',
        iconSvgSrc: '',
        dataAttr: 'cursor',
        hiddenState: '-hidden',
        textState: '-text',
        iconState: '-icon',
        activeState: '-active',
        mediaState: '-media',
        stateDetection: {
            '-pointer': 'a,button',
            '-hidden': 'iframe'
        },
        visible: true,
        visibleOnState: false,
        speed: 0.55,
        ease: 'expo.out',
        overwrite: true,
        skewing: 0,
        skewingText: 0,
        skewingIcon: 2,
        skewingMedia: 2,
        skewingDelta: 0.001,
        skewingDeltaMax: 0.15,
        stickDelta: 0.15,
        showTimeout: 20,
        hideOnLeave: true,
        hideTimeout: 300,
        hideMediaTimeout: 300
    });
}

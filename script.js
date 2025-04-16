// // const progress = document.getElementById('progress');
// // const prev = document.getElementById('prev');
// // const next = document.getElementById('next');
// // const circles = document.querySelectorAll('.circle');

// // let currentActive = 1;

// // next.addEventListener('click', () => {
// //     currentActive++;
    
// //     if(currentActive > circles.length) {
// //         currentActive = circles.length;
// //     }
    
// //     update();
// // });

// // prev.addEventListener('click', () => {
// //     currentActive--;
    
// //     if(currentActive < 1) {
// //         currentActive = 1;
// //     }
    
// //     update();
// // });

// // function update() {
// //     circles.forEach((circle, idx) => {
// //         if(idx < currentActive) {
// //             circle.classList.add('active');
// //         } else {
// //             circle.classList.remove('active');
// //         }
// //     });
    
// //     const actives = document.querySelectorAll('.active');
    
// //     progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    
// //     if(currentActive === 1) {
// //         prev.disabled = true;
// //     } else if(currentActive === circles.length) {
// //         next.disabled = true;
// //     } else {
// //         prev.disabled = false;
// //         next.disabled = false;
// //     }
// // }

// // script.js
// const progress = document.getElementById('progress');
// const steps = document.querySelectorAll('.step');
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// const reset = document.getElementById('reset');
// const status = document.getElementById('status');
// const themeToggle = document.querySelector('.theme-toggle');

// let currentStep = 1;

// next.addEventListener('click', () => {
//     currentStep++;
//     if (currentStep > steps.length) currentStep = steps.length;
//     update();
// });

// prev.addEventListener('click', () => {
//     currentStep--;
//     if (currentStep < 1) currentStep = 1;
//     update();
// });

// reset.addEventListener('click', () => {
//     currentStep = 1;
//     update();
// });

// steps.forEach((step, index) => {
//     step.addEventListener('click', () => {
//         currentStep = index + 1;
//         update();
//     });
// });

// themeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark');
//     document.body.classList.toggle('light');
// });

// function update() {
//     steps.forEach((step, index) => {
//         if (index < currentStep) {
//             step.classList.add('active');
//         } else {
//             step.classList.remove('active');
//         }
//     });

//     const progressWidth = ((currentStep - 1) / (steps.length - 1)) * 100;
//     progress.style.width = `${progressWidth}%`;

//     status.textContent = `Current Step: ${currentStep}`;

//     prev.disabled = currentStep === 1;
//     next.disabled = currentStep === steps.length;
// }


const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const stepCount = document.getElementById('step-count');
const reset = document.getElementById('reset');
const status = document.getElementById('status');
const themeToggle = document.getElementById('theme-toggle');

let currentActive = 1;

// Update steps UI
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    const progressPercent = ((actives.length - 1) / (circles.length - 1)) * 100;
    progress.style.width = `${progressPercent}%`;

    stepCount.innerText = `Step ${currentActive} of ${circles.length}`;

    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;

    if (currentActive === 1) {
        status.innerText = "You are at the beginning.";
    } else if (currentActive === circles.length) {
        status.innerText = "You've reached the final step!";
    } else {
        status.innerText = `You're on step ${currentActive}.`;
    }
}

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});

reset.addEventListener('click', () => {
    currentActive = 1;
    update();
});

circles.forEach((circle, idx) => {
    circle.addEventListener('click', () => {
        currentActive = idx + 1;
        update();
    });
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.classList.toggle('active');
});

// Initial UI state
update();


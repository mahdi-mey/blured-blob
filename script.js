const blob = document.querySelector('.blob')
const blur = document.querySelector('.blur')

// Check if the device has touch capabilities
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
console.log(isTouchDevice)

// Only attach the event listener if it's not a touch device
if (!isTouchDevice) {
    document.addEventListener('mousemove', e => {
        const { clientX, clientY } = e;

        blob.style.left = `${clientX}px`;
        blob.style.top = `${clientY}px`;
    });
}
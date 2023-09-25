const blob = document.querySelector('.blob')
const blur = document.querySelector('.blur')

document.addEventListener('mousemove', e => {
    const { clientX, clientY } = e

    blob.style.left = `${clientX}px`
    blob.style.top = `${clientY}px`

})
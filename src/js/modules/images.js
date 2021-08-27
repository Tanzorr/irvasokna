const images = ()=>{
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    imgPopup.style.overflow = 'hidden'
    workSection.appendChild(imgPopup);

    workSection.addEventListener('click', (e)=>{
        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            imgPopup.appendChild(bigImage);
            imgPopup.style.display = 'flex'
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    })


}
export default images;
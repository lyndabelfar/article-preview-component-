const shareBtn = document.querySelector('.last-img-div');

shareBtn.addEventListener('click', ()=>{
    document.querySelector('.share-box').classList.toggle('active');
    shareBtn.classList.toggle('active');
})
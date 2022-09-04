const shareIcon = document.querySelector('.share-button');
shareIcon.addEventListener('click', function() {
    if(shareIcon.id == 'icon-active') {
        shareIcon.removeAttribute('id')
    }else {
        shareIcon.setAttribute('id', 'icon-active')
    }
})
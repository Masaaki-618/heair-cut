const btn = document.getElementById('btn')

const headerbtnlist = document.getElementById('headerbtnlist')

btn.addEventListener('click', function(){
    btn.classList.toggle('click');
    headerbtnlist.classList.toggle('clicked')

})
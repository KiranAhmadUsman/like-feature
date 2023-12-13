const img = document.getElementById('img');
const iconContainer = document.getElementById('heartIcon');
const icon = document.getElementById('icon');
img.addEventListener('click', function () {
        iconContainer.style.display = 'block';
        setTimeout(()=>{
            icon.style.color = 'red';
        },200);
        setTimeout(()=>{
            iconContainer.style.display = 'none';
            icon.style.color = '#fff';
           },1000)
})
    
 
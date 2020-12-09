var target =document.querySelectorAll('.target')
var texthere = document.getElementById("texthere")
var alldiv = document.querySelector('.alldiv')
var reload = document.getElementById("reload")

var number = 1
var i = 0 ;
for(i=0 ; i<target.length ; i++)
{
    target[i].addEventListener("click", function(e){
        if (this.style.backgroundColor === "rgb(0, 211, 211)")
        {
            this.style.backgroundColor= "tomato"
        }else{
            this.style.backgroundColor= "rgb(0, 211, 211)" 
        }
        this.style.top = (90 * Math.random()) + '%'
        this.style.left = (90 * Math.random()) + '%'
        texthere.innerHTML = ('Click = ' + number);number++; 
        setTimeout(() => texthere.innerHTML = ( 'time is out 🤦‍♀️ ||' + ' Click = ' + number),5000,);
        setTimeout(() => alldiv.style.display = 'none' ,5000,);
        setTimeout(() => reload.classList.remove('d-none') ,5000,);
    })   
}




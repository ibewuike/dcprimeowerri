var div = document.getElementById('dropup');
var display = 0;

function hideshow() 
{
		if (display == 1)
		{
			div.style.display = 'block';
			display = 0;
		}	
		else 
		{
			div.style.display = 'none';
			display = 1;
		}
}

let popup = document.getElementById("popup");

function openPopup() {
	popup.classList.add("open-popup");
}
function closePopup() {
	popup.classList.remove("open-popup");
}



// const cursorRounded = document.querySelector('.rounded');
// const cursorPointed = document.querySelector('.pointed');


// const moveCursor = (e)=> {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;
   
//   cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
//   cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
// }

// window.addEventListener('mousemove', moveCursor)
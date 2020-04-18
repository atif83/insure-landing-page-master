const hamburger=document.getElementById('hamburger');
const menu=document.getElementById('menu');


hamburger.addEventListener('click', toggleMenu);

document.getElementById('hamburger').addEventListener('click', toggleMenu);

let showMenu = false;
function  toggleMenu() {
	// body...

	  if (!showMenu) {
	

	menu.classList.toggle('show');
	showMenu=true;
	document. getElementById('myImage' ).src = 'images/icon-close.svg';
}
else {
	document. getElementById('myImage' ).src =  'images/icon-hamburger.svg';
          menu.classList.remove('show');

        showMenu = false;
    }


}
// /* --------------------------counter----------------------------------- */

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
	counter.innerText = '0';
	
	const updateCounter = () => {
		const target = +counter.getAttribute('data-target');
		const c = +counter.innerText;
		
		const increment = target / 1000;
		
		if(c < target) {
			counter.innerText = `${Math.ceil(c + increment)}`;
			setTimeout(updateCounter, 1)
		} else {
			counter.innerText = target;
		}
	};
	
	updateCounter();
})
// /* ------------------------------------------------------------- */
// /* --------------------show more ----------------------------------------- */
function myFunction() 
{
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
  document.getElementById("myBtn").style.visibility = "hidden";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = ""; 
    moreText.style.display = "inline";
  }
  
  
  
}
// /* ------------------------------------------------------------- */

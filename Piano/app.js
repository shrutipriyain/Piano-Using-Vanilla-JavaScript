function playSound(e)
{
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //very imp conceptually - using template strings, with  data attribute and querySelector
    if(!audio)return; //if no audio element associated, return
    audio.currentTime=0; // to produce the ripple effect
    audio.play();
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
}
function playOnClick(e)
{
    const dataAttribute = this.getAttribute('data-key');
    const audio=document.querySelector(`audio[data-key="${dataAttribute}"]`);
    if(!audio)return; //if no audio element associated, return
    audio.currentTime=0; // to produce the ripple effect
    audio.play();
    const key=document.querySelector(`div[data-key="${dataAttribute}"]`);
    key.classList.add("playing");
    
}
function removeTransition(e) // e is the event object
{
   if(e.propertyName!== "transform") return;
   this.classList.remove("playing");
}

const keys=document.querySelectorAll("div");
window.addEventListener('keypress', playSound);
keys.forEach(key=> key.addEventListener('click', playOnClick)); 
keys.forEach(key=> key.addEventListener('transitionend', removeTransition)); 
// look how the same event Listener is attached to multiple elements
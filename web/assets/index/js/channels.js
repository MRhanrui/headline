let remove = document.querySelector('.remove');
let add = document.querySelector('.add')
remove.addEventListener('click',(e)=>{
    if(e.target.offsetParent.className == 'btn bur'){
        remove.onclick = null;
    }else if(e.target.offsetParent.className == 'btn'){
        let a = e.target.offsetParent;
        add.appendChild(a);
        // remove.removeChild(a);
    }
});
add.addEventListener('click',(e)=>{
    if(e.target.offsetParent.className == 'btn'){
        let a = e.target.offsetParent;
        remove.appendChild(a);
        // add.removeChild(a);
    }
});
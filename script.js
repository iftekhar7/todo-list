function addMore(){
    document.getElementById('error').innerHTML="";
    let input=document.getElementById('input').value;
    if(input == ""){
        document.getElementById('error').innerHTML="Please Enter Value";
    }
    else{
        let box=document.getElementById('box');
        let li=document.createElement('li');
        li.textContent=input;
      let a=document.createElement('a');
      a.textContent="x";
      a.href="javacript:void(0)";
      a.className="remove";
      li.appendChild(a);

        let pos=box.firstElementChild;
        if(pos==null){
            box.appendChild(li);
        }else{
            box.insertBefore(li, pos);
       
        }
    }
    document.getElementById('input').value="";
}
let btn =document.querySelector('ol');
btn.addEventListener('click',function(e){
    let box=document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);
});
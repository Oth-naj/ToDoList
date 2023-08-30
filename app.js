let ipt = document.getElementById('input-box')
let btn = document.querySelector('button')
let todo = document.querySelector('.task-list')


btn.addEventListener('click', ()=>{
    if(ipt.value === ''){
        alert('you must write something')
    }
    else{
      let li = document.createElement('li')
    let icon = document.createElement('i')
    icon.classList.add('bi', 'bi-check2')
    let icn = document.createElement('i')
    icn.classList.add('bi', 'bi-trash')
    let span = document.createElement('span')

    
    span.innerText = ipt.value
    li.append(span)
    li.append(icon)
    li.append(icn)
    
    todo.append(li)  
    }
    
    ipt.value = ""

})



todo.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false )

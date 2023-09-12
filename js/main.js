// add

document.getElementById('btnThemNV').addEventListener('click',function(){
    let tk = document.getElementById("tknv").value
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let day = document.getElementById('datepicker').value
    let salary= document.getElementById('luongCB').value
    let chucVu = document.getElementById('chucvu').value
    let time = document.getElementById('gioLam').value
    let rank = document.getElementById('')
    let arr = [tk, name, email,day,chucVu,salary,"Gioi"]
    let tr = document.createElement('tr')
    let modal = document.querySelector('#myModal')
    let overlay = document.querySelector('.modal-backdrop')
    modal.style.display = "none";
    overlay.style.display = "none"
    show(arr)
})

function show(arr){
    let tr =document.createElement('tr')
    arr.map(function(element,index){
        let th = document.createElement('th');
        th.innerHTML = element
        tr.appendChild(th);
    })
    let body = document.getElementById('tableDanhSach')
    body.appendChild(tr)


}
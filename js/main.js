let btn = document.querySelectorAll('button');

let div = document.querySelectorAll('div');

let input = document.querySelectorAll('input')


btn[0].onclick = function () {
    if(div[0].classList.contains('ahmed')){
        div[0].classList.toggle('ahmed');
        btn[0].innerText = " D";
        btn[0].classList = "btn btn-dark";
       
    }else{
        div[0].classList.toggle('ahmed');
        btn[0].innerText = "L";
        btn[0].classList = "btn btn-light";
        
    }
}

btn[1].onclick = function(){
    w = input[0].value;
    h = input[1].value;
    bg = input[2].value;


    div[7].style.width = w + "px";
    div[7].style.height = h + "px";
    div[7].style.backgroundColor = bg

}
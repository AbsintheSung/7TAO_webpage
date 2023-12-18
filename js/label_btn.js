function createLabel_a(obj){
    let a_link = document.createElement('a')
    a_link.href = obj.link
    a_link.classList.add('py-1', 'px-3', 'px-md-4', 'text-primary-3', 'd-block', 'w-100');
    a_link.textContent = `${obj.name}`
    return a_link
}
function createLabel_li(){
    let li = document.createElement('li');
    li.classList.add('noto-tc-serif','fw-bold')
    return li
}
function mountLi(obj,domElement){
    let link = createLabel_a(obj);
    let li = createLabel_li();
    li.appendChild(link)
    return domElement.appendChild(li)
}

export default{
    mountLi
}
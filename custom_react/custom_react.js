
const maincontainer = document.getElementById('root')

const newele = {
    type : 'a',
    pros: {
        href : "https://leetcode.com/problemset/",
        target : '_blank'
    },
    child : "hello , this is the actual data"
}


function addelement(newelement , main){
    const ele = document.createElement(newelement.type)
    ele.innerHTML = newelement.child
    ele.setAttribute('href' , newelement.pros.href)

    main.appendChild(ele)
}  

addelement(newele,maincontainer)
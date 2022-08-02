AOS.init();
const doc = document;
let p1 = doc.getElementById('social_events_content-1');

p1.addEventListener('animationend', function() {
    p1.classList.remove('animation');
});

function slide(elem){
    let text;
    switch(elem.className){
        case "dot1" :
            text = "1 consectetur, adipisicing elit. Non sed earum assumenda sequi magnam obcaecati qui ipsa voluptatibus recusandae aspernatur sunt enim quia, porro molestiae possimus sint nulla omnis dolore?";
            let elem1 = doc.getElementsByClassName("dot2")[0];
            elem1.style.backgroundColor = '#efefef';
            let elem2 = doc.getElementsByClassName("dot3")[0];
            elem2.style.backgroundColor = '#efefef';
            elem.style.backgroundColor = '#ebae4c';
            break;  
        case "dot2" :
            text = "2 met consectetur, adipisicing elit. Non sed earum assumenda sequi magnam obcaecati qui ipsa voluptatibus recusandae aspernatur sunt enim quia, porro molestiae possimus sint nulla omnis dolore?";
            doc.getElementsByClassName("dot1")[0].style.backgroundColor = "#efefef";
            doc.getElementsByClassName("dot3")[0].style.backgroundColor = "#efefef";
            elem.style.backgroundColor = "#ebae4c";
            break;
        case "dot3" :
            text = "3 ectetur, adipisicing elit. Non sed earum assumenda sequi magnam obcaecati qui ipsa voluptatibus recusandae aspernatur sunt enim quia, porro molestiae possimus sint nulla omnis dolore?";
            doc.getElementsByClassName("dot1")[0].style.backgroundColor= "#efefef";
            doc.getElementsByClassName("dot2")[0].style.backgroundColor = "#efefef";
            elem.style.backgroundColor = "#ebae4c";
            break;
    }
    p1.textContent = text;
    p1.classList.add('animation');
}
//dark mode toggle switch
const circle = document.getElementById('circ')
const body = document.getElementById('body')
const dark_out = document.getElementById('dark-out')
const icon_box = document.getElementsByClassName('d')
const icon_box_out = document.getElementsByClassName('box');
const darkP = document.getElementsByClassName('darkP')
const abt = document.getElementsByClassName('abt')
const abt_text = document.getElementsByClassName('abt_text')
const h2 = document.querySelectorAll('h2');
const p = document.querySelectorAll('p')
const scroll_text = document.getElementsByClassName('scroll_text')
const fullBody = document.getElementById('fullBody')
const downloadButton = document.getElementById('d_load')
const d_icon = document.getElementById('d_icon')
const ci = document.getElementsByClassName('ci')
var moon = document.getElementById('moon');
var fixedTop = document.getElementById('n_bar');
var fixedTop_a = document.getElementsByClassName('anchor')
var myname = document.getElementsByClassName('myname');
var mname = document.getElementById('mname');
var fname = document.getElementById('fname');
var f_bar = document.getElementById('f_bar');
var imgLink = document.getElementById('imgLink');
const box_skill = document.getElementsByClassName('box_skill')
var front = document.getElementsByClassName('flip-card-front');
const formStyle = document.getElementsByClassName('formStyle');
var formName = document.getElementById('formName');
var formEmail = document.getElementById('formEmail');
var formPhone = document.getElementById('formPhone');

window.addEventListener('click', (e) => {
    var key = e.target.id;
    switch (key) {
        case "html":
            window.open('https://developer.mozilla.org/en-US/docs/Web/HTML');
            break;
        case "css":
            window.open('https://devdocs.io/css/');

            break;
        case "git":
            window.open('https://git-scm.com/');

            break;
        case "node":

            window.open('https://nodejs.org/en');
            break;
        case "js":
            window.open('https://javascript.info/');

            break;
        case "mamp":
            window.open('https://www.mamp.info/en/windows/');

            break;
        case "vscode":
            window.open('https://code.visualstudio.com/');

            break;
        case "sass":
            window.open('https://sass-lang.com/');

            break;
        case "swagger":
            window.open('https://swagger.io/');

            break;
        case "primeng":
            window.open('https://primeng.org/icons');

            break;
        case "vs":
            window.open('https://visualstudio.microsoft.com');

            break;
        case "react":
            window.open('https://react.dev/');

            break;
        case "vue":
            window.open('https://javascript.info/');

            break;
        case "mysql":
            window.open('https://javascript.info/');

            break;

        default:
            break;
    }
})


dark_out.addEventListener('click', (e) => {

    if (e.target.className === 'drk') {

    }
})

dark_out.addEventListener('click', (e) => {

    if ((e.target.className === 'drk' || e.target.className === 'circle') && circle.style.transform === 'translateX(0px)') {

        circle.style.transform = 'translateX(18px)';
  
        circle.style.backgroundColor = 'purple'
        moon.style.top = `-24px`;
        moon.style.left = `10px`;

    } else {
        circle.style.transform = 'translateX(0px)';
        // dark_out.style.border='3px solid black'
        circle.style.backgroundColor = '#f8d925'
        // moon.style.display = `block`;
        moon.style.top = `23px`;
        moon.style.left = `0px`;
    }
    if (circle.style.transform == 'translateX(18px)') {
        for (let i = 0; i < icon_box.length; i++) {
            icon_box[i].style.color = `white`;
            icon_box_out[i].style.backgroundColor = `#2f2f2f`;
            // darkP[i].style.color = `white`;
            h2[i].style.color = `white`;

        }
        fullBody.style.backgroundColor = `#1f1f1f`;
        // box_skill.style.backgroundColor = "#2f2f2f"
        //ptag
        for (let j = 0; j < p.length; j++) {

            p[j].style.color = 'white';

        }
        for (let k = 0; k < ci.length; k++) {
            ci[k].style.color = 'white';
        }
        for (let i = 0; i < box_skill.length; i++) {
            box_skill[i].style.backgroundColor = "#2f2f2f"

        }
        fixedTop.style.backgroundColor = '#2f2f2f'
        f_bar.style.backgroundColor = '#2f2f2f'


        var val = Object.values(fixedTop_a);
        val.map(ele => ele.style = "color: white");

    }



    if (circle.style.transform == 'translateX(0px)') {
        for (let i = 0; i < icon_box.length; i++) {
            icon_box[i].style.color = `black`;
            icon_box_out[i].style.backgroundColor = `white`
            // darkP[i].style.color = `black`
            h2[i].style.color = `black`;
        }
        fullBody.style.backgroundColor = `rgb(227, 227, 227)`;
        // downloadButton.style.hover

        //ptag
        for (let j = 0; j < p.length; j++) {
            if (p[j].className == "scroll_text" || p[j].className == "myname") {
                p[j].style.color = 'white';
            }
            else {
                p[j].style.color = 'black';
            }
        }

        for (let k = 0; k < ci.length; k++) {
            ci[k].style.color = 'black';
        }
        for (let i = 0; i < box_skill.length; i++) {
            box_skill[i].style.backgroundColor = "white"

        }
        fixedTop.style.backgroundColor = 'white'
        f_bar.style.backgroundColor = 'white'


        var val = Object.values(fixedTop_a);
        val.map(ele => ele.style = "color: black");
        mname.style.color = 'black'
        fname.style.color = 'black'




    }
})


//scroll button on bottom right
var fscroll = document.getElementById('first_scroll').addEventListener('click', (e) => {
    window.scrollBy(0, 650);
})

//
//skill button and Tools button
var skillButton = document.getElementById('skillButton');
var toolButton = document.getElementById('toolButton');
var t_icon = document.getElementById('t_icon');
var s_icon = document.getElementById('s_icon');

toolButton.addEventListener('click', (e) => {

    t_icon.style.color = `white`;
    toolButton.style.backgroundColor = `#ff2a00`;
    toolButton.style.color = `white`
    var box_skill = document.getElementsByClassName('box_skill');
    skillButton.style.backgroundColor = `white`;
    skillButton.style.color = `black`;
    s_icon.style.color = `black`;



    for (let i = 0; i < box_skill.length; i++) {
        box_skill[i].style.transform = `rotateY(180deg)`;

    }

})

skillButton.addEventListener('click', (e) => {
    var box_skill = document.getElementsByClassName('box_skill');
    t_icon.style.color = `black`;
    toolButton.style.color = `black`
    s_icon.style.color = `white`;
    skillButton.style.color = `white`

    toolButton.style.backgroundColor = `white`
    skillButton.style.backgroundColor = `#ff2a00`



    for (let i = 0; i < box_skill.length; i++) {
        // console.log('c');
        box_skill[i].style.transform = `rotateY(0deg)`;

    }

})

const button = document.getElementById("animaButton"),
    toast = document.querySelector(".toast");
(closeIcon = document.querySelector(".close")),
    (progress = document.querySelector(".progress"));

let timer1, timer2;

button.addEventListener("click", (e) => {

    console.log("clicked");
    var show = null;

    if (formName.value != "" && formEmail.value != "" && formPhone.value.length > 0) {
        show = true;

    }
    else {
        show = false;
    }

    if (show) {
        e.preventDefault();

        toast.classList.add("active");
        progress.classList.add("active");

        timer1 = setTimeout(() => {
            toast.classList.remove("active");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
            progress.classList.remove("active");
        }, 5300);
    }

    setTimeout(() => {
        for (let i = 0; i < formStyle.length; i++) {
            formStyle[i].value = null;

        }
    }, 100);

});

closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
        progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
});


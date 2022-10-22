const arrow = document.querySelector('.arrow');
const member__sectiom = document.querySelector('.member__sectiom');
const member__container = document.querySelector('.member__container');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

const slidbar = ()=>{
    // hidden.style.display = 'contents';
    member__container.innerHTML = `<img src="./img/person4.jpg" alt="">
    <h1>Mr. Sujan Shrestha</h1>
    <h2>Front-End Developer</h2>
    <p>Frontend and Backend are the two most popular terms used in web development. These terms are very crucial for web development but are quite different from each other. Each side needs to communicate and operate effectively with the other as a single unit to improve the website’s functionality. </p>
    <button class=" btn btn1 btn-popural">Read more..</button>`

    one.innerHTML = `<img src="./img/person5.jpg" alt="">
    <h1>Er.Saugat Malla </h1>
    <h2>Software Developer</h2>
    <p>Software developers are the creative, brainstorming masterminds behind computer programs of all sorts. While some software developers may focus on a specific program or app, others create giant networks or underlying systems that help trigger and power other programs. This is why there are two main classifications of developers: applications software developers and systems software developers.</p>
    <button class=" btn btn1 btn-popural">Read more..</button>`

    two.innerHTML = `<img src="./img/person6.jpg" alt="">
    <h1>Er. Rina Khatri</h1>
    <h2>Full stack Developer</h2>
    <p>The backend is the server-side of the website. It stores and arranges data, and also makes sure everything on the client-side of the website works fine. It is the part of the website that you cannot see and interact with. It is the portion of software that does not come in direct contact with the users. The parts and characteristics developed by backend designers are indirectly  </p>
    <button class=" btn btn1 btn-popural">Read more..</button>`

    

   
    


  
   
    

    
}

arrow.addEventListener('click', slidbar);








let button = document.querySelectorAll('.menu button');
let content_inside = document.querySelectorAll('.content_inside');

Array.from(button).forEach(function(buttonArray, i) {
buttonArray.addEventListener('click', function() {

    Array.from(button).forEach(buttonAll => buttonAll.classList.remove('button_active'));
    
    Array.from(content_inside).forEach(content_insideAll => content_insideAll.classList.remove('content_inside_active'));
    
    button[i].classList.add('button_active'); 
    
    content_inside[i].classList.add('content_inside_active');  
  });
});



var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";
function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    }
    else {
        MenuItems.style.maxHeight = "0px";

    }


}
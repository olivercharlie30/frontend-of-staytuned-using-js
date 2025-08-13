
const homeArea = document.querySelector(".homeArea");
const navbarLinks = homeArea.querySelectorAll("a");
const sectionElements = document.querySelectorAll("section");

const removeActiveLinks = ()=> {
    navbarLinks.forEach(link => link.parentElement.classList.remove("active"));
};

const hideSection = ()=> {
    sectionElements.forEach(section => section.classList.add("hidden"));
}

navbarLinks.forEach(link => {
    link.addEventListener("click", ()=> {
        removeActiveLinks();
        hideSection();
        link.parentElement.classList.add("active");
        const sectionElement = document.querySelector(link.hash);
        sectionElement.classList.remove("hidden");

        const user_profile = document.querySelector(".user_profile");
        user_profile.classList.remove("userShow");

    });
});



const cards = document.querySelectorAll(".card");


//disable see more fucntion from the text contents that the height is less than the minimum
//visible height of a text content on page load.
window.onload = function(){
    cards.forEach((card) => {
        let seeMoreBtn = card.querySelector(".see-more-btn");
        let textContent = card.querySelector(".card-content .text");

        if(textContent.scrollHeight == textContent.clientHeight){
            seeMoreBtn.style.display = "none";
            textContent.style.height = "fit-content";
        }else{
            card.classList.add("gradient");
        }
    })
}


//See more function on click the see more button  on each card.

cards.forEach((card)=> {
    let seeMoreBtn = card.querySelector(".see-more-btn");
    let textContent = card.querySelector(".card-content .text");

    seeMoreBtn.addEventListener("click", ()=> {
        card.classList.toggle("active");
        card.classList.toggle("gradient");

        if(card.classList.contains("active")){
            seeMoreBtn.innerHTML = "See Less";
            textContent.style.height = textContent.scrollHeight + "px";
        }else{
            seeMoreBtn.innerHTML = "See More";
            textContent.style.height = "100px";
        }
    });
});




//CREATE FUNCTION MODAL
const modal = document.querySelector(".modal");
const modalContent = document.querySelectorAll(".modal_content")
const openModalComment = document.querySelectorAll("#openModalComment");

 openModalComment.forEach((open)=> {
      open.addEventListener("click", ()=> {
        modal.classList.add("open_modal");
    });

 });
   modalContent.forEach((close)=> {
    close.addEventListener("click", ()=> {
        modal.classList.remove("open_modal");
    });

   });
   




//FIXED HEADER while scrolling post content USING JAVASCRIPT
window.addEventListener("scroll", ()=> {
    const  header = document.querySelector("header");
    header.classList.toggle("fixed", window.scrollY > 0);

});


//DARK MOOD FUNCTION
// const seemores = document.querySelector("#seemore");

// seemores.forEach(seemore => {
//     seemore.addEventListener("click", ()=> {
//         seemore.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
//         seemore.style.cursor = "pointer";
//     });
    
// });



// SHOW USER PROFILE DETAILS IF CLICK USERLIST
const userLists = document.querySelectorAll("#userList");

userLists.forEach((user)=> {
    const user_profile = document.querySelector(".user_profile");
    user.addEventListener("click", ()=> {
        user_profile.classList.add("userShow");
    });

});


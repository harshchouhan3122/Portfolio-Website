// Script for Aboute Me Section (Skills, Education etc)
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


// Script for a SideMenu for Small Screen
var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


// Script for Download Resume
document.getElementById('downloadResume').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action

    // Open the PDF in a new tab
    window.open(this.href, '_blank');

    // Create a temporary link element for downloading the file
    var tempLink = document.createElement('a');
    tempLink.href = this.href;
    tempLink.download = 'HarshChouhan_Resume.pdf';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink); // Clean up
});


// Script for Form Submission through Formspree
const form = document.getElementById('contact-form');
const msg = document.getElementById('msg');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        });

        if (response.ok) {
            msg.textContent = 'Thank you! Your message has been sent.';
            msg.style.color = 'green';
            form.reset(); // Reset the form after successful submission


        } else {
            msg.textContent = 'Oops! There was a problem sending your message.';
            msg.style.color = 'red';
        }
    } catch (error) {
        msg.textContent = 'An error occurred. Please try again later.';
        msg.style.color = 'red';
    }

    // Clear the message after 5 seconds
    setTimeout(() => {
        msg.textContent = '';
    }, 4000);                                   //4 seconds
});



// Script to Send Form Data to your Google Sheet
// Github Link to connect Contact form with Google Sheet: https://github.com/jamiewilson/form-to-google-sheets/ 
// const scriptURL = 'https://script.google.com/macros/s/AKfycbw6LISpiqi7TbbIx1dWeo5lFyhG8H0mTlo4uvA_Za0jg-6vCtooIXycvlCkkUE1NRxb/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById("msg")

// form.addEventListener('submit', e => {
// e.preventDefault()
// fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => 
//         {
//             msg.innerHTML = "Message sent Successfully!"
//             setTimeout(function(){
//                 msg.innerHTML = ""
//             },2000)
//             form.reset()
//         })
//     .catch(error => console.error('Error!', error.message))
// })



// Script to See More Projects (Toggle Functionality)
function unhideContent() {
    // Select the hidden content div
    const hiddenContent = document.getElementById("hiddenContent");
    const projectBtn = document.getElementById("proj-btn");

    // Toggle the visibility
    if (hiddenContent.classList.contains("hidden")) {
        hiddenContent.classList.remove("hidden");
        hiddenContent.classList.add("visible");
        projectBtn.innerText = "See Less";
        
    } else {
        hiddenContent.classList.remove("visible");
        hiddenContent.classList.add("hidden");
        projectBtn.innerText = "See More";
    }
}

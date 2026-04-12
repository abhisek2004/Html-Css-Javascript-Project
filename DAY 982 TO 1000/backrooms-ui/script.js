document.addEventListener('DOMContentLoaded', () => {
  function toggle() {
    // Look for any element with the 'data-toggle' attribute
    const elements = document.querySelectorAll('[data-toggle]');
    
    elements.forEach((element) => {
      element.addEventListener('click', (event) => {
        event.preventDefault();
        
        const targetID = element.getAttribute('data-toggle');
        const targetElement = document.getElementById(targetID);
        
        // Toggle the class 'toggled' on the targeted element
        targetElement.classList.toggle('toggled');
        
        // Toggle the class 'active' on the clicked element
        element.classList.toggle('active');
      });
    });
  }
  toggle();
});
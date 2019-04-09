const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    // Check if they had the shift key down
    // and check that hey are cheking it
    let inBetween = false;
    if (e.shiftkey && this.checked) {
        // go ahead and do what we please
        // loop over every single checbox
        checkboxes.forEach(checkbox => {
           console.log(checkbox);
           if (checkbox === this || checkbox === lastChecked) {
               inBetween = !inBetween;
               console.log('Starting to check them in between!');
           }

           if (inBetween) {
               checkbox.checked =  true;
           }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
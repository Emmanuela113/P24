function validate(e) {
    e.preventDefault();
    
    const email= domcument.getElementById('email').value;
    const pass= domcument.getElementById('password').value;
    const age= domcument.getElementById('age').value;
    const msgBox= domcument.getElementById('message');

    let message = '';

    message = 'Please enter your email.';
    msgBox.style.color = 'red'

    function validate(e) {

        e.preventDefault();
        
        const email = document.getElementById('email').value;
        
        const pass = document.getElementById('password').value;
        
        const age = document.getElementById('age').value;
        
        const msgBox = document.getElementById('message');
        
        let message = '';
        
        if (email === '') {
        
        message = 'Please enter an email.';
        
        msgBox.style.color = 'red';
        
        } else if (pass === '') {
        
        message = 'Password must be at least 8 characters.';
        
        msgBox.style.color = 'red';
        
        } else if (age === '') {
        
        message = 'Age must be between 12 and 50.';
        
        msgBox.style.color = 'red';
        
        }
        
        else {
        
        message = 'Login successful!';
        
        msgBox.style.color = 'green';
        
        }
        
        msgBox.innerText = message;
        
        }
     }
}
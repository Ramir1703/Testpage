document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    
    
    const output = `Name: ${firstName}<br>Nachname: ${lastName}<br>E-Mail: ${email}`;
    document.getElementById('output').innerHTML = output;
});



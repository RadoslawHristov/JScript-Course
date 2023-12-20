function validation (input) {
    
    let output = [];

        if (input.length <= 5 || input.length > 10) {
            output.push('Password must be between 6 and 10 characters');
        }
        if (!/^[A-Za-z0-9]*$/.test(input)) {
            output.push('Password must consist only of letters and digits');
        }
        if (!/\d.*\d/.test(input)) {
            output.push('Password must have at least 2 digits');
        }
   


   if (output.length > 0) {
        console.log(`${output.join('\n')}`);   
   } else{
        console.log('Password is valid');
   }
}

validation('MyPass123');

validation('LogIn')
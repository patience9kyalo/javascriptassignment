function generator(length, numbers, uppercase, lowercase, symbols, noDuplicates){

    let characters = '';
 
    if(numbers){
       characters +='0123456789'
    }
    if(uppercase){
       characters +='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if(lowercase){
       characters +='abcdefghijklmnopqrstuvwxyz'
    }
    if(symbols){
       characters +='!@#$%^&*'
    }
 
    let passwordArray = [];
 
    while(passwordArray.length < length){
       const character = characters[Math.floor(Math.random() * characters.length)];
 
       if(!noDuplicates || !passwordArray.includes(character)){
          passwordArray.push(character)
       }
    }
    return passwordArray.join('');
}
 
 const length = 12;
 const numbers = true;
 const uppercase = true;
 const lowercase = true;
 const symbols = true;
 const noDuplicates = false;
 
 const password = generator(length, numbers, uppercase, lowercase, symbols, noDuplicates);
 
 console.log("Generated Password:", password);
 
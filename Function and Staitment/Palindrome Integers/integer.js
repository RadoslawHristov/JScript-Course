function palindrome(number) {
    
     for (let num of number) {
           num = num.toString();
          console.log(`${num === num.split("").reverse().join("")}`)
     }

}

palindrome([123,323,421,121]);
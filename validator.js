let Validator = {
    validateEmail(string) {
        regexTemplate =/^[a-z][a-z0-9.\-+]{1,19}@[\w.!$%&’*+/=?^_-]{1,15}\b[a-z]{1,5}$/ig;
        return regexTemplate.test(string);
    },
    validatePhone(string) {
        if(string.length > 25) {
            return false;
        }
        regexTemplate =/^((?<code>[\s]*\+38)?(?<operator>(?:(([\s-]*\d[\s-]*){3}|[\s-]*\(([\s-]*\d[\s-]*){3}\)[\s-]*))))(?<num>(?:[\s-]*\d[\s-]*){6}\d[\s]*)$/g; 
        return regexTemplate.test(string);
    },
    validatePassword(string) {
        regexTemplate = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?!=.*?[<>=\-|]).{8,}$/g;
        return regexTemplate.test(string);
    }

}

function testPhoneValidation(){
    let phoneNumbers =[
        "+38 (099) 567 8901 02142117481784721781787",
        "+38 (099) 567 8901 0",
       " +38 099 a0000000",
        "+38 (0989) 567 8901",
        "+48 (0989) 567 8901",

        "+38 (099) 567 8901",
       "+38 099 5 6 7 8 9  01",
        "(09-9) 567-890-1",
        "(09- ) 567-890-1",
        "--  (099) 567 890-1",
     ]

     for(let i = 0; i< phoneNumbers.length; i++){
        console.log(`Number ${phoneNumbers[i]}
is valid: ${Validator.validatePhone(phoneNumbers[i])}`);
     }
}
function testPasswordValidation(){
    let passwords =[
        "C00l_Pass",
        "SupperPas1",
        "Cool_pass",
        "C00l"
     ]

     for(let i = 0; i< passwords.length; i++){
        console.log(`Password ${passwords[i]}
is valid: ${Validator.validatePassword(passwords[i])}`);
     }
}

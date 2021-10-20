var fs=require('fs');
var readline = require('readline-sync');
var user = readline.question("what you want to signup or login:")
if (user=="signup"){
    var user_name = readline.question("Enter username:")
    var password_1 = readline.question("Create password:")
    if (password_1.length>=6){
        if (password_1.includes("1") || password_1.includes("2") || password_1.includes("3") || password_1.includes("4") || password_1.includes("5")|| password_1.includes("6")||password_1.includes("7")|| password_1.includes("8")|| password_1.includes("9")||password_1.includes("0")){
            if (password_1.includes("#") || password_1.includes("@") || password_1.includes("$") || password_1.includes("!") || password_1.includes("&") || password_1.includes("%") || password_1.includes("*")){
                var password_2 = readline.question("Confirm your password: ")
                if (password_1===password_2){
                    console.log("congratulation ! " ,user_name, " you are signup successfully!!")
                    var discription = readline.question("Enter your discription: ")
                    var dob = readline.question("Enter date of birth: ")
                    var hobbie=readline.question("Enter your hobbie: ")
                    var gender=readline.question("Enter your gender: ")
                    var info={"User" : {"username" : user_name, "Password": password_1, "Profile" : {"Discription" : discription , "DOB":dob, "Hobbie": hobbie , "Gender": gender}}}
                    let file = JSON.stringify(info);
                    fs.writeFileSync('userdetail.json', file)
                        // console.log(json)
                }else{
                    console.log("Sorry! both passwords are not same");
                }
            }else{
                console.log("Special character should be there !!");
            }
        }else{
            console.log("Your password must have atleast one number.")
        }
    }else{
        console.log("Your password must contain 8 characters.");
    }
}else if(user=="login"){
    var user_name = readline.question("Enter username:")
    var password_1 = readline.question("Enter your password:")
    var read=fs.readFileSync('userdetail.json')
    data = JSON.parse(read);
    users=data["User"]
    if (data["User"]["username"]===user_name){
        if (data["User"]["Password"]===password_1){
            console.log("Congrats!! "+user_name+" you are logged in successfull!!")
            console.log("Here are your details:")
            console.log("Your discription : ", users["Profile"]["Discription"])
            console.log("Date of birth : ", users["Profile"]["DOB"])
            console.log("Your hobby : ", users["Profile"]["Hobbie"])
            console.log("Gender : ", users["Profile"]["Gender"])
        }else{
            console.log("Invalid password!!")
        }
    }else{
        console.log("Sorry,invalid username!")
    }
}
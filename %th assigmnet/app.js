
alert("Welcome to SMIT!💻");
let name=prompt("What is your name?");
let fname=prompt("What is your father name?");
let gender=prompt("What is your gender?");
let course=prompt("Let us know! \n In which course you want to enrolled in? \n NOTE : Use lower case letters always! ");
let campus=prompt("In which campus you want to go? \n NOTE : Use lower case letters always!");
let rollno=45678;

if(course== "web and app development" || course=="web & app development" ){
    if(campus=="numaish"|| campus=="pakposh"|| campus=="gulshan" || campus=="bahadurabad"){
        document.write("Name: " , name ,"<br>" , "F.Name:" , fname , "<br>" , "Gender: " , gender , "<br>" , "Rollno.:" ,rollno , "<br>" ,"Course: " , course , "<br>" , "Campus: " , campus ,  );
    }
   
}
else{
    document.write("Name: " , name ,"<br>" , "F.Name:" , fname , "<br>" , "Gender: " , gender , "<br>" , "Sorry!😔.. <br> This course is not available now" );
}


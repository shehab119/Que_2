let notifications = [
    {message: "Lorem", read: true},
    {message: " Ipsum ", read: true},
    {message: "Dolor", read: true},
    {message: "Sit", read: false},
    {message: "Amet", read: true}
];

let allRead = true;

notifications.find((data)=>{
    if(data.read === false){
        allRead = false
    }
})

console.log(allRead)
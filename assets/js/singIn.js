(function app() {
    const USER_LIST =[
       { id:1 ,userName:"ayda",pass:"1234"}
    ]
    const handleSubmit =(e)=>{
        e.preventDefault();
        const email = document.getElementById('email');
        const pass = document.getElementById('pass');
        const user = USER_LIST.filter(item => item.userName.toLowerCase()=== email.value.toLowerCase().trim());
        if (user.length && pass.value === user[0].pass){
            console.log('are');
            localStorage.setItem("user-name",JSON.stringify(user[0].userName))
            setTimeout(()=> {
                navigation.navigate('../index.html')
            },2000)
        }else{
            console.log("nnnnnnnnn");
            
        }
    }
    const submitBtn = document.getElementById("submit-btn");   
    submitBtn.addEventListener("click",handleSubmit)
    
})()
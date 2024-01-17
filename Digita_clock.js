function gettime(){
    let time=new Date();

    let hrs=time.getHours();
    let ampm = hrs >= 12 ? " PM" : " AM";

    hrs = hrs%12;
    hrs = hrs==0 ? hrs=12 : "0"+hrs;

    let min=time.getMinutes();
    min=min>9 ? min :"0"+min;
    
    let sec=time.getSeconds();
    sec = sec>9 ? sec :"0"+sec;
       
    // let milisec=time.getMilliseconds();

    // return time.toLocaleTimeString();

    return(hrs+":"+min+":"+sec+ampm);
  
}

{
    setInterval(() => {
        // console.log(gettime());
        let clockobj=document.querySelector(".clock");
        clockobj.innerHTML=gettime();
    }, 1000);
}

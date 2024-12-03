





var arrnut = ['OIF (1).jpg','OIP (1).jpg','OIP (2).jpg','OIP.jpg','th (1).jpg','th (2).jpg','th (3).jpg','th (4).jpg']
var myimg = document.getElementsByTagName('img')[0]
//console.log(myimg)
let i = 1
var intr;

 function  showph(){

  intr =  setInterval(function(){myimg.src = "./New folder/"+ arrnut[i]

    if (i==arrnut.length-1 )
    { i = -1 }
    i++},2000)

}



function Previousfun(){

    myimg.src = "./New folder/"+ arrnut [i]
    if (i!=0)
        {i-- }
       
}


function nextfun() {
    myimg.src = "./New folder/"+ arrnut [i]
    if (i!=arrnut.length-1 )
        { i++ }
    
}


function stopfun(){

        clearInterval(intr)

}
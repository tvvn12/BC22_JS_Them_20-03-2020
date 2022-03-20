document.getElementById("btnClick").onclick= function(){   
    var Month =document.getElementById("txtMonth").value*1;
    var Year =document.getElementById("txtYear").value*1;
    if(Year%4!==0 && Year%100==0|| Year %400!==0){
    if (Month==1,2,4,6,9,11) {
       
        document.getElementById("result").innerHTML= "Tháng " +Month+" "+" có 31 ngày" +"<br> Năm Không nhuận";
    }
    if (Month==3,5,7,8,10) {
    document.getElementById("result").innerHTML= "Tháng " +Month+" "+" có 30 ngày"+ "<br> Năm Không nhuận";
      
    }
    if (Month==2) {
    document.getElementById("result").innerHTML= "Tháng " +Month+" "+" có 28 ngày"+ "<br> Năm Không nhuận";
    }
    }
    if(Year%4==0 && Year%100!==0|| Year %400==0){
        if (Month==1,2,4,6,9,11) {
           
            document.getElementById("result").innerHTML= "Tháng " +Month+" "+" có 31 ngày" +"<br> Năm  nhuận";
        }
        if (Month==3,5,7,8,10) {
        document.getElementById("result").innerHTML= "Tháng " +Month+" "+" có 30 ngày"+ "<br> Năm  nhuận";
          
        }
        if (Month==2) {
        document.getElementById("result").innerHTML= "Tháng " +Month+" "+" có 29 ngày"+ "<br> Năm  nhuận";
        }
        }
    
}
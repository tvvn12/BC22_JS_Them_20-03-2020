document.getElementById("btnClick").onclick =function(){
    var a = document.getElementById("txta").value*1;
    var hangTram=Math.floor( a/100);
    var hangChuc=Math.floor( (a%100)/10);
    var hangDonvi= (a%100)%10;
    var in_hangTram="";
    var in_hangChuc="";
    var in_hangDonvi="";
    if(hangTram <= 999 || hangTram>= 100){
        switch (hangTram) {
            case 1:
                        in_hangTram = "Một trăm";
                        console.log(in_hangTram);
                        break;
            case 2:
                        in_hangTram = "Hai trăm";
                        console.log(in_hangTram);
                        break;
            case 3:
                        in_hangTram = "Ba trăm";
                        console.log(in_hangTram);
                        break;    
            case 4:
                        in_hangTram = "Bốn trăm";
                        console.log(in_hangTram);
                        break;
            case 5:
                        in_hangTram = "Năm trăm";
                        console.log(in_hangTram);
                        break;      
            case 6:
                        in_hangTram = "Sáu trăm";
                        console.log(in_hangTram);
                        break;    
            case 7:
                        in_hangTram = "Bảy trăm";
                        console.log(in_hangTram);
                        break;
            case 8:
                        in_hangTram = "Tám trăm";
                        console.log(in_hangTram);
                        break;
            case 9:
                        in_hangTram = "Chín trăm";
                        console.log(in_hangTram);
                        break;    
                    
        
            default:
                break;
        }
    }
    if(hangChuc <= 99 || hangChuc>= 10){
        switch (hangChuc) {
             case 1:
                        in_hangChuc = "Mười";
                        break;
            case 2:
                        in_hangChuc = "Hai mươi";
                        break;
            case 3:
                        in_hangChuc = "Ba mươi";
                        break;    
            case 4:
                        in_hangChuc = "Bốn mươi";
                        break;
            case 5:
                        in_hangChuc = "Năm mươi";
                        break;      
            case 6:
                        in_hangChuc = "Sáu mươi";
                        break;    
            case 7:
                        in_hangChuc = "Bảy mươi";
                        break;
            case 8:
                        in_hangChuc = "Tám mươi";
                        break;
            case 9:
                        in_hangChuc = "Chín mươi";
                        break;    
            default:
                break;
        }
    }
   if(hangDonvi>=1 || hangDonvi<=9){
    switch (hangDonvi) {
            case 1:
                        in_hangDonvi = "Một";
                        break;
            case 2:
                        in_hangDonvi = "Hai ";
                        break;
            case 3:
                        in_hangDonvi = "Ba ";
                        break;    
            case 4:
                        in_hangDonvi = "Bốn ";
                        break;
            case 5:
                        in_hangDonvi = "Lăm ";
                        break;      
            case 6:
                        in_hangDonvi = "Sáu ";
                        break;    
            case 7:
                        in_hangDonvi = "Bảy ";
                        break;
            case 8:
                        in_hangDonvi = "Tám ";
                        break;
            case 9:
                        in_hangDonvi = "Chín ";
                        break;    
        default:
            break;
    }
   }
    document.getElementById("result").innerHTML= in_hangTram+" " + in_hangChuc+" " +in_hangDonvi ;
    
}
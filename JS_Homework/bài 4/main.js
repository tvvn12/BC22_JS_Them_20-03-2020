document.getElementById("btnClick").onclick =function(){
    var Sv1_Td = +document.getElementById("txtSv1").value;
    var Sv2_Td = +document.getElementById("txtSv2").value;
    var Sv3_Td = +document.getElementById("txtSv3").value;
    var Sv1_Ten = document.getElementById("txtTSv1").value;
    var Sv2_Ten = document.getElementById("txtTSv2").value;
    var Sv3_Ten = document.getElementById("txtTSv3").value;
    var Toa_do_truong_hoc = +document.getElementById("txtTd").value;
    var a = Math.abs( Sv1_Td -Toa_do_truong_hoc);
    var b = Math.abs( Sv2_Td -Toa_do_truong_hoc);
    var c = Math.abs( Sv3_Td -Toa_do_truong_hoc);
    var result ="";
    if (a>b && a>c) {
         result = "Sinh viên xa trường nhất là " +Sv1_Ten+" cách " +a+"KM"; 
    }
    if (b>a && b>c) {
         result = "Sinh viên xa trường nhất là " +Sv2_Ten+" cách " +b+"KM"; 
    }
    if (c>b && c>a) {
         result = "Sinh viên xa trường nhất là " +Sv3_Ten+" cách " +c+"KM"; 
    }
    if(a==b && a==c){
        result = "Sinh viên xa trường nhất là " +Sv1_Ten+" "+ a+" Km"+ "và "+ Sv2_Ten+" " +b+"KM" + "và "+ Sv3_Ten+" " +c+"KM(bằng nhau)"; 
    }
    if(a==b && a >c)
    {
         result = "Sinh viên xa trường nhất là " +Sv1_Ten+" "+ a+" Km"+ "và "+ Sv2_Ten+" " +b+"KM"; 
    }
    if(a==c && a >b)
    {
         result = "Sinh viên xa trường nhất là " +Sv1_Ten+" "+ a+" Km"+ "và "+ Sv3_Ten+" " +c+"KM"; 
    }
    if(b==c && b >a)
    {
         result = "Sinh viên xa trường nhất là " +Sv2_Ten+" "+ b+" Km"+ "và "+ Sv3_Ten+" " +c+"KM"; 
    }
    document.getElementById("result").innerHTML = Sv1_Ten+" cách trường "+ a+"Km <br> "+ Sv2_Ten +" cách trường "+b+"Km <br> " +Sv3_Ten+" cách trường "+c+" " +"Km <br> " +"<br>" +result;


}
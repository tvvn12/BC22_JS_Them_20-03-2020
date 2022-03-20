document.getElementById("btnClick").onclick = function(){
    var Date =document.getElementById("txtDate").value*1;
    var Month =document.getElementById("txtMonth").value*1;
    var Year =document.getElementById("txtYear").value*1;
    nextDay= Date + 1;
    preDay= Date - 1;
    nextMonth=Month +1;
    preMonth= Month -1;
    nextYear = Year + 1;
    preYear = Year - 1;
    if (Year%4!==0 && Year%100==0|| Year %400!==0) {
          if (Month==4,6,9,11) {
              if(Date>=2 && Date<=29){
                  document.getElementById("result").innerHTML= "Pre Day "+ preDay+"/ "+ Month+"/ "+Year+ " To day is "+Date+"/ " +Month+" /"+Year + " Next Day "+ nextDay+"/ "+ Month+"/ "+Year;
              }else if(Date==30){
                  var NewDate=1;
                document.getElementById("result").innerHTML= "Pre Day "+ preDay+" /"+ Month+" /"+Year+ "To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ NewDate+" /"+ nextMonth+" /"+Year;
              }else if(Date==1){
                  var NewDate_1= 30;
                document.getElementById("result").innerHTML= "Pre Day "+ NewDate_1+"/ "+ preMonth+"/ "+Year+ " To day is "+Date+"/ " +Month+" /"+Year + " Next Day "+ nextDay+"/ "+ Month+"/ "+Year;
              }
              
          }
          if (Month==3,5,7,8,10) {
            if(Date>=2 && Date<=30){
                document.getElementById("result").innerHTML= "Pre Day "+ preDay+"/ "+ Month+"/ "+Year+ " To day is "+Date+"/ " +Month+" /"+Year + " Next Day "+ nextDay+"/ "+ Month+"/ "+Year;
            }else if(Date==31){
              
                var NewDate=1;
              document.getElementById("result").innerHTML= "Pre Day "+ preDay+"/ "+ Month+"/ "+Year+ " To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ NewDate+"/ "+ nextMonth+" /"+Year;
            }else if(Date==1){
                var NewDate_1= 31;
              document.getElementById("result").innerHTML= "Pre Day "+ NewDate_1+" /"+ preMonth+" /"+Year+ " To day is "+Date+" /" +Month+" /"+Year + " Next Day "+ nextDay+"/ "+ Month+"/ "+Year;
            }
            
            
        }
        if(Month==1){
            if(Date>=2 && Date<=30){
                document.getElementById("result").innerHTML= "Pre Day "+ preDay+" /"+ Month+" /"+Year+ " To day is "+Date+" /" +Month+"/ "+Year + " Next Day "+ nextDay+" /"+ Month+" /"+Year;
            }
            else if(Date==31){
                var NewDate=1;
              document.getElementById("result").innerHTML= "Pre Day "+ preDay+"/ "+ Month+" /"+Year+ " To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ NewDate+"/ "+ nextMonth+"/ "+Year;
            }
            else if(Date==1){
                var newDate_3=31;
                var newMonth_1 =12;
                document.getElementById("result").innerHTML= "Pre Day "+ newDate_3+"/ "+ newMonth_1+" /"+preYear+ " To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ nextDay+"/ "+ Month+" "+Year;
                console.log(newMonth_1);
            }
        }
        if(Month==12){
           
                if(Date>=2 && Date<=30){
                    document.getElementById("result").innerHTML= "Pre Day "+ preDay+"/ "+ Month+" /"+Year+ " To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ nextDay+" /"+ Month+"/ "+Year;
                }
                else if(Date==31){
                    var NewDate=1;
                    var newMonth_2= 1;
                  document.getElementById("result").innerHTML= "Pre Day "+ preDay+" /"+ Month+"/ "+Year+ " To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ NewDate+" /"+ newMonth_2+"/ "+nextYear;
                }
                else if(Date==1){
                    var newDate_3=30;
                    
                    
                    document.getElementById("result").innerHTML= "Pre Day "+ newDate_3+"/ "+ preMonth+"/ "+Year+ " To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ nextDay+" /"+ Month+"/ "+Year;
                    console.log(newMonth_1);
                }
            
        }
        if(Month===2){
            if(Date>=2 && Date<=27){
                document.getElementById("result").innerHTML= "Pre Day "+ preDay+"/ "+ Month+"/ "+Year+ " To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ nextDay+" /"+ Month+" /"+Year;
            }
            else if(Date==28){
                var NewDate=1;
                // var newMonth_2= 1;
              document.getElementById("result").innerHTML= "Pre Day "+ preDay+"/ "+ Month+"/ "+Year+ " To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ NewDate+" /"+ nextMonth+" /"+nextYear;
            }
            else if(Date==1){
                var newDate_3=31;
                document.getElementById("result").innerHTML= "Pre Day "+ newDate_3+"/ "+ preMonth+" /"+Year+ " To day is "+Date+" /" +Month+"/ "+Year + " Next Day "+ nextDay+" /"+ Month+" /"+Year;
                
            }
            else{
                document.getElementById("result").innerHTML="wrong Day";
            }

        }
   
    }
   else if(Year%4==0 && Year%100!==0|| Year %400==0){
    
        if (Month==4,6,9,11) {
            if(Date>=2 && Date<=29){
                document.getElementById("result").innerHTML= "Pre Day "+ preDay+" /"+ Month+"/ "+Year+ " To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ nextDay+"/ "+ Month+"/ "+Year;
            }else if(Date==30){
                var NewDate=1;
              document.getElementById("result").innerHTML= "Pre Day "+ preDay+"/ "+ Month+"/ "+Year+ " To day is "+Date+" /" +Month+"/ "+Year + " Next Day "+ NewDate+"/ "+ nextMonth+"/ "+Year;
            }else if(Date==1){
                var NewDate_1= 30;
              document.getElementById("result").innerHTML= "Pre Day "+ NewDate_1+"/ "+ preMonth+" /"+Year+ " To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ nextDay+" /"+ Month+"/"+Year;
            }
            
        }
        if (Month==3,5,7,8,10) {
          if(Date>=2 && Date<=30){
              document.getElementById("result").innerHTML= "Pre Day "+ preDay+" "+ Month+"/"+Year+ " To day is "+Date+"/ " +Month+" /"+Year + " Next Day "+ nextDay+" /"+ Month+" /"+Year;
          }else if(Date==31){
            
              var NewDate=1;
            document.getElementById("result").innerHTML= "Pre Day "+ preDay+"/ "+ Month+"/ "+Year+ " To day is "+Date+"/ " +Month+" /"+Year + " Next Day "+ NewDate+" /"+ nextMonth+"/ "+Year;
          }else if(Date==1){
              var NewDate_1= 31;
            document.getElementById("result").innerHTML= "Pre Day "+ NewDate_1+" /"+ preMonth+"/ "+Year+ " To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ nextDay+"/ "+ Month+"/ "+Year;
          }
          
          
      }
      if(Month==1){
          if(Date>=2 && Date<=30){
              document.getElementById("result").innerHTML= "Pre Day "+ preDay+"/ "+ Month+" /"+Year+ " To day is "+Date+" /" +Month+"/ "+Year + " Next Day "+ nextDay+" /"+ Month+" /"+Year;
          }
          else if(Date==31){
              var NewDate=1;
            document.getElementById("result").innerHTML= "Pre Day "+ preDay+"/ "+ Month+" /"+Year+ " To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ NewDate+"/ "+ nextMonth+" /"+Year;
          }
          else if(Date==1){
              var newDate_3=31;
              var newMonth_1 =12;
              document.getElementById("result").innerHTML= "Pre Day "+ newDate_3+" /"+ newMonth_1+"/ "+preYear+ " To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ nextDay+"/ "+ Month+"/ "+Year;
              console.log(newMonth_1);
          }
      }
      if(Month==12){
         
              if(Date>=2 && Date<=30){
                  document.getElementById("result").innerHTML= "Pre Day "+ preDay+"/ "+ Month+" /"+Year+ " To day is "+Date+"/ " +Month+" /"+Year + " Next Day "+ nextDay+"/ "+ Month+"/ "+Year;
              }
              else if(Date==31){
                  var NewDate=1;
                  var newMonth_2= 1;
                document.getElementById("result").innerHTML= "Pre Day "+ preDay+"/ "+ Month+" /"+Year+ " To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ NewDate+"/ "+ newMonth_2+" /"+nextYear;
              }
              else if(Date==1){
                  var newDate_3=30;
                  
                  
                  document.getElementById("result").innerHTML= "Pre Day "+ newDate_3+"/ "+ preMonth+"/ "+Year+ " To day is "+Date+" /" +Month+" /"+Year + " Next Day "+ nextDay+"/ "+ Month+"/ "+Year;
                  console.log(newMonth_1);
              }
          
      }
      if(Month==2){
          if(Date>=2 && Date<=28){
              document.getElementById("result").innerHTML= "Pre Day "+ preDay+"/ "+ Month+"/ "+Year+ " To day is "+Date+"/ " +Month+"/ "+Year + " Next Day "+ nextDay+"/ "+ Month+" /"+Year;
          }
          else if(Date==29){
              var NewDate=1;
              // var newMonth_2= 1;
            document.getElementById("result").innerHTML= "Pre Day "+ preDay+"/ "+ Month+"/ "+Year+ " To day is "+Date+" /" +Month+"/ "+Year + " Next Day "+ NewDate+" /"+ nextMonth+" /"+nextYear;
          }
          else if(Date==1){
              var newDate_3=31;
              document.getElementById("result").innerHTML= "Pre Day "+ newDate_3+"/ "+ preMonth+"/ "+Year+ " To day is "+Date+" /" +Month+" "+Year + " Next Day "+ nextDay+" /"+ Month+"/ "+Year;
              console.log(newMonth_1);
          }
          else{
            document.getElementById("result").innerHTML="wrong Day";
        }
    
      }
            
          }
}
// let x= 2000%4!==0 && 2000%100==0|| 2000%400!==0
console.log(x);

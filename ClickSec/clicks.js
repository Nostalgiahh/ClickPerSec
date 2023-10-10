document.getElementById("start").addEventListener("click", function (){
  
    let begin = document.getElementById("buttn");
    begin.style.display = "block";
    
    let close = document.getElementById("start");
    close.style.display = "none";
    
    document.getElementById("score").innerHTML = "score =";
      
      setTimeout(clickFast, 5000)
        function clickFast() {
       document.getElementById("counter").innerHTML = 0;
        let end = document.getElementById("buttn");
        end.style.display = "none";
        let open = document.getElementById("start");
        open.style.display = "block";
         document.getElementById("score").innerHTML = "score = " + scount;
        }
      
  })
  
  document.getElementById("counter").innerHTML = 0;
  let scount = 0;
  document.getElementById("buttn").addEventListener("click", function (){
    document.getElementById("counter").innerHTML++;
    scount++;
    console.log(scount);
  });
  
  
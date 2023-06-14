let scoreP = [0, 0, 0];
let scoreM = [0, 0, 0];
    function Resize(boolean, id) {
    divP =  document.getElementById("p"+id);
    divM =  document.getElementById("m"+id);

      if(boolean)
      {
        scoreP[id] = scoreP[id]+1;
        divP.value = "+" + scoreP[id];
      }
      else{

        scoreM[id] = scoreM[id]+1;
        divM.value = "-" + scoreM[id];
      }
      divP.style.width = scoreP[id]/(scoreP[id]+scoreM[id])* 300 + "px";
      divM.style.width = scoreM[id]/(scoreP[id]+scoreM[id]) * 300 + "px";
    }
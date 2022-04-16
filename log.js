function loadStorage(){
    if(localStorage.getItem("lastMode")){
      currentmode = localStorage.getItem("lastMode");
      setCurrentlist();
    }
    if(localStorage.getItem("lastMode") == 2){$(".toggle").css({"background-color":secondGradeColor}).html("<p>2</p>");}
    else{$(".toggle").css({"background-color":thirdGradeColor}).html("<p>3</p>");}
}

//色別習熟度
const log = loadLog()
function loadLog(target,score){
  if (localStorage.getItem("log")){
    const log = JSON.parse(localStorage.getItem("log"))
    return log
  }else{
    //イニシャライザ
    const log = []
    for (var i = 0; i < 270; i++) {
      log[i]=0;
    }
  return log
  }
}
// 習熟度計算
function calcProficiency(isCorrect){
  var i = qcol.numb;
  (isCorrect)?log[i]+=20 :log[i]*=0.75;
  if(log[i]>100){log[i]=100}
}

//アップロード
function uploadLog(){
  localStorage.setItem('log', JSON.stringify(log));
}

var isMobile,
    thirdGradeColor = "#6388dd",
    secondGradeColor = "#63dd84",
    firstgame = 0,
    gamemode = 6,
    currentmode = 3,
    selectedcolors = [],
    currentlist,
    answerNumb = 0,
    answercount = 0,
    lastQuestion = [],
    gamecount = 0,
    gamepoint = 0,
    answerdColorList =[]

//ロード処理
$(function(){
  (navigator.userAgent.match(/iPhone|Android.+Mobile/))?isMobile=true:isMobile=false;
  loadStorage();setScoreTxt();sizing();no_scaling();
});

function no_scaling() {
    document.addEventListener("touchmove", mobile_no_scroll, { passive: false });
}
function mobile_no_scroll(event) {
    // ２本指での操作の場合
    if (event.touches.length >= 2) {
        // デフォルトの動作をさせない
        event.preventDefault();
    }
}

//リサイズ
$(window).on("resize orientationchange", function(){sizing()});

function sizing(){
  var hSize = window.innerHeight;
  $('body').height(hSize)
}


//タイトル画面(未決)
//級スイッチ
$('.toggle').on('click', function(){(currentmode == 3)?currentmode = 2:currentmode = 3;switchAnm(currentmode);})
function switchAnm(mode,delay){
  var duration = 1200
  $(".toggle").addClass("tglAnm")
  setTimeout(function(){$(".toggle").removeClass("tglAnm").css("height","2.6rem")},duration);
  if(mode == 2){
    setTimeout(function(){$(".toggle").css({"background-color":"#63dd84"}).html("<p>2</p>");
      $(".toggle p").css(  "animation"," linear changeGradeFont "+duration*0.6+"ms")
    },duration*0.4);
  }
  else{
    setTimeout(function(){$(".toggle").css({"background-color":"#6388dd"}).html("<p>3</p>")
      $(".toggle p").css(  "animation"," linear changeGradeFont "+duration*0.6+"ms")
    },duration*0.4)
  }
  setCurrentlist();
  localStorage.setItem('lastMode', currentmode,{ expires: 1 })
  console.log(localStorage.getItem('lastMode'));
}

function setCurrentlist(){
  (currentmode == 3)?currentlist = cl_grade3:currentlist = cl_grade2
};
//タイトル画面ホバー処理(未決)
$('.firstscreen button').hover(function() {
  // mouseover の対象を強調
  $(this).css("background-color", currentlist[Math.floor(Math.random()*currentlist.length)].code)
},function(){
  $(this).css("background-color","white");
  }
);




//イベント処理
$('body').on({
  'click':function(){if(window.ontouchstart!==null){buttonEvent(this,"click");}},
  'mouseenter mouseup':function(){if(window.ontouchstart!==null){buttonEvent(this,"hover");}},
  'mouseleave': function(){if(window.ontouchstart!==null){buttonEvent(this,"default")}},
  'mousedown': function(){if(window.ontouchstart!==null){buttonEvent(this,"active")}},
  'touchstart': function(){buttonEvent(this,"active")},
  'touchend': function(){buttonEvent(this,"click");},
},"button")

function buttonEvent(target,event){
  if($(target).attr("class") != "returnUp"){
  switch (event) {
    case "default":$(target).css({filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3)',"box-shadow": 'inset 0px 5px 5px rgba(0, 0, 0, 0)'});
    break;
    case "hover":$(target).css({filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.6)',"box-shadow": 'inset 0px 5px 5px rgba(0, 0, 0, 0)'})
    break;
    case "active":$(target).css({filter:'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0)',"box-shadow": 'inset 0px 5px 5px rgba(0, 0, 0, 0.4)'});
    break;
    case "click":$(target).css({filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3)',"box-shadow": 'inset 0px 5px 5px rgba(0, 0, 0, 0)'});
      buttonClicked(target)
    break;
  }}else if(event == "click"){buttonClicked(target)}
};

function buttonClicked(target){
  switch ($(target).attr("class")) {
    case "gameStart":gameStart();
    break;
    case "quizbutton":quizAnswerd(target)
    break;
    case "memoryMode":memoryMode();
    break;
    case "backTitle":backTitle();
    break;
    case "retry":reStart();
    break;
    case "returnUp":backTitle();
    break;}
}



//GameMode
function gameStart() {
  killScreen();
  getGameGraphics();
}

//タイトル画面ボタン削除
function killScreen() {
  $(".firstscreen button").prop("disabled",true).css("pointer-events","none")
  $('.firstscreen').fadeOut(2000)
}
//ボタン生成
function getGameGraphics() {
  $("#main-nav").append('<div id="buttonArea"></div>')
  for(var i=0; i<4; i++){
    $("#buttonArea").append('<button class="quizbutton"></button>')
  }
  for (var i=0; i < 6; i++) {
    $('#titlearea').append('<div class="outerProg"><div class="progress"></div></div>')
  }
  $("#return").attr({class:"returnUp"})
  colorSet();
}
//４色選択
function colorSet(){
  var colorChoice = 0
  selectedcolors = []
  while(selectedcolors.length < 4) {
    colorChoice = Math.floor(Math.random()*currentlist.length)
    if (selectedcolors.indexOf(colorChoice) == -1){
      if(gamecount < 3 && currentlist[colorChoice].type == "ja"){selectedcolors.push(colorChoice);}
      else if (gamecount > 2 && currentlist[colorChoice].type == "en"){selectedcolors.push(colorChoice);}
      if(selectedcolors.length == 4){checkincompatibles();}
    }
  }
  function checkincompatibles(){
    var incompList = []
    for(i=0; i<selectedcolors.length;i++){
      incompList.push(currentlist[selectedcolors[i]])
    }
    var incompCount = 0
    for(i=0; i<incomp_1.length; i++){
      if (incompList.indexOf(incomp_1[i]) !== -1){
          incompCount++;}
      if (incompCount > 1){selectedcolors = [];
      break;}
    }
  }
  getColors();
  questionStart();
}

//ボタンに色を配置
function getColors(){
  $('.quizbutton').text("")
  $('.quizbutton').each(function(i, elem){
    if(currentmode == 3){$('.quizbutton').eq(i).css("background", currentlist[selectedcolors[i]].code)}
    else{$('.quizbutton').eq(i).append(addSpan(currentlist[selectedcolors[i]].value))}
  })
}
//問題文表示
var qcol
function questionStart(){
  answerNumb = Math.floor(Math.random()*4)
  qcol = currentlist[selectedcolors[answerNumb]]
  if (lastQuestion.indexOf(qcol) == -1){
    if(currentmode == 3){
      $('#qText').text(qcol.value);
      if(qcol.type == 'ja'){$('#qText').append("（" + qcol.kana + "）")}
    }
    else{
      //デバッグ用
      // $('#qText').text(qcol.value);
      $('#qColor').css("background-color", qcol.code)
    }
    lastQuestion.push(qcol)
  } else {questionStart();}
}

//回答処理
function quizAnswerd(target){
  //リセット処理
  if(gamecount == 0){$(".progress").css("background-color", "");answerdColorList=[]}
  //正解
  if($('.quizbutton').index(target) == answerNumb){
    animation(circle);
    $('.progress').eq(gamecount).css("background", qcol.code)
    answerdColorList.push(qcol.code);
    calcProficiency(true)
    gamepoint++;
    //誤答
  }else{animation(cross);answerdColorList.push("#505050");calcProficiency(false)}
  gamecount++;
  //リザルト画面呼び出し
  if(gamemode == 0 && gamecount == 8){gamecount = 0;colorSet()}
  if(gamecount == gamemode){showResult();}
  else{colorSet();}
}

//マルバツ
function animation(target) {
  var transitionEndEvents = [
        "webkitTransitionEnd",
        "mozTransitionEnd",
        "oTransitionEnd",
        "transitionend"
    ];
  var transitionEnd = transitionEndEvents.join(" ");
  $("#animeArea").children().add("#animeArea").removeAttr("class");
  $(target).add("#animeArea").attr({class : "active"}).on(transitionEnd, function(){
    $(this).removeAttr("class");
})}

//スコアテキスト(ロード時処理)
var scoreTxtList=[]
var scoreTxtOriginal=["DONMAI","","","","ALMOST...","GOOD","PERFECT!!"]
function  setScoreTxt(){
  for (var i = 0; i < scoreTxtOriginal.length; i++) {
    scoreTxtList.push([...scoreTxtOriginal[i]].map((i) => '<span>'+ i +"</span>").join(""));
  }
}
//リザルト画面
function showResult(){
  uploadLog();
  $(".quizbutton").prop("disabled",true)
  $("#outerResult").fadeIn(500,function(){$(".retry").prop("disabled",false)})
  $(".score").html( gamepoint + "/" + gamemode)
  $(".score2").html(scoreTxtList[gamepoint]);
  colorResultTxt()
  if(gamepoint == gamemode){
    $(".score2 span").css("animation","ease-in-out perfect 1.5s infinite").each(function(j,elem){$(elem).css("animation-delay",(0.06*j) + "s")});
    confettiStart();
    $(".progress").css("animation","result8 1.5s linear infinite");
  }else if(gamepoint<Math.ceil(gamemode*0.7)){starfall()};
  lastQuestion=[currentlist[selectedcolors[answerNumb]]]

  function colorResultTxt(){
    var contrast = Math.floor(Math.abs((answerdColorList.length - $('.score2 span').length)/2));
    if($('.score2 span').length == answerdColorList.length){
      for (var i = 0; i < $(".score2 span").length; i++) {
        $('.score2 span').eq(i).css("color", answerdColorList[i])
      }
    }else if($('.score2 span').length < answerdColorList.length){
      for (var i = 0; i < $(".score2 span").length; i++) {
        $('.score2 span').eq(i).css("color", answerdColorList[i+contrast])
      }
    }else{
      for (var i = 0; i < $(".score2 span").length; i++) {
        if (i-contrast < 0) {$('.score2 span').eq(i).css("color", answerdColorList[0])}
        else if(i-contrast >= answerdColorList.length){$('.score2 span').eq(i).css("color", answerdColorList[answerdColorList.length -1])}
        else {$('.score2 span').eq(i).css("color", answerdColorList[i-contrast])}
      }
    }
  }
}

//不合格アニメ
var timer
function starfall(){
  let start = Date.now();
  let duration = 1200
  timer = setInterval(function() {
    let timePassed = Date.now() - start;
    if (timePassed >= duration) {
      timePassed = duration
      clearInterval(timer);
      $(".progress").css("animation","")
      return;
    }
    // 関数を定義
    let timeFraction = timePassed / duration
    let momentum = Math.pow(timeFraction, 2)
    // アニメーションを描画
    dropAnm(".outerProg",timeFraction,titlearea,momentum,titlearea,timeFraction)
  }, 20);

function dropAnm(targetX,progressX,targetY,progressY,targetA,progressA,) {
  $(targetX).each(function(e,elm){$(elm).css("left", progressX*7*(e-(gamemode/2-0.5)) +"vw")});
  $(targetY).css("top", progressY*110  + '%');
  $(targetA).each(function(e,elm){$(elm).css("opacity", 1-progressA)})
}}







// アニメリセット処理
function anmReset(){
  //progressの位置元に戻す
  setTimeout(function aaa(){$("#titlearea").css({top:"",opacity:"1"})},200)
  //progress止める
  clearInterval(timer)
  //confetti止める
  stopLoop()
}


//リザルトからゲームへ
function reStart(){
  anmReset();
  setTimeout(function(){clearInterval(timer);$('.confetti').html("")},500);
  $('.progress').css("background","");
  gamecount = 0;gamepoint = 0;
    colorSet();
  $(".retry").prop("disabled",true)
  $(".quizbutton").prop("disabled",false)
  $("#outerResult").fadeOut(500,function(){$(".outerProg").css("left","")})
}
//タイトルへ
function backTitle(){
  setTimeout(function(){clearInterval(timer);$('.confetti').html("")},2000);
  $(".quizbutton").prop("disabled",false)
  $(".firstscreen button").css("background-color","white");
  $('.firstscreen').fadeIn(2000,function(){
    $("#outerResult").css("display","none")
    $(".firstscreen button").each(function(i, elem){elem.disabled = false});
    $(".firstscreen button").css("pointer-events","");
    $("#buttonArea,#scrollArea").remove();$("#titlearea").html("");
    qReset();
    //経過リセット
    function qReset(){
      anmReset()
      gamecount=0;gamepoint=0;
      $('#qColor').css("background-color", "");
      $('#qText').text("");
      $(".score2").css({"animation":""})
    }
})};

//memoryMode
function memoryMode() {
  currentscreen = "memory";
  getmemoryGraphics();
  killScreen();
}

function colorviewSet(){
  $('.memorybutton').each((i, elem)=>{
    $('.memorybutton').eq(i).css("background", currentlist[i].code)
    $('.memorybutton .toneName').eq(i).remove()
    $('.memorybutton').eq(i).append('<div class="toneName">' + currentlist[i].value + '</div>');
})
}

function getmemoryGraphics() {
  $("#titlearea").html('<p class="title">MEMORYMODE</p>')
  $("#main-nav").append('<div id="scrollArea"></div>')
  for(j=0; j<(currentlist.length/4); j++){
    $("#scrollArea").append('<div class="row"></div>')
    for(i=0; i<4; i++){
      var k = j*4+i
      if(k<currentlist.length){
        $(".row").eq(j).append('<div class="memoryAreas"><div class="memorybutton" id="button'+ i +'"></div></div>')
      }
  }}
  $("#return").attr({class:"backTitle"})
  hideReturn();
  colorviewSet();
}

function colorviewSet(){
  $('.memorybutton').each(function(i, elem){
    $(this).css("background", currentlist[i].code)
    $(this).append('<div class="toneName">' + addSpan(currentlist[i].value) + '<br></div>');
    if(currentlist[i].type == "ja"){$('.toneName').eq(i).append('<span class="toneKana">' + currentlist[i].kana + '</span><br>')}
    $('.toneName').eq(i).append(`<div class="toneProficiency">習熟度<div class="proficiencyBar"><div class="proficiencyBarInner"></div></div><div class="proficiencyPercentage">${log[currentlist[i].numb]}%</div></div>`)
    $('.proficiencyBarInner').eq(i).css("width",`${log[currentlist[i].numb]}%`)
    $(".proficiencyPercentage").eq(i).css("left",`${log[currentlist[i].numb]}%`)
    if(log[currentlist[i].numb] > 10){$(".proficiencyPercentage").eq(i).css("transform",`translateX(-50%)`)}
    if(log[currentlist[i].numb] > 90){$(".proficiencyPercentage").eq(i).css("transform",`translateX(-100%)`)}
    if(currentlist[i].lightness < 5){$(".toneName",this).css("color", "#f5f5f5");}
})}


//ボタン透明化
function hideReturn() {
  var scroll_y = $("#scrollArea").get(0).scrollHeight;
  var scroll_ny = $("#scrollArea").get(0).offsetHeight;
  var inLastPosition = false;
  $('#scrollArea').scroll(function(){
    var scroll_p = $("#scrollArea").scrollTop();
    var scroll = scroll_p + scroll_ny;

    if(scroll_y <= scroll && inLastPosition == false){
      $("#return").css({"opacity":"0.1",'pointer-events': 'none'}).off('click',buttonEvent);
      inLastPosition = true;
    }else if(scroll_y > scroll && inLastPosition){
      $("#return").css({"opacity":"1",'pointer-events': ''}).on('click',buttonEvent);
      inLastPosition = false;
  }})
};

//マウスイベント
$('#main-nav').on({
  'mouseenter mouseup': function(){if(window.ontouchstart!==null){
    $(this).css({margin:"0", width:'25vw',height:'25vw', transform: "translateX(0)","max-width":"calc(150px + 2vw)", "max-height":"calc(150px + 2vw)","z-index":"0"})}
    $(this).find('.toneKana,.toneProficiency').css({opacity:"0"})},
  'mouseleave': function(){if(window.ontouchstart!==null){areasizeReturn(this)}},
  'mousedown': function(){if(window.ontouchstart!==null){areasizeBig(this)}},
  'touchstart': function(){areasizeBig(this)},
  'touchend': function(){areasizeReturn(this)},
},".memorybutton");

function fourAreas(e){
  var areas
  var benchmark
  (isMobile)?benchmark=$('#scrollArea').offset().top + $(e).parent().height():benchmark=$(window).height() - ($(e).parent().height()*1.4)
  if ($(e).offset().top < benchmark){($(e).parent().index()>2)?areas = 2:areas = 1}
  else{($(e).parent().index()>2)?areas = 4:areas = 3}
  return areas;
}

function areasizeBig(target){
  switch (fourAreas(target)) {
    case 1:;
    break;
    case 2:
      $(target).css({transform: "translateX(max(calc(-150px - 2vw),-25vw)"})
    break;
    case 3:
      $(target).css({transform: "translateY(max(calc(-150px - 2vw),-25vw)"})
    break;
    case 4:
      $(target).css({transform: "translate(max(calc(-150px - 2vw),-25vw),max(calc(-150px - 2vw),-25vw)"})
    break;
  }
  $(target).css({margin:"0", width:'50vw',height:'50vw', "max-width":"calc(300px + 4vw)", "max-height":"calc(300px + 4vw)","z-index":"4"})
  $(target).find('.toneKana,.toneProficiency').css({opacity:"1"});
}

function areasizeReturn(target){
  $(target).css({margin:'1vw', width:'23vw',height:'23vw', "max-width":'150px', "max-height":"150px","z-index":"0",transform: "translate(0,0)"})
  $(target).find('.toneKana,.toneProficiency').css({opacity:"0"})
}

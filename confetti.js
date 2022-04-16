var timer1 = [];
function stopLoop(){
  for (var i = 0; i < timer1.length; i++) {
    clearInterval(timer1.shift())
  }
}



 class Congratulation {
  constructor($elm,$color) {
    this.$area = $elm;
    this.id = 'congratulation-style';
    this.height;
    this.color = $color
    this.OPTION = {
      BREAK_POINT: 768,
      ADD_HEIGHT: 0, // 紙吹雪が降る範囲はエリア高＋この高さ
      SPEED_LEVEL: 20, // 小さくするほど速くなる
      PC_QUANTITY: 100, // BREAK_POINT以上での紙吹雪の総枚数
      SP_QUANTITY: 75 // BREAK_POINT以下での紙吹雪の総枚数
    }
    this.isPC;
  }
  updateDevice() {
    let width = window.innerWidth;
    if (width >= this.OPTION.BREAK_POINT) {
      if (this.isPC) return;
      this.isPC = true;
    } else {
      if (!this.isPC) return;
      this.isPC = false;
    }
  }
  addStyle() {
    // styleタグを作成
    const css = document.createElement('style');
    css.media = 'screen';
    css.type = 'text/css';
    css.id = this.id;
    let rulesStr = '';
    // 移動のkeyframes定義
    for (let i = -6; i < 6; i++) {
      // moving-1 ～ moving-12 を生成
      rulesStr +=
        '@keyframes moving-' + parseInt(i+7, 10) + ' {' +
        '0% { opacity: 0; transform: translate(0, 0); }' +
        '10% { opacity: 1; }' +
        '90% { opacity: 1; }' +
        '100% { opacity: 0; transform: translate(' + (i*5) + 'vw, ' + (this.height + this.OPTION.ADD_HEIGHT) + 'px); }' +
        '}';
    }
    // ルールをstyleタグに追加
    const rules = document.createTextNode(rulesStr);
    css.appendChild(rules);
    // head内に作成
    document.getElementsByTagName('head')[0].appendChild(css);
  }
  restart() {
    stopLoop()
    $(this.id).remove(); // <head>の<style>タグを削除
    this.$area.empty(); // 紙吹雪要素を削除
    this.create(); // <style>生成とHTMLタグ生成を再実行
  }
  create() {
    this.height = this.$area.innerHeight();
    // スタイルの生成
    this.addStyle();
    // 上から下まで落ちるミリ秒数（エリア高 * スピードレベル + ランダム<0~9> * 100<ミリ秒化>）
    const duration = this.height * this.OPTION.SPEED_LEVEL + (Math.floor(Math.random() * 10)) * 100;
    // durationを3分割して、アニメーション開始タイミングを3回に分ける
    let index = 0;
    var makeOneThird = () =>{
      let html = '';
      const QUANTITY = this.isPC ? this.OPTION.PC_QUANTITY : this.OPTION.SP_QUANTITY;
      for (let i = 0; i < Math.floor(QUANTITY / 3); i++) {
        // 1階層目のスタイル生成
        const keyframe = 'moving-' + (Math.floor(Math.random() * 12) + 1); // 0の生成を防ぐ
        const delay = duration / (Math.floor(Math.random() * 10));
        const squareSide = (Math.floor(Math.random()*4) + 5)
        const outerStyle = [
          'top: 0px;',
          'left: ' + Math.floor(Math.random()*100) + '%;',
          'width: ' + squareSide + 'px;',
          'height: ' + squareSide + 'px;',
          'animation: ' + keyframe + ' ' + duration + 'ms linear infinite;',
          'animation-delay: ' + delay + 'ms;'
        ];
        // 2階層目・3階層目のスタイル生成
        const color = this.color[Math.floor(Math.random() * 8)];
        const rotateKeyframe = Math.floor(Math.random() * 2) ? 'rotateY' : Math.floor(Math.random() * 2)?'rotate360':"reverce";
        const innerRotateStyle = rotateKeyframe === 'rotateY' ? 'transform: rotate(' + Math.floor(Math.random() * 60) + 'deg);' : '';
        const bodyStyle = [
          'background-color: ' + color + ';',
          'animation: ' + rotateKeyframe + ' 900ms linear infinite;',
          'animation-delay: ' + delay + 'ms;'
        ];
        // html生成
        html +=
          '<span style="' + outerStyle.join(' ') + '">' +
          '<span style="' + innerRotateStyle + '">' +
          '<span style="' + bodyStyle.join(' ') + '"></span>' +
          '</span>' +
          '</span>';
      }
      this.$area.append(html);
    }
    const firstOne = makeOneThird();
    timer1.push(setInterval(() => {
      makeOneThird()
      index += 1;
      if (index >= 2) {
        stopLoop();
      }
    }, duration / 3));
  }
  init() {
    this.isPC = window.innerWidth >= this.OPTION.BREAK_POINT;
    this.create();

    $(window).on('resize', () => {
      const w = window.innerWidth;
      setTimeout(() => {
        if (w === window.innerWidth) {
          this.updateDevice();
          this.restart(); // ウィンドウリサイズ時は紙吹雪を作り直し
        }
      }, 200);
    });
  }
}

/**
 * 実行
 */
function confettiStart(){
  var $congratulationElm = $('.confetti');
  let congratulation = [];
  for (var i = 0; i < $congratulationElm.length; i++) {
    congratulation.push(
      new Congratulation($congratulationElm.eq(i),answerdColorList)
    );
  }
  for (let i = 0; i < congratulation.length; i++) {
    congratulation[i].init();
  }
};

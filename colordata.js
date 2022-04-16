class Color{
  constructor(numb,code,value,kana,type,grade,hue,lightness,saturation) {
    this.numb = numb;
    this.code = code;
    this.value = value;
    this.type = type;
    this.kana = kana;
    this.grade = grade;
    this.hue = hue;
    this.lightness = lightness;
    this.saturation = saturation;
    this._score = 0
  };
}

//CSVからデータを読み取るアイデア。ローカルファイルのセキュリティに引っかかり、開発難航。凍結中。
// function getCSV(csvfile, grade){
//   var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
//   req.open("get", csvfile, true); // アクセスするファイルを指定
//   req.responseType = 'text'
//   req.send(); // HTTPリクエストの発行
//     // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ
//     req.onload = function(){
// 	convertCSVtoArray(req.response, grade); // 渡されるのは読み込んだCSVデータ
//     }
// }
// // 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
// function convertCSVtoArray(str, gradex){ // 読み込んだCSVデータが文字列として渡される
//   var cn = []; // 最終的な二次元配列を入れるための配列
//   var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
//   for(var i=0;i<tmp.length;++i){
//     cn[i] = tmp[i].split(',');
//   }
//   cl3 = tmp
//   console.log(cl3);
// }
// getCSV('cn3.csv',3);


var cl_3 = new Color(3,"#feeeed","桜色","さくらいろ","ja","3","10RP","9","2.5");
var cl_6 = new Color(6,"#f8a7a0","珊瑚色","さんごいろ","ja","3","2.5R","7","11");
var cl_7 = new Color(7,"#f69c9f","紅梅色","こうばいいろ","ja","3","2.5R","6.5","7.5");
var cl_13 = new Color(13,"#b22d35","茜色","あかねいろ","ja","3","4R","3.5","11");
var cl_15 = new Color(15,"#f04e23","朱色","しゅいろ","ja","3","6R","5.5","14");
var cl_32 = new Color(32,"#ae5039","煉瓦色","れんがいろ","ja","3","10R","4","7");
var cl_35 = new Color(35,"#722f10","栗色","くりいろ","ja","3","2YR","3.5","4");
var cl_54 = new Color(54,"#fcaf17","山吹色","やまぶきいろ","ja","3","10YR","7.5","13");
var cl_55 = new Color(55,"#ba8448","黄土色","おうどいろ","ja","3","10YR","6","7.5");
var cl_60 = new Color(60,"#c9ab53","芥子色","からしいろ","ja","3","3Y","7","6");
var cl_69 = new Color(69,"#918d40","鶯色","うぐいすいろ","ja","3","1GY","4.5","3.5");
var cl_74 = new Color(74,"#a9d159","萌黄","もえぎ","ja","3","4GY","6.5","9");
var cl_77 = new Color(77,"#74905d","松葉色","まつばいろ","ja","3","7.5GY","5","4");
var cl_85 = new Color(85,"#65c294","若竹色","わかたけいろ","ja","3","6G","6","7.5");
var cl_86 = new Color(86,"#60b49f","青磁色","せいじいろ","ja","3","7.5G","6.5","4");
var cl_93 = new Color(93,"#00a4ac","浅葱","あさぎ","ja","3","2.5B","5","8");
var cl_99 = new Color(99,"#90d7ec","空色","そらいろ","ja","3","9B","7.5","5.5");
var cl_101 = new Color(101,"#0f5474","藍色","あいいろ","ja","3","2PB","3","5");
var cl_107 = new Color(107,"#2a5caa","瑠璃色","るりいろ","ja","3","6PB","3.5","11");
var cl_110 = new Color(110,"#4b5eaa","杜若色","かきつばたいろ","ja","3","7PB","4","10");
var cl_112 = new Color(112,"#465daa","群青色","ぐんじょういろ","ja","3","7.5PB","3.5","11");
var cl_115 = new Color(115,"#585eaa","桔梗色","ききょういろ","ja","3","9PB","3.5","13");
var cl_126 = new Color(126,"#451f49","茄子紺","なすこん","ja","3","7.5P","2.5","2.5");
var cl_128 = new Color(128,"#c77eb5","菖蒲色","あやめいろ","ja","3","10P","6","10");
var cl_129 = new Color(129,"#e761a4","牡丹色","ぼたんいろ","ja","3","3RP","5","14");
var cl_133 = new Color(133,"#f6f5ea","生成り色","きなりいろ","ja","3","10YR","9","1");
var cl_152 = new Color(152,"#8d3043","ワインレッド","Wine Red","en","3","10RP","3","9");
var cl_159 = new Color(159,"#5f161d","ボルドー","Bordeaux","en","3","2.5R","2.5","3");
var cl_160 = new Color(160,"#fee3d7","ベビーピンク","Baby Pink","en","3","4R","8.5","4");
var cl_163 = new Color(163,"#d71345","カーマイン","Carmine","en","3","4R","4","14");
var cl_167 = new Color(167,"#f26649","バーミリオン","Vermilion","en","3","6R","5.5","14");
var cl_168 = new Color(168,"#f15b47","スカーレット","Scarlet","en","3","7R","5","14");
var cl_170 = new Color(170,"#f9aa8f","サーモンピンク","Salmon Pink","en","3","8R","7.5","7.5");
var cl_176 = new Color(176,"#602d1d","チョコレート","Chocolate","en","3","10R","2.5","2.5");
var cl_178 = new Color(178,"#fdd1b0","ピーチ","Peach","en","3","3YR","8","3.5");
var cl_188 = new Color(188,"#f79428","マリーゴールド","Marigold","en","3","8YR","7.5","13");
var cl_192 = new Color(192,"#e7d0a9","ベージュ","Beige","en","3","10YR","7","2.5");
var cl_195 = new Color(195,"#6b4a2b","セピア","Sepia","en","3","10YR","2.5","2");
var cl_196 = new Color(196,"#b18b55","カーキ","Khaki","en","3","1Y","5","5.5");
var cl_197 = new Color(197,"#f3d18a","ブロンド","Blond","en","3","2Y","7.5","7");
var cl_203 = new Color(203,"#ffedb3","クリームイエロー","Cream Yellow","en","3","5Y","8.5","3.5");
var cl_205 = new Color(205,"#F7D54E","カナリヤ","Canary Yellow","en","3","7Y","8.5","10");
var cl_207 = new Color(207,"#6d5f1a","オリーブ","Olive","en","3","7.5Y","3.5","4");
var cl_208 = new Color(208,"#fff450","レモンイエロー","Lemon Yellow","en","3","8Y","8","12");
var cl_209 = new Color(209,"#576128","オリーブグリーン","Olive Green","en","3","2.5GY","3.5","3");
var cl_217 = new Color(217,"#40ba8d","コバルトグリーン","Cobalt Green","en","3","4G","7","9");
var cl_218 = new Color(218,"#00b379","エメラルドグリーン","Emerald Green","en","3","4G","6","8");
var cl_222 = new Color(222,"#00896b","ビリジアン","Viridian","en","3","8G","4","6");
var cl_228 = new Color(228,"#00b7ce","ターコイズブルー","Turquoise Blue","en","3","5B","6","8");
var cl_229 = new Color(229,"#006881","マリンブルー","Marine Blue","en","3","5B","3","7");
var cl_231 = new Color(231,"#00aeef","シアン","Cyan","en","3","7.5B","6","10");
var cl_232 = new Color(232,"#90d7ec","スカイブルー","Sky Blue","en","3","9B","7.5","5.5");
var cl_234 = new Color(234,"#ade0ee","ベビーブルー","Baby Blue","en","3","10B","7.5","3");
var cl_237 = new Color(237,"#0072bc","コバルトブルー","Cobalt Blue","en","3","3PB","4","10");
var cl_242 = new Color(242,"#1f2f54","ネイビーブルー","Navy Blue","en","3","6PB","2.5","4");
var cl_243 = new Color(243,"#465daa","ウルトラマリン","Ultramarine Blue","en","3","7.5PB","3.5","11");
var cl_248 = new Color(248,"#7159a6","バイオレット","Violet","en","3","2.5P","4","11");
var cl_249 = new Color(249,"#b7a8cc","ラベンダー","Lavender","en","3","5P","6","3");
var cl_250 = new Color(250,"#8d64aa","モーブ","Mauve","en","3","5P","4.5","9");
var cl_253 = new Color(253,"#956daf","パープル","Purple","en","3","7.5P","5","12");
var cl_254 = new Color(254,"#ec008c","マゼンタ","Magenta","en","3","5RP","5","14");
var cl_258 = new Color(258,"#f3ecd8","アイボリー","Ivory","en","3","2.5Y","8.5","1.5");
var cl_261 = new Color(261,"#a1a3a6","シルバーグレイ","Silver Grey","en","3","N","6.5","0");
var cl_267 = new Color(267,"#4c444d","チャコールグレイ","Charcoal Grey","en","3","5P","3","1");
var cl_1 = new Color(1,"#f5c9c6","鴇色","ときいろ","ja","3","7RP","7.5","8");
var cl_5 = new Color(5,"#f15b6c","韓紅","からくれない","ja","3","1.5R","5.5","13");
var cl_12 = new Color(12,"#973c3f","蘇芳","すおう","ja","3","4R","4","7");
var cl_20 = new Color(20,"#85403a","鳶色","とびいろ","ja","3","7.5R","3.5","5");
var cl_22 = new Color(22,"#892f1b","弁柄色","べんがらいろ","ja","3","8R","3.5","7");
var cl_23 = new Color(23,"#7c4036","海老茶","えびちゃ","ja","3","8R","3","4.5");
var cl_27 = new Color(27,"#f47a55","黄丹","おうに","ja","3","10R","6","12");
var cl_34 = new Color(34,"#8f4b38","檜皮色","ひわだいろ","ja","3","1YR","4.3","4");
var cl_37 = new Color(37,"#b4532a","代赭","たいしゃ","ja","3","2.5YR","5","8.5");
var cl_45 = new Color(45,"#faa755","柑子色","こうじいろ","ja","3","5.5YR","7.5","9");
var cl_51 = new Color(51,"#b76f3b","琥珀色","こはくいろ","ja","3","8YR","5.5","6.5");
var cl_56 = new Color(56,"#896a45","朽葉色","くちばいろ","ja","3","10YR","5","2");
var cl_58 = new Color(58,"#fdb933","鬱金色","うこんいろ","ja","3","2Y","7.5","12");
var cl_65 = new Color(65,"#f0dc70","刈安色","かりやすいろ","ja","3","7Y","8.5","7");
var cl_66 = new Color(66,"#fcf16e","黄檗色","きはだいろ","ja","3","9Y","8","8");
var cl_67 = new Color(67,"#6e6b41","海松色","みるいろ","ja","3","9.5Y","4.5","2.5");
var cl_68 = new Color(68,"#cbc547","鶸色","ひわいろ","ja","3","1GY","7.5","8");
var cl_80 = new Color(80,"#007b49","常磐色","ときわいろ","ja","3","3G","4.5","7");
var cl_81 = new Color(81,"#47845e","緑青色","ろくしょういろ","ja","3","4G","5","4");
var cl_88 = new Color(88,"#005344","鉄色","てついろ","ja","3","2.5BG","2.5","2.5");
var cl_92 = new Color(92,"#5ab9c1","新橋色","しんばしいろ","ja","3","2.5B","6.5","5.5");
var cl_95 = new Color(95,"#007c8a","納戸色","なんどいろ","ja","3","4B","4","6");
var cl_96 = new Color(96,"#94d6da","甕覗き","かめのぞき","ja","3","4.5B","7","4");
var cl_105 = new Color(105,"#267ca7","縹色","はなだいろ","ja","3","3PB","4","7.5");
var cl_117 = new Color(117,"#afb4db","藤色","ふじいろ","ja","3","10PB","6.5","6.5");
var cl_123 = new Color(123,"#6d5498","江戸紫","えどむらさき","ja","3","3P","3.5","7");
var cl_125 = new Color(125,"#7d5484","古代紫","こだいむらさき","ja","3","7.5P","4","6");
var cl_135 = new Color(135,"#a1a3a6","銀鼠","ぎんねず","ja","3","N","6.5","0");
var cl_136 = new Color(136,"#9d9087","茶鼠","ちゃねず","ja","3","5YR","6","1");
var cl_138 = new Color(138,"#54745c","利休鼠","りきゅうねず","ja","3","2.5G","5","1");
var cl_141 = new Color(141,"#684d44","煤竹色","すすたけいろ","ja","3","9.5YR","3.5","1.5");
var cl_149 = new Color(149,"#f5989d","ローズピンク","Rose pink","en","3","10RP","7","8");
var cl_153 = new Color(153,"#561b24","バーガンディー","Burgundy","en","3","10RP","2","2.5");
var cl_154 = new Color(154,"#d5848c","オールドローズ","Old Rose","en","3","1R","6","6.5");
var cl_161 = new Color(161,"#f04e58","ポピーレッド","Poppy Red","en","3","4R","5","14");
var cl_166 = new Color(166,"#691c1c","マルーン","Maroon","en","3","5R","2.5","6");
var cl_169 = new Color(169,"#b66655","テラコッタ","Terracotta","en","3","7.5R","4.5","8");
var cl_175 = new Color(175,"#ab5239","バーントシェンナ","Burnt Sienna","en","3","10R","4.5","7.5");
var cl_179 = new Color(179,"#d57a3d","ローシェンナ","Raw Sienna","en","3","4YR","5","9");
var cl_183 = new Color(183,"#b87644","タン","Tan","en","3","6YR","5","6");
var cl_186 = new Color(186,"#f4e0c4","エクルベージュ","Ecru Beige","en","3","7.5YR","8.5","4");
var cl_187 = new Color(187,"#fbb161","ゴールデンイエロー","Golden Yellow","en","3","7.5YR","7","10");
var cl_190 = new Color(190,"#b97e54","アンバー","Amber","en","3","8YR","5.5","6.5");
var cl_194 = new Color(194,"#76573c","バーントアンバー","Burnt Umber","en","3","10YR","3","3");
var cl_200 = new Color(200,"#89652b","ローアンバー","Raw Umber","en","3","2.5Y","4","6");
var cl_198 = new Color(198,"#ffd167","ネープルスイエロー","Naples Yellow","en","3","2.5Y","8","7.5");
var cl_204 = new Color(204,"#ffd800","ジョンブリアン","Jaune Brillant","en","3","5Y","8.5","14");
var cl_210 = new Color(210,"#d3e173","シャトルーズグリーン","Chartreuse Green","en","3","4GY","8","10");
var cl_211 = new Color(211,"#91ba58","リーフグリーン","Leaf Green","en","3","5GY","6","7");
var cl_212 = new Color(212,"#6d8346","グラスグリーン","Grass Green","en","3","5GY","5","5");
var cl_214 = new Color(214,"#96c78c","アップルグリーン","Apple Green","en","3","10GY","8","5");
var cl_215 = new Color(215,"#90ce9c","ミントグリーン","Mint Green","en","3","2.5G","7.5","8");
var cl_219 = new Color(219,"#009d5b","マラカイトグリーン","Malachite Green","en","3","4G","4.5","9");
var cl_220 = new Color(220,"#005739","ボトルグリーン","Bottle Green","en","3","5G","2.5","3");
var cl_225 = new Color(225,"#00ae9d","ピーコックグリーン","Peacock Green","en","3","7.5BG","4.5","9");
var cl_226 = new Color(226,"#279e91","ナイルブルー","Nile Blue","en","3","10BG","5.5","5");
var cl_233 = new Color(233,"#008caf","セルリアンブルー","Cerulean Blue","en","3","9B","4.5","9");
var cl_235 = new Color(235,"#2e87a1","サックスブルー","Saxe Blue","en","3","1PB","5","4.5");
var cl_240 = new Color(240,"#001f43","ミッドナイトブルー","Midnight Blue","en","3","5PB","1.5","2");
var cl_245 = new Color(245,"#8689c3","ウィスタリア","Wistaria","en","3","10PB","5","12");
var cl_251 = new Color(251,"#c7b2d6","ライラック","Lilac","en","3","6P","7","6");
var cl_266 = new Color(266,"#5d5d63","スレートグレイ","Slate Grey","en","3","2.5PB","3.5","0.5");
var cl_268 = new Color(268,"#221816","ランプブラック","Lamp Black","en","3","N","1","0");

// var cl3 = []
let cl_grade3 = [cl_3,cl_6,cl_7,cl_13,cl_15,cl_32,cl_35,cl_54,cl_55,cl_60,cl_69,cl_74,cl_85,cl_77,cl_86,cl_93,cl_99,cl_101,cl_107,cl_110,cl_115,cl_112,cl_126,cl_128,cl_129,cl_133,cl_152,cl_160,cl_159,cl_163,cl_167,cl_168,cl_170,cl_176,cl_178,cl_188,cl_192,cl_196,cl_195,cl_197,cl_203,cl_208,cl_205,cl_207,cl_209,cl_217,cl_218,cl_222,cl_228,cl_229,cl_231,cl_232,cl_234,cl_237,cl_242,cl_243,cl_248,cl_250,cl_249,cl_253,cl_254,cl_258,cl_267,cl_261]
let cl_grade2 = [cl_1,cl_5,cl_12,cl_20,cl_22,cl_23,cl_27,cl_34,cl_37,cl_45,cl_51,cl_56,cl_58,cl_65,cl_66,cl_67,cl_68,cl_80,cl_81,cl_88,cl_92,cl_95,cl_96,cl_105,cl_117,cl_123,cl_125,cl_135,cl_136,cl_138,cl_141,cl_149,cl_153,cl_154,cl_161,cl_166,cl_169,cl_175,cl_179,cl_183,cl_186,cl_187,cl_190,cl_194,cl_200,cl_198,cl_204,cl_210,cl_211,cl_212,cl_214,cl_215,cl_219,cl_220,cl_225,cl_226,cl_233,cl_235,cl_240,cl_245,cl_251,cl_266,cl_268]
let cl_all = cl_grade3.concat(cl_grade2)

var incomp_1 = [cl_99,cl_232]
var newLine = ['ピンク','ローズ','レッド','ゴールド','ベージュ','アンバー','シェンナ','イエロー','ブリアン','グリーン','ブルー','マリン','グレイ','ブラック','ディー']

function addSpan(e){
  for(i=0; i<(newLine.length); i++){
    if(e.indexOf(newLine[i]) > 0){return e.replace(newLine[i], "<span>" + newLine[i] + "</span>");break;}
    if(i == newLine.length - 1){return e;}
}}


//ソートプログラム
// var cl_g3_h = cl_grade3
//
// const hue_value = ["R","YR","Y","GY","G","BG","B","PB","P","RP","N"]
// $(function(){cl_g3_h.sort(function(first, second){
//   var h1 = first.hue.replace(/[0-9]|\./g, '')
//   var h2 = second.hue.replace(/[0-9]|\./g, '')
//   console.log(h1);
//   if (hue_value.indexOf(h1) > hue_value.indexOf(h2)){
//     return 1;console.log(hue_value.indexOf(h1));
//   }else if (hue_value.indexOf(h1) < hue_value.indexOf(h2)){
//     return -1;
//   }else if(first.hue.replace(/[^0-9]/g, '') > second.hue.replace(/[^0-9]/g, '')){
//     return 1;
//   }else if(first.hue.replace(/[^0-9]/g, '') < second.hue.replace(/[^0-9]/g, '')){
//     return -1;
//   }else{return 0}
// })
// console.log(cl_g3_h);
// })

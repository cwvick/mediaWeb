/*
***********************************************************
*
*　2014.06.26- by oga.
*
***********************************************************
*/
jQuery.noConflict();


/*グローバル変数*/
var speed0 = 6;
var speed1 = 0;
var mnavi00_speed = speed0;
var mnavi01_speed = speed0;
var mnavi02_speed = speed0;
var mnavi03_speed = speed0;
var mnavi04_speed = speed0;
var mnavi05_speed = speed0;
var mnavi06_speed = speed0;
var mnavi07_speed = speed0;


var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();
var ie8_flag = 0;
if (userAgent.indexOf("msie") > -1) {
	if (appVersion.indexOf("msie 8.0") > -1) {
		ie8_flag = 1;
	}
}



/*********************************************************************************************

DOM読込完了時

**********************************************************************************************/
jQuery(function(){
	
	
	//グローバルナビ開閉（smp）
	jQuery("#menu_sw").click(function () {
		//ナビ開閉
		jQuery(".type3 #gnavi ul").slideToggle(500);
		//背面表示／非表示 [android対策]
		//jQuery("#content").fadeToggle(1000);
	});

	//初期値は透明（蝶）
	// jQuery('#mnavi_hover ul li#mnavi_ho00 .icon2').animate({opacity: 0}, {duration: 0});
	// jQuery('#mnavi_hover ul li#mnavi_ho01 .icon2').animate({opacity: 0}, {duration: 0});
	// jQuery('#mnavi_hover ul li#mnavi_ho02 .icon2').animate({opacity: 0}, {duration: 0});
	// jQuery('#mnavi_hover ul li#mnavi_ho03 .icon2').animate({opacity: 0}, {duration: 0});
	// jQuery('#mnavi_hover ul li#mnavi_ho04 .icon2').animate({opacity: 0}, {duration: 0});
	// jQuery('#mnavi_hover ul li#mnavi_ho05 .icon2').animate({opacity: 0}, {duration: 0});
	// jQuery('#mnavi_hover ul li#mnavi_ho06 .icon2').animate({opacity: 0}, {duration: 0});
	// jQuery('#mnavi_hover ul li#mnavi_ho07 .icon2').animate({opacity: 0}, {duration: 0});
	
	
	
	//mnaviマウスオーバー処理
	jQuery("#mnavi_hover ul li#mnavi_ho00 a").hover(
		function(){
			mnavi00_speed = speed1;
			jQuery("#gnavi ul li#gnavi00").addClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho00 .icon2').animate({opacity: 1}, {duration: 500});
		},
		function(){
			mnavi00_speed = speed0;
			jQuery("#gnavi ul li#gnavi00").removeClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho00 .icon2').animate({opacity: 0}, {duration: 500});
		}
	);
	jQuery("#mnavi_hover ul li#mnavi_ho01 a").hover(
		function(){
			mnavi01_speed = speed1;
			jQuery("#gnavi ul li#gnavi01").addClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho01 .icon2').animate({opacity: 1}, {duration: 500});
		},
		function(){
			mnavi01_speed = speed0;
			jQuery("#gnavi ul li#gnavi01").removeClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho01 .icon2').animate({opacity: 0}, {duration: 500});
		}
	);
	jQuery("#mnavi_hover ul li#mnavi_ho02 a").hover(
		function(){
			mnavi02_speed = speed1;
			jQuery("#gnavi ul li#gnavi02").addClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho02 .icon2').animate({opacity: 1}, {duration: 500});
		},
		function(){
			mnavi02_speed = speed0;
			jQuery("#gnavi ul li#gnavi02").removeClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho02 .icon2').animate({opacity: 0}, {duration: 500});
		}
	);
	jQuery("#mnavi_hover ul li#mnavi_ho03 a").hover(
		function(){
			mnavi03_speed = speed1;
			jQuery("#gnavi ul li#gnavi03").addClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho03 .icon2').animate({opacity: 1}, {duration: 500});
		},
		function(){
			mnavi03_speed = speed0;
			jQuery("#gnavi ul li#gnavi03").removeClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho03 .icon2').animate({opacity: 0}, {duration: 500});
		}
	);
	jQuery("#mnavi_hover ul li#mnavi_ho04 a").hover(
		function(){
			mnavi04_speed = speed1;
			jQuery("#gnavi ul li#gnavi04").addClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho04 .icon2').animate({opacity: 1}, {duration: 500});
		},
		function(){
			mnavi04_speed = speed0;
			jQuery("#gnavi ul li#gnavi04").removeClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho04 .icon2').animate({opacity: 0}, {duration: 500});
		}
	);
	jQuery("#mnavi_hover ul li#mnavi_ho05 a").hover(
		function(){
			mnavi05_speed = speed1;
			jQuery("#gnavi ul li#gnavi05").addClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho05 .icon2').animate({opacity: 1}, {duration: 500});
		},
		function(){
			mnavi05_speed = speed0;
			jQuery("#gnavi ul li#gnavi05").removeClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho05 .icon2').animate({opacity: 0}, {duration: 500});
		}
	);
	jQuery("#mnavi_hover ul li#mnavi_ho06 a").hover(
		function(){
			mnavi06_speed = speed1;
			jQuery("#gnavi ul li#gnavi06").addClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho06 .icon2').animate({opacity: 1}, {duration: 500});
		},
		function(){
			mnavi06_speed = speed0;
			jQuery("#gnavi ul li#gnavi06").removeClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho06 .icon2').animate({opacity: 0}, {duration: 500});
		}
	);
	jQuery("#mnavi_hover ul li#mnavi_ho07 a").hover(
		function(){
			mnavi07_speed = speed1;
			jQuery("#gnavi ul li#gnavi07").addClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho07 .icon2').animate({opacity: 1}, {duration: 500});
		},
		function(){
			mnavi07_speed = speed0;
			jQuery("#gnavi ul li#gnavi07").removeClass("select");
			//蝶
			// jQuery('.type1 #mnavi_hover ul li#mnavi_ho07 .icon2').animate({opacity: 0}, {duration: 500});
		}
	);
	
	//ループ処理開始
	setInterval("loop()",8);//丸背景用
	// setInterval("loop2()",30);//丸前面用
	
	
	//トップページトピックス　クラス付加
	var list_count = 0;
	jQuery("#toppage #topics li").each(function(){
			var cname = "list" + list_count;
 			jQuery(this).addClass(cname);
			if(list_count > 2){
				list_count = 0;
			}else{
				list_count++;
			}
 		}	
 	)
	
	
	adjust_width();//サイズ調整
	
});


/*********************************************************************************************

サイズ変更時

**********************************************************************************************/
jQuery( window ).resize(function(){

	//adjust_width();//サイズ調整
	
	if(ie8_flag == 1){
		//IE8以下はサイズ固定
		jQuery("#header").css("width","1000");
		jQuery("#main").css("width","1000");
		jQuery("#footer").css("width","1000");
	}else{
		//IE8以外はサイズ変更対応
		adjust_width();//部品サイズ調整
	}

});


/*********************************************************************************************

タイプ変更時

**********************************************************************************************/
var _type="" ; //変更前のtypeを保存。
function type_chenge() {
	//typeが変更になった時、実行。
	switch(type){
		case 1:
			jQuery("#gnavi ul").show();
			break;
		case 2:
			break;
		case 3:
			jQuery("#gnavi ul").hide();
			break;
	}
	
}


/*********************************************************************************************

サイズ調整

**********************************************************************************************/
function adjust_width(){
	
	
	
	//ブラウザの横幅を調査しtypeを設定
	
	windowWidth = jQuery(window).width();
	if(windowWidth <= 640){/*480*/
		type = 3;//スマートフォン
	}else if(windowWidth <= 768){
		type = 1;//タブレット＆facebook
	}else{
		type = 1;//PC
	}	
	
	if(type != _type){
		type_chenge();
		_type = type;
	}

	//type class付加	
	switch(type){
		case 1:
			jQuery("body").removeClass("type2");
			jQuery("body").removeClass("type3");
			jQuery("body").addClass("type1");
			break;
		case 2:
			jQuery("body").removeClass("type1");
			jQuery("body").removeClass("type3");
			jQuery("body").addClass("type2");
			break;
		case 3:
			jQuery("body").removeClass("type1");
			jQuery("body").removeClass("type2");
			jQuery("body").addClass("type3");
			break;
	}
	
	
	
	//トップページ　ヘッダー縦幅調整
	switch(type){
		case 1:
			break;
		case 2:
			break;
		case 3:
			break;
	}


	
	
	/*****************************************
	javascriptレイアウト調整後、フェードイン
	******************************************/
	setTimeout(function(){
		jQuery('body').animate({opacity: 1}, {duration: 500});
	},10);
	
	
}


/*****************************************
ループ処理1
******************************************/
var anim_f00 = 0;
var anim_f01 = 0;
var anim_f02 = 0;
var anim_f03 = 0;
var anim_f04 = 0;
var anim_f05 = 0;
var anim_f06 = 0;
var anim_f07 = 0;

var anim_c00 = 0;
var anim_c01 = 0;
var anim_c02 = 0;
var anim_c03 = 0;
var anim_c04 = 0;
var anim_c05 = 0;
var anim_c06 = 0;
var anim_c07 = 0;



//////////////mnavi bg/////////////////

function loop() {
	var moveWidth = 170;
	jQuery('.type1 #mnavi_bg ul li#mnavi_bg00').css('background-position', -anim_f00*moveWidth -2 + 'px 0');
	jQuery('.type1 #mnavi_bg ul li#mnavi_bg01').css('background-position', -anim_f01*moveWidth -2 + 'px 0');
	jQuery('.type1 #mnavi_bg ul li#mnavi_bg02').css('background-position', -anim_f02*moveWidth -2 + 'px 0');
	jQuery('.type1 #mnavi_bg ul li#mnavi_bg03').css('background-position', -anim_f03*moveWidth -2 + 'px 0');
	jQuery('.type1 #mnavi_bg ul li#mnavi_bg04').css('background-position', -anim_f04*moveWidth -2 + 'px 0');
	jQuery('.type1 #mnavi_bg ul li#mnavi_bg05').css('background-position', -anim_f05*moveWidth -2 + 'px 0');
	jQuery('.type1 #mnavi_bg ul li#mnavi_bg06').css('background-position', -anim_f06*moveWidth -2 + 'px 0');
	jQuery('.type1 #mnavi_bg ul li#mnavi_bg07').css('background-position', -anim_f07*moveWidth -2 + 'px 0');
	
	
	if(anim_c00 > mnavi00_speed ){
		anim_f00++;
		anim_c00 = 0;
	}else{
		anim_c00++;
	}
	if(anim_c01 > mnavi01_speed ){
		anim_f01++;
		anim_c01 = 0;
	}else{
		anim_c01++;
	}
	if(anim_c02 > mnavi02_speed ){
		anim_f02++;
		anim_c02 = 0;
	}else{
		anim_c02++;
	}
	if(anim_c03 > mnavi03_speed ){
		anim_f03++;
		anim_c03 = 0;
	}else{
		anim_c03++;
	}
	if(anim_c04 > mnavi04_speed ){
		anim_f04++;
		anim_c04 = 0;
	}else{
		anim_c04++;
	}
	if(anim_c05 > mnavi05_speed ){
		anim_f05++;
		anim_c05 = 0;
	}else{
		anim_c05++;
	}
	if(anim_c06 > mnavi06_speed ){
		anim_f06++;
		anim_c06 = 0;
	}else{
		anim_c06++;
	}
	if(anim_c07 > mnavi07_speed ){
		anim_f07++;
		anim_c07 = 0;
	}else{
		anim_c07++;
	}

	if(anim_f02 > 48){
		anim_f02 = 0;
	}
	if(anim_f03 > 48){
		anim_f03 = 0;
	}
	if(anim_f04 > 48){
		anim_f04 = 0;
	}
	if(anim_f05 > 48){
		anim_f05 = 0;
	}
	if(anim_f06 > 48){
		anim_f06 = 0;
	}
	if(anim_f07 > 48){
		anim_f07 = 0;
	}
	


}


/*****************************************
ループ処理2
******************************************/
var hoverAnim0_1 = 0;//花開花
var hoverAnim1_1 = 0;//花開花
var hoverAnim2_1 = 0;//花開花
var hoverAnim3_1 = 0;//花開花
var hoverAnim4_1 = 0;//花開花
var hoverAnim5_1 = 0;//花開花
var hoverAnim6_1 = 0;//花開花
var hoverAnim7_1 = 0;//花開花

var hoverAnim0_2 = 0;//蝶
var hoverAnim1_2 = 0;//蝶
var hoverAnim2_2 = 0;//蝶
var hoverAnim3_2 = 0;//蝶
var hoverAnim4_2 = 0;//蝶
var hoverAnim5_2 = 0;//蝶
var hoverAnim6_2 = 0;//蝶
var hoverAnim7_2 = 0;//蝶

function loop2() {
	
	//////////////mnavi over/////////////////
	if(mnavi00_speed == speed1){
		//花開花
		if(hoverAnim0_1 < 9){
			hoverAnim0_1++;
		}
		//蝶
		if(hoverAnim0_2 < 49){
			hoverAnim0_2++;
		}else{
			hoverAnim0_2 = 0;
		}
	}
	if(mnavi01_speed == speed1){
		//花開花
		if(hoverAnim1_1 < 9){
			hoverAnim1_1++;
		}
		//蝶
		if(hoverAnim1_2 < 49){
			hoverAnim1_2++;
		}else{
			hoverAnim1_2 = 0;
		}
	}
	if(mnavi02_speed == speed1){
		//花開花
		if(hoverAnim2_1 < 9){
			hoverAnim2_1++;
		}
		//蝶
		if(hoverAnim2_2 < 49){
			hoverAnim2_2++;
		}else{
			hoverAnim2_2 = 0;
		}
	}
	if(mnavi03_speed == speed1){
		//花開花
		if(hoverAnim3_1 < 9){
			hoverAnim3_1++;
		}
		//蝶
		if(hoverAnim3_2 < 49){
			hoverAnim3_2++;
		}else{
			hoverAnim3_2 = 0;
		}
	}
	if(mnavi04_speed == speed1){
		//花開花
		if(hoverAnim4_1 < 9){
			hoverAnim4_1++;
		}
		//蝶
		if(hoverAnim4_2 < 49){
			hoverAnim4_2++;
		}else{
			hoverAnim4_2 = 0;
		}
	}
	if(mnavi05_speed == speed1){
		//花開花
		if(hoverAnim5_1 < 9){
			hoverAnim5_1++;
		}
		//蝶
		if(hoverAnim5_2 < 49){
			hoverAnim5_2++;
		}else{
			hoverAnim5_2 = 0;
		}
	}
	if(mnavi06_speed == speed1){
		//花開花
		if(hoverAnim6_1 < 9){
			hoverAnim6_1++;
		}
		//蝶
		if(hoverAnim6_2 < 49){
			hoverAnim6_2++;
		}else{
			hoverAnim6_2 = 0;
		}
	}
	if(mnavi07_speed == speed1){
		//花開花
		if(hoverAnim7_1 < 9){
			hoverAnim7_1++;
		}
		//蝶
		if(hoverAnim7_2 < 49){
			hoverAnim7_2++;
		}else{
			hoverAnim7_2 = 0;
		}
	}
	
	//////////////mnavi out/////////////////
	if(mnavi00_speed == speed0){
		//花開花
		if(hoverAnim0_1 > 0){
			hoverAnim0_1--;
		}
	}
	if(mnavi01_speed == speed0){
		//花開花
		if(hoverAnim1_1 > 0){
			hoverAnim1_1--;
		}
	}
	if(mnavi02_speed == speed0){
		//花開花
		if(hoverAnim2_1 > 0){
			hoverAnim2_1--;
		}
	}
	if(mnavi03_speed == speed0){
		//花開花
		if(hoverAnim3_1 > 0){
			hoverAnim3_1--;
		}
	}
	if(mnavi04_speed == speed0){
		//花開花
		if(hoverAnim4_1 > 0){
			hoverAnim4_1--;
		}
	}
	if(mnavi05_speed == speed0){
		//花開花
		if(hoverAnim5_1 > 0){
			hoverAnim5_1--;
		}
	}
	if(mnavi06_speed == speed0){
		//花開花
		if(hoverAnim6_1 > 0){
			hoverAnim6_1--;
		}
	}
	if(mnavi07_speed == speed0){
		//花開花
		if(hoverAnim7_1 > 0){
			hoverAnim7_1--;
		}
	}
	
	var moveWidth = 127;
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho00 .icon1').css('background-position',-hoverAnim0_1*moveWidth);
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho01 .icon1').css('background-position',-hoverAnim1_1*moveWidth);
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho02 .icon1').css('background-position',-hoverAnim2_1*moveWidth);
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho03 .icon1').css('background-position',-hoverAnim3_1*moveWidth);
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho04 .icon1').css('background-position',-hoverAnim4_1*moveWidth);
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho05 .icon1').css('background-position',-hoverAnim5_1*moveWidth);
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho06 .icon1').css('background-position',-hoverAnim6_1*moveWidth);
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho07 .icon1').css('background-position',-hoverAnim7_1*moveWidth);
	
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho00 .icon2').css('background-position',-hoverAnim0_2*moveWidth);
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho01 .icon2').css('background-position',-hoverAnim1_2*moveWidth);
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho02 .icon2').css('background-position',-hoverAnim2_2*moveWidth);
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho03 .icon2').css('background-position',-hoverAnim3_2*moveWidth);
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho04 .icon2').css('background-position',-hoverAnim4_2*moveWidth);
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho05 .icon2').css('background-position',-hoverAnim5_2*moveWidth);
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho06 .icon2').css('background-position',-hoverAnim6_2*moveWidth);
	jQuery('.type1 #mnavi_hover ul li#mnavi_ho07 .icon2').css('background-position',-hoverAnim7_2*moveWidth);
	
	
	
}

/*****************************************
メンバーエリア html5 placeholder 未対応対策
******************************************/
jQuery(function () {
  var supportsInputAttribute = function (attr) {
    var input = document.createElement('input');
    return attr in input;
  };
  if (!supportsInputAttribute('placeholder')) {
    jQuery('[placeholder]').each(function () {
      var
        input = jQuery(this),
        placeholderText = input.attr('placeholder'),
        placeholderColor = 'GrayText',
        defaultColor = input.css('color');
      input.
        focus(function () {
          if (input.val() === placeholderText) {
            input.val('').css('color', defaultColor);
          }
        }).
        blur(function () {
          if (input.val() === '') {
            input.val(placeholderText).css('color', placeholderColor);
          } else if (input.val() === placeholderText) {
            input.css('color', placeholderColor);
          }
        }).
        blur().
        parents('form').
          submit(function () {
            if (input.val() === placeholderText) {
              input.val('');
            }
          });
    });
  }
});
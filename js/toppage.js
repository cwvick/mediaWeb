/*
***********************************************************
*
*　2014.06.26- by oga.
*
***********************************************************
*/
jQuery.noConflict();


/*********************************************************************************************

画像読込

**********************************************************************************************/
preload = function(){
    for(var i = 0; i<arguments.length; i++){
        jQuery("<img>").attr("src", arguments[i]);
    }
};
preload(
	"images/common/gnavi_sel/gnavi01.png",
	"images/common/gnavi_sel/gnavi02.png",
	"images/common/gnavi_sel/gnavi03.png",
	"images/common/gnavi_sel/gnavi04.png",
	"images/common/gnavi_sel/gnavi05.png",
	"images/common/gnavi_sel/gnavi06.png",
	"images/common/gnavi_sel/gnavi07.png"
);


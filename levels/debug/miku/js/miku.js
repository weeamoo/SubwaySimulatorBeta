//makes container var for level data
lvlData.debug.miku = [];

lvlData.debug.miku.width = 48000;
lvlData.debug.miku.height = 900;	
lvlData.debug.miku.css = "/levels/debug/miku/css/miku.css";
lvlData.debug.miku.geo = function (x, y, dir) {player.speedLimit = 25;return 0;};
lvlData.debug.miku.bg1 = "<table id=\"gridMikuLevel\" cellspacing=\"0\"><tbody><tr><td><img id=\"backMikuPic1\" class=\"backMikuPic\" src=\"/levels/debug/miku/img/miku1.png\"></td><td><img id=\"backMikuPic2\" class=\"backMikuPic\" src=\"/levels/debug/miku/img/miku2.jpg\"></td><td><img id=\"backMikuPic3\" class=\"backMikuPic\" src=\"/levels/debug/miku/img/miku3.jpg\"></td><td><img id=\"backMikuPic4\" class=\"backMikuPic\" src=\"/levels/debug/miku/img/miku4.jpg\"></td><td><img id=\"backMikuPic5\" class=\"backMikuPic\" src=\"/levels/debug/miku/img/miku5.jpg\"></td></tr></tbody></table><iframe src=\"https://www.youtube-nocookie.com/embed/NocXEwsJGOQ?autoplay=1&amp;controls=0&amp;loop=1\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"\" width=\"0px\" height=\"0px\" frameborder=\"0\"></iframe>";
lvlData.debug.miku.bg2 = "";
lvlData.debug.miku.bg3 = "";
lvlData.debug.miku.bg4 = "";
lvlData.debug.miku.bg5 = "";
lvlData.debug.miku.fg1 = "";
lvlData.debug.miku.fg2 = "";
lvlData.debug.miku.fg3 = "";
lvlData.debug.miku.fg4 = "";
lvlData.debug.miku.fg5 = "";
lvlData.debug.miku.sfg1 = "";

//factor of 0 will sync it to the car and essentially make a still image of it
//factor of 1 will make it move with the background
//anything in between is in between

lvlData.debug.miku.bg1factor = 1;
lvlData.debug.miku.bg2factor = 1;
lvlData.debug.miku.bg3factor = 1;
lvlData.debug.miku.bg4factor = 1;
lvlData.debug.miku.bg5factor = 1;
lvlData.debug.miku.fg1factor = 1;
lvlData.debug.miku.fg2factor = 1;
lvlData.debug.miku.fg3factor = 1;
lvlData.debug.miku.fg4factor = 1;
lvlData.debug.miku.fg5factor = 1;
lvlData.debug.miku.sfg1factor = 1;
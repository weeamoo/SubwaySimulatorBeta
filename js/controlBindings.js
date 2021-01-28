//hide or show binding menu
function showBindMenu () {
    document.getElementById('controlBindingsMenu').classList.remove("invis");
}

function unShowBindMenu () {
    document.getElementById('controlBindingsMenu').classList.add("invis");
}
//creates empty array to hold description of each keycode
var keyCodeLookup = [];

//add known codes in numeric order plz
keyCodeLookup[8] = "Backspace";
keyCodeLookup[9] = "Tab";
keyCodeLookup[13] = "Enter";
keyCodeLookup[16] = "Shift";
keyCodeLookup[17] = "Ctrl";
keyCodeLookup[18] = "Alt";
keyCodeLookup[20] = "Caps";
keyCodeLookup[27] = "Escape";
keyCodeLookup[32] = "Space";
keyCodeLookup[37] = "Left Arrow";
keyCodeLookup[38] = "Up Arrow";
keyCodeLookup[39] = "Right Arrow";
keyCodeLookup[40] = "Down Arrow";
keyCodeLookup[48] = "0";
keyCodeLookup[49] = "1";
keyCodeLookup[50] = "2";
keyCodeLookup[51] = "3";
keyCodeLookup[52] = "4";
keyCodeLookup[53] = "5";
keyCodeLookup[54] = "6";
keyCodeLookup[55] = "7";
keyCodeLookup[56] = "8";
keyCodeLookup[57] = "9";
keyCodeLookup[59] = "\: \:";
keyCodeLookup[61] = "+=";
keyCodeLookup[69] = "A";
keyCodeLookup[66] = "B";
keyCodeLookup[67] = "C";
keyCodeLookup[68] = "D";
keyCodeLookup[69] = "E";
keyCodeLookup[70] = "F";
keyCodeLookup[71] = "G";
keyCodeLookup[72] = "H";
keyCodeLookup[73] = "I";
keyCodeLookup[74] = "J";
keyCodeLookup[75] = "K";
keyCodeLookup[76] = "L";
keyCodeLookup[77] = "M";
keyCodeLookup[78] = "N";
keyCodeLookup[79] = "O";
keyCodeLookup[80] = "P";
keyCodeLookup[81] = "Q";
keyCodeLookup[82] = "R";
keyCodeLookup[83] = "S";
keyCodeLookup[84] = "T";
keyCodeLookup[85] = "U";
keyCodeLookup[86] = "V";
keyCodeLookup[87] = "W";
keyCodeLookup[88] = "X";
keyCodeLookup[89] = "Y";
keyCodeLookup[90] = "Z";
keyCodeLookup[91] = "Pengu";
keyCodeLookup[92] = "Pengu2";
keyCodeLookup[96] = "NUM 0";
keyCodeLookup[97] = "NUM 1";
keyCodeLookup[98] = "NUM 2";
keyCodeLookup[99] = "NUM 3";
keyCodeLookup[100] = "NUM 4";
keyCodeLookup[101] = "NUM 5";
keyCodeLookup[102] = "NUM 6";
keyCodeLookup[103] = "NUM 7";
keyCodeLookup[104] = "NUM 8";
keyCodeLookup[105] = "NUM 9";
keyCodeLookup[109] = "NUM -";
keyCodeLookup[112] = "F1";
keyCodeLookup[113] = "F2";
keyCodeLookup[114] = "F3";
keyCodeLookup[115] = "F4";
keyCodeLookup[116] = "F5";
keyCodeLookup[117] = "F6";
keyCodeLookup[118] = "F7";
keyCodeLookup[119] = "F8";
keyCodeLookup[120] = "F9";
keyCodeLookup[121] = "F10";
keyCodeLookup[122] = "F11";
keyCodeLookup[123] = "F12";
keyCodeLookup[173] = "-_";
keyCodeLookup[192] = "~`";
keyCodeLookup[219] = "\{ \[";
keyCodeLookup[220] = "\\ \|";
keyCodeLookup[221] = "\] \}";
keyCodeLookup[222] = "\" \'";

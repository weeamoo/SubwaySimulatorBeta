//vars
//vars used to talk to input script for binding
var lastKey = 0;
var bindMenuOpen = false;
var tableBuilding = "";
var rowBuilding = "";
var loopControlStorageA = "";
var loopControlStorageB = "";
var loopControlStorageC = "";

//just changes the bind
function bind (key, bindName) {
    //key is js keycode
    //bind is bind name
    eval(bindName + " = " + key + ";");
    //updates binding menu
    refreshKeyBindMenu();
}

//hide or show binding menu
function showBindMenu () {
    updateLastPressDisplay();
    refreshKeyBindMenu();
    document.getElementById('controlBindingsMenu').classList.remove("invis");
    bindMenuOpen = true;
}

function unShowBindMenu () {
    document.getElementById('controlBindingsMenu').classList.add("invis");
    bindMenuOpen = false;
}

//update lastpress key display
function updateLastPressDisplay () {
    document.getElementById("lastKeyPressTableH1KeyName").innerHTML = keyCodeLookup[lastKey];
    document.getElementById("lastKeyPressTableH1KeyCode").innerHTML = lastKey;
}

//updates key bindings menu
//ready :)
function refreshKeyBindMenu () {
    //initial control binding table value
    // "<tbody><tr><td><h1 id=\"controlBindingsTableH1\" class=\"controlBindingsTableHeaderCell\">Control</h1></td><td><h1 id=\"controlBindingsTableH1\" class=\"controlBindingsTableHeaderCell\">Bind 1</h1></td><td><h1 id=\"controlBindingsTableH1\" class=\"controlBindingsTableHeaderCell\">Bind 2</h1></td><td><h1 id=\"controlBindingsTableH1\" class=\"controlBindingsTableHeaderCell\">Bind 3</h1></td></tr><tr><td><h1 id=\"controlBindingsTableH1TestLabel\" class=\"controlBindingsTableCell\">Control</h1></td><td><a onclick=\"bind(lastKey, &quot;input.test.a&quot;);\"><h1 id=\"controlBindingsTableH1TestA\" class=\"controlBindingsTableCell\">Bind 1</h1></a></td><td><a onclick=\"bind(lastKey, &quot;input.test.b&quot;);\"><h1 id=\"controlBindingsTableH1TestB\" class=\"controlBindingsTableCell\">Bind 2</h1></a></td><td><a onclick=\"bind(lastKey, &quot;input.test.c&quot;);\"><h1 id=\"controlBindingsTableH1TestC\" class=\"controlBindingsTableCell\">Bind 3</h1></a></td></tr></tbody>"

    tableBuilding = "<tbody><tr><td><h1 id=\"controlBindingsTableH1\" class=\"controlBindingsTableHeaderCell\">Control</h1></td><td><h1 id=\"controlBindingsTableH1\" class=\"controlBindingsTableHeaderCell\">Bind 1</h1></td><td><h1 id=\"controlBindingsTableH1\" class=\"controlBindingsTableHeaderCell\">Bind 2</h1></td><td><h1 id=\"controlBindingsTableH1\" class=\"controlBindingsTableHeaderCell\">Bind 3</h1></td></tr>";
    
    for (var property in input) {
        console.log(`${property}: ${input[property]}`);
        //needs to make this "<tr><td><h1 id=\"controlBindingsTableH1TestLabel\" class=\"controlBindingsTableCell\">Control</h1></td><td><a onclick=\"bind(lastKey, &quot;input.test.a&quot;);\"><h1 id=\"controlBindingsTableH1TestA\" class=\"controlBindingsTableCell\">Bind 1</h1></a></td><td><a onclick=\"bind(lastKey, &quot;input.test.b&quot;);\"><h1 id=\"controlBindingsTableH1TestB\" class=\"controlBindingsTableCell\">Bind 2</h1></a></td><td><a onclick=\"bind(lastKey, &quot;input.test.c&quot;);\"><h1 id=\"controlBindingsTableH1TestC\" class=\"controlBindingsTableCell\">Bind 3</h1></a></td></tr>"
        
        //translates keycodes to english (or not if translation is unavaible)
        eval("loopControlStorageA = keyToEng(input." + property + ".a);");
        eval("loopControlStorageB = keyToEng(input." + property + ".b);");
        eval("loopControlStorageC = keyToEng(input." + property + ".c);");
        
        rowBuilding = "<tr><td><h1 id=\"controlBindingsTableH1" + property + "Label\" class=\"controlBindingsTableCell\">" + property + "</h1></td><td><a onclick=\"bind(lastKey, &quot;input." + property + ".a&quot;);\"><h1 id=\"controlBindingsTableH1" + property + "A\" class=\"controlBindingsTableCell\">" + loopControlStorageA + "</h1></a></td><td><a onclick=\"bind(lastKey, &quot;input." + property + ".b&quot;);\"><h1 id=\"controlBindingsTableH1" + property + "B\" class=\"controlBindingsTableCell\">" + loopControlStorageB + "</h1></a></td><td><a onclick=\"bind(lastKey, &quot;input." + property + ".c&quot;);\"><h1 id=\"controlBindingsTableH1" + property + "C\" class=\"controlBindingsTableCell\">" + loopControlStorageC + "</h1></a></td></tr>";

        tableBuilding = tableBuilding + rowBuilding;

    }

    tableBuilding = tableBuilding + "</tbody>";

    document.getElementById("controlBindingsTable").innerHTML = tableBuilding;
}

//convert keycode to english if possible
function keyToEng (key) {
    if (keyCodeLookup[key] == undefined ) {
        return "JS " + key;
    } else {
        return keyCodeLookup[key];
    }
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
keyCodeLookup[19] = "Pause";
keyCodeLookup[20] = "Caps";
keyCodeLookup[27] = "Escape";
keyCodeLookup[32] = "Space";
keyCodeLookup[33] = "Pg Up";
keyCodeLookup[34] = "Pg Dn";
keyCodeLookup[35] = "End";
keyCodeLookup[36] = "Home";
keyCodeLookup[37] = "Left Arrow";
keyCodeLookup[38] = "Up Arrow";
keyCodeLookup[39] = "Right Arrow";
keyCodeLookup[40] = "Down Arrow";
keyCodeLookup[45] = "Ins";
keyCodeLookup[46] = "Del";
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
keyCodeLookup[59] = "\: \;";
keyCodeLookup[61] = "+=";
keyCodeLookup[65] = "A";
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
keyCodeLookup[93] = "Menu";
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
keyCodeLookup[106] = "NUM *";
keyCodeLookup[107] = "NUM +";
keyCodeLookup[109] = "NUM -";
keyCodeLookup[110] = "NUM .";
keyCodeLookup[111] = "NUM /";
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
keyCodeLookup[124] = "F13";
keyCodeLookup[125] = "F14";
keyCodeLookup[126] = "F15";
keyCodeLookup[127] = "F16";
keyCodeLookup[128] = "F17";
keyCodeLookup[129] = "F18";
keyCodeLookup[130] = "F19";
keyCodeLookup[131] = "F20";
keyCodeLookup[132] = "F21";
keyCodeLookup[133] = "F22";
keyCodeLookup[134] = "F23";
keyCodeLookup[135] = "F24";
keyCodeLookup[144] = "Num Lock";
keyCodeLookup[145] = "Scrl Lock";
keyCodeLookup[173] = "-_";
keyCodeLookup[192] = "~`";
keyCodeLookup[219] = "\{ \[";
keyCodeLookup[220] = "\\ \|";
keyCodeLookup[221] = "\] \}";
keyCodeLookup[222] = "\" \'";

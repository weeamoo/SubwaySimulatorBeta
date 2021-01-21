//level data values

//values in game units
var levelWidth = 4800;
var levelHeight = 900;

/* this function is essentially the geometry sliced by the if or switch statement */

function getNearestRail (x, y) {

	var outY;
	
	switch (true) {

		/*x coord starts at zero */

    		case (x < 900):
        		
    			outY = 500;

        		break;
    		case (x < 1100):
        		
    			outY = 500;

        		break;
    		case (x < 1300):
        		
    			outY = 500

        		break;
    		default:
        		
        		outY = 500;

           	break;
	}


	/* outputs y coord of nearest rail */
	return outY;
}

//calls for bounds to be calced after loading level
calcBounds();

// Search & Sort Functions Library

// LINEAR SEARCH FUNCTION CRITERIA
// Search the anArray argument for the item argument using the linear search algorithm.
// If item found, return index where found, else return -1.
function linearSearch(anArray, item) {
    for(i = 0; i <= anArray.length - 1; i++ ){
        if(anArray[i] == item){
            return i;
        }
    }
    return -1;
}

// BINARY SEARCH FUNCTION CRITERIA
// Search anArray for the item using the binary search algorithm.
// If item found, return index where found, else return -1.
function binarySearch(anArray, item) {
    let UI = anArray.length - 1
    let LI = 0 
    while(UI >= LI){
        let MI = Math.floor((UI + LI)/2)   
        if(item == anArray[MI]){
            return MI;
        } else if(item < anArray[MI]){
            UI = MI - 1;
        } else {
            LI = MI + 1;
        }
    }
    return -1;
}
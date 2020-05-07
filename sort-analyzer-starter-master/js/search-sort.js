// Library of Search & Sort Functions

// Use Bubble Sort algorithm to sort array argument
function bubbleSort(anArray) {
    for(let i = 0; i < anArray.length; i++){
        for(let a = 0; a < anArray.length; a++){
            if(anArray[a] > anArray[a+1]){
                let initialValue = anArray[a];
                anArray[a] = anArray[a+1];
                anArray[a+1] = initialValue;
            }
        }
    }
}

// Use Selection Sort algorithm to sort array argument
function selectionSort(anArray) {
    for(let i = 0; i < anArray.length; i++){
        let minPosition = i
        for(let a = minPosition + 1; a < anArray.length; a++){
            if(anArray[a] < anArray[minPosition]){
                 minPosition = a
            }
        }
        let initialValue = anArray[minPosition]
        anArray[minPosition] = anArray[i]
        anArray[i] = initialValue
    }
}

// Use Insertion Sort algorithm to sort array argument
function insertionSort(anArray) {
    for(let i = 1; i < anArray.length; i++){
        let value = anArray[i]
        let pos = i - 1
        while(pos >= 0 && anArray[pos] > value){
            anArray[pos + 1] = anArray[pos]
            pos-- 
        }
        anArray[pos + 1] = value
    }
}
function bubbleSort(value) {   
    let array_numbers = value;
   
    for (let i=0; i < array_numbers.length; i++) {
        for (let j=0; j < array_numbers.length - i - 1; j++) {
            if (array_numbers[j] > array_numbers[j + 1]) {
                let tmp = array_numbers[j];
                array_numbers[j] = array_numbers[j + 1];
                array_numbers[j + 1] = tmp;
            } 
        }
    }

    console.log(array_numbers);
}

bubbleSort([1,4,2,5,9,4,3,8,9,4,0]);
bubbleSort([9,8,7,5,4,2,1]);
bubbleSort([7, 4, 5, 1, 5, 97, 4564, 25, 4577, 0, 6,]);
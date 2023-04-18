export class BubbleSortByStep {
    static list: number[] = [8,3,6,1,4,10,2,50];
    static bubbleSortByStep(list: number[]) {
        let needNextPass = true;
        for (let i = 1; i < list.length && needNextPass; i++) {
            needNextPass = false;
            for (let j = 0; j < list.length - i; j++) {
                if (list[j] > list[j + 1]) {
                    console.log(`Swap ${list[j]} with ${list[j + 1]}`)
                    let temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                    needNextPass = true;
                }
            }
            if (!needNextPass) {
                console.log('Array may be sorted and next pass not needed');
                break;
            }
            console.log(`List after the ${i}' sort:`);
            for (let k = 0; k < list.length; k++) {
                console.log(list[k] + "\t");
            }
            // console.log();
        }
    }
}
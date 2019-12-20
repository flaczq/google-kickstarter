console.log('* ============ *');
console.log('* Book Reading *');

const input: Array<Array<number>> = [
    [3],
    [11, 1, 2],
    [8],
    [2, 3],
    [11, 11, 11],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [1000, 6, 1],
    [4, 8, 15, 16, 23, 42],
    [1]
];

console.log(`** Input: [${input.join('], [')}]`);

const T: number = input[0][0]; // test cases
let N: number;  // book pages
let M: number;  // torn out pages
let Q: number;  // lazy readers
let P: Array<number>;  // numbers of turn out pages
let R: Array<number>;  // multiplied numbers of read pages
let result: number; // number of pages read for current test case

for (let testCase = 0; testCase < T; testCase++) {
    let i: number = 3 * testCase + 1;
    result = 0;

    N = input[i][0];
    M = input[i][1];
    Q = input[i][2];
    P = input[i + 1];
    R = input[i + 2];

    for (let page = 1; page <= N; page++) {
        if (P.indexOf(page) == -1) {
            let isMultiplied: boolean = false;
            R.forEach(multipliedPage => {
                if (page % multipliedPage == 0) {
                    result++;
                }
            });
        }
    }

    console.log(`** Output: Case #${testCase + 1}: ${result}`);
}

console.log('* Book Reading *');
console.log('* ============ *');
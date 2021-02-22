// const obj = {
//     name: "sumit",
//     age: 29
// }

// const { name, age } = obj;
// console.log(name, age);

// let a = [1, 2, 3];
// let b = [4];

// const obj1 = {
//     ...obj,
//     intersets: ['volleyball', 'cricket']
// }

// function m(...a) {

//     console.log(a[4]);
// }
// m('a', 1, 2, 3, [23, 23, 23, 23, 2]);


async function getValue() {
    let arr;

    return new Promise((res, rej) => {
        setTimeout(() => {
            res([1, 2, 3, 4]);
        }, 2000);

    });


    return await arr.filter(a => a % 2 == 0);

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log("sending value");
    //         resolve(1);
    //     }, 2000);

    // });
}
async function getVal() {
    let result = await getValue();
    console.log("after result" + result);
}

getVal();
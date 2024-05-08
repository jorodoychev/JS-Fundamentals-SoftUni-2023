function distinctArray(arr) {

    let sortedArr = arr.filter((x, i, a) => a.indexOf(x) === i);

    console.log(sortedArr.join(' '));

}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
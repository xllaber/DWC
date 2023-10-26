function dateComparator(date1, date2){
    const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
    let result = parseInt(date1.split("-").reverse().join("")) > parseInt(date2.split("-").reverse().join(""))
                        ? "Date 1 is bigger" : "Date 2 is bigger";
    // let result2 = pipe(
    //     split("-"),
    //     reverse,
    //     join("")
    // )(date1);
    console.log(result);

    console.log(date1 > date2);
    console.log([1, 2, 3, 4, 5, 6].reduce((a,n) => a += n, 0));
}
dateComparator('06-12-2000', '06-12-2004')

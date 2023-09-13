function convert(n, m) {
    n = Number(n);
    m = Number(m);
    return [n, m];
}

function add(n, m) {
    let result = 0;

    for (let i = n; i <= m; i++) {
        result += i;
    }
    return result;
}

const [n, m] = convert('1', '5');
console.log(add(n, m));

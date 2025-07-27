const fibonacci = function(n) {
    if (typeof n === 'string') n = Number(n);

    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0;
    let next = 1;
    let current;

    for (let i = 2; i <= n; i++) {
        current = prev + next;
        prev = next;
        next = current;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;

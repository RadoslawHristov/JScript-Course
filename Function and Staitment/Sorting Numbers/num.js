function sorted (input) {
    input.sort((a,b) => a-b);
    let output = [];

    while (input.length > 0) {
        output.push(input.shift());
        output.push(input.pop());
    }
    return output;
}

sorted([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
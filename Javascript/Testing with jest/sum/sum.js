function sum(data1In,data2) {
    let data1 = JSON.parse(JSON.stringify(data1In));
    data1.base = data2;

    return data1;
}

module.exports = sum;
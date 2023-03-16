let h1={
    h1 : 'h1',
    h2 : {
        h3 : {
            h3: 'h3',
            h4 : {
                h4: 'h4',
                h5 : 'a'
            }
        }
    }
}

let response = h1?.h2?.h3?.h4?.h5;
console.log(response);


function fitsInOneBox(boxes) {
    let fitsIn = (c1, c2) => (c1.l < c2.l) && (c1.w < c2.w) && (c1.h < c2.h);
    
    return fitsIn(boxes[0],boxes[1]);
}

let case1 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ];

test('Dataset 1', () => {
    expect(fitsInOneBox(case1)).toBe(true);
});

let case2 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ];

test('Dataset 2', () => {
    expect(fitsInOneBox(case1)).toBe(true);
});

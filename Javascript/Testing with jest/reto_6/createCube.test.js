const createCube = require('./createCube');
test('cubo de dimensión 1', () => {
    let cube1 =   
    "/\\_\\\n"+
    "\\/_/"
    expect(createCube(1)).toBe(cube1);
});

test('cubo de dimensión 3', () => {
    let cube3 =   
    "  /\\_\\_\\_\\\n"+
    " /\\/\\_\\_\\_\\\n"+
    "/\\/\\/\\_\\_\\_\\\n"+
    "\\/\\/\\/_/_/_/\n"+
    " \\/\\/_/_/_/\n"+
    "  \\/_/_/_/"
    expect(createCube(3)).toBe(cube3);
});

console.log(createCube(6));
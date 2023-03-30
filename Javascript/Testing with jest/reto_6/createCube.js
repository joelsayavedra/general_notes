function createCube(size) {
    let cube =  '';

    for (let i = 0; i < size; i++) {
        cube+=" ".repeat(size-1-i)+"/\\".repeat(i+1)+"_\\".repeat(size);
        cube+="\n";
    }

    for (let i = size-1; i >= 0; i--) {
        cube+=" ".repeat(size-1-i)+"\\/".repeat(i+1)+"_/".repeat(size);
        if(i >0){
            cube+="\n";
        }
    }
    return cube
}

module.exports = createCube;
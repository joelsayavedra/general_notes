/** Objeto de  */
let estilos = {
    normal: 'color: blue; font-size: 15px',
    error: 'color: red; font-size: 15px',
}
estilos.log = function (msg, variable = '', style = estilos.normal) {
    console.log('%c' + msg, style, variable);
}

let variable = {
    a: 1
};

estilos.log('sólo mensaje');
estilos.log('mensaje con variable', variable, estilos.normal);
estilos.log('mensaje con variable', undefined, estilos.error);

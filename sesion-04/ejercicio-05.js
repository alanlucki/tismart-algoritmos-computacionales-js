
// Recursividad
const imprimir = (x) =>{
    console.log(x)
}

const int = (x) => {
    return parseInt(x)
}

const unidades=(x)=>{

    if( x == 1 ) return 'I'
    if( x == 2 ) return 'II'
    if( x == 3 ) return 'III'
    if( x == 4 ) return 'IV'
    if( x == 5 ) return 'V'
    if( x == 6 ) return 'VI'
    if( x == 7 ) return 'VII'
    if( x == 8 ) return 'VIII'
    if( x == 9 ) return 'IX'
    if( x == 0 ) return ''
}

const decenas=(x)=>{

    if( x == 1 ) return 'X'
    if( x == 2 ) return 'XX'
    if( x == 3 ) return 'XXX'
    if( x == 4 ) return 'XL'
    if( x == 5 ) return 'L'
    if( x == 6 ) return 'LX'
    if( x == 7 ) return 'LXX'
    if( x == 8 ) return 'LXXX'
    if( x == 9 ) return 'XC'
    if( x == 0 ) return ''
}
const centena=(x)=>{

    if( x == 1 ) return 'C'
    if( x == 2 ) return 'C'
    if( x == 3 ) return 'CCC'
    if( x == 4 ) return 'CD'
    if( x == 5 ) return 'D'
    if( x == 6 ) return 'DC'
    if( x == 7 ) return 'DCC'
    if( x == 8 ) return 'DCCC'
    if( x == 9 ) return 'CM'
    if( x == 0 ) return ''
}
const numerosRomanos=(x)=>{
    // 46546546 % 10 = 6
    // 465465,46 = x / 10 

    const uni = x % 10
    const dec = int( x / 10 ) % 10
    const cen  = int( x / 100 ) % 10

    return ( ( cen > 0 )? centena(cen): ''  ) + ( ( dec > 0 )? decenas(dec): ''  ) + '' + unidades(uni)
}
const main = () =>{
    // Numeros Romanos
    /*

    1  = I
    2  = II
    3  = III
    4  = IV
    5  = V
    6  = VI
    7  = VII
    8  = VIII
    9  = IX
    10 = X

    */

    for (let i = 1; i < 1000; i++) {
        
       imprimir( i + ' = ' + numerosRomanos( i ))

    }

}

main()
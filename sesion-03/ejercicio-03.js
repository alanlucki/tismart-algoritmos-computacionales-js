// crear un algoritmo factorial de numero
/*
0! = 1 
1! = 1  
2! = 2 = 2 * 1!
3! = 6 = 3 * 2!
4! = 24 = 4 * 3!
5! = 120 = 5 * 4!
...
n! = n * ( n - 1)! 
*/
const imprimir = (x) =>{
    console.log(x)
}

const factorial = ( n ) =>{

    f = 1
    for( i = 1 ; i <= n ; i++ ){  
        f = f * i
        imprimir( i + '!= ' + f )
    }
}

factorial( 5 )
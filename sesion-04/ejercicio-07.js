const imprimir = (x) => {
    console.log(x)
}

const getAleatorioEntre = (x, y) => {
    // Math.random()    
    return Math.round(x + (y - x) * Math.random())
}

const generarVector = (n) => {
    v = Array(n)
    for (i = 0; i < n; i++) {
        v[i] = getAleatorioEntre(10, 99)
    }
    return v
}

const ordenaVector = (v) => {


    for (let i = 0; i < v.length; i++) {

        menor = v[i]

        for (let j = i; j < v.length; j++) {

            if (v[j] < menor) {

                temp = menor
                menor = v[j]
                v[j] = temp

            }

        }

        v[i] = menor


    }

    return v
}

function main() {

    vd = generarVector(20)
    imprimir(vd)

    vo = ordenaVector(vd)
    imprimir(vo)

}

main()
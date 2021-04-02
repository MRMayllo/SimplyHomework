
export function pow(base, exponent = 2) {
    if (exponent === 0) {
        return 1
    }
    return base * pow(base, exponent - 1)
}


export function hypothenuse(adjacent, opposite){
    return {
        adjacent: adjacent,
        opposite: opposite,
        hypothenuse: Math.sqrt((adjacent * adjacent) + (opposite * opposite))
    }

}


export let PI = 3.14159  // or export let PI = Math.PI



export  function circleArea(radius){
 // can let PI above as we export it,
 // but it would be safer to  give a variable PI inside this function
 // or just use Math.PI instead PI
    return PI * (radius * radius)
}


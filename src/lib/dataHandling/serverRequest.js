const transformateArray = (arregloOriginal, respuestasObj) => {
    const nuevoArreglo = arregloOriginal.map((pregunta) => {
        const respuesta = respuestasObj[pregunta.preguntaInputName]

        return {
            sectionKey: pregunta['sectionKey'],
            sectionId: pregunta['sectionId'],
            enum_matcher_Attr: pregunta['enum_matcher_Attr'],
            respuesta: respuesta || ""
        }
    })
    return nuevoArreglo
}

const calculateScores = (transformedArray, formatFromENUM, sectionKeyParam) => {
    let resultadoFmt = {}
    let resultado = {
        [sectionKeyParam]: {},
    };

    for (const [key] of Object.entries(formatFromENUM)) {
        if (key !== "sectionId") {
            resultado[sectionKeyParam][key] = 0;
        }
    }

    const utilTransformedArray = transformedArray.filter((item) => item.respuesta === "Sí");

    utilTransformedArray.forEach((item) => {
        for (const [enum_key] of Object.entries(formatFromENUM)) {
            if (enum_key === item.enum_matcher_Attr) {
                resultado[sectionKeyParam][enum_key] += 1;
            }
        }
    })

    const totalSettedKeysToResultado = Object.keys(resultado[sectionKeyParam]).length

    const auxArrayKV = Object.values(resultado[sectionKeyParam])
    let cont = 0
    for (let i = 0; i < totalSettedKeysToResultado; i++) {
        if (typeof auxArrayKV[i] === 'number') {
            cont++
        }
    }
    if (cont === totalSettedKeysToResultado) {
        resultadoFmt = { ...resultado }
        return resultadoFmt
    } else {
        return null
    }
}


export { calculateScores, transformateArray }
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

const calculateScores = (transformedArray, enumAttributes, sectionKeyParam) => {
    const actualKey = `${sectionKeyParam}`;
    const resultado = {
        [actualKey]: {}
    };
    const section = enumAttributes[sectionKeyParam];

    for (const key in section) {
        if (key !== "sectionId") {
            resultado[actualKey][key] = 0;
        }
    }
    resultado[actualKey]["sectionId"] = section.sectionId;

    transformedArray.forEach((item) => {
        if (item.sectionId === section.sectionId) {
            if (resultado[actualKey].hasOwnProperty(item.enum_matcher_Attr) && item.respuesta === "Sí") {
                resultado[actualKey][item.enum_matcher_Attr] += 1;
            }
        }
    });
    return resultado;
}


export { calculateScores, transformateArray }
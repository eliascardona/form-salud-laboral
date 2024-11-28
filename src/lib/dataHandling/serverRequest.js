import { ATRIBUTOS_DE_ENTIDAD, NOMBRE_SECCION } from "../(ENTITIES_ENUMS)/extenseForm/enum"

const fillRequestBody = (sectionId, sectionKey, setRequestBody, previousState) => {
    switch (sectionId) {
        case NOMBRE_SECCION.CONDICIONES_LABORALES: {
            let attributes = ['']
            let questionTemplate = {}
            for (let [k, v] of Object.entries(ATRIBUTOS_DE_ENTIDAD[sectionKey])) {
                questionTemplate = ATRIBUTOS_DE_ENTIDAD[sectionKey]
                attributes.push(k)
            }
            attributes.forEach((attr, i) => {
                let temp = {
                    [questionTemplate[attr]]: '',
                }
                setRequestBody({
                    ...previousState,
                    [NOMBRE_SECCION[sectionId]] : { ...temp }
                })
            })
        }
        // case NOMBRE_SECCION.FACTORES_FAMILIARES: {
        // }
        // case NOMBRE_SECCION.FACTORES_SOCIOCULTURALES: {
        // }
        // case NOMBRE_SECCION.SALUD_GENERAL: {
        // }
        // case NOMBRE_SECCION.AUTOCUIDADO_UNIVERSAL: {
        // }
        // case NOMBRE_SECCION.SALUD_CARDIOVASCULAR: {
        // }
        // case NOMBRE_SECCION.NUTRICION: {
        // }
        // case NOMBRE_SECCION.ESTILO_DE_VIDA: {
        // }
        // case NOMBRE_SECCION.SALUD_AUDIOVISUAL: {
        // }
        // case NOMBRE_SECCION.PREVENCION_DE_RIESGOS: {
        // }
        // case NOMBRE_SECCION.FACTORES_AMBIENTALES: {
        // }
        // case NOMBRE_SECCION.PROMOCION_HUMANA: {
        // }
        default:
            return 'Se está intentado procesar una sección no valida'
    }
}

function scoreCalculation(selectedOptionFromInput) {
    let cont = 0
    if (selectedOptionFromInput === 'Sí') {
        cont = 1
    }
    return cont
}

export { fillRequestBody, scoreCalculation }
import { ATRIBUTOS_DE_ENTIDAD, NOMBRE_SECCION } from "../(ENTITIES_ENUMS)/extenseForm/enum";

const fillRequestBody = (sectionId, sectionKey, setRequestBody, previousState, newInputValues) => {
  const sectionName = NOMBRE_SECCION[sectionId]

  const attributes = ATRIBUTOS_DE_ENTIDAD[sectionKey]

  let newTemplate = {}

  for (let [key, value] of Object.entries(attributes)) {
    if (newInputValues[key]) {
      temp[key] = newInputValues[key];
    }
    else if (previousState?.[sectionName]?.[key]) {
      temp[key] = previousState[sectionName][key];
    }
    else {
      temp[key] = value;
    }
  }

  const totalScore = Object.keys(attributes).reduce((score, key) => {
    return score + (newInputValues[key] === "Sí" ? 1 : 0);
  }, 0);

  setRequestBody({
    ...previousState,
    [sectionName]: {
      ...newTemplate,
      totalScore,
    },
  });

  console.log(`Datos agregados para la sección '${sectionName}':`, newTemplate);
}

export { fillRequestBody }
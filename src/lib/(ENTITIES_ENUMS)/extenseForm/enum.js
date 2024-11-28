const NOMBRE_SECCION = {
    CONDICIONES_LABORALES: 'condiciones_laborales',
    FACTORES_FAMILIARES: 'factores_familiares',
    FACTORES_SOCIOCULTURALES: 'factores_socioculturales',
    SALUD_GENERAL: 'salud_general',
    AUTOCUIDADO_UNIVERSAL: 'autocuidado_universal',
    SALUD_CARDIOVASCULAR: 'salud_cardiovascular',
    NUTRICION: 'nutricion',
    ESTILO_DE_VIDA: 'estilo_de_vida',
    SALUD_AUDIOVISUAL: 'salud_audiovisual',
    PREVENCION_DE_RIESGOS: 'prevencion_de_riesgos',
    FACTORES_AMBIENTALES: 'factores_ambientales',
    PROMOCION_HUMANA: 'promocion_humana',
}

const ATRIBUTOS_DE_ENTIDAD = {
    section2: {
        sectionId: 'condiciones_laborales',
        jobSatisfaction: 8,
        workEnvironment: 8,
    },
    section3: {
        sectionId: 'factores_familiares',
        familySupport: 3,
        numberOfDependents: 3,
    },
    section4: {
        sectionId: 'factores_socioculturales',
        income: 4500,
        educationLevel: 5,
        employmentStatus: 2,
    },
    section5: {
        sectionId: 'salud_general',
        healthStatus: 3,
        chronicConditions: [1, 2, 3],
        recentHospitalization: 1,
    },
    section6: {
        sectionId: 'autocuidado_universal',
        selfCareHabits: 2,
        sleepQuality: 2,
    },
    section7: {
        sectionId: 'salud_cardiovascular',
        heartCondition: 10,
        bloodPressure: 3,
    },
    section8: {
        sectionId: 'nutricion',
        dailyFruitVegetableIntake: 5,
        waterIntake: 1,
    },
    section9: {
        sectionId: 'estilo_de_vida',
        activityLevel: 2,
        restQuality: 2,
    },
    section10: {
        sectionId: 'salud_audiovisual',
        hearingCondition: 2,
        visionCondition: 2,
    },
    section11: {
        sectionId: 'prevencion_de_riesgos',
        smokingStatus: 2,
        alcoholConsumption: 2,
    },
    section12: {
        sectionId: 'factores_ambientales',
        workEnvironmentQuality: 2,
        noiseLevel: 2,
    },
    section13: {
        sectionId: 'promocion_humana',
        mentalHealth: 4,
        socialInteractionLevel: 4,
    }
}


export { NOMBRE_SECCION, ATRIBUTOS_DE_ENTIDAD }
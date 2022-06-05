const experienceData = [
    {
        illustration: require('../../../assets/imgs/illustration_1.png'),
        title: 'Localizar la mancha',
        description: 'Lo primero que tenemos que hacer, es localizar lo mejor posible la mancha que queremos enviar a nuestro médico y prepararla en un entorno donde la luz sea lo suficientemente clara.',
        stepIcon: require('../../../assets/imgs/step1_icon.png'),
        nextButtonText: 'Continuar',
        step: 0
    },
    {
        illustration: require('../../../assets/imgs/illustration_2.png'),
        title: 'Preparar el dispositivo',
        description: 'Una vez localizada y preparada la mancha, se nos guiará para tomar una foto de la misma que capturaremos con la cámara de nuestro móvil y que podremos recortar para su correcta visualización.',
        stepIcon: require('../../../assets/imgs/step2_icon.png'),
        nextButtonText: 'Continuar',
        step: 1
    },
    {
        illustration: require('../../../assets/imgs/illustration_3.png'),
        title: 'Tomar la foto',
        description: 'A la hora de hacer la foto, la cámara debe estar a una distancia donde la mancha pueda ser visualizada claramente. Recuerda que es importante que solo se muestre la zona de la misma.',
        stepIcon: require('../../../assets/imgs/step3_icon.png'),
        nextButtonText: 'Continuar',
        step: 2
    },
    {
        illustration: require('../../../assets/imgs/illustration_4.png'),
        title: 'Enviar al médico',
        description: 'Una vez lista la foto, podremos enviarla, donde esta será recibida y analizada únicamente por nuestro médico, que será el encargado de contactar con nosotros para conocer los resultados.',
        stepIcon: require('../../../assets/imgs/step4_icon.png'),
        nextButtonText: 'Comenzar',
        step: 3
    },
];

export default experienceData;
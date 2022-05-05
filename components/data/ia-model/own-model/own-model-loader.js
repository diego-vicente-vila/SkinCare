import * as tensorflow from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';

const OWNModelLoader = async() => {
    console.log("Cargando modelo")
    await tensorflow.ready();
    const modelJson = require("./model-json/model.json");
    const modelWeight1 = require("./model-weights/group1-shard1of9.bin");
    const modelWeight2 = require("./model-weights/group1-shard2of9.bin");
    const modelWeight3 = require("./model-weights/group1-shard3of9.bin");
    const modelWeight4 = require("./model-weights/group1-shard4of9.bin");
    const modelWeight5 = require("./model-weights/group1-shard5of9.bin");
    const modelWeight6 = require("./model-weights/group1-shard6of9.bin");
    const modelWeight7 = require("./model-weights/group1-shard7of9.bin");
    const modelWeight8 = require("./model-weights/group1-shard8of9.bin");
    const modelWeight9 = require("./model-weights/group1-shard9of9.bin");
    const model = await tensorflow.loadLayersModel(bundleResourceIO(modelJson,
      [
        modelWeight1, modelWeight2, modelWeight3,
        modelWeight4, modelWeight5, modelWeight6,
        modelWeight7, modelWeight8, modelWeight9
      ]));
    console.log('Modelo cargado')

    return model;
}
export default OWNModelLoader;
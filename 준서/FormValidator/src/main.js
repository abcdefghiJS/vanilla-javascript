import Model from "./app/model/index.js";
import View from "./app/view/index.js";
import Controller from "./app/controller/index.js";

const view = new View();
const model = new Model();
const controller = new Controller(model);

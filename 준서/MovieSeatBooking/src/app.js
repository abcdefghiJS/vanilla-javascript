import { $ } from "./lib/util/dom.js";

import Model from "./model/index.js";

import View from "./view/index.js";

import Controller from "./controller/index.js";

const $body = $("body");

const view = new View($body);

const model = new Model();

new Controller({ view, model });

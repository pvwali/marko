// Compiled using markoc@4.5.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/markoDemo$1.0.0/src/pages/home/hello.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    app_hello_template = marko_loadTemplate(require.resolve("../../components/app-hello/template.marko")),
    marko_loadTag = marko_helpers.t,
    app_hello_tag = marko_loadTag(app_hello_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<h1>Hello " +
    marko_escapeXml(data.name) +
    "</h1>");

  app_hello_tag({
      name: "Wali",
      messgCount: "30"
    }, out, __component, "1");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    tags: [
      "../../components/app-hello/template.marko"
    ]
  };

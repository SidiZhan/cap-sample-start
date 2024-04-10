sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], (Controller) => {
    "use strict";
 
    return Controller.extend("test.browse.controller.Browse", {
       onShowHello() {
          // show a native JavaScript alert
          alert("Hello World");
       }
    });
 });
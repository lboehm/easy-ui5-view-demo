sap.ui.define(["sap/ui/test/Opa5"],
    /**
     * @param {typeof sap.ui.test.Opa5} Opa5 
     */
    function (Opa5) {
        "use strict";

        return Opa5.extend("lb.viewDemo.test.integration.arrangements.Startup", {
            iStartMyApp: function () {
                this.iStartMyUIComponent({
                    componentConfig: {
                        name: "lb.viewDemo",
                        async: true,
                        manifest: true
                    }
                });
            }
        });
    });

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("project1.controller.View1", {

        onInit: function () {
            // Store the reference to the Wizard control
            this._oWizard = this.byId("migrationWizard");
            this._selectedTileId = null;
        },

        onStartPress: function () {
            this._oWizard.nextStep();
            // Call to update button visibility
            this._updateButtonVisibility();
        },

        onNextPress: function () {
            this._oWizard.nextStep();
            // Call to update button visibility
            this._updateButtonVisibility();
        },

        onBackPress: function () {
            this._oWizard.previousStep();
            // Call to update button visibility
            this._updateButtonVisibility();
        },

        onUploadPress: function () {
            var oFileInput = document.createElement("input");
            oFileInput.type = "file";
            oFileInput.accept = ".pptx";

            oFileInput.click();

            oFileInput.onchange = function (oEvent) {
                var oFile = oEvent.target.files[0];

                if (oFile) {
                    this.byId("attachmentText").setText("Attachments (1)");
                    this.byId("fileContainer").addItem(new sap.m.Text({ text: oFile.name }));
                    this.byId("nextButton").setEnabled(true);
                    MessageToast.show("File uploaded: " + oFile.name);
                    this.byId("_IDGenButton1").setVisible(false);
                }
            }.bind(this);
        },

        onFinishPress: function () {
            MessageToast.show("Migration finished.");
        },

        onAfterRendering: function () {
            this._updateButtonVisibility();
            this._updateTileInteraction();
        },

        onTilePress: function (oEvent) {
            // Get the clicked tile
            var oSelectedTile = oEvent.getSource();

            // Get all tiles
            var aTiles = this.byId("TileButtons").getItems();

            // Deselect all tiles
            aTiles.forEach(function (oTile) {
                oTile.removeStyleClass("selectedTile");
            });

            // Highlight the selected tile
            oSelectedTile.addStyleClass("selectedTile");
        },

        _updateButtonVisibility: function () {
            var iCurrentStep = this._oWizard.getProgress();
            var aSteps = this._oWizard.getSteps();
            var iTotalSteps = aSteps.length;
            
            // Determine button visibility
            var bShowBackButton = (iCurrentStep > 0); // Hide the Back button on the first step
            var bShowFinishButton = (iCurrentStep === iTotalSteps); // Show the Finish button only on the last step
            
            this.byId("backButton").setVisible(bShowBackButton);
            this.byId("nextButton").setVisible(!bShowFinishButton);
            this.byId("finishButton").setVisible(bShowFinishButton);

            if(iCurrentStep == 1) {
                this.byId("startButton").setVisible(true);
                this.byId("backButton").setVisible(false);
                this.byId("nextButton").setVisible(false);
            }
            else{
                this.byId("startButton").setVisible(false);
            }
        },

        onTilePress: function (oEvent) {
            // Check if the current step allows tile selection
            if (this._canSelectTiles()) {
                var oSelectedTile = oEvent.getSource();
                var aTiles = this.byId("TileButtons").getItems();

                // Deselect all tiles
                aTiles.forEach(function (oTile) {
                    oTile.removeStyleClass("selectedTile");
                });

                // Highlight the selected tile
                oSelectedTile.addStyleClass("selectedTile");
            } else {
                MessageToast.show("Tile selection is not allowed in this step.");
            }
        },

        _updateTileInteraction: function () {
            var iCurrentStep = this._oWizard.getProgress();
            var bAllowTileSelection = (iCurrentStep === 2); // Assuming step 3 (index 2) allows tile selection

            var aTiles = this.byId("TileButtons").getItems();
            aTiles.forEach(function (oTile) {
                oTile.setEnabled(bAllowTileSelection);
            });
        },

        _canSelectTiles: function () {
            // Check if the current step allows tile selection
            var iCurrentStep = this._oWizard.getProgress();
            return (iCurrentStep === 3); // Assuming step 3 (index 2) allows tile selection
        }
    });
});
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.View1", {

        onInit: function () {
            // Store the reference to the Wizard control
            this._oWizard = this.byId("migrationWizard");
            this._selectedTileId = null;
            var oModelTile = new JSONModel(sap.ui.require.toUrl("sap/m/sample/GenericTileLineMode/tiles.json"));
            this.getView().setModel(oModelTile);
            var oModel = new JSONModel({ 
                    "ProductCollection": [
                        {
                            "ProductId": "HT-1001",
                            "Name": "Select option 1"
                        },
                        {
                            "ProductId": "HT-1002",
                            "Name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        },
                        {
                            "ProductId": "HT-1003",
                            "Name": "Select option 3"
                        },
                        {
                            "ProductId": "HT-1007",
                            "Name": "Select option 4"
                        },
                        {
                            "ProductId": "HT-1010",
                            "Name": "Select option 5"
                        }
                    ],
                    "templates": [
                        {
                            "key": "SAP",
                            "value": "SAP"
                        },
                        {
                            "key": "SAP BTP",
                            "value": "SAP BTP"
                        },
                        {
                            "key": "SAP LeanIX",
                            "value": "SAP LeanIX"
                        },
                        {
                            "key": "SAP Ariba",
                            "value": "SAP Ariba"
                        },
                        {
                            "key": "SAP Concur",
                            "value": "SAP Concur"
                        },
                        {
                            "key": "SAP Customer Experience",
                            "value": "SAP Customer Experience"
                        },
                        {
                            "key": "SAP Fieldglass",
                            "value": "SAP Fieldglass"
                        },
                        {
                            "key": "SAP Signavio",
                            "value": "SAP Signavio"
                        },
                        {
                            "key": "SAP Successfactors",
                            "value": "SAP Successfactors"
                        },
                        {
                            "key": "SAP ChinaSimplified",
                            "value": "SAP ChinaSimplified"
                        },
                        {
                            "key": "SAP ChinaTraditional",
                            "value": "SAP ChinaTraditional"
                        },
                        {
                            "key": "SAP BusinessNetwork",
                            "value": "SAP BusinessNetwork"
                        },
                        {
                            "key": "SAP S4HANA",
                            "value": "SAP S4HANA"
                        },
                        {
                            "key": "SAP S4HANACloud",
                            "value": "SAP S4HANACloud"
                        }
                    ],
                Slide4: "<body>Here’s a preview of how your slide deck will look with the new SAP-compliant template. You can:" +
                    "<ul>" +
                    "<li><strong>Navigate Slides:</strong> Use the arrows to preview each slide.</li>" +
                    "<li><strong>Make Adjustments:</strong> Click on any slide to make final adjustments, such as repositioning text or images.</li>" +
                    "</ul>" +
                    "<p><strong>Tip:</strong> If you’re satisfied with the preview, you can proceed to finalize the migration.</p>" +
                    "</body>",
                Slide1: "<p>This wizard will guide you through the process of converting your existing slide deck to the new SAP-compliant template and give an extensive report. The process is simple and should only take a few minutes.</p>" +
                    "<ol>" +
                    "<li>Upload your current slide deck.</li>" +
                    "<li>Choose the new template.</li>" +
                    "<li>Customize the conversion settings.</li>" +
                    "<li>Preview the results before finalizing.</li>" +
                    "<li>Finally download your SAP-compliant slide deck.</li>" +
                    "</ol>" +
                    "<p><strong>Note:</strong> Ensure that your slide deck is compatible with PowerPoint format (PPTX, PowerPoint 2007 and later).</p>",
                Slide2: "<p><strong>Instructions:</strong> Please upload the slide deck you want to migrate. The tool accepts PowerPoint format (PPTX, PowerPoint 2007 and later).</p>",
                Slide3_start:   "<p><strong>Instructions:</strong> Select the new SAP-compliant template you wish to apply to your slide deck. This template will determine the overall look and feel of your presentation, including fonts, colours, and layout.</p>" +
                          "<p><strong>Step 1:</strong> Choose the PowerPoint SAP-compliant template.</p>",
                Slide3_end: "<select><option value='SAP'>SAP</option></select>" + // Example dropdown for simplicity
                            "<p><strong>Step 2:</strong> Choose the style settings which will affect the overall look and feel of your presentation, including fonts and colours.</p>",
                Slide5: "<p>Instructions: Your slide deck and detailed compliance report is ready! You can now download it in the following formats:</p>" +
                    "<ul>" +
                    "<li><strong>Download Options:</strong> PowerPoint (.PPTX), PDF</li>" +
                    "<li><strong>File Naming:</strong> Optionally rename your file before downloading.</li>" +
                    "</ul>" +
                    "<p><strong>Tip:</strong> Keep a backup of your original deck in case you need to revert any changes.</p>",
                items: [
                    {
                        "fileName": "Envases_Assessment.pptx",
                        "mediaType": "application/ppt-attachment",
                        "url": "/upload/Envases_Assessment.pptx",
                        "uploadState": "Complete",
                        "markers": [
                            {
                                "type": "Draft"
                            },
                            {
                                "type": "Favorite"
                            },
                            {
                                "type": "Flagged"
                            },
                            {
                                "type": "Locked"
                            },
                            {
                                "type": "Unsaved"
                            }
                        ],
                        "statuses": [
                            {
                                "title": "Uploaded By",
                                "text": "SAP",
                                "active": true
                            },
                            {
                                "title": "Uploaded On",
                                "text": "2014-07-28",
                                "active": false
                            },
                            {
                                "title": "File Size",
                                "text": "25",
                                "active": false
                            },
                            {
                                "title": "Info",
                                "text": "Compliant Presentation",
                                "state": "Information"
                            }
                        ],
                        "selected": true
                    },
                    {
                        "fileName": "Envases_Assessment.pdf",
                        "mediaType": "application/pdf",
                        "url": "/upload/Envases_Assessment.pdf",
                        "uploadState": "Complete",
                        "statuses": [
                            {
                                "title": "Uploaded By",
                                "text": "SAP",
                                "active": true
                            },
                            {
                                "title": "Uploaded On",
                                "text": "2014-07-28",
                                "active": false
                            },
                            {
                                "title": "File Size",
                                "text": "25",
                                "active": false
                            },
                            {
                                "title": "Info",
                                "text": "Report including the changes being done and changes not done.",
                                "state": "Information"
                            }
                        ]
                    }
                ],
                sizeBehavior: "Responsive",
                scope: "Display",
                scopes: [
                    {
                        "key": "Display",
                        "text": "Display"
                    },
                    {
                        "key": "Actions",
                        "text": "Actions"
                    },
                    {
                        "key": "ActionMore",
                        "text": "ActionMore"
                    },
                    {
                        "key": "ActionRemove",
                        "text": "ActionRemove"
                    }
                ],
                slideTile1: [
                    {
                        "backgroundImage": "/assets/images/slide1.png",
                        "contentText": "Style 1",
                        "subtitle": "<p style='color: #556B82'><strong>Font: </strong>72 Brand<br><strong>Colour Scheme:</strong> Blue</p>",
                        "state": "",
                        "tooltip": "Style 1"
                    }
                ],
                slideTile2: [
                    {
                        "backgroundImage": "/assets/images/slide2.png",
                        "contentText": "Style 2",
                        "subtitle": "<p style='color: #556B82'><strong>Font: </strong>72 Brand<br><strong>Colour Scheme:</strong> Blue</p>",
                        "state": "",
                        "tooltip": "Style 2"
                    }
                ],
                slideTile3: [
                    {
                        "backgroundImage": "/assets/images/slide3.png",
                        "contentText": "Style 3",
                        "subtitle": "<p style='color: #556B82'><strong>Font: </strong>72 Brand<br><strong>Colour Scheme:</strong> Blue</p>",
                        "state": "",
                        "tooltip": "Style 3"
                    }
                ],
                slideTile4: [
                    {
                        "backgroundImage": "/assets/images/slide4.png",
                        "contentText": "Style 4",
                        "subtitle": "<p style='color: #556B82'><strong>Font: </strong>72 Brand<br><strong>Colour Scheme:</strong> Blue</p>",
                        "state": "",
                        "tooltip": "Style 4"
                    }
                ],
            });
            this.getView().setModel(oModel);
        },
        onTemplateSelect: function(oEvent) {
            var sKey = oEvent.getParameter("selectedItem").getKey();
            // Handle the selection change, e.g., update another model or trigger some UI changes
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
        onUploadComplete: function (oEvent) {
            var oItem = oEvent.getParameter("item");
            var sFileName = oItem.getFileName();
            var sUrl = "/upload"; // Ensure this is pointing to your backend server

            var oRequest = new XMLHttpRequest();
            oRequest.open("POST", sUrl, true);  // Ensure the request is opened properly
            // Define the onload event handler
            oRequest.onload = function () {
                if (oRequest.status === 200) {
                    sap.m.MessageToast.show("File uploaded successfully!");
                    this._oWizard.validateStep(this.byId("uploadStep"));
                    this.byId("container-project1---View1--nextButton").setEnabled(true);  // Enable next button on success
                } else {
                    sap.m.MessageToast.show("File upload failed.");
                    this.byId("container-project1---View1--nextButton").setEnabled(true);
                }
            }.bind(this);

            // Send the request with the file
            oRequest.send(oItem);  // Only call send() once here

            /*oUploadSet.getItems().forEach(function (oItem) {
                if (oItem.getListItem().getSelected()) {
                    oUploadSet.uploadItem(oItem);
                    console.log('this');
                }
            })
            if (oResponse && oResponse.status === 200) {
                alert("File uploaded successfully");
                // Display a message when file upload is complete
                MessageToast.show("File uploaded: " + sFileName);

                // You can now proceed to the next step in the wizard
                this._oWizard.validateStep(this.byId("uploadStep"));
                this.byId("nextButton").setEnabled(true); // Enable next button on success
            } else {
                alert("File upload failed" + oResponse.status + ' ' + oResponse);
            };
            */

        },
        onSelectionChange: function () {
            alert('Selections');
        },
        // Update button visibility based on wizard step
        _updateButtonVisibility: function () {
            var iCurrentStep = this._oWizard.getProgress();
            var iTotalSteps = this._oWizard.getSteps().length;

            this.byId("backButton").setVisible(iCurrentStep > 0);
            this.byId("nextButton").setVisible(iCurrentStep < iTotalSteps);
            this.byId("finishButton").setVisible(iCurrentStep === iTotalSteps);
        },
        pressSlideTile: function(oEvent) {
            MessageToast.show("The generic tile two pressed.");
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

            if (iCurrentStep == 1) {
                this.byId("startButton").setVisible(true);
                this.byId("backButton").setVisible(false);
                this.byId("nextButton").setVisible(false);
            }
            else {
                this.byId("startButton").setVisible(false);
            }
        },

        onTilePress: function (oEvent) {
            // Check if the current step allows tile selection
            if (this._canSelectTiles()) {
                var oSelectedTile = oEvent.getSource();
                var aTiles = this.byId("slideTile").getItems();

                // Deselect all tiles
                aTiles.forEach(function (oTile) {
                    oTile.removeStyleClass("selectedTile");
                });

                // Highlight the selected tile
                oSelectedTile.addStyleClass("selectedTile");

                MessageToast.show("Tile selection");

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
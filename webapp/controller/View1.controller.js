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
                                "title": "Info:",
                                "text": "Complient ",
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
                                "text": "Jane Burns",
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
                                "title": "Document Info Record",
                                "text": "SSP/101010101",
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
                tiles: [
                    {
                        "title": "Jessica Danielle Johnson ",
                        "subtitle": "Senior Consultant, Department Sales & Distribution",
                        "footer": "Current Quarter",
                        "unit": "EUR",
                        "kpivalue": 12,
                        "scale": "k",
                        "color": "Good",
                        "trend": "Up"
                    },
                    {
                        "title": "Manage Master Data Type Activity With a Long Title and Without an Icon",
                        "subtitle": "Subtitle for Activity",
                        "footer": "Current Quarter",
                        "unit": "EUR",
                        "kpivalue": 5,
                        "scale": "",
                        "color": "Critical",
                        "trend": "Down"
                    },
                    {
                        "title": "Business Decisions",
                        "subtitle": "Approval Needed",
                        "footer": "Current Quarter",
                        "unit": "EUR",
                        "kpivalue": 12,
                        "scale": "",
                        "state": "Loading",
                        "color": "Critical",
                        "trend": "Down"
                    },
                    {
                        "title": "Manage Assets",
                        "subtitle": "",
                        "footer": "",
                        "kpivalue": 500,
                        "scale": "",
                        "color": "Error",
                        "trend": "Up",
                        "state": "Failed"
                    },
                    {
                        "title": "Manage Invoices",
                        "subtitle": "Payment Open",
                        "footer": "",
                        "kpivalue": 1,
                        "scale": "k",
                        "color": "Critical",
                        "trend": "Down",
                        "state": "Disabled"
                    }
                ],
                linkTiles: [
                    {
                        "title": "Jessica Danielle Johnson",
                        "linkTileContents": [
                            {
                                "iconSrc": "sap-icon://action-settings",
                                "linkText": "SAP",
                                "linkHref": "http://www.sap.com"
                            },
                            {
                                "iconSrc": "sap-icon://action-settings",
                                "linkText": "SAP",
                                "linkHref": "http://www.sap.com"
                            },
                            {
                                "iconSrc": "sap-icon://action-settings",
                                "linkText": "SAP",
                                "linkHref": "http://www.sap.com"
                            },
                            {
                                "iconSrc": "sap-icon://action-settings",
                                "linkText": "SAP",
                                "linkHref": "http://www.sap.com"
                            },
                            {
                                "iconSrc": "sap-icon://action-settings",
                                "linkText": "SAP",
                                "linkHref": "http://www.sap.com"
                            },
                            {
                                "iconSrc": "sap-icon://action-settings",
                                "linkText": "SAP",
                                "linkHref": "http://www.sap.com"
                            }
                        ]
                    }
                ],
                slideTile1: [
                    {
                        "backgroundImage": "test-resources/sap/m/demokit/sample/GenericTileLineMode/images/NewsImage2.png",
                        "footer": "August 22, 2016",
                        "contentText": "SAP Unveils Powerful New Player Comparision Tool Exclusively on NFL.com",
                        "subtitle": "Today, SAP News",
                        "state": "",
                        "tooltip": "NewsTile 1 of SlideTile 1"
                    },
                    {
                        "backgroundImage": "test-resources/sap/m/demokit/sample/GenericTileLineMode/images/NewsImage1.png",
                        "footer": "August 21, 2016",
                        "contentText": "Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe",
                        "subtitle": "Today, SAP News",
                        "state": "",
                        "tooltip": "NewsTile 2 of SlideTile 1"
                    }
                ],
                slideTile2: [
                    {
                        "backgroundImage": "test-resources/sap/m/demokit/sample/GenericTileLineMode/images/NewsImage1.png",
                        "footer": "August 21, 2016",
                        "contentText": "Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe",
                        "subtitle": "Today, SAP News",
                        "state": "Loading",
                        "tooltip": "NewsTile 1 of SlideTile 2"
                    },
                    {
                        "backgroundImage": "test-resources/sap/m/demokit/sample/GenericTileLineMode/images/NewsImage2.png",
                        "footer": "August 22, 2016",
                        "contentText": "SAP Unveils Powerful New Player Comparision Tool Exclusively on NFL.com",
                        "subtitle": "Today, SAP News",
                        "state": "Failed",
                        "tooltip": "NewsTile 2 of SlideTile 2"
                    }
                ]
            });
            this.getView().setModel(oModel);
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
            var sUrl = "https://port8080-workspaces-ws-zvkv2.us10.trial.applicationstudio.cloud.sap/upload"; // Ensure this is pointing to your backend server

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
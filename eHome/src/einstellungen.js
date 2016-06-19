


var form;
       
        Ext.regModel('eHomeSettings', {
            fields: [
                {name: 'online',                    type: 'boolean'},
                {name: 'party',                     type: 'boolean'},
                {name: 'bluetooth',                 type: 'boolean'},
                {name: 'autorollos',                type: 'boolean'},
                {name: 'autorollossonnenstand',     type: 'boolean'},
                {name: 'RollosWohnenRunter',        type: 'string'},
                {name: 'autoLichterAn',             type: 'boolean'},
                {name: 'RollosWohnenRauf',          type: 'string'},
                {name: 'RollosSchlafenRunter',      type: 'string'},
                {name: 'RollosSchlafenRauf',        type: 'string'},
                {name: 'RollosSchlafenRaufWE',      type: 'string'},
                {name: 'autoWasserMorgens',         type: 'boolean'},
                {name: 'WasserMorgensUhrzeit',      type: 'string'},
                {name: 'WasserMorgensDauer',        type: 'string'},
                {name: 'autoWasserAbends',          type: 'boolean'},
                {name: 'WasserAbendsUhrzeit',       type: 'string'},
                {name: 'WasserAbendsDauer',         type: 'string'},
                {name: 'RegenLimit',                type: 'string'},
                {name: 'autosonnenschutz',          type: 'boolean'},
                {name: 'SonnenschutzRunter',        type: 'string'},
                {name: 'SonnenschutzRauf',          type: 'string'},
                {name: 'HeizungAn',                 type: 'boolean'},
                {name: 'HeizungsModus',             type: 'string'},
                {name: 'TempWohnen',                type: 'string'},
                {name: 'TempSchlafen',              type: 'string'},
                {name: 'TempBad',                   type: 'string'},
                {name: 'TempKinder',                type: 'string'},
                {name: 'Nachtabsenkung',            type: 'string'},
                {name: 'HeizungZeitNacht',          type: 'string'},
                {name: 'HeizungZeitTag',            type: 'string'}
            ]
        }
        );
                   
        var formBase = {
            layout: {type:'vbox', align: 'left'},	
            scroll: 'vertical',
            url   : 'saveSettings.php',
            id: 'einstellungenForm',
            standardSubmit : false,
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Allgemein',
                    instructions: 'Rechts ist eingeschaltet.',
                    defaults: {
                        labelAlign: 'left',
                        labelWidth: '40%'
                    },
                    items: [
                    {
                        xtype: 'togglefield',
                        name : 'online',
                        label: 'eHome Steuerung'
                    }, {
                        xtype: 'togglefield',
                        name : 'party',
                        label: 'Party Modus'
                    }, {
                        xtype: 'togglefield',
                        name : 'bluetooth',
                        label: 'Bluetooth Erkennung'
                    }]
                }, {
                    xtype: 'fieldset',
                    title: 'Rollosteuerung',
                    instructions: 'Rechts ist eingeschaltet. Uhrzeiten im Format --:--',
                    defaults: {
                        labelAlign: 'left',
                        labelWidth: '40%'
                    },
                    items: [
                    {
                        xtype: 'togglefield',
                        name : 'autorollos',
                        label: 'Rollo Automatik'
                    }, {
                        xtype: 'togglefield',
                        name : 'autorollossonnenstand',
                        label: 'Sonnenstand Steuerung'
                    }, {
                        xtype: 'textfield',
                        name: 'RollosWohnenRunter',
                        label: 'Rollos Wohnen Runter',
                    }, {
                        xtype: 'togglefield',
                        name: 'autoLichterAn',
                        label: 'Licht automatisch einschalten',
                    }, {
                        xtype: 'textfield',
                        name: 'RollosWohnenRauf',
                        label: 'Rollos Wohnen Rauf',
                    }, {
                        xtype: 'textfield',
                        name: 'RollosSchlafenRunter',
                        label: 'Rollos Schlafen Runter',
                    }, {
                        xtype: 'textfield',
                        name: 'RollosSchlafenRauf',
                        label: 'Rollos Schlafen Rauf',
                    }, {
                        xtype: 'textfield',
                        name: 'RollosSchlafenRaufWE',
                        label: 'Rollos Schlafen Rauf (Wochenende)',
                    }]
                }, {
                    xtype: 'fieldset',
                    title: 'Sonnenschutz',
                    instructions: 'Rechts ist eingeschaltet. Uhrzeiten im Format --:--',
                    defaults: {
                        labelAlign: 'left',
                        labelWidth: '40%'
                    },
                    items: [
                    {
                        xtype: 'togglefield',
                        name : 'autosonnenschutz',
                        label: 'Sonnenschutz Automatik'
                    }, {
                        xtype: 'textfield',
                        name : 'SonnenschutzRunter',
                        label: 'Sonnenschutz Runter'
                    }, {
                        xtype: 'textfield',
                        name : 'SonnenschutzRauf',
                        label: 'Sonnenschutz Rauf'
                    }, {
                        xtype: 'textfield',
                        name : 'SonnenschutzTempLimit',
                        label: 'Sonnenschutz Temperaturlimit [&deg;C]'
                    }]
                }, { 
                    xtype: 'fieldset',
                    title: 'Heizung',
                    instructions: '<a href=https://www.google.com/calendar/render?hl=de&tab=wc&pli=1 target=_newtab>Heizungskalender bearbeiten</a>',                 
                
                    defaults: {
                        labelAlign: 'left',
                        labelWidth: '40%'
                    },
                    items: [
                    {
                        xtype: 'togglefield',
                        name : 'HeizungAn',
                        label: 'Heizung Automatik'
                    }, {
                        xtype: 'selectfield',
                        name : 'HeizungsModus',
                        label: 'Steuerungsmodus',
                        options: [{
                            text: 'An',
                            value: 'An'
                        }, {
                            text: 'Tag',
                            value: 'Tag'
                        }, {
                            text: 'Nacht',
                            value: 'Nacht'
                        }, {
                            text: 'Uhrzeit',
                            value: 'Uhrzeit'
                        }, {
                            text: 'Kalender',
                            value: 'Kalender'
                        }]
                    }, {
                        xtype: 'textfield',
                        name : 'TempWohnen',
                        label: 'Wohnzimmer [&deg;C]'
                    }, {
                        xtype: 'textfield',
                        name : 'TempSchlafen',
                        label: 'Schlafzimmer [&deg;C]'
                    }, {
                        xtype: 'textfield',
                        name : 'TempBad',
                        label: 'Bad [&deg;C]'
                    }, {
                        xtype: 'textfield',
                        name : 'TempKinder',
                        label: 'Kinderzimmer [&deg;C]'
                    }, {
                        xtype: 'textfield',
                        name : 'Nachtabsenkung',
                        label: 'Nachtabsenkung [&deg;C]'
                    }, {
                        xtype: 'textfield',
                        name : 'HeizungZeitNacht',
                        label: 'Zeit-Nacht'
                    }, {
                        xtype: 'textfield',
                        name : 'HeizungZeitTag',
                        label: 'Zeit-Tag'
                    }, {
                        xtype: 'box',
                        autoEl : {html:'<a href="https://www.google.com/calendar/render?hl=de&tab=wc&pli=1&gsessionid=BOUbvSCVk_PhcJJKdtvMlw">Kalender</a>'},
                        label: 'Google Kalender'
                    }]
                }, {
                    xtype: 'fieldset',
                    title: 'Bewaesserung',
                    instructions: 'Rechts ist eingeschaltet. Uhrzeiten im Format --:--',
                    defaults: {
                        labelAlign: 'left',
                        labelWidth: '40%'
                    },
                    items: [
                    {
                        xtype: 'togglefield',
                        name : 'autoWasserMorgens',
                        label: 'Automatik Morgens'
                    }, {
                        xtype: 'textfield',
                        name : 'WasserMorgensUhrzeit',
                        label: 'Uhrzeit Morgens'
                    }, {
                        xtype: 'textfield',
                        name : 'WasserMorgensDauer',
                        label: 'Dauer Morgens [5, 15, 30min]'
                    }, {
                        xtype: 'togglefield',
                        name : 'autoWasserAbends',
                        label: 'Automatik Abends'
                    }, {
                        xtype: 'textfield',
                        name : 'WasserAbendsUhrzeit',
                        label: 'Uhrzeit Abends'
                    }, {
                        xtype: 'textfield',
                        name : 'WasserAbendsDauer',
                        label: 'Dauer Abends [5, 15, 30min]'
                    }, {
                        xtype: 'textfield',
                        name : 'RegenLimit',
                        label: 'Niederschlagslimit [L]'
                    }]
                 }]
              ,
            listeners : {
                submit : function(form, result){
                    console.log('success', Ext.toArray(arguments));
                },
                exception : function(form, result){
                    console.log('failure', Ext.toArray(arguments));
                }
            },
        
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            text: 'Load Model',
                            ui: 'round',
                            handler: function() {
                                var form = Ext.getCmp('einstellungenForm');        
                                Ext.Ajax.request({
                                    method: 'get',
                                   url: 'eHomeSettings.json',
                                   success: function(response, opts) {
//                                         alert(response.responseText);
                                         var obj = Ext.decode(response.responseText);
                                         formBase.eHomeSettings = Ext.ModelMgr.create(obj,'eHomeSettings');
                                        
                                        form.load(formBase.eHomeSettings);
                                    },                                
                                })
                            }
                        },
                        {xtype: 'spacer'},
                        {
                            text: 'Save',
                            ui: 'confirm',
                            handler: function() {
                                var form = Ext.getCmp('einstellungenForm');
                                                                    
                                if(formBase.eHomeSettings){
                                    form.updateRecord( formBase.eHomeSettings, true);
                                }
                                Ext.Ajax.request({
                                    method: 'get',
                                   url: 'saveSettings.php',
                                   params: {json: Ext.encode(formBase.eHomeSettings.data)}
                                })
                                
                            }
                        }
                    ]
                }
            ]
        };
        
demos.einstellungen = new Ext.form.FormPanel(formBase);

function loadSettings() {

var form = Ext.getCmp('einstellungenForm');

Ext.Ajax.request({
    method: 'get',
   url: 'eHomeSettings.json',
   success: function(response, opts) {
         var obj = Ext.decode(response.responseText);
         //alert(obje);
         var instance = Ext.ModelMgr.create(obj,'eHomeSettings');
/*
         instance = Ext.ModelMgr.create({ //das funktioniert!
            "online": "true",
            "RegenLimit" : '3',
        }, 'eHomeSettings');
         
        alert(instance.online);
               
         form.load(instance);
         alert("loadSettingsResp2");        
*/
    },                                
})
}

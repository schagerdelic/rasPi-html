// wrapping in closure to avoid global var

Ext.regModel('zimmmerTemp', {
/*    fields: [
        'solltempwohnen',
        'isttempwohnen', 
        'solltempbad', 
        'isttempbad', 
        'solltempkind1', 
        'isttempkind1', 
        'solltempkind2', 
        'isttempkind2',
        'solltempschlafen',
        'isttempschlafen'
        ],
*/
    fields: [
        'innentemp',
        'innenhumid', 
        'aussentemp', 
        'aussenhumid', 
        'wind', 
        'niederschlag', 
        'gefrierfach', 
        'waschmaschine',
        'regen',
        'tempSchlafen',
        'tempBad',
        'tempKinder',
        'feuchteSchlafen',
        'feuchteBad',
        'feuchteKinder'
        ],
    
    proxy: {
        type: 'ajax',
        url : 'eHomeHeizungVals.json'
    }
});

/*
 * This panel sets up a DataView, which defines an XTemplate used to render our data. We also set up
 * the toolbar with the "Load Nested Data" button here
 */
demos.heizung = new Ext.Panel({
    cls: 'heizungBG',
    layout: 'fit',
//    scroll: 'vertical',
   
    items: [
        {
            xtype: 'dataview',
            
            /*
             * The XTemplate allows us to easily render the data from our User model, as well as
             * iterating over each User's Orders and OrderItems:
             */
            tpl: [
                '<tpl for=".">',            
                '<div id=ziTempWohnen class="ziTemp ziTempWohnen">',
                        '<span class="istTemp">{innentemp}&deg;</span>',
                        '<span class="sollTemp">{innenhumid}%</span><br>',
                        '<span class="ziTitel">Wohnen</span>',
                '</div>',
                '<div id=ziTempBad class="ziTemp ziTempBad">',
                        '<span class="istTemp">{tempBad}&deg;</span>',
                        '<span class="sollTemp">{feuchteBad}%</span><br>',
                        '<span class="ziTitel">Bad</span>',
                '</div>',
                '<div id=ziTempKind1 class="ziTemp ziTempKind1">',
                        '<span class="istTemp">{tempKinder}&deg;</span>',
                        '<span class="sollTemp">{feuchteKinder}%</span><br>',
                        '<span class="ziTitel">Kind1</span>',
                '</div>',
                '<div id=ziTempKind2 class="ziTemp ziTempKind2">',
                        '<span class="istTemp">{tempKinder}&deg;</span>',
                        '<span class="sollTemp">{feuchteKinder}%</span><br>',
                        '<span class="ziTitel">Kind2</span>',
                '</div>',
                '<div id=ziTempSchlafen class="ziTemp ziTempSchlafen">',
                        '<span class="istTemp">{tempSchlafen}&deg;</span>',
                        '<span class="sollTemp">{feuchteSchlafen}%</span><br>',
                        '<span class="ziTitel">Schlafen</span>',
                '</div>',
                '</tpl>',
                
            ],
            
           
            store: new Ext.data.Store({
                model: 'zimmmerTemp',
                autoLoad: true
            }),
 
            itemSelector: 'div',
            listeners: {
                itemtap: function(dv, idx, itm, e) {
                    //Ext.Msg.prompt(itm.id, "Gib die Solltemperatur ein:", Ext.emptyFn) 
                        if (itm.id == "ziTempWohnen") 
                        {
                        	header = "Temperatur Wohnzimmer";
                        	settingsName = "TempWohnen";
                        }
                        if (itm.id == "ziTempBad") 
                        {
                        	header = "Temperatur Badezimmer";
                        	settingsName = "TempBad";
                        }

                        if ((itm.id == "ziTempKind1") || (itm.id == "ziTempKind2"))
                        {
                        	header = "Temperatur Kinderzimmer";
                        	settingsName = "TempKinder";
                        }
                        if (itm.id == "ziTempSchlafen") 
                        {
                        	header = "Temperatur Schlafzimmer";
                        	settingsName = "TempSchlafen";
                        }
                        
                        getSettingsURL = 'getSettingsValue.php?settingName=' + settingsName;
                       	setSettingsURL = 'setSettingsValue.php?settingName=' + settingsName + '&settingValue=';

                        // url setzen, und Msg.prompt. Function setzen
                        Ext.Ajax.request({
		        	url: getSettingsURL,  //'getSettingsValue.php?settingName=TempSchlafen',
	        		success: function(response) {
            				Ext.Msg.prompt(header, "Gib die Solltemperatur ein:", 
            					function(btn,text)
            						{
            						if(btn == 'ok') Ext.Ajax.request({url: setSettingsURL + text});
            					},this,false,response.responseText);
            				//Ext.Msg.prompt({
					//		   title: header,
					//		   msg: "Gib die Solltemperatur ein:",
					//		   fn: Ext.emptyFn,//function(text){Ext.Msg.alert("Hallo")},
					//		   value: response
					//		});
        			},
        			scope: this
    			});

                },
            styleHtmlContent: true,
             
            }
        }
    ],
            
    dockedItems: [{
    xtype: 'toolbar',
    dock: 'bottom',
    defaults: {
        xtype: 'button',
        ui: 'action',
    },
    items: [{
        text: 'Heizung ein',
        handler: function() {Ext.Ajax.request({url: 'setSettingsValue.php?settingName=HeizungsModus&settingValue=An'})}
    }, {
        text: 'Sonnenschutz',
        handler: function() {RunMakro('Sonnenschutz')},
    }]
    }     
    ]/*,
    listeners: {
        ziTempWohnen: {
            click: handleClick2
        },
        body: {
            click: handleClick 
        }
        
    } 
*/        
});

function handleClick(setName){
    Ext.Msg.prompt(setName, "Gib die Solltemperatur ein:", Ext.emptyFn) 

}

// wrapping in closure to avoid global var

(function() {

var cfg = {
    cls: 'schlafzimmerBG',
    defaults: {
            xtype: 'button',
            ui: 'round',
            }
    }

cfg.items = [
    {
        cls: 'schalter schlafzimmerEin',
        handler: function() {RunMakro('LichtSchlafenAn')},
    }, {
        cls: 'schalter schlafzimmerAus',
        handler: function() {RunMakro('LichtSchlafenAus')},
    },
    {
        cls: 'schalter schlafzimmerRauf',
        handler: function() {RunMakro('RolloSchlafenAuf')},
    }, {
        cls: 'schalter schlafzimmerRunter',
        handler: function() {RunMakro('RolloSchlafenZu')},
    }
    ];

cfg.dockedItems = [{
    xtype: 'toolbar',
    dock: 'bottom',
    defaults: {
        xtype: 'button',
        ui: 'action',
    },
    items: [{
        text: 'Guten Abend',
        handler: function() {RunMakro('SchlafenGutenAbend')},
    }, {
        text: 'Gute Nacht',
        handler: function() {RunMakro('SchlafenGuteNacht')},
    }]
}];

demos.schlafzimmer = new Ext.Panel(cfg);

})();

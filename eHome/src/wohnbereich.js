// wrapping in closure to avoid global var

(function() {

var cfg = {
    cls: 'wohnbereichBG',
    defaults: {
            xtype: 'button',
            ui: 'round',
            }
    }



cfg.items = [
    {
        cls: 'schalter essenEin',
        handler: function() {RunMakro('LichtEssenAn')},
    }, {
        cls: 'schalter essenAus',
        handler: function() {RunMakro('LichtEssenAus')},
    },
    {
        cls: 'schalter wohnenEin',
        handler: function() {RunMakro('LichtWohnenAn')},
    }, {
        cls: 'schalter wohnenAus',
        handler: function() {RunMakro('LichtWohnenAus')},
    },
    {
        cls: 'schalter tvEin',
        handler: function() {RunMakro('LichtTVAn')},
    }, {
        cls: 'schalter tvAus',
        handler: function() {RunMakro('LichtTVAus')},
    },
    {
        cls: 'schalter kuecheRauf',
        handler: function() {RunMakro('RolloKuecheAuf')},
    }, {
        cls: 'schalter kuecheRunter',
        handler: function() {RunMakro('RolloKuecheZu')},
    },
    {
        cls: 'schalter ausgangRauf',
        handler: function() {RunMakro('RolloAusgangAuf')},
    }, {
        cls: 'schalter ausgangRunter',
        handler: function() {RunMakro('RolloAusgangZu')},
    },
    {
        cls: 'schalter essenRauf',
        handler: function() {RunMakro('RolloEssenAuf')},
    }, {
        cls: 'schalter essenRunter',
        handler: function() {RunMakro('RolloEssenZu')},
    },
    {
        cls: 'schalter arbeitRauf',
        handler: function() {RunMakro('RolloArbeitAuf')},
    }, {
        cls: 'schalter arbeitRunter',
        handler: function() {RunMakro('RolloArbeitZu')},
    },
    {
        cls: 'schalter w_sonnensegelEinfahren',
        handler: function() {RunMakro('SonnensegelEinfahren')},
    }, {
        cls: 'schalter w_sonnensegelAusfahren',
        handler: function() {RunMakro('SonnensegelAusfahren')},
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
        text: 'Rollos Auf',
        handler: function() {RunMakro('WohnenRollosAuf')},
    }, {
        text: 'Rollos Zu',
        handler: function() {RunMakro('WohnenRollosZu')},
    }, {
        text: 'Lichter An',
        handler: function() {RunMakro('WohnenLichterAn')},
    }, {
        text: 'Lichter Aus',
        handler: function() {RunMakro('WohnenLichterAus')},
    }, {
        text: 'Guten Abend',
        handler: function() {RunMakro('WohnenGutenAbend')},
    }, {
        text: 'Gute Nacht',
        handler: function() {RunMakro('WohnenGuteNacht')},
    }, {
        text: 'Sonnenschutz',
        handler: function() {RunMakro('Sonnenschutz')},
    }]
}];

demos.wohnbereich = new Ext.Panel(cfg);

})();

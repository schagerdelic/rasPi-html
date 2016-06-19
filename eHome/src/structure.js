sink.Structure = [{
    text: 'Wohnbereich',
    card: demos.wohnbereich,
    source: 'src/wohnbereich.js',
    cardSwitchAnimation: 'slide',
    leaf: true
},
{
    text: 'Schlafzimmer',
    card: demos.schlafzimmer,
    source: 'src/schlafzimmer.js',
    cardSwitchAnimation: 'slide',
    leaf: true
},
// {
    // text: 'Wetter',
    // card: demos.wetter,
    // source: 'src/wetter.js',
    // cardSwitchAnimation: 'slide',
    // leaf: true
// },
{
    text: 'Heizung',
    card: demos.heizung,
    source: 'src/heizung.js',
    cardSwitchAnimation: 'slide',
    leaf: true
},
{
    text: '',
    cls: '',
    source: '',
    cardSwitchAnimation: 'slide',
    leaf: true
},
/* {
    text: 'Gesamtansicht',
    card: demos.gesamt,
    source: 'src/gesamt.js',
    cardSwitchAnimation: 'slide',
    leaf: true
},*/
{ 
    text: 'Einstellungen',
    card: demos.einstellungen,
    source: 'src/einstellungen.js',
    cardSwitchAnimation: 'slide',
    leaf: true
},

];


Ext.regModel('Demo', {
    fields: [
        {name: 'text',        type: 'string'},
        {name: 'source',      type: 'string'},
        {name: 'preventHide', type: 'boolean'},
        {name: 'cardSwitchAnimation'},
        {name: 'card'}
    ]
});

sink.StructureStore = new Ext.data.TreeStore({
    model: 'Demo',
    root: {
        items: sink.Structure
    },
    proxy: {
        type: 'ajax',
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});

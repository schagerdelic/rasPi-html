demos.schlafzimmerImpl = Ext.extend(Ext.Panel, {
    initComponent : function() {
        this.button = new Ext.Panel({
            id: 'logger',
            scroll: 'vertical',
            styleHtmlContent: true,
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                title: 'Event Log',
                ui: 'light'
            }],
            html: '<div id="droppable">Droppable</div><div  id="draggable">Draggable</div><div id="invalid">Draggable</div>'
        });

        this.layout = 'fit';
        this.logger.flex = 1;
        this.info.flex = 1.5;
        this.items = [this.button];
        demos.schlafzimmerImpl.superclass.initComponent.call(this);
    },
});

demos.schlafzimmer = new demos.schlafzimmerImpl();

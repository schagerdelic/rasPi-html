NavigationPanelWidth = 150;

Ext.ns('sink', 'demos', 'Ext.ux');

Ext.ux.UniversalUI = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    items: [{
        cls: 'launchscreen',
        html: '<div><img src="resources/img/sencha.png" width="210" height="291" /><h1>Willkommen zu Schagerdelics eHome</h1><p>Sie befinden sich vor der Konsole zur Steuerung Ihres Heims.<br /> Waehlen Sie einen der links angefuehrten Bereiche um die Steuerung zu aktivieren.<br /><br /><span>eHome v2</span></p></div>'
    }],
    backText: 'Back',
    useTitleAsBackText: true,
    initComponent : function() {
        this.navigationButton = new Ext.Button({
            hidden: Ext.is.Phone || Ext.Viewport.orientation == 'landscape',
            text: 'Navigation',
            handler: this.onNavButtonTap,
            scope: this
        });

        this.backButton = new Ext.Button({
            text: this.backText,
            ui: 'back',
            handler: this.onUiBack,
            hidden: true,
            scope: this
        });
        var btns = [this.navigationButton];
        if (Ext.is.Phone) {
            btns.unshift(this.backButton);
        }

        this.navigationBar = new Ext.Toolbar({
            ui: 'dark',
            dock: 'top',
            title: this.title,
            items: btns.concat(this.buttons || [])
        });

        this.navigationPanel = new Ext.NestedList({
            store: sink.StructureStore,
            useToolbar: Ext.is.Phone ? false : true,
            updateTitleText: false,
            dock: 'left',
            hidden: !Ext.is.Phone && Ext.Viewport.orientation == 'portrait',
            toolbar: Ext.is.Phone ? this.navigationBar : null,
            listeners: {
                itemtap: this.onNavPanelItemTap,
                scope: this
            }
        });

        this.navigationPanel.on('back', this.onNavBack, this);

        if (!Ext.is.Phone) {
            this.navigationPanel.setWidth(NavigationPanelWidth);
        }

        this.dockedItems = this.dockedItems || [];
        this.dockedItems.unshift(this.navigationBar);

        if (!Ext.is.Phone && Ext.Viewport.orientation == 'landscape') {
            this.dockedItems.unshift(this.navigationPanel);
        }
        else if (Ext.is.Phone) {
            this.items = this.items || [];
            this.items.unshift(this.navigationPanel);
        }

        this.addEvents('navigate');


        Ext.ux.UniversalUI.superclass.initComponent.call(this);
    },

    toggleUiBackButton: function() {
        var navPnl = this.navigationPanel;

        if (Ext.is.Phone) {
            if (this.getActiveItem() === navPnl) {

                var currList      = navPnl.getActiveItem(),
                    currIdx       = navPnl.items.indexOf(currList),
                    recordNode    = currList.recordNode,
                    title         = navPnl.renderTitleText(recordNode),
                    parentNode    = recordNode ? recordNode.parentNode : null,
                    backTxt       = (parentNode && !parentNode.isRoot) ? navPnl.renderTitleText(parentNode) : this.title || '',
                    activeItem;


                if (currIdx <= 0) {
                    this.navigationBar.setTitle(this.title || '');
                    this.backButton.hide();
                } else {
                    this.navigationBar.setTitle(title);
                    if (this.useTitleAsBackText) {
                        this.backButton.setText(backTxt);
                    }

                    this.backButton.show();
                }
            // on a demo
            } else {
                activeItem = navPnl.getActiveItem();
                recordNode = activeItem.recordNode;
                backTxt    = (recordNode && !recordNode.isRoot) ? navPnl.renderTitleText(recordNode) : this.title || '';

                if (this.useTitleAsBackText) {
                    this.backButton.setText(backTxt);
                }
                this.backButton.show();
            }
            this.navigationBar.doLayout();
        }

    },

    onUiBack: function() {
        var navPnl = this.navigationPanel;

        // if we already in the nested list
        if (this.getActiveItem() === navPnl) {
            navPnl.onBackTap();
        // we were on a demo, slide back into
        // navigation
        } else {
            this.setActiveItem(navPnl, {
                type: 'slide',
                reverse: true
            });
        }
        this.toggleUiBackButton();
        this.fireEvent('navigate', this, {});
    },

    onNavPanelItemTap: function(subList, subIdx, el, e) {
        var store      = subList.getStore(),
            record     = store.getAt(subIdx),
            recordNode = record.node,
            nestedList = this.navigationPanel,
            title      = nestedList.renderTitleText(recordNode),
            card, preventHide, anim;

        if (record) {
            card        = record.get('card');
            anim        = record.get('cardSwitchAnimation');
            preventHide = record.get('preventHide');
        }

        if (Ext.Viewport.orientation == 'portrait' && !Ext.is.Phone && !recordNode.childNodes.length && !preventHide) {
            this.navigationPanel.hide();
        }

        if (card) {
            this.setActiveItem(card, anim || 'slide');
            this.currentCard = card;
        }

        if (title) {
            this.navigationBar.setTitle(title);
        }
        this.toggleUiBackButton();
        this.fireEvent('navigate', this, record);
    },

    onNavButtonTap : function() {
        this.navigationPanel.showBy(this.navigationButton, 'fade');
    },

    layoutOrientation : function(orientation, w, h) {
        if (!Ext.is.Phone) {
            if (orientation == 'portrait') {
                this.navigationPanel.hide(false);
                this.removeDocked(this.navigationPanel, false);
                if (this.navigationPanel.rendered) {
                    this.navigationPanel.el.appendTo(document.body);
                }
                this.navigationPanel.setFloating(true);
                this.navigationPanel.setHeight(400);
                this.navigationButton.show(false);
            }
            else {
                this.navigationPanel.setFloating(false);
                this.navigationPanel.show(false);
                this.navigationButton.hide(false);
                this.insertDocked(0, this.navigationPanel);
            }
            this.navigationBar.doComponentLayout();
        }

        Ext.ux.UniversalUI.superclass.layoutOrientation.call(this, orientation, w, h);
    }
});

sink.Main = {
    init : function() {
        this.ui = new Ext.ux.UniversalUI({
            title: Ext.is.Phone ? 'eHome v2' : 'eHome v2',
            useTitleAsBackText: false,
            navigationItems: sink.Structure,
            listeners: {
                navigate : this.onNavigate,
                scope: this
            }
        });

        var t1=setTimeout("reloadPanels()",1000);
        var t2=setTimeout("loadSettings()",2000);
		
		/////
/*
        var store      = sink.StructureStore;
            record     = store.getAt(1);
            recordNode = record.node;
            nestedList = this.navigationPanel;
            title      = nestedList.renderTitleText(recordNode);
            

        if (record) {
            card        = record.get('card');
            anim        = record.get('cardSwitchAnimation');
            preventHide = record.get('preventHide');
        }

        if (Ext.Viewport.orientation == 'portrait' && !Ext.is.Phone && !recordNode.childNodes.length && !preventHide) {
            this.navigationPanel.hide();
        }

        if (card) {
            this.setActiveItem(card, anim || 'slide');
            this.currentCard = card;
        }

        if (title) {
            this.navigationBar.setTitle(title);
        }
        this.toggleUiBackButton();
        this.fireEvent('navigate', this, record);
		/////
*/
    },


    onNavigate : function(ui, record) {
    },
};

Ext.setup({
    tabletStartupScreen: 'resources/img/tablet_startup.png',
    phoneStartupScreen: 'resources/img/phone_startup.png',
    icon: 'resources/img/icon.png',
    glossOnIcon: false,

    onReady: function() {
        sink.Main.init();
    }
});

Ext.ns('demos', 'demos.Data');


var gesamtInfoRequest;
var gesamtSzenarioRequest;

function createHTTPRequest()
             {
                var req = null;
                try
                {
                    req = new XMLHttpRequest();
                }
                catch (e)
                {
                    try
                    {
                        req = new ActiveXObject("Msxml2.XMLHTTP");
                    } 
                    catch (e)
                    {
                        try
                        {
                            req = new ActiveXObject("Microsoft.XMLHTTP");
                        } 
                        catch (failed)
                        {
                            req = null;
                        }
                    }  
                }
 
                if (req == null)
                      alert("Error creating request object!");
 
		return req;
             }

function RunMakro(cmd,updateInfo)
{
  		  req = createHTTPRequest();
          var url = 'runMakro.php?cmd='+cmd;

          req.open("GET", url, true);
          //req5.onreadystatechange = runMakroCB;
          req.setRequestHeader("Content-Type",
                                      "application/x-www-form-urlencoded");
          req.send(null);
          
          if(updateInfo)
          {
                  //reloadPanels();
                  //updateGesamtPanel('getStatusInfo.php',gesamtInfoRequest);
          }
}


/* 
function updateInfosCB(request)
{
    
	if (request.readyState != 4)
		return;

    demos.gesamt.infos.update(request.responseText);
    demos.gesamt.infos.setHeight();
}

function updateSzenariosCB(request)
{
	if (request.readyState != 4)
		return;

    demos.gesamt.szenarios.update(request.responseText+'<BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR>');
    demos.gesamt.szenarios.setHeight();
}
 
function updateGesamtPanel(inURL, request)
{
  		  request = createHTTPRequest();
          var url = inURL;

          request.open("GET", url, true);
          
          if (url == 'getStatusInfo.php')
          {
            request.onreadystatechange = function() { updateInfosCB(request); }; 
          }
          else
          {              
            request.onreadystatechange = function() { updateSzenariosCB(request); };
          } 
          request.setRequestHeader("Content-Type",
                                      "application/x-www-form-urlencoded");
          request.send(null);
}
*/

 
function reloadPanels()
{

//    updateGesamtPanel('getStatusInfo.php',gesamtInfoRequest);

//    eHomeStatus.load()
//    demos.wetter.items.first().refresh()
//    demos.heizung.items.first().refresh()
    
//    var panel    = demos.heizung;
//    dataview = panel.items.first();
//    fhzAnzeige = panel.dockedItems.last();
    
//    store    = dataview.store;
//    store.load();

    var panel2    = demos.heizung;
    dataview2 = panel2.items.first();
    store2    = dataview2.store;
    store2.load();

/*    
    Ext.Ajax.request({
        //url: 'getStatusValue.php',        
	URL: 'getObjectValue.php?obj=Anzeige',
	success: function(response) {
            fhzAnzeige.setTitle(response.responseText);
        },
        scope: this
    });
*/
        
    var t=setTimeout("reloadPanels()",60000);
}

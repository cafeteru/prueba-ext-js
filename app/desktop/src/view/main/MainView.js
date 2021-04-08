Ext.define("ModernTunes.view.main.MainView", {
  extend: "Ext.tab.Panel",
  xtype: 'mainview',
  requires: [
      'ModernTunes.view.TunesView'
  ],
  controller: "mainviewcontroller",
  viewModel: {
      type: "mainviewmodel"
  },
  tabBarPosition: 'bottom',
  // Pestañas que se muestran
  items: [{
      title: "Thumbnails",
      xtype: 'tunesview',
      bind: {
          store: '{tunes}'
      }
  }, {
      title: "Grid",
      html: "Tunes Grid"
  }]
});

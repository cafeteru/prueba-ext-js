Ext.define('ModernTunes.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',

  onButtonClick: function (button) {
    this.lookupReference('df').setValue(Date.now())
  }

})

Ext.define('ModernTunes.view.main.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mainviewmodel',
  // Hace los imports
  requires: [
    'ModernTunes.model.Tune'
  ],
  // Aqui se guardan variables en memoria, como en ngRedux
  stores: {
    tunes: {
      model: 'ModernTunes.model.Tune', // tipo
      autoLoad: true, // si lo carga automaticamente
      sorters: ['artist', 'title'] // ordena los datos
    }
  }
});
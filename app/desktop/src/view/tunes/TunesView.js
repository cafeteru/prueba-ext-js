// define un componente de la vista
Ext.define('ModernTunes.view.TunesView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tunesview',
    scrollable: true,
    cls: 'tunes-view',
    layout: {
        type: 'box',
        pack: 'space-around',
        wrap: true
    },
    itemCls: 'video',
    itemTpl: [
        '<figure>',
            '<figure class="thumbnail" style="background-image:url(\'{image}\')"></figure>',
            '<figcaption>',
                '<span class="title">{title}</span><br>',
                '<span class="artist">{artist}</span>',
            '</figcaption>',
        '</figure>'
    ]
});
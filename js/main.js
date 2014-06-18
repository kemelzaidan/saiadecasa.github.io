require.config({
    baseUrl: 'js/lib',
    paths : {
        app: '../main',
        hgn: 'hgn',
        speakingurl: [
            '//cdnjs.cloudflare.com/ajax/libs/speakingurl/0.8.1/speakingurl.min',
            './speakingurl'
        ],
        addthis_widget: [
            '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52b74d1973963898',
            './addthis_widget'
        ]
    },
    hgn: {templateExtension: ".html"}
});

require([
    'json!../../events.json',
    'hgn!../../event',
    'addthis_widget',
    'speakingurl'
    ], parseEvents);

function parseEvents(events, template, addthis_widget, speakingurl){
    for (event in events) {
        event.slug = speakingurl.getSlug(events[event].name);
        document.getElementById('events')
                .innerHTML += template(events[event]);
    }
}

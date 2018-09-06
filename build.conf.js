module.exports = {
    module: {
        name: 'library',
        styles: 'index',
        export: 'library',
        standalone: 'library'
    },
    build: {
        js: false,
        ts: false,
        tsd: true,
        bundle: true,
        html: true,
        sass: true,
        lib: true,
        images: true,
        dist: false
    },
    file: {
        lib: []
    },
    samples: {
        port: 8180,
        https: false
    },
    api: {
        port: 8181
    }
};

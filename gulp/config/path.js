import * as pathNode from 'path';

const _SRC_ = './src',
      _DIST_ = './dist';

export const path = {
    src: {
        files: [`${_SRC_}/images/**/*.*`,
                `${_SRC_}/icons/**/*.*`,
                `${_SRC_}/fonts/**/*.*`,
                `${_SRC_}/video/**/*.*`,
            ],
        html: `${_SRC_}/*.html`,
        css: `${_SRC_}/scss/**/*.scss`,
        js: `${_SRC_}/js/main.js`
    },
    dist: {
        files: `${_DIST_}`,
        html: `${_DIST_}`,
        css: `${_DIST_}/css`,
        js: `${_DIST_}/js`
    },
    watch: {
        files: `${_SRC_}/assets/`,
        html: `${_SRC_}/**/*.html`,
        css: `${_SRC_}/scss/**/*.scss`,
        js: `${_SRC_}/js/**/*.js`
    },
};
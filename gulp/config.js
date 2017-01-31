var src               = 'app';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var srcAssets         = 'app/assets';
var developmentAssets = 'build/development/assets';
var productionAssets  = 'build/production/assets';

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      open: false,
      port: 9999,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/scripts/*.js',
        developmentAssets + '/images/**',
        developmentAssets + '/fonts/*',
        development + '/*.html'
      ]
    },
    production: {
      open: false,
      server: {
        baseDir: [production]
      },
      port: 9998
    }
  },
  delete: {
    src: [build]
  },
  sass: {
    src:  srcAssets + '/scss/**/*.{sass,scss}',
    dest: developmentAssets + '/css',
    options: {
      noCache: true,
      compass: false,
      bundleExec: true,
      sourcemap: true
    }
  },
  nunjucks: {
    src: src + '/templates/*.nunjucks',
    templateDir: src + '/templates/',
    data: src + '/data/data.json',
    dest: development
  },
  autoprefixer: {
    browsers: ['last 2 versions'],
    cascade: false,
    flexbox: 'no-2009'
  },
  browserify: {
    // Enable source maps
    debug: false,
    // Additional file extensions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries:    './' + srcAssets + '/scripts/functions.js',
      dest:       developmentAssets + '/scripts',
      outputName: 'functions.js'
    },{
      entries:    './' + srcAssets + '/scripts/head.js',
      dest:       developmentAssets + '/scripts',
      outputName: 'head.js'
    }]
  },
  watch: {
    sass:       srcAssets + '/scss/**/*.{sass,scss}',
    scripts:    srcAssets + '/scripts/**/*.js',
    images:     srcAssets + '/images/**/*',
    templates:  src + '/**/*.nunjucks',
    icons:      srcAssets + '/icons/*.svg'
  },
  scsslint: {
    src: [
      srcAssets + '/scss/**/*.{sass,scss}',
      '!' + srcAssets + '/scss/base/_sprites.scss',
      '!' + srcAssets + '/scss/helpers/_meyer-reset.scss'
      ],
      options: {
        bundleExec: true
      }
  },
  jshint: {
    src: srcAssets + '/scripts/functions.js'
  },
  images: {
    src:  srcAssets + '/images/**/*',
    dest: developmentAssets + '/images'
  },
  webp: {
    development: {
      src: developmentAssets + '/images/**/*.{jpg,jpeg,png}',
      dest: developmentAssets + '/images/',
      options: {
        quality: 100
      }
    },
    production: {
      src: productionAssets + '/images/**/*.{jpg,jpeg,png}',
      dest: productionAssets + '/images/',
      options: {
        quality: 100
      }
    },
  },
  icons: {
    inlineSvg: true,
    fileName: "icons.svg",
    src:  srcAssets + '/icons/*.svg',
    destDevelopment: developmentAssets + '/images',
    destProduction: productionAssets + '/images'
  },
  base64: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets + '/css',
    options: {
      baseDir: build,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    }
  },
  production: {
    server: {
      baseDir: [production]
    },
    port: 9998
  },
  optimize: {
    css: {
      src:  developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {}
    },
    html: {
      src:  development + '/*.html',
      dest: production + '/',
      options: {}
    },
    js: {
      src:  developmentAssets + '/scripts/*.js',
      dest: productionAssets + '/scripts/',
      options: {}
    },
    images: {
      src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: productionAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progessive: true,
        interlaced: true
      }
    },
    svg: {
      src:  developmentAssets + '/images/**/*.svg',
      dest: productionAssets + '/images/'
    }
  },
  revision: {
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/scripts/*.js'
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'manifest.json',
        path: productionAssets
      }
    }
  },
  collect: {
    src: [
      productionAssets + '/manifest.json',
      production + '/**/*.{html,xml,txt,json,css,js}',
      '!' + production + '/feed.xml'
    ],
    dest: production
  },
  gzip: {
    src: production + '/**/*.{html,xml,json,css,js,svg}',
    dest: production,
    options: {}
  },
  rsync: {
    src: production + '/**',
    options: {
      destination: '/www/zee/',
      root: production,
      hostname: 'michielkoning.nl',
      incremental: true,
      progress: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      exclude: ['.DS_Store'],
      include: []
    }
  },
  files: {
    src: [
      src + '/files/**/*',
      src + '/files/.htaccess'
    ],
    dest: production
  },
  serviceWorker: {
    files: [
      production + '/index.html',
      productionAssets + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'
    ],
    dest: production
  }
};
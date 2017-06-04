const SCREENSHOT_PATH = "./screenshots";
const BINPATH = './node_modules/nightwatch/bin/';

module.exports = {
    "src_folders": "./tests",
    "output_folder": "./reports",
    "custom_commands_path" : "node_modules/nightwatch-custom-commands-assertions/js/commands",
    "custom_assertions_path" : "node_modules/nightwatch-custom-commands-assertions/js/assertions",
    "page_objects_path": "./pages",
    "globals_path" : "",
    "live_output" : true,
    //"parallel_process_delay" : 10,
    "disable_colors": false,
    "test_workers" : true,

    "selenium": {
        "start_process": true,
        "server_path": BINPATH + "selenium.jar",
        "log_path": "./reports",
        "host": "127.0.0.1",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver" : BINPATH + "chromedriver"
        }
    },

    "test_settings": {
        "default": {
            "screenshots": {
                "enabled": true,
                "path": SCREENSHOT_PATH
            },
            "globals": {
                "waitForConditionTimeout": 5000
            },
            "silent" : true,
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        }
    }
};

//selenium-download
require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) {
    if (err || !stat || stat.size < 1) {
        require('selenium-download').ensure(BINPATH, function(error) {
            if (error) throw new Error(error);
            console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
        });
    }
});


function padLeft (count) {
    return count < 10 ? '0' + count : count.toString();
}

var FILECOUNT = 0;
function imgpath (browser) {
    var a = browser.options.desiredCapabilities;
    var meta = [a.platform];
    meta.push(a.browserName ? a.browserName : 'any');
    meta.push(a.version ? a.version : 'any');
    meta.push(a.name);
    var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
    return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;
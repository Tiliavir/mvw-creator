// var fs = require('fs');
// var path = require('path');
// var glob = require('glob');
// var stripJSONComments = require('strip-json-comments');

// var configs = [
//   '.mvwc-config',
//   '.mvwc-config.js',
//   '.mvwc-config.json',
//   'package.json'
// ];

// exports.getContent = function (config, directory) {
//   if (!config) {
//     return;
//   }

//   var configPath = path.resolve(directory, config);
//   var content = this.loadFromFile(configPath);

//   config = path.basename(config);

//   return content && config === 'package.json' ? content.pugLintConfig || content.jadeLintConfig : content;
// };

// exports.load = function (config, cwd) {
//   var content;
//   var directory = cwd || process.cwd();

//   if (config) {
//     return this.getContent(config, directory);
//   }

//   content = this.getContent(
//     findup(configs, {nocase: true, cwd: directory}, function (configPath) {
//       if (path.basename(configPath) === 'package.json') {
//         return Boolean(this.getContent(configPath));
//       }

//       return true;
//     }.bind(this))
//   );

//   if (content) {
//     return content;
//   }

//   return this.loadFromHomeDirectory();
// };

// exports.loadFromFile = function (configPath) {
//   var content;
//   var ext;

//   if (fs.existsSync(configPath)) {
//     ext = path.extname(configPath);

//     if (ext === '.js') {
//       content = require(configPath);
//     } else {
//       content = JSON.parse(stripJSONComments(fs.readFileSync(configPath, 'utf8')));
//     }

//     content.configPath = configPath;
//   }

//   return content;
// };

// function findup(patterns, options, fn) {
//   var lastpath;
//   var file;

//   options = Object.create(options);
//   options.maxDepth = 1;
//   options.cwd = path.resolve(options.cwd);

//   do {
//     file = patterns.filter(filterPatterns)[0];

//     if (file) {
//       return path.join(options.cwd, file);
//     }

//     lastpath = options.cwd;
//     options.cwd = path.resolve(options.cwd, '..');
//   } while (options.cwd !== lastpath);

//   function filterPatterns(pattern) {
//     var configPath = glob.sync(pattern, options)[0];

//     if (configPath) {
//       return fn(path.join(options.cwd, configPath));
//     }
//   }
// }

#!/usr/bin/env node
'use strict';

var _mdLinks = require("./md-links.js");

var args = process.argv.slice(2);
var path = args[0];
var options = {
  validate: false
};

if (args.length === 1) {
  (0, _mdLinks.mdLinks)(path, options).then(function (resp) {
    // console.log(resp);
    resp.forEach(function (values) {
      return console.log(" Path: ".concat(values.file, "\n Link: ").concat(values.href, "\n Text: ").concat(values.text));
    });
  }).catch(function (err) {
    return err;
  });
}

if (args.length === 2) {
  if (args[1] === '--validate' || args[1] === '--v') {
    options.validate = true;
    (0, _mdLinks.mdLinks)(path, options).then(function (resp) {
      resp.forEach(function (values) {
        return console.log(" Path: ".concat(values.file, "\n Link: ").concat(values.href, "\n Status: ").concat(values.status, "\n StatusText: ").concat(values.message, "\n Text: ").concat(values.text, "\n"));
      });
    }).catch(function (err) {
      return err;
    });
  } else if (args[1] === '--stats' || args[2] === '--s') {
    Promise.all([statsLinks(route), uniqueStatsLinks(route)]).then(function (resp) {
      return resp.forEach(function (values) {
        return console.log(values);
      });
    }).catch(function (err) {
      return err;
    });
    console.log((0, _mdLinks.mdLinks)(path, option));
  }
}

if (args.length === 3) {
  if ((args[1] === '--validate' || args[1] === '--v') && (args[2] === '--stats' || args[2] === '--s')) {
    Promise.all([statsLinks(route), uniqueStatsLinks(route), brokenStatsLinks(route)]).then(function (resp) {
      return resp.forEach(function (values) {
        return console.log(values);
      });
    }).catch(function (err) {
      return err;
    });
  } else if ((args[1] === '--stats' || args[2] === '--s') && (args[2] === '--validate' || args[2] === '--v')) {
    Promise.all([statsLinks(route), uniqueStatsLinks(route), brokenStatsLinks(route)]).then(function (resp) {
      return resp.forEach(function (values) {
        return console.log(values);
      });
    }).catch(function (err) {
      return err;
    });
  }
}
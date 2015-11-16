// package metadata file for Meteor.js
var packageName = 'rshashkov:angular-meteor-bootstrap';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.0.1';
var summary = 'UI Bootstrap - AngularJS directives specific to Bootstrap (a module for Angular-meteor).';
var gitLink = 'https://github.com/ruslanchek/angular-meteor-bootstrap';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
	name: packageName,
	version: version,
	summary: summary,
	git: gitLink,
	documentation: documentationFile
});

Package.onUse(function(api) {
	api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

	api.addFiles('src/stackedMap/stackedMap.js', where);
	api.addFiles('src/position/position.js', where);
	api.addFiles('src/debounce/debounce.js', where);
	api.addFiles('src/dateparser/dateparser.js', where);
	api.addFiles('src/tooltip/tooltip.js', where);

	api.addFiles('src/typeahead/typeahead.js', where);
	api.addFiles('src/datepicker/datepicker.js', where);
	api.addFiles('src/dropdown/dropdown.js', where);
	api.addFiles('src/popover/popover.js', where);

	api.addFiles('src/modal/modal.js', where);
	api.addFiles('src/timepicker/timepicker.js', where);
});

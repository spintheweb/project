/*!
 * Page
 * Copyright(c) 2017 Giancarlo Trevisan
 * MIT Licensed
 */
'use strict';

const path = require('path');
const Base = require('./Base');

module.exports = class Page extends Base {
	constructor(name, template, lang) {
		super(name, lang);
		this._contentType = 'text/html';
		this._template = template || 'index.htm';
	}

	contentType(value) {
		if (typeof value === 'undefined') return this._contentType;
		this._contentType = value;
		if (typeof this.webbase.changed === 'function')
			this.webbase.changed(this);
		return this;
	}
	template(value) {
		if (typeof value === 'undefined') return this._template;
		this._template = value;
		if (typeof this.webbase.changed === 'function')
			this.webbase.changed(this);
		return this;
	}

	render(req) {
		if (this.granted(req.user))
			return path.join(process.mainModule.path, 'public', this.template());
		return '';
	}
	write() {
		let fragment = `<page id="${this.id}" template="${this._template}">`;
		fragment += super.write();
		fragment += '</page>';

		return fragment;
	}
}

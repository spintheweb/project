/*!
 * text
 * Copyright(c) 2017 Giancarlo Trevisan
 * MIT Licensed
 */
'use strict';

const Content = require('../elements/Content');

// Plain text, i.e., renders template as plain text if there is a datasource @ and @@ substitutions are performed
module.exports = class Text extends Content {
	constructor(name, template, lang) {
		super(name, template, lang);
		this._cssClass = null;
	}

	render(socket) {
		return super.render(socket, socket => {
			return this.template(socket.target.lang);
		});
	}
}
/*
  - Copyright (c) 2018 Cloudware S.A. All rights reserved.
  -
  - This file is part of casper-context-all.
  -
  - casper-context-all is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as published by
  - the Free Software Foundation, either version 3 of the License, or
  - (at your option) any later version.
  -
  - casper-context-all  is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with casper-context-all.  If not, see <http://www.gnu.org/licenses/>.
  -
 */

import './casper-menu-list.js';
import './casper-context-menu.js';
import './casper-simple-select.js';
import './casper-context-select.js';
import './casper-optgroup-select.js';
import './casper-context-menu-light.js';

import { PolymerElement } from '@polymer/polymer/polymer-element.js';

class CasperContextAll extends PolymerElement {

  static get is () {
		return 'casper-context-all';
  }
}
customElements.define(CasperContextAll.is, CasperContextAll);

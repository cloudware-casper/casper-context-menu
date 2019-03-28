/*
  - Copyright (c) 2018 Cloudware S.A. All rights reserved.
  -
  - This file is part of casper-context-menu-light.
  -
  - casper-context-menu-light is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as published by
  - the Free Software Foundation, either version 3 of the License, or
  - (at your option) any later version.
  -
  - casper-context-menu-light  is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with casper-context-menu-light.  If not, see <http://www.gnu.org/licenses/>.
  -
 */

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { IronFitBehavior } from '@polymer/iron-fit-behavior/iron-fit-behavior.js';

class CasperContextMenuLight extends mixinBehaviors([IronFitBehavior], PolymerElement) {

    static get is () {
  		return 'casper-context-menu-light';
    }

  ready () {
    super.ready();
    // this.shadowRoot.querySelectorAll('slot').forEach(slot => slot.addEventListener('click', e => this._menu_clicked(e)))
  }

  _menu_clicked (e) {
    if( e.target.textContent != undefined ){
      var parent_element = this.parentElement.parentElement
      if(parent_element.querySelector("[slot=trigger] a") != undefined){
        parent_element.querySelector("[slot=trigger] a").text = e.target.textContent;
      }
      parent_element.$.list.close();
    }
  }
}
customElements.define(CasperContextMenuLight.is, CasperContextMenuLight);

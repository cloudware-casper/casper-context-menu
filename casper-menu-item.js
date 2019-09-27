/*
  - Copyright (c) 2018 Cloudware S.A. All rights reserved.
  -
  - This file is part of casper-context-menu.
  -
  - casper-context-menu is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as published by
  - the Free Software Foundation, either version 3 of the License, or
  - (at your option) any later version.
  -
  - casper-context-menu  is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with casper-context-menu.  If not, see <http://www.gnu.org/licenses/>.
  -
 */

import '@polymer/iron-icon/iron-icon.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CasperMenuItem extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          align-items: center;
          font-size: 13px;
          padding: 6px 12px 6px 12px;
          margin: 0px;
          font-weight: normal;
          cursor: pointer;
        }

        :host(:hover) {
          background-color: var(--dark-primary-color);
          color: white;
        }

        :host(:focus) {
          outline: 0;
        }

        :host([disabled]) {
          color: #ccc;
          pointer-events: none;
        }

        :host([hidden]) {
          display: none;
        }

        :host([separator]) {
          border-top: solid gray 1px;
        }

        iron-icon {
          --iron-icon-height: 18px;
          --iron-icon-width:  18px;
          padding-right: 3px;
        }

        ::slotted(a) {
          color: var(--lumo-body-text-color);
          text-decoration: none;
        }

        ::slotted(a):hover {
          text-decoration: none;
        }

        ::slotted(a):visited {
          text-decoration: none;
        }


      </style>
      <iron-icon id="icon" icon="[[icon]]"></iron-icon>
      <slot></slot>
  `;
  }

  static get is () {
    return 'casper-menu-item';
  }

  static get properties () {
    return {
      /** icon name */
      icon: String
    };
  }

  ready () {
    super.ready();
    if ( this.icon === undefined ) {
      this.$.icon.style.display = "none";
    }
    this.$.icon.addEventListener("click", e => this._clickLink(e));
  }

  _clickLink(e) {
    let a = this.querySelector('a');
    if ( a && a.hasAttribute('href') ) {
      a.click();
    }
  }
}

customElements.define(CasperMenuItem.is, CasperMenuItem);
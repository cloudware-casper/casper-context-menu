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

import '@casper2020/casper-icons/casper-icon.js';
import '@polymer/iron-icon/iron-icon.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';

class CasperMenuItem extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          align-items: center;
          font-size: 13px;
          padding: 6px 12px;
          margin: 0;
          font-weight: normal;
          cursor: pointer;
        }

        :host(:hover) {
          background-color: var(--primary-color);
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
          width: 18px;
          height: 18px;
          margin-right: 5px;
        }

        :host casper-icon {
          width: 15px;
          height: 15px;
          margin-right: 5px;
          --casper-icon-fill-color: rgb(58, 58, 58);
        }

        :host(:hover) casper-icon {
          --casper-icon-fill-color: white;
        }

        ::slotted(a) {
          color: var(--lumo-body-text-color);
          text-decoration: none;
        }

        ::slotted(a):hover,
        ::slotted(a):visited {
          text-decoration: none;
        }
      </style>
      <template is="dom-if" if="[[!useNewIconset]]">
        <iron-icon id="icon" icon="[[icon]]"></iron-icon>
      </template>

      <template is="dom-if" if="[[useNewIconset]]">
        <casper-icon id="icon" icon="[[icon]]"></casper-icon>
      </template>
      <slot></slot>
    `;
  }

  static get is () {
    return 'casper-menu-item';
  }

  static get properties () {
    return {
      /** icon name */
      icon: String,
      useNewIconset: {
        type: Boolean,
        value: false
      }
    };
  }

  ready () {
    super.ready();

    if (!this.icon) {
      afterNextRender(this, () => {
        this.useNewIconset
          ? this.shadowRoot.querySelector('casper-icon').style.display = 'none'
          : this.shadowRoot.querySelector('iron-icon').style.display = 'none';
      });
    }

    this.addEventListener('click', event => this.__clickLink(event));
  }

  __clickLink(event) {
    if (event.composedPath().some(element => element.nodeName && element.nodeName.toLowerCase() === 'a')) return;

    const anchor = this.querySelector('a');
    if (anchor && anchor.hasAttribute('href')) {
      anchor.click();
    }
  }
}

customElements.define(CasperMenuItem.is, CasperMenuItem);

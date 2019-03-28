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

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CasperMenuList extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          align-items: left;
          margin: 0px;
          font-weight: 600;
          cursor: pointer;
        }

        ::slotted(a) {
          width: 100%;
          padding: 6px 12px 6px 12px;
          color: var(--dark-primary-color);
          /* background: grey; */
        }

        :host a {
          color: var(--primary-color);
          text-decoration: underline;
        }

        :host a:hover {
          color: red;
        }

        :host(:hover), :host(:hover) ::slotted(a) {
          color: white;
          background-color: var(--dark-primary-color);
        }

        /* :host(:hover) > a {
          text-decoration: none;
          color: red;
        } */

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

      </style>
      <slot></slot>
    `;
  }

  static get is () {
    return 'casper-menu-list';
  }
}
customElements.define(CasperMenuList.is, CasperMenuList);

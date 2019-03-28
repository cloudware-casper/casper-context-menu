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

class CasperMenuSeparator extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          /*background: var(--primary-background-color, white);*/
          /*border-radius: var(--radius-primary, 6px);*/
          /*box-shadow: rgba(0, 0, 0, 0.24) -2px 5px 12px 0px, rgba(0, 0, 0, 0.12) 0px 0px 12px 0px;*/
          overflow: hidden;
        }

        .inner {
          color: var(--primary-color);
          font-size: 13px; /*var(--default-header-size, 13px);*/
          padding: 6px 12px 6px 12px;
          margin: 0px;
          /*text-transform: uppercase;*/
          cursor: default;
          text-align: left;
          background-color: #efefef;
          font-weight: bold;
        }

        paper-listbox {
          /* color: var(--primary-text-color, gray); */
          border-radius: var(--radius-primary, 6px);
          padding: 0px;
        }
      </style>


      <div class="inner"><slot>---</slot></div>
    `;
  }

  static get is () {
    return 'casper-menu-separator';
  }
}

customElements.define(CasperMenuSeparator.is, CasperMenuSeparator);

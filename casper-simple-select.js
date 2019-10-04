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

class CasperSimpleSelect extends PolymerElement {
  static get template() {
    return html`
    <style>
      iron-icon {
        /* background-color: green; */
      }

      iron-icon {
        --iron-icon-width: 14px;
        --iron-icon-height: 12px;
        --iron-icon-fill-color: var(--primary-color);
      }

      #inner_box > a {
        font-weight: bold;
        cursor: pointer;
        color: var(--primary-color);
      }

      #inner_box:hover > a:hover{
        color: var(--dark-primary-color);
      }

      #inner_box:hover a,
      #inner_box:hover iron-icon {
        text-decoration: none;
        cursor: pointer;
      }

      #inner_box:hover iron-icon {
        --iron-icon-fill-color: var(--dark-primary-color);
      }

      #slot_text {
        line-height: 30px;
        display: inline-block;
        padding-right: 0px;
      }

      casper-menu-list a[data-label]::after {
        content: attr(data-label);
        text-transform: uppercase;
        margin-left: 5px;
        font-size: 9px;
        background-color: var(--primary-color);
        color: white;
        padding: 3px 3px;
        display: inline;
        border-radius: 2px;
      }


      casper-menu-list a:hover[data-label]::after{
        color: var(--primary-color);
        background: white;
      }

    </style>

    <span id="inner_box">
      <a id="slot_text" href="[[href]]" data-level="[[level]]"><slot></slot></a>
      <iron-icon icon="toc-icons:expand-more">icon</iron-icon>
      <casper-context-menu id="select_options" no-overlap="" vertical-align="auto" horizontal-align="auto">
        <template is="dom-repeat" items="[[items]]" index-as="index">
          <casper-menu-list on-click="customclick">
            <a data-level="3" href="[[item.link]]" data-wizard$="[[item.data_wizard]]" data-wizard-options$="[[item.data_wizard_options]]"  data-label$="[[item.label]]" data-remote$="[[item.remote]]">[[item.title]]</a> 
          </casper-menu-list>
        </template>
      </casper-context-menu>
    </span>
`;
  }

  static get is () {
    return 'casper-simple-select';
  }

  static get properties () {
    return {
    }
  }

  customclick(e){
    var level = Number(e.target.getAttribute("data-level"));
    var text = e.target.text;
    this.innerText = text;
    this.$.select_options.close();

    this.app.$.main_menu.label_3_link = e.target.href;
  }

  ready () {
    super.ready();
    this.$.slot_text.addEventListener('click',     e => this.$.select_options.open());
    this.$.inner_box.addEventListener('mouseover', e => this.$.select_options.open());
    this.$.inner_box.addEventListener('mouseout',  e => this.$.select_options.close());
  }
}

window.customElements.define(CasperSimpleSelect.is, CasperSimpleSelect);

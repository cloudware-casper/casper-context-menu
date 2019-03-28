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

import './casper-menu-list.js';
import './casper-context-menu.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CasperOptgroupSelect extends PolymerElement {
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

        casper-context-menu p {
          padding: 0 10px;
          padding-bottom: 5px;
          font-weight: bold;
          /* background-color: red; */
          margin: 0;
          margin-top: 10px;
          border-bottom: 1px grey solid;
        }
      </style>

      <span id="inner_box">
        <a id="slot_text" href="[[href]]" data-level="[[level]]"><slot></slot></a>
        <iron-icon icon="toc-icons:expand-more">icon</iron-icon>
        <casper-context-menu id="select_options" no-overlap="" vertical-align="auto" horizontal-align="auto">
          <template is="dom-repeat" items="[[items]]" index-as="index">
            <p>[[item.title]]</p>
            <template is="dom-repeat" items="[[item.items]]" index-as="index">
              <casper-menu-list on-click="customclick">
                <a data-level="3" href="[[item.link]]">[[item.title]]</a>
              </casper-menu-list>
            </template>
          </template>
        </casper-context-menu>
      </span>
    `;
  }

  static get is () {
    return 'casper-optgroup-select';
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
  }

  ready () {
    super.ready();
    this.shell = this;


    if(this.items != undefined){
      this.items.map(function(e){
        e.items.map(function(ee){
          if(ee.selected){
            this.href  = ee.link;
            this.innerText = ee.title;
          }
        }.bind(this))
      }.bind(this))
    }

    this.$.slot_text.addEventListener('click',     e => this.$.select_options.open());
    this.$.inner_box.addEventListener('mouseover', e => this.$.select_options.open());
    this.$.inner_box.addEventListener('mouseout',  e => this.$.select_options.close());
  }
}

window.customElements.define(CasperOptgroupSelect.is, CasperOptgroupSelect);

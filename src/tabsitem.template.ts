import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { TabsItem } from './tabsitem.component';

export function standardTemplate(this: TabsItem) {

    const classes = {
        'is-selected': this.selected,
    };

    return html`
        <div class="spectrum-Tabs-item ${classMap(classes)}" tabindex="0">
            ${this.icon ? html`<sp-icon class="spectrum-Icon" size="S" name="FolderBreadcrumb"></sp-icon>` : ''}
            ${this.label ? html`<label class="spectrum-Tabs-itemLabel">${this.label}</label>` : ''}
        </div>
    `;

}

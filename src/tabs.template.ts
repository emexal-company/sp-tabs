import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Tabs } from './tabs.component';

export default function standardTemplate(this: Tabs) {

  const classes = {
    'spectrum-Tabs--horizontal': this.horizontal,
    'spectrum-Tabs--compact': this.compact,
    'spectrum-Tabs--quiet': this.quiet,
    'spectrum-Tabs--vertical': this.vertical,
  };

  return html`
    <div class="spectrum-Tabs ${classMap(classes)}" @click="${this.handleClick}">
      <slot @slotchange="${this.handleSlotChange}"></slot>
      <div class="spectrum-Tabs-selectionIndicator" style="width: ${this.width}px; left: ${this.left}px; height: ${this.height}px;top: ${this.top}px;"></div>
    </div>
   `;
}

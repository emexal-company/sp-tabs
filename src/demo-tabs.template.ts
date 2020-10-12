import { html } from 'lit-element';
import { DemoTabs } from './demo-tabs.component';

import '@spectrum/sp-tabs';
import '@spectrum/sp-container';

import '@spectrum/sp-rule';
import '@spectrum/sp-demo';
import '@spectrum/sp-tabs';

export default function template(this: DemoTabs) {
  return html`
  <sp-container>
      <sp-rule medium label="Standard"></sp-rule>
      <sp-demo width="300">
      <pre><sp-tabs horizontal>
  <sp-tabsitem label="Tab 1" selected></sp-tabsitem>
  <sp-tabsitem label="Tab 2"></sp-tabsitem>
  <sp-tabsitem label="Tab 3"></sp-tabsitem>
  <sp-tabsitem label="Tab 4"></sp-tabsitem>
</sp-tabs></pre>
      </sp-demo>
      <sp-rule medium label="Tabs with icons"></sp-rule>
      <sp-demo width="300">
      <pre><sp-tabs horizontal>
  <sp-tabsitem label="Tab 1" icon="Folder" selected></sp-tabsitem>
  <sp-tabsitem label="Tab 2" icon="Image"></sp-tabsitem>
  <sp-tabsitem label="Tab 3" icon="Filter"></sp-tabsitem>
  <sp-tabsitem label="Tab 4" icon="Comment"></sp-tabsitem>
</sp-tabs></pre>
      </sp-demo>
      <sp-rule medium label="Quiet"></sp-rule>
      <sp-demo width="300">
      <pre><sp-tabs horizontal quiet>
  <sp-tabsitem label="Tab 1" selected></sp-tabsitem>
  <sp-tabsitem label="Tab 2"></sp-tabsitem>
  <sp-tabsitem label="Tab 3"></sp-tabsitem>
  <sp-tabsitem label="Tab 4"></sp-tabsitem>
</sp-tabs></pre>
      </sp-demo>
      <sp-rule medium label="Quiet tabs with icons"></sp-rule>
      <sp-demo width="300">
      <pre><sp-tabs horizontal quiet>
  <sp-tabsitem label="Tab 1" icon="Folder" selected></sp-tabsitem>
  <sp-tabsitem label="Tab 2" icon="Image"></sp-tabsitem>
  <sp-tabsitem label="Tab 3" icon="Filter"></sp-tabsitem>
  <sp-tabsitem label="Tab 4" icon="Comment"></sp-tabsitem>
</sp-tabs></pre>
      </sp-demo>
      <sp-rule medium label="Compact"></sp-rule>
      <sp-demo width="300">
      <pre><sp-tabs horizontal compact>
  <sp-tabsitem label="Tab 1" selected></sp-tabsitem>
  <sp-tabsitem label="Tab 2"></sp-tabsitem>
  <sp-tabsitem label="Tab 3"></sp-tabsitem>
  <sp-tabsitem label="Tab 4"></sp-tabsitem>
</sp-tabs></pre>
      </sp-demo>
      <sp-rule medium label="Compact tabs with icons and text"></sp-rule>
      <sp-demo width="300">
      <pre><sp-tabs horizontal compact>
  <sp-tabsitem label="Tab 1" icon="Folder" selected></sp-tabsitem>
  <sp-tabsitem label="Tab 2" icon="Image"></sp-tabsitem>
  <sp-tabsitem label="Tab 3" icon="Filter"></sp-tabsitem>
  <sp-tabsitem label="Tab 4" icon="Comment"></sp-tabsitem>
</sp-tabs></pre>
      </sp-demo>
      <sp-rule medium label="Compact tabs with icons"></sp-rule>
      <sp-demo width="300">
      <pre><sp-tabs horizontal compact>
  <sp-tabsitem icon="Folder" selected></sp-tabsitem>
  <sp-tabsitem icon="Image"></sp-tabsitem>
  <sp-tabsitem icon="Filter"></sp-tabsitem>
  <sp-tabsitem icon="Comment"></sp-tabsitem>
</sp-tabs></pre>
      </sp-demo>
      <sp-rule medium label="Compact (quiet)"></sp-rule>
      <sp-demo width="300">
      <pre><sp-tabs horizontal compact quiet>
  <sp-tabsitem label="Tab 1" selected></sp-tabsitem>
  <sp-tabsitem label="Tab 2"></sp-tabsitem>
  <sp-tabsitem label="Tab 3"></sp-tabsitem>
  <sp-tabsitem label="Tab 4"></sp-tabsitem>
</sp-tabs></pre>
      </sp-demo>
      <sp-rule medium label="Compact tabs with icons and text (quiet)"></sp-rule>
      <sp-demo width="300">
      <pre><sp-tabs horizontal compact quiet>
  <sp-tabsitem label="Tab 1" icon="Folder" selected></sp-tabsitem>
  <sp-tabsitem label="Tab 2" icon="Image"></sp-tabsitem>
  <sp-tabsitem label="Tab 3" icon="Filter"></sp-tabsitem>
  <sp-tabsitem label="Tab 4" icon="Comment"></sp-tabsitem>
</sp-tabs></pre>
      </sp-demo>
      <sp-rule medium label="Compact tabs with icons only (quiet)"></sp-rule>
      <sp-demo width="300">
      <pre><sp-tabs horizontal compact quiet>
  <sp-tabsitem icon="Folder" selected></sp-tabsitem>
  <sp-tabsitem icon="Image"></sp-tabsitem>
  <sp-tabsitem icon="Filter"></sp-tabsitem>
  <sp-tabsitem icon="Comment"></sp-tabsitem>
</sp-tabs></pre>
      </sp-demo>
      <sp-rule medium label="Vertical tabs"></sp-rule>
      <sp-demo width="300">
      <pre><sp-tabs vertical>
  <sp-tabsitem label="Tab 1" selected></sp-tabsitem>
  <sp-tabsitem label="Tab 2"></sp-tabsitem>
  <sp-tabsitem label="Tab 3"></sp-tabsitem>
  <sp-tabsitem label="Tab 4"></sp-tabsitem>
</sp-tabs></pre>
      </sp-demo>
      <sp-rule medium label="Vertical tabs with icon and text"></sp-rule>
      <sp-demo width="300">
      <pre><sp-tabs vertical>
  <sp-tabsitem label="Tab 1" icon="Folder" selected></sp-tabsitem>
  <sp-tabsitem label="Tab 2" icon="Image"></sp-tabsitem>
  <sp-tabsitem label="Tab 3" icon="Filter"></sp-tabsitem>
  <sp-tabsitem label="Tab 4" icon="Comment"></sp-tabsitem>
</sp-tabs></pre>
      </sp-demo>
      <sp-rule medium label="Compact vertical tabs"></sp-rule>
      <sp-demo width="300">
      <pre><sp-tabs vertical vertical>
  <sp-tabsitem label="Tab 1" selected></sp-tabsitem>
  <sp-tabsitem label="Tab 2"></sp-tabsitem>
  <sp-tabsitem label="Tab 3"></sp-tabsitem>
  <sp-tabsitem label="Tab 4"></sp-tabsitem>
</sp-tabs></pre>
      </sp-demo>
      <sp-rule medium label="Compact vertical tabs with icon and text"></sp-rule>
      <sp-demo width="300">
      <pre><sp-tabs vertical compact>
  <sp-tabsitem label="Tab 1" icon="Folder" selected></sp-tabsitem>
  <sp-tabsitem label="Tab 2" icon="Image"></sp-tabsitem>
  <sp-tabsitem label="Tab 3" icon="Filter"></sp-tabsitem>
  <sp-tabsitem label="Tab 4" icon="Comment"></sp-tabsitem>
</sp-tabs></pre>
      </sp-demo>
  </sp-container>    
  `;
  
}

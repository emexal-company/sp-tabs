import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import steplistStyles from './tabsitem.styles';
import { standardTemplate } from './tabsitem.template';

@customElement('sp-tabsitem')
export class TabsItem extends Base {
  public static componentStyles = steplistStyles;

  @property({ type: String }) public label: string = '';
  @property({ type: String }) public icon: string = '';
  @property({ type: Boolean }) public selected: boolean = false;

  @query('.spectrum-Tabs-itemLabel') protected tabitemElement!: HTMLElement;
  @query('spectrum-Tabs spectrum-Tabs--horizontal') public tabsHorizontalElement!: HTMLElement;

  public getItemBoundingClientRect() {
    return this.tabitemElement.getBoundingClientRect();
  }

  protected render() {
      return standardTemplate.call(this);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'sp-tabsitem': TabsItem;
  }
}

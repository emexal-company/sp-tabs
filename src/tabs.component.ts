import { customElement, property, query } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './tabs.styles';
import standardTemplate from './tabs.template';
import { TabsItem } from './tabsitem.component';

@customElement('sp-tabs')
export class Tabs extends Base {
  public static componentStyles = labelStyles;

  @property({ type: Boolean }) public horizontal: boolean = false;
  @property({ type: Boolean }) public compact: boolean = false;
  @property({ type: Boolean }) public quiet: boolean = false;
  @property({ type: Boolean }) public vertical: boolean = false;
  @property({ type: Number }) public width: number;
  @property({ type: Number }) public left: number;
  @property({ type: Number }) public top: number;
  @property({ type: String }) public height: number;
  @query('slot') private slot!: HTMLElement;
  @query('.spectrum-Tabs') private tabs!: HTMLElement;

  protected getTabsItem(): TabsItem[] {
    return (this.slot as HTMLSlotElement)
      .assignedNodes({ flatten: true })
      .filter((e: Node) => e instanceof TabsItem) as any as TabsItem[];
  }

  protected handleClick(e: MouseEvent) {
    // Find the clicked item, which will be the selected item
    const clickedItems = e.composedPath().filter((t: EventTarget) => t instanceof TabsItem) as any as TabsItem[];
    if (clickedItems.length === 1) {
      this.updateSelected(clickedItems[0]);
    }
  }

  protected render() {
    return standardTemplate.call(this);
  }

  protected handleSlotChange() {
    const selectedItems = this.getTabsItem().filter((i) => i.selected);
    if (selectedItems.length === 1) {
      this.updateSelected(selectedItems[0]);
    }
  }

  private updateSelected(selectedItem: TabsItem) {
    // Update the state of all the items
    this.getTabsItem().forEach((i) => i.selected = (i === selectedItem));
    // Updated the state of the selection indicator
    if(this.tabs.classList[1]=="spectrum-Tabs--horizontal"){
      this.width = selectedItem.getItemBoundingClientRect().width;
      this.left = selectedItem.getItemBoundingClientRect().left - this.tabs.getBoundingClientRect().left;
      this.top = null;
      this.height = null;
    }else{
      this.width = null;
      this.left = null;
      this.height = selectedItem.getItemBoundingClientRect().height;
      this.top = selectedItem.getItemBoundingClientRect().top - this.tabs.getBoundingClientRect().top;;
    }
    
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'sp-tabs': Tabs;
  }
}

import React, {PropTypes, Component} from 'react';

import themeable from '../core/themeable';

import List from './List';

import theme from './MultiRange.css';

class MultiRange extends Component {
  static propTypes = {
    applyTheme: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired,
  };

  renderItem = (item, selected) => {
    const {applyTheme, refine} = this.props;

    return (
      <label>
        <input
          {...applyTheme('itemRadio', 'itemRadio', selected && 'itemRadioSelected')}
          type="radio"
          checked={selected}
          onChange={refine.bind(null, item.value)}
        />
        <span {...applyTheme('itemLabel', 'itemLabel', selected && 'itemLabelSelected')}>
          {item.label}
        </span>
      </label>
    );
  };

  render() {
    const {items, currentRefinement, applyTheme} = this.props;

    return (
      <List
        renderItem={this.renderItem}
        showMore={false}
        applyTheme={applyTheme}
        items={items}
        selectedItems={[currentRefinement]}
      />
    );
  }
}

export default themeable(theme)(MultiRange);
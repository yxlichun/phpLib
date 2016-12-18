import React, {Component, PropTypes} from 'react';
import { Table, Card, Icon } from 'antd';
import IBDecorate from 'immutability';
import Dimensions from 'react-dimensions';
import { flattenDeep } from 'lodash';


const columns = [
  { title: 'Group', dataIndex: 'name', key: 'name' },
  { title: 'Sql', dataIndex: 'Sql', key: 'Sql' }
];

@IBDecorate
class GroupList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = () => {
      this.setState({
        fold: !this.getState('fold')
      });
    };
    this.initData = (data) => {
      return flattenDeep(data.map(
        (item, index) => {
          let ret = [];
          ret = item.map(
            (v, k) => ({
              name: k === 0 ? 'Group' + (index + 1) : '',
              Sql: v
            })
          );
          return ret;
        }
      ));
    };
  }
  state = {
    fold: true
  };
  render() {
    return (
      <Card
        bordered={false}
        style={{ height: this.getState('fold') ? 'auto' : '80px' }}
        extra={<Icon onClick={this.handleClick} type={this.getState('fold') ? 'folder-open' : 'folder'} className='smaller' />}
        className={'animated ' + (this.getState('fold') ? 'slideLessRight' : 'slideLessLeft')}
      >
        <span className='graph-title'><Icon className='smaller' type='bars' />{'相似SQL'}</span>
        <Table
          size='middle'
          showHeader={false}
          columns={columns}
          dataSource={this.initData(this.props.data)}
          className='table'
          style={{marginTop: '30px'}}
          pagination={false}
        />
      </Card>
    );
  }
}

GroupList.propTypes = {

};

export default Dimensions({
  containerStyle: {
    width: '98%',
    height: 'auto',
    marginLeft: '1%',
    marginRight: '1%'
  },
  elementResize: false
})(GroupList);

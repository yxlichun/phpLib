import React, { Component, PropTypes } from 'react';
import './styles.scss';
import { Card, Icon } from 'antd';
import Dimensions from 'react-dimensions';
import IBDecorate from 'immutability';
import { findDOMNode } from 'react-dom';
import lazyCache from 'react-lazy-cache';
import { map, keys, findIndex, flattenDeep, uniqBy } from 'lodash';
import LazyLoad from 'react-lazy-load';


// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');
// 引入图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');


@IBDecorate
class Graph extends Component {
  constructor(props) {
    super(props);
    this.handleClick = () => {
      this.setState({
        fold: !this.getState('fold')
      });
    };
    this.initOption = (data) => {
      let categories = uniqBy(flattenDeep(map(data, (v, k) => [{name: k}, keys(v.group).map(o => ({name: o}))])), 'name');
      let groupNodes = {};
      let nodes = map(data, (v, k) => {
        map(v.group, (_v, _k) => {
          groupNodes[_k] = groupNodes[_k] ? groupNodes[_k] / 1 + _v : _v;
        });
        return {
          name: k,
          itemStyle: null,
          value: v.count,
          symbolSize: v.count / 10 < 10 ? 10 : v.count / 10,
          category: findIndex(categories, o => o.name === k),
          x: Math.random(),
          y: Math.random()
        };
      });
      nodes = nodes.concat(map(groupNodes, (v, k) => ({
        name: k,
        itemStyle: null,
        value: v,
        symbolSize: v / 10 < 10 ? 10 : v / 10,
        category: findIndex(categories, o => o.name === k),
        x: Math.random(),
        y: Math.random()
      })));
      let categories_S = [
        {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'bottom'
                }
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
        }
    ];
      let categories_L = uniqBy(flattenDeep(map(data, (value) => {
        return map(value.group, (v, k) => ({
          name: k,
          icon: 'circle'
        }));
      })), 'name');
      return {
        tooltip: {},
        legend: {
          data: categories_L,
          formatter: function(name) {
            return echarts.format.truncateText(name.replace('/logistics', ''), 40, '14px Microsoft Yahei', '…');
          },
          tooltip: {
            show: true
          },
          height: '10%'
        },
        series: categories_S,
        color: ['#4f19c7', '#c71969', '#c71919', '#1984c7', '#c76919', '#8419c7', '#c79f19', '#c78419', '#c719b9', '#199fc7', '#9f19c7', '#69c719', '#19c719', '#1919c7', '#c74f19', '#19c7b9', '#9fc719', '#c7b919', '#b9c719', '#3419c7', '#19b9c7', '#34c719', '#19c784', '#c7199f', '#1969c7', '#c71984', '#1934c7', '#84c719', '#194fc7', '#c7194f', '#19c74f', '#b919c7', '#19c769', '#19c79f', '#4fc719', '#c73419', '#19c734', '#6919c7', '#c71934'],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type : 'category',
            splitLine: {show:false},
            data :  function (){
                var list = [];
                for (var i = 1; i <= 11; i++) {
                    list.push('11月' + i + '日');
                }
                return list;
            }()
        },
        xAxis: {
            type : 'value'
        }
      };
    };
    this.initGraph = () => {
      if (this.graph) {
        this.myGraph = echarts.init(findDOMNode(this.graph));
        this.myGraph.setOption(this.cache.option);
        this.myGraph.resize({width: this.props.containerWidth * 0.95});
        this.myGraph.on('click', () => {
          let newOption = this.initOption(this.props.data);
          this.myGraph.setOption(newOption);
        });
      }
    };
  }
  state = {
    fold: true
  };
  componentWillMount() {
    this.cache = lazyCache(this, {
      option: {
        params: ['data'],
        fn: this.initOption
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    this.cache.componentWillReceiveProps(nextProps);
    this.initGraph();
  }
    // componentDidMount() {
    //     this.myGraph = echarts.init(findDOMNode(this.graph));
    //     this.myGraph.setOption(this.cache.option);
    //     this.myGraph.on('click', () => {
    //         let newOption = this.initOption(this.props.data);
    //         this.myGraph.setOption(newOption);
    //     });
    // }
  render() {
    return (
      <LazyLoad offsetTop={0} throttle={100} onContentVisible={this.initGraph} debounce={false}>
        <Card
          bordered={false}
          style={{ height: this.getState('fold') ? '900px' : '80px' }}
          extra={<Icon onClick={this.handleClick} type={this.getState('fold') ? 'folder-open' : 'folder'} className='smaller' />}
          className={'animated ' + (this.getState('fold') ? 'slideLessRight' : 'slideLessLeft')}
        >
          <span className='graph-title'><Icon className='smaller' type='share-alt' />接口名称</span>
          <div className='graph' ref={(c) => { this.graph = c; }} style={{width: '95%', height: this.getState('fold') ? '300px' : '80px'}} />
        </Card>
      </ LazyLoad>
    );
  }
}

Graph.propTypes = {
  containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  containerHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  data: PropTypes.object.isRequired
};


export default Dimensions({
  containerStyle: {
    width: '98%',
    height: 'auto',
    marginLeft: '1%',
    marginRight: '1%'
  },
  elementResize: false
})(Graph);

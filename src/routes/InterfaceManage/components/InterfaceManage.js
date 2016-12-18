import React, {Component} from 'react';
import { Table, Icon } from 'antd';
import TimingChart from './TimingChart';
import GroupList from './GroupList';
import SQLList from './SQLList';
import {mapValues} from 'lodash';
import lazyCache from 'react-lazy-cache';

const columns = [
  { title: '接口名称', dataIndex: 'name', key: 'name' },
  { title: 'QPS', dataIndex: 'age', key: 'age' },
  { title: '响应时间', dataIndex: 'address', key: 'address' },
  { title: '调用次数', dataIndex: '', key: 'x', render: () => <a href='#'>Delete</a> }
];

const data = [
  {
    'hostname': 'nj03-waimai-yizhanui07.nj03.baidu.com',
    'date': null,
    'hour': null,
    'api_path': '/logisorder/order/multiqueryinfo',
    'count': 40250,
    'request_time_sum': 1702.7509999999,
    'request_time_avg': 0.042,
    'qps_max': 142,
    'qps_avg': 11.181,
    'ral_count_max': 5,
    'ral_count_avg': 2,
    'ral_log': {
      'logid': '1734081173',
      'group': {
        'mysql@logistics_order/waimai_nj': 5
      },
      'raw_sql': [
        'select orderid, order_status, delivery_id from order_list_N where (orderid IN (L,I,S,T))  limit N,N',
        'select orderid, order_status, delivery_id from order_list_N where (orderid IN (L,I,S,T))  limit N,N',
        'select orderid, order_status, delivery_id from order_list_N where (orderid IN (L,I,S,T))  limit N,N',
        'select orderid, order_status, delivery_id from order_list_N where (orderid IN (L,I,S,T))  limit N,N'
      ],
      'sql_group': [
        [
          'select orderid, order_status, delivery_id from order_list_n where (orderid in (l,i,s,t))  limit n,n',
          'select orderid, order_status, delivery_id from order_list_n where (orderid in (l,i,s,t))  limit n,n',
          'select orderid, order_status, delivery_id from order_list_n where (orderid in (l,i,s,t))  limit n,n',
          'select orderid, order_status, delivery_id from order_list_n where (orderid in (l,i,s,t))  limit n,n'
        ]
      ]
    },
    'ral_chain': {
      '0.1': {
        'logid': '1734081173',
        'worker_id': '39032',
        'optime': '1481966934.089372',
        'product': 'waimai',
        'subsys': 'waimai',
        'module': 'logisorder',
        'user_ip': '',
        'local_ip': '10.194.217.43',
        'local_port': '8068',
        'msg': 'ral_write_log',
        'log_type': 'E_SUM',
        'caller': 'Bd_Db',
        'from': '/home/map/odp_logistics/php/phplib/bd/db/RALLog.php:238',
        'spanid': '0.1',
        'service': 'logistics_order/waimai_nj',
        'method': 'connect',
        'conv': 'mysql',
        'prot': 'mysql',
        'retry': '0/1',
        'remote_ip': '10.195.217.23:6671',
        'req_start_time': '1481966934.089',
        'cost': '0.344',
        'talk': '0.344',
        'connect': '0.344',
        'write': '0',
        'read': '0',
        'dbname': 'logistics_order',
        'err_no': '0',
        'err_info': 'OK',
        'caller_uri': 'unknow',
        'is_submit': '0'
      },
      '0.2': {
        'logid': '1734081173',
        'worker_id': '39032',
        'optime': '1481966934.091153',
        'product': 'waimai',
        'subsys': 'waimai',
        'module': 'logisorder',
        'user_ip': '',
        'local_ip': '10.194.217.43',
        'local_port': '8068',
        'msg': 'ral_write_log',
        'log_type': 'E_SUM',
        'caller': 'Bd_DB',
        'from': '/home/map/odp_logistics/php/phplib/bd/db/RALLog.php:238',
        'spanid': '0.2',
        'service': 'logistics_order/waimai_nj',
        'method': 'query',
        'conv': 'mysql',
        'prot': 'mysql',
        'retry': '0/0',
        'remote_ip': '10.195.217.23:6671',
        'req_start_time': '1481966934.0901',
        'cost': '1.019',
        'talk': '958',
        'connect': '0',
        'write': '0',
        'read': '1.019',
        'dbname': 'logistics_order',
        'err_no': '0',
        'err_info': 'OK',
        'caller_uri': 'unknow',
        'is_submit': '',
        'query_count': '4',
        'sql': 'SELECT orderid, order_status, delivery_id FROM order_list_20161212 WHERE (orderid IN (14818565447871,14818044582529,14816026750729,14815100377309,14810168987102,14809920727415,14809355882422,14808501196071,14800781882960))  limit 0,100000 '
      },
      '0.3': {
        'logid': '1734081173',
        'worker_id': '39032',
        'optime': '1481966934.091855',
        'product': 'waimai',
        'subsys': 'waimai',
        'module': 'logisorder',
        'user_ip': '',
        'local_ip': '10.194.217.43',
        'local_port': '8068',
        'msg': 'ral_write_log',
        'log_type': 'E_SUM',
        'caller': 'Bd_DB',
        'from': '/home/map/odp_logistics/php/phplib/bd/db/RALLog.php:238',
        'spanid': '0.3',
        'service': 'logistics_order/waimai_nj',
        'method': 'query',
        'conv': 'mysql',
        'prot': 'mysql',
        'retry': '0/0',
        'remote_ip': '10.195.217.23:6671',
        'req_start_time': '1481966934.0912',
        'cost': '0.594',
        'talk': '548',
        'connect': '0',
        'write': '0',
        'read': '0.594',
        'dbname': 'logistics_order',
        'err_no': '0',
        'err_info': 'OK',
        'caller_uri': 'unknow',
        'is_submit': '',
        'query_count': '3',
        'sql': 'SELECT orderid, order_status, delivery_id FROM order_list_20161205 WHERE (orderid IN (14818565447871,14818044582529,14816026750729,14815100377309,14810168987102,14809920727415,14809355882422,14808501196071,14800781882960))  limit 0,99996 '
      },
      '0.4': {
        'logid': '1734081173',
        'worker_id': '39032',
        'optime': '1481966934.092493',
        'product': 'waimai',
        'subsys': 'waimai',
        'module': 'logisorder',
        'user_ip': '',
        'local_ip': '10.194.217.43',
        'local_port': '8068',
        'msg': 'ral_write_log',
        'log_type': 'E_SUM',
        'caller': 'Bd_DB',
        'from': '/home/map/odp_logistics/php/phplib/bd/db/RALLog.php:238',
        'spanid': '0.4',
        'service': 'logistics_order/waimai_nj',
        'method': 'query',
        'conv': 'mysql',
        'prot': 'mysql',
        'retry': '0/0',
        'remote_ip': '10.195.217.23:6671',
        'req_start_time': '1481966934.0919',
        'cost': '0.531',
        'talk': '491',
        'connect': '0',
        'write': '0',
        'read': '0.531',
        'dbname': 'logistics_order',
        'err_no': '0',
        'err_info': 'OK',
        'caller_uri': 'unknow',
        'is_submit': '',
        'query_count': '1',
        'sql': 'SELECT orderid, order_status, delivery_id FROM order_list_20161128 WHERE (orderid IN (14818565447871,14818044582529,14816026750729,14815100377309,14810168987102,14809920727415,14809355882422,14808501196071,14800781882960))  limit 0,99993 '
      },
      '0.5': {
        'logid': '1734081173',
        'worker_id': '39032',
        'optime': '1481966934.093152',
        'product': 'waimai',
        'subsys': 'waimai',
        'module': 'logisorder',
        'user_ip': '',
        'local_ip': '10.194.217.43',
        'local_port': '8068',
        'msg': 'ral_write_log',
        'log_type': 'E_SUM',
        'caller': 'Bd_DB',
        'from': '/home/map/odp_logistics/php/phplib/bd/db/RALLog.php:238',
        'spanid': '0.5',
        'service': 'logistics_order/waimai_nj',
        'method': 'query',
        'conv': 'mysql',
        'prot': 'mysql',
        'retry': '0/0',
        'remote_ip': '10.195.217.23:6671',
        'req_start_time': '1481966934.0926',
        'cost': '0.561',
        'talk': '523',
        'connect': '0',
        'write': '0',
        'read': '0.561',
        'dbname': 'logistics_order',
        'err_no': '0',
        'err_info': 'OK',
        'caller_uri': 'unknow',
        'is_submit': '',
        'query_count': '1',
        'sql': 'SELECT orderid, order_status, delivery_id FROM order_list_20161121 WHERE (orderid IN (14818565447871,14818044582529,14816026750729,14815100377309,14810168987102,14809920727415,14809355882422,14808501196071,14800781882960))  limit 0,99992 '
      }
    }
  },
  {
    'hostname': 'nj03-waimai-yizhanui07.nj03.baidu.com',
    'date': null,
    'hour': null,
    'api_path': '/logisorder/order/queryinfo',
    'count': 10,
    'request_time_sum': 0.43,
    'request_time_avg': 0.043,
    'qps_max': 1,
    'qps_avg': 0.003,
    'ral_count_max': 2,
    'ral_count_avg': 1,
    'ral_log': {
      'logid': '1385182974',
      'group': {
        'mysql@logistics_order/waimai_nj': 2
      },
      'raw_sql': [
        'select orderid, out_order_id, immediate_deliver, order_status, teamname, cityid, aoiid, delivery_id, delivery_name, user_phone, user_address, user_name, shop_name, shop_phone, shop_address, order_time, expect_time, update_time, total_price, user_price, total_real_price, user_real_price, total_distance, list_time, shop_id, partner, date, is_comment, flag, app_id, source_name, order_product, category_name, vehicle_flag, extend_info, expect_time_mode, expect_time_start, order_type, delivery_aoiid from order_list_N where (orderid= \'S\')  limit N,N'
      ],
      'sql_group': [
        [
          'select orderid, out_order_id, immediate_deliver, order_status, teamname, cityid, aoiid, delivery_id, delivery_name, user_phone, user_address, user_name, shop_name, shop_phone, shop_address, order_time, expect_time, update_time, total_price, user_price, total_real_price, user_real_price, total_distance, list_time, shop_id, partner, date, is_comment, flag, app_id, source_name, order_product, category_name, vehicle_flag, extend_info, expect_time_mode, expect_time_start, order_type, delivery_aoiid from order_list_n where (orderid= \'s\')  limit n,n'
        ]
      ]
    },
    'ral_chain': {
      '0.1': {
        'logid': '1385182974',
        'worker_id': '38768',
        'optime': '1481966585.189378',
        'product': 'waimai',
        'subsys': 'waimai',
        'module': 'logisorder',
        'user_ip': '',
        'local_ip': '10.194.217.43',
        'local_port': '8068',
        'msg': 'ral_write_log',
        'log_type': 'E_SUM',
        'caller': 'Bd_Db',
        'from': '/home/map/odp_logistics/php/phplib/bd/db/RALLog.php:238',
        'spanid': '0.1',
        'service': 'logistics_order/waimai_nj',
        'method': 'connect',
        'conv': 'mysql',
        'prot': 'mysql',
        'retry': '0/1',
        'remote_ip': '10.195.217.23:6671',
        'req_start_time': '1481966585.1879',
        'cost': '1.195',
        'talk': '1.195',
        'connect': '1.195',
        'write': '0',
        'read': '0',
        'dbname': 'logistics_order',
        'err_no': '0',
        'err_info': 'OK',
        'caller_uri': 'unknow',
        'is_submit': '0'
      },
      '0.2': {
        'logid': '1385182974',
        'worker_id': '38768',
        'optime': '1481966585.193423',
        'product': 'waimai',
        'subsys': 'waimai',
        'module': 'logisorder',
        'user_ip': '',
        'local_ip': '10.194.217.43',
        'local_port': '8068',
        'msg': 'ral_write_log',
        'log_type': 'E_SUM',
        'caller': 'Bd_DB',
        'from': '/home/map/odp_logistics/php/phplib/bd/db/RALLog.php:238',
        'spanid': '0.2',
        'service': 'logistics_order/waimai_nj',
        'method': 'query',
        'conv': 'mysql',
        'prot': 'mysql',
        'retry': '0/0',
        'remote_ip': '10.195.217.23:6671',
        'req_start_time': '1481966585.192',
        'cost': '1.404',
        'talk': '1286',
        'connect': '0',
        'write': '0',
        'read': '1.404',
        'dbname': 'logistics_order',
        'err_no': '0',
        'err_info': 'OK',
        'caller_uri': 'unknow',
        'is_submit': '',
        'query_count': '1',
        'sql': 'SELECT orderid, out_order_id, immediate_deliver, order_status, teamname, cityid, aoiid, delivery_id, delivery_name, user_phone, user_address, user_name, shop_name, shop_phone, shop_address, order_time, expect_time, update_time, total_price, user_price, total_real_price, user_real_price, total_distance, list_time, shop_id, partner, date, is_comment, flag, app_id, source_name, order_product, category_name, vehicle_flag, extend_info, expect_time_mode, expect_time_start, order_type, delivery_aoiid FROM order_list_20161212 WHERE (orderid= \'14819662169500\')  limit 0,10000000 '
      }
    }
  }
];
export default class InterfaceManage extends Component {
  constructor(props) {
    super(props);
    this.initData = (v = data) => {
      let ret = {};
      ret.graph = mapValues(v, o => ({
        group: o.ral_log ? o.ral_log.group : {},
        count: o.ral_count_max
      }));
      return ret;
    };
  }
  componentWillMount() {
    this.cache = lazyCache(this, {
      data: {
        params: ['data'],
        fn: this.initData
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    this.cache.componentWillReceiveProps(nextProps);
  }
  render() {
    return (
      <div style={{margin: '0 30px'}}>
        <Table
          bordered
          size='middle'
          columns={columns}
          expandedRowRender={record =>
            <div>
              <TimingChart data={this.cache.data.graph} />
              <GroupList data={this.cache.data.graph.group || [{name: 'mysql@logistics_order/waimai_nj', times: 5}, {name: 'mysql@logistics_list', times: 5}, {name: 'mysql@logistics_frontend', times: 5}]} />
              <SQLList data={this.cache.data.graph.group || [
                [
                  'select orderid, order_status, delivery_id from order_list_n where (orderid in (l,i,s,t))  limit n,n',
                  'select orderid, order_status, delivery_id from order_list_n where (orderid in (l,i,s,t))  limit n,n',
                  'select orderid, order_status, delivery_id from order_list_n where (orderid in (l,i,s,t))  limit n,n',
                  'select orderid, order_status, delivery_id from order_list_n where (orderid in (l,i,s,t))  limit n,n'
                ]
              ]}
              />
            </div>
        }
          dataSource={data}
          className='table'
        />
      </div>
    );
  }
}

InterfaceManage.propTypes = {
};
InterfaceManage.defaultProps = {
  data: window._INITDATA_
};

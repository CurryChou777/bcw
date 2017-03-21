import {basePath} from '../config/env'
import {encrypt} from '../config/Tools'
import axios from 'axios'

var querystring = require('querystring');

var homeTab = () => axios.post(basePath + '/site/getIndexTabs?v=2.0')
var indexModuleData = tabId => axios.post(basePath + '/site/indexModuleData?v=2.0',querystring.stringify(encrypt({tab_id: 1})))
var getBottomBanner = tabId => axios.post(basePath + '/site/getBottomBanner?v=2.0')
export {homeTab,indexModuleData,getBottomBanner}

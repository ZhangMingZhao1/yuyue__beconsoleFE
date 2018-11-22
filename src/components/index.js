/**
 * 路由组件出口文件
 * yezi 2018年6月24日
 */
import Loadable from 'react-loadable';
import Loading from './widget/Loading';
import BasicTable from './tables/BasicTables';
import AdvancedTable from './tables/AdvancedTables';
import AsynchronousTable from './tables/AsynchronousTable';
import AuthBasic from './auth/Basic';
import RouterEnter from './auth/RouterEnter';
import Cssmodule from './cssmodule';
import ThemeControl from './webcontrol/ThemeControl.js'
import BannerControl from './webcontrol/BannerControl.js';
import InfoControl from './membercontrol/InfoControl.js';
import ScoreControl from './membercontrol/ScoreControl';
import RuleControl from './membercontrol/RuleControl';
import RankControl from './membercontrol/RankControl';
import First from './first/first.js';
import CommentControl from './fishcontrol/CommentControl';
import SenWords from './fishcontrol/SenWords';
import Search from './housecontrol/Search';
import InList from './housecontrol/InList';
import OutList from './housecontrol/OutList';
import TransferList from './housecontrol/TransferList';
import CountingList from './housecontrol/CountingList';
import DamagedList from './housecontrol/DamagedList';
import OrderControl from './ordercontrol/index';

export default {
    BasicTable, AdvancedTable, AsynchronousTable,
    ThemeControl, BannerControl, InfoControl,ScoreControl, RuleControl, RankControl,
    AuthBasic, RouterEnter,
    Cssmodule,First,CommentControl,SenWords,Search,InList,OutList,TransferList,CountingList,DamagedList,OrderControl
}
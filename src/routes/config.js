export default {
    menus: [ // 菜单相关路由
        { key: '/app/fisrt/index', title: '首页', icon: 'mobile', component: 'First' },
        {  key: '/app/webcontrol', title: '网站管理', icon: 'mobile',
            subs: [
                {key: '/app/webcontrol/themeControl', title: '专题设置', component: 'ThemeControl'},
                {key: '/app/webcontrol/bannerControl', title: 'banner管理', component: 'BannerControl'}
            ],
        },
        {
            key: '/app/memberControl', title: '会员管理', icon: 'scan',
            subs: [
                { key: '/app/memberControl/infoControl', title: '信息管理', component: 'InfoControl'},
                { key: '/app/memberControl/scoreControl', title: '积分管理', component: 'ScoreControl'},
                { key: '/app/memberControl/ruleControl', title: '积分规则设置', component: 'RuleControl'},
                { key: '/app/memberControl/rankControl', title: '会员等级设置', component: 'RankControl'},
            ],
        },
        {
            key: '/app/fishControl', title: '鱼群管理', icon: 'rocket',
            subs: [
                { key: '/app/fishControl/commentControl', title: '评论管理', component: 'CommentControl'},
                { key: '/app/fishControl/senWords', title: '敏感词库', component: 'SenWords'},
            ],
        },
        {
            key: '/app/houseControl', title: '仓库管理', icon: 'copy',
            subs: [
                { key: '/app/houseControl/search', title: '库存查询', component: 'Search'},
                { key: '/app/houseControl/inList', title: '入库单', component: 'InList'},
                { key: '/app/houseControl/outList', title: '出库单', component: 'OutList'},
                { key: '/app/houseControl/transferList', title: '调拨单', component: 'TransferList'},
                { key: '/app/houseControl/countingList', title: '盘点单', component: 'CountingList'},
                { key: '/app/houseControl/damagedList', title: '破损单', component: 'DamagedList'},
            ],
        },
        {
            key: '/app/OrderControl', title: '订单管理', icon: 'edit',
            subs: [
                { key: '/app/OrderControl/index', title: '基础表单', component: 'OrderControl'},
            ],
        },
        {
            key: '/app/chart', title: '加盟商管理', icon: 'area-chart',
            subs: [
                { key: '/app/chart/echarts', title: 'echarts', component: 'Echarts' },
                { key: '/app/chart/recharts', title: 'recharts', component: 'Recharts' },
            ],
        },
        {
            key: '/subs4', title: '系统管理', icon: 'switcher',
            subs: [
                { key: '/login', title: '登录' },
                { key: '/404', title: '404' },
            ],
        },
        {
            key: '/app/auth', title: '其他', icon: 'safety',
            subs: [
                { key: '/app/auth/basic', title: '基础演示', component: 'AuthBasic' },
                { key: '/app/auth/routerEnter', title: '路由拦截', component: 'RouterEnter', auth: 'auth/testPage' },
            ],
        }
    ],
    others: [] // 非菜单相关路由
}
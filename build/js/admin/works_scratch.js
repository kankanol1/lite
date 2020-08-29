var table = layui.table;
var _table_render = table.render({
    elem: '#TableOne'
    , url: '/admin/works/scratch/data'
    , toolbar: '#TableOne_bar'
    , page: true
    , cols: [[
        { field: 'username', width: 120, title: '作者' }
        , { field: 'nickname', width: 150, title: '作者昵称' }
        , { field: 'title', title: '作品名' }
        , { field: 'time', width: 180, title: '修改时间', templet: "#timeTemp"}
        , { title: '操作', width:320, toolbar: '#TableOne_tool'}
    ]]
    , parseData: function (res) {
        return {
            "code": 0,
            "msg": "",
            "count": res.count,
            "data": res.data
        };
    }
});

table.on('toolbar(TableOne)', function (obj) {

});
//监听行工具事件
table.on('tool(TableOne)', function (obj) {

});


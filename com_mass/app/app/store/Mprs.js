Ext.define('Mass.store.Mprs', {
    extend: 'Ext.data.Store',
    requires: ['Mass.model.Mrp'],
    model: 'Mass.model.Mrp',
    reference : 'mrpStore',

    autoSync: true,
    autoLoad: true,

    proxy: {
        // type: 'proxy',
        // url: '/index.php?option=com_mass&task=mrpGrid',
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    data: {"data":[{"id":"21","mrp_title":"State Urban Search and Rescue Package","mrp_stateema_tn":"TEST edited "},{"id":"22","mrp_title":"State Urban Search and Rescue Package","mrp_stateema_tn":null},{"id":"23","mrp_title":"jhbh","mrp_stateema_tn":null},{"id":"24","mrp_title":"666666","mrp_stateema_tn":null},{"id":"27","mrp_title":"tyguyuytytyty","mrp_stateema_tn":null},{"id":"28","mrp_title":"gddgfgdffgf","mrp_stateema_tn":null},{"id":"29","mrp_title":"iiughghgghkhghg","mrp_stateema_tn":null},{"id":"30","mrp_title":"khjkhjk","mrp_stateema_tn":null},{"id":"31","mrp_title":"csscsdcsccsddwe","mrp_stateema_tn":null},{"id":"32","mrp_title":"tyuytyutttytr","mrp_stateema_tn":null},{"id":"39","mrp_title":"new","mrp_stateema_tn":null},{"id":"40","mrp_title":"newwww","mrp_stateema_tn":null},{"id":"42","mrp_title":"8888889","mrp_stateema_tn":null},{"id":"43","mrp_title":"Mileage on Mission Site","mrp_stateema_tn":null},{"id":"44","mrp_title":"Mileage on Mission Site","mrp_stateema_tn":null},{"id":"45","mrp_title":"Mileage on Mission Site","mrp_stateema_tn":null},{"id":"46","mrp_title":"Mileage on Mission Site","mrp_stateema_tn":null},{"id":"47","mrp_title":"Mileage on Mission Site","mrp_stateema_tn":null},{"id":"48","mrp_title":"AC Test 1 - edited","mrp_stateema_tn":null},{"id":"49","mrp_title":"AC Test 2","mrp_stateema_tn":null},{"id":"50","mrp_title":"AC-Test 3 - edited - edited again","mrp_stateema_tn":null},{"id":"51","mrp_title":"dfasfsfsd","mrp_stateema_tn":null},{"id":"52","mrp_title":"dsadasds","mrp_stateema_tn":null},{"id":"53","mrp_title":"dqqwdwdq","mrp_stateema_tn":null},{"id":"54","mrp_title":"dadasdas","mrp_stateema_tn":null}],"total":25,"success":true},
});

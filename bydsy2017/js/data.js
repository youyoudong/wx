/**
 * Created by zhulinhai on 17/5/10.
 */
var dataList = {
    "province": [
        {"p":"安徽"},
        {"p":"北京"},
        {"p":"重庆"},
        {"p":"福建"},
        {"p":"甘肃"},
        {"p":"广东"},
        {"p":"广西"},
        {"p":"贵州"},
        {"p":"海南"},
        {"p":"河北"},
        {"p":"河南"},
        {"p":"黑龙江"},
        {"p":"湖北"},
        {"p":"湖南"},
        {"p":"吉林"},
        {"p":"江苏"},
        {"p":"江西"},
        {"p":"辽宁"},
        {"p":"内蒙古"},
        {"p":"宁夏"},
        {"p":"青海"},
        {"p":"山东"},
        {"p":"山西"},
        {"p":"陕西"},
        {"p":"上海"},
        {"p":"四川"},
        {"p":"天津"},
        {"p":"新疆"},
        {"p":"云南"},
        {"p":"浙江"}
    ],
    "city": [
        {"p":"安徽","c":"淮北"},
        {"p":"安徽","c":"滁州"},
        {"p":"安徽","c":"合肥"},
        {"p":"安徽","c":"蚌埠"},
        {"p":"安徽","c":"六安"},
        {"p":"安徽","c":"安庆"},
        {"p":"安徽","c":"铜陵"},
        {"p":"安徽","c":"合肥"},
        {"p":"安徽","c":"马鞍山"},
        {"p":"安徽","c":"亳州"},
        {"p":"安徽","c":"阜阳"},
        {"p":"北京","c":"北京"},
        {"p":"重庆","c":"重庆"},
        {"p":"福建","c":"泉州"},
        {"p":"福建","c":"龙岩"},
        {"p":"福建","c":"泉州"},
        {"p":"福建","c":"厦门"},
        {"p":"福建","c":"莆田"},
        {"p":"福建","c":"三明"},
        {"p":"福建","c":"厦门"},
        {"p":"福建","c":"福州"},
        {"p":"福建","c":"漳州"},
        {"p":"甘肃","c":"兰州"},
        {"p":"甘肃","c":"庆阳"},
        {"p":"甘肃","c":"酒泉"},
        {"p":"甘肃","c":"平凉"},
        {"p":"甘肃","c":"定西"},
        {"p":"广东","c":"佛山"},
        {"p":"广东","c":"深圳"},
        {"p":"广东","c":"惠州"},
        {"p":"广东","c":"珠海"},
        {"p":"广东","c":"广州"},
        {"p":"广东","c":"珠海"},
        {"p":"广东","c":"茂名"},
        {"p":"广东","c":"东莞"},
        {"p":"广东","c":"肇庆"},
        {"p":"广东","c":"清远"},
        {"p":"广东","c":"韶关"},
        {"p":"广东","c":"广州"},
        {"p":"广东","c":"揭阳"},
        {"p":"广东","c":"河源"},
        {"p":"广东","c":"深圳"},
        {"p":"广东","c":"广州"},
        {"p":"广东","c":"东莞"},
        {"p":"广东","c":"深圳"},
        {"p":"广东","c":"广州"},
        {"p":"广东","c":"东莞"},
        {"p":"广东","c":"广州"},
        {"p":"广东","c":"东莞"},
        {"p":"广东","c":"江门"},
        {"p":"广东","c":"东莞"},
        {"p":"广东","c":"深圳"},
        {"p":"广东","c":"惠州"},
        {"p":"广东","c":"佛山"},
        {"p":"广东","c":"中山"},
        {"p":"广东","c":"东莞"},
        {"p":"广东","c":"深圳"},
        {"p":"广东","c":"佛山"},
        {"p":"广东","c":"深圳"},
        {"p":"广东","c":"惠州"},
        {"p":"广东","c":"深圳"},
        {"p":"广东","c":"广州"},
        {"p":"广东","c":"汕尾"},
        {"p":"广东","c":"广州"},
        {"p":"广东","c":"佛山"},
        {"p":"广东","c":"广州"},
        {"p":"广东","c":"中山"},
        {"p":"广东","c":"广州"},
        {"p":"广东","c":"佛山"},
        {"p":"广东","c":"清远"},
        {"p":"广东","c":"茂名"},
        {"p":"广东","c":"深圳"},
        {"p":"广东","c":"河源"},
        {"p":"广东","c":"汕头"},
        {"p":"广东","c":"深圳"},
        {"p":"广西","c":"南宁"},
        {"p":"广西","c":"桂林"},
        {"p":"广西","c":"百色"},
        {"p":"广西","c":"梧州"},
        {"p":"广西","c":"南宁"},
        {"p":"广西","c":"柳州"},
        {"p":"贵州","c":"贵阳"},
        {"p":"贵州","c":"遵义"},
        {"p":"贵州","c":"贵阳"},
        {"p":"贵州","c":"六盘水"},
        {"p":"贵州","c":"贵阳"},
        {"p":"贵州","c":"黔南州"},
        {"p":"贵州","c":"毕节"},
        {"p":"贵州","c":"黔东南州"},
        {"p":"海南","c":"海口"},
        {"p":"河北","c":"保定"},
        {"p":"河北","c":"邯郸"},
        {"p":"河北","c":"邢台"},
        {"p":"河北","c":"石家庄"},
        {"p":"河北","c":"秦皇岛"},
        {"p":"河北","c":"保定"},
        {"p":"河北","c":"承德"},
        {"p":"河北","c":"石家庄"},
        {"p":"河北","c":"沧州"},
        {"p":"河北","c":"张家口"},
        {"p":"河北","c":"唐山"},
        {"p":"河北","c":"廊坊"},
        {"p":"河北","c":"保定"},
        {"p":"河北","c":"邢台"},
        {"p":"河北","c":"廊坊"},
        {"p":"河北","c":"邯郸"},
        {"p":"河南","c":"许昌"},
        {"p":"河南","c":"驻马店"},
        {"p":"河南","c":"洛阳"},
        {"p":"河南","c":"周口"},
        {"p":"河南","c":"南阳"},
        {"p":"河南","c":"焦作"},
        {"p":"河南","c":"南阳"},
        {"p":"河南","c":"信阳"},
        {"p":"河南","c":"许昌"},
        {"p":"河南","c":"安阳"},
        {"p":"河南","c":"平顶山"},
        {"p":"河南","c":"漯河"},
        {"p":"河南","c":"商丘"},
        {"p":"河南","c":"郑州"},
        {"p":"河南","c":"南阳"},
        {"p":"河南","c":"濮阳"},
        {"p":"河南","c":"漯河"},
        {"p":"河南","c":"南阳"},
        {"p":"河南","c":"许昌"},
        {"p":"河南","c":"郑州"},
        {"p":"河南","c":"济源"},
        {"p":"河南","c":"商丘"},
        {"p":"河南","c":"郑州"},
        {"p":"黑龙江","c":"齐齐哈尔"},
        {"p":"黑龙江","c":"大庆"},
        {"p":"黑龙江","c":"哈尔滨"},
        {"p":"黑龙江","c":"绥化"},
        {"p":"黑龙江","c":"哈尔滨"},
        {"p":"黑龙江","c":"佳木斯"},
        {"p":"黑龙江","c":"牡丹江"},
        {"p":"黑龙江","c":"哈尔滨"},
        {"p":"湖北","c":"武汉"},
        {"p":"湖北","c":"恩施"},
        {"p":"湖北","c":"襄阳"},
        {"p":"湖北","c":"天门"},
        {"p":"湖北","c":"武汉"},
        {"p":"湖北","c":"黄冈"},
        {"p":"湖北","c":"宜昌"},
        {"p":"湖北","c":"随州"},
        {"p":"湖北","c":"宜昌"},
        {"p":"湖北","c":"十堰"},
        {"p":"湖北","c":"武汉"},
        {"p":"湖北","c":"黄石"},
        {"p":"湖北","c":"孝感"},
        {"p":"湖北","c":"武汉"},
        {"p":"湖北","c":"荆门"},
        {"p":"湖北","c":"武汉"},
        {"p":"湖北","c":"襄阳"},
        {"p":"湖南","c":"长沙"},
        {"p":"湖南","c":"株洲"},
        {"p":"湖南","c":"益阳"},
        {"p":"湖南","c":"长沙"},
        {"p":"湖南","c":"郴州"},
        {"p":"湖南","c":"湘潭"},
        {"p":"湖南","c":"郴州"},
        {"p":"湖南","c":"长沙"},
        {"p":"湖南","c":"衡阳"},
        {"p":"湖南","c":"娄底"},
        {"p":"湖南","c":"常德"},
        {"p":"湖南","c":"岳阳"},
        {"p":"湖南","c":"长沙"},
        {"p":"湖南","c":"怀化"},
        {"p":"吉林","c":"长春"},
        {"p":"吉林","c":"吉林"},
        {"p":"吉林","c":"长春"},
        {"p":"吉林","c":"四平"},
        {"p":"吉林","c":"延边"},
        {"p":"吉林","c":"白山"},
        {"p":"吉林","c":"松原"},
        {"p":"江苏","c":"泰州"},
        {"p":"江苏","c":"常州"},
        {"p":"江苏","c":"南通"},
        {"p":"江苏","c":"苏州"},
        {"p":"江苏","c":"盐城"},
        {"p":"江苏","c":"扬州"},
        {"p":"江苏","c":"徐州"},
        {"p":"江苏","c":"苏州"},
        {"p":"江苏","c":"连云港"},
        {"p":"江苏","c":"苏州"},
        {"p":"江苏","c":"无锡"},
        {"p":"江苏","c":"南京"},
        {"p":"江苏","c":"苏州"},
        {"p":"江苏","c":"泰州"},
        {"p":"江苏","c":"常州"},
        {"p":"江苏","c":"南京"},
        {"p":"江西","c":"上饶"},
        {"p":"江西","c":"赣州"},
        {"p":"江西","c":"宜春"},
        {"p":"江西","c":"南昌"},
        {"p":"江西","c":"赣州"},
        {"p":"江西","c":"抚州"},
        {"p":"江西","c":"吉安"},
        {"p":"江西","c":"南昌"},
        {"p":"辽宁","c":"营口"},
        {"p":"辽宁","c":"沈阳"},
        {"p":"辽宁","c":"大连"},
        {"p":"辽宁","c":"朝阳"},
        {"p":"辽宁","c":"锦州"},
        {"p":"辽宁","c":"大连"},
        {"p":"辽宁","c":"鞍山"},
        {"p":"辽宁","c":"大连"},
        {"p":"辽宁","c":"鞍山"},
        {"p":"辽宁","c":"辽阳"},
        {"p":"辽宁","c":"铁岭"},
        {"p":"辽宁","c":"葫芦岛"},
        {"p":"辽宁","c":"本溪"},
        {"p":"辽宁","c":"大连"},
        {"p":"辽宁","c":"丹东"},
        {"p":"辽宁","c":"盘锦"},
        {"p":"辽宁","c":"沈阳"},
        {"p":"内蒙古","c":"包头"},
        {"p":"内蒙古","c":"呼和浩特"},
        {"p":"内蒙古","c":"鄂尔多斯"},
        {"p":"内蒙古","c":"呼和浩特"},
        {"p":"内蒙古","c":"通辽"},
        {"p":"内蒙古","c":"兴安盟"},
        {"p":"内蒙古","c":"赤峰"},
        {"p":"内蒙古","c":"锡林郭勒盟"},
        {"p":"内蒙古","c":"赤峰"},
        {"p":"宁夏","c":"银川"},
        {"p":"宁夏","c":"固原"},
        {"p":"宁夏","c":"吴忠"},
        {"p":"青海","c":"西宁"},
        {"p":"山东","c":"济南"},
        {"p":"山东","c":"济宁"},
        {"p":"山东","c":"潍坊"},
        {"p":"山东","c":"烟台"},
        {"p":"山东","c":"临沂"},
        {"p":"山东","c":"泰安"},
        {"p":"山东","c":"青岛"},
        {"p":"山东","c":"聊城"},
        {"p":"山东","c":"泰安"},
        {"p":"山东","c":"滨州"},
        {"p":"山东","c":"烟台"},
        {"p":"山东","c":"潍坊"},
        {"p":"山东","c":"威海"},
        {"p":"山东","c":"临沂"},
        {"p":"山东","c":"枣庄"},
        {"p":"山东","c":"青岛"},
        {"p":"山东","c":"日照"},
        {"p":"山东","c":"淄博"},
        {"p":"山东","c":"青岛"},
        {"p":"山东","c":"济南"},
        {"p":"山东","c":"东营"},
        {"p":"山东","c":"青岛"},
        {"p":"山东","c":"菏泽"},
        {"p":"山东","c":"潍坊"},
        {"p":"山东","c":"济宁"},
        {"p":"山东","c":"泰安"},
        {"p":"山东","c":"菏泽"},
        {"p":"山东","c":"临沂"},
        {"p":"山东","c":"滨州"},
        {"p":"山东","c":"莱芜"},
        {"p":"山东","c":"青岛"},
        {"p":"山东","c":"济宁"},
        {"p":"山东","c":"枣庄"},
        {"p":"山东","c":"青岛"},
        {"p":"山东","c":"烟台"},
        {"p":"山西","c":"临汾"},
        {"p":"山西","c":"晋城"},
        {"p":"山西","c":"太原"},
        {"p":"山西","c":"运城"},
        {"p":"山西","c":"朔州"},
        {"p":"山西","c":"晋中"},
        {"p":"山西","c":"运城"},
        {"p":"山西","c":"吕梁"},
        {"p":"山西","c":"长治"},
        {"p":"山西","c":"大同"},
        {"p":"山西","c":"长治"},
        {"p":"山西","c":"晋城"},
        {"p":"山西","c":"阳泉"},
        {"p":"山西","c":"太原"},
        {"p":"山西","c":"晋中"},
        {"p":"山西","c":"吕梁"},
        {"p":"山西","c":"太原"},
        {"p":"陕西","c":"西安"},
        {"p":"陕西","c":"咸阳"},
        {"p":"陕西","c":"西安"},
        {"p":"陕西","c":"榆林"},
        {"p":"陕西","c":"安康"},
        {"p":"陕西","c":"汉中"},
        {"p":"陕西","c":"西安"},
        {"p":"陕西","c":"咸阳"},
        {"p":"陕西","c":"宝鸡"},
        {"p":"陕西","c":"铜川"},
        {"p":"陕西","c":"商洛"},
        {"p":"陕西","c":"渭南"},
        {"p":"陕西","c":"西安"},
        {"p":"上海","c":"上海"},
        {"p":"四川","c":"成都"},
        {"p":"四川","c":"眉山"},
        {"p":"四川","c":"乐山"},
        {"p":"四川","c":"成都"},
        {"p":"四川","c":"绵阳"},
        {"p":"四川","c":"成都"},
        {"p":"四川","c":"资阳"},
        {"p":"四川","c":"成都"},
        {"p":"四川","c":"宜宾"},
        {"p":"四川","c":"内江"},
        {"p":"四川","c":"巴中"},
        {"p":"四川","c":"泸州"},
        {"p":"四川","c":"广元"},
        {"p":"四川","c":"南充"},
        {"p":"四川","c":"遂宁"},
        {"p":"四川","c":"成都"},
        {"p":"四川","c":"自贡"},
        {"p":"四川","c":"雅安"},
        {"p":"四川","c":"泸州"},
        {"p":"四川","c":"凉山"},
        {"p":"四川","c":"攀枝花"},
        {"p":"四川","c":"达州"},
        {"p":"四川","c":"南充"},
        {"p":"四川","c":"眉山"},
        {"p":"四川","c":"成都"},
        {"p":"四川","c":"达州"},
        {"p":"四川","c":"德阳"},
        {"p":"四川","c":"广安"},
        {"p":"四川","c":"成都"},
        {"p":"天津","c":"天津"},
        {"p":"新疆","c":"乌鲁木齐"},
        {"p":"新疆","c":"伊犁"},
        {"p":"新疆","c":"乌鲁木齐"},
        {"p":"新疆","c":"喀什"},
        {"p":"云南","c":"昆明"},
        {"p":"云南","c":"玉溪"},
        {"p":"云南","c":"楚雄州"},
        {"p":"云南","c":"大理"},
        {"p":"云南","c":"保山"},
        {"p":"云南","c":"曲靖"},
        {"p":"云南","c":"文山"},
        {"p":"云南","c":"德宏州"},
        {"p":"云南","c":"红河"},
        {"p":"云南","c":"普洱"},
        {"p":"浙江","c":"绍兴"},
        {"p":"浙江","c":"温州"},
        {"p":"浙江","c":"宁波"},
        {"p":"浙江","c":"温州"},
        {"p":"浙江","c":"绍兴"},
        {"p":"浙江","c":"台州"},
        {"p":"浙江","c":"宁波"},
        {"p":"浙江","c":"杭州"},
        {"p":"浙江","c":"丽水"},
        {"p":"浙江","c":"金华"},
        {"p":"浙江","c":"湖州"},
        {"p":"浙江","c":"宁波"},
        {"p":"浙江","c":"嘉兴"},
        {"p":"浙江","c":"宁波"},
        {"p":"浙江","c":"绍兴"},
        {"p":"浙江","c":"金华"},
        {"p":"浙江","c":"嘉兴"},
        {"p":"浙江","c":"温州"},
        {"p":"浙江","c":"宁波"},
        {"p":"浙江","c":"杭州"},
        {"p":"浙江","c":"衢州"},
        {"p":"浙江","c":"金华"}
    ],
    "dealer":[
        {"d":"淮北","c":"淮北市迪安特汽车销售服务有限公司"},
        {"d":"滁州","c":"滁州东和泰昌汽车销售服务有限公司"},
        {"d":"合肥","c":"合肥新迪汽车销售服务有限公司"},
        {"d":"蚌埠","c":"蚌埠市汇通汽车销售有限公司"},
        {"d":"六安","c":"安徽金迪汽车销售服务有限公司"},
        {"d":"安庆","c":"安徽中迪汽车销售服务有限公司"},
        {"d":"安庆","c":"安庆市鑫晨汽车贸易有限公司"},
        {"d":"铜陵","c":"铜陵市宁瑞汽车销售有限责任公司"},
        {"d":"合肥","c":"安徽省骏迪汽车销售有限公司"},
        {"d":"马鞍山","c":"马鞍山市顺迪汽车销售服务有限公司"},
        {"d":"亳州","c":"亳州市新梦迪汽车销售有限责任公司"},
        {"d":"阜阳","c":"阜阳海迪汽车销售服务有限公司"},
        {"d":"北京","c":"北京市北方瑞鹏汽车服务有限公司"},
        {"d":"北京","c":"北京鹏天奥汽车销售有限公司"},
        {"d":"北京","c":"北京鑫敏恒汽车销售有限公司"},
        {"d":"北京","c":"北京鑫敏恒瑞鑫汽车销售有限公司"},
        {"d":"北京","c":"北京环耀汽车服务有限公司"},
        {"d":"北京","c":"北京润城汽车维修有限公司"},
        {"d":"北京","c":"北京福铃丰瑞汽车销售有限公司"},
        {"d":"北京","c":"北京军鹏伟业汽车销售有限公司"},
        {"d":"北京","c":"北京天通利华汽车修理有限公司"},
        {"d":"北京","c":"北京盛世路骐汽车销售有限公司"},
        {"d":"重庆","c":"重庆市沪渝汽车修理厂"},
        {"d":"重庆","c":"重庆成空亚飞汽车销售服务有限公司"},
        {"d":"重庆","c":"重庆隆源汽车贸易有限公司"},
        {"d":"重庆","c":"重庆市宝骏汽车销售有限公司"},
        {"d":"重庆","c":"重庆隆骏汽车销售服务有限公司"},
        {"d":"泉州","c":"福建省粤迪汽车销售有限公司"},
        {"d":"泉州","c":"泉州鸿鑫汽车销售服务有限公司"},
        {"d":"龙岩","c":"福建龙迪鑫汽车销售服务有限公司"},
        {"d":"泉州","c":"福建省国安锦轮汽车贸易有限责任公司"},
        {"d":"厦门","c":"厦门市佳凯盛汽车贸易有限公司"},
        {"d":"莆田","c":"莆田市亿豪汽车贸易有限公司"},
        {"d":"三明","c":"三明市万通经贸有限公司"},
        {"d":"厦门","c":"厦门市盛世开元汽车销售有限公司"},
        {"d":"福州","c":"福建省美嘉鑫迪贸易有限公司"},
        {"d":"漳州","c":"漳州华骏天捷汽车贸易有限公司"},
        {"d":"兰州","c":"甘肃泓通汽车服务有限公司"},
        {"d":"兰州","c":"兰州盛世开元汽车销售有限公司"},
        {"d":"兰州","c":"甘肃永宁汽车销售服务有限公司"},
        {"d":"庆阳","c":"庆阳陇迪汽车销售有限公司"},
        {"d":"酒泉","c":"酒泉新运通汽车出租有限公司销售分公司"},
        {"d":"平凉","c":"平凉市时代恒星汽贸有限责任公司"},
        {"d":"定西","c":"定西盛世开元汽车销售有限公司"},
        {"d":"佛山","c":"佛山市顺德区东汽汽车销售服务有限公司"},
        {"d":"深圳","c":"深圳市恒泰昌汽车销售服务有限公司"},
        {"d":"惠州","c":"惠州市金环怡汽车销售有限公司"},
        {"d":"珠海","c":"珠海市银河创业汽车销售有限公司分公司"},
        {"d":"广州","c":"广州市饰和汽车有限公司"},
        {"d":"广州","c":"广州市鑫湾汽车贸易有限公司"},
        {"d":"珠海","c":"珠海市航鑫有限公司"},
        {"d":"茂名","c":"茂名市粤迪汽车贸易有限公司"},
        {"d":"东莞","c":"东莞市和盛佳汽车销售服务有限公司"},
        {"d":"肇庆","c":"肇庆安迪通汽车服务有限公司"},
        {"d":"清远","c":"清远市友盈汽车销售服务有限公司"},
        {"d":"韶关","c":"韶关市锋得行汽车销售服务有限公司"},
        {"d":"广州","c":"广东欧亚特汽车销售服务有限公司"},
        {"d":"揭阳","c":"揭阳市鹏发车业有限公司"},
        {"d":"河源","c":"河源市永发汽车销售有限公司"},
        {"d":"深圳","c":"深圳市粤迪汽车贸易有限公司南山分公司"},
        {"d":"广州","c":"广州市锦虹汽车销售服务有限公司"},
        {"d":"东莞","c":"东莞市周通泰汽车贸易有限公司"},
        {"d":"深圳","c":"深圳金环怡投资有限公司"},
        {"d":"广州","c":"广州志翔汽车贸易有限公司"},
        {"d":"东莞","c":"东莞市勤力汽车贸易有限公司"},
        {"d":"广州","c":"广州东湖汽车销售服务有限公司"},
        {"d":"东莞","c":"东莞市兴发汽车贸易有限公司"},
        {"d":"江门","c":"江门市广瑞汽车贸易有限公司"},
        {"d":"东莞","c":"东莞市建鹏汽车销售有限公司    　"},
        {"d":"深圳","c":"深圳市龙南汽车贸易有限公司"},
        {"d":"惠州","c":"惠州市惠迪汽车贸易有限公司"},
        {"d":"佛山","c":"佛山市安迪通汽车贸易有限公司"},
        {"d":"中山","c":"中山市富茂汽车销售有限公司"},
        {"d":"东莞","c":"东莞市锋得行汽车销售服务有限公司"},
        {"d":"深圳","c":"深圳市泽然浩商贸有限公司"},
        {"d":"佛山","c":"佛山机电设备有限公司"},
        {"d":"深圳","c":"深圳市三维都灵汽车销售服务有限公司"},
        {"d":"惠州","c":"惠州市越景汽车销售服务有限公司"},
        {"d":"深圳","c":"深圳市东盛汽车销售服务有限公司"},
        {"d":"深圳","c":"深圳市湛宝实业发展有限公司"},
        {"d":"深圳","c":"深圳浩迪汽车销售服务有限公司"},
        {"d":"广州","c":"广州市路骐汽车销售有限公司"},
        {"d":"汕尾","c":"汕尾锦虹汽车销售服务有限公司"},
        {"d":"广州","c":"广州亚美迪汽车销售有限公司"},
        {"d":"佛山","c":"佛山市南海区宇翔汽车贸易有限公司"},
        {"d":"广州","c":"广州宝昊城汽车销售服务有限公司"},
        {"d":"中山","c":"中山市悦禾汽车销售服务有限公司"},
        {"d":"广州","c":"广州金昊城汽车销售服务有限公司"},
        {"d":"佛山","c":"佛山市键马汽车贸易有限公司"},
        {"d":"清远","c":"清远锦昊城汽车销售服务有限公司"},
        {"d":"茂名","c":"茂名石化汽车服务有限公司汽车销售分公司"},
        {"d":"深圳","c":"深圳市盛世开元汽车销售有限公司龙岗区分公司"},
        {"d":"河源","c":"河源市乾元新景汽车销售有限公司"},
        {"d":"汕头","c":"汕头市驰宇汽车销售服务有限公司"},
        {"d":"深圳","c":"深圳市盛世开元汽车销售有限公司福田城市展厅分公司"},
        {"d":"南宁","c":"南宁佳之迪汽车销售有限公司"},
        {"d":"桂林","c":"桂林市乐丰汽车贸易有限公司"},
        {"d":"百色","c":"广西百色佳宜汽车销售有限公司"},
        {"d":"梧州","c":"梧州市盛世开元汽车销售有限公司"},
        {"d":"南宁","c":"南宁市盛世开元汽车销售有限公司"},
        {"d":"柳州","c":"柳州市迪翔汽车贸易有限公司"},
        {"d":"贵阳","c":"贵州福利汽车销售服务有限公司"},
        {"d":"遵义","c":"贵州航天实业有限公司"},
        {"d":"遵义","c":"遵义一木贸易有限责任公司"},
        {"d":"贵阳","c":"贵州乾骏汽车销售服务有限公司"},
        {"d":"贵阳","c":"贵州长峰汽车销售服务有限公司"},
        {"d":"六盘水","c":"贵州省六盘水市钟祥汽贸有限责任公司"},
        {"d":"贵阳","c":"贵阳京润通汽车销售有限公司"},
        {"d":"黔南州","c":"都匀市盛世开元汽车销售有限公司"},
        {"d":"毕节","c":"毕节三瑞汽车销售服务有限公司"},
        {"d":"黔东南州","c":"贵州省凯里中惠贸易有限公司"},
        {"d":"海口","c":"海口翔迪汽车服务有限公司"},
        {"d":"海口","c":"海口翔飞汽车贸易有限公司"},
        {"d":"保定","c":"保定市顺捷物资贸易有限公司"},
        {"d":"保定","c":"保定市天地人合汽车销售服务有限公司"},
        {"d":"邯郸","c":"邯郸市福达汽车贸易有限公司"},
        {"d":"邢台","c":"邢台大丰汽车有限公司"},
        {"d":"石家庄","c":"河北习实康鑫汽车贸易有限公司"},
        {"d":"秦皇岛","c":"秦皇岛机电比亚迪汽车销售服务有限公司"},
        {"d":"保定","c":"涿州中煤华谊汽车销售服务有限公司"},
        {"d":"承德","c":"承德市开发区源泉汽车贸易有限公司"},
        {"d":"石家庄","c":"河北同驰汽车贸易有限公司"},
        {"d":"沧州","c":"河北三胜汽车贸易有限公司"},
        {"d":"张家口","c":"张家口市贵宾汽贸汽修有限公司"},
        {"d":"唐山","c":"唐山市金利海汽车销售有限公司"},
        {"d":"廊坊","c":"霸州市鑫时利汽车销售有限公司"},
        {"d":"保定","c":"定州市汇盛汽车贸易有限公司"},
        {"d":"邢台","c":"邢台和信汽车贸易有限公司"},
        {"d":"邢台","c":"河北三行汽车贸易股份有限公司"},
        {"d":"廊坊","c":"廊坊市瑞崇汽车销售有限公司"},
        {"d":"邯郸","c":"邯郸大丰汽车销售服务有限公司"},
        {"d":"邯郸","c":"河北兴迪汽车销售有限公司"},
        {"d":"许昌","c":"许昌市恒力汽车销售服务有限公司"},
        {"d":"驻马店","c":"驻马店市东方汽车贸易服务有限公司"},
        {"d":"洛阳","c":"洛阳陆行汽车销售服务有限公司"},
        {"d":"周口","c":"周口弘祥汽车销售服务有限公司"},
        {"d":"南阳","c":"南阳德瑞汽车销售服务有限公司"},
        {"d":"焦作","c":"焦作市共城汽车销售服务有限公司"},
        {"d":"南阳","c":"邓州永成商贸有限公司"},
        {"d":"信阳","c":"信阳锐达汽车销售服务有限公司"},
        {"d":"许昌","c":"禹州市淇虹汽车销售服务有限公司"},
        {"d":"安阳","c":"安阳市华伟汽车销售服务有限公司"},
        {"d":"平顶山","c":"平顶山市迪升汽车贸易服务有限公司"},
        {"d":"漯河","c":"漯河市诚达汽车销售服务有限公司"},
        {"d":"商丘","c":"商丘市隆兴汽车销售有限公司"},
        {"d":"郑州","c":"河南天泽新能源汽车有限公司"},
        {"d":"南阳","c":"南阳盛元汽车销售有限公司"},
        {"d":"濮阳","c":"濮阳市利天汽车销售服务有限公司"},
        {"d":"漯河","c":"漯河市华润汽车销售服务有限公司"},
        {"d":"南阳","c":"南阳启成汽车销售有限公司"},
        {"d":"许昌","c":"许昌维利特汽车销售服务有限公司"},
        {"d":"郑州","c":"河南新利天汽车销售有限公司"},
        {"d":"济源","c":"焦作市乾博源物资有限责任公司济源分公司"},
        {"d":"商丘","c":"永城市春雷汽车销售有限公司"},
        {"d":"郑州","c":"河南省荣光汽车贸易有限公司"},
        {"d":"郑州","c":"河南宇鼎缘汽车销售服务有限公司"},
        {"d":"齐齐哈尔","c":"齐齐哈尔龙港汽车销售有限公司"},
        {"d":"大庆","c":"大庆市兄弟汽车销售有限公司"},
        {"d":"哈尔滨","c":"哈尔滨振海汽车销售服务有限公司"},
        {"d":"哈尔滨","c":"黑龙江宏达旭龙汽车销售服务有限公司"},
        {"d":"绥化","c":"绥化昌隆汽车销售服务有限公司"},
        {"d":"哈尔滨","c":"哈尔滨天盛达汽车销售有限公司"},
        {"d":"佳木斯","c":"佳木斯华驰汽车销售服务有限公司"},
        {"d":"牡丹江","c":"牡丹江市震飞汽车交易市场有限公司"},
        {"d":"哈尔滨","c":"哈尔滨市宏达嘉龙汽车销售维修服务有限公司"},
        {"d":"武汉","c":"武汉市惠誉汽车销售服务有限公司"},
        {"d":"恩施","c":"恩施自治州施南汽车销售服务有限公司"},
        {"d":"襄阳","c":"湖北新星德胜汽车服务有限公司"},
        {"d":"天门","c":"湖北天门立天汽车商贸有限公司"},
        {"d":"武汉","c":"武汉精华龙康汽车销售服务有限公司"},
        {"d":"黄冈","c":"黄冈驰恒汽车销售服务有限公司"},
        {"d":"宜昌","c":"宜昌市华健汽车销售服务有限责任公司"},
        {"d":"随州","c":"随州市润发汽车销售服务有限公司"},
        {"d":"宜昌","c":"宜昌安蓝汽车销售有限公司"},
        {"d":"十堰","c":"十堰市凌恒工贸有限公司"},
        {"d":"武汉","c":"武汉国瑞汽车销售服务有限公司"},
        {"d":"黄石","c":"湖北正旺汽车销售服务有限公司"},
        {"d":"孝感","c":"孝感市恒迪汽车销售服务有限公司"},
        {"d":"武汉","c":"武汉市盛世王朝汽车销售有限公司"},
        {"d":"荆门","c":"荆门市常发汽车服务有限公司月亮湖分公司"},
        {"d":"武汉","c":"武汉市东瑞汽车销售服务有限公司"},
        {"d":"襄阳","c":"襄阳市盛世开元汽车销售有限公司"},
        {"d":"长沙","c":"长沙市金旋风汽车贸易有限公司"},
        {"d":"株洲","c":"株洲市奇迹实业有限责任公司"},
        {"d":"益阳","c":"益阳欣天汽车销售服务有限公司"},
        {"d":"长沙","c":"湖南星一汽车销售服务有限公司"},
        {"d":"长沙","c":"湖南恒跃通汽车贸易有限公司"},
        {"d":"郴州","c":"郴州悦迪汽车贸易有限公司"},
        {"d":"湘潭","c":"湘潭市九迪汽车销售服务有限公司"},
        {"d":"郴州","c":"郴州市得信经贸有限责任公司"},
        {"d":"长沙","c":"湖南岳迪汽车销售有限公司"},
        {"d":"衡阳","c":"衡阳市中意汽车服务有限公司"},
        {"d":"娄底","c":"娄底市宝顺汽贸有限公司"},
        {"d":"常德","c":"长沙市金旋风汽车贸易有限公司常德分公司"},
        {"d":"岳阳","c":"岳阳市广标汽车服务有限公司"},
        {"d":"长沙","c":"长沙市路骐汽车销售有限公司高新区分公司"},
        {"d":"长沙","c":"长沙市路骐汽车销售有限公司"},
        {"d":"长沙","c":"湖南鑫源汽车销售有限公司"},
        {"d":"怀化","c":"怀化市路骐汽车销售有限公司"},
        {"d":"长春","c":"长春兴盛汽车销售有限公司"},
        {"d":"吉林","c":"吉林市平远汽车经销有限公司"},
        {"d":"长春","c":"吉林省恒亚汽车销售服务有限公司"},
        {"d":"四平","c":"四平市博成汽车销售服务有限公司"},
        {"d":"延边","c":"延吉嘉航汽车销售服务有限公司"},
        {"d":"白山","c":"白山市城东名车销售服务有限公司"},
        {"d":"松原","c":"松原市凯福顺通汽车销售服务有限公司"},
        {"d":"泰州","c":"泰州大亚汽车销售服务有限公司"},
        {"d":"常州","c":"常州长安铃木汽车销售有限公司"},
        {"d":"南通","c":"弘仁南通汽车销售服务有限公司"},
        {"d":"苏州","c":"吴江日升汽车销售服务有限公司"},
        {"d":"苏州","c":"苏州元生新能源汽车销售服务有限公司"},
        {"d":"盐城","c":"盐城市洪兆连汽车贸易有限公司"},
        {"d":"扬州","c":"扬州新大华汽车销售服务有限公司"},
        {"d":"徐州","c":"徐州平迪汽车销售服务有限公司"},
        {"d":"苏州","c":"苏州市才富汽车服务有限公司"},
        {"d":"苏州","c":"昆山市仁合新能源汽车销售有限公司"},
        {"d":"连云港","c":"连云港市苍梧汽车销售有限公司"},
        {"d":"苏州","c":"张家港市全顺汽车销售服务有限公司"},
        {"d":"无锡","c":"无锡市越迪汽车销售有限公司"},
        {"d":"南京","c":"江苏雨田都灵汽车销售服务有限公司"},
        {"d":"南京","c":"江苏恒佳新能源汽车销售服务有限公司"},
        {"d":"苏州","c":"张家港泰丰汽车销售服务有限公司"},
        {"d":"泰州","c":"泰州市烔圣新能源汽车销售服务有限公司"},
        {"d":"常州","c":"常州市盛世新景汽车销售有限公司"},
        {"d":"南京","c":"南京盛世新景汽车销售有限公司"},
        {"d":"上饶","c":"上饶市为华汽车销售服务有限公司"},
        {"d":"赣州","c":"赣州众和汽车销售服务有限公司"},
        {"d":"宜春","c":"宜春年富汽车贸易有限公司"},
        {"d":"南昌","c":"江西省鸿运汽车有限公司"},
        {"d":"赣州","c":"赣州聚缘汽车销售服务有限公司"},
        {"d":"抚州","c":"抚州新力汽车贸易有限公司"},
        {"d":"吉安","c":"吉安广合缘汽车销售服务有限公司"},
        {"d":"南昌","c":"南昌市新融城商贸有限公司"},
        {"d":"营口","c":"营口天福新迪汽车销售有限公司"},
        {"d":"沈阳","c":"辽宁兴锐汽车销售服务有限公司"},
        {"d":"沈阳","c":"辽宁兴旗汽车销售服务有限公司"},
        {"d":"大连","c":"大连龙威汽车贸易有限公司"},
        {"d":"朝阳","c":"朝阳车世界汽车销售维修服务有限公司"},
        {"d":"锦州","c":"锦州盛龙汽车销售服务有限公司"},
        {"d":"大连","c":"大连众义达汽车销售有限公司"},
        {"d":"鞍山","c":"鞍山众迪汽车销售服务有限公司"},
        {"d":"大连","c":"瓦房店市新世纪汽车修配有限公司"},
        {"d":"鞍山","c":"鞍山安迪汽车销售服务有限公司"},
        {"d":"辽阳","c":"辽阳兴旗汽车销售服务有限公司"},
        {"d":"铁岭","c":"铁岭市顺峰(集团)顺鑫汽车销售服务有限公司"},
        {"d":"葫芦岛","c":"葫芦岛鑫恒源贸易有限公司"},
        {"d":"本溪","c":"辽宁英汇汽车贸易有限公司"},
        {"d":"大连","c":"大连市盛世开元汽车销售有限公司"},
        {"d":"丹东","c":"丹东市乾元新景汽车销售有限公司"},
        {"d":"盘锦","c":"盘锦盛世开元汽车销售有限公司"},
        {"d":"沈阳","c":"沈阳美驰虎汽车销售服务有限公司"},
        {"d":"包头","c":"包头市福迪汽车贸易有限公司"},
        {"d":"包头","c":"包头市华迪汽车销售服务有限责任公司"},
        {"d":"呼和浩特","c":"内蒙古恒泰翔汽车销售服务有限公司"},
        {"d":"鄂尔多斯","c":"鄂尔多斯市东胜区福邦汽车商贸有限责任公司"},
        {"d":"呼和浩特","c":"内蒙古长青汽车贸易有限公司"},
        {"d":"通辽","c":"通辽市九赢车辆销售有限责任公司"},
        {"d":"兴安盟","c":"兴安盟世源汽车贸易有限公司"},
        {"d":"赤峰","c":"赤峰金基摩托车销售有限公司"},
        {"d":"锡林郭勒盟","c":"锡林郭勒盟博杰商贸有限公司"},
        {"d":"赤峰","c":"赤峰百恩商贸有限责任公司"},
        {"d":"银川","c":"宁夏银迪汽车销售有限公司"},
        {"d":"固原","c":"固原盛世开元汽车销售有限公司"},
        {"d":"吴忠","c":"宁夏吴忠市宁北鑫迪汽车销售有限公司"},
        {"d":"西宁","c":"青海亚通汽车销售服务有限公司"},
        {"d":"西宁","c":"西宁金岛晟盈汽车销售有限公司"},
        {"d":"济南","c":"济南乾城汽车贸易有限公司"},
        {"d":"济宁","c":"济宁交运聚丰汽车销售服务有限公司"},
        {"d":"潍坊","c":"潍坊圣世骏通汽车销售服务有限公司"},
        {"d":"烟台","c":"烟台交运集团轿车销售服务有限公司"},
        {"d":"临沂","c":"临沂瑞鼎汽车销售服务有限公司"},
        {"d":"泰安","c":"泰安德瑞汽车销售有限公司"},
        {"d":"青岛","c":"青岛华驰汽车销售服务有限公司"},
        {"d":"聊城","c":"聊城市同辉汽车销售有限公司"},
        {"d":"泰安","c":"山东震德汽车销售有限公司"},
        {"d":"滨州","c":"滨州市昌华汽车销售服务有限公司"},
        {"d":"烟台","c":"烟台太古汽车销售有限公司"},
        {"d":"潍坊","c":"潍坊金茂盛汽车销售服务有限公司"},
        {"d":"威海","c":"威海市正安汽车销售有限公司"},
        {"d":"临沂","c":"临沂世鼎商贸有限公司"},
        {"d":"枣庄","c":"枣庄奚仲汽车销售有限公司"},
        {"d":"青岛","c":"青岛蓝天远景汽车销售服务有限公司"},
        {"d":"日照","c":"日照圣豪汽车销售服务有限公司"},
        {"d":"淄博","c":"山东新星集团有限公司"},
        {"d":"青岛","c":"青岛仕通达汽车销售服务有限公司"},
        {"d":"济南","c":"济南乾盛汽车销售有限公司"},
        {"d":"东营","c":"东营齐胜汽车销售有限公司"},
        {"d":"青岛","c":"青岛市盛世路骐汽车销售有限公司"},
        {"d":"菏泽","c":"菏泽润众汽车工业科技有限公司"},
        {"d":"潍坊","c":"诸城市亚飞汽车销售服务有限公司"},
        {"d":"济宁","c":"曲阜市丰泰汽车销售服务有限公司"},
        {"d":"泰安","c":"泰安兴德汽车销售有限公司"},
        {"d":"菏泽","c":"郓城润迪汽车销售有限公司"},
        {"d":"临沂","c":"沂水世通汽车销售服务有限公司"},
        {"d":"滨州","c":"山东滨州昌远汽车销售有限公司"},
        {"d":"莱芜","c":"莱芜市鑫正汽车销售服务有限公司"},
        {"d":"青岛","c":"青岛迪泰汽车销售服务有限公司"},
        {"d":"济宁","c":"邹城润泰汽车销售服务有限公司"},
        {"d":"枣庄","c":"滕州市安驰商贸有限公司"},
        {"d":"青岛","c":"青岛明梓东昱汽车销售服务有限公司"},
        {"d":"烟台","c":"烟台华鼎陆迪汽车销售服务有限公司"},
        {"d":"临汾","c":"临汾大昌汽车服务有限公司"},
        {"d":"临汾","c":"临汾悦迪汽车销售服务有限公司"},
        {"d":"晋城","c":"晋城市元唐汽车销售有限公司"},
        {"d":"太原","c":"山西新千年工贸有限公司万国汽车销售分公司"},
        {"d":"太原","c":"山西精华伟业汽车服务有限公司"},
        {"d":"运城","c":"运城市华森汽车销售服务有限公司"},
        {"d":"朔州","c":"山西呈泽工贸有限公司"},
        {"d":"晋中","c":"山西亚迪利汽车贸易有限公司"},
        {"d":"运城","c":"运城市鑫泽汽车销售有限公司"},
        {"d":"吕梁","c":"孝义市正达汽车销售服务有限公司"},
        {"d":"长治","c":"山西省长治市飞路汽车贸易有限公司"},
        {"d":"大同","c":"山西智腾汽车营销服务有限公司"},
        {"d":"大同","c":"大同市银狮汽车销售服务有限公司"},
        {"d":"长治","c":"长治市四合贸易有限公司"},
        {"d":"晋城","c":"晋城市觉安汽车销售服务有限公司"},
        {"d":"阳泉","c":"阳泉恒瑞物贸有限责任公司"},
        {"d":"太原","c":"太原市盛世开元汽车销售有限公司"},
        {"d":"晋中","c":"晋中市新世开元汽车销售有限公司"},
        {"d":"吕梁","c":"吕梁市盛世开元汽车销售有限公司"},
        {"d":"太原","c":"太原鑫源泰汽车服务有限公司"},
        {"d":"太原","c":"山西弗拉瑞思贸易有限公司"},
        {"d":"西安","c":"陕西意拓汽车销售有限公司"},
        {"d":"西安","c":"陕西信天游汽车服务有限公司"},
        {"d":"西安","c":"陕西景泰汽车销售服务有限公司"},
        {"d":"西安","c":"西安新益通汽车贸易有限公司"},
        {"d":"咸阳","c":"陕西梦迪汽车销售服务有限公司"},
        {"d":"西安","c":"西安奥通汽车销售服务有限公司"},
        {"d":"榆林","c":"榆林市晶鑫汽贸有限责任公司"},
        {"d":"榆林","c":"榆林市嘉华汽车销售有限公司"},
        {"d":"安康","c":"陕西安康高新德宝汽车销售有限公司"},
        {"d":"汉中","c":"汉中汉唐进口汽车维修有限公司"},
        {"d":"西安","c":"西安市乾元新景汽车销售有限公司"},
        {"d":"西安","c":"西安市乾元新景汽车销售有限公司曲江新区分公司"},
        {"d":"咸阳","c":"陕西利德汽车销售服务有限公司"},
        {"d":"宝鸡","c":"宝鸡市盛世开元汽车销售有限公司"},
        {"d":"铜川","c":"铜川市盛世开元汽车销售有限公司"},
        {"d":"商洛","c":"商洛市盛世开元汽车销售有限公司"},
        {"d":"渭南","c":"渭南新威汽车销售服务有限公司"},
        {"d":"西安","c":"陕西秦星汽车销售服务有限公司"},
        {"d":"上海","c":"上海君和汽车销售服务有限公司"},
        {"d":"上海","c":"上海弘仁宝升汽车销售服务有限公司"},
        {"d":"上海","c":"上海华裕汽车修理有限公司"},
        {"d":"上海","c":"上海联通汽车销售有限公司"},
        {"d":"上海","c":"上海乐迪汽车销售服务有限公司"},
        {"d":"上海","c":"上海富林汽车销售服务有限公司"},
        {"d":"上海","c":"上海华帆旗申汽车销售有限公司"},
        {"d":"上海","c":"上海润迪汽车销售服务有限公司"},
        {"d":"上海","c":"上海彤新汽车租赁服务有限公司"},
        {"d":"上海","c":"上海汇羿汽车销售服务有限公司"},
        {"d":"上海","c":"上海兴迪新能源汽车销售服务有限公司"},
        {"d":"上海","c":"上海毅欣汽车销售有限公司"},
        {"d":"上海","c":"上海弘仁锐豪汽车销售服务有限公司"},
        {"d":"上海","c":"上海联通嘉能新能源汽车销售服务有限公司"},
        {"d":"上海","c":"上海利港环态新能源汽车销售有限公司"},
        {"d":"上海","c":"上海联通宝亭汽车销售有限公司"},
        {"d":"成都","c":"成都新港汽车维修有限责任公司"},
        {"d":"眉山","c":"眉山俊华汽车销售服务有限公司"},
        {"d":"乐山","c":"绵竹市金华汽车经营有限公司乐山分公司"},
        {"d":"成都","c":"成都上典西区汽车销售有限公司"},
        {"d":"绵阳","c":"四川国华强劲汽车销售服务有限公司"},
        {"d":"成都","c":"四川长征飞越汽车销售服务有限公司"},
        {"d":"资阳","c":"资阳市上典三和汽车销售服务有限公司"},
        {"d":"成都","c":"成都蓝海汽车销售服务有限公司"},
        {"d":"宜宾","c":"宜宾骏辉汽车销售服务有限公司"},
        {"d":"内江","c":"四川内江川豫汽车销售服务有限公司"},
        {"d":"巴中","c":"巴中市成强汽车贸易有限公司"},
        {"d":"泸州","c":"泸州凯联汽车贸易有限公司"},
        {"d":"广元","c":"广元市万运达汽车销售服务有限公司"},
        {"d":"南充","c":"南充市锦垣汽车有限公司"},
        {"d":"遂宁","c":"遂宁恒思汽车销售有限公司"},
        {"d":"成都","c":"成都上典汽车贸易有限公司"},
        {"d":"自贡","c":"自贡树德汽车服务有限公司"},
        {"d":"雅安","c":"雅安市美雅汽车销售服务有限公司"},
        {"d":"泸州","c":"泸州忠山汽车销售有限责任公司"},
        {"d":"凉山","c":"凉山州天宇商贸有限责任公司"},
        {"d":"攀枝花","c":"攀枝花市祥瑞龙迪商贸有限公司"},
        {"d":"达州","c":"达州市正通车业有限责任公司"},
        {"d":"南充","c":"南充博宇车业有限公司"},
        {"d":"眉山","c":"四川宏光汽车销售有限公司"},
        {"d":"成都","c":"成都市乾元新景新能源汽车服务有限公司"},
        {"d":"达州","c":"达州市汇龙车业有限公司"},
        {"d":"德阳","c":"德阳富马汽车销售服务有限公司"},
        {"d":"广安","c":"广安市锐恒汽车贸易有限公司"},
        {"d":"成都","c":"成都市盛世新景汽车销售有限公司"},
        {"d":"天津","c":"天津市路迪恒泰汽车销售有限公司"},
        {"d":"天津","c":"天津市津维瑞通汽车销售有限公司"},
        {"d":"天津","c":"天津昊泽鑫商贸有限公司"},
        {"d":"天津","c":"天津市盛世开元汽车销售有限公司"},
        {"d":"天津","c":"天津环耀汽车销售服务有限公司"},
        {"d":"天津","c":"天津市九州紫寰汽车销售服务有限公司"},
        {"d":"天津","c":"天津市盛世新景汽车销售有限公司"},
        {"d":"天津","c":"天津市聚益通汽车销售服务有限公司"},
        {"d":"乌鲁木齐","c":"新疆新翔升汽车贸易有限公司"},
        {"d":"伊犁","c":"伊犁金昌商贸有限责任公司"},
        {"d":"乌鲁木齐","c":"新疆新大方成贸易有限公司"},
        {"d":"喀什","c":"喀什市通工实业有限公司"},
        {"d":"昆明","c":"云南谊和汽车经贸有限公司"},
        {"d":"昆明","c":"云南迪坤汽车销售有限公司"},
        {"d":"昆明","c":"云南光华汽车销售服务有限公司"},
        {"d":"玉溪","c":"玉溪市高新区永盛新能源汽车销售有限责任公司"},
        {"d":"楚雄州","c":"楚雄宏熙交通运输有限公司"},
        {"d":"大理","c":"大理鹏迪汽车销售服务有限公司"},
        {"d":"保山","c":"保山众杰汽车销售服务有限公司"},
        {"d":"曲靖","c":"云南曲靖交通集团精工达汽车技贸有限公司轿车销售分公司"},
        {"d":"文山","c":"文山新谊和汽车经贸有限公司"},
        {"d":"德宏州","c":"德宏州鑫盈商贸有限公司"},
        {"d":"红河","c":"开远市阳光经贸有限责任公司"},
        {"d":"普洱","c":"普洱市盛世新景汽车销售有限公司"},
        {"d":"绍兴","c":"绍兴上虞浩通商贸有限公司"},
        {"d":"温州","c":"浙江中南汽车贸易有限公司"},
        {"d":"宁波","c":"宁波洛兹汽车销售服务有限公司"},
        {"d":"温州","c":"瑞安市铭迪汽车销售服务有限公司"},
        {"d":"温州","c":"温州正迪汽车有限公司"},
        {"d":"绍兴","c":"绍兴市科能汽车销售服务有限公司"},
        {"d":"台州","c":"台州市鑫迪汽车销售服务有限公司"},
        {"d":"宁波","c":"宁波中腾汽车销售服务有限公司"},
        {"d":"杭州","c":"杭州保捷汽车有限公司"},
        {"d":"杭州","c":"杭州瑞通汽车销售有限公司"},
        {"d":"丽水","c":"丽水市万迪汽车销售服务有限公司"},
        {"d":"金华","c":"义乌市迪远汽车销售服务有限公司"},
        {"d":"金华","c":"义乌市利邦汽车销售服务有限公司"},
        {"d":"湖州","c":"长兴宝迪汽车销售服务有限公司"},
        {"d":"宁波","c":"宁波甬迪汽车销售服务有限公司"},
        {"d":"宁波","c":"慈溪新慈鑫汽车销售服务有限公司"},
        {"d":"嘉兴","c":"嘉兴市桥银经贸有限公司"},
        {"d":"宁波","c":"宁波舜迪汽车销售服务有限公司"},
        {"d":"绍兴","c":"诸暨科大汽车销售服务有限公司"},
        {"d":"金华","c":"金华市鑫迪汽车销售有限公司"},
        {"d":"嘉兴","c":"海宁海昌汽车维修装饰有限公司"},
        {"d":"温州","c":"温州欧龙机电有限公司"},
        {"d":"宁波","c":"宁波迪之杰新能源汽车销售服务有限公司"},
        {"d":"杭州","c":"浙江迪信汽车销售服务有限公司"},
        {"d":"杭州","c":"杭州卓御汽车销售有限公司"},
        {"d":"杭州","c":"杭州卓御汽车销售有限公司上城分公司"},
        {"d":"杭州","c":"杭州卓御汽车销售有限公司萧山分公司"},
        {"d":"衢州","c":"衢州迪远汽车销售有限公司"},
        {"d":"金华","c":"东阳迪远汽车销售有限公司"},
        {"d":"金华","c":"浦江县利邦汽车销售服务有限公司"}
    ]
};
export const createMap = (div,para = 18 ,center = {lat: 31.24079883 , lng: 121.48433805}) =>{
    //自定义地图
    function BigeMap() {}
    //地图下属瓦片大小
    BigeMap.prototype.tileSize = new google.maps.Size(256, 256);
    //地图最大级别
    BigeMap.prototype.maxZoom = 19;
    //地图最小级别
    BigeMap.prototype.minZoom = 18;
    //地图名称
    BigeMap.prototype.name = "基本地图";
    //设置卫星地图
    BigeMap.prototype.projection ={
        fromLatLngToPoint: function(latLng) {
          return new google.maps.Point(
              256 * (0.5 + latLng.lng() / 360),
              128*(90 - latLng.lat()) / 180
              );
        },
        fromPointToLatLng: function(point, noWrap) {
          return new google.maps.LatLng(
            90 - point.y / 128  * 180 ,
            -180 + point.x / 256 * 360,
            noWrap);
        }
    }
    //此地图种类获取URL的地址
    BigeMap.prototype.getTile = function (coord, zoom, ownerDocument) {
        var img = ownerDocument.createElement("img");
        img.style.width = this.tileSize.width + "px";
        img.style.height = this.tileSize.height + "px";
        var strURL= 'http://ip:port/tiles/' + zoom+'/'+coord.x+'/'+coord.y+'.png';
        img.src = strURL;
        img.onerror=function () {
            this.src='../static/images/error.png';
        };
        return img;
    };
    var google_map = new BigeMap();

    var myOptions = {
        //设置中心点
        center: new google.maps.LatLng(center.lat,center.lng),
        //默认显示级别
        zoom:para || 18,
        disableDefaultUI:true,
        disableDoubleClickZoom:true,
        panControl:true,
        signInControl:false,
        rotateControl:true,
        streetViewControl:false,
        mapTypeControl:false,
        scaleControl:false
    };
    //初始化map对象
    var map ;
    map = new google.maps.Map(document.getElementById(div), myOptions);
    //像map对象中添加两种种地图
    map.mapTypes.set('google', google_map);
    //设置map对象默认显示 google 地图 也就是上面的google_map对象
    map.setMapTypeId('google');
    return map;        
}

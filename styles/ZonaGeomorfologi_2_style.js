var size = 0;
var placement = 'point';
function categories_ZonaGeomorfologi_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Dataran Terumbu (Plateau)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(141,211,247,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Laguna Dalam':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(31,120,180,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Laguna Dangkal':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(77,187,213,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lereng Belakang Terumbu':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(157,156,74,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lereng Terumbu Terlindung':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,128,6,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Puncak Terumbu':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,217,47,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Reef Flat Bagian Dalam':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(5,118,38,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Reef Flat Bagian Luar':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(109,246,114,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tidak Terpetakan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,204,202,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ZonaGeomorfologi_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("geomorf_z");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_ZonaGeomorfologi_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};

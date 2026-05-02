var size = 0;
var placement = 'point';
function categories_HabitatBentik_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Batuan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(140,41,9,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Karang/Alga':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,54,191,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lamun':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(57,233,143,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pasir':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,234,115,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Puing Terumbu':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(30,255,240,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tidak Terpetakan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,0,0,0.2698039215686275)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_HabitatBentik_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("benthic_h");
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
    
var style = categories_HabitatBentik_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};

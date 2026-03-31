var wms_layers = [];


        var lyr_googlehybrid_0 = new ol.layer.Tile({
            'title': 'google  hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_corallyzengasentinel2a_1 = new ol.format.GeoJSON();
var features_corallyzengasentinel2a_1 = format_corallyzengasentinel2a_1.readFeatures(json_corallyzengasentinel2a_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_corallyzengasentinel2a_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_corallyzengasentinel2a_1.addFeatures(features_corallyzengasentinel2a_1);
var lyr_corallyzengasentinel2a_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_corallyzengasentinel2a_1, 
                style: style_corallyzengasentinel2a_1,
                popuplayertitle: "coral lyzenga sentinel 2a",
                interactive: true,
                title: '<img src="styles/legend/corallyzengasentinel2a_1.png" /> coral lyzenga sentinel 2a'
            });
var format_ZonaGeomorfologi_2 = new ol.format.GeoJSON();
var features_ZonaGeomorfologi_2 = format_ZonaGeomorfologi_2.readFeatures(json_ZonaGeomorfologi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaGeomorfologi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaGeomorfologi_2.addFeatures(features_ZonaGeomorfologi_2);
var lyr_ZonaGeomorfologi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaGeomorfologi_2, 
                style: style_ZonaGeomorfologi_2,
                popuplayertitle: "Zona Geomorfologi",
                interactive: true,
    title: 'Zona Geomorfologi<br />\
    <img src="styles/legend/ZonaGeomorfologi_2_0.png" /> Dataran Terumbu (Plateau)<br />\
    <img src="styles/legend/ZonaGeomorfologi_2_1.png" /> Laguna Dalam<br />\
    <img src="styles/legend/ZonaGeomorfologi_2_2.png" /> Laguna Dangkal<br />\
    <img src="styles/legend/ZonaGeomorfologi_2_3.png" /> Lereng Belakang Terumbu<br />\
    <img src="styles/legend/ZonaGeomorfologi_2_4.png" /> Lereng Terumbu Terlindung<br />\
    <img src="styles/legend/ZonaGeomorfologi_2_5.png" /> Puncak Terumbu<br />\
    <img src="styles/legend/ZonaGeomorfologi_2_6.png" /> Reef Flat Bagian Dalam<br />\
    <img src="styles/legend/ZonaGeomorfologi_2_7.png" /> Reef Flat Bagian Luar<br />\
    <img src="styles/legend/ZonaGeomorfologi_2_8.png" /> Tidak Terpetakan<br />'
        });
var format_HabitatBentik_3 = new ol.format.GeoJSON();
var features_HabitatBentik_3 = format_HabitatBentik_3.readFeatures(json_HabitatBentik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HabitatBentik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HabitatBentik_3.addFeatures(features_HabitatBentik_3);
var lyr_HabitatBentik_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HabitatBentik_3, 
                style: style_HabitatBentik_3,
                popuplayertitle: "Habitat Bentik",
                interactive: true,
    title: 'Habitat Bentik<br />\
    <img src="styles/legend/HabitatBentik_3_0.png" /> Batuan<br />\
    <img src="styles/legend/HabitatBentik_3_1.png" /> Karang/Alga<br />\
    <img src="styles/legend/HabitatBentik_3_2.png" /> Lamun<br />\
    <img src="styles/legend/HabitatBentik_3_3.png" /> Pasir<br />\
    <img src="styles/legend/HabitatBentik_3_4.png" /> Puing Terumbu<br />\
    <img src="styles/legend/HabitatBentik_3_5.png" /> Tidak Terpetakan<br />'
        });
var format_Mangrove_4 = new ol.format.GeoJSON();
var features_Mangrove_4 = format_Mangrove_4.readFeatures(json_Mangrove_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mangrove_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangrove_4.addFeatures(features_Mangrove_4);
var lyr_Mangrove_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangrove_4, 
                style: style_Mangrove_4,
                popuplayertitle: "Mangrove",
                interactive: true,
                title: '<img src="styles/legend/Mangrove_4.png" /> Mangrove'
            });
var format_BatasAdministrasiKelurahan_5 = new ol.format.GeoJSON();
var features_BatasAdministrasiKelurahan_5 = format_BatasAdministrasiKelurahan_5.readFeatures(json_BatasAdministrasiKelurahan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKelurahan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKelurahan_5.addFeatures(features_BatasAdministrasiKelurahan_5);
var lyr_BatasAdministrasiKelurahan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKelurahan_5, 
                style: style_BatasAdministrasiKelurahan_5,
                popuplayertitle: "Batas Administrasi Kelurahan",
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKelurahan_5.png" /> Batas Administrasi Kelurahan'
            });
var format_GroundControl_6 = new ol.format.GeoJSON();
var features_GroundControl_6 = format_GroundControl_6.readFeatures(json_GroundControl_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroundControl_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroundControl_6.addFeatures(features_GroundControl_6);
var lyr_GroundControl_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GroundControl_6, 
                style: style_GroundControl_6,
                popuplayertitle: "Ground Control",
                interactive: true,
                title: '<img src="styles/legend/GroundControl_6.png" /> Ground Control'
            });
var format_Toponimi_7 = new ol.format.GeoJSON();
var features_Toponimi_7 = format_Toponimi_7.readFeatures(json_Toponimi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toponimi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toponimi_7.addFeatures(features_Toponimi_7);
var lyr_Toponimi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toponimi_7, 
                style: style_Toponimi_7,
                popuplayertitle: "Toponimi",
                interactive: true,
                title: '<img src="styles/legend/Toponimi_7.png" /> Toponimi'
            });
var format_GarisPantai15000BIG_8 = new ol.format.GeoJSON();
var features_GarisPantai15000BIG_8 = format_GarisPantai15000BIG_8.readFeatures(json_GarisPantai15000BIG_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GarisPantai15000BIG_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GarisPantai15000BIG_8.addFeatures(features_GarisPantai15000BIG_8);
var lyr_GarisPantai15000BIG_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GarisPantai15000BIG_8, 
                style: style_GarisPantai15000BIG_8,
                popuplayertitle: "Garis Pantai 1:5000 BIG",
                interactive: true,
                title: '<img src="styles/legend/GarisPantai15000BIG_8.png" /> Garis Pantai 1:5000 BIG'
            });
var format_PembagianZonaResort_9 = new ol.format.GeoJSON();
var features_PembagianZonaResort_9 = format_PembagianZonaResort_9.readFeatures(json_PembagianZonaResort_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PembagianZonaResort_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PembagianZonaResort_9.addFeatures(features_PembagianZonaResort_9);
var lyr_PembagianZonaResort_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PembagianZonaResort_9, 
                style: style_PembagianZonaResort_9,
                popuplayertitle: "Pembagian Zona Resort",
                interactive: true,
                title: '<img src="styles/legend/PembagianZonaResort_9.png" /> Pembagian Zona Resort'
            });

lyr_googlehybrid_0.setVisible(true);lyr_corallyzengasentinel2a_1.setVisible(true);lyr_ZonaGeomorfologi_2.setVisible(false);lyr_HabitatBentik_3.setVisible(false);lyr_Mangrove_4.setVisible(false);lyr_BatasAdministrasiKelurahan_5.setVisible(false);lyr_GroundControl_6.setVisible(false);lyr_Toponimi_7.setVisible(false);lyr_GarisPantai15000BIG_8.setVisible(false);lyr_PembagianZonaResort_9.setVisible(true);
var layersList = [lyr_googlehybrid_0,lyr_corallyzengasentinel2a_1,lyr_ZonaGeomorfologi_2,lyr_HabitatBentik_3,lyr_Mangrove_4,lyr_BatasAdministrasiKelurahan_5,lyr_GroundControl_6,lyr_Toponimi_7,lyr_GarisPantai15000BIG_8,lyr_PembagianZonaResort_9];
lyr_corallyzengasentinel2a_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'coral': 'coral', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ZonaGeomorfologi_2.set('fieldAliases', {'geomorf_z': 'zona geomorfologi', 'geomorf_d': 'keterangan geomorfologi', 'benthic_h': 'habitat bentik', 'benthic_d': 'keterangan habitat bentik', 'luas_ha': 'luas_ha', 'pulau': 'pulau', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HabitatBentik_3.set('fieldAliases', {'geomorf_z': 'zona geomorfologi', 'geomorf_d': 'keterangan geomorfologi', 'benthic_h': 'habitat bentik', 'benthic_d': 'keterangan habitat bentik', 'luas_ha': 'luas_ha', 'pulau': 'pulau', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Mangrove_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KELAS': 'KELAS', 'PULAU': 'PULAU', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_BatasAdministrasiKelurahan_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_GroundControl_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'type': 'type', 'ident': 'ident', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'y_proj': 'y_proj', 'x_proj': 'x_proj', 'comment': 'comment', 'altitude': 'altitude', 'time': 'time', 'model': 'model', 'Substrat': 'Substrat', 'zip': 'zip', 'facility': 'facility', 'crossroad': 'crossroad', 'ete': 'ete', 'dtype': 'dtype', 'filename': 'filename', 'magvar': 'magvar', 'geoidheigh': 'geoidheigh', 'desc_': 'desc_', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsd': 'ageofdgpsd', 'dgpsid': 'dgpsid', 'dir': 'dir', });
lyr_Toponimi_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_GarisPantai15000BIG_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'THNSBDATA': 'THNSBDATA', 'THNPBL': 'THNPBL', 'KET': 'KET', });
lyr_PembagianZonaResort_9.set('fieldAliases', {'RESORT': 'RESORT', 'ZONA': 'ZONA', });
lyr_corallyzengasentinel2a_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'coral': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZonaGeomorfologi_2.set('fieldImages', {'geomorf_z': 'TextEdit', 'geomorf_d': 'TextEdit', 'benthic_h': 'TextEdit', 'benthic_d': 'TextEdit', 'luas_ha': 'TextEdit', 'pulau': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HabitatBentik_3.set('fieldImages', {'geomorf_z': 'TextEdit', 'geomorf_d': 'TextEdit', 'benthic_h': 'TextEdit', 'benthic_d': 'TextEdit', 'luas_ha': 'TextEdit', 'pulau': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mangrove_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'KELAS': 'TextEdit', 'PULAU': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_BatasAdministrasiKelurahan_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_GroundControl_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'type': 'TextEdit', 'ident': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'y_proj': 'TextEdit', 'x_proj': 'TextEdit', 'comment': 'TextEdit', 'altitude': 'TextEdit', 'time': 'TextEdit', 'model': 'TextEdit', 'Substrat': 'TextEdit', 'zip': 'TextEdit', 'facility': 'TextEdit', 'crossroad': 'TextEdit', 'ete': 'TextEdit', 'dtype': 'TextEdit', 'filename': 'TextEdit', 'magvar': 'TextEdit', 'geoidheigh': 'TextEdit', 'desc_': 'TextEdit', 'fix': 'TextEdit', 'sat': 'TextEdit', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsd': 'TextEdit', 'dgpsid': 'Range', 'dir': 'TextEdit', });
lyr_Toponimi_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_GarisPantai15000BIG_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'THNSBDATA': 'TextEdit', 'THNPBL': 'TextEdit', 'KET': 'TextEdit', });
lyr_PembagianZonaResort_9.set('fieldImages', {'RESORT': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_corallyzengasentinel2a_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'coral': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_ZonaGeomorfologi_2.set('fieldLabels', {'geomorf_z': 'inline label - always visible', 'geomorf_d': 'inline label - always visible', 'benthic_h': 'inline label - always visible', 'benthic_d': 'inline label - always visible', 'luas_ha': 'inline label - always visible', 'pulau': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_HabitatBentik_3.set('fieldLabels', {'geomorf_z': 'inline label - always visible', 'geomorf_d': 'inline label - always visible', 'benthic_h': 'inline label - always visible', 'benthic_d': 'inline label - always visible', 'luas_ha': 'inline label - always visible', 'pulau': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Mangrove_4.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'PULAU': 'inline label - always visible', 'Shape__Are': 'inline label - always visible', 'Shape__Len': 'inline label - always visible', });
lyr_BatasAdministrasiKelurahan_5.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', });
lyr_GroundControl_6.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'type': 'inline label - always visible', 'ident': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'y_proj': 'inline label - always visible', 'x_proj': 'inline label - always visible', 'comment': 'inline label - always visible', 'altitude': 'inline label - always visible', 'time': 'inline label - always visible', 'model': 'inline label - always visible', 'Substrat': 'inline label - always visible', 'zip': 'inline label - always visible', 'facility': 'inline label - always visible', 'crossroad': 'inline label - always visible', 'ete': 'inline label - always visible', 'dtype': 'inline label - always visible', 'filename': 'inline label - always visible', 'magvar': 'inline label - always visible', 'geoidheigh': 'inline label - always visible', 'desc_': 'inline label - always visible', 'fix': 'inline label - always visible', 'sat': 'inline label - always visible', 'hdop': 'inline label - always visible', 'vdop': 'inline label - always visible', 'pdop': 'inline label - always visible', 'ageofdgpsd': 'inline label - always visible', 'dgpsid': 'inline label - always visible', 'dir': 'inline label - always visible', });
lyr_Toponimi_7.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', });
lyr_GarisPantai15000BIG_8.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'THNSBDATA': 'inline label - always visible', 'THNPBL': 'inline label - always visible', 'KET': 'inline label - always visible', });
lyr_PembagianZonaResort_9.set('fieldLabels', {'RESORT': 'inline label - always visible', 'ZONA': 'inline label - always visible', });
lyr_PembagianZonaResort_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
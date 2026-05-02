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
var format_Toponimi_6 = new ol.format.GeoJSON();
var features_Toponimi_6 = format_Toponimi_6.readFeatures(json_Toponimi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toponimi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toponimi_6.addFeatures(features_Toponimi_6);
var lyr_Toponimi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toponimi_6, 
                style: style_Toponimi_6,
                popuplayertitle: "Toponimi",
                interactive: true,
                title: '<img src="styles/legend/Toponimi_6.png" /> Toponimi'
            });
var format_GarisPantai15000BIG_7 = new ol.format.GeoJSON();
var features_GarisPantai15000BIG_7 = format_GarisPantai15000BIG_7.readFeatures(json_GarisPantai15000BIG_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GarisPantai15000BIG_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GarisPantai15000BIG_7.addFeatures(features_GarisPantai15000BIG_7);
var lyr_GarisPantai15000BIG_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GarisPantai15000BIG_7, 
                style: style_GarisPantai15000BIG_7,
                popuplayertitle: "Garis Pantai 1:5000 BIG",
                interactive: true,
                title: '<img src="styles/legend/GarisPantai15000BIG_7.png" /> Garis Pantai 1:5000 BIG'
            });
var format_Batasresorrevisi_8 = new ol.format.GeoJSON();
var features_Batasresorrevisi_8 = format_Batasresorrevisi_8.readFeatures(json_Batasresorrevisi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batasresorrevisi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batasresorrevisi_8.addFeatures(features_Batasresorrevisi_8);
var lyr_Batasresorrevisi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batasresorrevisi_8, 
                style: style_Batasresorrevisi_8,
                popuplayertitle: "Batas resor revisi ",
                interactive: true,
                title: '<img src="styles/legend/Batasresorrevisi_8.png" /> Batas resor revisi '
            });

lyr_googlehybrid_0.setVisible(true);lyr_corallyzengasentinel2a_1.setVisible(true);lyr_ZonaGeomorfologi_2.setVisible(false);lyr_HabitatBentik_3.setVisible(false);lyr_Mangrove_4.setVisible(false);lyr_BatasAdministrasiKelurahan_5.setVisible(false);lyr_Toponimi_6.setVisible(false);lyr_GarisPantai15000BIG_7.setVisible(false);lyr_Batasresorrevisi_8.setVisible(true);
var layersList = [lyr_googlehybrid_0,lyr_corallyzengasentinel2a_1,lyr_ZonaGeomorfologi_2,lyr_HabitatBentik_3,lyr_Mangrove_4,lyr_BatasAdministrasiKelurahan_5,lyr_Toponimi_6,lyr_GarisPantai15000BIG_7,lyr_Batasresorrevisi_8];
lyr_corallyzengasentinel2a_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'coral': 'coral', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ZonaGeomorfologi_2.set('fieldAliases', {'geomorf_z': 'zona geomorfologi', 'geomorf_d': 'keterangan geomorfologi', 'benthic_h': 'habitat bentik', 'benthic_d': 'keterangan habitat bentik', 'luas_ha': 'luas_ha', 'pulau': 'pulau', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HabitatBentik_3.set('fieldAliases', {'geomorf_z': 'zona geomorfologi', 'geomorf_d': 'keterangan geomorfologi', 'benthic_h': 'habitat bentik', 'benthic_d': 'keterangan habitat bentik', 'luas_ha': 'luas_ha', 'pulau': 'pulau', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Mangrove_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KELAS': 'KELAS', 'PULAU': 'PULAU', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_BatasAdministrasiKelurahan_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_Toponimi_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_GarisPantai15000BIG_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'THNSBDATA': 'THNSBDATA', 'THNPBL': 'THNPBL', 'KET': 'KET', });
lyr_Batasresorrevisi_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SPTN': 'SPTN', 'RESORT': 'RESORT', 'Luas_Ha': 'Luas Ha', });
lyr_corallyzengasentinel2a_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'coral': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZonaGeomorfologi_2.set('fieldImages', {'geomorf_z': 'TextEdit', 'geomorf_d': 'TextEdit', 'benthic_h': 'TextEdit', 'benthic_d': 'TextEdit', 'luas_ha': 'TextEdit', 'pulau': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HabitatBentik_3.set('fieldImages', {'geomorf_z': 'TextEdit', 'geomorf_d': 'TextEdit', 'benthic_h': 'TextEdit', 'benthic_d': 'TextEdit', 'luas_ha': 'TextEdit', 'pulau': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mangrove_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'KELAS': 'TextEdit', 'PULAU': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_BatasAdministrasiKelurahan_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_Toponimi_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_GarisPantai15000BIG_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'THNSBDATA': 'TextEdit', 'THNPBL': 'TextEdit', 'KET': 'TextEdit', });
lyr_Batasresorrevisi_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'SPTN': 'TextEdit', 'RESORT': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_corallyzengasentinel2a_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'coral': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_ZonaGeomorfologi_2.set('fieldLabels', {'geomorf_z': 'inline label - always visible', 'geomorf_d': 'inline label - always visible', 'benthic_h': 'inline label - always visible', 'benthic_d': 'inline label - always visible', 'luas_ha': 'inline label - always visible', 'pulau': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_HabitatBentik_3.set('fieldLabels', {'geomorf_z': 'inline label - always visible', 'geomorf_d': 'inline label - always visible', 'benthic_h': 'inline label - always visible', 'benthic_d': 'inline label - always visible', 'luas_ha': 'inline label - always visible', 'pulau': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Mangrove_4.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'PULAU': 'inline label - always visible', 'Shape__Are': 'inline label - always visible', 'Shape__Len': 'inline label - always visible', });
lyr_BatasAdministrasiKelurahan_5.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', });
lyr_Toponimi_6.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', });
lyr_GarisPantai15000BIG_7.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'THNSBDATA': 'inline label - always visible', 'THNPBL': 'inline label - always visible', 'KET': 'inline label - always visible', });
lyr_Batasresorrevisi_8.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'SPTN': 'inline label - always visible', 'RESORT': 'inline label - always visible', 'Luas_Ha': 'inline label - always visible', });
lyr_Batasresorrevisi_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
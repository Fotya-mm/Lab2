var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_YandexSatellite_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_building_house_2 = new ol.format.GeoJSON();
var features_building_house_2 = format_building_house_2.readFeatures(json_building_house_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_2.addFeatures(features_building_house_2);
var lyr_building_house_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_2, 
                style: style_building_house_2,
                popuplayertitle: 'building_house',
                interactive: true,
                title: '<img src="styles/legend/building_house_2.png" /> building_house'
            });
var format_highway3highway_3 = new ol.format.GeoJSON();
var features_highway3highway_3 = format_highway3highway_3.readFeatures(json_highway3highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway3highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway3highway_3.addFeatures(features_highway3highway_3);
var lyr_highway3highway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway3highway_3, 
                style: style_highway3highway_3,
                popuplayertitle: 'highway3 — highway',
                interactive: true,
                title: '<img src="styles/legend/highway3highway_3.png" /> highway3 — highway'
            });
var format_highway2highway_4 = new ol.format.GeoJSON();
var features_highway2highway_4 = format_highway2highway_4.readFeatures(json_highway2highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway2highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway2highway_4.addFeatures(features_highway2highway_4);
var lyr_highway2highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway2highway_4, 
                style: style_highway2highway_4,
                popuplayertitle: 'highway2. — highway',
                interactive: true,
                title: '<img src="styles/legend/highway2highway_4.png" /> highway2. — highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_YandexSatellite_1.setVisible(true);lyr_building_house_2.setVisible(true);lyr_highway3highway_3.setVisible(true);lyr_highway2highway_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_YandexSatellite_1,lyr_building_house_2,lyr_highway3highway_3,lyr_highway2highway_4];
lyr_building_house_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr2:street': 'addr2:street', 'addr2:housenumber': 'addr2:housenumber', 'roof:levels': 'roof:levels', 'building:levels': 'building:levels', 'tourism': 'tourism', 'name': 'name', 'addr:state': 'addr:state', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'type': 'type', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_highway3highway_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'turn:lanes': 'turn:lanes', 'smoothness': 'smoothness', 'turn:lanes:forward': 'turn:lanes:forward', 'barrier': 'barrier', 'motor_vehicle': 'motor_vehicle', 'bridge:structure': 'bridge:structure', 'covered': 'covered', 'crossing': 'crossing', 'website': 'website', 'footway': 'footway', 'living_street': 'living_street', 'tunnel': 'tunnel', 'tracktype': 'tracktype', 'incline': 'incline', 'hour_on:oneway': 'hour_on:oneway', 'hour_off:oneway': 'hour_off:oneway', 'junction': 'junction', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'access': 'access', 'width': 'width', 'service': 'service', 'sidewalk': 'sidewalk', 'lit': 'lit', 'foot': 'foot', 'bicycle': 'bicycle', 'layer': 'layer', 'bridge': 'bridge', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'lane_markings': 'lane_markings', 'int_name': 'int_name', 'trolley_wire': 'trolley_wire', 'hgv': 'hgv', 'oneway': 'oneway', 'name:uk': 'name:uk', 'name:ru': 'name:ru', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:en': 'name:en', 'lanes': 'lanes', 'surface': 'surface', 'ref': 'ref', 'name': 'name', 'maxspeed': 'maxspeed', });
lyr_highway2highway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'crossing:markings': 'crossing:markings', 'bollard': 'bollard', 'traffic_sign:direction': 'traffic_sign:direction', 'check_date:shelter': 'check_date:shelter', 'hgv': 'hgv', 'horse': 'horse', 'noexit': 'noexit', 'motor_vehicle': 'motor_vehicle', 'wheelchair': 'wheelchair', 'entrance': 'entrance', 'material': 'material', 'ford': 'ford', 'swing_gate:type': 'swing_gate:type', 'access': 'access', 'traffic_calming': 'traffic_calming', 'addr:street': 'addr:street', 'traffic_sign': 'traffic_sign', 'motorcycle': 'motorcycle', 'foot': 'foot', 'bicycle': 'bicycle', 'barrier': 'barrier', 'crossing:island': 'crossing:island', 'crossing:barrier': 'crossing:barrier', 'lit': 'lit', 'bin': 'bin', 'covered': 'covered', 'trolleybus': 'trolleybus', 'shelter': 'shelter', 'share_taxi': 'share_taxi', 'bench': 'bench', 'ref': 'ref', 'operator': 'operator', 'name': 'name', 'fire_operator': 'fire_operator', 'fire_hydrant:street': 'fire_hydrant:street', 'fire_hydrant:housenumber': 'fire_hydrant:housenumber', 'fire_hydrant:diameter': 'fire_hydrant:diameter', 'fire_hydrant:city': 'fire_hydrant:city', 'emergency': 'emergency', 'public_transport': 'public_transport', 'bus': 'bus', 'side': 'side', 'direction': 'direction', 'railway': 'railway', 'crossing:light': 'crossing:light', 'crossing:bell': 'crossing:bell', 'supervised': 'supervised', 'tactile_paving': 'tactile_paving', 'traffic_signals': 'traffic_signals', 'crossing': 'crossing', });
lyr_building_house_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr2:street': 'TextEdit', 'addr2:housenumber': 'TextEdit', 'roof:levels': 'TextEdit', 'building:levels': 'TextEdit', 'tourism': 'TextEdit', 'name': 'TextEdit', 'addr:state': 'TextEdit', 'addr:country': 'TextEdit', 'addr:city': 'TextEdit', 'type': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'address': 'TextEdit', });
lyr_highway3highway_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'turn:lanes': 'TextEdit', 'smoothness': 'TextEdit', 'turn:lanes:forward': 'TextEdit', 'barrier': 'TextEdit', 'motor_vehicle': 'TextEdit', 'bridge:structure': 'TextEdit', 'covered': 'TextEdit', 'crossing': 'TextEdit', 'website': 'TextEdit', 'footway': 'TextEdit', 'living_street': 'TextEdit', 'tunnel': 'TextEdit', 'tracktype': 'TextEdit', 'incline': 'TextEdit', 'hour_on:oneway': 'TextEdit', 'hour_off:oneway': 'TextEdit', 'junction': 'TextEdit', 'motorcycle': 'TextEdit', 'motorcar': 'TextEdit', 'access': 'TextEdit', 'width': 'TextEdit', 'service': 'TextEdit', 'sidewalk': 'TextEdit', 'lit': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'lanes:forward': 'TextEdit', 'lanes:backward': 'TextEdit', 'lane_markings': 'TextEdit', 'int_name': 'TextEdit', 'trolley_wire': 'TextEdit', 'hgv': 'TextEdit', 'oneway': 'TextEdit', 'name:uk': 'TextEdit', 'name:ru': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'name:en': 'TextEdit', 'lanes': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', });
lyr_highway2highway_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'crossing:markings': 'TextEdit', 'bollard': 'TextEdit', 'traffic_sign:direction': 'TextEdit', 'check_date:shelter': 'TextEdit', 'hgv': 'TextEdit', 'horse': 'TextEdit', 'noexit': 'TextEdit', 'motor_vehicle': 'TextEdit', 'wheelchair': 'TextEdit', 'entrance': 'TextEdit', 'material': 'TextEdit', 'ford': 'TextEdit', 'swing_gate:type': 'TextEdit', 'access': 'TextEdit', 'traffic_calming': 'TextEdit', 'addr:street': 'TextEdit', 'traffic_sign': 'TextEdit', 'motorcycle': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'barrier': 'TextEdit', 'crossing:island': 'TextEdit', 'crossing:barrier': 'TextEdit', 'lit': 'TextEdit', 'bin': 'TextEdit', 'covered': 'TextEdit', 'trolleybus': 'TextEdit', 'shelter': 'TextEdit', 'share_taxi': 'TextEdit', 'bench': 'TextEdit', 'ref': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'fire_operator': 'TextEdit', 'fire_hydrant:street': 'TextEdit', 'fire_hydrant:housenumber': 'TextEdit', 'fire_hydrant:diameter': 'TextEdit', 'fire_hydrant:city': 'TextEdit', 'emergency': 'TextEdit', 'public_transport': 'TextEdit', 'bus': 'TextEdit', 'side': 'TextEdit', 'direction': 'TextEdit', 'railway': 'TextEdit', 'crossing:light': 'TextEdit', 'crossing:bell': 'TextEdit', 'supervised': 'TextEdit', 'tactile_paving': 'TextEdit', 'traffic_signals': 'TextEdit', 'crossing': 'TextEdit', });
lyr_building_house_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr2:street': 'no label', 'addr2:housenumber': 'no label', 'roof:levels': 'no label', 'building:levels': 'no label', 'tourism': 'no label', 'name': 'no label', 'addr:state': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'type': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_highway3highway_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'turn:lanes': 'no label', 'smoothness': 'no label', 'turn:lanes:forward': 'no label', 'barrier': 'no label', 'motor_vehicle': 'no label', 'bridge:structure': 'no label', 'covered': 'no label', 'crossing': 'no label', 'website': 'no label', 'footway': 'no label', 'living_street': 'no label', 'tunnel': 'no label', 'tracktype': 'no label', 'incline': 'no label', 'hour_on:oneway': 'no label', 'hour_off:oneway': 'no label', 'junction': 'no label', 'motorcycle': 'no label', 'motorcar': 'no label', 'access': 'no label', 'width': 'no label', 'service': 'no label', 'sidewalk': 'no label', 'lit': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'layer': 'no label', 'bridge': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'lane_markings': 'no label', 'int_name': 'no label', 'trolley_wire': 'no label', 'hgv': 'no label', 'oneway': 'no label', 'name:uk': 'no label', 'name:ru': 'no label', 'name:etymology:wikidata': 'no label', 'name:en': 'no label', 'lanes': 'no label', 'surface': 'no label', 'ref': 'no label', 'name': 'no label', 'maxspeed': 'no label', });
lyr_highway2highway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'crossing:markings': 'no label', 'bollard': 'no label', 'traffic_sign:direction': 'no label', 'check_date:shelter': 'no label', 'hgv': 'no label', 'horse': 'no label', 'noexit': 'no label', 'motor_vehicle': 'no label', 'wheelchair': 'no label', 'entrance': 'no label', 'material': 'no label', 'ford': 'no label', 'swing_gate:type': 'no label', 'access': 'no label', 'traffic_calming': 'no label', 'addr:street': 'no label', 'traffic_sign': 'no label', 'motorcycle': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'barrier': 'no label', 'crossing:island': 'no label', 'crossing:barrier': 'no label', 'lit': 'no label', 'bin': 'no label', 'covered': 'no label', 'trolleybus': 'no label', 'shelter': 'no label', 'share_taxi': 'no label', 'bench': 'no label', 'ref': 'no label', 'operator': 'no label', 'name': 'no label', 'fire_operator': 'no label', 'fire_hydrant:street': 'no label', 'fire_hydrant:housenumber': 'no label', 'fire_hydrant:diameter': 'no label', 'fire_hydrant:city': 'no label', 'emergency': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'side': 'no label', 'direction': 'no label', 'railway': 'no label', 'crossing:light': 'no label', 'crossing:bell': 'no label', 'supervised': 'no label', 'tactile_paving': 'no label', 'traffic_signals': 'no label', 'crossing': 'no label', });
lyr_highway2highway_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
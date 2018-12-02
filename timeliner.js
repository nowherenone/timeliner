(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function Do(parent) {
	var listeners = [];
	this.do = function(callback) {
		listeners.push(callback);
	};
	this.undo = function(callback) {
		listeners.splice(listeners.indexOf(callback), 1);
	};
	this.fire = function() {
		for (var v = 0; v < listeners.length; v++) {
			listeners[v].apply(parent, arguments);
		}
	};
}

if (typeof(module) === 'object') module.exports = Do;

},{}],2:[function(require,module,exports){
module.exports={
  "version": "1.5.0"
}
},{}],3:[function(require,module,exports){
module.exports={
	"unitsPerEm": 1792,
	"ascender": 1536,
	"descender": -256,
	"fonts": {
		"plus": {
			"advanceWidth": 1408,
			"commands": "M,1408,800 C,1408,853,1365,896,1312,896 L,896,896 L,896,1312 C,896,1365,853,1408,800,1408 L,608,1408 C,555,1408,512,1365,512,1312 L,512,896 L,96,896 C,43,896,0,853,0,800 L,0,608 C,0,555,43,512,96,512 L,512,512 L,512,96 C,512,43,555,0,608,0 L,800,0 C,853,0,896,43,896,96 L,896,512 L,1312,512 C,1365,512,1408,555,1408,608 Z"
		},
		"minus": {
			"advanceWidth": 1408,
			"commands": "M,1408,800 C,1408,853,1365,896,1312,896 L,96,896 C,43,896,0,853,0,800 L,0,608 C,0,555,43,512,96,512 L,1312,512 C,1365,512,1408,555,1408,608 Z"
		},
		"ok": {
			"advanceWidth": 1792,
			"commands": "M,1671,970 C,1671,995,1661,1020,1643,1038 L,1507,1174 C,1489,1192,1464,1202,1439,1202 C,1414,1202,1389,1192,1371,1174 L,715,517 L,421,812 C,403,830,378,840,353,840 C,328,840,303,830,285,812 L,149,676 C,131,658,121,633,121,608 C,121,583,131,558,149,540 L,511,178 L,647,42 C,665,24,690,14,715,14 C,740,14,765,24,783,42 L,919,178 L,1643,902 C,1661,920,1671,945,1671,970 Z"
		},
		"remove": {
			"advanceWidth": 1408,
			"commands": "M,1298,214 C,1298,239,1288,264,1270,282 L,976,576 L,1270,870 C,1288,888,1298,913,1298,938 C,1298,963,1288,988,1270,1006 L,1134,1142 C,1116,1160,1091,1170,1066,1170 C,1041,1170,1016,1160,998,1142 L,704,848 L,410,1142 C,392,1160,367,1170,342,1170 C,317,1170,292,1160,274,1142 L,138,1006 C,120,988,110,963,110,938 C,110,913,120,888,138,870 L,432,576 L,138,282 C,120,264,110,239,110,214 C,110,189,120,164,138,146 L,274,10 C,292,-8,317,-18,342,-18 C,367,-18,392,-8,410,10 L,704,304 L,998,10 C,1016,-8,1041,-18,1066,-18 C,1091,-18,1116,-8,1134,10 L,1270,146 C,1288,164,1298,189,1298,214 Z"
		},
		"zoom_in": {
			"advanceWidth": 1664,
			"commands": "M,1024,736 C,1024,753,1009,768,992,768 L,768,768 L,768,992 C,768,1009,753,1024,736,1024 L,672,1024 C,655,1024,640,1009,640,992 L,640,768 L,416,768 C,399,768,384,753,384,736 L,384,672 C,384,655,399,640,416,640 L,640,640 L,640,416 C,640,399,655,384,672,384 L,736,384 C,753,384,768,399,768,416 L,768,640 L,992,640 C,1009,640,1024,655,1024,672 M,1152,704 C,1152,457,951,256,704,256 C,457,256,256,457,256,704 C,256,951,457,1152,704,1152 C,951,1152,1152,951,1152,704 M,1664,-128 C,1664,-94,1650,-61,1627,-38 L,1284,305 C,1365,422,1408,562,1408,704 C,1408,1093,1093,1408,704,1408 C,315,1408,0,1093,0,704 C,0,315,315,0,704,0 C,846,0,986,43,1103,124 L,1446,-218 C,1469,-242,1502,-256,1536,-256 C,1607,-256,1664,-199,1664,-128 Z"
		},
		"zoom_out": {
			"advanceWidth": 1664,
			"commands": "M,1024,736 C,1024,753,1009,768,992,768 L,416,768 C,399,768,384,753,384,736 L,384,672 C,384,655,399,640,416,640 L,992,640 C,1009,640,1024,655,1024,672 M,1152,704 C,1152,457,951,256,704,256 C,457,256,256,457,256,704 C,256,951,457,1152,704,1152 C,951,1152,1152,951,1152,704 M,1664,-128 C,1664,-94,1650,-61,1627,-38 L,1284,305 C,1365,422,1408,562,1408,704 C,1408,1093,1093,1408,704,1408 C,315,1408,0,1093,0,704 C,0,315,315,0,704,0 C,846,0,986,43,1103,124 L,1446,-218 C,1469,-242,1502,-256,1536,-256 C,1607,-256,1664,-199,1664,-128 Z"
		},
		"cog": {
			"advanceWidth": 1536,
			"commands": "M,1024,640 C,1024,499,909,384,768,384 C,627,384,512,499,512,640 C,512,781,627,896,768,896 C,909,896,1024,781,1024,640 M,1536,749 C,1536,766,1524,782,1507,785 L,1324,813 C,1314,846,1300,879,1283,911 C,1317,958,1354,1002,1388,1048 C,1393,1055,1396,1062,1396,1071 C,1396,1079,1394,1087,1389,1093 C,1347,1152,1277,1214,1224,1263 C,1217,1269,1208,1273,1199,1273 C,1190,1273,1181,1270,1175,1264 L,1033,1157 C,1004,1172,974,1184,943,1194 L,915,1378 C,913,1395,897,1408,879,1408 L,657,1408 C,639,1408,625,1396,621,1380 C,605,1320,599,1255,592,1194 C,561,1184,530,1171,501,1156 L,363,1263 C,355,1269,346,1273,337,1273 C,303,1273,168,1127,144,1094 C,139,1087,135,1080,135,1071 C,135,1062,139,1054,145,1047 C,182,1002,218,957,252,909 C,236,879,223,849,213,817 L,27,789 C,12,786,0,768,0,753 L,0,531 C,0,514,12,498,29,495 L,212,468 C,222,434,236,401,253,369 C,219,322,182,278,148,232 C,143,225,140,218,140,209 C,140,201,142,193,147,186 C,189,128,259,66,312,18 C,319,11,328,7,337,7 C,346,7,355,10,362,16 L,503,123 C,532,108,562,96,593,86 L,621,-98 C,623,-115,639,-128,657,-128 L,879,-128 C,897,-128,911,-116,915,-100 C,931,-40,937,25,944,86 C,975,96,1006,109,1035,124 L,1173,16 C,1181,11,1190,7,1199,7 C,1233,7,1368,154,1392,186 C,1398,193,1401,200,1401,209 C,1401,218,1397,227,1391,234 C,1354,279,1318,323,1284,372 C,1300,401,1312,431,1323,463 L,1508,491 C,1524,494,1536,512,1536,527 Z"
		},
		"trash": {
			"advanceWidth": 1408,
			"commands": "M,512,800 C,512,818,498,832,480,832 L,416,832 C,398,832,384,818,384,800 L,384,224 C,384,206,398,192,416,192 L,480,192 C,498,192,512,206,512,224 M,768,800 C,768,818,754,832,736,832 L,672,832 C,654,832,640,818,640,800 L,640,224 C,640,206,654,192,672,192 L,736,192 C,754,192,768,206,768,224 M,1024,800 C,1024,818,1010,832,992,832 L,928,832 C,910,832,896,818,896,800 L,896,224 C,896,206,910,192,928,192 L,992,192 C,1010,192,1024,206,1024,224 M,1152,76 C,1152,28,1125,0,1120,0 L,288,0 C,283,0,256,28,256,76 L,256,1024 L,1152,1024 L,1152,76 M,480,1152 L,529,1269 C,532,1273,540,1279,546,1280 L,863,1280 C,868,1279,877,1273,880,1269 L,928,1152 M,1408,1120 C,1408,1138,1394,1152,1376,1152 L,1067,1152 L,997,1319 C,977,1368,917,1408,864,1408 L,544,1408 C,491,1408,431,1368,411,1319 L,341,1152 L,32,1152 C,14,1152,0,1138,0,1120 L,0,1056 C,0,1038,14,1024,32,1024 L,128,1024 L,128,72 C,128,-38,200,-128,288,-128 L,1120,-128 C,1208,-128,1280,-34,1280,76 L,1280,1024 L,1376,1024 C,1394,1024,1408,1038,1408,1056 Z"
		},
		"file_alt": {
			"advanceWidth": 1536,
			"commands": "M,1468,1156 L,1156,1468 C,1119,1505,1045,1536,992,1536 L,96,1536 C,43,1536,0,1493,0,1440 L,0,-160 C,0,-213,43,-256,96,-256 L,1440,-256 C,1493,-256,1536,-213,1536,-160 L,1536,992 C,1536,1045,1505,1119,1468,1156 M,1024,1400 C,1041,1394,1058,1385,1065,1378 L,1378,1065 C,1385,1058,1394,1041,1400,1024 L,1024,1024 M,1408,-128 L,128,-128 L,128,1408 L,896,1408 L,896,992 C,896,939,939,896,992,896 L,1408,896 Z"
		},
		"download_alt": {
			"advanceWidth": 1664,
			"commands": "M,1280,192 C,1280,157,1251,128,1216,128 C,1181,128,1152,157,1152,192 C,1152,227,1181,256,1216,256 C,1251,256,1280,227,1280,192 M,1536,192 C,1536,157,1507,128,1472,128 C,1437,128,1408,157,1408,192 C,1408,227,1437,256,1472,256 C,1507,256,1536,227,1536,192 M,1664,416 C,1664,469,1621,512,1568,512 L,1104,512 L,968,376 C,931,340,883,320,832,320 C,781,320,733,340,696,376 L,561,512 L,96,512 C,43,512,0,469,0,416 L,0,96 C,0,43,43,0,96,0 L,1568,0 C,1621,0,1664,43,1664,96 M,1339,985 C,1329,1008,1306,1024,1280,1024 L,1024,1024 L,1024,1472 C,1024,1507,995,1536,960,1536 L,704,1536 C,669,1536,640,1507,640,1472 L,640,1024 L,384,1024 C,358,1024,335,1008,325,985 C,315,961,320,933,339,915 L,787,467 C,799,454,816,448,832,448 C,848,448,865,454,877,467 L,1325,915 C,1344,933,1349,961,1339,985 Z"
		},
		"repeat": {
			"advanceWidth": 1536,
			"commands": "M,1536,1280 C,1536,1306,1520,1329,1497,1339 C,1473,1349,1445,1344,1427,1325 L,1297,1196 C,1156,1329,965,1408,768,1408 C,345,1408,0,1063,0,640 C,0,217,345,-128,768,-128 C,997,-128,1213,-27,1359,149 C,1369,162,1369,181,1357,192 L,1220,330 C,1213,336,1204,339,1195,339 C,1186,338,1177,334,1172,327 C,1074,200,927,128,768,128 C,486,128,256,358,256,640 C,256,922,486,1152,768,1152 C,899,1152,1023,1102,1117,1015 L,979,877 C,960,859,955,831,965,808 C,975,784,998,768,1024,768 L,1472,768 C,1507,768,1536,797,1536,832 Z"
		},
		"pencil": {
			"advanceWidth": 1536,
			"commands": "M,363,0 L,256,0 L,256,128 L,128,128 L,128,235 L,219,326 L,454,91 M,886,928 C,886,922,884,916,879,911 L,337,369 C,332,364,326,362,320,362 C,307,362,298,371,298,384 C,298,390,300,396,305,401 L,847,943 C,852,948,858,950,864,950 C,877,950,886,941,886,928 M,832,1120 L,0,288 L,0,-128 L,416,-128 L,1248,704 M,1515,1024 C,1515,1058,1501,1091,1478,1115 L,1243,1349 C,1219,1373,1186,1387,1152,1387 C,1118,1387,1085,1373,1062,1349 L,896,1184 L,1312,768 L,1478,934 C,1501,957,1515,990,1515,1024 Z"
		},
		"edit": {
			"advanceWidth": 1792,
			"commands": "M,888,352 L,832,352 L,832,448 L,736,448 L,736,504 L,852,620 L,1004,468 M,1328,1072 C,1337,1063,1336,1048,1327,1039 L,977,689 C,968,680,953,679,944,688 C,935,697,936,712,945,721 L,1295,1071 C,1304,1080,1319,1081,1328,1072 M,1408,478 C,1408,491,1400,502,1388,507 C,1376,512,1363,510,1353,500 L,1289,436 C,1283,430,1280,422,1280,414 L,1280,288 C,1280,200,1208,128,1120,128 L,288,128 C,200,128,128,200,128,288 L,128,1120 C,128,1208,200,1280,288,1280 L,1120,1280 C,1135,1280,1150,1278,1165,1274 C,1176,1270,1188,1273,1197,1282 L,1246,1331 C,1254,1339,1257,1349,1255,1360 C,1253,1370,1246,1379,1237,1383 C,1200,1400,1160,1408,1120,1408 L,288,1408 C,129,1408,0,1279,0,1120 L,0,288 C,0,129,129,0,288,0 L,1120,0 C,1279,0,1408,129,1408,288 M,1312,1216 L,640,544 L,640,256 L,928,256 L,1600,928 M,1756,1084 C,1793,1121,1793,1183,1756,1220 L,1604,1372 C,1567,1409,1505,1409,1468,1372 L,1376,1280 L,1664,992 L,1756,1084 Z"
		},
		"play": {
			"advanceWidth": 1408,
			"commands": "M,1384,609 C,1415,626,1415,654,1384,671 L,56,1409 C,25,1426,0,1411,0,1376 L,0,-96 C,0,-131,25,-146,56,-129 Z"
		},
		"pause": {
			"advanceWidth": 1536,
			"commands": "M,1536,1344 C,1536,1379,1507,1408,1472,1408 L,960,1408 C,925,1408,896,1379,896,1344 L,896,-64 C,896,-99,925,-128,960,-128 L,1472,-128 C,1507,-128,1536,-99,1536,-64 M,640,1344 C,640,1379,611,1408,576,1408 L,64,1408 C,29,1408,0,1379,0,1344 L,0,-64 C,0,-99,29,-128,64,-128 L,576,-128 C,611,-128,640,-99,640,-64 Z"
		},
		"stop": {
			"advanceWidth": 1536,
			"commands": "M,1536,1344 C,1536,1379,1507,1408,1472,1408 L,64,1408 C,29,1408,0,1379,0,1344 L,0,-64 C,0,-99,29,-128,64,-128 L,1472,-128 C,1507,-128,1536,-99,1536,-64 Z"
		},
		"resize_full": {
			"advanceWidth": 1536,
			"commands": "M,755,480 C,755,488,751,497,745,503 L,631,617 C,625,623,616,627,608,627 C,600,627,591,623,585,617 L,253,285 L,109,429 C,97,441,81,448,64,448 C,29,448,0,419,0,384 L,0,-64 C,0,-99,29,-128,64,-128 L,512,-128 C,547,-128,576,-99,576,-64 C,576,-47,569,-31,557,-19 L,413,125 L,745,457 C,751,463,755,472,755,480 M,1536,1344 C,1536,1379,1507,1408,1472,1408 L,1024,1408 C,989,1408,960,1379,960,1344 C,960,1327,967,1311,979,1299 L,1123,1155 L,791,823 C,785,817,781,808,781,800 C,781,792,785,783,791,777 L,905,663 C,911,657,920,653,928,653 C,936,653,945,657,951,663 L,1283,995 L,1427,851 C,1439,839,1455,832,1472,832 C,1507,832,1536,861,1536,896 Z"
		},
		"resize_small": {
			"advanceWidth": 1536,
			"commands": "M,768,576 C,768,611,739,640,704,640 L,256,640 C,221,640,192,611,192,576 C,192,559,199,543,211,531 L,355,387 L,23,55 C,17,49,13,40,13,32 C,13,24,17,15,23,9 L,137,-105 C,143,-111,152,-115,160,-115 C,168,-115,177,-111,183,-105 L,515,227 L,659,83 C,671,71,687,64,704,64 C,739,64,768,93,768,128 M,1523,1248 C,1523,1256,1519,1265,1513,1271 L,1399,1385 C,1393,1391,1384,1395,1376,1395 C,1368,1395,1359,1391,1353,1385 L,1021,1053 L,877,1197 C,865,1209,849,1216,832,1216 C,797,1216,768,1187,768,1152 L,768,704 C,768,669,797,640,832,640 L,1280,640 C,1315,640,1344,669,1344,704 C,1344,721,1337,737,1325,749 L,1181,893 L,1513,1225 C,1519,1231,1523,1240,1523,1248 Z"
		},
		"eye_open": {
			"advanceWidth": 1792,
			"commands": "M,1664,576 C,1493,312,1217,128,896,128 C,575,128,299,312,128,576 C,223,723,353,849,509,929 C,469,861,448,783,448,704 C,448,457,649,256,896,256 C,1143,256,1344,457,1344,704 C,1344,783,1323,861,1283,929 C,1439,849,1569,723,1664,576 M,944,960 C,944,934,922,912,896,912 C,782,912,688,818,688,704 C,688,678,666,656,640,656 C,614,656,592,678,592,704 C,592,871,729,1008,896,1008 C,922,1008,944,986,944,960 M,1792,576 C,1792,601,1784,624,1772,645 C,1588,947,1251,1152,896,1152 C,541,1152,204,947,20,645 C,8,624,0,601,0,576 C,0,551,8,528,20,507 C,204,205,541,0,896,0 C,1251,0,1588,204,1772,507 C,1784,528,1792,551,1792,576 Z"
		},
		"eye_close": {
			"advanceWidth": 1792,
			"commands": "M,555,201 C,379,280,232,415,128,576 C,223,723,353,849,509,929 C,469,861,448,783,448,704 C,448,561,517,426,633,342 M,944,960 C,944,934,922,912,896,912 C,782,912,688,819,688,704 C,688,678,666,656,640,656 C,614,656,592,678,592,704 C,592,871,729,1008,896,1008 C,922,1008,944,986,944,960 M,1307,1151 C,1307,1162,1301,1172,1291,1178 C,1270,1190,1176,1248,1158,1248 C,1146,1248,1136,1242,1130,1232 L,1076,1135 C,1017,1146,956,1152,896,1152 C,527,1152,218,949,20,645 C,7,625,0,600,0,576 C,0,551,7,527,20,507 C,135,327,298,177,492,89 C,482,72,448,18,448,2 C,448,-10,454,-20,464,-26 C,485,-38,580,-96,598,-96 C,609,-96,620,-90,626,-80 L,675,9 C,886,386,1095,765,1306,1142 C,1307,1144,1307,1149,1307,1151 M,1344,704 C,1344,732,1341,760,1336,788 L,1056,286 C,1229,352,1344,518,1344,704 M,1792,576 C,1792,602,1785,623,1772,645 C,1694,774,1569,899,1445,982 L,1382,870 C,1495,792,1590,691,1664,576 C,1508,334,1261,157,970,132 L,896,0 C,1197,0,1467,137,1663,362 C,1702,407,1741,456,1772,507 C,1785,529,1792,550,1792,576 Z"
		},
		"folder_open": {
			"advanceWidth": 1920,
			"commands": "M,1879,584 C,1879,629,1828,640,1792,640 L,704,640 C,616,640,498,586,440,518 L,104,122 C,88,104,73,80,73,56 C,73,11,124,0,160,0 L,1248,0 C,1336,0,1454,54,1512,122 L,1848,518 C,1864,536,1879,560,1879,584 M,1536,928 C,1536,1051,1435,1152,1312,1152 L,768,1152 L,768,1184 C,768,1307,667,1408,544,1408 L,224,1408 C,101,1408,0,1307,0,1184 L,0,224 C,0,216,1,207,1,199 L,6,205 L,343,601 C,424,697,579,768,704,768 L,1536,768 Z"
		},
		"signin": {
			"advanceWidth": 1536,
			"commands": "M,1184,640 C,1184,657,1177,673,1165,685 L,621,1229 C,609,1241,593,1248,576,1248 C,541,1248,512,1219,512,1184 L,512,896 L,64,896 C,29,896,0,867,0,832 L,0,448 C,0,413,29,384,64,384 L,512,384 L,512,96 C,512,61,541,32,576,32 C,593,32,609,39,621,51 L,1165,595 C,1177,607,1184,623,1184,640 M,1536,992 C,1536,1151,1407,1280,1248,1280 L,928,1280 C,883,1280,896,1212,896,1184 C,896,1147,935,1152,960,1152 L,1248,1152 C,1336,1152,1408,1080,1408,992 L,1408,288 C,1408,200,1336,128,1248,128 L,928,128 C,883,128,896,60,896,32 C,896,15,911,0,928,0 L,1248,0 C,1407,0,1536,129,1536,288 Z"
		},
		"upload_alt": {
			"advanceWidth": 1664,
			"commands": "M,1280,64 C,1280,29,1251,0,1216,0 C,1181,0,1152,29,1152,64 C,1152,99,1181,128,1216,128 C,1251,128,1280,99,1280,64 M,1536,64 C,1536,29,1507,0,1472,0 C,1437,0,1408,29,1408,64 C,1408,99,1437,128,1472,128 C,1507,128,1536,99,1536,64 M,1664,288 C,1664,341,1621,384,1568,384 L,1141,384 C,1114,310,1043,256,960,256 L,704,256 C,621,256,550,310,523,384 L,96,384 C,43,384,0,341,0,288 L,0,-32 C,0,-85,43,-128,96,-128 L,1568,-128 C,1621,-128,1664,-85,1664,-32 M,1339,936 C,1349,959,1344,987,1325,1005 L,877,1453 C,865,1466,848,1472,832,1472 C,816,1472,799,1466,787,1453 L,339,1005 C,320,987,315,959,325,936 C,335,912,358,896,384,896 L,640,896 L,640,448 C,640,413,669,384,704,384 L,960,384 C,995,384,1024,413,1024,448 L,1024,896 L,1280,896 C,1306,896,1329,912,1339,936 Z"
		},
		"save": {
			"advanceWidth": 1536,
			"commands": "M,384,0 L,384,384 L,1152,384 L,1152,0 M,1280,0 L,1280,416 C,1280,469,1237,512,1184,512 L,352,512 C,299,512,256,469,256,416 L,256,0 L,128,0 L,128,1280 L,256,1280 L,256,864 C,256,811,299,768,352,768 L,928,768 C,981,768,1024,811,1024,864 L,1024,1280 C,1044,1280,1083,1264,1097,1250 L,1378,969 C,1391,956,1408,915,1408,896 L,1408,0 M,896,928 C,896,911,881,896,864,896 L,672,896 C,655,896,640,911,640,928 L,640,1248 C,640,1265,655,1280,672,1280 L,864,1280 C,881,1280,896,1265,896,1248 L,896,928 M,1536,896 C,1536,949,1506,1022,1468,1060 L,1188,1340 C,1150,1378,1077,1408,1024,1408 L,96,1408 C,43,1408,0,1365,0,1312 L,0,-32 C,0,-85,43,-128,96,-128 L,1440,-128 C,1493,-128,1536,-85,1536,-32 Z"
		},
		"undo": {
			"advanceWidth": 1536,
			"commands": "M,1536,640 C,1536,1063,1191,1408,768,1408 C,571,1408,380,1329,239,1196 L,109,1325 C,91,1344,63,1349,40,1339 C,16,1329,0,1306,0,1280 L,0,832 C,0,797,29,768,64,768 L,512,768 C,538,768,561,784,571,808 C,581,831,576,859,557,877 L,420,1015 C,513,1102,637,1152,768,1152 C,1050,1152,1280,922,1280,640 C,1280,358,1050,128,768,128 C,609,128,462,200,364,327 C,359,334,350,338,341,339 C,332,339,323,336,316,330 L,179,192 C,168,181,167,162,177,149 C,323,-27,539,-128,768,-128 C,1191,-128,1536,217,1536,640 Z"
		},
		"paste": {
			"advanceWidth": 1792,
			"commands": "M,768,-128 L,768,1024 L,1152,1024 L,1152,608 C,1152,555,1195,512,1248,512 L,1664,512 L,1664,-128 M,1024,1312 C,1024,1295,1009,1280,992,1280 L,288,1280 C,271,1280,256,1295,256,1312 L,256,1376 C,256,1393,271,1408,288,1408 L,992,1408 C,1009,1408,1024,1393,1024,1376 L,1024,1312 M,1280,640 L,1280,939 L,1579,640 M,1792,512 C,1792,565,1762,638,1724,676 L,1316,1084 C,1305,1095,1293,1104,1280,1112 L,1280,1440 C,1280,1493,1237,1536,1184,1536 L,96,1536 C,43,1536,0,1493,0,1440 L,0,96 C,0,43,43,0,96,0 L,640,0 L,640,-160 C,640,-213,683,-256,736,-256 L,1696,-256 C,1749,-256,1792,-213,1792,-160 Z"
		},
		"folder_open_alt": {
			"advanceWidth": 1920,
			"commands": "M,1781,605 C,1781,590,1772,577,1763,566 L,1469,203 C,1435,161,1365,128,1312,128 L,224,128 C,202,128,171,135,171,163 C,171,178,180,191,189,203 L,483,566 C,517,607,587,640,640,640 L,1728,640 C,1750,640,1781,633,1781,605 M,640,768 C,549,768,442,717,384,646 L,128,331 L,128,1184 C,128,1237,171,1280,224,1280 L,544,1280 C,597,1280,640,1237,640,1184 L,640,1120 C,640,1067,683,1024,736,1024 L,1312,1024 C,1365,1024,1408,981,1408,928 L,1408,768 M,1909,605 C,1909,629,1904,652,1894,673 C,1864,737,1796,768,1728,768 L,1536,768 L,1536,928 C,1536,1051,1435,1152,1312,1152 L,768,1152 L,768,1184 C,768,1307,667,1408,544,1408 L,224,1408 C,101,1408,0,1307,0,1184 L,0,224 C,0,101,101,0,224,0 L,1312,0 C,1402,0,1511,52,1568,122 L,1863,485 C,1890,519,1909,561,1909,605 Z"
		}
	}
}
},{}],4:[function(require,module,exports){

var DEFAULT_TIME_SCALE = 60;

// Dimensions
module.exports = {
	LINE_HEIGHT: 26,
	DIAMOND_SIZE: 10,
	MARKER_TRACK_HEIGHT: 60,
	width: 600,
	height: 200,
	TIMELINE_SCROLL_HEIGHT: 0,
	LEFT_PANE_WIDTH: 250,
	time_scale: DEFAULT_TIME_SCALE, // number of pixels to 1 second
    default_length: 20, // seconds
};

},{}],5:[function(require,module,exports){
module.exports = {
	// photoshop colors
	a: '#343434',
	b: '#535353',
	c: '#b8b8b8',
	d: '#d6d6d6',
};
},{}],6:[function(require,module,exports){
/*
 * @author Joshua Koo http://joshuakoo.com
 */

var undo = require("./util_undo"),
  Dispatcher = require("./util_dispatcher"),
  Theme = require("./theme"),
  UndoManager = undo.UndoManager,
  UndoState = undo.UndoState,
  Settings = require("./settings"),
  utils = require("./utils"),
  LayerCabinet = require("./view_layer_cabinet"),
  TimelinePanel = require("./view_panel"),
  package_json = require("../package.json"),
  IconButton = require("./ui_icon_button"),
  style = utils.style,
  saveToFile = utils.saveToFile,
  openAs = utils.openAs,
  STORAGE_PREFIX = utils.STORAGE_PREFIX,
  ScrollBar = require("./ui_scrollbar"),
  DataStore = require("./util_datastore");

var Z_INDEX = 999;

var width, height, path, layers, x2;

function LayerProp(name) {
  this.name = name;
  this.values = [];

  this._value = 0;

  this._color = "#" + ((Math.random() * 0xffffff) | 0).toString(16);
  /*
	this.max
	this.min
	this.step
	*/
}

//var hostElement;

function Timeliner(target, host) {
  // Dispatcher for coordination
  var dispatcher = new Dispatcher();

  //hostElement = host;

  // Data
  var data = new DataStore();
  var layer_store = data.get("layers");
  var layers = layer_store.value;

  window._data = data; // expose it for debugging

  // Undo manager
  var undo_manager = new UndoManager(dispatcher);

  // Views
  var timeline = new TimelinePanel(data, dispatcher);
  var layer_panel = new LayerCabinet(data, dispatcher);

  setTimeout(function() {
    // hack!
    undo_manager.save(new UndoState(data, "Loaded"), true);
  });

  dispatcher.on("keyframe", function(layer, value) {
    var index = layers.indexOf(layer);

    var t = data.get("ui:currentTime").value;
    var v = utils.findTimeinLayer(layer, t);

    // console.log(v, '...keyframe index', index, utils.format_friendly_seconds(t), typeof(v));
    // console.log('layer', layer, value);

    if (typeof v === "number") {
      layer.values.splice(v, 0, {
        time: t,
        value: value,
        _color: "#" + ((Math.random() * 0xffffff) | 0).toString(16)
      });

      undo_manager.save(new UndoState(data, "Add Keyframe"));
    } else {
      console.log("remove from index", v);
      layer.values.splice(v.index, 1);

      undo_manager.save(new UndoState(data, "Remove Keyframe"));
    }

    repaintAll();
  });

  dispatcher.on("keyframe.move", function(layer, value) {
    undo_manager.save(new UndoState(data, "Move Keyframe"));
  });

  // dispatcher.fire('value.change', layer, me.value);
  dispatcher.on("value.change", function(layer, value, dont_save) {
    if (layer._mute) return;

    var t = data.get("ui:currentTime").value;
    var v = utils.findTimeinLayer(layer, t);

    // console.log(v, 'value.change', layer, value, utils.format_friendly_seconds(t), typeof(v));
    if (typeof v === "number") {
      layer.values.splice(v, 0, {
        time: t,
        value: value,
        _color: "#" + ((Math.random() * 0xffffff) | 0).toString(16)
      });
      if (!dont_save) undo_manager.save(new UndoState(data, "Add value"));
    } else {
      v.object.value = value;
      if (!dont_save) undo_manager.save(new UndoState(data, "Update value"));
    }

    repaintAll();
  });

  dispatcher.on("action:solo", function(layer, solo) {
    layer._solo = solo;

    console.log(layer, solo);

    // When a track is solo-ed, playback only changes values
    // of that layer.
  });

  dispatcher.on("action:mute", function(layer, mute) {
    layer._mute = mute;

    // When a track is mute, playback does not play
    // frames of those muted layers.

    // also feels like hidden feature in photoshop

    // when values are updated, eg. from slider,
    // no tweens will be created.
    // we can decide also to "lock in" layers
    // no changes to tween will be made etc.
  });

  dispatcher.on("ease", function(layer, ease_type) {
    var t = data.get("ui:currentTime").value;
    var v = utils.timeAtLayer(layer, t);
    // console.log('Ease Change > ', layer, value, v);
    if (v && v.entry) {
      v.entry.tween = ease_type;
    }

    undo_manager.save(new UndoState(data, "Add Ease"));

    repaintAll();
  });

  var start_play = null,
    played_from = 0; // requires some more tweaking

  dispatcher.on("controls.toggle_play", function() {
    if (start_play) {
      pausePlaying();
    } else {
      startPlaying();
    }
  });

  dispatcher.on("controls.restart_play", function() {
    if (!start_play) {
      startPlaying();
    }

    setCurrentTime(played_from);
  });

  dispatcher.on("controls.play", startPlaying);
  dispatcher.on("controls.pause", pausePlaying);

  function startPlaying() {
    // played_from = timeline.current_frame;
    start_play = performance.now() - data.get("ui:currentTime").value * 1000;
    layer_panel.setControlStatus(true);
    // dispatcher.fire('controls.status', true);
  }

  function pausePlaying() {
    start_play = null;
    layer_panel.setControlStatus(false);
    // dispatcher.fire('controls.status', false);
  }

  dispatcher.on("controls.stop", function() {
    if (start_play !== null) pausePlaying();
    setCurrentTime(0);
  });

  var currentTimeStore = data.get("ui:currentTime");
  dispatcher.on("time.update", setCurrentTime);

  dispatcher.on("update.scrollTime", function(v) {
    v = Math.max(0, v);
    data.get("ui:scrollTime").value = v;
    repaintAll();
  });

  function setCurrentTime(value) {
    value = Math.max(0, value);
    currentTimeStore.value = value;

    if (start_play) start_play = performance.now() - value * 1000;
    repaintAll();
    // layer_panel.repaint(s);
  }

  dispatcher.on("target.notify", function(name, value) {
    if (target) target[name] = value;
  });

  dispatcher.on("update.scale", function(v) {
    console.log("range", v);
    data.get("ui:timeScale").value = v;

    timeline.repaint();
  });

  // handle undo / redo
  dispatcher.on("controls.undo", function() {
    var history = undo_manager.undo();
    data.setJSONString(history.state);

    updateState();
  });

  dispatcher.on("controls.redo", function() {
    var history = undo_manager.redo();
    data.setJSONString(history.state);

    updateState();
  });

  /*
		Paint Routines
	*/

  function paint() {
    requestAnimationFrame(paint);

    if (start_play) {
      var t = (performance.now() - start_play) / 1000;
      setCurrentTime(t);

      if (t > data.get("ui:totalTime").value) {
        // simple loop
        start_play = performance.now();
      }
    }

    if (needsResize) {
      div.style.width = width + "px";
      div.style.height = height + "px";

      restyle(layer_panel.dom, timeline.dom);

      timeline.resize();
      repaintAll();
      needsResize = false;

      dispatcher.fire("resize");
    }

    timeline._paint();
  }

  paint();

  /*
		End Paint Routines
	*/

  function save(name) {
    if (!name) name = "autosave";

    var json = data.getJSONString();

    try {
      localStorage[STORAGE_PREFIX + name] = json;
      dispatcher.fire("save:done");
    } catch (e) {
      console.log("Cannot save", name, json);
    }
  }

  function saveAs(name) {
    if (!name) name = data.get("name").value;
    name = prompt("Pick a name to save to (localStorage)", name);
    if (name) {
      data.data.name = name;
      save(name);
    }
  }

  function saveSimply() {
    var name = data.get("name").value;
    if (name) {
      save(name);
    } else {
      saveAs(name);
    }
  }

  function exportJSON() {
    var json = data.getJSONString();
    var ret = prompt("Hit OK to download otherwise Copy and Paste JSON", json);

    console.log(JSON.stringify(data.data, null, "\t"));
    if (!ret) return;

    // make json downloadable
    json = data.getJSONString("\t");
    var fileName = "timeliner-test" + ".json";

    saveToFile(json, fileName);
  }

  function loadJSONString(o) {
    // should catch and check errors here
    var json = JSON.parse(o);
    load(json);
  }

  function load(o) {
    data.setJSON(o);
    //
    if (data.getValue("ui") === undefined) {
      data.setValue("ui", {
        currentTime: 0,
        totalTime: Settings.default_length,
        scrollTime: 0,
        timeScale: Settings.time_scale
      });
    }

    undo_manager.clear();
    undo_manager.save(new UndoState(data, "Loaded"), true);

    updateState();
  }

  function updateState() {
    layers = layer_store.value; // FIXME: support Arrays
    layer_panel.setState(layer_store);
    timeline.setState(layer_store);

    repaintAll();
  }

  function repaintAll() {
    var content_height = layers.length * Settings.LINE_HEIGHT;
    scrollbar.setLength(Settings.TIMELINE_SCROLL_HEIGHT / content_height);

    layer_panel.repaint();
    timeline.repaint();
  }

  function promptImport() {
    var json = prompt("Paste JSON in here to Load");
    if (!json) return;
    console.log("Loading.. ", json);
    loadJSONString(json);
  }

  function open(title) {
    if (title) {
      loadJSONString(localStorage[STORAGE_PREFIX + title]);
    }
  }

  this.openLocalSave = open;

  dispatcher.on(
    "import",
    function() {
      promptImport();
    }.bind(this)
  );

  dispatcher.on("new", function() {
    data.blank();
    updateState();
  });

  dispatcher.on("openfile", function() {
    openAs(function(data) {
      // console.log('loaded ' + data);
      loadJSONString(data);
    }, div);
  });

  dispatcher.on("open", open);
  dispatcher.on("export", exportJSON);

  dispatcher.on("save", saveSimply);
  dispatcher.on("save_as", saveAs);

  // Expose API
  this.save = save;
  this.load = load;

  /*
		Start DOM Stuff (should separate file)
	*/

  var div = document.createElement("div");
  div.style.cssText = "position: absolute;";
  div.style.top = "22px";

  var pane = document.createElement("div");

  style(pane, {
    //position: "fixed",
    //top: "20px",
    //left: "20px",
    margin: 0,
    border: "1px solid " + Theme.a,
    padding: 0,
    overflow: "hidden",
    backgroundColor: Theme.a,
    color: Theme.d,
    zIndex: Z_INDEX,
    fontFamily: "monospace",
    fontSize: "12px",
    width: "100%"
  });

  var header_styles = {
    position: "absolute",
    top: "0px",
    width: "100%",
    height: "22px",
    lineHeight: "22px",
    overflow: "hidden"
  };

  var button_styles = {
    width: "20px",
    height: "20px",
    padding: "2px",
    marginRight: "2px"
  };

  var pane_title = document.createElement("div");
  style(pane_title, header_styles, {
    borderBottom: "1px solid " + Theme.b,
    textAlign: "center"
  });

  var title_bar = document.createElement("span");
  pane_title.appendChild(title_bar);

  title_bar.innerHTML = "Timeliner " + package_json.version;
  pane_title.appendChild(title_bar);

  var top_right_bar = document.createElement("div");
  style(top_right_bar, header_styles, {
    textAlign: "right"
  });

  pane_title.appendChild(top_right_bar);

  // resize minimize
  // var resize_small = new IconButton(10, 'resize_small', 'minimize', dispatcher);
  // top_right_bar.appendChild(resize_small.dom);

  // resize full
  var resize_full = new IconButton(10, "resize_full", "maximize", dispatcher);
  style(resize_full.dom, button_styles, { marginRight: "2px" });
  top_right_bar.appendChild(resize_full.dom);

  var pane_status = document.createElement("div");

  var footer_styles = {
    position: "absolute",
    width: "100%",
    height: "22px",
    lineHeight: "22px",
    bottom: "0",
    // padding: '2px',
    background: Theme.a,
    fontSize: "11px"
  };

  style(pane_status, footer_styles, {
    borderTop: "1px solid " + Theme.b
  });

  pane.appendChild(div);
  pane.appendChild(pane_status);
  pane.appendChild(pane_title);

  var label_status = document.createElement("span");
  label_status.textContent = "hello!";
  label_status.style.marginLeft = "10px";

  this.setStatus = function(text) {
    label_status.textContent = text;
  };

  dispatcher.on("state:save", function(description) {
    dispatcher.fire("status", description);
    save("autosave");
  });

  dispatcher.on("status", this.setStatus);

  var bottom_right = document.createElement("div");
  style(bottom_right, footer_styles, {
    textAlign: "right"
  });

  // var button_save = document.createElement('button');
  // style(button_save, button_styles);
  // button_save.textContent = 'Save';
  // button_save.onclick = function() {
  // 	save();
  // };

  // var button_load = document.createElement('button');
  // style(button_load, button_styles);
  // button_load.textContent = 'Import';
  // button_load.onclick = this.promptLoad;

  // var button_open = document.createElement('button');
  // style(button_open, button_styles);
  // button_open.textContent = 'Open';
  // button_open.onclick = this.promptOpen;

  // bottom_right.appendChild(button_load);
  // bottom_right.appendChild(button_save);
  // bottom_right.appendChild(button_open);

  pane_status.appendChild(label_status);
  pane_status.appendChild(bottom_right);

  /**/
  // zoom in
  var zoom_in = new IconButton(12, "zoom_in", "zoom in", dispatcher);
  // zoom out
  var zoom_out = new IconButton(12, "zoom_out", "zoom out", dispatcher);
  // settings
  var cog = new IconButton(12, "cog", "settings", dispatcher);

  // bottom_right.appendChild(zoom_in.dom);
  // bottom_right.appendChild(zoom_out.dom);
  // bottom_right.appendChild(cog.dom);

  // add layer
  var plus = new IconButton(12, "plus", "New Layer", dispatcher);
  plus.onClick(function() {
    var name = prompt("Layer name?");
    addLayer(name);

    undo_manager.save(new UndoState(data, "Layer added"));

    repaintAll();
  });
  style(plus.dom, button_styles);
  bottom_right.appendChild(plus.dom);

  // trash
  var trash = new IconButton(12, "trash", "Delete save", dispatcher);
  trash.onClick(function() {
    var name = data.get("name").value;
    if (name && localStorage[STORAGE_PREFIX + name]) {
      /*	var ok = confirm("Are you sure you wish to delete " + name + "?");
      if (ok) {
        delete localStorage[STORAGE_PREFIX + name];
        dispatcher.fire("status", name + " deleted");
        dispatcher.fire("save:done");
      }*/
    }
  });
  style(trash.dom, button_styles, { marginRight: "2px" });
  bottom_right.appendChild(trash.dom);

  // pane_status.appendChild(document.createTextNode(' | TODO <Dock Full | Dock Botton | Snap Window Edges | zoom in | zoom out | Settings | help>'));

  /*
			End DOM Stuff
	*/

  var ghostpane = document.createElement("div");
  ghostpane.id = "ghostpane";
  style(ghostpane, {
    background: "#999",
    opacity: 0.2,
    //position: "fixed",
    margin: 0,
    padding: 0,
    zIndex: Z_INDEX - 1,
    // transition: 'all 0.25s ease-in-out',
    transitionProperty: "top, left, width, height, opacity",
    transitionDuration: "0.25s",
    transitionTimingFunction: "ease-in-out"
  });

  //
  // Handle DOM Views
  //

  // Shadow Root
  //var root = document.createElement("timeliner");
  //document.body.appendChild(root);
  var root = host;
  // if (root.createShadowRoot) root = root.createShadowRoot();

  window.r = root;

  // var iframe = document.createElement('iframe');
  // document.body.appendChild(iframe);
  // root = iframe.contentDocument.body;

  root.appendChild(pane);
  root.appendChild(ghostpane);

  div.appendChild(layer_panel.dom);
  div.appendChild(timeline.dom);

  var scrollbar = new ScrollBar(200, 10);
  div.appendChild(scrollbar.dom);

  // percentages
  scrollbar.onScroll.do(function(type, scrollTo) {
    switch (type) {
      case "scrollto":
        layer_panel.scrollTo(scrollTo);
        timeline.scrollTo(scrollTo);
        break;
      //		case 'pageup':
      // 			scrollTop -= pageOffset;
      // 			me.draw();
      // 			me.updateScrollbar();
      // 			break;
      // 		case 'pagedown':
      // 			scrollTop += pageOffset;
      // 			me.draw();
      // 			me.updateScrollbar();
      // 			break;
    }
  });

  // document.addEventListener('keypress', function(e) {
  // 	console.log('kp', e);
  // });
  // document.addEventListener('keyup', function(e) {
  // 	if (undo) console.log('UNDO');

  // 	console.log('kd', e);
  // });

  // TODO: Keyboard Shortcuts
  // Esc - Stop and review to last played from / to the start?
  // Space - play / pause from current position
  // Enter - play all
  // k - keyframe

  document.addEventListener("keydown", function(e) {
    var play = e.keyCode == 32; // space
    var enter = e.keyCode == 13; //
    var undo = e.metaKey && e.keyCode == 91 && !e.shiftKey;

    var active = document.activeElement;
    // console.log( active.nodeName );

    if (active.nodeName.match(/(INPUT|BUTTON|SELECT|TIMELINER)/)) {
      active.blur();
    }

    if (play) {
      dispatcher.fire("controls.toggle_play");
    } else if (enter) {
      // FIXME: Return should play from the start or last played from?
      dispatcher.fire("controls.restart_play");
      // dispatcher.fire('controls.undo');
    } else if (e.keyCode == 27) {
      // Esc = stop. FIXME: should rewind head to last played from or Last pointed from?
      dispatcher.fire("controls.pause");
    } else console.log("keydown", e.keyCode);
  });

  var needsResize = true;

  function resize(width, height) {
    // data.get('ui:bounds').value = {
    // 	width: width,
    // 	height: height
    // };
    // TODO: remove ugly hardcodes
    width -= 4;
    height -= 44;

    Settings.width = width - Settings.LEFT_PANE_WIDTH;
    Settings.height = height;

    Settings.TIMELINE_SCROLL_HEIGHT = height - Settings.MARKER_TRACK_HEIGHT;
    var scrollable_height = Settings.TIMELINE_SCROLL_HEIGHT;

    scrollbar.setHeight(scrollable_height - 2);
    // scrollbar.setThumb

    style(scrollbar.dom, {
      top: Settings.MARKER_TRACK_HEIGHT + "px",
      left: width - 16 + "px"
    });

    needsResize = true;
  }

  function restyle(left, right) {
    left.style.cssText =
      "position: absolute; left: 0px; top: 0px; height: " +
      Settings.height +
      "px;";
    style(left, {
      // background: Theme.a,
      overflow: "hidden"
    });
    left.style.width = Settings.LEFT_PANE_WIDTH + "px";

    // right.style.cssText = 'position: absolute; top: 0px;';
    right.style.position = "absolute";
    right.style.top = "0px";
    right.style.left = Settings.LEFT_PANE_WIDTH + "px";
  }

  function addLayer(name) {
    var layer = new LayerProp(name);

    layers = layer_store.value;
    layers.push(layer);

    layer_panel.setState(layer_store);
  }

  this.addLayer = addLayer;

  this.setTarget = function(t) {
    timeline = t;
  };

  function getValueRanges(ranges, interval) {
    interval = interval ? interval : 0.15;
    ranges = ranges ? ranges : 2;

    // not optimized!
    var t = data.get("ui:currentTime").value;

    var values = [];

    for (var u = -ranges; u <= ranges; u++) {
      // if (u == 0) continue;
      var o = {};

      for (var l = 0; l < layers.length; l++) {
        var layer = layers[l];
        var m = utils.timeAtLayer(layer, t + u * interval);
        o[layer.name] = m.value;
      }

      values.push(o);
    }

    return values;
  }

  this.getValues = getValueRanges;

  (function DockingWindow() {
    "use strict";

    // Minimum resizable area
    var minWidth = 100;
    var minHeight = 80;

    // Thresholds
    var FULLSCREEN_MARGINS = 2;
    var SNAP_MARGINS = 8;
    var MARGINS = 2;

    // End of what's configurable.

    var clicked = null;
    var onRightEdge, onBottomEdge, onLeftEdge, onTopEdge;

    var preSnapped;

    var b, x, y;

    var redraw = false;

    // var pane = document.getElementById('pane');
    // var ghostpane = document.getElementById('ghostpane');

    var mouseOnTitle = false;
    var snapType;

    pane_title.addEventListener("mouseover", function() {
      mouseOnTitle = true;
    });

    pane_title.addEventListener("mouseout", function() {
      mouseOnTitle = false;
    });

    resize_full.onClick(function() {
      // TOOD toggle back to restored size
      if (!preSnapped)
        preSnapped = {
          width: b.width,
          height: b.height
        };

      snapType = "full-screen";
      resizeEdges();
    });

    // pane_status.addEventListener('mouseover', function() {
    // 	mouseOnTitle = true;
    // });

    // pane_status.addEventListener('mouseout', function() {
    // 	mouseOnTitle = false;
    // });

    window.addEventListener("resize", function() {
      if (snapType) resizeEdges();
      else needsResize = true;
    });

    // utils
    function setBounds(element, x, y, w, h) {
      if (element === pane) {
        //element.style.width = w + "px";
        const { width, height } = host.getBoundingClientRect();
        console.log(width, height);
        element.style.width = width + "px";
        element.style.height = height + "px";
        resize(width, height);
      } else {
        element.style.left = x + "px";
        element.style.top = y + "px";
        element.style.width = w + "px";
        element.style.height = h + "px";
      }
    }

    function hintHide() {
      setBounds(ghostpane, b.left, b.top, b.width, b.height);
      ghostpane.style.opacity = 0;
    }

    const { width, height } = host.getBoundingClientRect();
    console.log(width, height);
    setBounds(pane, 0, 0, Settings.width, Settings.height);
    //setBounds(ghostpane, 0, 0, Settings.width, Settings.height);

    // Mouse events
    pane.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);

    // Touch events
    pane.addEventListener("touchstart", onTouchDown);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);

    function onTouchDown(e) {
      onDown(e.touches[0]);
      e.preventDefault();
    }

    function onTouchMove(e) {
      onMove(e.touches[0]);
    }

    function onTouchEnd(e) {
      if (e.touches.length == 0) onUp(e.changedTouches[0]);
    }

    function onMouseDown(e) {
      onDown(e);
    }

    function onDown(e) {
      calc(e);

      var isResizing = onRightEdge || onBottomEdge || onTopEdge || onLeftEdge;
      var isMoving = !isResizing && canMove();

      clicked = {
        x: x,
        y: y,
        cx: e.clientX,
        cy: e.clientY,
        w: b.width,
        h: b.height,
        isResizing: isResizing,
        isMoving: isMoving,
        onTopEdge: onTopEdge,
        onLeftEdge: onLeftEdge,
        onRightEdge: onRightEdge,
        onBottomEdge: onBottomEdge
      };

      if (isResizing || isMoving) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    function canMove() {
      return mouseOnTitle;
      // return x > 0 && x < b.width && y > 0 && y < b.height
      // && y < 18;
    }

    function calc(e) {
      b = pane.getBoundingClientRect();
      x = e.clientX - b.left;
      y = e.clientY - b.top;

      onTopEdge = y < MARGINS;
      onLeftEdge = x < MARGINS;
      onRightEdge = x >= b.width - MARGINS;
      onBottomEdge = y >= b.height - MARGINS;
    }

    var e; // current mousemove event

    function onMove(ee) {
      e = ee;
      calc(e);

      redraw = true;
    }

    function animate() {
      requestAnimationFrame(animate);

      if (!redraw) return;

      redraw = false;

      if (clicked && clicked.isResizing) {
        if (clicked.onRightEdge)
          pane.style.width = Math.max(x, minWidth) + "px";
        if (clicked.onBottomEdge)
          pane.style.height = Math.max(y, minHeight) + "px";

        if (clicked.onLeftEdge) {
          var currentWidth = Math.max(
            clicked.cx - e.clientX + clicked.w,
            minWidth
          );
          if (currentWidth > minWidth) {
            pane.style.width = currentWidth + "px";
            pane.style.left = e.clientX + "px";
          }
        }

        if (clicked.onTopEdge) {
          var currentHeight = Math.max(
            clicked.cy - e.clientY + clicked.h,
            minHeight
          );
          if (currentHeight > minHeight) {
            pane.style.height = currentHeight + "px";
            pane.style.top = e.clientY + "px";
          }
        }

        hintHide();

        resize(b.width, b.height);

        return;
      }

      if (clicked && clicked.isMoving) {
        switch (checks()) {
          case "full-screen":
            setBounds(ghostpane, 0, 0, window.innerWidth, window.innerHeight);
            ghostpane.style.opacity = 0.2;
            break;
          case "snap-top-edge":
            setBounds(
              ghostpane,
              0,
              0,
              window.innerWidth,
              window.innerHeight / 2
            );
            ghostpane.style.opacity = 0.2;
            break;
          case "snap-left-edge":
            setBounds(
              ghostpane,
              0,
              0,
              window.innerWidth / 2,
              window.innerHeight
            );
            ghostpane.style.opacity = 0.2;
            break;
          case "snap-right-edge":
            setBounds(
              ghostpane,
              window.innerWidth / 2,
              0,
              window.innerWidth / 2,
              window.innerHeight
            );
            ghostpane.style.opacity = 0.2;
            break;
          case "snap-bottom-edge":
            setBounds(
              ghostpane,
              0,
              window.innerHeight / 2,
              window.innerWidth,
              window.innerHeight / 2
            );
            ghostpane.style.opacity = 0.2;
            break;
          default:
            hintHide();
        }

        if (preSnapped) {
          setBounds(
            pane,
            e.clientX - preSnapped.width / 2,
            e.clientY - Math.min(clicked.y, preSnapped.height),
            preSnapped.width,
            preSnapped.height
          );
          return;
        }

        // moving
        pane.style.top = e.clientY - clicked.y + "px";
        pane.style.left = e.clientX - clicked.x + "px";

        return;
      }

      // This code executes when mouse moves without clicking

      // style cursor
      if ((onRightEdge && onBottomEdge) || (onLeftEdge && onTopEdge)) {
        pane.style.cursor = "nwse-resize";
      } else if ((onRightEdge && onTopEdge) || (onBottomEdge && onLeftEdge)) {
        pane.style.cursor = "nesw-resize";
      } else if (onRightEdge || onLeftEdge) {
        pane.style.cursor = "ew-resize";
      } else if (onBottomEdge || onTopEdge) {
        pane.style.cursor = "ns-resize";
      } else if (canMove()) {
        pane.style.cursor = "move";
      } else {
        pane.style.cursor = "default";
      }
    }

    function checks() {
      /*
			var rightScreenEdge, bottomScreenEdge;

			rightScreenEdge = window.innerWidth - MARGINS;
			bottomScreenEdge = window.innerHeight - MARGINS;

			// Edge Checkings
			// hintFull();
			if (b.top < FULLSCREEN_MARGINS || b.left < FULLSCREEN_MARGINS || b.right > window.innerWidth - FULLSCREEN_MARGINS || b.bottom > window.innerHeight - FULLSCREEN_MARGINS)
				return 'full-screen';

			// hintTop();
			if (b.top < MARGINS) return 'snap-top-edge';

			// hintLeft();
			if (b.left < MARGINS) return 'snap-left-edge';

			// hintRight();
			if (b.right > rightScreenEdge) return 'snap-right-edge';

			// hintBottom();
			if (b.bottom > bottomScreenEdge) return 'snap-bottom-edge';
			*/

      if (e.clientY < FULLSCREEN_MARGINS) return "full-screen";

      if (e.clientY < SNAP_MARGINS) return "snap-top-edge";

      // hintLeft();
      if (e.clientX < SNAP_MARGINS) return "snap-left-edge";

      // hintRight();
      if (window.innerWidth - e.clientX < SNAP_MARGINS)
        return "snap-right-edge";

      // hintBottom();
      if (window.innerHeight - e.clientY < SNAP_MARGINS)
        return "snap-bottom-edge";
    }

    animate();

    function resizeEdges() {
      switch (snapType) {
        case "full-screen":
          // hintFull();
          setBounds(pane, 0, 0, window.innerWidth, window.innerHeight);
          break;
        case "snap-top-edge":
          // hintTop();
          setBounds(pane, 0, 0, window.innerWidth, window.innerHeight / 2);
          break;
        case "snap-left-edge":
          // hintLeft();
          setBounds(pane, 0, 0, window.innerWidth / 2, window.innerHeight);
          break;
        case "snap-right-edge":
          setBounds(
            pane,
            window.innerWidth / 2,
            0,
            window.innerWidth / 2,
            window.innerHeight
          );
          break;
        case "snap-bottom-edge":
          setBounds(
            pane,
            0,
            window.innerHeight / 2,
            window.innerWidth,
            window.innerHeight / 2
          );
          break;
      }
    }

    function onUp(e) {
      calc(e);

      if (clicked && clicked.isMoving) {
        // Snap
        snapType = checks();
        if (snapType) {
          preSnapped = {
            width: b.width,
            height: b.height
          };
          resizeEdges();
        } else {
          preSnapped = null;
        }

        hintHide();
      }

      clicked = null;
    }
  })();
}

window.Timeliner = Timeliner;

},{"../package.json":2,"./settings":4,"./theme":5,"./ui_icon_button":8,"./ui_scrollbar":10,"./util_datastore":11,"./util_dispatcher":12,"./util_undo":15,"./utils":16,"./view_layer_cabinet":18,"./view_panel":19}],7:[function(require,module,exports){
var handleDrag = require('./util_handle_drag');

function Canvas(w, h) {

	var canvas, ctx, width, height, dpr;

	var canvasItems = [];
	var child;

	function create() {
		canvas = document.createElement('canvas');
		ctx = canvas.getContext('2d');
	}

	function setSize(w, h) {
		width = w;
		height = h;
		dpr = window.devicePixelRatio;
		canvas.width = width * dpr;
		canvas.height = height * dpr;
		canvas.style.width = width + 'px';
		canvas.style.height = height + 'px';

		if (child) child.setSize(w, h);
	}

	function paint(ctx) {
		if (child) {
			if (!child.paint) console.warn('implement repaint()')
			child.paint(ctx);
		}

		var item;
		for (var i = 0; i < canvasItems.length; i++) {
			item = canvasItems[i];
			item.paint()
		}
	}

	function repaint() {
		paint(ctx);
	}

	function add(item) {
		canvasItems.push(item)
	}

	function remove(item) {
		canvasItems.splice(canvasItems.indexOf(item), 1);
	}

	function uses(c) {
		child = c;
		child.add = this.add;
		child.remove = this.remove;
	}

	create();
	setSize(w, h);
	this.setSize = setSize;
	this.repaint = repaint;
	this.uses = uses;

	this.dom = canvas;

	handleDrag(canvas,
		function down(e) {
			if (child.onDown) { child.onDown(e) };
		},
		function move(e) {
			if (child.onMove) { child.onMove(e) };
		},
		function up(e) {
			if (child.onUp) { child.onUp(e) };
		}
		// function hit(e) {
		// 	if (child.onHit) { child.onHit(e) };
		// }
	);
}


module.exports = Canvas;

/*
 * Usage: canvas = new Canvas(width, height);
 * canvas.resize();
 */

// children
// 1: override repaint
// 2: add objects
// Canvas.uses(CanvasChild);
// CanvasItem
// width, height, x, y
// allow Drag
// allow Click
// mouseOver
// 


},{"./util_handle_drag":13}],8:[function(require,module,exports){
var font = require('./font.json'),
	Theme = require('./theme'),
	style = require('./utils').style;

var dp;

function IconButton(size, icon, tooltip, dp) {
	var iconStyle = {
		padding: '0.2em 0.4em',
		margin: '0em',
		background: 'none',
		outline: 'none',
		fontSize: '16px',
		border: 'none',
		borderRadius: '0.2em',
	};

	var button = document.createElement('button');
	style(button, iconStyle);

	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');

	button.appendChild(canvas);

	this.ctx = ctx;
	this.dom = button;
	this.canvas = canvas;

	var me = this;
	this.size = size;
	var dpr = 1;

	this.resize = function() {
		dpr = window.devicePixelRatio;
		var height = size;

		var glyph = font.fonts[icon];

		canvas.height = height * dpr;
		canvas.style.height = height + 'px';

		var scale = height / font.unitsPerEm;
		var width = glyph.advanceWidth * scale + 0.5 | 0;

		width += 2;
		height += 2;

		canvas.width = width * dpr;
		canvas.style.width = width + 'px';

		ctx.fillStyle = Theme.c;
		me.draw();
	};

	if (dp) dp.on('resize', this.resize);

	this.setSize = function(s) {
		size = s;
		this.resize();
	};

	this.setIcon = function(icon) {
		me.icon = icon;

		if (!font.fonts[icon]) console.warn('Font icon not found!');
		this.resize();
	};

	this.onClick = function(e) {
		button.addEventListener('click', e);
	};

	var LONG_HOLD_DURATION = 500;
	var longHoldTimer;

	this.onLongHold = function(f) {
		// not most elagent but oh wells.
		function startHold(e) {
			e.preventDefault();
			e.stopPropagation();
			longHoldTimer = setTimeout(function() {
				if (longHoldTimer) {
					console.log('LONG HOLD-ED!');
					f();
				}
			}, LONG_HOLD_DURATION);
		}

		function clearLongHoldTimer() {
			clearTimeout(longHoldTimer);
		}
		
		button.addEventListener('mousedown', startHold);
		button.addEventListener('touchstart', startHold);
		button.addEventListener('mouseup', clearLongHoldTimer);
		button.addEventListener('mouseout', clearLongHoldTimer);
		button.addEventListener('touchend', clearLongHoldTimer);
	};

	this.setTip = function(tip) {
		tooltip = tip;
	};

	var borders = {
		border: '1px solid ' + Theme.b,
		// boxShadow: Theme.b + ' 1px 1px'
	};

	var no_borders = {
		border: '1px solid transparent',
		// boxShadow: 'none'
	};

	var normal = 'none'; // Theme.b;
	var up = Theme.c;
	var down = Theme.b;

	button.style.background = normal;
	style(button, no_borders);

	button.addEventListener('mouseover', function() {
		// button.style.background = up;
		style(button, borders);
		
		ctx.fillStyle = Theme.d;
		// me.dropshadow = true;
		ctx.shadowColor = Theme.b;
		ctx.shadowBlur = 0.5 * dpr;
		ctx.shadowOffsetX = 1 * dpr;
		ctx.shadowOffsetY = 1 * dpr;
		me.draw();

		if (tooltip && dp) dp.fire('status', 'button: ' + tooltip);
	});

	button.addEventListener('mousedown', function() {
		button.style.background = down;
		// ctx.fillStyle = Theme.b;
		// me.draw();
	});

	button.addEventListener('mouseup', function() {
		// ctx.fillStyle = Theme.d;
		button.style.background = normal;
		style(button, borders);
		// me.draw();
	});

	button.addEventListener('mouseout', function() {
		// ctx.fillStyle = Theme.c;
		

		button.style.background = normal;
		style(button, no_borders);
		me.dropshadow = false;
		ctx.fillStyle = Theme.c;
		ctx.shadowColor = null;
		ctx.shadowBlur = 0;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		me.draw();
	});

	if (icon) this.setIcon(icon);
}

IconButton.prototype.CMD_MAP = {
	M: 'moveTo',
	L: 'lineTo',
	Q: 'quadraticCurveTo',
	C: 'bezierCurveTo',
	Z: 'closePath'
};

IconButton.prototype.draw = function() {
	if (!this.icon) return;

	var ctx = this.ctx;

	var glyph = font.fonts[this.icon];

	var height = this.size;
	var dpr = window.devicePixelRatio;
	var scale = height / font.unitsPerEm * dpr;
	var path_commands =  glyph.commands.split(' ');

	ctx.save();
	ctx.clearRect(0, 0, this.canvas.width * dpr, this.canvas.height * dpr);

	if (this.dropshadow) {
		ctx.save();
		ctx.fillStyle = Theme.b;
		ctx.translate(1.5 * dpr, 1.5 * dpr);
		ctx.scale(scale, -scale);
		ctx.translate(0 , -font.ascender);
		ctx.beginPath();

		for (var i = 0, il = path_commands.length; i < il; i++) {
			var cmds = path_commands[i].split(',');
			var params = cmds.slice(1);

			ctx[this.CMD_MAP[cmds[0]]].apply(ctx, params);
		}
		ctx.fill();
		ctx.restore();
	}

	ctx.scale(scale, -scale);
	ctx.translate(0, -font.ascender);
	ctx.beginPath();

	for (var i = 0, il = path_commands.length; i < il; i++) {
		var cmds = path_commands[i].split(',');
		var params = cmds.slice(1);

		ctx[this.CMD_MAP[cmds[0]]].apply(ctx, params);
	}
	ctx.fill();
	ctx.restore();

	/*
	var triangle = height / 3 * dpr;
	ctx.save();
	// ctx.translate(dpr * 2, 0);
	// ctx.fillRect(this.canvas.width - triangle, this.canvas.height - triangle, triangle, triangle);
	ctx.beginPath();
	ctx.moveTo(this.canvas.width - triangle, this.canvas.height - triangle / 2);
	ctx.lineTo(this.canvas.width, this.canvas.height - triangle / 2);
	ctx.lineTo(this.canvas.width - triangle / 2, this.canvas.height);
	ctx.fill();
	ctx.restore();
	*/
};

module.exports = IconButton;
},{"./font.json":3,"./theme":5,"./utils":16}],9:[function(require,module,exports){
var Theme = require('./theme'),
	Do = require('do.js'),
	handleDrag = require('./util_handle_drag'),
	style = require('./utils').style,
	firstDefined = require('./utils').firstDefined
	;

/**************************/
// NumberUI
/**************************/

function NumberUI(config) {
	config = config || {};
	var min = config.min === undefined ? -Infinity : config.min;

	// config.xstep and config.ystep allow configuring adjustment
	// speed across each axis.
	// config.wheelStep and config.wheelStepFine allow configuring
	// adjustment speed for mousewheel, and mousewheel while holding <alt>

	// If only config.step is specified, all other adjustment speeds
	// are set to the same value.
	var xstep = firstDefined(config.xstep, config.step, 0.001);
	var ystep = firstDefined(config.ystep, config.step, 0.1);
	var wheelStep = firstDefined(config.wheelStep, ystep);
	var wheelStepFine = firstDefined(config.wheelStepFine, xstep);

	var precision = config.precision || 3;
	// Range
	// Max

	var span = document.createElement('input');
	// span.type = 'number'; // spinner
	
	style(span, {
		textAlign: 'center',
		fontSize: '10px',
		padding: '1px',
		cursor: 'ns-resize',
		width: '40px',
		margin: 0,
		marginRight: '10px',
		appearance: 'none',
		outline: 'none',
		border: 0,
		background: 'none',
		borderBottom: '1px dotted '+ Theme.c,
		color: Theme.c
	});

	var me = this;
	var state, value = 0, unchanged_value;

	this.onChange = new Do();

	span.addEventListener('change', function(e) {
		console.log('input changed', span.value);
		value = parseFloat(span.value, 10);

		fireChange();
	});

	// Allow keydown presses in inputs, don't allow parent to block them
	span.addEventListener('keydown', function(e) {
		e.stopPropagation();
	})

	span.addEventListener('focus', function(e) {
		span.setSelectionRange(0, span.value.length);
	})

	span.addEventListener('wheel', function(e) {
		// Disregard pixel/line/page scrolling and just
		// use event direction.
		var inc = e.deltaY > 0? 1 : -1;
		if(e.altKey) {
			inc *= wheelStepFine;
		} else {
			inc *= wheelStep;
		}
		value = clamp(value + inc);
		fireChange();
	})

	handleDrag(span, onDown, onMove, onUp);

	function clamp(value) {
		return Math.max(min, value);
	}

	function onUp(e) {
		if (e.moved) fireChange();
		else {
			// single click
			span.focus();
		}
	}

	function onMove(e) {
		var dx = e.dx;
		var dy = e.dy;
	
		value = unchanged_value + (dx * xstep) + (dy * -ystep);

		value = clamp(value);

		// value = +value.toFixed(precision); // or toFixed toPrecision
		me.onChange.fire(value, true);
	}

	function onDown(e) {
		unchanged_value = value;
	}

	function fireChange() {
		me.onChange.fire(value);
	}

	this.dom = span;

	// public
	this.setValue = function(v) {
		value = v;
		span.value = value.toFixed(precision);
	};

	this.paint = function() {
		if (value && document.activeElement !== span) {
			span.value = value.toFixed(precision);
		}
	};
}

module.exports = NumberUI;

},{"./theme":5,"./util_handle_drag":13,"./utils":16,"do.js":1}],10:[function(require,module,exports){
var SimpleEvent = require("do.js");
var utils = require("./utils");

// ********** class: ScrollBar ****************** //
/*
	Simple UI widget that displays a scrolltrack 
	and slider, that fires some scroll events
*/
// ***********************************************

var scrolltrack_style = {
  // float: 'right',
  position: "absolute",
  // right: '0',
  // top: '0',
  // bottom: '0',
  background:
    "-webkit-gradient(linear, left top, right top, color-stop(0, rgb(29,29,29)), color-stop(0.6, rgb(50,50,50)) )",
  border: "1px solid rgb(29, 29, 29)",
  // zIndex: '1000',
  textAlign: "center",
  cursor: "pointer"
};

var scrollbar_style = {
  background:
    "-webkit-gradient(linear, left top, right top, color-stop(0.2, rgb(88,88,88)), color-stop(0.6, rgb(64,64,64)) )",
  border: "1px solid rgb(25,25,25)",
  // position: 'absolute',
  position: "relative",
  borderRadius: "6px"
};

function ScrollBar(h, w, dispatcher) {
  var SCROLLBAR_WIDTH = w ? w : 12;
  var SCROLLBAR_MARGIN = 3;
  var SCROLL_WIDTH = SCROLLBAR_WIDTH + SCROLLBAR_MARGIN * 2;
  var MIN_BAR_LENGTH = 25;

  var scrolltrack = document.createElement("div");
  utils.style(scrolltrack, scrolltrack_style);

  var scrolltrackHeight = h - 2;
  scrolltrack.style.height = scrolltrackHeight + "px";
  scrolltrack.style.width = SCROLL_WIDTH + "px";

  // var scrollTop = 0;
  var scrollbar = document.createElement("div");
  // scrollbar.className = 'scrollbar';
  utils.style(scrollbar, scrollbar_style);
  scrollbar.style.width = SCROLLBAR_WIDTH + "px";
  scrollbar.style.height = h / 2;
  scrollbar.style.top = 0;
  scrollbar.style.left = SCROLLBAR_MARGIN + "px"; // 0; //S

  scrolltrack.appendChild(scrollbar);

  var me = this;

  var bar_length, bar_y;

  // Sets lengths of scrollbar by percentage
  this.setLength = function(l) {
    // limit 0..1
    l = Math.max(Math.min(1, l), 0);
    l *= scrolltrackHeight;
    bar_length = Math.max(l, MIN_BAR_LENGTH);
    scrollbar.style.height = bar_length + "px";
  };

  this.setHeight = function(height) {
    h = height;

    scrolltrackHeight = h - 2;
    scrolltrack.style.height = scrolltrackHeight + "px";
  };

  // Moves scrollbar to position by Percentage
  this.setPosition = function(p) {
    p = Math.max(Math.min(1, p), 0);
    var emptyTrack = scrolltrackHeight - bar_length;
    bar_y = p * emptyTrack;
    scrollbar.style.top = bar_y + "px";
  };

  this.setLength(1);
  this.setPosition(0);
  this.onScroll = new SimpleEvent();

  var mouse_down_grip;

  function onDown(event) {
    event.preventDefault();

    if (event.target == scrollbar) {
      mouse_down_grip = event.clientY;
      document.addEventListener("mousemove", onMove, false);
      document.addEventListener("mouseup", onUp, false);
    } else {
      if (event.clientY < bar_y) {
        me.onScroll.fire("pageup");
      } else if (event.clientY > bar_y + bar_length) {
        me.onScroll.fire("pagedown");
      }
      // if want to drag scroller to empty track instead
      // me.setPosition(event.clientY / (scrolltrackHeight - 1));
    }
  }

  function onMove(event) {
    event.preventDefault();

    // event.target == scrollbar
    var emptyTrack = scrolltrackHeight - bar_length;
    var scrollto = (event.clientY - mouse_down_grip) / emptyTrack;

    // clamp limits to 0..1
    if (scrollto > 1) scrollto = 1;
    if (scrollto < 0) scrollto = 0;
    me.setPosition(scrollto);
    me.onScroll.fire("scrollto", scrollto);
  }

  function onUp(event) {
    onMove(event);
    document.removeEventListener("mousemove", onMove, false);
    document.removeEventListener("mouseup", onUp, false);
  }

  scrolltrack.addEventListener("mousedown", onDown, false);
  this.dom = scrolltrack;
}

module.exports = ScrollBar;

},{"./utils":16,"do.js":1}],11:[function(require,module,exports){
var package_json = require("../package.json"),
  Settings = require("./settings"),
  Do = require("do.js");

// Data Store with a source of truth
function DataStore() {
  this.DELIMITER = ":";
  this.blank();
  this.onOpen = new Do();
  this.onSave = new Do();

  this.listeners = [];
}

DataStore.prototype.addListener = function(path, cb) {
  this.listeners.push({
    path: path,
    callback: cb
  });
};

DataStore.prototype.blank = function() {
  var data = {};

  data.version = package_json.version;
  data.modified = new Date().toString();
  data.title = "Untitled";

  data.ui = {
    currentTime: 0,
    totalTime: Settings.default_length,
    scrollTime: 0,
    timeScale: Settings.time_scale
  };

  data.layers = [];

  this.data = data;
};

DataStore.prototype.update = function() {
  var data = this.data;

  data.version = package_json.version;
  data.modified = new Date().toString();
};

DataStore.prototype.setJSONString = function(data) {
  this.data = JSON.parse(data);
};

DataStore.prototype.setJSON = function(data) {
  this.data = data;
};

DataStore.prototype.getJSONString = function(format) {
  return JSON.stringify(this.data, null, format);
};

DataStore.prototype.getValue = function(paths) {
  var descend = paths.split(this.DELIMITER);
  var reference = this.data;
  for (var i = 0, il = descend.length; i < il; i++) {
    var path = descend[i];
    if (reference[path] === undefined) {
      console.warn("Cant find " + paths);
      return;
    }
    reference = reference[path];
  }
  return reference;
};

DataStore.prototype.setValue = function(paths, value) {
  var descend = paths.split(this.DELIMITER);
  var reference = this.data;
  var path;
  for (var i = 0, il = descend.length - 1; (path = descend[i]), i < il; i++) {
    reference = reference[path];
  }

  reference[path] = value;

  this.listeners.forEach(function(l) {
    if (paths.indexOf(l.path) > -1) l.callback();
  });
};

DataStore.prototype.get = function(path, suffix) {
  if (suffix) path = suffix + this.DELIMITER + path;
  return new DataProx(this, path);
};

function DataProx(store, path) {
  this.path = path;
  this.store = store;
}

DataProx.prototype = {
  get value() {
    return this.store.getValue(this.path);
  },
  set value(val) {
    this.store.setValue(this.path, val);
  }
};

DataProx.prototype.get = function(path) {
  return this.store.get(path, this.path);
};

module.exports = DataStore;

},{"../package.json":2,"./settings":4,"do.js":1}],12:[function(require,module,exports){
/**************************/
// Dispatcher
/**************************/

function Dispatcher() {

	var event_listeners = {

	};

	function on(type, listener) {
		if (!(type in event_listeners)) {
			event_listeners[type] = [];
		}
		var listeners = event_listeners[type];
		listeners.push(listener);
	}

	function fire(type) {
		var args = Array.prototype.slice.call(arguments);
		args.shift();
		var listeners = event_listeners[type];
		if (!listeners) return;
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			listener.apply(listener, args);
		}
	}

	this.on = on;
	this.fire = fire;

}

module.exports = Dispatcher;
},{}],13:[function(require,module,exports){
function handleDrag(element, ondown, onmove, onup, down_criteria) {
	var pointer = null;
	var bounds = element.getBoundingClientRect();
	
	element.addEventListener('mousedown', onMouseDown);

	function onMouseDown(e) {
		handleStart(e);

		if (down_criteria && !down_criteria(pointer)) {
			pointer = null;
			return;
		}

		
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
		
		ondown(pointer);

		e.preventDefault();
	}
	
	function onMouseMove(e) {
		handleMove(e);
		onmove(pointer);
	}

	function handleStart(e) {
		bounds = element.getBoundingClientRect();
		var currentx = e.clientX, currenty = e.clientY;
		pointer = {
			startx: currentx,
			starty: currenty,
			x: currentx,
			y: currenty,
			dx: 0,
			dy: 0,
			offsetx: currentx - bounds.left,
			offsety: currenty - bounds.top,
			moved: false
		};
	}
	
	function handleMove(e) {
		bounds = element.getBoundingClientRect();
		var currentx = e.clientX,
		currenty = e.clientY,
		offsetx = currentx - bounds.left,
		offsety = currenty - bounds.top;
		pointer.x = currentx;
		pointer.y = currenty;
		pointer.dx = e.clientX - pointer.startx;
		pointer.dy = e.clientY - pointer.starty;
		pointer.offsetx = offsetx;
		pointer.offsety = offsety;

		// If the pointer dx/dy is _ever_ non-zero, then it's moved
		pointer.moved = pointer.moved || pointer.dx !== 0 || pointer.dy !== 0;
	}
	
	function onMouseUp(e) {
		handleMove(e);
		onup(pointer);
		pointer = null;
		
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	}

	element.addEventListener('touchstart', onTouchStart);

	function onTouchStart(te) {
		
		if (te.touches.length == 1) {
			
			var e = te.touches[0];
			if (down_criteria && !down_criteria(e)) return;
			te.preventDefault();
			handleStart(e);
			ondown(pointer);
		}
		
		element.addEventListener('touchmove', onTouchMove);
		element.addEventListener('touchend', onTouchEnd);
	}
	
	function onTouchMove(te) {
		var e = te.touches[0];
		onMouseMove(e);
	}

	function onTouchEnd(e) {
		// var e = e.touches[0];
		onMouseUp(e);
		element.removeEventListener('touchmove', onTouchMove);
		element.removeEventListener('touchend', onTouchEnd);
	}


	this.release = function() {
		element.removeEventListener('mousedown', onMouseDown);
		element.removeEventListener('touchstart', onTouchStart);
	};
}

module.exports = handleDrag;

},{}],14:[function(require,module,exports){
/**************************/
// Tweens
/**************************/

var Tweens = {
	none: function(k) {
		return 0;
	},
	linear: function(k) {
		return k;
	},
	quadEaseIn: function(k) {
		return k * k;
	},
	quadEaseOut: function(k) {
		return - k * ( k - 2 );
	},
	quadEaseInOut: function(k) {
		if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
		return - 0.5 * ( --k * ( k - 2 ) - 1 );
	}
};

module.exports = Tweens;
},{}],15:[function(require,module,exports){
/**************************/
// Undo Manager
/**************************/

function UndoState(state, description) {
	// this.state = JSON.stringify(state);
	this.state = state.getJSONString();
	this.description = description;
}

function UndoManager(dispatcher, max) {
	this.dispatcher = dispatcher;
	this.MAX_ITEMS = max || 100;
	this.clear();
}

UndoManager.prototype.save = function(state, suppress) {
	var states = this.states;
	var next_index = this.index + 1;
	var to_remove = states.length - next_index;
	states.splice(next_index, to_remove, state);

	if (states.length > this.MAX_ITEMS) {
		states.shift();
	}

	this.index = states.length - 1;

	// console.log('Undo State Saved: ', state.description);
	if (!suppress) this.dispatcher.fire('state:save', state.description);
};

UndoManager.prototype.clear = function() {
	this.states = [];
	this.index = -1;
	// FIXME: leave default state or always leave one state?
};

UndoManager.prototype.canUndo = function() {
	return this.index > 0;
	// && this.states.length > 1
};

UndoManager.prototype.canRedo = function() {
	return this.index < this.states.length - 1;
};

UndoManager.prototype.undo = function() {
	if (this.canUndo()) {
		this.dispatcher.fire('status', 'Undo: ' + this.get().description);
		this.index--;
	} else {
		this.dispatcher.fire('status', 'Nothing to undo');
	}

	return this.get();
};

UndoManager.prototype.redo = function() {
	if (this.canRedo()) {
		this.index++;
		this.dispatcher.fire('status', 'Redo: ' + this.get().description);
	} else {
		this.dispatcher.fire('status', 'Nothing to redo');
	}

	return this.get();
};

UndoManager.prototype.get = function() {
	return this.states[this.index];
};

module.exports = {
	UndoState: UndoState,
	UndoManager: UndoManager
};
},{}],16:[function(require,module,exports){
var
	Tweens = require('./util_tween');

module.exports = {
	STORAGE_PREFIX: 'timeliner-',
	Z_INDEX: 999,
	firstDefined: firstDefined,
	style: style,
	saveToFile: saveToFile,
	openAs: openAs,
	format_friendly_seconds: format_friendly_seconds,
	findTimeinLayer: findTimeinLayer,
	timeAtLayer: timeAtLayer,
	proxy_ctx: proxy_ctx
};

/**************************/
// Utils
/**************************/

function firstDefined() {
	for(var i = 0; i < arguments.length; i++) {
		if(typeof arguments[i] !== 'undefined') {
			return arguments[i];
		}
	}
	return undefined;
}

function style(element, var_args) {
	for (var i = 1; i < arguments.length; ++i) {
		var styles = arguments[i];
		for (var s in styles) {
			element.style[s] = styles[s];
		}
	}
}

function saveToFile(string, filename) {
	var a = document.createElement("a");
	document.body.appendChild(a);
	a.style = "display: none";

	var blob = new Blob([string], { type: 'octet/stream' }), // application/json
		url = window.URL.createObjectURL(blob);
	
	a.href = url;
	a.download = filename;

	fakeClick(a);

	setTimeout(function() {
		// cleanup and revoke
		window.URL.revokeObjectURL(url);
		document.body.removeChild(a);
	}, 500);
}



var input, openCallback;

function handleFileSelect(evt) {
	var files = evt.target.files; // FileList object

	console.log('handle file select', files.length);

	var f = files[0];
	if (!f) return;
	// Can try to do MINE match
	// if (!f.type.match('application/json')) {
	//   return;
	// }
	console.log('match', f.type);

	var reader = new FileReader();

	// Closure to capture the file information.
	reader.onload = function(e) {
		var data = e.target.result;
		openCallback(data);
	};
	
	reader.readAsText(f);

	input.value = '';
}


function openAs(callback, target) {
	console.log('openfile...');
	openCallback = callback;

	if (!input) {
		input = document.createElement('input');
		input.style.display = 'none';
		input.type = 'file';
		input.addEventListener('change', handleFileSelect);
		target = target || document.body;
		target.appendChild(input);
	}
	
	fakeClick(input);
}

function fakeClick(target) {
	var e = document.createEvent("MouseEvents");
	e.initMouseEvent(
		'click', true, false, window, 0, 0, 0, 0, 0,
		false, false, false, false, 0, null
	);
	target.dispatchEvent(e);
}

function format_friendly_seconds(s, type) {
	// TODO Refactor to 60fps???
	// 20 mins * 60 sec = 1080 
	// 1080s * 60fps = 1080 * 60 < Number.MAX_SAFE_INTEGER

	var raw_secs = s | 0;
	var secs_micro = s % 60;
	var secs = raw_secs % 60;
	var raw_mins = raw_secs / 60 | 0;
	var mins = raw_mins % 60;
	var hours = raw_mins / 60 | 0;

	var secs_str = (secs / 100).toFixed(2).substring(2);

	var str = mins + ':' + secs_str;

	if (s % 1 > 0) {
		var t2 = (s % 1) * 60;
		if (type === 'frames') str = secs + '+' + t2.toFixed(0) + 'f';
		else str += ((s % 1).toFixed(2)).substring(1);
		// else str = mins + ':' + secs_micro;
		// else str = secs_micro + 's'; /// .toFixed(2)
	}
	return str;	
}

// get object at time
function findTimeinLayer(layer, time) {
	var values = layer.values;
	var i, il;

	// TODO optimize by checking time / binary search

	for (i=0, il=values.length; i<il; i++) {
		var value = values[i];
		if (value.time === time) {
			return {
				index: i,
				object: value
			};
		} else if (value.time > time) {
			return i;
		}
	}

	return i;
}


function timeAtLayer(layer, t) {
	// Find the value of layer at t seconds.
	// this expect layer to be sorted
	// not the most optimized for now, but would do.

	var values = layer.values;
	var i, il, entry, prev_entry;

	il = values.length;

	// can't do anything
	if (il === 0) return;

	if (layer._mute) return

	// find boundary cases
	entry = values[0];
	if (t < entry.time) {
		return {
			value: entry.value,
			can_tween: false, // cannot tween
			keyframe: false // not on keyframe
		};
	}

	for (i=0; i<il; i++) {
		prev_entry = entry;
		entry = values[i];

		if (t === entry.time) {
			// only exception is on the last KF, where we display tween from prev entry
			if (i === il - 1) {
				return {
					// index: i,
					entry: prev_entry,
					tween: prev_entry.tween,
					can_tween: il > 1,
					value: entry.value,
					keyframe: true
				};
			}
			return {
				// index: i,
				entry: entry,
				tween: entry.tween,
				can_tween: il > 1,
				value: entry.value,
				keyframe: true // il > 1
			};
		}
		if (t < entry.time) {
			// possibly a tween
			if (!prev_entry.tween) { // or if value is none
				return {
					value: prev_entry.value,
					tween: false,
					entry: prev_entry,
					can_tween: true,
					keyframe: false
				};
			}

			// calculate tween
			var time_diff = entry.time - prev_entry.time;
			var value_diff = entry.value - prev_entry.value;
			var tween = prev_entry.tween;

			var dt = t - prev_entry.time;
			var k = dt / time_diff;
			var new_value = prev_entry.value + Tweens[tween](k) * value_diff;

			return {
				entry: prev_entry,
				value: new_value,
				tween: prev_entry.tween,
				can_tween: true,
				keyframe: false
			};
		}
	}
	// time is after all entries
	return {
		value: entry.value,
		can_tween: false,
		keyframe: false
	}; 

}


function proxy_ctx(ctx) {
	// Creates a proxy 2d context wrapper which 
	// allows the fluent / chaining API.
	var wrapper = {};

	function proxy_function(c) {
		return function() {
			// Warning: this doesn't return value of function call
			ctx[c].apply(ctx, arguments);
			return wrapper;
		};
	}

	function proxy_property(c) {
		return function(v) {
			ctx[c] = v;
			return wrapper;
		};
	}

	wrapper.run = function(args) {
		args(wrapper);
		return wrapper;
	};

	for (var c in ctx) {
		// if (!ctx.hasOwnProperty(c)) continue;
		// console.log(c, typeof(ctx[c]), ctx.hasOwnProperty(c));
		// string, number, boolean, function, object

		var type = typeof(ctx[c]);
		switch(type) {
			case 'object':
				break;
			case 'function':
				wrapper[c] = proxy_function(c);
				break;
			default:
				wrapper[c] = proxy_property(c);
				break;
		}
	}

	return wrapper;
}

},{"./util_tween":14}],17:[function(require,module,exports){
var Theme = require("./theme"),
  UINumber = require("./ui_number"),
  Tweens = require("./util_tween"),
  Settings = require("./settings"),
  utils = require("./utils");
// TODO - tagged by index instead, work off layers.

function LayerView(layer, dispatcher) {
  var dom = document.createElement("div");

  var label = document.createElement("span");

  label.style.cssText = "font-size: 12px; padding: 4px;";

  var dropdown = document.createElement("select");
  var option;
  dropdown.style.cssText =
    "font-size: 10px; width: 60px; margin: 0; float: right; text-align: right;";

  for (var k in Tweens) {
    option = document.createElement("option");
    option.text = k;
    dropdown.appendChild(option);
  }

  dropdown.addEventListener("change", function(e) {
    dispatcher.fire("ease", layer, dropdown.value);
  });
  var height = Settings.LINE_HEIGHT - 1;

  var keyframe_button = document.createElement("button");
  keyframe_button.innerHTML = "&#9672;"; // '&diams;' &#9671; 9679 9670 9672
  keyframe_button.style.cssText =
    "background: none; font-size: 12px; padding: 0px; font-family: monospace; float: right; width: 20px; height: " +
    height +
    "px; border-style:none; outline: none;"; //  border-style:inset;

  keyframe_button.addEventListener("click", function(e) {
    console.log("clicked:keyframing...", state.get("_value").value);
    dispatcher.fire("keyframe", layer, state.get("_value").value);
  });

  /*
  // Prev Keyframe
  var button = document.createElement("button");
  button.textContent = "<";
  button.style.cssText = "font-size: 12px; padding: 1px; ";
  dom.appendChild(button);

  // Next Keyframe
  button = document.createElement("button");
  button.textContent = ">";
  button.style.cssText = "font-size: 12px; padding: 1px; ";
  dom.appendChild(button);
 */

  function ToggleButton(text) {
    // for css based button see http://codepen.io/mallendeo/pen/eLIiG

    var button = document.createElement("button");
    button.textContent = text;

    utils.style(button, {
      fontSize: "12px",
      padding: "1px",
      borderSize: "2px",
      outline: "none",
      background: "#fff"
    });

    this.pressed = false;

    button.onclick = function() {
      this.pressed = !this.pressed;

      utils.style(button, {
        borderStyle: this.pressed ? "inset" : "outset" // inset outset groove ridge
      });

      if (this.onClick) this.onClick();
    }.bind(this);

    this.dom = button;
  }

  /*
  // Solo
  var solo_toggle = new ToggleButton("S");
  dom.appendChild(solo_toggle.dom);

  solo_toggle.onClick = function() {
    dispatcher.fire("action:solo", layer, solo_toggle.pressed);
  };

  // Mute
  var mute_toggle = new ToggleButton("M");
  dom.appendChild(mute_toggle.dom);

  mute_toggle.onClick = function() {
    dispatcher.fire("action:mute", layer, mute_toggle.pressed);
  };

  
  var number = new UINumber(layer, dispatcher);

  number.onChange.do(function(value, done) {
    state.get("_value").value = value;
    dispatcher.fire("value.change", layer, value, done);
  });
 

  utils.style(number.dom, {
    float: "right"
  });
   */

  dom.appendChild(label);
  dom.appendChild(keyframe_button);
  //dom.appendChild(number.dom);
  dom.appendChild(dropdown);

  utils.style(dom, {
    textAlign: "left",
    margin: "0px 0px 0px 5px",
    borderBottom: "1px solid " + Theme.b,
    top: 0,
    left: 0,
    height: Settings.LINE_HEIGHT - 1 + "px",
    color: Theme.c
  });

  this.dom = dom;

  this.repaint = repaint;
  var state;

  this.setState = function(l, s) {
    layer = l;
    state = s;

    var tmp_value = state.get("_value");
    if (tmp_value.value === undefined) {
      tmp_value.value = 0;
    }

    //number.setValue(tmp_value.value);
    label.textContent = state.get("name").value;

    repaint();
  };

  function repaint(s) {
    dropdown.style.opacity = 0;
    dropdown.disabled = true;
    keyframe_button.style.color = Theme.b;
    // keyframe_button.disabled = false;
    // keyframe_button.style.borderStyle = 'solid';

    var tween = null;
    var o = utils.timeAtLayer(layer, s);

    if (!o) return;

    if (o.can_tween) {
      dropdown.style.opacity = 1;
      dropdown.disabled = false;
      // if (o.tween)
      dropdown.value = o.tween ? o.tween : "none";
      if (dropdown.value === "none") dropdown.style.opacity = 0.5;
    }

    if (o.keyframe) {
      keyframe_button.style.color = Theme.c;
      // keyframe_button.disabled = true;
      // keyframe_button.style.borderStyle = 'inset';
    }

    state.get("_value").value = o.value;
    //number.setValue(o.value);
    //number.paint();

    dispatcher.fire("target.notify", layer.name, o.value);
  }
}

module.exports = LayerView;

},{"./settings":4,"./theme":5,"./ui_number":9,"./util_tween":14,"./utils":16}],18:[function(require,module,exports){
var Settings = require("./settings"),
  ViewLayer = require("./view_layer"),
  IconButton = require("./ui_icon_button"),
  style = require("./utils").style,
  Theme = require("./theme"),
  STORAGE_PREFIX = require("./utils").STORAGE_PREFIX,
  UINumber = require("./ui_number");
var layers, x2;

function LayerCabinet(data, dispatcher) {
  var layer_store = data.get("layers");

  var div = document.createElement("div");

  var top = document.createElement("div");
  top.style.cssText =
    "margin: 0px; top: 0; left: 0; height: " +
    Settings.MARKER_TRACK_HEIGHT +
    "px";
  // top.style.textAlign = 'right';

  var layer_scroll = document.createElement("div");
  style(layer_scroll, {
    position: "absolute",
    top: Settings.MARKER_TRACK_HEIGHT + "px",
    // height: (Settings.height - Settings.MARKER_TRACK_HEIGHT) + 'px'
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden"
  });

  div.appendChild(layer_scroll);

  var playing = false;

  var button_styles = {
    width: "22px",
    height: "22px",
    padding: "2px"
  };

  var op_button_styles = {
    width: "32px",
    padding: "3px 4px 3px 4px"
  };

  var play_button = new IconButton(16, "play", "play", dispatcher);
  style(play_button.dom, button_styles, { marginTop: "2px" });
  play_button.onClick(function(e) {
    e.preventDefault();
    dispatcher.fire("controls.toggle_play");
  });

  var stop_button = new IconButton(16, "stop", "stop", dispatcher);
  style(stop_button.dom, button_styles, { marginTop: "2px" });
  stop_button.onClick(function(e) {
    dispatcher.fire("controls.stop");
  });

  var undo_button = new IconButton(16, "undo", "undo", dispatcher);
  style(undo_button.dom, op_button_styles);
  undo_button.onClick(function() {
    dispatcher.fire("controls.undo");
  });

  var redo_button = new IconButton(16, "repeat", "redo", dispatcher);
  style(redo_button.dom, op_button_styles);
  redo_button.onClick(function() {
    dispatcher.fire("controls.redo");
  });

  var range = document.createElement("input");
  range.type = "range";
  range.value = 0;
  range.min = -1;
  range.max = +1;
  range.step = 0.125;

  style(range, {
    width: "90px",
    margin: "0px",
    marginLeft: "2px",
    marginRight: "2px"
  });

  var draggingRange = 0;

  range.addEventListener("mousedown", function() {
    draggingRange = 1;
  });

  range.addEventListener("mouseup", function() {
    draggingRange = 0;
    changeRange();
  });

  range.addEventListener("mousemove", function() {
    if (!draggingRange) return;
    changeRange();
  });

  div.appendChild(top);

  var time_options = {
    min: 0,
    step: 0.125
  };

  var currentTime = new UINumber(time_options);
  var totalTime = new UINumber(time_options);

  var currentTimeStore = data.get("ui:currentTime");
  var totalTimeStore = data.get("ui:totalTime");

  // UI2StoreBind(view, datastore) {
  // 	view.onChange.do(function(v) {
  // 		datastore.value = view;
  // 	})

  // 	datastore.onChange.do(function(v) {
  // 		view.setValue = v;
  // 	})
  // }

  currentTime.onChange.do(function(value, done) {
    dispatcher.fire("time.update", value);
    // repaint();
  });

  totalTime.onChange.do(function(value, done) {
    totalTimeStore.value = value;
    repaint();
  });

  // Play Controls
  top.appendChild(currentTime.dom);
  top.appendChild(document.createTextNode("/")); // 0:00:00 / 0:10:00
  top.appendChild(totalTime.dom);
  top.appendChild(play_button.dom);
  top.appendChild(stop_button.dom);
  top.appendChild(range);

  var operations_div = document.createElement("div");
  style(operations_div, {
    marginTop: "4px"
    // borderBottom: '1px solid ' + Theme.b
  });
  top.appendChild(operations_div);
  // top.appendChild(document.createElement('br'));

  // open _alt
  var file_open = new IconButton(16, "folder_open_alt", "Open", dispatcher);
  style(file_open.dom, op_button_styles);
  operations_div.appendChild(file_open.dom);

  function populateOpen() {
    while (dropdown.length) {
      dropdown.remove(0);
    }

    var option;
    option = document.createElement("option");
    option.text = "New";
    option.value = "*new*";
    dropdown.add(option);

    option = document.createElement("option");
    option.text = "Import JSON";
    option.value = "*import*";
    dropdown.add(option);

    // Doesn't work
    // option = document.createElement('option');
    // option.text = 'Select File';
    // option.value = '*select*';
    // dropdown.add(option);

    option = document.createElement("option");
    option.text = "==Open==";
    option.disabled = true;
    option.selected = true;
    dropdown.add(option);

    var regex = new RegExp(STORAGE_PREFIX + "(.*)");
    for (var key in localStorage) {
      // console.log(key);

      var match = regex.exec(key);
      if (match) {
        option = document.createElement("option");
        option.text = match[1];

        dropdown.add(option);
      }
    }
  }

  // listen on other tabs
  window.addEventListener("storage", function(e) {
    var regex = new RegExp(STORAGE_PREFIX + "(.*)");
    if (regex.exec(e.key)) {
      populateOpen();
    }
  });

  dispatcher.on("save:done", populateOpen);

  var dropdown = document.createElement("select");

  style(dropdown, {
    position: "absolute",
    // right: 0,
    // margin: 0,
    opacity: 0,
    width: "16px",
    height: "16px"
    // zIndex: 1,
  });

  dropdown.addEventListener("change", function(e) {
    // console.log('changed', dropdown.length, dropdown.value);

    switch (dropdown.value) {
      case "*new*":
        dispatcher.fire("new");
        break;
      case "*import*":
        dispatcher.fire("import");
        break;
      case "*select*":
        dispatcher.fire("openfile");
        break;
      default:
        dispatcher.fire("open", dropdown.value);
        break;
    }
  });

  file_open.dom.insertBefore(dropdown, file_open.dom.firstChild);

  populateOpen();

  // // json import
  // var import_json = new IconButton(16, 'signin', 'Import JSON', dispatcher);
  // operations_div.appendChild(import_json.dom);
  // import_json.onClick(function() {
  // 	dispatcher.fire('import');
  // });

  // // new
  // var file_alt = new IconButton(16, 'file_alt', 'New', dispatcher);
  // operations_div.appendChild(file_alt.dom);

  // save
  var save = new IconButton(16, "save", "Save", dispatcher);
  style(save.dom, op_button_styles);
  operations_div.appendChild(save.dom);
  save.onClick(function() {
    dispatcher.fire("save");
  });

  // save as
  var save_as = new IconButton(16, "paste", "Save as", dispatcher);
  style(save_as.dom, op_button_styles);
  operations_div.appendChild(save_as.dom);
  save_as.onClick(function() {
    dispatcher.fire("save_as");
  });

  // download json (export)
  var download_alt = new IconButton(
    16,
    "download_alt",
    "Download / Export JSON to file",
    dispatcher
  );
  style(download_alt.dom, op_button_styles);
  operations_div.appendChild(download_alt.dom);
  download_alt.onClick(function() {
    dispatcher.fire("export");
  });

  var upload_alt = new IconButton(
    16,
    "upload_alt",
    "Load from file",
    dispatcher
  );
  style(upload_alt.dom, op_button_styles);
  operations_div.appendChild(upload_alt.dom);
  upload_alt.onClick(function() {
    dispatcher.fire("openfile");
  });

  var span = document.createElement("span");
  span.style.width = "20px";
  span.style.display = "inline-block";
  operations_div.appendChild(span);

  operations_div.appendChild(undo_button.dom);
  operations_div.appendChild(redo_button.dom);
  operations_div.appendChild(document.createElement("br"));

  // Cloud Download / Upload edit pencil

  /*
	// // show layer
	// var eye_open = new IconButton(16, 'eye_open', 'eye_open', dispatcher);
	// operations_div.appendChild(eye_open.dom);

	// // hide / disable layer
	// var eye_close = new IconButton(16, 'eye_close', 'eye_close', dispatcher);
	// operations_div.appendChild(eye_close.dom);


	// remove layer
	var minus = new IconButton(16, 'minus', 'minus', dispatcher);
	operations_div.appendChild(minus.dom);

	// check
	var ok = new IconButton(16, 'ok', 'ok', dispatcher);
	operations_div.appendChild(ok.dom);

	// cross
	var remove = new IconButton(16, 'remove', 'remove', dispatcher);
	operations_div.appendChild(remove.dom);

	*/

  // range.addEventListener('change', changeRange);

  function convertPercentToTime(t) {
    var min_time = 10 * 60; // 10 minutes
    min_time = data.get("ui:totalTime").value;
    var max_time = 1;
    var v = (Settings.width * 0.8) / (t * (max_time - min_time) + min_time);
    return v;
  }

  function convertTimeToPercent(v) {
    var min_time = 10 * 60; // 10 minutes
    min_time = data.get("ui:totalTime").value;
    var max_time = 1;
    var t = ((Settings.width * 0.8) / v - min_time) / (max_time - min_time);
    return t;
  }

  function changeRange() {
    dispatcher.fire("update.scale", Math.pow(100, -range.value));
  }

  var layer_uis = [],
    visible_layers = 0;
  var unused_layers = [];

  this.layers = layer_uis;

  this.setControlStatus = function(v) {
    playing = v;
    if (playing) {
      play_button.setIcon("pause");
      play_button.setTip("pause");
    } else {
      play_button.setIcon("play");
      play_button.setTip("play");
    }
  };

  this.setState = function(state) {
    layer_store = state;
    layers = layer_store.value;
    // layers = state;
    console.log(layer_uis.length, layers);
    var i, layer;
    for (i = 0; i < layers.length; i++) {
      layer = layers[i];

      if (!layer_uis[i]) {
        var layer_ui;
        if (unused_layers.length) {
          layer_ui = unused_layers.pop();
          layer_ui.dom.style.display = "block";
        } else {
          // new
          layer_ui = new ViewLayer(layer, dispatcher);
          layer_scroll.appendChild(layer_ui.dom);
        }
        layer_uis.push(layer_ui);
      }

      // layer_uis[i].setState(layer);
    }

    console.log(
      "Total layers (view, hidden, total)",
      layer_uis.length,
      unused_layers.length,
      layer_uis.length + unused_layers.length
    );
  };

  function repaint(s) {
    s = currentTimeStore.value;
    currentTime.setValue(s);
    totalTime.setValue(totalTimeStore.value);
    currentTime.paint();
    totalTime.paint();

    var i;

    s = s || 0;
    for (i = layer_uis.length; i-- > 0; ) {
      // quick hack
      if (i >= layers.length) {
        layer_uis[i].dom.style.display = "none";
        unused_layers.push(layer_uis.pop());
        continue;
      }

      layer_uis[i].setState(layers[i], layer_store.get(i));
      // layer_uis[i].setState('layers'+':'+i);
      layer_uis[i].repaint(s);
    }

    visible_layers = layer_uis.length;
  }

  this.repaint = repaint;
  this.setState(layer_store);

  this.scrollTo = function(x) {
    layer_scroll.scrollTop =
      x * (layer_scroll.scrollHeight - layer_scroll.clientHeight);
  };

  this.dom = div;

  repaint();
}

module.exports = LayerCabinet;

},{"./settings":4,"./theme":5,"./ui_icon_button":8,"./ui_number":9,"./utils":16,"./view_layer":17}],19:[function(require,module,exports){
var Settings = require("./settings"),
  Theme = require("./theme"),
  utils = require("./utils"),
  proxy_ctx = utils.proxy_ctx,
  Tweens = require("./util_tween"),
  handleDrag = require("./util_handle_drag"),
  ScrollCanvas = require("./view_time_scroller"),
  Canvas = require("./ui_canvas");
var LINE_HEIGHT = Settings.LINE_HEIGHT,
  DIAMOND_SIZE = Settings.DIAMOND_SIZE,
  TIME_SCROLLER_HEIGHT = 35,
  MARKER_TRACK_HEIGHT = 25,
  LEFT_PANE_WIDTH = Settings.LEFT_PANE_WIDTH,
  time_scale = Settings.time_scale,
  TOP = 10;

var frame_start = 0; // this is the current scroll position.

var width, height;

/*
 * This class contains the view for the right main section of timeliner
 */

// TODO
// dirty rendering
// drag block
// DON'T use time.update for everything

var tickMark1;
var tickMark2;
var tickMark3;

function time_scaled() {
  /*
   * Subdivison LOD
   * time_scale refers to number of pixels per unit
   * Eg. 1 inch - 60s, 1 inch - 60fps, 1 inch - 6 mins
   */
  var div = 60;

  tickMark1 = time_scale / div;
  tickMark2 = 2 * tickMark1;
  tickMark3 = 10 * tickMark1;
}

time_scaled();

/**************************/
// Timeline Panel
/**************************/

function TimelinePanel(data, dispatcher) {
  var dpr = window.devicePixelRatio;
  var canvas = document.createElement("canvas");

  var scrollTop = 0,
    scrollLeft = 0,
    SCROLL_HEIGHT;
  var layers = data.get("layers").value;

  this.scrollTo = function(s, y) {
    scrollTop = s * Math.max(layers.length * LINE_HEIGHT - SCROLL_HEIGHT, 0);
    repaint();
  };

  this.resize = function() {
    var h = Settings.height - TIME_SCROLLER_HEIGHT;
    dpr = window.devicePixelRatio;
    canvas.width = Settings.width * dpr;
    canvas.height = h * dpr;
    canvas.style.width = Settings.width + "px";
    canvas.style.height = h + "px";
    SCROLL_HEIGHT = Settings.height - TIME_SCROLLER_HEIGHT;
    scroll_canvas.setSize(Settings.width, TIME_SCROLLER_HEIGHT);
  };

  var div = document.createElement("div");

  var scroll_canvas = new Canvas(Settings.width, TIME_SCROLLER_HEIGHT);
  // data.addListener('ui', repaint );

  utils.style(canvas, {
    position: "absolute",
    top: TIME_SCROLLER_HEIGHT + "px",
    left: "0px"
  });

  utils.style(scroll_canvas.dom, {
    position: "absolute",
    top: "0px",
    left: "10px"
  });

  scroll_canvas.uses(new ScrollCanvas(dispatcher, data));

  div.appendChild(canvas);
  div.appendChild(scroll_canvas.dom);

  // this.dom = canvas;
  this.dom = div;
  this.resize();

  var ctx = canvas.getContext("2d");
  var ctx_wrap = proxy_ctx(ctx);

  var currentTime; // measured in seconds
  // technically it could be in frames or  have it in string format (0:00:00:1-60)

  var LEFT_GUTTER = 20;
  var i, x, y, il, j;

  var needsRepaint = false;
  var renderItems = [];

  function EasingRect(x1, y1, x2, y2, frame, frame2, values, layer, j) {
    var self = this;

    this.path = function() {
      ctx_wrap
        .beginPath()
        .rect(x1, y1, x2 - x1, y2 - y1)
        .closePath();
    };

    this.paint = function() {
      this.path();
      ctx.fillStyle = frame._color;
      ctx.fill();
    };

    this.mouseover = function() {
      canvas.style.cursor = "pointer"; // pointer move ew-resize
    };

    this.mouseout = function() {
      canvas.style.cursor = "default";
    };

    this.mousedrag = function(e) {
      var t1 = x_to_time(x1 + e.dx);
      t1 = Math.max(0, t1);
      // TODO limit moving to neighbours
      frame.time = t1;

      var t2 = x_to_time(x2 + e.dx);
      t2 = Math.max(0, t2);
      frame2.time = t2;

      // dispatcher.fire('time.update', t1);
    };
  }

  function Diamond(frame, y) {
    var x, y2;

    x = time_to_x(frame.time);
    y2 = y + LINE_HEIGHT * 0.5 - DIAMOND_SIZE / 2;

    var self = this;

    var isOver = false;

    this.path = function(ctx_wrap) {
      ctx_wrap
        .beginPath()
        .moveTo(x, y2)
        .lineTo(x + DIAMOND_SIZE / 2, y2 + DIAMOND_SIZE / 2)
        .lineTo(x, y2 + DIAMOND_SIZE)
        .lineTo(x - DIAMOND_SIZE / 2, y2 + DIAMOND_SIZE / 2)
        .closePath();
    };

    this.paint = function(ctx_wrap) {
      self.path(ctx_wrap);
      if (!isOver) ctx_wrap.fillStyle(Theme.c);
      else ctx_wrap.fillStyle("yellow"); // Theme.d

      ctx_wrap.fill().stroke();
    };

    this.mouseover = function() {
      isOver = true;
      canvas.style.cursor = "move"; // pointer move ew-resize
      self.paint(ctx_wrap);
    };

    this.mouseout = function() {
      isOver = false;
      canvas.style.cursor = "default";
      self.paint(ctx_wrap);
    };

    this.mousedrag = function(e) {
      var t = x_to_time(x + e.dx);
      t = Math.max(0, t);
      // TODO limit moving to neighbours
      frame.time = t;
      dispatcher.fire("time.update", t);
      // console.log('frame', frame);
      // console.log(s, format_friendly_seconds(s), this);
    };
  }

  function repaint() {
    needsRepaint = true;
  }

  function drawLayerContents() {
    renderItems = [];
    // horizontal Layer lines
    for (i = 0, il = layers.length; i <= il; i++) {
      ctx.strokeStyle = Theme.b;
      ctx.beginPath();
      y = i * LINE_HEIGHT;
      y = ~~y - 0.5;

      ctx_wrap
        .moveTo(0, y)
        .lineTo(width, y)
        .stroke();
    }

    var frame, frame2, j;

    // Draw Easing Rects
    for (i = 0; i < il; i++) {
      // check for keyframes
      var layer = layers[i];
      var values = layer.values;

      y = i * LINE_HEIGHT;

      for (j = 0; j < values.length - 1; j++) {
        frame = values[j];
        frame2 = values[j + 1];

        // Draw Tween Rect
        x = time_to_x(frame.time);
        var x2 = time_to_x(frame2.time);

        if (!frame.tween || frame.tween == "none") continue;

        var y1 = y + 2;
        var y2 = y + LINE_HEIGHT - 2;

        renderItems.push(new EasingRect(x, y1, x2, y2, frame, frame2));

        // // draw easing graph
        // var color = parseInt(frame._color.substring(1,7), 16);
        // color = 0xffffff ^ color;
        // color = color.toString(16);           // convert to hex
        // color = '#' + ('000000' + color).slice(-6);

        // ctx.strokeStyle = color;
        // var x3;
        // ctx.beginPath();
        // ctx.moveTo(x, y2);
        // var dy = y1 - y2;
        // var dx = x2 - x;

        // for (x3=x; x3 < x2; x3++) {
        // 	ctx.lineTo(x3, y2 + Tweens[frame.tween]((x3 - x)/dx) * dy);
        // }
        // ctx.stroke();
      }

      for (j = 0; j < values.length; j++) {
        // Dimonds
        frame = values[j];
        renderItems.push(new Diamond(frame, y));
      }
    }

    // render items
    var item;
    for (i = 0, il = renderItems.length; i < il; i++) {
      item = renderItems[i];
      item.paint(ctx_wrap);
    }
  }

  function setTimeScale() {
    var v = data.get("ui:timeScale").value;
    if (time_scale !== v) {
      time_scale = v;
      time_scaled();
    }
  }

  var over = null;
  var mousedownItem = null;

  function check() {
    var item;
    var last_over = over;
    // over = [];
    over = null;
    for (i = renderItems.length; i-- > 0; ) {
      item = renderItems[i];
      item.path(ctx_wrap);

      if (ctx.isPointInPath(pointer.x * dpr, pointer.y * dpr)) {
        // over.push(item);
        over = item;
        break;
      }
    }

    // clear old mousein
    if (last_over && last_over != over) {
      item = last_over;
      if (item.mouseout) item.mouseout();
    }

    if (over) {
      item = over;
      if (item.mouseover) item.mouseover();

      if (mousedown2) {
        mousedownItem = item;
      }
    }

    // console.log(pointer)
  }

  function pointerEvents() {
    if (!pointer) return;

    ctx_wrap
      .save()
      .scale(dpr, dpr)
      .translate(0, MARKER_TRACK_HEIGHT)
      .beginPath()
      .rect(0, 0, Settings.width, SCROLL_HEIGHT)
      .translate(-scrollLeft, -scrollTop)
      .clip()
      .run(check)
      .restore();
  }

  function _paint() {
    if (!needsRepaint) {
      pointerEvents();
      return;
    }

    scroll_canvas.repaint();

    setTimeScale();

    currentTime = data.get("ui:currentTime").value;
    frame_start = data.get("ui:scrollTime").value;

    /**************************/
    // background

    ctx.fillStyle = Theme.a;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(dpr, dpr);

    //

    ctx.lineWidth = 1; // .5, 1, 2

    width = Settings.width;
    height = Settings.height;

    var units = time_scale / tickMark1;
    var offsetUnits = (frame_start * time_scale) % units;

    var count = (width - LEFT_GUTTER + offsetUnits) / units;

    // console.log('time_scale', time_scale, 'tickMark1', tickMark1, 'units', units, 'offsetUnits', offsetUnits, frame_start);

    // time_scale = pixels to 1 second (40)
    // tickMark1 = marks per second (marks / s)
    // units = pixels to every mark (40)

    // labels only
    for (i = 0; i < count; i++) {
      x = i * units + LEFT_GUTTER - offsetUnits;

      // vertical lines
      ctx.strokeStyle = Theme.b;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();

      ctx.fillStyle = Theme.d;
      ctx.textAlign = "center";

      var t = (i * units - offsetUnits) / time_scale + frame_start;
      t = utils.format_friendly_seconds(t);
      ctx.fillText(t, x, 38);
    }

    units = time_scale / tickMark2;
    count = (width - LEFT_GUTTER + offsetUnits) / units;

    // marker lines - main
    for (i = 0; i < count; i++) {
      ctx.strokeStyle = Theme.c;
      ctx.beginPath();
      x = i * units + LEFT_GUTTER - offsetUnits;
      ctx.moveTo(x, MARKER_TRACK_HEIGHT - 0);
      ctx.lineTo(x, MARKER_TRACK_HEIGHT - 16);
      ctx.stroke();
    }

    var mul = tickMark3 / tickMark2;
    units = time_scale / tickMark3;
    count = (width - LEFT_GUTTER + offsetUnits) / units;

    // small ticks
    for (i = 0; i < count; i++) {
      if (i % mul === 0) continue;
      ctx.strokeStyle = Theme.c;
      ctx.beginPath();
      x = i * units + LEFT_GUTTER - offsetUnits;
      ctx.moveTo(x, MARKER_TRACK_HEIGHT - 0);
      ctx.lineTo(x, MARKER_TRACK_HEIGHT - 10);
      ctx.stroke();
    }

    // Encapsulate a scroll rect for the layers
    ctx_wrap
      .save()
      .translate(0, MARKER_TRACK_HEIGHT)
      .beginPath()
      .rect(0, 0, Settings.width, SCROLL_HEIGHT)
      .translate(-scrollLeft, -scrollTop)
      .clip()
      .run(drawLayerContents)
      .restore();

    // Current Marker / Cursor
    ctx.strokeStyle = "red"; // Theme.c
    x = (currentTime - frame_start) * time_scale + LEFT_GUTTER;

    var txt = utils.format_friendly_seconds(currentTime);
    var textWidth = ctx.measureText(txt).width;

    var base_line = MARKER_TRACK_HEIGHT - 5,
      half_rect = textWidth / 2 + 4;

    ctx.beginPath();
    ctx.moveTo(x, base_line);
    ctx.lineTo(x, height);
    ctx.stroke();

    ctx.fillStyle = "red"; // black
    ctx.textAlign = "center";
    ctx.beginPath();
    ctx.moveTo(x, base_line + 5);
    ctx.lineTo(x + 5, base_line);
    ctx.lineTo(x + half_rect, base_line);
    ctx.lineTo(x + half_rect, base_line - 14);
    ctx.lineTo(x - half_rect, base_line - 14);
    ctx.lineTo(x - half_rect, base_line);
    ctx.lineTo(x - 5, base_line);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.fillText(txt, x, base_line - 4);

    ctx.restore();

    needsRepaint = false;
    // pointerEvents();
  }

  function y_to_track(y) {
    if (y - MARKER_TRACK_HEIGHT < 0) return -1;
    return ((y - MARKER_TRACK_HEIGHT + scrollTop) / LINE_HEIGHT) | 0;
  }

  function x_to_time(x) {
    var units = time_scale / tickMark3;

    // return frame_start + (x - LEFT_GUTTER) / time_scale;

    return frame_start + (((x - LEFT_GUTTER) / units) | 0) / tickMark3;
  }

  function time_to_x(s) {
    var ds = s - frame_start;
    ds *= time_scale;
    ds += LEFT_GUTTER;

    return ds;
  }

  var me = this;
  this.repaint = repaint;
  this._paint = _paint;

  repaint();

  var mousedown = false,
    selection = false;

  var dragObject;
  var canvasBounds;

  document.addEventListener("mousemove", onMouseMove);

  canvas.addEventListener("dblclick", function(e) {
    canvasBounds = canvas.getBoundingClientRect();
    var mx = e.clientX - canvasBounds.left,
      my = e.clientY - canvasBounds.top;

    var track = y_to_track(my);
    var s = x_to_time(mx);

    dispatcher.fire("keyframe", layers[track], currentTime);
  });

  function onMouseMove(e) {
    canvasBounds = canvas.getBoundingClientRect();
    var mx = e.clientX - canvasBounds.left,
      my = e.clientY - canvasBounds.top;
    onPointerMove(mx, my);
  }

  var pointerdidMoved = false;
  var pointer = null;

  function onPointerMove(x, y) {
    if (mousedownItem) return;
    pointerdidMoved = true;
    pointer = { x: x, y: y };
  }

  canvas.addEventListener("mouseout", function() {
    pointer = null;
  });

  var mousedown2 = false,
    mouseDownThenMove = false;
  handleDrag(
    canvas,
    function down(e) {
      mousedown2 = true;
      pointer = {
        x: e.offsetx,
        y: e.offsety
      };
      pointerEvents();

      if (!mousedownItem) dispatcher.fire("time.update", x_to_time(e.offsetx));
      // Hit criteria
    },
    function move(e) {
      mousedown2 = false;
      if (mousedownItem) {
        mouseDownThenMove = true;
        if (mousedownItem.mousedrag) {
          mousedownItem.mousedrag(e);
        }
      } else {
        dispatcher.fire("time.update", x_to_time(e.offsetx));
      }
    },
    function up(e) {
      if (mouseDownThenMove) {
        dispatcher.fire("keyframe.move");
      } else {
        dispatcher.fire("time.update", x_to_time(e.offsetx));
      }
      mousedown2 = false;
      mousedownItem = null;
      mouseDownThenMove = false;
    }
  );

  this.setState = function(state) {
    layers = state.value;
    repaint();
  };
}

module.exports = TimelinePanel;

},{"./settings":4,"./theme":5,"./ui_canvas":7,"./util_handle_drag":13,"./util_tween":14,"./utils":16,"./view_time_scroller":20}],20:[function(require,module,exports){
var
	Theme = require('./theme'),
	utils = require('./utils'),
	proxy_ctx = utils.proxy_ctx,
	handleDrag = require('./util_handle_drag')
	;


function Rect() {
	
}

Rect.prototype.set = function(x, y, w, h, color, outline) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.color = color;
	this.outline = outline;
};

Rect.prototype.paint = function(ctx) {
	ctx.fillStyle = Theme.b;  // // 'yellow';
	ctx.strokeStyle = Theme.c;

	this.shape(ctx);

	ctx.stroke();
	ctx.fill();
};

Rect.prototype.shape = function(ctx) {
	ctx.beginPath();
	ctx.rect(this.x, this.y, this.w, this.h);
};

Rect.prototype.contains = function(x, y) {
	return x >= this.x && y >= this.y
	 && x <= this.x + this.w && y <= this.y + this.h;
};



function ScrollCanvas(dispatcher, data) {
	var width, height;

	this.setSize = function(w, h) {
		width = w;
		height = h;
	}

	var TOP_SCROLL_TRACK = 20;
	var MARGINS = 15;

	var scroller = {
		left: 0,
		grip_length: 0,
		k: 1
	};

	var scrollRect = new Rect();

	this.paint = function(ctx) {
		var totalTime = data.get('ui:totalTime').value;
		var scrollTime = data.get('ui:scrollTime').value;
		var currentTime = data.get('ui:currentTime').value;
		
		var pixels_per_second = data.get('ui:timeScale').value;

		ctx.save();

		var w = width - 2 * MARGINS;
		var h = 16; // TOP_SCROLL_TRACK;
		var h2 = h;


		ctx.clearRect(0, 0, width, height);
		ctx.translate(MARGINS, 5);

		// outline scroller
		ctx.beginPath();
		ctx.strokeStyle = Theme.b;
		ctx.rect(0, 0, w, h);
		ctx.stroke();
		
		var totalTimePixels = totalTime * pixels_per_second;
		var k = w / totalTimePixels;
		scroller.k = k;

		var grip_length = w * k;

		scroller.grip_length = grip_length;

		scroller.left = scrollTime / totalTime * w;
		
		scrollRect.set(scroller.left, 0, scroller.grip_length, h);
		scrollRect.paint(ctx);

		var r = currentTime / totalTime * w;		

		ctx.fillStyle =  Theme.c;
		ctx.lineWidth = 2;
		
		ctx.beginPath();
		
		// circle
		// ctx.arc(r, h2 / 2, h2 / 1.5, 0, Math.PI * 2);

		// line
		ctx.rect(r, 0, 2, h + 5);
		ctx.fill()

		ctx.fillText(currentTime && currentTime.toFixed(2), r, h + 14);
		// ctx.fillText(currentTime && currentTime.toFixed(3), 10, 10);
		ctx.fillText(totalTime, 300, 14);

		ctx.restore();
	}

	/** Handles dragging for scroll bar **/

	var draggingx = null;

	this.onDown = function(e) {
		// console.log('ondown', e);

		if (scrollRect.contains(e.offsetx - MARGINS, e.offsety -5)) {
			draggingx = scroller.left;
			return;
		}
		
		var totalTime = data.get('ui:totalTime').value;
		var pixels_per_second = data.get('ui:timeScale').value;
		var w = width - 2 * MARGINS;

		var t = (e.offsetx - MARGINS) / w * totalTime;
		// t = Math.max(0, t);

		// data.get('ui:currentTime').value = t;
		dispatcher.fire('time.update', t);
		
	};

	this.onMove = function move(e) {
		if (draggingx != null) {
			var totalTime = data.get('ui:totalTime').value;
			var w = width - 2 * MARGINS;
			
			dispatcher.fire('update.scrollTime', 
				(draggingx + e.dx)  / w * totalTime);

		} else {
			this.onDown(e);	
		}
		
	};

	this.onUp = function(e) {
		draggingx = null;
	}

	/*** End handling for scrollbar ***/
}

module.exports = ScrollCanvas;
},{"./theme":5,"./util_handle_drag":13,"./utils":16}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZG8uanMvZG8uanMiLCJwYWNrYWdlLmpzb24iLCJzcmMvZm9udC5qc29uIiwic3JjL3NldHRpbmdzLmpzIiwic3JjL3RoZW1lLmpzIiwic3JjL3RpbWVsaW5lci5qcyIsInNyYy91aV9jYW52YXMuanMiLCJzcmMvdWlfaWNvbl9idXR0b24uanMiLCJzcmMvdWlfbnVtYmVyLmpzIiwic3JjL3VpX3Njcm9sbGJhci5qcyIsInNyYy91dGlsX2RhdGFzdG9yZS5qcyIsInNyYy91dGlsX2Rpc3BhdGNoZXIuanMiLCJzcmMvdXRpbF9oYW5kbGVfZHJhZy5qcyIsInNyYy91dGlsX3R3ZWVuLmpzIiwic3JjL3V0aWxfdW5kby5qcyIsInNyYy91dGlscy5qcyIsInNyYy92aWV3X2xheWVyLmpzIiwic3JjL3ZpZXdfbGF5ZXJfY2FiaW5ldC5qcyIsInNyYy92aWV3X3BhbmVsLmpzIiwic3JjL3ZpZXdfdGltZV9zY3JvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6cENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMza0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIERvKHBhcmVudCkge1xuXHR2YXIgbGlzdGVuZXJzID0gW107XG5cdHRoaXMuZG8gPSBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdGxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcblx0fTtcblx0dGhpcy51bmRvID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRsaXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKSwgMSk7XG5cdH07XG5cdHRoaXMuZmlyZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGZvciAodmFyIHYgPSAwOyB2IDwgbGlzdGVuZXJzLmxlbmd0aDsgdisrKSB7XG5cdFx0XHRsaXN0ZW5lcnNbdl0uYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xuXHRcdH1cblx0fTtcbn1cblxuaWYgKHR5cGVvZihtb2R1bGUpID09PSAnb2JqZWN0JykgbW9kdWxlLmV4cG9ydHMgPSBEbztcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJ2ZXJzaW9uXCI6IFwiMS41LjBcIlxufSIsIm1vZHVsZS5leHBvcnRzPXtcblx0XCJ1bml0c1BlckVtXCI6IDE3OTIsXG5cdFwiYXNjZW5kZXJcIjogMTUzNixcblx0XCJkZXNjZW5kZXJcIjogLTI1Nixcblx0XCJmb250c1wiOiB7XG5cdFx0XCJwbHVzXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE0MDgsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxNDA4LDgwMCBDLDE0MDgsODUzLDEzNjUsODk2LDEzMTIsODk2IEwsODk2LDg5NiBMLDg5NiwxMzEyIEMsODk2LDEzNjUsODUzLDE0MDgsODAwLDE0MDggTCw2MDgsMTQwOCBDLDU1NSwxNDA4LDUxMiwxMzY1LDUxMiwxMzEyIEwsNTEyLDg5NiBMLDk2LDg5NiBDLDQzLDg5NiwwLDg1MywwLDgwMCBMLDAsNjA4IEMsMCw1NTUsNDMsNTEyLDk2LDUxMiBMLDUxMiw1MTIgTCw1MTIsOTYgQyw1MTIsNDMsNTU1LDAsNjA4LDAgTCw4MDAsMCBDLDg1MywwLDg5Niw0Myw4OTYsOTYgTCw4OTYsNTEyIEwsMTMxMiw1MTIgQywxMzY1LDUxMiwxNDA4LDU1NSwxNDA4LDYwOCBaXCJcblx0XHR9LFxuXHRcdFwibWludXNcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTQwOCxcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDE0MDgsODAwIEMsMTQwOCw4NTMsMTM2NSw4OTYsMTMxMiw4OTYgTCw5Niw4OTYgQyw0Myw4OTYsMCw4NTMsMCw4MDAgTCwwLDYwOCBDLDAsNTU1LDQzLDUxMiw5Niw1MTIgTCwxMzEyLDUxMiBDLDEzNjUsNTEyLDE0MDgsNTU1LDE0MDgsNjA4IFpcIlxuXHRcdH0sXG5cdFx0XCJva1wiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNzkyLFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTY3MSw5NzAgQywxNjcxLDk5NSwxNjYxLDEwMjAsMTY0MywxMDM4IEwsMTUwNywxMTc0IEMsMTQ4OSwxMTkyLDE0NjQsMTIwMiwxNDM5LDEyMDIgQywxNDE0LDEyMDIsMTM4OSwxMTkyLDEzNzEsMTE3NCBMLDcxNSw1MTcgTCw0MjEsODEyIEMsNDAzLDgzMCwzNzgsODQwLDM1Myw4NDAgQywzMjgsODQwLDMwMyw4MzAsMjg1LDgxMiBMLDE0OSw2NzYgQywxMzEsNjU4LDEyMSw2MzMsMTIxLDYwOCBDLDEyMSw1ODMsMTMxLDU1OCwxNDksNTQwIEwsNTExLDE3OCBMLDY0Nyw0MiBDLDY2NSwyNCw2OTAsMTQsNzE1LDE0IEMsNzQwLDE0LDc2NSwyNCw3ODMsNDIgTCw5MTksMTc4IEwsMTY0Myw5MDIgQywxNjYxLDkyMCwxNjcxLDk0NSwxNjcxLDk3MCBaXCJcblx0XHR9LFxuXHRcdFwicmVtb3ZlXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE0MDgsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxMjk4LDIxNCBDLDEyOTgsMjM5LDEyODgsMjY0LDEyNzAsMjgyIEwsOTc2LDU3NiBMLDEyNzAsODcwIEMsMTI4OCw4ODgsMTI5OCw5MTMsMTI5OCw5MzggQywxMjk4LDk2MywxMjg4LDk4OCwxMjcwLDEwMDYgTCwxMTM0LDExNDIgQywxMTE2LDExNjAsMTA5MSwxMTcwLDEwNjYsMTE3MCBDLDEwNDEsMTE3MCwxMDE2LDExNjAsOTk4LDExNDIgTCw3MDQsODQ4IEwsNDEwLDExNDIgQywzOTIsMTE2MCwzNjcsMTE3MCwzNDIsMTE3MCBDLDMxNywxMTcwLDI5MiwxMTYwLDI3NCwxMTQyIEwsMTM4LDEwMDYgQywxMjAsOTg4LDExMCw5NjMsMTEwLDkzOCBDLDExMCw5MTMsMTIwLDg4OCwxMzgsODcwIEwsNDMyLDU3NiBMLDEzOCwyODIgQywxMjAsMjY0LDExMCwyMzksMTEwLDIxNCBDLDExMCwxODksMTIwLDE2NCwxMzgsMTQ2IEwsMjc0LDEwIEMsMjkyLC04LDMxNywtMTgsMzQyLC0xOCBDLDM2NywtMTgsMzkyLC04LDQxMCwxMCBMLDcwNCwzMDQgTCw5OTgsMTAgQywxMDE2LC04LDEwNDEsLTE4LDEwNjYsLTE4IEMsMTA5MSwtMTgsMTExNiwtOCwxMTM0LDEwIEwsMTI3MCwxNDYgQywxMjg4LDE2NCwxMjk4LDE4OSwxMjk4LDIxNCBaXCJcblx0XHR9LFxuXHRcdFwiem9vbV9pblwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNjY0LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTAyNCw3MzYgQywxMDI0LDc1MywxMDA5LDc2OCw5OTIsNzY4IEwsNzY4LDc2OCBMLDc2OCw5OTIgQyw3NjgsMTAwOSw3NTMsMTAyNCw3MzYsMTAyNCBMLDY3MiwxMDI0IEMsNjU1LDEwMjQsNjQwLDEwMDksNjQwLDk5MiBMLDY0MCw3NjggTCw0MTYsNzY4IEMsMzk5LDc2OCwzODQsNzUzLDM4NCw3MzYgTCwzODQsNjcyIEMsMzg0LDY1NSwzOTksNjQwLDQxNiw2NDAgTCw2NDAsNjQwIEwsNjQwLDQxNiBDLDY0MCwzOTksNjU1LDM4NCw2NzIsMzg0IEwsNzM2LDM4NCBDLDc1MywzODQsNzY4LDM5OSw3NjgsNDE2IEwsNzY4LDY0MCBMLDk5Miw2NDAgQywxMDA5LDY0MCwxMDI0LDY1NSwxMDI0LDY3MiBNLDExNTIsNzA0IEMsMTE1Miw0NTcsOTUxLDI1Niw3MDQsMjU2IEMsNDU3LDI1NiwyNTYsNDU3LDI1Niw3MDQgQywyNTYsOTUxLDQ1NywxMTUyLDcwNCwxMTUyIEMsOTUxLDExNTIsMTE1Miw5NTEsMTE1Miw3MDQgTSwxNjY0LC0xMjggQywxNjY0LC05NCwxNjUwLC02MSwxNjI3LC0zOCBMLDEyODQsMzA1IEMsMTM2NSw0MjIsMTQwOCw1NjIsMTQwOCw3MDQgQywxNDA4LDEwOTMsMTA5MywxNDA4LDcwNCwxNDA4IEMsMzE1LDE0MDgsMCwxMDkzLDAsNzA0IEMsMCwzMTUsMzE1LDAsNzA0LDAgQyw4NDYsMCw5ODYsNDMsMTEwMywxMjQgTCwxNDQ2LC0yMTggQywxNDY5LC0yNDIsMTUwMiwtMjU2LDE1MzYsLTI1NiBDLDE2MDcsLTI1NiwxNjY0LC0xOTksMTY2NCwtMTI4IFpcIlxuXHRcdH0sXG5cdFx0XCJ6b29tX291dFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNjY0LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTAyNCw3MzYgQywxMDI0LDc1MywxMDA5LDc2OCw5OTIsNzY4IEwsNDE2LDc2OCBDLDM5OSw3NjgsMzg0LDc1MywzODQsNzM2IEwsMzg0LDY3MiBDLDM4NCw2NTUsMzk5LDY0MCw0MTYsNjQwIEwsOTkyLDY0MCBDLDEwMDksNjQwLDEwMjQsNjU1LDEwMjQsNjcyIE0sMTE1Miw3MDQgQywxMTUyLDQ1Nyw5NTEsMjU2LDcwNCwyNTYgQyw0NTcsMjU2LDI1Niw0NTcsMjU2LDcwNCBDLDI1Niw5NTEsNDU3LDExNTIsNzA0LDExNTIgQyw5NTEsMTE1MiwxMTUyLDk1MSwxMTUyLDcwNCBNLDE2NjQsLTEyOCBDLDE2NjQsLTk0LDE2NTAsLTYxLDE2MjcsLTM4IEwsMTI4NCwzMDUgQywxMzY1LDQyMiwxNDA4LDU2MiwxNDA4LDcwNCBDLDE0MDgsMTA5MywxMDkzLDE0MDgsNzA0LDE0MDggQywzMTUsMTQwOCwwLDEwOTMsMCw3MDQgQywwLDMxNSwzMTUsMCw3MDQsMCBDLDg0NiwwLDk4Niw0MywxMTAzLDEyNCBMLDE0NDYsLTIxOCBDLDE0NjksLTI0MiwxNTAyLC0yNTYsMTUzNiwtMjU2IEMsMTYwNywtMjU2LDE2NjQsLTE5OSwxNjY0LC0xMjggWlwiXG5cdFx0fSxcblx0XHRcImNvZ1wiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNTM2LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTAyNCw2NDAgQywxMDI0LDQ5OSw5MDksMzg0LDc2OCwzODQgQyw2MjcsMzg0LDUxMiw0OTksNTEyLDY0MCBDLDUxMiw3ODEsNjI3LDg5Niw3NjgsODk2IEMsOTA5LDg5NiwxMDI0LDc4MSwxMDI0LDY0MCBNLDE1MzYsNzQ5IEMsMTUzNiw3NjYsMTUyNCw3ODIsMTUwNyw3ODUgTCwxMzI0LDgxMyBDLDEzMTQsODQ2LDEzMDAsODc5LDEyODMsOTExIEMsMTMxNyw5NTgsMTM1NCwxMDAyLDEzODgsMTA0OCBDLDEzOTMsMTA1NSwxMzk2LDEwNjIsMTM5NiwxMDcxIEMsMTM5NiwxMDc5LDEzOTQsMTA4NywxMzg5LDEwOTMgQywxMzQ3LDExNTIsMTI3NywxMjE0LDEyMjQsMTI2MyBDLDEyMTcsMTI2OSwxMjA4LDEyNzMsMTE5OSwxMjczIEMsMTE5MCwxMjczLDExODEsMTI3MCwxMTc1LDEyNjQgTCwxMDMzLDExNTcgQywxMDA0LDExNzIsOTc0LDExODQsOTQzLDExOTQgTCw5MTUsMTM3OCBDLDkxMywxMzk1LDg5NywxNDA4LDg3OSwxNDA4IEwsNjU3LDE0MDggQyw2MzksMTQwOCw2MjUsMTM5Niw2MjEsMTM4MCBDLDYwNSwxMzIwLDU5OSwxMjU1LDU5MiwxMTk0IEMsNTYxLDExODQsNTMwLDExNzEsNTAxLDExNTYgTCwzNjMsMTI2MyBDLDM1NSwxMjY5LDM0NiwxMjczLDMzNywxMjczIEMsMzAzLDEyNzMsMTY4LDExMjcsMTQ0LDEwOTQgQywxMzksMTA4NywxMzUsMTA4MCwxMzUsMTA3MSBDLDEzNSwxMDYyLDEzOSwxMDU0LDE0NSwxMDQ3IEMsMTgyLDEwMDIsMjE4LDk1NywyNTIsOTA5IEMsMjM2LDg3OSwyMjMsODQ5LDIxMyw4MTcgTCwyNyw3ODkgQywxMiw3ODYsMCw3NjgsMCw3NTMgTCwwLDUzMSBDLDAsNTE0LDEyLDQ5OCwyOSw0OTUgTCwyMTIsNDY4IEMsMjIyLDQzNCwyMzYsNDAxLDI1MywzNjkgQywyMTksMzIyLDE4MiwyNzgsMTQ4LDIzMiBDLDE0MywyMjUsMTQwLDIxOCwxNDAsMjA5IEMsMTQwLDIwMSwxNDIsMTkzLDE0NywxODYgQywxODksMTI4LDI1OSw2NiwzMTIsMTggQywzMTksMTEsMzI4LDcsMzM3LDcgQywzNDYsNywzNTUsMTAsMzYyLDE2IEwsNTAzLDEyMyBDLDUzMiwxMDgsNTYyLDk2LDU5Myw4NiBMLDYyMSwtOTggQyw2MjMsLTExNSw2MzksLTEyOCw2NTcsLTEyOCBMLDg3OSwtMTI4IEMsODk3LC0xMjgsOTExLC0xMTYsOTE1LC0xMDAgQyw5MzEsLTQwLDkzNywyNSw5NDQsODYgQyw5NzUsOTYsMTAwNiwxMDksMTAzNSwxMjQgTCwxMTczLDE2IEMsMTE4MSwxMSwxMTkwLDcsMTE5OSw3IEMsMTIzMyw3LDEzNjgsMTU0LDEzOTIsMTg2IEMsMTM5OCwxOTMsMTQwMSwyMDAsMTQwMSwyMDkgQywxNDAxLDIxOCwxMzk3LDIyNywxMzkxLDIzNCBDLDEzNTQsMjc5LDEzMTgsMzIzLDEyODQsMzcyIEMsMTMwMCw0MDEsMTMxMiw0MzEsMTMyMyw0NjMgTCwxNTA4LDQ5MSBDLDE1MjQsNDk0LDE1MzYsNTEyLDE1MzYsNTI3IFpcIlxuXHRcdH0sXG5cdFx0XCJ0cmFzaFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNDA4LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sNTEyLDgwMCBDLDUxMiw4MTgsNDk4LDgzMiw0ODAsODMyIEwsNDE2LDgzMiBDLDM5OCw4MzIsMzg0LDgxOCwzODQsODAwIEwsMzg0LDIyNCBDLDM4NCwyMDYsMzk4LDE5Miw0MTYsMTkyIEwsNDgwLDE5MiBDLDQ5OCwxOTIsNTEyLDIwNiw1MTIsMjI0IE0sNzY4LDgwMCBDLDc2OCw4MTgsNzU0LDgzMiw3MzYsODMyIEwsNjcyLDgzMiBDLDY1NCw4MzIsNjQwLDgxOCw2NDAsODAwIEwsNjQwLDIyNCBDLDY0MCwyMDYsNjU0LDE5Miw2NzIsMTkyIEwsNzM2LDE5MiBDLDc1NCwxOTIsNzY4LDIwNiw3NjgsMjI0IE0sMTAyNCw4MDAgQywxMDI0LDgxOCwxMDEwLDgzMiw5OTIsODMyIEwsOTI4LDgzMiBDLDkxMCw4MzIsODk2LDgxOCw4OTYsODAwIEwsODk2LDIyNCBDLDg5NiwyMDYsOTEwLDE5Miw5MjgsMTkyIEwsOTkyLDE5MiBDLDEwMTAsMTkyLDEwMjQsMjA2LDEwMjQsMjI0IE0sMTE1Miw3NiBDLDExNTIsMjgsMTEyNSwwLDExMjAsMCBMLDI4OCwwIEMsMjgzLDAsMjU2LDI4LDI1Niw3NiBMLDI1NiwxMDI0IEwsMTE1MiwxMDI0IEwsMTE1Miw3NiBNLDQ4MCwxMTUyIEwsNTI5LDEyNjkgQyw1MzIsMTI3Myw1NDAsMTI3OSw1NDYsMTI4MCBMLDg2MywxMjgwIEMsODY4LDEyNzksODc3LDEyNzMsODgwLDEyNjkgTCw5MjgsMTE1MiBNLDE0MDgsMTEyMCBDLDE0MDgsMTEzOCwxMzk0LDExNTIsMTM3NiwxMTUyIEwsMTA2NywxMTUyIEwsOTk3LDEzMTkgQyw5NzcsMTM2OCw5MTcsMTQwOCw4NjQsMTQwOCBMLDU0NCwxNDA4IEMsNDkxLDE0MDgsNDMxLDEzNjgsNDExLDEzMTkgTCwzNDEsMTE1MiBMLDMyLDExNTIgQywxNCwxMTUyLDAsMTEzOCwwLDExMjAgTCwwLDEwNTYgQywwLDEwMzgsMTQsMTAyNCwzMiwxMDI0IEwsMTI4LDEwMjQgTCwxMjgsNzIgQywxMjgsLTM4LDIwMCwtMTI4LDI4OCwtMTI4IEwsMTEyMCwtMTI4IEMsMTIwOCwtMTI4LDEyODAsLTM0LDEyODAsNzYgTCwxMjgwLDEwMjQgTCwxMzc2LDEwMjQgQywxMzk0LDEwMjQsMTQwOCwxMDM4LDE0MDgsMTA1NiBaXCJcblx0XHR9LFxuXHRcdFwiZmlsZV9hbHRcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDE0NjgsMTE1NiBMLDExNTYsMTQ2OCBDLDExMTksMTUwNSwxMDQ1LDE1MzYsOTkyLDE1MzYgTCw5NiwxNTM2IEMsNDMsMTUzNiwwLDE0OTMsMCwxNDQwIEwsMCwtMTYwIEMsMCwtMjEzLDQzLC0yNTYsOTYsLTI1NiBMLDE0NDAsLTI1NiBDLDE0OTMsLTI1NiwxNTM2LC0yMTMsMTUzNiwtMTYwIEwsMTUzNiw5OTIgQywxNTM2LDEwNDUsMTUwNSwxMTE5LDE0NjgsMTE1NiBNLDEwMjQsMTQwMCBDLDEwNDEsMTM5NCwxMDU4LDEzODUsMTA2NSwxMzc4IEwsMTM3OCwxMDY1IEMsMTM4NSwxMDU4LDEzOTQsMTA0MSwxNDAwLDEwMjQgTCwxMDI0LDEwMjQgTSwxNDA4LC0xMjggTCwxMjgsLTEyOCBMLDEyOCwxNDA4IEwsODk2LDE0MDggTCw4OTYsOTkyIEMsODk2LDkzOSw5MzksODk2LDk5Miw4OTYgTCwxNDA4LDg5NiBaXCJcblx0XHR9LFxuXHRcdFwiZG93bmxvYWRfYWx0XCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE2NjQsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxMjgwLDE5MiBDLDEyODAsMTU3LDEyNTEsMTI4LDEyMTYsMTI4IEMsMTE4MSwxMjgsMTE1MiwxNTcsMTE1MiwxOTIgQywxMTUyLDIyNywxMTgxLDI1NiwxMjE2LDI1NiBDLDEyNTEsMjU2LDEyODAsMjI3LDEyODAsMTkyIE0sMTUzNiwxOTIgQywxNTM2LDE1NywxNTA3LDEyOCwxNDcyLDEyOCBDLDE0MzcsMTI4LDE0MDgsMTU3LDE0MDgsMTkyIEMsMTQwOCwyMjcsMTQzNywyNTYsMTQ3MiwyNTYgQywxNTA3LDI1NiwxNTM2LDIyNywxNTM2LDE5MiBNLDE2NjQsNDE2IEMsMTY2NCw0NjksMTYyMSw1MTIsMTU2OCw1MTIgTCwxMTA0LDUxMiBMLDk2OCwzNzYgQyw5MzEsMzQwLDg4MywzMjAsODMyLDMyMCBDLDc4MSwzMjAsNzMzLDM0MCw2OTYsMzc2IEwsNTYxLDUxMiBMLDk2LDUxMiBDLDQzLDUxMiwwLDQ2OSwwLDQxNiBMLDAsOTYgQywwLDQzLDQzLDAsOTYsMCBMLDE1NjgsMCBDLDE2MjEsMCwxNjY0LDQzLDE2NjQsOTYgTSwxMzM5LDk4NSBDLDEzMjksMTAwOCwxMzA2LDEwMjQsMTI4MCwxMDI0IEwsMTAyNCwxMDI0IEwsMTAyNCwxNDcyIEMsMTAyNCwxNTA3LDk5NSwxNTM2LDk2MCwxNTM2IEwsNzA0LDE1MzYgQyw2NjksMTUzNiw2NDAsMTUwNyw2NDAsMTQ3MiBMLDY0MCwxMDI0IEwsMzg0LDEwMjQgQywzNTgsMTAyNCwzMzUsMTAwOCwzMjUsOTg1IEMsMzE1LDk2MSwzMjAsOTMzLDMzOSw5MTUgTCw3ODcsNDY3IEMsNzk5LDQ1NCw4MTYsNDQ4LDgzMiw0NDggQyw4NDgsNDQ4LDg2NSw0NTQsODc3LDQ2NyBMLDEzMjUsOTE1IEMsMTM0NCw5MzMsMTM0OSw5NjEsMTMzOSw5ODUgWlwiXG5cdFx0fSxcblx0XHRcInJlcGVhdFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNTM2LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTUzNiwxMjgwIEMsMTUzNiwxMzA2LDE1MjAsMTMyOSwxNDk3LDEzMzkgQywxNDczLDEzNDksMTQ0NSwxMzQ0LDE0MjcsMTMyNSBMLDEyOTcsMTE5NiBDLDExNTYsMTMyOSw5NjUsMTQwOCw3NjgsMTQwOCBDLDM0NSwxNDA4LDAsMTA2MywwLDY0MCBDLDAsMjE3LDM0NSwtMTI4LDc2OCwtMTI4IEMsOTk3LC0xMjgsMTIxMywtMjcsMTM1OSwxNDkgQywxMzY5LDE2MiwxMzY5LDE4MSwxMzU3LDE5MiBMLDEyMjAsMzMwIEMsMTIxMywzMzYsMTIwNCwzMzksMTE5NSwzMzkgQywxMTg2LDMzOCwxMTc3LDMzNCwxMTcyLDMyNyBDLDEwNzQsMjAwLDkyNywxMjgsNzY4LDEyOCBDLDQ4NiwxMjgsMjU2LDM1OCwyNTYsNjQwIEMsMjU2LDkyMiw0ODYsMTE1Miw3NjgsMTE1MiBDLDg5OSwxMTUyLDEwMjMsMTEwMiwxMTE3LDEwMTUgTCw5NzksODc3IEMsOTYwLDg1OSw5NTUsODMxLDk2NSw4MDggQyw5NzUsNzg0LDk5OCw3NjgsMTAyNCw3NjggTCwxNDcyLDc2OCBDLDE1MDcsNzY4LDE1MzYsNzk3LDE1MzYsODMyIFpcIlxuXHRcdH0sXG5cdFx0XCJwZW5jaWxcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDM2MywwIEwsMjU2LDAgTCwyNTYsMTI4IEwsMTI4LDEyOCBMLDEyOCwyMzUgTCwyMTksMzI2IEwsNDU0LDkxIE0sODg2LDkyOCBDLDg4Niw5MjIsODg0LDkxNiw4NzksOTExIEwsMzM3LDM2OSBDLDMzMiwzNjQsMzI2LDM2MiwzMjAsMzYyIEMsMzA3LDM2MiwyOTgsMzcxLDI5OCwzODQgQywyOTgsMzkwLDMwMCwzOTYsMzA1LDQwMSBMLDg0Nyw5NDMgQyw4NTIsOTQ4LDg1OCw5NTAsODY0LDk1MCBDLDg3Nyw5NTAsODg2LDk0MSw4ODYsOTI4IE0sODMyLDExMjAgTCwwLDI4OCBMLDAsLTEyOCBMLDQxNiwtMTI4IEwsMTI0OCw3MDQgTSwxNTE1LDEwMjQgQywxNTE1LDEwNTgsMTUwMSwxMDkxLDE0NzgsMTExNSBMLDEyNDMsMTM0OSBDLDEyMTksMTM3MywxMTg2LDEzODcsMTE1MiwxMzg3IEMsMTExOCwxMzg3LDEwODUsMTM3MywxMDYyLDEzNDkgTCw4OTYsMTE4NCBMLDEzMTIsNzY4IEwsMTQ3OCw5MzQgQywxNTAxLDk1NywxNTE1LDk5MCwxNTE1LDEwMjQgWlwiXG5cdFx0fSxcblx0XHRcImVkaXRcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTc5Mixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDg4OCwzNTIgTCw4MzIsMzUyIEwsODMyLDQ0OCBMLDczNiw0NDggTCw3MzYsNTA0IEwsODUyLDYyMCBMLDEwMDQsNDY4IE0sMTMyOCwxMDcyIEMsMTMzNywxMDYzLDEzMzYsMTA0OCwxMzI3LDEwMzkgTCw5NzcsNjg5IEMsOTY4LDY4MCw5NTMsNjc5LDk0NCw2ODggQyw5MzUsNjk3LDkzNiw3MTIsOTQ1LDcyMSBMLDEyOTUsMTA3MSBDLDEzMDQsMTA4MCwxMzE5LDEwODEsMTMyOCwxMDcyIE0sMTQwOCw0NzggQywxNDA4LDQ5MSwxNDAwLDUwMiwxMzg4LDUwNyBDLDEzNzYsNTEyLDEzNjMsNTEwLDEzNTMsNTAwIEwsMTI4OSw0MzYgQywxMjgzLDQzMCwxMjgwLDQyMiwxMjgwLDQxNCBMLDEyODAsMjg4IEMsMTI4MCwyMDAsMTIwOCwxMjgsMTEyMCwxMjggTCwyODgsMTI4IEMsMjAwLDEyOCwxMjgsMjAwLDEyOCwyODggTCwxMjgsMTEyMCBDLDEyOCwxMjA4LDIwMCwxMjgwLDI4OCwxMjgwIEwsMTEyMCwxMjgwIEMsMTEzNSwxMjgwLDExNTAsMTI3OCwxMTY1LDEyNzQgQywxMTc2LDEyNzAsMTE4OCwxMjczLDExOTcsMTI4MiBMLDEyNDYsMTMzMSBDLDEyNTQsMTMzOSwxMjU3LDEzNDksMTI1NSwxMzYwIEMsMTI1MywxMzcwLDEyNDYsMTM3OSwxMjM3LDEzODMgQywxMjAwLDE0MDAsMTE2MCwxNDA4LDExMjAsMTQwOCBMLDI4OCwxNDA4IEMsMTI5LDE0MDgsMCwxMjc5LDAsMTEyMCBMLDAsMjg4IEMsMCwxMjksMTI5LDAsMjg4LDAgTCwxMTIwLDAgQywxMjc5LDAsMTQwOCwxMjksMTQwOCwyODggTSwxMzEyLDEyMTYgTCw2NDAsNTQ0IEwsNjQwLDI1NiBMLDkyOCwyNTYgTCwxNjAwLDkyOCBNLDE3NTYsMTA4NCBDLDE3OTMsMTEyMSwxNzkzLDExODMsMTc1NiwxMjIwIEwsMTYwNCwxMzcyIEMsMTU2NywxNDA5LDE1MDUsMTQwOSwxNDY4LDEzNzIgTCwxMzc2LDEyODAgTCwxNjY0LDk5MiBMLDE3NTYsMTA4NCBaXCJcblx0XHR9LFxuXHRcdFwicGxheVwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNDA4LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTM4NCw2MDkgQywxNDE1LDYyNiwxNDE1LDY1NCwxMzg0LDY3MSBMLDU2LDE0MDkgQywyNSwxNDI2LDAsMTQxMSwwLDEzNzYgTCwwLC05NiBDLDAsLTEzMSwyNSwtMTQ2LDU2LC0xMjkgWlwiXG5cdFx0fSxcblx0XHRcInBhdXNlXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE1MzYsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxNTM2LDEzNDQgQywxNTM2LDEzNzksMTUwNywxNDA4LDE0NzIsMTQwOCBMLDk2MCwxNDA4IEMsOTI1LDE0MDgsODk2LDEzNzksODk2LDEzNDQgTCw4OTYsLTY0IEMsODk2LC05OSw5MjUsLTEyOCw5NjAsLTEyOCBMLDE0NzIsLTEyOCBDLDE1MDcsLTEyOCwxNTM2LC05OSwxNTM2LC02NCBNLDY0MCwxMzQ0IEMsNjQwLDEzNzksNjExLDE0MDgsNTc2LDE0MDggTCw2NCwxNDA4IEMsMjksMTQwOCwwLDEzNzksMCwxMzQ0IEwsMCwtNjQgQywwLC05OSwyOSwtMTI4LDY0LC0xMjggTCw1NzYsLTEyOCBDLDYxMSwtMTI4LDY0MCwtOTksNjQwLC02NCBaXCJcblx0XHR9LFxuXHRcdFwic3RvcFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNTM2LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTUzNiwxMzQ0IEMsMTUzNiwxMzc5LDE1MDcsMTQwOCwxNDcyLDE0MDggTCw2NCwxNDA4IEMsMjksMTQwOCwwLDEzNzksMCwxMzQ0IEwsMCwtNjQgQywwLC05OSwyOSwtMTI4LDY0LC0xMjggTCwxNDcyLC0xMjggQywxNTA3LC0xMjgsMTUzNiwtOTksMTUzNiwtNjQgWlwiXG5cdFx0fSxcblx0XHRcInJlc2l6ZV9mdWxsXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE1MzYsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSw3NTUsNDgwIEMsNzU1LDQ4OCw3NTEsNDk3LDc0NSw1MDMgTCw2MzEsNjE3IEMsNjI1LDYyMyw2MTYsNjI3LDYwOCw2MjcgQyw2MDAsNjI3LDU5MSw2MjMsNTg1LDYxNyBMLDI1MywyODUgTCwxMDksNDI5IEMsOTcsNDQxLDgxLDQ0OCw2NCw0NDggQywyOSw0NDgsMCw0MTksMCwzODQgTCwwLC02NCBDLDAsLTk5LDI5LC0xMjgsNjQsLTEyOCBMLDUxMiwtMTI4IEMsNTQ3LC0xMjgsNTc2LC05OSw1NzYsLTY0IEMsNTc2LC00Nyw1NjksLTMxLDU1NywtMTkgTCw0MTMsMTI1IEwsNzQ1LDQ1NyBDLDc1MSw0NjMsNzU1LDQ3Miw3NTUsNDgwIE0sMTUzNiwxMzQ0IEMsMTUzNiwxMzc5LDE1MDcsMTQwOCwxNDcyLDE0MDggTCwxMDI0LDE0MDggQyw5ODksMTQwOCw5NjAsMTM3OSw5NjAsMTM0NCBDLDk2MCwxMzI3LDk2NywxMzExLDk3OSwxMjk5IEwsMTEyMywxMTU1IEwsNzkxLDgyMyBDLDc4NSw4MTcsNzgxLDgwOCw3ODEsODAwIEMsNzgxLDc5Miw3ODUsNzgzLDc5MSw3NzcgTCw5MDUsNjYzIEMsOTExLDY1Nyw5MjAsNjUzLDkyOCw2NTMgQyw5MzYsNjUzLDk0NSw2NTcsOTUxLDY2MyBMLDEyODMsOTk1IEwsMTQyNyw4NTEgQywxNDM5LDgzOSwxNDU1LDgzMiwxNDcyLDgzMiBDLDE1MDcsODMyLDE1MzYsODYxLDE1MzYsODk2IFpcIlxuXHRcdH0sXG5cdFx0XCJyZXNpemVfc21hbGxcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDc2OCw1NzYgQyw3NjgsNjExLDczOSw2NDAsNzA0LDY0MCBMLDI1Niw2NDAgQywyMjEsNjQwLDE5Miw2MTEsMTkyLDU3NiBDLDE5Miw1NTksMTk5LDU0MywyMTEsNTMxIEwsMzU1LDM4NyBMLDIzLDU1IEMsMTcsNDksMTMsNDAsMTMsMzIgQywxMywyNCwxNywxNSwyMyw5IEwsMTM3LC0xMDUgQywxNDMsLTExMSwxNTIsLTExNSwxNjAsLTExNSBDLDE2OCwtMTE1LDE3NywtMTExLDE4MywtMTA1IEwsNTE1LDIyNyBMLDY1OSw4MyBDLDY3MSw3MSw2ODcsNjQsNzA0LDY0IEMsNzM5LDY0LDc2OCw5Myw3NjgsMTI4IE0sMTUyMywxMjQ4IEMsMTUyMywxMjU2LDE1MTksMTI2NSwxNTEzLDEyNzEgTCwxMzk5LDEzODUgQywxMzkzLDEzOTEsMTM4NCwxMzk1LDEzNzYsMTM5NSBDLDEzNjgsMTM5NSwxMzU5LDEzOTEsMTM1MywxMzg1IEwsMTAyMSwxMDUzIEwsODc3LDExOTcgQyw4NjUsMTIwOSw4NDksMTIxNiw4MzIsMTIxNiBDLDc5NywxMjE2LDc2OCwxMTg3LDc2OCwxMTUyIEwsNzY4LDcwNCBDLDc2OCw2NjksNzk3LDY0MCw4MzIsNjQwIEwsMTI4MCw2NDAgQywxMzE1LDY0MCwxMzQ0LDY2OSwxMzQ0LDcwNCBDLDEzNDQsNzIxLDEzMzcsNzM3LDEzMjUsNzQ5IEwsMTE4MSw4OTMgTCwxNTEzLDEyMjUgQywxNTE5LDEyMzEsMTUyMywxMjQwLDE1MjMsMTI0OCBaXCJcblx0XHR9LFxuXHRcdFwiZXllX29wZW5cIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTc5Mixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDE2NjQsNTc2IEMsMTQ5MywzMTIsMTIxNywxMjgsODk2LDEyOCBDLDU3NSwxMjgsMjk5LDMxMiwxMjgsNTc2IEMsMjIzLDcyMywzNTMsODQ5LDUwOSw5MjkgQyw0NjksODYxLDQ0OCw3ODMsNDQ4LDcwNCBDLDQ0OCw0NTcsNjQ5LDI1Niw4OTYsMjU2IEMsMTE0MywyNTYsMTM0NCw0NTcsMTM0NCw3MDQgQywxMzQ0LDc4MywxMzIzLDg2MSwxMjgzLDkyOSBDLDE0MzksODQ5LDE1NjksNzIzLDE2NjQsNTc2IE0sOTQ0LDk2MCBDLDk0NCw5MzQsOTIyLDkxMiw4OTYsOTEyIEMsNzgyLDkxMiw2ODgsODE4LDY4OCw3MDQgQyw2ODgsNjc4LDY2Niw2NTYsNjQwLDY1NiBDLDYxNCw2NTYsNTkyLDY3OCw1OTIsNzA0IEMsNTkyLDg3MSw3MjksMTAwOCw4OTYsMTAwOCBDLDkyMiwxMDA4LDk0NCw5ODYsOTQ0LDk2MCBNLDE3OTIsNTc2IEMsMTc5Miw2MDEsMTc4NCw2MjQsMTc3Miw2NDUgQywxNTg4LDk0NywxMjUxLDExNTIsODk2LDExNTIgQyw1NDEsMTE1MiwyMDQsOTQ3LDIwLDY0NSBDLDgsNjI0LDAsNjAxLDAsNTc2IEMsMCw1NTEsOCw1MjgsMjAsNTA3IEMsMjA0LDIwNSw1NDEsMCw4OTYsMCBDLDEyNTEsMCwxNTg4LDIwNCwxNzcyLDUwNyBDLDE3ODQsNTI4LDE3OTIsNTUxLDE3OTIsNTc2IFpcIlxuXHRcdH0sXG5cdFx0XCJleWVfY2xvc2VcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTc5Mixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDU1NSwyMDEgQywzNzksMjgwLDIzMiw0MTUsMTI4LDU3NiBDLDIyMyw3MjMsMzUzLDg0OSw1MDksOTI5IEMsNDY5LDg2MSw0NDgsNzgzLDQ0OCw3MDQgQyw0NDgsNTYxLDUxNyw0MjYsNjMzLDM0MiBNLDk0NCw5NjAgQyw5NDQsOTM0LDkyMiw5MTIsODk2LDkxMiBDLDc4Miw5MTIsNjg4LDgxOSw2ODgsNzA0IEMsNjg4LDY3OCw2NjYsNjU2LDY0MCw2NTYgQyw2MTQsNjU2LDU5Miw2NzgsNTkyLDcwNCBDLDU5Miw4NzEsNzI5LDEwMDgsODk2LDEwMDggQyw5MjIsMTAwOCw5NDQsOTg2LDk0NCw5NjAgTSwxMzA3LDExNTEgQywxMzA3LDExNjIsMTMwMSwxMTcyLDEyOTEsMTE3OCBDLDEyNzAsMTE5MCwxMTc2LDEyNDgsMTE1OCwxMjQ4IEMsMTE0NiwxMjQ4LDExMzYsMTI0MiwxMTMwLDEyMzIgTCwxMDc2LDExMzUgQywxMDE3LDExNDYsOTU2LDExNTIsODk2LDExNTIgQyw1MjcsMTE1MiwyMTgsOTQ5LDIwLDY0NSBDLDcsNjI1LDAsNjAwLDAsNTc2IEMsMCw1NTEsNyw1MjcsMjAsNTA3IEMsMTM1LDMyNywyOTgsMTc3LDQ5Miw4OSBDLDQ4Miw3Miw0NDgsMTgsNDQ4LDIgQyw0NDgsLTEwLDQ1NCwtMjAsNDY0LC0yNiBDLDQ4NSwtMzgsNTgwLC05Niw1OTgsLTk2IEMsNjA5LC05Niw2MjAsLTkwLDYyNiwtODAgTCw2NzUsOSBDLDg4NiwzODYsMTA5NSw3NjUsMTMwNiwxMTQyIEMsMTMwNywxMTQ0LDEzMDcsMTE0OSwxMzA3LDExNTEgTSwxMzQ0LDcwNCBDLDEzNDQsNzMyLDEzNDEsNzYwLDEzMzYsNzg4IEwsMTA1NiwyODYgQywxMjI5LDM1MiwxMzQ0LDUxOCwxMzQ0LDcwNCBNLDE3OTIsNTc2IEMsMTc5Miw2MDIsMTc4NSw2MjMsMTc3Miw2NDUgQywxNjk0LDc3NCwxNTY5LDg5OSwxNDQ1LDk4MiBMLDEzODIsODcwIEMsMTQ5NSw3OTIsMTU5MCw2OTEsMTY2NCw1NzYgQywxNTA4LDMzNCwxMjYxLDE1Nyw5NzAsMTMyIEwsODk2LDAgQywxMTk3LDAsMTQ2NywxMzcsMTY2MywzNjIgQywxNzAyLDQwNywxNzQxLDQ1NiwxNzcyLDUwNyBDLDE3ODUsNTI5LDE3OTIsNTUwLDE3OTIsNTc2IFpcIlxuXHRcdH0sXG5cdFx0XCJmb2xkZXJfb3BlblwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxOTIwLFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTg3OSw1ODQgQywxODc5LDYyOSwxODI4LDY0MCwxNzkyLDY0MCBMLDcwNCw2NDAgQyw2MTYsNjQwLDQ5OCw1ODYsNDQwLDUxOCBMLDEwNCwxMjIgQyw4OCwxMDQsNzMsODAsNzMsNTYgQyw3MywxMSwxMjQsMCwxNjAsMCBMLDEyNDgsMCBDLDEzMzYsMCwxNDU0LDU0LDE1MTIsMTIyIEwsMTg0OCw1MTggQywxODY0LDUzNiwxODc5LDU2MCwxODc5LDU4NCBNLDE1MzYsOTI4IEMsMTUzNiwxMDUxLDE0MzUsMTE1MiwxMzEyLDExNTIgTCw3NjgsMTE1MiBMLDc2OCwxMTg0IEMsNzY4LDEzMDcsNjY3LDE0MDgsNTQ0LDE0MDggTCwyMjQsMTQwOCBDLDEwMSwxNDA4LDAsMTMwNywwLDExODQgTCwwLDIyNCBDLDAsMjE2LDEsMjA3LDEsMTk5IEwsNiwyMDUgTCwzNDMsNjAxIEMsNDI0LDY5Nyw1NzksNzY4LDcwNCw3NjggTCwxNTM2LDc2OCBaXCJcblx0XHR9LFxuXHRcdFwic2lnbmluXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE1MzYsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxMTg0LDY0MCBDLDExODQsNjU3LDExNzcsNjczLDExNjUsNjg1IEwsNjIxLDEyMjkgQyw2MDksMTI0MSw1OTMsMTI0OCw1NzYsMTI0OCBDLDU0MSwxMjQ4LDUxMiwxMjE5LDUxMiwxMTg0IEwsNTEyLDg5NiBMLDY0LDg5NiBDLDI5LDg5NiwwLDg2NywwLDgzMiBMLDAsNDQ4IEMsMCw0MTMsMjksMzg0LDY0LDM4NCBMLDUxMiwzODQgTCw1MTIsOTYgQyw1MTIsNjEsNTQxLDMyLDU3NiwzMiBDLDU5MywzMiw2MDksMzksNjIxLDUxIEwsMTE2NSw1OTUgQywxMTc3LDYwNywxMTg0LDYyMywxMTg0LDY0MCBNLDE1MzYsOTkyIEMsMTUzNiwxMTUxLDE0MDcsMTI4MCwxMjQ4LDEyODAgTCw5MjgsMTI4MCBDLDg4MywxMjgwLDg5NiwxMjEyLDg5NiwxMTg0IEMsODk2LDExNDcsOTM1LDExNTIsOTYwLDExNTIgTCwxMjQ4LDExNTIgQywxMzM2LDExNTIsMTQwOCwxMDgwLDE0MDgsOTkyIEwsMTQwOCwyODggQywxNDA4LDIwMCwxMzM2LDEyOCwxMjQ4LDEyOCBMLDkyOCwxMjggQyw4ODMsMTI4LDg5Niw2MCw4OTYsMzIgQyw4OTYsMTUsOTExLDAsOTI4LDAgTCwxMjQ4LDAgQywxNDA3LDAsMTUzNiwxMjksMTUzNiwyODggWlwiXG5cdFx0fSxcblx0XHRcInVwbG9hZF9hbHRcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTY2NCxcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDEyODAsNjQgQywxMjgwLDI5LDEyNTEsMCwxMjE2LDAgQywxMTgxLDAsMTE1MiwyOSwxMTUyLDY0IEMsMTE1Miw5OSwxMTgxLDEyOCwxMjE2LDEyOCBDLDEyNTEsMTI4LDEyODAsOTksMTI4MCw2NCBNLDE1MzYsNjQgQywxNTM2LDI5LDE1MDcsMCwxNDcyLDAgQywxNDM3LDAsMTQwOCwyOSwxNDA4LDY0IEMsMTQwOCw5OSwxNDM3LDEyOCwxNDcyLDEyOCBDLDE1MDcsMTI4LDE1MzYsOTksMTUzNiw2NCBNLDE2NjQsMjg4IEMsMTY2NCwzNDEsMTYyMSwzODQsMTU2OCwzODQgTCwxMTQxLDM4NCBDLDExMTQsMzEwLDEwNDMsMjU2LDk2MCwyNTYgTCw3MDQsMjU2IEMsNjIxLDI1Niw1NTAsMzEwLDUyMywzODQgTCw5NiwzODQgQyw0MywzODQsMCwzNDEsMCwyODggTCwwLC0zMiBDLDAsLTg1LDQzLC0xMjgsOTYsLTEyOCBMLDE1NjgsLTEyOCBDLDE2MjEsLTEyOCwxNjY0LC04NSwxNjY0LC0zMiBNLDEzMzksOTM2IEMsMTM0OSw5NTksMTM0NCw5ODcsMTMyNSwxMDA1IEwsODc3LDE0NTMgQyw4NjUsMTQ2Niw4NDgsMTQ3Miw4MzIsMTQ3MiBDLDgxNiwxNDcyLDc5OSwxNDY2LDc4NywxNDUzIEwsMzM5LDEwMDUgQywzMjAsOTg3LDMxNSw5NTksMzI1LDkzNiBDLDMzNSw5MTIsMzU4LDg5NiwzODQsODk2IEwsNjQwLDg5NiBMLDY0MCw0NDggQyw2NDAsNDEzLDY2OSwzODQsNzA0LDM4NCBMLDk2MCwzODQgQyw5OTUsMzg0LDEwMjQsNDEzLDEwMjQsNDQ4IEwsMTAyNCw4OTYgTCwxMjgwLDg5NiBDLDEzMDYsODk2LDEzMjksOTEyLDEzMzksOTM2IFpcIlxuXHRcdH0sXG5cdFx0XCJzYXZlXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE1MzYsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwzODQsMCBMLDM4NCwzODQgTCwxMTUyLDM4NCBMLDExNTIsMCBNLDEyODAsMCBMLDEyODAsNDE2IEMsMTI4MCw0NjksMTIzNyw1MTIsMTE4NCw1MTIgTCwzNTIsNTEyIEMsMjk5LDUxMiwyNTYsNDY5LDI1Niw0MTYgTCwyNTYsMCBMLDEyOCwwIEwsMTI4LDEyODAgTCwyNTYsMTI4MCBMLDI1Niw4NjQgQywyNTYsODExLDI5OSw3NjgsMzUyLDc2OCBMLDkyOCw3NjggQyw5ODEsNzY4LDEwMjQsODExLDEwMjQsODY0IEwsMTAyNCwxMjgwIEMsMTA0NCwxMjgwLDEwODMsMTI2NCwxMDk3LDEyNTAgTCwxMzc4LDk2OSBDLDEzOTEsOTU2LDE0MDgsOTE1LDE0MDgsODk2IEwsMTQwOCwwIE0sODk2LDkyOCBDLDg5Niw5MTEsODgxLDg5Niw4NjQsODk2IEwsNjcyLDg5NiBDLDY1NSw4OTYsNjQwLDkxMSw2NDAsOTI4IEwsNjQwLDEyNDggQyw2NDAsMTI2NSw2NTUsMTI4MCw2NzIsMTI4MCBMLDg2NCwxMjgwIEMsODgxLDEyODAsODk2LDEyNjUsODk2LDEyNDggTCw4OTYsOTI4IE0sMTUzNiw4OTYgQywxNTM2LDk0OSwxNTA2LDEwMjIsMTQ2OCwxMDYwIEwsMTE4OCwxMzQwIEMsMTE1MCwxMzc4LDEwNzcsMTQwOCwxMDI0LDE0MDggTCw5NiwxNDA4IEMsNDMsMTQwOCwwLDEzNjUsMCwxMzEyIEwsMCwtMzIgQywwLC04NSw0MywtMTI4LDk2LC0xMjggTCwxNDQwLC0xMjggQywxNDkzLC0xMjgsMTUzNiwtODUsMTUzNiwtMzIgWlwiXG5cdFx0fSxcblx0XHRcInVuZG9cIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDE1MzYsNjQwIEMsMTUzNiwxMDYzLDExOTEsMTQwOCw3NjgsMTQwOCBDLDU3MSwxNDA4LDM4MCwxMzI5LDIzOSwxMTk2IEwsMTA5LDEzMjUgQyw5MSwxMzQ0LDYzLDEzNDksNDAsMTMzOSBDLDE2LDEzMjksMCwxMzA2LDAsMTI4MCBMLDAsODMyIEMsMCw3OTcsMjksNzY4LDY0LDc2OCBMLDUxMiw3NjggQyw1MzgsNzY4LDU2MSw3ODQsNTcxLDgwOCBDLDU4MSw4MzEsNTc2LDg1OSw1NTcsODc3IEwsNDIwLDEwMTUgQyw1MTMsMTEwMiw2MzcsMTE1Miw3NjgsMTE1MiBDLDEwNTAsMTE1MiwxMjgwLDkyMiwxMjgwLDY0MCBDLDEyODAsMzU4LDEwNTAsMTI4LDc2OCwxMjggQyw2MDksMTI4LDQ2MiwyMDAsMzY0LDMyNyBDLDM1OSwzMzQsMzUwLDMzOCwzNDEsMzM5IEMsMzMyLDMzOSwzMjMsMzM2LDMxNiwzMzAgTCwxNzksMTkyIEMsMTY4LDE4MSwxNjcsMTYyLDE3NywxNDkgQywzMjMsLTI3LDUzOSwtMTI4LDc2OCwtMTI4IEMsMTE5MSwtMTI4LDE1MzYsMjE3LDE1MzYsNjQwIFpcIlxuXHRcdH0sXG5cdFx0XCJwYXN0ZVwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNzkyLFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sNzY4LC0xMjggTCw3NjgsMTAyNCBMLDExNTIsMTAyNCBMLDExNTIsNjA4IEMsMTE1Miw1NTUsMTE5NSw1MTIsMTI0OCw1MTIgTCwxNjY0LDUxMiBMLDE2NjQsLTEyOCBNLDEwMjQsMTMxMiBDLDEwMjQsMTI5NSwxMDA5LDEyODAsOTkyLDEyODAgTCwyODgsMTI4MCBDLDI3MSwxMjgwLDI1NiwxMjk1LDI1NiwxMzEyIEwsMjU2LDEzNzYgQywyNTYsMTM5MywyNzEsMTQwOCwyODgsMTQwOCBMLDk5MiwxNDA4IEMsMTAwOSwxNDA4LDEwMjQsMTM5MywxMDI0LDEzNzYgTCwxMDI0LDEzMTIgTSwxMjgwLDY0MCBMLDEyODAsOTM5IEwsMTU3OSw2NDAgTSwxNzkyLDUxMiBDLDE3OTIsNTY1LDE3NjIsNjM4LDE3MjQsNjc2IEwsMTMxNiwxMDg0IEMsMTMwNSwxMDk1LDEyOTMsMTEwNCwxMjgwLDExMTIgTCwxMjgwLDE0NDAgQywxMjgwLDE0OTMsMTIzNywxNTM2LDExODQsMTUzNiBMLDk2LDE1MzYgQyw0MywxNTM2LDAsMTQ5MywwLDE0NDAgTCwwLDk2IEMsMCw0Myw0MywwLDk2LDAgTCw2NDAsMCBMLDY0MCwtMTYwIEMsNjQwLC0yMTMsNjgzLC0yNTYsNzM2LC0yNTYgTCwxNjk2LC0yNTYgQywxNzQ5LC0yNTYsMTc5MiwtMjEzLDE3OTIsLTE2MCBaXCJcblx0XHR9LFxuXHRcdFwiZm9sZGVyX29wZW5fYWx0XCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE5MjAsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxNzgxLDYwNSBDLDE3ODEsNTkwLDE3NzIsNTc3LDE3NjMsNTY2IEwsMTQ2OSwyMDMgQywxNDM1LDE2MSwxMzY1LDEyOCwxMzEyLDEyOCBMLDIyNCwxMjggQywyMDIsMTI4LDE3MSwxMzUsMTcxLDE2MyBDLDE3MSwxNzgsMTgwLDE5MSwxODksMjAzIEwsNDgzLDU2NiBDLDUxNyw2MDcsNTg3LDY0MCw2NDAsNjQwIEwsMTcyOCw2NDAgQywxNzUwLDY0MCwxNzgxLDYzMywxNzgxLDYwNSBNLDY0MCw3NjggQyw1NDksNzY4LDQ0Miw3MTcsMzg0LDY0NiBMLDEyOCwzMzEgTCwxMjgsMTE4NCBDLDEyOCwxMjM3LDE3MSwxMjgwLDIyNCwxMjgwIEwsNTQ0LDEyODAgQyw1OTcsMTI4MCw2NDAsMTIzNyw2NDAsMTE4NCBMLDY0MCwxMTIwIEMsNjQwLDEwNjcsNjgzLDEwMjQsNzM2LDEwMjQgTCwxMzEyLDEwMjQgQywxMzY1LDEwMjQsMTQwOCw5ODEsMTQwOCw5MjggTCwxNDA4LDc2OCBNLDE5MDksNjA1IEMsMTkwOSw2MjksMTkwNCw2NTIsMTg5NCw2NzMgQywxODY0LDczNywxNzk2LDc2OCwxNzI4LDc2OCBMLDE1MzYsNzY4IEwsMTUzNiw5MjggQywxNTM2LDEwNTEsMTQzNSwxMTUyLDEzMTIsMTE1MiBMLDc2OCwxMTUyIEwsNzY4LDExODQgQyw3NjgsMTMwNyw2NjcsMTQwOCw1NDQsMTQwOCBMLDIyNCwxNDA4IEMsMTAxLDE0MDgsMCwxMzA3LDAsMTE4NCBMLDAsMjI0IEMsMCwxMDEsMTAxLDAsMjI0LDAgTCwxMzEyLDAgQywxNDAyLDAsMTUxMSw1MiwxNTY4LDEyMiBMLDE4NjMsNDg1IEMsMTg5MCw1MTksMTkwOSw1NjEsMTkwOSw2MDUgWlwiXG5cdFx0fVxuXHR9XG59IiwiXG52YXIgREVGQVVMVF9USU1FX1NDQUxFID0gNjA7XG5cbi8vIERpbWVuc2lvbnNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRMSU5FX0hFSUdIVDogMjYsXG5cdERJQU1PTkRfU0laRTogMTAsXG5cdE1BUktFUl9UUkFDS19IRUlHSFQ6IDYwLFxuXHR3aWR0aDogNjAwLFxuXHRoZWlnaHQ6IDIwMCxcblx0VElNRUxJTkVfU0NST0xMX0hFSUdIVDogMCxcblx0TEVGVF9QQU5FX1dJRFRIOiAyNTAsXG5cdHRpbWVfc2NhbGU6IERFRkFVTFRfVElNRV9TQ0FMRSwgLy8gbnVtYmVyIG9mIHBpeGVscyB0byAxIHNlY29uZFxuICAgIGRlZmF1bHRfbGVuZ3RoOiAyMCwgLy8gc2Vjb25kc1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHQvLyBwaG90b3Nob3AgY29sb3JzXG5cdGE6ICcjMzQzNDM0Jyxcblx0YjogJyM1MzUzNTMnLFxuXHRjOiAnI2I4YjhiOCcsXG5cdGQ6ICcjZDZkNmQ2Jyxcbn07IiwiLypcbiAqIEBhdXRob3IgSm9zaHVhIEtvbyBodHRwOi8vam9zaHVha29vLmNvbVxuICovXG5cbnZhciB1bmRvID0gcmVxdWlyZShcIi4vdXRpbF91bmRvXCIpLFxuICBEaXNwYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbF9kaXNwYXRjaGVyXCIpLFxuICBUaGVtZSA9IHJlcXVpcmUoXCIuL3RoZW1lXCIpLFxuICBVbmRvTWFuYWdlciA9IHVuZG8uVW5kb01hbmFnZXIsXG4gIFVuZG9TdGF0ZSA9IHVuZG8uVW5kb1N0YXRlLFxuICBTZXR0aW5ncyA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpLFxuICB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpLFxuICBMYXllckNhYmluZXQgPSByZXF1aXJlKFwiLi92aWV3X2xheWVyX2NhYmluZXRcIiksXG4gIFRpbWVsaW5lUGFuZWwgPSByZXF1aXJlKFwiLi92aWV3X3BhbmVsXCIpLFxuICBwYWNrYWdlX2pzb24gPSByZXF1aXJlKFwiLi4vcGFja2FnZS5qc29uXCIpLFxuICBJY29uQnV0dG9uID0gcmVxdWlyZShcIi4vdWlfaWNvbl9idXR0b25cIiksXG4gIHN0eWxlID0gdXRpbHMuc3R5bGUsXG4gIHNhdmVUb0ZpbGUgPSB1dGlscy5zYXZlVG9GaWxlLFxuICBvcGVuQXMgPSB1dGlscy5vcGVuQXMsXG4gIFNUT1JBR0VfUFJFRklYID0gdXRpbHMuU1RPUkFHRV9QUkVGSVgsXG4gIFNjcm9sbEJhciA9IHJlcXVpcmUoXCIuL3VpX3Njcm9sbGJhclwiKSxcbiAgRGF0YVN0b3JlID0gcmVxdWlyZShcIi4vdXRpbF9kYXRhc3RvcmVcIik7XG5cbnZhciBaX0lOREVYID0gOTk5O1xuXG52YXIgd2lkdGgsIGhlaWdodCwgcGF0aCwgbGF5ZXJzLCB4MjtcblxuZnVuY3Rpb24gTGF5ZXJQcm9wKG5hbWUpIHtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy52YWx1ZXMgPSBbXTtcblxuICB0aGlzLl92YWx1ZSA9IDA7XG5cbiAgdGhpcy5fY29sb3IgPSBcIiNcIiArICgoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmKSB8IDApLnRvU3RyaW5nKDE2KTtcbiAgLypcblx0dGhpcy5tYXhcblx0dGhpcy5taW5cblx0dGhpcy5zdGVwXG5cdCovXG59XG5cbi8vdmFyIGhvc3RFbGVtZW50O1xuXG5mdW5jdGlvbiBUaW1lbGluZXIodGFyZ2V0LCBob3N0KSB7XG4gIC8vIERpc3BhdGNoZXIgZm9yIGNvb3JkaW5hdGlvblxuICB2YXIgZGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKCk7XG5cbiAgLy9ob3N0RWxlbWVudCA9IGhvc3Q7XG5cbiAgLy8gRGF0YVxuICB2YXIgZGF0YSA9IG5ldyBEYXRhU3RvcmUoKTtcbiAgdmFyIGxheWVyX3N0b3JlID0gZGF0YS5nZXQoXCJsYXllcnNcIik7XG4gIHZhciBsYXllcnMgPSBsYXllcl9zdG9yZS52YWx1ZTtcblxuICB3aW5kb3cuX2RhdGEgPSBkYXRhOyAvLyBleHBvc2UgaXQgZm9yIGRlYnVnZ2luZ1xuXG4gIC8vIFVuZG8gbWFuYWdlclxuICB2YXIgdW5kb19tYW5hZ2VyID0gbmV3IFVuZG9NYW5hZ2VyKGRpc3BhdGNoZXIpO1xuXG4gIC8vIFZpZXdzXG4gIHZhciB0aW1lbGluZSA9IG5ldyBUaW1lbGluZVBhbmVsKGRhdGEsIGRpc3BhdGNoZXIpO1xuICB2YXIgbGF5ZXJfcGFuZWwgPSBuZXcgTGF5ZXJDYWJpbmV0KGRhdGEsIGRpc3BhdGNoZXIpO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgLy8gaGFjayFcbiAgICB1bmRvX21hbmFnZXIuc2F2ZShuZXcgVW5kb1N0YXRlKGRhdGEsIFwiTG9hZGVkXCIpLCB0cnVlKTtcbiAgfSk7XG5cbiAgZGlzcGF0Y2hlci5vbihcImtleWZyYW1lXCIsIGZ1bmN0aW9uKGxheWVyLCB2YWx1ZSkge1xuICAgIHZhciBpbmRleCA9IGxheWVycy5pbmRleE9mKGxheWVyKTtcblxuICAgIHZhciB0ID0gZGF0YS5nZXQoXCJ1aTpjdXJyZW50VGltZVwiKS52YWx1ZTtcbiAgICB2YXIgdiA9IHV0aWxzLmZpbmRUaW1laW5MYXllcihsYXllciwgdCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh2LCAnLi4ua2V5ZnJhbWUgaW5kZXgnLCBpbmRleCwgdXRpbHMuZm9ybWF0X2ZyaWVuZGx5X3NlY29uZHModCksIHR5cGVvZih2KSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2xheWVyJywgbGF5ZXIsIHZhbHVlKTtcblxuICAgIGlmICh0eXBlb2YgdiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgbGF5ZXIudmFsdWVzLnNwbGljZSh2LCAwLCB7XG4gICAgICAgIHRpbWU6IHQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgX2NvbG9yOiBcIiNcIiArICgoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmKSB8IDApLnRvU3RyaW5nKDE2KVxuICAgICAgfSk7XG5cbiAgICAgIHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgXCJBZGQgS2V5ZnJhbWVcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcInJlbW92ZSBmcm9tIGluZGV4XCIsIHYpO1xuICAgICAgbGF5ZXIudmFsdWVzLnNwbGljZSh2LmluZGV4LCAxKTtcblxuICAgICAgdW5kb19tYW5hZ2VyLnNhdmUobmV3IFVuZG9TdGF0ZShkYXRhLCBcIlJlbW92ZSBLZXlmcmFtZVwiKSk7XG4gICAgfVxuXG4gICAgcmVwYWludEFsbCgpO1xuICB9KTtcblxuICBkaXNwYXRjaGVyLm9uKFwia2V5ZnJhbWUubW92ZVwiLCBmdW5jdGlvbihsYXllciwgdmFsdWUpIHtcbiAgICB1bmRvX21hbmFnZXIuc2F2ZShuZXcgVW5kb1N0YXRlKGRhdGEsIFwiTW92ZSBLZXlmcmFtZVwiKSk7XG4gIH0pO1xuXG4gIC8vIGRpc3BhdGNoZXIuZmlyZSgndmFsdWUuY2hhbmdlJywgbGF5ZXIsIG1lLnZhbHVlKTtcbiAgZGlzcGF0Y2hlci5vbihcInZhbHVlLmNoYW5nZVwiLCBmdW5jdGlvbihsYXllciwgdmFsdWUsIGRvbnRfc2F2ZSkge1xuICAgIGlmIChsYXllci5fbXV0ZSkgcmV0dXJuO1xuXG4gICAgdmFyIHQgPSBkYXRhLmdldChcInVpOmN1cnJlbnRUaW1lXCIpLnZhbHVlO1xuICAgIHZhciB2ID0gdXRpbHMuZmluZFRpbWVpbkxheWVyKGxheWVyLCB0KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHYsICd2YWx1ZS5jaGFuZ2UnLCBsYXllciwgdmFsdWUsIHV0aWxzLmZvcm1hdF9mcmllbmRseV9zZWNvbmRzKHQpLCB0eXBlb2YodikpO1xuICAgIGlmICh0eXBlb2YgdiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgbGF5ZXIudmFsdWVzLnNwbGljZSh2LCAwLCB7XG4gICAgICAgIHRpbWU6IHQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgX2NvbG9yOiBcIiNcIiArICgoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmKSB8IDApLnRvU3RyaW5nKDE2KVxuICAgICAgfSk7XG4gICAgICBpZiAoIWRvbnRfc2F2ZSkgdW5kb19tYW5hZ2VyLnNhdmUobmV3IFVuZG9TdGF0ZShkYXRhLCBcIkFkZCB2YWx1ZVwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHYub2JqZWN0LnZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAoIWRvbnRfc2F2ZSkgdW5kb19tYW5hZ2VyLnNhdmUobmV3IFVuZG9TdGF0ZShkYXRhLCBcIlVwZGF0ZSB2YWx1ZVwiKSk7XG4gICAgfVxuXG4gICAgcmVwYWludEFsbCgpO1xuICB9KTtcblxuICBkaXNwYXRjaGVyLm9uKFwiYWN0aW9uOnNvbG9cIiwgZnVuY3Rpb24obGF5ZXIsIHNvbG8pIHtcbiAgICBsYXllci5fc29sbyA9IHNvbG87XG5cbiAgICBjb25zb2xlLmxvZyhsYXllciwgc29sbyk7XG5cbiAgICAvLyBXaGVuIGEgdHJhY2sgaXMgc29sby1lZCwgcGxheWJhY2sgb25seSBjaGFuZ2VzIHZhbHVlc1xuICAgIC8vIG9mIHRoYXQgbGF5ZXIuXG4gIH0pO1xuXG4gIGRpc3BhdGNoZXIub24oXCJhY3Rpb246bXV0ZVwiLCBmdW5jdGlvbihsYXllciwgbXV0ZSkge1xuICAgIGxheWVyLl9tdXRlID0gbXV0ZTtcblxuICAgIC8vIFdoZW4gYSB0cmFjayBpcyBtdXRlLCBwbGF5YmFjayBkb2VzIG5vdCBwbGF5XG4gICAgLy8gZnJhbWVzIG9mIHRob3NlIG11dGVkIGxheWVycy5cblxuICAgIC8vIGFsc28gZmVlbHMgbGlrZSBoaWRkZW4gZmVhdHVyZSBpbiBwaG90b3Nob3BcblxuICAgIC8vIHdoZW4gdmFsdWVzIGFyZSB1cGRhdGVkLCBlZy4gZnJvbSBzbGlkZXIsXG4gICAgLy8gbm8gdHdlZW5zIHdpbGwgYmUgY3JlYXRlZC5cbiAgICAvLyB3ZSBjYW4gZGVjaWRlIGFsc28gdG8gXCJsb2NrIGluXCIgbGF5ZXJzXG4gICAgLy8gbm8gY2hhbmdlcyB0byB0d2VlbiB3aWxsIGJlIG1hZGUgZXRjLlxuICB9KTtcblxuICBkaXNwYXRjaGVyLm9uKFwiZWFzZVwiLCBmdW5jdGlvbihsYXllciwgZWFzZV90eXBlKSB7XG4gICAgdmFyIHQgPSBkYXRhLmdldChcInVpOmN1cnJlbnRUaW1lXCIpLnZhbHVlO1xuICAgIHZhciB2ID0gdXRpbHMudGltZUF0TGF5ZXIobGF5ZXIsIHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdFYXNlIENoYW5nZSA+ICcsIGxheWVyLCB2YWx1ZSwgdik7XG4gICAgaWYgKHYgJiYgdi5lbnRyeSkge1xuICAgICAgdi5lbnRyeS50d2VlbiA9IGVhc2VfdHlwZTtcbiAgICB9XG5cbiAgICB1bmRvX21hbmFnZXIuc2F2ZShuZXcgVW5kb1N0YXRlKGRhdGEsIFwiQWRkIEVhc2VcIikpO1xuXG4gICAgcmVwYWludEFsbCgpO1xuICB9KTtcblxuICB2YXIgc3RhcnRfcGxheSA9IG51bGwsXG4gICAgcGxheWVkX2Zyb20gPSAwOyAvLyByZXF1aXJlcyBzb21lIG1vcmUgdHdlYWtpbmdcblxuICBkaXNwYXRjaGVyLm9uKFwiY29udHJvbHMudG9nZ2xlX3BsYXlcIiwgZnVuY3Rpb24oKSB7XG4gICAgaWYgKHN0YXJ0X3BsYXkpIHtcbiAgICAgIHBhdXNlUGxheWluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydFBsYXlpbmcoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRpc3BhdGNoZXIub24oXCJjb250cm9scy5yZXN0YXJ0X3BsYXlcIiwgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFzdGFydF9wbGF5KSB7XG4gICAgICBzdGFydFBsYXlpbmcoKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50VGltZShwbGF5ZWRfZnJvbSk7XG4gIH0pO1xuXG4gIGRpc3BhdGNoZXIub24oXCJjb250cm9scy5wbGF5XCIsIHN0YXJ0UGxheWluZyk7XG4gIGRpc3BhdGNoZXIub24oXCJjb250cm9scy5wYXVzZVwiLCBwYXVzZVBsYXlpbmcpO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0UGxheWluZygpIHtcbiAgICAvLyBwbGF5ZWRfZnJvbSA9IHRpbWVsaW5lLmN1cnJlbnRfZnJhbWU7XG4gICAgc3RhcnRfcGxheSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gZGF0YS5nZXQoXCJ1aTpjdXJyZW50VGltZVwiKS52YWx1ZSAqIDEwMDA7XG4gICAgbGF5ZXJfcGFuZWwuc2V0Q29udHJvbFN0YXR1cyh0cnVlKTtcbiAgICAvLyBkaXNwYXRjaGVyLmZpcmUoJ2NvbnRyb2xzLnN0YXR1cycsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGF1c2VQbGF5aW5nKCkge1xuICAgIHN0YXJ0X3BsYXkgPSBudWxsO1xuICAgIGxheWVyX3BhbmVsLnNldENvbnRyb2xTdGF0dXMoZmFsc2UpO1xuICAgIC8vIGRpc3BhdGNoZXIuZmlyZSgnY29udHJvbHMuc3RhdHVzJywgZmFsc2UpO1xuICB9XG5cbiAgZGlzcGF0Y2hlci5vbihcImNvbnRyb2xzLnN0b3BcIiwgZnVuY3Rpb24oKSB7XG4gICAgaWYgKHN0YXJ0X3BsYXkgIT09IG51bGwpIHBhdXNlUGxheWluZygpO1xuICAgIHNldEN1cnJlbnRUaW1lKDApO1xuICB9KTtcblxuICB2YXIgY3VycmVudFRpbWVTdG9yZSA9IGRhdGEuZ2V0KFwidWk6Y3VycmVudFRpbWVcIik7XG4gIGRpc3BhdGNoZXIub24oXCJ0aW1lLnVwZGF0ZVwiLCBzZXRDdXJyZW50VGltZSk7XG5cbiAgZGlzcGF0Y2hlci5vbihcInVwZGF0ZS5zY3JvbGxUaW1lXCIsIGZ1bmN0aW9uKHYpIHtcbiAgICB2ID0gTWF0aC5tYXgoMCwgdik7XG4gICAgZGF0YS5nZXQoXCJ1aTpzY3JvbGxUaW1lXCIpLnZhbHVlID0gdjtcbiAgICByZXBhaW50QWxsKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHNldEN1cnJlbnRUaW1lKHZhbHVlKSB7XG4gICAgdmFsdWUgPSBNYXRoLm1heCgwLCB2YWx1ZSk7XG4gICAgY3VycmVudFRpbWVTdG9yZS52YWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHN0YXJ0X3BsYXkpIHN0YXJ0X3BsYXkgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHZhbHVlICogMTAwMDtcbiAgICByZXBhaW50QWxsKCk7XG4gICAgLy8gbGF5ZXJfcGFuZWwucmVwYWludChzKTtcbiAgfVxuXG4gIGRpc3BhdGNoZXIub24oXCJ0YXJnZXQubm90aWZ5XCIsIGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHRhcmdldCkgdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gIH0pO1xuXG4gIGRpc3BhdGNoZXIub24oXCJ1cGRhdGUuc2NhbGVcIiwgZnVuY3Rpb24odikge1xuICAgIGNvbnNvbGUubG9nKFwicmFuZ2VcIiwgdik7XG4gICAgZGF0YS5nZXQoXCJ1aTp0aW1lU2NhbGVcIikudmFsdWUgPSB2O1xuXG4gICAgdGltZWxpbmUucmVwYWludCgpO1xuICB9KTtcblxuICAvLyBoYW5kbGUgdW5kbyAvIHJlZG9cbiAgZGlzcGF0Y2hlci5vbihcImNvbnRyb2xzLnVuZG9cIiwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhpc3RvcnkgPSB1bmRvX21hbmFnZXIudW5kbygpO1xuICAgIGRhdGEuc2V0SlNPTlN0cmluZyhoaXN0b3J5LnN0YXRlKTtcblxuICAgIHVwZGF0ZVN0YXRlKCk7XG4gIH0pO1xuXG4gIGRpc3BhdGNoZXIub24oXCJjb250cm9scy5yZWRvXCIsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBoaXN0b3J5ID0gdW5kb19tYW5hZ2VyLnJlZG8oKTtcbiAgICBkYXRhLnNldEpTT05TdHJpbmcoaGlzdG9yeS5zdGF0ZSk7XG5cbiAgICB1cGRhdGVTdGF0ZSgpO1xuICB9KTtcblxuICAvKlxuXHRcdFBhaW50IFJvdXRpbmVzXG5cdCovXG5cbiAgZnVuY3Rpb24gcGFpbnQoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHBhaW50KTtcblxuICAgIGlmIChzdGFydF9wbGF5KSB7XG4gICAgICB2YXIgdCA9IChwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0X3BsYXkpIC8gMTAwMDtcbiAgICAgIHNldEN1cnJlbnRUaW1lKHQpO1xuXG4gICAgICBpZiAodCA+IGRhdGEuZ2V0KFwidWk6dG90YWxUaW1lXCIpLnZhbHVlKSB7XG4gICAgICAgIC8vIHNpbXBsZSBsb29wXG4gICAgICAgIHN0YXJ0X3BsYXkgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmVlZHNSZXNpemUpIHtcbiAgICAgIGRpdi5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgZGl2LnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcblxuICAgICAgcmVzdHlsZShsYXllcl9wYW5lbC5kb20sIHRpbWVsaW5lLmRvbSk7XG5cbiAgICAgIHRpbWVsaW5lLnJlc2l6ZSgpO1xuICAgICAgcmVwYWludEFsbCgpO1xuICAgICAgbmVlZHNSZXNpemUgPSBmYWxzZTtcblxuICAgICAgZGlzcGF0Y2hlci5maXJlKFwicmVzaXplXCIpO1xuICAgIH1cblxuICAgIHRpbWVsaW5lLl9wYWludCgpO1xuICB9XG5cbiAgcGFpbnQoKTtcblxuICAvKlxuXHRcdEVuZCBQYWludCBSb3V0aW5lc1xuXHQqL1xuXG4gIGZ1bmN0aW9uIHNhdmUobmFtZSkge1xuICAgIGlmICghbmFtZSkgbmFtZSA9IFwiYXV0b3NhdmVcIjtcblxuICAgIHZhciBqc29uID0gZGF0YS5nZXRKU09OU3RyaW5nKCk7XG5cbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlW1NUT1JBR0VfUFJFRklYICsgbmFtZV0gPSBqc29uO1xuICAgICAgZGlzcGF0Y2hlci5maXJlKFwic2F2ZTpkb25lXCIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2Fubm90IHNhdmVcIiwgbmFtZSwganNvbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZUFzKG5hbWUpIHtcbiAgICBpZiAoIW5hbWUpIG5hbWUgPSBkYXRhLmdldChcIm5hbWVcIikudmFsdWU7XG4gICAgbmFtZSA9IHByb21wdChcIlBpY2sgYSBuYW1lIHRvIHNhdmUgdG8gKGxvY2FsU3RvcmFnZSlcIiwgbmFtZSk7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGRhdGEuZGF0YS5uYW1lID0gbmFtZTtcbiAgICAgIHNhdmUobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZVNpbXBseSgpIHtcbiAgICB2YXIgbmFtZSA9IGRhdGEuZ2V0KFwibmFtZVwiKS52YWx1ZTtcbiAgICBpZiAobmFtZSkge1xuICAgICAgc2F2ZShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2F2ZUFzKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGV4cG9ydEpTT04oKSB7XG4gICAgdmFyIGpzb24gPSBkYXRhLmdldEpTT05TdHJpbmcoKTtcbiAgICB2YXIgcmV0ID0gcHJvbXB0KFwiSGl0IE9LIHRvIGRvd25sb2FkIG90aGVyd2lzZSBDb3B5IGFuZCBQYXN0ZSBKU09OXCIsIGpzb24pO1xuXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLCBudWxsLCBcIlxcdFwiKSk7XG4gICAgaWYgKCFyZXQpIHJldHVybjtcblxuICAgIC8vIG1ha2UganNvbiBkb3dubG9hZGFibGVcbiAgICBqc29uID0gZGF0YS5nZXRKU09OU3RyaW5nKFwiXFx0XCIpO1xuICAgIHZhciBmaWxlTmFtZSA9IFwidGltZWxpbmVyLXRlc3RcIiArIFwiLmpzb25cIjtcblxuICAgIHNhdmVUb0ZpbGUoanNvbiwgZmlsZU5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9hZEpTT05TdHJpbmcobykge1xuICAgIC8vIHNob3VsZCBjYXRjaCBhbmQgY2hlY2sgZXJyb3JzIGhlcmVcbiAgICB2YXIganNvbiA9IEpTT04ucGFyc2Uobyk7XG4gICAgbG9hZChqc29uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWQobykge1xuICAgIGRhdGEuc2V0SlNPTihvKTtcbiAgICAvL1xuICAgIGlmIChkYXRhLmdldFZhbHVlKFwidWlcIikgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZGF0YS5zZXRWYWx1ZShcInVpXCIsIHtcbiAgICAgICAgY3VycmVudFRpbWU6IDAsXG4gICAgICAgIHRvdGFsVGltZTogU2V0dGluZ3MuZGVmYXVsdF9sZW5ndGgsXG4gICAgICAgIHNjcm9sbFRpbWU6IDAsXG4gICAgICAgIHRpbWVTY2FsZTogU2V0dGluZ3MudGltZV9zY2FsZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdW5kb19tYW5hZ2VyLmNsZWFyKCk7XG4gICAgdW5kb19tYW5hZ2VyLnNhdmUobmV3IFVuZG9TdGF0ZShkYXRhLCBcIkxvYWRlZFwiKSwgdHJ1ZSk7XG5cbiAgICB1cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU3RhdGUoKSB7XG4gICAgbGF5ZXJzID0gbGF5ZXJfc3RvcmUudmFsdWU7IC8vIEZJWE1FOiBzdXBwb3J0IEFycmF5c1xuICAgIGxheWVyX3BhbmVsLnNldFN0YXRlKGxheWVyX3N0b3JlKTtcbiAgICB0aW1lbGluZS5zZXRTdGF0ZShsYXllcl9zdG9yZSk7XG5cbiAgICByZXBhaW50QWxsKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBhaW50QWxsKCkge1xuICAgIHZhciBjb250ZW50X2hlaWdodCA9IGxheWVycy5sZW5ndGggKiBTZXR0aW5ncy5MSU5FX0hFSUdIVDtcbiAgICBzY3JvbGxiYXIuc2V0TGVuZ3RoKFNldHRpbmdzLlRJTUVMSU5FX1NDUk9MTF9IRUlHSFQgLyBjb250ZW50X2hlaWdodCk7XG5cbiAgICBsYXllcl9wYW5lbC5yZXBhaW50KCk7XG4gICAgdGltZWxpbmUucmVwYWludCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvbXB0SW1wb3J0KCkge1xuICAgIHZhciBqc29uID0gcHJvbXB0KFwiUGFzdGUgSlNPTiBpbiBoZXJlIHRvIExvYWRcIik7XG4gICAgaWYgKCFqc29uKSByZXR1cm47XG4gICAgY29uc29sZS5sb2coXCJMb2FkaW5nLi4gXCIsIGpzb24pO1xuICAgIGxvYWRKU09OU3RyaW5nKGpzb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gb3Blbih0aXRsZSkge1xuICAgIGlmICh0aXRsZSkge1xuICAgICAgbG9hZEpTT05TdHJpbmcobG9jYWxTdG9yYWdlW1NUT1JBR0VfUFJFRklYICsgdGl0bGVdKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLm9wZW5Mb2NhbFNhdmUgPSBvcGVuO1xuXG4gIGRpc3BhdGNoZXIub24oXG4gICAgXCJpbXBvcnRcIixcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgIHByb21wdEltcG9ydCgpO1xuICAgIH0uYmluZCh0aGlzKVxuICApO1xuXG4gIGRpc3BhdGNoZXIub24oXCJuZXdcIiwgZnVuY3Rpb24oKSB7XG4gICAgZGF0YS5ibGFuaygpO1xuICAgIHVwZGF0ZVN0YXRlKCk7XG4gIH0pO1xuXG4gIGRpc3BhdGNoZXIub24oXCJvcGVuZmlsZVwiLCBmdW5jdGlvbigpIHtcbiAgICBvcGVuQXMoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2xvYWRlZCAnICsgZGF0YSk7XG4gICAgICBsb2FkSlNPTlN0cmluZyhkYXRhKTtcbiAgICB9LCBkaXYpO1xuICB9KTtcblxuICBkaXNwYXRjaGVyLm9uKFwib3BlblwiLCBvcGVuKTtcbiAgZGlzcGF0Y2hlci5vbihcImV4cG9ydFwiLCBleHBvcnRKU09OKTtcblxuICBkaXNwYXRjaGVyLm9uKFwic2F2ZVwiLCBzYXZlU2ltcGx5KTtcbiAgZGlzcGF0Y2hlci5vbihcInNhdmVfYXNcIiwgc2F2ZUFzKTtcblxuICAvLyBFeHBvc2UgQVBJXG4gIHRoaXMuc2F2ZSA9IHNhdmU7XG4gIHRoaXMubG9hZCA9IGxvYWQ7XG5cbiAgLypcblx0XHRTdGFydCBET00gU3R1ZmYgKHNob3VsZCBzZXBhcmF0ZSBmaWxlKVxuXHQqL1xuXG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246IGFic29sdXRlO1wiO1xuICBkaXYuc3R5bGUudG9wID0gXCIyMnB4XCI7XG5cbiAgdmFyIHBhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHN0eWxlKHBhbmUsIHtcbiAgICAvL3Bvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgLy90b3A6IFwiMjBweFwiLFxuICAgIC8vbGVmdDogXCIyMHB4XCIsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgXCIgKyBUaGVtZS5hLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBUaGVtZS5hLFxuICAgIGNvbG9yOiBUaGVtZS5kLFxuICAgIHpJbmRleDogWl9JTkRFWCxcbiAgICBmb250RmFtaWx5OiBcIm1vbm9zcGFjZVwiLFxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICB3aWR0aDogXCIxMDAlXCJcbiAgfSk7XG5cbiAgdmFyIGhlYWRlcl9zdHlsZXMgPSB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiMHB4XCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGhlaWdodDogXCIyMnB4XCIsXG4gICAgbGluZUhlaWdodDogXCIyMnB4XCIsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgfTtcblxuICB2YXIgYnV0dG9uX3N0eWxlcyA9IHtcbiAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgICBwYWRkaW5nOiBcIjJweFwiLFxuICAgIG1hcmdpblJpZ2h0OiBcIjJweFwiXG4gIH07XG5cbiAgdmFyIHBhbmVfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdHlsZShwYW5lX3RpdGxlLCBoZWFkZXJfc3R5bGVzLCB7XG4gICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBcIiArIFRoZW1lLmIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIH0pO1xuXG4gIHZhciB0aXRsZV9iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcGFuZV90aXRsZS5hcHBlbmRDaGlsZCh0aXRsZV9iYXIpO1xuXG4gIHRpdGxlX2Jhci5pbm5lckhUTUwgPSBcIlRpbWVsaW5lciBcIiArIHBhY2thZ2VfanNvbi52ZXJzaW9uO1xuICBwYW5lX3RpdGxlLmFwcGVuZENoaWxkKHRpdGxlX2Jhcik7XG5cbiAgdmFyIHRvcF9yaWdodF9iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdHlsZSh0b3BfcmlnaHRfYmFyLCBoZWFkZXJfc3R5bGVzLCB7XG4gICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgfSk7XG5cbiAgcGFuZV90aXRsZS5hcHBlbmRDaGlsZCh0b3BfcmlnaHRfYmFyKTtcblxuICAvLyByZXNpemUgbWluaW1pemVcbiAgLy8gdmFyIHJlc2l6ZV9zbWFsbCA9IG5ldyBJY29uQnV0dG9uKDEwLCAncmVzaXplX3NtYWxsJywgJ21pbmltaXplJywgZGlzcGF0Y2hlcik7XG4gIC8vIHRvcF9yaWdodF9iYXIuYXBwZW5kQ2hpbGQocmVzaXplX3NtYWxsLmRvbSk7XG5cbiAgLy8gcmVzaXplIGZ1bGxcbiAgdmFyIHJlc2l6ZV9mdWxsID0gbmV3IEljb25CdXR0b24oMTAsIFwicmVzaXplX2Z1bGxcIiwgXCJtYXhpbWl6ZVwiLCBkaXNwYXRjaGVyKTtcbiAgc3R5bGUocmVzaXplX2Z1bGwuZG9tLCBidXR0b25fc3R5bGVzLCB7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH0pO1xuICB0b3BfcmlnaHRfYmFyLmFwcGVuZENoaWxkKHJlc2l6ZV9mdWxsLmRvbSk7XG5cbiAgdmFyIHBhbmVfc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICB2YXIgZm9vdGVyX3N0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiMjJweFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMjJweFwiLFxuICAgIGJvdHRvbTogXCIwXCIsXG4gICAgLy8gcGFkZGluZzogJzJweCcsXG4gICAgYmFja2dyb3VuZDogVGhlbWUuYSxcbiAgICBmb250U2l6ZTogXCIxMXB4XCJcbiAgfTtcblxuICBzdHlsZShwYW5lX3N0YXR1cywgZm9vdGVyX3N0eWxlcywge1xuICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgXCIgKyBUaGVtZS5iXG4gIH0pO1xuXG4gIHBhbmUuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgcGFuZS5hcHBlbmRDaGlsZChwYW5lX3N0YXR1cyk7XG4gIHBhbmUuYXBwZW5kQ2hpbGQocGFuZV90aXRsZSk7XG5cbiAgdmFyIGxhYmVsX3N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsYWJlbF9zdGF0dXMudGV4dENvbnRlbnQgPSBcImhlbGxvIVwiO1xuICBsYWJlbF9zdGF0dXMuc3R5bGUubWFyZ2luTGVmdCA9IFwiMTBweFwiO1xuXG4gIHRoaXMuc2V0U3RhdHVzID0gZnVuY3Rpb24odGV4dCkge1xuICAgIGxhYmVsX3N0YXR1cy50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH07XG5cbiAgZGlzcGF0Y2hlci5vbihcInN0YXRlOnNhdmVcIiwgZnVuY3Rpb24oZGVzY3JpcHRpb24pIHtcbiAgICBkaXNwYXRjaGVyLmZpcmUoXCJzdGF0dXNcIiwgZGVzY3JpcHRpb24pO1xuICAgIHNhdmUoXCJhdXRvc2F2ZVwiKTtcbiAgfSk7XG5cbiAgZGlzcGF0Y2hlci5vbihcInN0YXR1c1wiLCB0aGlzLnNldFN0YXR1cyk7XG5cbiAgdmFyIGJvdHRvbV9yaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0eWxlKGJvdHRvbV9yaWdodCwgZm9vdGVyX3N0eWxlcywge1xuICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gIH0pO1xuXG4gIC8vIHZhciBidXR0b25fc2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAvLyBzdHlsZShidXR0b25fc2F2ZSwgYnV0dG9uX3N0eWxlcyk7XG4gIC8vIGJ1dHRvbl9zYXZlLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAvLyBidXR0b25fc2F2ZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gIC8vIFx0c2F2ZSgpO1xuICAvLyB9O1xuXG4gIC8vIHZhciBidXR0b25fbG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAvLyBzdHlsZShidXR0b25fbG9hZCwgYnV0dG9uX3N0eWxlcyk7XG4gIC8vIGJ1dHRvbl9sb2FkLnRleHRDb250ZW50ID0gJ0ltcG9ydCc7XG4gIC8vIGJ1dHRvbl9sb2FkLm9uY2xpY2sgPSB0aGlzLnByb21wdExvYWQ7XG5cbiAgLy8gdmFyIGJ1dHRvbl9vcGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIC8vIHN0eWxlKGJ1dHRvbl9vcGVuLCBidXR0b25fc3R5bGVzKTtcbiAgLy8gYnV0dG9uX29wZW4udGV4dENvbnRlbnQgPSAnT3Blbic7XG4gIC8vIGJ1dHRvbl9vcGVuLm9uY2xpY2sgPSB0aGlzLnByb21wdE9wZW47XG5cbiAgLy8gYm90dG9tX3JpZ2h0LmFwcGVuZENoaWxkKGJ1dHRvbl9sb2FkKTtcbiAgLy8gYm90dG9tX3JpZ2h0LmFwcGVuZENoaWxkKGJ1dHRvbl9zYXZlKTtcbiAgLy8gYm90dG9tX3JpZ2h0LmFwcGVuZENoaWxkKGJ1dHRvbl9vcGVuKTtcblxuICBwYW5lX3N0YXR1cy5hcHBlbmRDaGlsZChsYWJlbF9zdGF0dXMpO1xuICBwYW5lX3N0YXR1cy5hcHBlbmRDaGlsZChib3R0b21fcmlnaHQpO1xuXG4gIC8qKi9cbiAgLy8gem9vbSBpblxuICB2YXIgem9vbV9pbiA9IG5ldyBJY29uQnV0dG9uKDEyLCBcInpvb21faW5cIiwgXCJ6b29tIGluXCIsIGRpc3BhdGNoZXIpO1xuICAvLyB6b29tIG91dFxuICB2YXIgem9vbV9vdXQgPSBuZXcgSWNvbkJ1dHRvbigxMiwgXCJ6b29tX291dFwiLCBcInpvb20gb3V0XCIsIGRpc3BhdGNoZXIpO1xuICAvLyBzZXR0aW5nc1xuICB2YXIgY29nID0gbmV3IEljb25CdXR0b24oMTIsIFwiY29nXCIsIFwic2V0dGluZ3NcIiwgZGlzcGF0Y2hlcik7XG5cbiAgLy8gYm90dG9tX3JpZ2h0LmFwcGVuZENoaWxkKHpvb21faW4uZG9tKTtcbiAgLy8gYm90dG9tX3JpZ2h0LmFwcGVuZENoaWxkKHpvb21fb3V0LmRvbSk7XG4gIC8vIGJvdHRvbV9yaWdodC5hcHBlbmRDaGlsZChjb2cuZG9tKTtcblxuICAvLyBhZGQgbGF5ZXJcbiAgdmFyIHBsdXMgPSBuZXcgSWNvbkJ1dHRvbigxMiwgXCJwbHVzXCIsIFwiTmV3IExheWVyXCIsIGRpc3BhdGNoZXIpO1xuICBwbHVzLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5hbWUgPSBwcm9tcHQoXCJMYXllciBuYW1lP1wiKTtcbiAgICBhZGRMYXllcihuYW1lKTtcblxuICAgIHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgXCJMYXllciBhZGRlZFwiKSk7XG5cbiAgICByZXBhaW50QWxsKCk7XG4gIH0pO1xuICBzdHlsZShwbHVzLmRvbSwgYnV0dG9uX3N0eWxlcyk7XG4gIGJvdHRvbV9yaWdodC5hcHBlbmRDaGlsZChwbHVzLmRvbSk7XG5cbiAgLy8gdHJhc2hcbiAgdmFyIHRyYXNoID0gbmV3IEljb25CdXR0b24oMTIsIFwidHJhc2hcIiwgXCJEZWxldGUgc2F2ZVwiLCBkaXNwYXRjaGVyKTtcbiAgdHJhc2gub25DbGljayhmdW5jdGlvbigpIHtcbiAgICB2YXIgbmFtZSA9IGRhdGEuZ2V0KFwibmFtZVwiKS52YWx1ZTtcbiAgICBpZiAobmFtZSAmJiBsb2NhbFN0b3JhZ2VbU1RPUkFHRV9QUkVGSVggKyBuYW1lXSkge1xuICAgICAgLypcdHZhciBvayA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdpc2ggdG8gZGVsZXRlIFwiICsgbmFtZSArIFwiP1wiKTtcbiAgICAgIGlmIChvaykge1xuICAgICAgICBkZWxldGUgbG9jYWxTdG9yYWdlW1NUT1JBR0VfUFJFRklYICsgbmFtZV07XG4gICAgICAgIGRpc3BhdGNoZXIuZmlyZShcInN0YXR1c1wiLCBuYW1lICsgXCIgZGVsZXRlZFwiKTtcbiAgICAgICAgZGlzcGF0Y2hlci5maXJlKFwic2F2ZTpkb25lXCIpO1xuICAgICAgfSovXG4gICAgfVxuICB9KTtcbiAgc3R5bGUodHJhc2guZG9tLCBidXR0b25fc3R5bGVzLCB7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH0pO1xuICBib3R0b21fcmlnaHQuYXBwZW5kQ2hpbGQodHJhc2guZG9tKTtcblxuICAvLyBwYW5lX3N0YXR1cy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnIHwgVE9ETyA8RG9jayBGdWxsIHwgRG9jayBCb3R0b24gfCBTbmFwIFdpbmRvdyBFZGdlcyB8IHpvb20gaW4gfCB6b29tIG91dCB8IFNldHRpbmdzIHwgaGVscD4nKSk7XG5cbiAgLypcblx0XHRcdEVuZCBET00gU3R1ZmZcblx0Ki9cblxuICB2YXIgZ2hvc3RwYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2hvc3RwYW5lLmlkID0gXCJnaG9zdHBhbmVcIjtcbiAgc3R5bGUoZ2hvc3RwYW5lLCB7XG4gICAgYmFja2dyb3VuZDogXCIjOTk5XCIsXG4gICAgb3BhY2l0eTogMC4yLFxuICAgIC8vcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICB6SW5kZXg6IFpfSU5ERVggLSAxLFxuICAgIC8vIHRyYW5zaXRpb246ICdhbGwgMC4yNXMgZWFzZS1pbi1vdXQnLFxuICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogXCJ0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQsIG9wYWNpdHlcIixcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IFwiMC4yNXNcIixcbiAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IFwiZWFzZS1pbi1vdXRcIlxuICB9KTtcblxuICAvL1xuICAvLyBIYW5kbGUgRE9NIFZpZXdzXG4gIC8vXG5cbiAgLy8gU2hhZG93IFJvb3RcbiAgLy92YXIgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aW1lbGluZXJcIik7XG4gIC8vZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcbiAgdmFyIHJvb3QgPSBob3N0O1xuICAvLyBpZiAocm9vdC5jcmVhdGVTaGFkb3dSb290KSByb290ID0gcm9vdC5jcmVhdGVTaGFkb3dSb290KCk7XG5cbiAgd2luZG93LnIgPSByb290O1xuXG4gIC8vIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyByb290ID0gaWZyYW1lLmNvbnRlbnREb2N1bWVudC5ib2R5O1xuXG4gIHJvb3QuYXBwZW5kQ2hpbGQocGFuZSk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoZ2hvc3RwYW5lKTtcblxuICBkaXYuYXBwZW5kQ2hpbGQobGF5ZXJfcGFuZWwuZG9tKTtcbiAgZGl2LmFwcGVuZENoaWxkKHRpbWVsaW5lLmRvbSk7XG5cbiAgdmFyIHNjcm9sbGJhciA9IG5ldyBTY3JvbGxCYXIoMjAwLCAxMCk7XG4gIGRpdi5hcHBlbmRDaGlsZChzY3JvbGxiYXIuZG9tKTtcblxuICAvLyBwZXJjZW50YWdlc1xuICBzY3JvbGxiYXIub25TY3JvbGwuZG8oZnVuY3Rpb24odHlwZSwgc2Nyb2xsVG8pIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJzY3JvbGx0b1wiOlxuICAgICAgICBsYXllcl9wYW5lbC5zY3JvbGxUbyhzY3JvbGxUbyk7XG4gICAgICAgIHRpbWVsaW5lLnNjcm9sbFRvKHNjcm9sbFRvKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvL1x0XHRjYXNlICdwYWdldXAnOlxuICAgICAgLy8gXHRcdFx0c2Nyb2xsVG9wIC09IHBhZ2VPZmZzZXQ7XG4gICAgICAvLyBcdFx0XHRtZS5kcmF3KCk7XG4gICAgICAvLyBcdFx0XHRtZS51cGRhdGVTY3JvbGxiYXIoKTtcbiAgICAgIC8vIFx0XHRcdGJyZWFrO1xuICAgICAgLy8gXHRcdGNhc2UgJ3BhZ2Vkb3duJzpcbiAgICAgIC8vIFx0XHRcdHNjcm9sbFRvcCArPSBwYWdlT2Zmc2V0O1xuICAgICAgLy8gXHRcdFx0bWUuZHJhdygpO1xuICAgICAgLy8gXHRcdFx0bWUudXBkYXRlU2Nyb2xsYmFyKCk7XG4gICAgICAvLyBcdFx0XHRicmVhaztcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xuICAvLyBcdGNvbnNvbGUubG9nKCdrcCcsIGUpO1xuICAvLyB9KTtcbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gIC8vIFx0aWYgKHVuZG8pIGNvbnNvbGUubG9nKCdVTkRPJyk7XG5cbiAgLy8gXHRjb25zb2xlLmxvZygna2QnLCBlKTtcbiAgLy8gfSk7XG5cbiAgLy8gVE9ETzogS2V5Ym9hcmQgU2hvcnRjdXRzXG4gIC8vIEVzYyAtIFN0b3AgYW5kIHJldmlldyB0byBsYXN0IHBsYXllZCBmcm9tIC8gdG8gdGhlIHN0YXJ0P1xuICAvLyBTcGFjZSAtIHBsYXkgLyBwYXVzZSBmcm9tIGN1cnJlbnQgcG9zaXRpb25cbiAgLy8gRW50ZXIgLSBwbGF5IGFsbFxuICAvLyBrIC0ga2V5ZnJhbWVcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHBsYXkgPSBlLmtleUNvZGUgPT0gMzI7IC8vIHNwYWNlXG4gICAgdmFyIGVudGVyID0gZS5rZXlDb2RlID09IDEzOyAvL1xuICAgIHZhciB1bmRvID0gZS5tZXRhS2V5ICYmIGUua2V5Q29kZSA9PSA5MSAmJiAhZS5zaGlmdEtleTtcblxuICAgIHZhciBhY3RpdmUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIC8vIGNvbnNvbGUubG9nKCBhY3RpdmUubm9kZU5hbWUgKTtcblxuICAgIGlmIChhY3RpdmUubm9kZU5hbWUubWF0Y2goLyhJTlBVVHxCVVRUT058U0VMRUNUfFRJTUVMSU5FUikvKSkge1xuICAgICAgYWN0aXZlLmJsdXIoKTtcbiAgICB9XG5cbiAgICBpZiAocGxheSkge1xuICAgICAgZGlzcGF0Y2hlci5maXJlKFwiY29udHJvbHMudG9nZ2xlX3BsYXlcIik7XG4gICAgfSBlbHNlIGlmIChlbnRlcikge1xuICAgICAgLy8gRklYTUU6IFJldHVybiBzaG91bGQgcGxheSBmcm9tIHRoZSBzdGFydCBvciBsYXN0IHBsYXllZCBmcm9tP1xuICAgICAgZGlzcGF0Y2hlci5maXJlKFwiY29udHJvbHMucmVzdGFydF9wbGF5XCIpO1xuICAgICAgLy8gZGlzcGF0Y2hlci5maXJlKCdjb250cm9scy51bmRvJyk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMjcpIHtcbiAgICAgIC8vIEVzYyA9IHN0b3AuIEZJWE1FOiBzaG91bGQgcmV3aW5kIGhlYWQgdG8gbGFzdCBwbGF5ZWQgZnJvbSBvciBMYXN0IHBvaW50ZWQgZnJvbT9cbiAgICAgIGRpc3BhdGNoZXIuZmlyZShcImNvbnRyb2xzLnBhdXNlXCIpO1xuICAgIH0gZWxzZSBjb25zb2xlLmxvZyhcImtleWRvd25cIiwgZS5rZXlDb2RlKTtcbiAgfSk7XG5cbiAgdmFyIG5lZWRzUmVzaXplID0gdHJ1ZTtcblxuICBmdW5jdGlvbiByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIC8vIGRhdGEuZ2V0KCd1aTpib3VuZHMnKS52YWx1ZSA9IHtcbiAgICAvLyBcdHdpZHRoOiB3aWR0aCxcbiAgICAvLyBcdGhlaWdodDogaGVpZ2h0XG4gICAgLy8gfTtcbiAgICAvLyBUT0RPOiByZW1vdmUgdWdseSBoYXJkY29kZXNcbiAgICB3aWR0aCAtPSA0O1xuICAgIGhlaWdodCAtPSA0NDtcblxuICAgIFNldHRpbmdzLndpZHRoID0gd2lkdGggLSBTZXR0aW5ncy5MRUZUX1BBTkVfV0lEVEg7XG4gICAgU2V0dGluZ3MuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgU2V0dGluZ3MuVElNRUxJTkVfU0NST0xMX0hFSUdIVCA9IGhlaWdodCAtIFNldHRpbmdzLk1BUktFUl9UUkFDS19IRUlHSFQ7XG4gICAgdmFyIHNjcm9sbGFibGVfaGVpZ2h0ID0gU2V0dGluZ3MuVElNRUxJTkVfU0NST0xMX0hFSUdIVDtcblxuICAgIHNjcm9sbGJhci5zZXRIZWlnaHQoc2Nyb2xsYWJsZV9oZWlnaHQgLSAyKTtcbiAgICAvLyBzY3JvbGxiYXIuc2V0VGh1bWJcblxuICAgIHN0eWxlKHNjcm9sbGJhci5kb20sIHtcbiAgICAgIHRvcDogU2V0dGluZ3MuTUFSS0VSX1RSQUNLX0hFSUdIVCArIFwicHhcIixcbiAgICAgIGxlZnQ6IHdpZHRoIC0gMTYgKyBcInB4XCJcbiAgICB9KTtcblxuICAgIG5lZWRzUmVzaXplID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3R5bGUobGVmdCwgcmlnaHQpIHtcbiAgICBsZWZ0LnN0eWxlLmNzc1RleHQgPVxuICAgICAgXCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDBweDsgdG9wOiAwcHg7IGhlaWdodDogXCIgK1xuICAgICAgU2V0dGluZ3MuaGVpZ2h0ICtcbiAgICAgIFwicHg7XCI7XG4gICAgc3R5bGUobGVmdCwge1xuICAgICAgLy8gYmFja2dyb3VuZDogVGhlbWUuYSxcbiAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG4gICAgfSk7XG4gICAgbGVmdC5zdHlsZS53aWR0aCA9IFNldHRpbmdzLkxFRlRfUEFORV9XSURUSCArIFwicHhcIjtcblxuICAgIC8vIHJpZ2h0LnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246IGFic29sdXRlOyB0b3A6IDBweDsnO1xuICAgIHJpZ2h0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHJpZ2h0LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgcmlnaHQuc3R5bGUubGVmdCA9IFNldHRpbmdzLkxFRlRfUEFORV9XSURUSCArIFwicHhcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZExheWVyKG5hbWUpIHtcbiAgICB2YXIgbGF5ZXIgPSBuZXcgTGF5ZXJQcm9wKG5hbWUpO1xuXG4gICAgbGF5ZXJzID0gbGF5ZXJfc3RvcmUudmFsdWU7XG4gICAgbGF5ZXJzLnB1c2gobGF5ZXIpO1xuXG4gICAgbGF5ZXJfcGFuZWwuc2V0U3RhdGUobGF5ZXJfc3RvcmUpO1xuICB9XG5cbiAgdGhpcy5hZGRMYXllciA9IGFkZExheWVyO1xuXG4gIHRoaXMuc2V0VGFyZ2V0ID0gZnVuY3Rpb24odCkge1xuICAgIHRpbWVsaW5lID0gdDtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRWYWx1ZVJhbmdlcyhyYW5nZXMsIGludGVydmFsKSB7XG4gICAgaW50ZXJ2YWwgPSBpbnRlcnZhbCA/IGludGVydmFsIDogMC4xNTtcbiAgICByYW5nZXMgPSByYW5nZXMgPyByYW5nZXMgOiAyO1xuXG4gICAgLy8gbm90IG9wdGltaXplZCFcbiAgICB2YXIgdCA9IGRhdGEuZ2V0KFwidWk6Y3VycmVudFRpbWVcIikudmFsdWU7XG5cbiAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICBmb3IgKHZhciB1ID0gLXJhbmdlczsgdSA8PSByYW5nZXM7IHUrKykge1xuICAgICAgLy8gaWYgKHUgPT0gMCkgY29udGludWU7XG4gICAgICB2YXIgbyA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBsID0gMDsgbCA8IGxheWVycy5sZW5ndGg7IGwrKykge1xuICAgICAgICB2YXIgbGF5ZXIgPSBsYXllcnNbbF07XG4gICAgICAgIHZhciBtID0gdXRpbHMudGltZUF0TGF5ZXIobGF5ZXIsIHQgKyB1ICogaW50ZXJ2YWwpO1xuICAgICAgICBvW2xheWVyLm5hbWVdID0gbS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFsdWVzLnB1c2gobyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHRoaXMuZ2V0VmFsdWVzID0gZ2V0VmFsdWVSYW5nZXM7XG5cbiAgKGZ1bmN0aW9uIERvY2tpbmdXaW5kb3coKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBNaW5pbXVtIHJlc2l6YWJsZSBhcmVhXG4gICAgdmFyIG1pbldpZHRoID0gMTAwO1xuICAgIHZhciBtaW5IZWlnaHQgPSA4MDtcblxuICAgIC8vIFRocmVzaG9sZHNcbiAgICB2YXIgRlVMTFNDUkVFTl9NQVJHSU5TID0gMjtcbiAgICB2YXIgU05BUF9NQVJHSU5TID0gODtcbiAgICB2YXIgTUFSR0lOUyA9IDI7XG5cbiAgICAvLyBFbmQgb2Ygd2hhdCdzIGNvbmZpZ3VyYWJsZS5cblxuICAgIHZhciBjbGlja2VkID0gbnVsbDtcbiAgICB2YXIgb25SaWdodEVkZ2UsIG9uQm90dG9tRWRnZSwgb25MZWZ0RWRnZSwgb25Ub3BFZGdlO1xuXG4gICAgdmFyIHByZVNuYXBwZWQ7XG5cbiAgICB2YXIgYiwgeCwgeTtcblxuICAgIHZhciByZWRyYXcgPSBmYWxzZTtcblxuICAgIC8vIHZhciBwYW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbmUnKTtcbiAgICAvLyB2YXIgZ2hvc3RwYW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dob3N0cGFuZScpO1xuXG4gICAgdmFyIG1vdXNlT25UaXRsZSA9IGZhbHNlO1xuICAgIHZhciBzbmFwVHlwZTtcblxuICAgIHBhbmVfdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgIG1vdXNlT25UaXRsZSA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBwYW5lX3RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIG1vdXNlT25UaXRsZSA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgcmVzaXplX2Z1bGwub25DbGljayhmdW5jdGlvbigpIHtcbiAgICAgIC8vIFRPT0QgdG9nZ2xlIGJhY2sgdG8gcmVzdG9yZWQgc2l6ZVxuICAgICAgaWYgKCFwcmVTbmFwcGVkKVxuICAgICAgICBwcmVTbmFwcGVkID0ge1xuICAgICAgICAgIHdpZHRoOiBiLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogYi5oZWlnaHRcbiAgICAgICAgfTtcblxuICAgICAgc25hcFR5cGUgPSBcImZ1bGwtc2NyZWVuXCI7XG4gICAgICByZXNpemVFZGdlcygpO1xuICAgIH0pO1xuXG4gICAgLy8gcGFuZV9zdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gXHRtb3VzZU9uVGl0bGUgPSB0cnVlO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gcGFuZV9zdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAvLyBcdG1vdXNlT25UaXRsZSA9IGZhbHNlO1xuICAgIC8vIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc25hcFR5cGUpIHJlc2l6ZUVkZ2VzKCk7XG4gICAgICBlbHNlIG5lZWRzUmVzaXplID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIC8vIHV0aWxzXG4gICAgZnVuY3Rpb24gc2V0Qm91bmRzKGVsZW1lbnQsIHgsIHksIHcsIGgpIHtcbiAgICAgIGlmIChlbGVtZW50ID09PSBwYW5lKSB7XG4gICAgICAgIC8vZWxlbWVudC5zdHlsZS53aWR0aCA9IHcgKyBcInB4XCI7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc29sZS5sb2cod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHggKyBcInB4XCI7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0geSArIFwicHhcIjtcbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IHcgKyBcInB4XCI7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaCArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaW50SGlkZSgpIHtcbiAgICAgIHNldEJvdW5kcyhnaG9zdHBhbmUsIGIubGVmdCwgYi50b3AsIGIud2lkdGgsIGIuaGVpZ2h0KTtcbiAgICAgIGdob3N0cGFuZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICB9XG5cbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc29sZS5sb2cod2lkdGgsIGhlaWdodCk7XG4gICAgc2V0Qm91bmRzKHBhbmUsIDAsIDAsIFNldHRpbmdzLndpZHRoLCBTZXR0aW5ncy5oZWlnaHQpO1xuICAgIC8vc2V0Qm91bmRzKGdob3N0cGFuZSwgMCwgMCwgU2V0dGluZ3Mud2lkdGgsIFNldHRpbmdzLmhlaWdodCk7XG5cbiAgICAvLyBNb3VzZSBldmVudHNcbiAgICBwYW5lLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgb25Nb3VzZURvd24pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvblVwKTtcblxuICAgIC8vIFRvdWNoIGV2ZW50c1xuICAgIHBhbmUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgb25Ub3VjaERvd24pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgb25Ub3VjaE1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBvblRvdWNoRW5kKTtcblxuICAgIGZ1bmN0aW9uIG9uVG91Y2hEb3duKGUpIHtcbiAgICAgIG9uRG93bihlLnRvdWNoZXNbMF0pO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICAgIG9uTW92ZShlLnRvdWNoZXNbMF0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVG91Y2hFbmQoZSkge1xuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT0gMCkgb25VcChlLmNoYW5nZWRUb3VjaGVzWzBdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICBvbkRvd24oZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Eb3duKGUpIHtcbiAgICAgIGNhbGMoZSk7XG5cbiAgICAgIHZhciBpc1Jlc2l6aW5nID0gb25SaWdodEVkZ2UgfHwgb25Cb3R0b21FZGdlIHx8IG9uVG9wRWRnZSB8fCBvbkxlZnRFZGdlO1xuICAgICAgdmFyIGlzTW92aW5nID0gIWlzUmVzaXppbmcgJiYgY2FuTW92ZSgpO1xuXG4gICAgICBjbGlja2VkID0ge1xuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5LFxuICAgICAgICBjeDogZS5jbGllbnRYLFxuICAgICAgICBjeTogZS5jbGllbnRZLFxuICAgICAgICB3OiBiLndpZHRoLFxuICAgICAgICBoOiBiLmhlaWdodCxcbiAgICAgICAgaXNSZXNpemluZzogaXNSZXNpemluZyxcbiAgICAgICAgaXNNb3Zpbmc6IGlzTW92aW5nLFxuICAgICAgICBvblRvcEVkZ2U6IG9uVG9wRWRnZSxcbiAgICAgICAgb25MZWZ0RWRnZTogb25MZWZ0RWRnZSxcbiAgICAgICAgb25SaWdodEVkZ2U6IG9uUmlnaHRFZGdlLFxuICAgICAgICBvbkJvdHRvbUVkZ2U6IG9uQm90dG9tRWRnZVxuICAgICAgfTtcblxuICAgICAgaWYgKGlzUmVzaXppbmcgfHwgaXNNb3ZpbmcpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbk1vdmUoKSB7XG4gICAgICByZXR1cm4gbW91c2VPblRpdGxlO1xuICAgICAgLy8gcmV0dXJuIHggPiAwICYmIHggPCBiLndpZHRoICYmIHkgPiAwICYmIHkgPCBiLmhlaWdodFxuICAgICAgLy8gJiYgeSA8IDE4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGMoZSkge1xuICAgICAgYiA9IHBhbmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB4ID0gZS5jbGllbnRYIC0gYi5sZWZ0O1xuICAgICAgeSA9IGUuY2xpZW50WSAtIGIudG9wO1xuXG4gICAgICBvblRvcEVkZ2UgPSB5IDwgTUFSR0lOUztcbiAgICAgIG9uTGVmdEVkZ2UgPSB4IDwgTUFSR0lOUztcbiAgICAgIG9uUmlnaHRFZGdlID0geCA+PSBiLndpZHRoIC0gTUFSR0lOUztcbiAgICAgIG9uQm90dG9tRWRnZSA9IHkgPj0gYi5oZWlnaHQgLSBNQVJHSU5TO1xuICAgIH1cblxuICAgIHZhciBlOyAvLyBjdXJyZW50IG1vdXNlbW92ZSBldmVudFxuXG4gICAgZnVuY3Rpb24gb25Nb3ZlKGVlKSB7XG4gICAgICBlID0gZWU7XG4gICAgICBjYWxjKGUpO1xuXG4gICAgICByZWRyYXcgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cbiAgICAgIGlmICghcmVkcmF3KSByZXR1cm47XG5cbiAgICAgIHJlZHJhdyA9IGZhbHNlO1xuXG4gICAgICBpZiAoY2xpY2tlZCAmJiBjbGlja2VkLmlzUmVzaXppbmcpIHtcbiAgICAgICAgaWYgKGNsaWNrZWQub25SaWdodEVkZ2UpXG4gICAgICAgICAgcGFuZS5zdHlsZS53aWR0aCA9IE1hdGgubWF4KHgsIG1pbldpZHRoKSArIFwicHhcIjtcbiAgICAgICAgaWYgKGNsaWNrZWQub25Cb3R0b21FZGdlKVxuICAgICAgICAgIHBhbmUuc3R5bGUuaGVpZ2h0ID0gTWF0aC5tYXgoeSwgbWluSGVpZ2h0KSArIFwicHhcIjtcblxuICAgICAgICBpZiAoY2xpY2tlZC5vbkxlZnRFZGdlKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRXaWR0aCA9IE1hdGgubWF4KFxuICAgICAgICAgICAgY2xpY2tlZC5jeCAtIGUuY2xpZW50WCArIGNsaWNrZWQudyxcbiAgICAgICAgICAgIG1pbldpZHRoXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoY3VycmVudFdpZHRoID4gbWluV2lkdGgpIHtcbiAgICAgICAgICAgIHBhbmUuc3R5bGUud2lkdGggPSBjdXJyZW50V2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICBwYW5lLnN0eWxlLmxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsaWNrZWQub25Ub3BFZGdlKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRIZWlnaHQgPSBNYXRoLm1heChcbiAgICAgICAgICAgIGNsaWNrZWQuY3kgLSBlLmNsaWVudFkgKyBjbGlja2VkLmgsXG4gICAgICAgICAgICBtaW5IZWlnaHRcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChjdXJyZW50SGVpZ2h0ID4gbWluSGVpZ2h0KSB7XG4gICAgICAgICAgICBwYW5lLnN0eWxlLmhlaWdodCA9IGN1cnJlbnRIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICBwYW5lLnN0eWxlLnRvcCA9IGUuY2xpZW50WSArIFwicHhcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoaW50SGlkZSgpO1xuXG4gICAgICAgIHJlc2l6ZShiLndpZHRoLCBiLmhlaWdodCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xpY2tlZCAmJiBjbGlja2VkLmlzTW92aW5nKSB7XG4gICAgICAgIHN3aXRjaCAoY2hlY2tzKCkpIHtcbiAgICAgICAgICBjYXNlIFwiZnVsbC1zY3JlZW5cIjpcbiAgICAgICAgICAgIHNldEJvdW5kcyhnaG9zdHBhbmUsIDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICAgICAgZ2hvc3RwYW5lLnN0eWxlLm9wYWNpdHkgPSAwLjI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwic25hcC10b3AtZWRnZVwiOlxuICAgICAgICAgICAgc2V0Qm91bmRzKFxuICAgICAgICAgICAgICBnaG9zdHBhbmUsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZ2hvc3RwYW5lLnN0eWxlLm9wYWNpdHkgPSAwLjI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwic25hcC1sZWZ0LWVkZ2VcIjpcbiAgICAgICAgICAgIHNldEJvdW5kcyhcbiAgICAgICAgICAgICAgZ2hvc3RwYW5lLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsXG4gICAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGdob3N0cGFuZS5zdHlsZS5vcGFjaXR5ID0gMC4yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInNuYXAtcmlnaHQtZWRnZVwiOlxuICAgICAgICAgICAgc2V0Qm91bmRzKFxuICAgICAgICAgICAgICBnaG9zdHBhbmUsXG4gICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gMixcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyAyLFxuICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBnaG9zdHBhbmUuc3R5bGUub3BhY2l0eSA9IDAuMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJzbmFwLWJvdHRvbS1lZGdlXCI6XG4gICAgICAgICAgICBzZXRCb3VuZHMoXG4gICAgICAgICAgICAgIGdob3N0cGFuZSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMixcbiAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAvIDJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBnaG9zdHBhbmUuc3R5bGUub3BhY2l0eSA9IDAuMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBoaW50SGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZVNuYXBwZWQpIHtcbiAgICAgICAgICBzZXRCb3VuZHMoXG4gICAgICAgICAgICBwYW5lLFxuICAgICAgICAgICAgZS5jbGllbnRYIC0gcHJlU25hcHBlZC53aWR0aCAvIDIsXG4gICAgICAgICAgICBlLmNsaWVudFkgLSBNYXRoLm1pbihjbGlja2VkLnksIHByZVNuYXBwZWQuaGVpZ2h0KSxcbiAgICAgICAgICAgIHByZVNuYXBwZWQud2lkdGgsXG4gICAgICAgICAgICBwcmVTbmFwcGVkLmhlaWdodFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW92aW5nXG4gICAgICAgIHBhbmUuc3R5bGUudG9wID0gZS5jbGllbnRZIC0gY2xpY2tlZC55ICsgXCJweFwiO1xuICAgICAgICBwYW5lLnN0eWxlLmxlZnQgPSBlLmNsaWVudFggLSBjbGlja2VkLnggKyBcInB4XCI7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGlzIGNvZGUgZXhlY3V0ZXMgd2hlbiBtb3VzZSBtb3ZlcyB3aXRob3V0IGNsaWNraW5nXG5cbiAgICAgIC8vIHN0eWxlIGN1cnNvclxuICAgICAgaWYgKChvblJpZ2h0RWRnZSAmJiBvbkJvdHRvbUVkZ2UpIHx8IChvbkxlZnRFZGdlICYmIG9uVG9wRWRnZSkpIHtcbiAgICAgICAgcGFuZS5zdHlsZS5jdXJzb3IgPSBcIm53c2UtcmVzaXplXCI7XG4gICAgICB9IGVsc2UgaWYgKChvblJpZ2h0RWRnZSAmJiBvblRvcEVkZ2UpIHx8IChvbkJvdHRvbUVkZ2UgJiYgb25MZWZ0RWRnZSkpIHtcbiAgICAgICAgcGFuZS5zdHlsZS5jdXJzb3IgPSBcIm5lc3ctcmVzaXplXCI7XG4gICAgICB9IGVsc2UgaWYgKG9uUmlnaHRFZGdlIHx8IG9uTGVmdEVkZ2UpIHtcbiAgICAgICAgcGFuZS5zdHlsZS5jdXJzb3IgPSBcImV3LXJlc2l6ZVwiO1xuICAgICAgfSBlbHNlIGlmIChvbkJvdHRvbUVkZ2UgfHwgb25Ub3BFZGdlKSB7XG4gICAgICAgIHBhbmUuc3R5bGUuY3Vyc29yID0gXCJucy1yZXNpemVcIjtcbiAgICAgIH0gZWxzZSBpZiAoY2FuTW92ZSgpKSB7XG4gICAgICAgIHBhbmUuc3R5bGUuY3Vyc29yID0gXCJtb3ZlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYW5lLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrcygpIHtcbiAgICAgIC8qXG5cdFx0XHR2YXIgcmlnaHRTY3JlZW5FZGdlLCBib3R0b21TY3JlZW5FZGdlO1xuXG5cdFx0XHRyaWdodFNjcmVlbkVkZ2UgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIE1BUkdJTlM7XG5cdFx0XHRib3R0b21TY3JlZW5FZGdlID0gd2luZG93LmlubmVySGVpZ2h0IC0gTUFSR0lOUztcblxuXHRcdFx0Ly8gRWRnZSBDaGVja2luZ3Ncblx0XHRcdC8vIGhpbnRGdWxsKCk7XG5cdFx0XHRpZiAoYi50b3AgPCBGVUxMU0NSRUVOX01BUkdJTlMgfHwgYi5sZWZ0IDwgRlVMTFNDUkVFTl9NQVJHSU5TIHx8IGIucmlnaHQgPiB3aW5kb3cuaW5uZXJXaWR0aCAtIEZVTExTQ1JFRU5fTUFSR0lOUyB8fCBiLmJvdHRvbSA+IHdpbmRvdy5pbm5lckhlaWdodCAtIEZVTExTQ1JFRU5fTUFSR0lOUylcblx0XHRcdFx0cmV0dXJuICdmdWxsLXNjcmVlbic7XG5cblx0XHRcdC8vIGhpbnRUb3AoKTtcblx0XHRcdGlmIChiLnRvcCA8IE1BUkdJTlMpIHJldHVybiAnc25hcC10b3AtZWRnZSc7XG5cblx0XHRcdC8vIGhpbnRMZWZ0KCk7XG5cdFx0XHRpZiAoYi5sZWZ0IDwgTUFSR0lOUykgcmV0dXJuICdzbmFwLWxlZnQtZWRnZSc7XG5cblx0XHRcdC8vIGhpbnRSaWdodCgpO1xuXHRcdFx0aWYgKGIucmlnaHQgPiByaWdodFNjcmVlbkVkZ2UpIHJldHVybiAnc25hcC1yaWdodC1lZGdlJztcblxuXHRcdFx0Ly8gaGludEJvdHRvbSgpO1xuXHRcdFx0aWYgKGIuYm90dG9tID4gYm90dG9tU2NyZWVuRWRnZSkgcmV0dXJuICdzbmFwLWJvdHRvbS1lZGdlJztcblx0XHRcdCovXG5cbiAgICAgIGlmIChlLmNsaWVudFkgPCBGVUxMU0NSRUVOX01BUkdJTlMpIHJldHVybiBcImZ1bGwtc2NyZWVuXCI7XG5cbiAgICAgIGlmIChlLmNsaWVudFkgPCBTTkFQX01BUkdJTlMpIHJldHVybiBcInNuYXAtdG9wLWVkZ2VcIjtcblxuICAgICAgLy8gaGludExlZnQoKTtcbiAgICAgIGlmIChlLmNsaWVudFggPCBTTkFQX01BUkdJTlMpIHJldHVybiBcInNuYXAtbGVmdC1lZGdlXCI7XG5cbiAgICAgIC8vIGhpbnRSaWdodCgpO1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIC0gZS5jbGllbnRYIDwgU05BUF9NQVJHSU5TKVxuICAgICAgICByZXR1cm4gXCJzbmFwLXJpZ2h0LWVkZ2VcIjtcblxuICAgICAgLy8gaGludEJvdHRvbSgpO1xuICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCAtIGUuY2xpZW50WSA8IFNOQVBfTUFSR0lOUylcbiAgICAgICAgcmV0dXJuIFwic25hcC1ib3R0b20tZWRnZVwiO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKTtcblxuICAgIGZ1bmN0aW9uIHJlc2l6ZUVkZ2VzKCkge1xuICAgICAgc3dpdGNoIChzbmFwVHlwZSkge1xuICAgICAgICBjYXNlIFwiZnVsbC1zY3JlZW5cIjpcbiAgICAgICAgICAvLyBoaW50RnVsbCgpO1xuICAgICAgICAgIHNldEJvdW5kcyhwYW5lLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNuYXAtdG9wLWVkZ2VcIjpcbiAgICAgICAgICAvLyBoaW50VG9wKCk7XG4gICAgICAgICAgc2V0Qm91bmRzKHBhbmUsIDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNuYXAtbGVmdC1lZGdlXCI6XG4gICAgICAgICAgLy8gaGludExlZnQoKTtcbiAgICAgICAgICBzZXRCb3VuZHMocGFuZSwgMCwgMCwgd2luZG93LmlubmVyV2lkdGggLyAyLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic25hcC1yaWdodC1lZGdlXCI6XG4gICAgICAgICAgc2V0Qm91bmRzKFxuICAgICAgICAgICAgcGFuZSxcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gMixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic25hcC1ib3R0b20tZWRnZVwiOlxuICAgICAgICAgIHNldEJvdW5kcyhcbiAgICAgICAgICAgIHBhbmUsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25VcChlKSB7XG4gICAgICBjYWxjKGUpO1xuXG4gICAgICBpZiAoY2xpY2tlZCAmJiBjbGlja2VkLmlzTW92aW5nKSB7XG4gICAgICAgIC8vIFNuYXBcbiAgICAgICAgc25hcFR5cGUgPSBjaGVja3MoKTtcbiAgICAgICAgaWYgKHNuYXBUeXBlKSB7XG4gICAgICAgICAgcHJlU25hcHBlZCA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBiLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBiLmhlaWdodFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmVzaXplRWRnZXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmVTbmFwcGVkID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhpbnRIaWRlKCk7XG4gICAgICB9XG5cbiAgICAgIGNsaWNrZWQgPSBudWxsO1xuICAgIH1cbiAgfSkoKTtcbn1cblxud2luZG93LlRpbWVsaW5lciA9IFRpbWVsaW5lcjtcbiIsInZhciBoYW5kbGVEcmFnID0gcmVxdWlyZSgnLi91dGlsX2hhbmRsZV9kcmFnJyk7XG5cbmZ1bmN0aW9uIENhbnZhcyh3LCBoKSB7XG5cblx0dmFyIGNhbnZhcywgY3R4LCB3aWR0aCwgaGVpZ2h0LCBkcHI7XG5cblx0dmFyIGNhbnZhc0l0ZW1zID0gW107XG5cdHZhciBjaGlsZDtcblxuXHRmdW5jdGlvbiBjcmVhdGUoKSB7XG5cdFx0Y2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdFx0Y3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRTaXplKHcsIGgpIHtcblx0XHR3aWR0aCA9IHc7XG5cdFx0aGVpZ2h0ID0gaDtcblx0XHRkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblx0XHRjYW52YXMud2lkdGggPSB3aWR0aCAqIGRwcjtcblx0XHRjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0ICogZHByO1xuXHRcdGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4Jztcblx0XHRjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuXHRcdGlmIChjaGlsZCkgY2hpbGQuc2V0U2l6ZSh3LCBoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHBhaW50KGN0eCkge1xuXHRcdGlmIChjaGlsZCkge1xuXHRcdFx0aWYgKCFjaGlsZC5wYWludCkgY29uc29sZS53YXJuKCdpbXBsZW1lbnQgcmVwYWludCgpJylcblx0XHRcdGNoaWxkLnBhaW50KGN0eCk7XG5cdFx0fVxuXG5cdFx0dmFyIGl0ZW07XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYW52YXNJdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aXRlbSA9IGNhbnZhc0l0ZW1zW2ldO1xuXHRcdFx0aXRlbS5wYWludCgpXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVwYWludCgpIHtcblx0XHRwYWludChjdHgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkKGl0ZW0pIHtcblx0XHRjYW52YXNJdGVtcy5wdXNoKGl0ZW0pXG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmUoaXRlbSkge1xuXHRcdGNhbnZhc0l0ZW1zLnNwbGljZShjYW52YXNJdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVzZXMoYykge1xuXHRcdGNoaWxkID0gYztcblx0XHRjaGlsZC5hZGQgPSB0aGlzLmFkZDtcblx0XHRjaGlsZC5yZW1vdmUgPSB0aGlzLnJlbW92ZTtcblx0fVxuXG5cdGNyZWF0ZSgpO1xuXHRzZXRTaXplKHcsIGgpO1xuXHR0aGlzLnNldFNpemUgPSBzZXRTaXplO1xuXHR0aGlzLnJlcGFpbnQgPSByZXBhaW50O1xuXHR0aGlzLnVzZXMgPSB1c2VzO1xuXG5cdHRoaXMuZG9tID0gY2FudmFzO1xuXG5cdGhhbmRsZURyYWcoY2FudmFzLFxuXHRcdGZ1bmN0aW9uIGRvd24oZSkge1xuXHRcdFx0aWYgKGNoaWxkLm9uRG93bikgeyBjaGlsZC5vbkRvd24oZSkgfTtcblx0XHR9LFxuXHRcdGZ1bmN0aW9uIG1vdmUoZSkge1xuXHRcdFx0aWYgKGNoaWxkLm9uTW92ZSkgeyBjaGlsZC5vbk1vdmUoZSkgfTtcblx0XHR9LFxuXHRcdGZ1bmN0aW9uIHVwKGUpIHtcblx0XHRcdGlmIChjaGlsZC5vblVwKSB7IGNoaWxkLm9uVXAoZSkgfTtcblx0XHR9XG5cdFx0Ly8gZnVuY3Rpb24gaGl0KGUpIHtcblx0XHQvLyBcdGlmIChjaGlsZC5vbkhpdCkgeyBjaGlsZC5vbkhpdChlKSB9O1xuXHRcdC8vIH1cblx0KTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcblxuLypcbiAqIFVzYWdlOiBjYW52YXMgPSBuZXcgQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xuICogY2FudmFzLnJlc2l6ZSgpO1xuICovXG5cbi8vIGNoaWxkcmVuXG4vLyAxOiBvdmVycmlkZSByZXBhaW50XG4vLyAyOiBhZGQgb2JqZWN0c1xuLy8gQ2FudmFzLnVzZXMoQ2FudmFzQ2hpbGQpO1xuLy8gQ2FudmFzSXRlbVxuLy8gd2lkdGgsIGhlaWdodCwgeCwgeVxuLy8gYWxsb3cgRHJhZ1xuLy8gYWxsb3cgQ2xpY2tcbi8vIG1vdXNlT3ZlclxuLy8gXG5cbiIsInZhciBmb250ID0gcmVxdWlyZSgnLi9mb250Lmpzb24nKSxcblx0VGhlbWUgPSByZXF1aXJlKCcuL3RoZW1lJyksXG5cdHN0eWxlID0gcmVxdWlyZSgnLi91dGlscycpLnN0eWxlO1xuXG52YXIgZHA7XG5cbmZ1bmN0aW9uIEljb25CdXR0b24oc2l6ZSwgaWNvbiwgdG9vbHRpcCwgZHApIHtcblx0dmFyIGljb25TdHlsZSA9IHtcblx0XHRwYWRkaW5nOiAnMC4yZW0gMC40ZW0nLFxuXHRcdG1hcmdpbjogJzBlbScsXG5cdFx0YmFja2dyb3VuZDogJ25vbmUnLFxuXHRcdG91dGxpbmU6ICdub25lJyxcblx0XHRmb250U2l6ZTogJzE2cHgnLFxuXHRcdGJvcmRlcjogJ25vbmUnLFxuXHRcdGJvcmRlclJhZGl1czogJzAuMmVtJyxcblx0fTtcblxuXHR2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdHN0eWxlKGJ1dHRvbiwgaWNvblN0eWxlKTtcblxuXHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuXHRidXR0b24uYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuXHR0aGlzLmN0eCA9IGN0eDtcblx0dGhpcy5kb20gPSBidXR0b247XG5cdHRoaXMuY2FudmFzID0gY2FudmFzO1xuXG5cdHZhciBtZSA9IHRoaXM7XG5cdHRoaXMuc2l6ZSA9IHNpemU7XG5cdHZhciBkcHIgPSAxO1xuXG5cdHRoaXMucmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0ZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdFx0dmFyIGhlaWdodCA9IHNpemU7XG5cblx0XHR2YXIgZ2x5cGggPSBmb250LmZvbnRzW2ljb25dO1xuXG5cdFx0Y2FudmFzLmhlaWdodCA9IGhlaWdodCAqIGRwcjtcblx0XHRjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuXHRcdHZhciBzY2FsZSA9IGhlaWdodCAvIGZvbnQudW5pdHNQZXJFbTtcblx0XHR2YXIgd2lkdGggPSBnbHlwaC5hZHZhbmNlV2lkdGggKiBzY2FsZSArIDAuNSB8IDA7XG5cblx0XHR3aWR0aCArPSAyO1xuXHRcdGhlaWdodCArPSAyO1xuXG5cdFx0Y2FudmFzLndpZHRoID0gd2lkdGggKiBkcHI7XG5cdFx0Y2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFRoZW1lLmM7XG5cdFx0bWUuZHJhdygpO1xuXHR9O1xuXG5cdGlmIChkcCkgZHAub24oJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcblxuXHR0aGlzLnNldFNpemUgPSBmdW5jdGlvbihzKSB7XG5cdFx0c2l6ZSA9IHM7XG5cdFx0dGhpcy5yZXNpemUoKTtcblx0fTtcblxuXHR0aGlzLnNldEljb24gPSBmdW5jdGlvbihpY29uKSB7XG5cdFx0bWUuaWNvbiA9IGljb247XG5cblx0XHRpZiAoIWZvbnQuZm9udHNbaWNvbl0pIGNvbnNvbGUud2FybignRm9udCBpY29uIG5vdCBmb3VuZCEnKTtcblx0XHR0aGlzLnJlc2l6ZSgpO1xuXHR9O1xuXG5cdHRoaXMub25DbGljayA9IGZ1bmN0aW9uKGUpIHtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlKTtcblx0fTtcblxuXHR2YXIgTE9OR19IT0xEX0RVUkFUSU9OID0gNTAwO1xuXHR2YXIgbG9uZ0hvbGRUaW1lcjtcblxuXHR0aGlzLm9uTG9uZ0hvbGQgPSBmdW5jdGlvbihmKSB7XG5cdFx0Ly8gbm90IG1vc3QgZWxhZ2VudCBidXQgb2ggd2VsbHMuXG5cdFx0ZnVuY3Rpb24gc3RhcnRIb2xkKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRsb25nSG9sZFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKGxvbmdIb2xkVGltZXIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnTE9ORyBIT0xELUVEIScpO1xuXHRcdFx0XHRcdGYoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgTE9OR19IT0xEX0RVUkFUSU9OKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBjbGVhckxvbmdIb2xkVGltZXIoKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQobG9uZ0hvbGRUaW1lcik7XG5cdFx0fVxuXHRcdFxuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzdGFydEhvbGQpO1xuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc3RhcnRIb2xkKTtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGNsZWFyTG9uZ0hvbGRUaW1lcik7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgY2xlYXJMb25nSG9sZFRpbWVyKTtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBjbGVhckxvbmdIb2xkVGltZXIpO1xuXHR9O1xuXG5cdHRoaXMuc2V0VGlwID0gZnVuY3Rpb24odGlwKSB7XG5cdFx0dG9vbHRpcCA9IHRpcDtcblx0fTtcblxuXHR2YXIgYm9yZGVycyA9IHtcblx0XHRib3JkZXI6ICcxcHggc29saWQgJyArIFRoZW1lLmIsXG5cdFx0Ly8gYm94U2hhZG93OiBUaGVtZS5iICsgJyAxcHggMXB4J1xuXHR9O1xuXG5cdHZhciBub19ib3JkZXJzID0ge1xuXHRcdGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG5cdFx0Ly8gYm94U2hhZG93OiAnbm9uZSdcblx0fTtcblxuXHR2YXIgbm9ybWFsID0gJ25vbmUnOyAvLyBUaGVtZS5iO1xuXHR2YXIgdXAgPSBUaGVtZS5jO1xuXHR2YXIgZG93biA9IFRoZW1lLmI7XG5cblx0YnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSBub3JtYWw7XG5cdHN0eWxlKGJ1dHRvbiwgbm9fYm9yZGVycyk7XG5cblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gdXA7XG5cdFx0c3R5bGUoYnV0dG9uLCBib3JkZXJzKTtcblx0XHRcblx0XHRjdHguZmlsbFN0eWxlID0gVGhlbWUuZDtcblx0XHQvLyBtZS5kcm9wc2hhZG93ID0gdHJ1ZTtcblx0XHRjdHguc2hhZG93Q29sb3IgPSBUaGVtZS5iO1xuXHRcdGN0eC5zaGFkb3dCbHVyID0gMC41ICogZHByO1xuXHRcdGN0eC5zaGFkb3dPZmZzZXRYID0gMSAqIGRwcjtcblx0XHRjdHguc2hhZG93T2Zmc2V0WSA9IDEgKiBkcHI7XG5cdFx0bWUuZHJhdygpO1xuXG5cdFx0aWYgKHRvb2x0aXAgJiYgZHApIGRwLmZpcmUoJ3N0YXR1cycsICdidXR0b246ICcgKyB0b29sdGlwKTtcblx0fSk7XG5cblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCkge1xuXHRcdGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gZG93bjtcblx0XHQvLyBjdHguZmlsbFN0eWxlID0gVGhlbWUuYjtcblx0XHQvLyBtZS5kcmF3KCk7XG5cdH0pO1xuXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24oKSB7XG5cdFx0Ly8gY3R4LmZpbGxTdHlsZSA9IFRoZW1lLmQ7XG5cdFx0YnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSBub3JtYWw7XG5cdFx0c3R5bGUoYnV0dG9uLCBib3JkZXJzKTtcblx0XHQvLyBtZS5kcmF3KCk7XG5cdH0pO1xuXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIGN0eC5maWxsU3R5bGUgPSBUaGVtZS5jO1xuXHRcdFxuXG5cdFx0YnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSBub3JtYWw7XG5cdFx0c3R5bGUoYnV0dG9uLCBub19ib3JkZXJzKTtcblx0XHRtZS5kcm9wc2hhZG93ID0gZmFsc2U7XG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFRoZW1lLmM7XG5cdFx0Y3R4LnNoYWRvd0NvbG9yID0gbnVsbDtcblx0XHRjdHguc2hhZG93Qmx1ciA9IDA7XG5cdFx0Y3R4LnNoYWRvd09mZnNldFggPSAwO1xuXHRcdGN0eC5zaGFkb3dPZmZzZXRZID0gMDtcblx0XHRtZS5kcmF3KCk7XG5cdH0pO1xuXG5cdGlmIChpY29uKSB0aGlzLnNldEljb24oaWNvbik7XG59XG5cbkljb25CdXR0b24ucHJvdG90eXBlLkNNRF9NQVAgPSB7XG5cdE06ICdtb3ZlVG8nLFxuXHRMOiAnbGluZVRvJyxcblx0UTogJ3F1YWRyYXRpY0N1cnZlVG8nLFxuXHRDOiAnYmV6aWVyQ3VydmVUbycsXG5cdFo6ICdjbG9zZVBhdGgnXG59O1xuXG5JY29uQnV0dG9uLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cdGlmICghdGhpcy5pY29uKSByZXR1cm47XG5cblx0dmFyIGN0eCA9IHRoaXMuY3R4O1xuXG5cdHZhciBnbHlwaCA9IGZvbnQuZm9udHNbdGhpcy5pY29uXTtcblxuXHR2YXIgaGVpZ2h0ID0gdGhpcy5zaXplO1xuXHR2YXIgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdHZhciBzY2FsZSA9IGhlaWdodCAvIGZvbnQudW5pdHNQZXJFbSAqIGRwcjtcblx0dmFyIHBhdGhfY29tbWFuZHMgPSAgZ2x5cGguY29tbWFuZHMuc3BsaXQoJyAnKTtcblxuXHRjdHguc2F2ZSgpO1xuXHRjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoICogZHByLCB0aGlzLmNhbnZhcy5oZWlnaHQgKiBkcHIpO1xuXG5cdGlmICh0aGlzLmRyb3BzaGFkb3cpIHtcblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC5maWxsU3R5bGUgPSBUaGVtZS5iO1xuXHRcdGN0eC50cmFuc2xhdGUoMS41ICogZHByLCAxLjUgKiBkcHIpO1xuXHRcdGN0eC5zY2FsZShzY2FsZSwgLXNjYWxlKTtcblx0XHRjdHgudHJhbnNsYXRlKDAgLCAtZm9udC5hc2NlbmRlcik7XG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGlsID0gcGF0aF9jb21tYW5kcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG5cdFx0XHR2YXIgY21kcyA9IHBhdGhfY29tbWFuZHNbaV0uc3BsaXQoJywnKTtcblx0XHRcdHZhciBwYXJhbXMgPSBjbWRzLnNsaWNlKDEpO1xuXG5cdFx0XHRjdHhbdGhpcy5DTURfTUFQW2NtZHNbMF1dXS5hcHBseShjdHgsIHBhcmFtcyk7XG5cdFx0fVxuXHRcdGN0eC5maWxsKCk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdGN0eC5zY2FsZShzY2FsZSwgLXNjYWxlKTtcblx0Y3R4LnRyYW5zbGF0ZSgwLCAtZm9udC5hc2NlbmRlcik7XG5cdGN0eC5iZWdpblBhdGgoKTtcblxuXHRmb3IgKHZhciBpID0gMCwgaWwgPSBwYXRoX2NvbW1hbmRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcblx0XHR2YXIgY21kcyA9IHBhdGhfY29tbWFuZHNbaV0uc3BsaXQoJywnKTtcblx0XHR2YXIgcGFyYW1zID0gY21kcy5zbGljZSgxKTtcblxuXHRcdGN0eFt0aGlzLkNNRF9NQVBbY21kc1swXV1dLmFwcGx5KGN0eCwgcGFyYW1zKTtcblx0fVxuXHRjdHguZmlsbCgpO1xuXHRjdHgucmVzdG9yZSgpO1xuXG5cdC8qXG5cdHZhciB0cmlhbmdsZSA9IGhlaWdodCAvIDMgKiBkcHI7XG5cdGN0eC5zYXZlKCk7XG5cdC8vIGN0eC50cmFuc2xhdGUoZHByICogMiwgMCk7XG5cdC8vIGN0eC5maWxsUmVjdCh0aGlzLmNhbnZhcy53aWR0aCAtIHRyaWFuZ2xlLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0cmlhbmdsZSwgdHJpYW5nbGUsIHRyaWFuZ2xlKTtcblx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRjdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC0gdHJpYW5nbGUsIHRoaXMuY2FudmFzLmhlaWdodCAtIHRyaWFuZ2xlIC8gMik7XG5cdGN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCAtIHRyaWFuZ2xlIC8gMik7XG5cdGN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLSB0cmlhbmdsZSAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cdGN0eC5maWxsKCk7XG5cdGN0eC5yZXN0b3JlKCk7XG5cdCovXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEljb25CdXR0b247IiwidmFyIFRoZW1lID0gcmVxdWlyZSgnLi90aGVtZScpLFxuXHREbyA9IHJlcXVpcmUoJ2RvLmpzJyksXG5cdGhhbmRsZURyYWcgPSByZXF1aXJlKCcuL3V0aWxfaGFuZGxlX2RyYWcnKSxcblx0c3R5bGUgPSByZXF1aXJlKCcuL3V0aWxzJykuc3R5bGUsXG5cdGZpcnN0RGVmaW5lZCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5maXJzdERlZmluZWRcblx0O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBOdW1iZXJVSVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5mdW5jdGlvbiBOdW1iZXJVSShjb25maWcpIHtcblx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXHR2YXIgbWluID0gY29uZmlnLm1pbiA9PT0gdW5kZWZpbmVkID8gLUluZmluaXR5IDogY29uZmlnLm1pbjtcblxuXHQvLyBjb25maWcueHN0ZXAgYW5kIGNvbmZpZy55c3RlcCBhbGxvdyBjb25maWd1cmluZyBhZGp1c3RtZW50XG5cdC8vIHNwZWVkIGFjcm9zcyBlYWNoIGF4aXMuXG5cdC8vIGNvbmZpZy53aGVlbFN0ZXAgYW5kIGNvbmZpZy53aGVlbFN0ZXBGaW5lIGFsbG93IGNvbmZpZ3VyaW5nXG5cdC8vIGFkanVzdG1lbnQgc3BlZWQgZm9yIG1vdXNld2hlZWwsIGFuZCBtb3VzZXdoZWVsIHdoaWxlIGhvbGRpbmcgPGFsdD5cblxuXHQvLyBJZiBvbmx5IGNvbmZpZy5zdGVwIGlzIHNwZWNpZmllZCwgYWxsIG90aGVyIGFkanVzdG1lbnQgc3BlZWRzXG5cdC8vIGFyZSBzZXQgdG8gdGhlIHNhbWUgdmFsdWUuXG5cdHZhciB4c3RlcCA9IGZpcnN0RGVmaW5lZChjb25maWcueHN0ZXAsIGNvbmZpZy5zdGVwLCAwLjAwMSk7XG5cdHZhciB5c3RlcCA9IGZpcnN0RGVmaW5lZChjb25maWcueXN0ZXAsIGNvbmZpZy5zdGVwLCAwLjEpO1xuXHR2YXIgd2hlZWxTdGVwID0gZmlyc3REZWZpbmVkKGNvbmZpZy53aGVlbFN0ZXAsIHlzdGVwKTtcblx0dmFyIHdoZWVsU3RlcEZpbmUgPSBmaXJzdERlZmluZWQoY29uZmlnLndoZWVsU3RlcEZpbmUsIHhzdGVwKTtcblxuXHR2YXIgcHJlY2lzaW9uID0gY29uZmlnLnByZWNpc2lvbiB8fCAzO1xuXHQvLyBSYW5nZVxuXHQvLyBNYXhcblxuXHR2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdC8vIHNwYW4udHlwZSA9ICdudW1iZXInOyAvLyBzcGlubmVyXG5cdFxuXHRzdHlsZShzcGFuLCB7XG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0XHRmb250U2l6ZTogJzEwcHgnLFxuXHRcdHBhZGRpbmc6ICcxcHgnLFxuXHRcdGN1cnNvcjogJ25zLXJlc2l6ZScsXG5cdFx0d2lkdGg6ICc0MHB4Jyxcblx0XHRtYXJnaW46IDAsXG5cdFx0bWFyZ2luUmlnaHQ6ICcxMHB4Jyxcblx0XHRhcHBlYXJhbmNlOiAnbm9uZScsXG5cdFx0b3V0bGluZTogJ25vbmUnLFxuXHRcdGJvcmRlcjogMCxcblx0XHRiYWNrZ3JvdW5kOiAnbm9uZScsXG5cdFx0Ym9yZGVyQm90dG9tOiAnMXB4IGRvdHRlZCAnKyBUaGVtZS5jLFxuXHRcdGNvbG9yOiBUaGVtZS5jXG5cdH0pO1xuXG5cdHZhciBtZSA9IHRoaXM7XG5cdHZhciBzdGF0ZSwgdmFsdWUgPSAwLCB1bmNoYW5nZWRfdmFsdWU7XG5cblx0dGhpcy5vbkNoYW5nZSA9IG5ldyBEbygpO1xuXG5cdHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuXHRcdGNvbnNvbGUubG9nKCdpbnB1dCBjaGFuZ2VkJywgc3Bhbi52YWx1ZSk7XG5cdFx0dmFsdWUgPSBwYXJzZUZsb2F0KHNwYW4udmFsdWUsIDEwKTtcblxuXHRcdGZpcmVDaGFuZ2UoKTtcblx0fSk7XG5cblx0Ly8gQWxsb3cga2V5ZG93biBwcmVzc2VzIGluIGlucHV0cywgZG9uJ3QgYWxsb3cgcGFyZW50IHRvIGJsb2NrIHRoZW1cblx0c3Bhbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH0pXG5cblx0c3Bhbi5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uKGUpIHtcblx0XHRzcGFuLnNldFNlbGVjdGlvblJhbmdlKDAsIHNwYW4udmFsdWUubGVuZ3RoKTtcblx0fSlcblxuXHRzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZnVuY3Rpb24oZSkge1xuXHRcdC8vIERpc3JlZ2FyZCBwaXhlbC9saW5lL3BhZ2Ugc2Nyb2xsaW5nIGFuZCBqdXN0XG5cdFx0Ly8gdXNlIGV2ZW50IGRpcmVjdGlvbi5cblx0XHR2YXIgaW5jID0gZS5kZWx0YVkgPiAwPyAxIDogLTE7XG5cdFx0aWYoZS5hbHRLZXkpIHtcblx0XHRcdGluYyAqPSB3aGVlbFN0ZXBGaW5lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbmMgKj0gd2hlZWxTdGVwO1xuXHRcdH1cblx0XHR2YWx1ZSA9IGNsYW1wKHZhbHVlICsgaW5jKTtcblx0XHRmaXJlQ2hhbmdlKCk7XG5cdH0pXG5cblx0aGFuZGxlRHJhZyhzcGFuLCBvbkRvd24sIG9uTW92ZSwgb25VcCk7XG5cblx0ZnVuY3Rpb24gY2xhbXAodmFsdWUpIHtcblx0XHRyZXR1cm4gTWF0aC5tYXgobWluLCB2YWx1ZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBvblVwKGUpIHtcblx0XHRpZiAoZS5tb3ZlZCkgZmlyZUNoYW5nZSgpO1xuXHRcdGVsc2Uge1xuXHRcdFx0Ly8gc2luZ2xlIGNsaWNrXG5cdFx0XHRzcGFuLmZvY3VzKCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3ZlKGUpIHtcblx0XHR2YXIgZHggPSBlLmR4O1xuXHRcdHZhciBkeSA9IGUuZHk7XG5cdFxuXHRcdHZhbHVlID0gdW5jaGFuZ2VkX3ZhbHVlICsgKGR4ICogeHN0ZXApICsgKGR5ICogLXlzdGVwKTtcblxuXHRcdHZhbHVlID0gY2xhbXAodmFsdWUpO1xuXG5cdFx0Ly8gdmFsdWUgPSArdmFsdWUudG9GaXhlZChwcmVjaXNpb24pOyAvLyBvciB0b0ZpeGVkIHRvUHJlY2lzaW9uXG5cdFx0bWUub25DaGFuZ2UuZmlyZSh2YWx1ZSwgdHJ1ZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBvbkRvd24oZSkge1xuXHRcdHVuY2hhbmdlZF92YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZmlyZUNoYW5nZSgpIHtcblx0XHRtZS5vbkNoYW5nZS5maXJlKHZhbHVlKTtcblx0fVxuXG5cdHRoaXMuZG9tID0gc3BhbjtcblxuXHQvLyBwdWJsaWNcblx0dGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uKHYpIHtcblx0XHR2YWx1ZSA9IHY7XG5cdFx0c3Bhbi52YWx1ZSA9IHZhbHVlLnRvRml4ZWQocHJlY2lzaW9uKTtcblx0fTtcblxuXHR0aGlzLnBhaW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHZhbHVlICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHNwYW4pIHtcblx0XHRcdHNwYW4udmFsdWUgPSB2YWx1ZS50b0ZpeGVkKHByZWNpc2lvbik7XG5cdFx0fVxuXHR9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlclVJO1xuIiwidmFyIFNpbXBsZUV2ZW50ID0gcmVxdWlyZShcImRvLmpzXCIpO1xudmFyIHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbi8vICoqKioqKioqKiogY2xhc3M6IFNjcm9sbEJhciAqKioqKioqKioqKioqKioqKiogLy9cbi8qXG5cdFNpbXBsZSBVSSB3aWRnZXQgdGhhdCBkaXNwbGF5cyBhIHNjcm9sbHRyYWNrIFxuXHRhbmQgc2xpZGVyLCB0aGF0IGZpcmVzIHNvbWUgc2Nyb2xsIGV2ZW50c1xuKi9cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbnZhciBzY3JvbGx0cmFja19zdHlsZSA9IHtcbiAgLy8gZmxvYXQ6ICdyaWdodCcsXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIC8vIHJpZ2h0OiAnMCcsXG4gIC8vIHRvcDogJzAnLFxuICAvLyBib3R0b206ICcwJyxcbiAgYmFja2dyb3VuZDpcbiAgICBcIi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAsIHJnYigyOSwyOSwyOSkpLCBjb2xvci1zdG9wKDAuNiwgcmdiKDUwLDUwLDUwKSkgKVwiLFxuICBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYigyOSwgMjksIDI5KVwiLFxuICAvLyB6SW5kZXg6ICcxMDAwJyxcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICBjdXJzb3I6IFwicG9pbnRlclwiXG59O1xuXG52YXIgc2Nyb2xsYmFyX3N0eWxlID0ge1xuICBiYWNrZ3JvdW5kOlxuICAgIFwiLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMC4yLCByZ2IoODgsODgsODgpKSwgY29sb3Itc3RvcCgwLjYsIHJnYig2NCw2NCw2NCkpIClcIixcbiAgYm9yZGVyOiBcIjFweCBzb2xpZCByZ2IoMjUsMjUsMjUpXCIsXG4gIC8vIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICBib3JkZXJSYWRpdXM6IFwiNnB4XCJcbn07XG5cbmZ1bmN0aW9uIFNjcm9sbEJhcihoLCB3LCBkaXNwYXRjaGVyKSB7XG4gIHZhciBTQ1JPTExCQVJfV0lEVEggPSB3ID8gdyA6IDEyO1xuICB2YXIgU0NST0xMQkFSX01BUkdJTiA9IDM7XG4gIHZhciBTQ1JPTExfV0lEVEggPSBTQ1JPTExCQVJfV0lEVEggKyBTQ1JPTExCQVJfTUFSR0lOICogMjtcbiAgdmFyIE1JTl9CQVJfTEVOR1RIID0gMjU7XG5cbiAgdmFyIHNjcm9sbHRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdXRpbHMuc3R5bGUoc2Nyb2xsdHJhY2ssIHNjcm9sbHRyYWNrX3N0eWxlKTtcblxuICB2YXIgc2Nyb2xsdHJhY2tIZWlnaHQgPSBoIC0gMjtcbiAgc2Nyb2xsdHJhY2suc3R5bGUuaGVpZ2h0ID0gc2Nyb2xsdHJhY2tIZWlnaHQgKyBcInB4XCI7XG4gIHNjcm9sbHRyYWNrLnN0eWxlLndpZHRoID0gU0NST0xMX1dJRFRIICsgXCJweFwiO1xuXG4gIC8vIHZhciBzY3JvbGxUb3AgPSAwO1xuICB2YXIgc2Nyb2xsYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gc2Nyb2xsYmFyLmNsYXNzTmFtZSA9ICdzY3JvbGxiYXInO1xuICB1dGlscy5zdHlsZShzY3JvbGxiYXIsIHNjcm9sbGJhcl9zdHlsZSk7XG4gIHNjcm9sbGJhci5zdHlsZS53aWR0aCA9IFNDUk9MTEJBUl9XSURUSCArIFwicHhcIjtcbiAgc2Nyb2xsYmFyLnN0eWxlLmhlaWdodCA9IGggLyAyO1xuICBzY3JvbGxiYXIuc3R5bGUudG9wID0gMDtcbiAgc2Nyb2xsYmFyLnN0eWxlLmxlZnQgPSBTQ1JPTExCQVJfTUFSR0lOICsgXCJweFwiOyAvLyAwOyAvL1NcblxuICBzY3JvbGx0cmFjay5hcHBlbmRDaGlsZChzY3JvbGxiYXIpO1xuXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIGJhcl9sZW5ndGgsIGJhcl95O1xuXG4gIC8vIFNldHMgbGVuZ3RocyBvZiBzY3JvbGxiYXIgYnkgcGVyY2VudGFnZVxuICB0aGlzLnNldExlbmd0aCA9IGZ1bmN0aW9uKGwpIHtcbiAgICAvLyBsaW1pdCAwLi4xXG4gICAgbCA9IE1hdGgubWF4KE1hdGgubWluKDEsIGwpLCAwKTtcbiAgICBsICo9IHNjcm9sbHRyYWNrSGVpZ2h0O1xuICAgIGJhcl9sZW5ndGggPSBNYXRoLm1heChsLCBNSU5fQkFSX0xFTkdUSCk7XG4gICAgc2Nyb2xsYmFyLnN0eWxlLmhlaWdodCA9IGJhcl9sZW5ndGggKyBcInB4XCI7XG4gIH07XG5cbiAgdGhpcy5zZXRIZWlnaHQgPSBmdW5jdGlvbihoZWlnaHQpIHtcbiAgICBoID0gaGVpZ2h0O1xuXG4gICAgc2Nyb2xsdHJhY2tIZWlnaHQgPSBoIC0gMjtcbiAgICBzY3JvbGx0cmFjay5zdHlsZS5oZWlnaHQgPSBzY3JvbGx0cmFja0hlaWdodCArIFwicHhcIjtcbiAgfTtcblxuICAvLyBNb3ZlcyBzY3JvbGxiYXIgdG8gcG9zaXRpb24gYnkgUGVyY2VudGFnZVxuICB0aGlzLnNldFBvc2l0aW9uID0gZnVuY3Rpb24ocCkge1xuICAgIHAgPSBNYXRoLm1heChNYXRoLm1pbigxLCBwKSwgMCk7XG4gICAgdmFyIGVtcHR5VHJhY2sgPSBzY3JvbGx0cmFja0hlaWdodCAtIGJhcl9sZW5ndGg7XG4gICAgYmFyX3kgPSBwICogZW1wdHlUcmFjaztcbiAgICBzY3JvbGxiYXIuc3R5bGUudG9wID0gYmFyX3kgKyBcInB4XCI7XG4gIH07XG5cbiAgdGhpcy5zZXRMZW5ndGgoMSk7XG4gIHRoaXMuc2V0UG9zaXRpb24oMCk7XG4gIHRoaXMub25TY3JvbGwgPSBuZXcgU2ltcGxlRXZlbnQoKTtcblxuICB2YXIgbW91c2VfZG93bl9ncmlwO1xuXG4gIGZ1bmN0aW9uIG9uRG93bihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHNjcm9sbGJhcikge1xuICAgICAgbW91c2VfZG93bl9ncmlwID0gZXZlbnQuY2xpZW50WTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3ZlLCBmYWxzZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvblVwLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChldmVudC5jbGllbnRZIDwgYmFyX3kpIHtcbiAgICAgICAgbWUub25TY3JvbGwuZmlyZShcInBhZ2V1cFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuY2xpZW50WSA+IGJhcl95ICsgYmFyX2xlbmd0aCkge1xuICAgICAgICBtZS5vblNjcm9sbC5maXJlKFwicGFnZWRvd25cIik7XG4gICAgICB9XG4gICAgICAvLyBpZiB3YW50IHRvIGRyYWcgc2Nyb2xsZXIgdG8gZW1wdHkgdHJhY2sgaW5zdGVhZFxuICAgICAgLy8gbWUuc2V0UG9zaXRpb24oZXZlbnQuY2xpZW50WSAvIChzY3JvbGx0cmFja0hlaWdodCAtIDEpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdmUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gZXZlbnQudGFyZ2V0ID09IHNjcm9sbGJhclxuICAgIHZhciBlbXB0eVRyYWNrID0gc2Nyb2xsdHJhY2tIZWlnaHQgLSBiYXJfbGVuZ3RoO1xuICAgIHZhciBzY3JvbGx0byA9IChldmVudC5jbGllbnRZIC0gbW91c2VfZG93bl9ncmlwKSAvIGVtcHR5VHJhY2s7XG5cbiAgICAvLyBjbGFtcCBsaW1pdHMgdG8gMC4uMVxuICAgIGlmIChzY3JvbGx0byA+IDEpIHNjcm9sbHRvID0gMTtcbiAgICBpZiAoc2Nyb2xsdG8gPCAwKSBzY3JvbGx0byA9IDA7XG4gICAgbWUuc2V0UG9zaXRpb24oc2Nyb2xsdG8pO1xuICAgIG1lLm9uU2Nyb2xsLmZpcmUoXCJzY3JvbGx0b1wiLCBzY3JvbGx0byk7XG4gIH1cblxuICBmdW5jdGlvbiBvblVwKGV2ZW50KSB7XG4gICAgb25Nb3ZlKGV2ZW50KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW92ZSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG9uVXAsIGZhbHNlKTtcbiAgfVxuXG4gIHNjcm9sbHRyYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgb25Eb3duLCBmYWxzZSk7XG4gIHRoaXMuZG9tID0gc2Nyb2xsdHJhY2s7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsQmFyO1xuIiwidmFyIHBhY2thZ2VfanNvbiA9IHJlcXVpcmUoXCIuLi9wYWNrYWdlLmpzb25cIiksXG4gIFNldHRpbmdzID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIiksXG4gIERvID0gcmVxdWlyZShcImRvLmpzXCIpO1xuXG4vLyBEYXRhIFN0b3JlIHdpdGggYSBzb3VyY2Ugb2YgdHJ1dGhcbmZ1bmN0aW9uIERhdGFTdG9yZSgpIHtcbiAgdGhpcy5ERUxJTUlURVIgPSBcIjpcIjtcbiAgdGhpcy5ibGFuaygpO1xuICB0aGlzLm9uT3BlbiA9IG5ldyBEbygpO1xuICB0aGlzLm9uU2F2ZSA9IG5ldyBEbygpO1xuXG4gIHRoaXMubGlzdGVuZXJzID0gW107XG59XG5cbkRhdGFTdG9yZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbihwYXRoLCBjYikge1xuICB0aGlzLmxpc3RlbmVycy5wdXNoKHtcbiAgICBwYXRoOiBwYXRoLFxuICAgIGNhbGxiYWNrOiBjYlxuICB9KTtcbn07XG5cbkRhdGFTdG9yZS5wcm90b3R5cGUuYmxhbmsgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRhdGEgPSB7fTtcblxuICBkYXRhLnZlcnNpb24gPSBwYWNrYWdlX2pzb24udmVyc2lvbjtcbiAgZGF0YS5tb2RpZmllZCA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKTtcbiAgZGF0YS50aXRsZSA9IFwiVW50aXRsZWRcIjtcblxuICBkYXRhLnVpID0ge1xuICAgIGN1cnJlbnRUaW1lOiAwLFxuICAgIHRvdGFsVGltZTogU2V0dGluZ3MuZGVmYXVsdF9sZW5ndGgsXG4gICAgc2Nyb2xsVGltZTogMCxcbiAgICB0aW1lU2NhbGU6IFNldHRpbmdzLnRpbWVfc2NhbGVcbiAgfTtcblxuICBkYXRhLmxheWVycyA9IFtdO1xuXG4gIHRoaXMuZGF0YSA9IGRhdGE7XG59O1xuXG5EYXRhU3RvcmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcblxuICBkYXRhLnZlcnNpb24gPSBwYWNrYWdlX2pzb24udmVyc2lvbjtcbiAgZGF0YS5tb2RpZmllZCA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKTtcbn07XG5cbkRhdGFTdG9yZS5wcm90b3R5cGUuc2V0SlNPTlN0cmluZyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbn07XG5cbkRhdGFTdG9yZS5wcm90b3R5cGUuc2V0SlNPTiA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgdGhpcy5kYXRhID0gZGF0YTtcbn07XG5cbkRhdGFTdG9yZS5wcm90b3R5cGUuZ2V0SlNPTlN0cmluZyA9IGZ1bmN0aW9uKGZvcm1hdCkge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLCBudWxsLCBmb3JtYXQpO1xufTtcblxuRGF0YVN0b3JlLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uKHBhdGhzKSB7XG4gIHZhciBkZXNjZW5kID0gcGF0aHMuc3BsaXQodGhpcy5ERUxJTUlURVIpO1xuICB2YXIgcmVmZXJlbmNlID0gdGhpcy5kYXRhO1xuICBmb3IgKHZhciBpID0gMCwgaWwgPSBkZXNjZW5kLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcbiAgICB2YXIgcGF0aCA9IGRlc2NlbmRbaV07XG4gICAgaWYgKHJlZmVyZW5jZVtwYXRoXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJDYW50IGZpbmQgXCIgKyBwYXRocyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZVtwYXRoXTtcbiAgfVxuICByZXR1cm4gcmVmZXJlbmNlO1xufTtcblxuRGF0YVN0b3JlLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uKHBhdGhzLCB2YWx1ZSkge1xuICB2YXIgZGVzY2VuZCA9IHBhdGhzLnNwbGl0KHRoaXMuREVMSU1JVEVSKTtcbiAgdmFyIHJlZmVyZW5jZSA9IHRoaXMuZGF0YTtcbiAgdmFyIHBhdGg7XG4gIGZvciAodmFyIGkgPSAwLCBpbCA9IGRlc2NlbmQubGVuZ3RoIC0gMTsgKHBhdGggPSBkZXNjZW5kW2ldKSwgaSA8IGlsOyBpKyspIHtcbiAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VbcGF0aF07XG4gIH1cblxuICByZWZlcmVuY2VbcGF0aF0gPSB2YWx1ZTtcblxuICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGwpIHtcbiAgICBpZiAocGF0aHMuaW5kZXhPZihsLnBhdGgpID4gLTEpIGwuY2FsbGJhY2soKTtcbiAgfSk7XG59O1xuXG5EYXRhU3RvcmUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHBhdGgsIHN1ZmZpeCkge1xuICBpZiAoc3VmZml4KSBwYXRoID0gc3VmZml4ICsgdGhpcy5ERUxJTUlURVIgKyBwYXRoO1xuICByZXR1cm4gbmV3IERhdGFQcm94KHRoaXMsIHBhdGgpO1xufTtcblxuZnVuY3Rpb24gRGF0YVByb3goc3RvcmUsIHBhdGgpIHtcbiAgdGhpcy5wYXRoID0gcGF0aDtcbiAgdGhpcy5zdG9yZSA9IHN0b3JlO1xufVxuXG5EYXRhUHJveC5wcm90b3R5cGUgPSB7XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRWYWx1ZSh0aGlzLnBhdGgpO1xuICB9LFxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgdGhpcy5zdG9yZS5zZXRWYWx1ZSh0aGlzLnBhdGgsIHZhbCk7XG4gIH1cbn07XG5cbkRhdGFQcm94LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiB0aGlzLnN0b3JlLmdldChwYXRoLCB0aGlzLnBhdGgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhU3RvcmU7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBEaXNwYXRjaGVyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmZ1bmN0aW9uIERpc3BhdGNoZXIoKSB7XG5cblx0dmFyIGV2ZW50X2xpc3RlbmVycyA9IHtcblxuXHR9O1xuXG5cdGZ1bmN0aW9uIG9uKHR5cGUsIGxpc3RlbmVyKSB7XG5cdFx0aWYgKCEodHlwZSBpbiBldmVudF9saXN0ZW5lcnMpKSB7XG5cdFx0XHRldmVudF9saXN0ZW5lcnNbdHlwZV0gPSBbXTtcblx0XHR9XG5cdFx0dmFyIGxpc3RlbmVycyA9IGV2ZW50X2xpc3RlbmVyc1t0eXBlXTtcblx0XHRsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cdH1cblxuXHRmdW5jdGlvbiBmaXJlKHR5cGUpIHtcblx0XHR2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0YXJncy5zaGlmdCgpO1xuXHRcdHZhciBsaXN0ZW5lcnMgPSBldmVudF9saXN0ZW5lcnNbdHlwZV07XG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuXHRcdFx0bGlzdGVuZXIuYXBwbHkobGlzdGVuZXIsIGFyZ3MpO1xuXHRcdH1cblx0fVxuXG5cdHRoaXMub24gPSBvbjtcblx0dGhpcy5maXJlID0gZmlyZTtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BhdGNoZXI7IiwiZnVuY3Rpb24gaGFuZGxlRHJhZyhlbGVtZW50LCBvbmRvd24sIG9ubW92ZSwgb251cCwgZG93bl9jcml0ZXJpYSkge1xuXHR2YXIgcG9pbnRlciA9IG51bGw7XG5cdHZhciBib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG5cblx0ZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuXHRcdGhhbmRsZVN0YXJ0KGUpO1xuXG5cdFx0aWYgKGRvd25fY3JpdGVyaWEgJiYgIWRvd25fY3JpdGVyaWEocG9pbnRlcikpIHtcblx0XHRcdHBvaW50ZXIgPSBudWxsO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdFxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcblx0XHRcblx0XHRvbmRvd24ocG9pbnRlcik7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGUpIHtcblx0XHRoYW5kbGVNb3ZlKGUpO1xuXHRcdG9ubW92ZShwb2ludGVyKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVN0YXJ0KGUpIHtcblx0XHRib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHZhciBjdXJyZW50eCA9IGUuY2xpZW50WCwgY3VycmVudHkgPSBlLmNsaWVudFk7XG5cdFx0cG9pbnRlciA9IHtcblx0XHRcdHN0YXJ0eDogY3VycmVudHgsXG5cdFx0XHRzdGFydHk6IGN1cnJlbnR5LFxuXHRcdFx0eDogY3VycmVudHgsXG5cdFx0XHR5OiBjdXJyZW50eSxcblx0XHRcdGR4OiAwLFxuXHRcdFx0ZHk6IDAsXG5cdFx0XHRvZmZzZXR4OiBjdXJyZW50eCAtIGJvdW5kcy5sZWZ0LFxuXHRcdFx0b2Zmc2V0eTogY3VycmVudHkgLSBib3VuZHMudG9wLFxuXHRcdFx0bW92ZWQ6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gaGFuZGxlTW92ZShlKSB7XG5cdFx0Ym91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR2YXIgY3VycmVudHggPSBlLmNsaWVudFgsXG5cdFx0Y3VycmVudHkgPSBlLmNsaWVudFksXG5cdFx0b2Zmc2V0eCA9IGN1cnJlbnR4IC0gYm91bmRzLmxlZnQsXG5cdFx0b2Zmc2V0eSA9IGN1cnJlbnR5IC0gYm91bmRzLnRvcDtcblx0XHRwb2ludGVyLnggPSBjdXJyZW50eDtcblx0XHRwb2ludGVyLnkgPSBjdXJyZW50eTtcblx0XHRwb2ludGVyLmR4ID0gZS5jbGllbnRYIC0gcG9pbnRlci5zdGFydHg7XG5cdFx0cG9pbnRlci5keSA9IGUuY2xpZW50WSAtIHBvaW50ZXIuc3RhcnR5O1xuXHRcdHBvaW50ZXIub2Zmc2V0eCA9IG9mZnNldHg7XG5cdFx0cG9pbnRlci5vZmZzZXR5ID0gb2Zmc2V0eTtcblxuXHRcdC8vIElmIHRoZSBwb2ludGVyIGR4L2R5IGlzIF9ldmVyXyBub24temVybywgdGhlbiBpdCdzIG1vdmVkXG5cdFx0cG9pbnRlci5tb3ZlZCA9IHBvaW50ZXIubW92ZWQgfHwgcG9pbnRlci5keCAhPT0gMCB8fCBwb2ludGVyLmR5ICE9PSAwO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBvbk1vdXNlVXAoZSkge1xuXHRcdGhhbmRsZU1vdmUoZSk7XG5cdFx0b251cChwb2ludGVyKTtcblx0XHRwb2ludGVyID0gbnVsbDtcblx0XHRcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG5cdH1cblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQpO1xuXG5cdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCh0ZSkge1xuXHRcdFxuXHRcdGlmICh0ZS50b3VjaGVzLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcblx0XHRcdHZhciBlID0gdGUudG91Y2hlc1swXTtcblx0XHRcdGlmIChkb3duX2NyaXRlcmlhICYmICFkb3duX2NyaXRlcmlhKGUpKSByZXR1cm47XG5cdFx0XHR0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aGFuZGxlU3RhcnQoZSk7XG5cdFx0XHRvbmRvd24ocG9pbnRlcik7XG5cdFx0fVxuXHRcdFxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUodGUpIHtcblx0XHR2YXIgZSA9IHRlLnRvdWNoZXNbMF07XG5cdFx0b25Nb3VzZU1vdmUoZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoRW5kKGUpIHtcblx0XHQvLyB2YXIgZSA9IGUudG91Y2hlc1swXTtcblx0XHRvbk1vdXNlVXAoZSk7XG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuXHR9XG5cblxuXHR0aGlzLnJlbGVhc2UgPSBmdW5jdGlvbigpIHtcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQpO1xuXHR9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhbmRsZURyYWc7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBUd2VlbnNcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIFR3ZWVucyA9IHtcblx0bm9uZTogZnVuY3Rpb24oaykge1xuXHRcdHJldHVybiAwO1xuXHR9LFxuXHRsaW5lYXI6IGZ1bmN0aW9uKGspIHtcblx0XHRyZXR1cm4gaztcblx0fSxcblx0cXVhZEVhc2VJbjogZnVuY3Rpb24oaykge1xuXHRcdHJldHVybiBrICogaztcblx0fSxcblx0cXVhZEVhc2VPdXQ6IGZ1bmN0aW9uKGspIHtcblx0XHRyZXR1cm4gLSBrICogKCBrIC0gMiApO1xuXHR9LFxuXHRxdWFkRWFzZUluT3V0OiBmdW5jdGlvbihrKSB7XG5cdFx0aWYgKCAoIGsgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiBrICogaztcblx0XHRyZXR1cm4gLSAwLjUgKiAoIC0tayAqICggayAtIDIgKSAtIDEgKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbnM7IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gVW5kbyBNYW5hZ2VyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmZ1bmN0aW9uIFVuZG9TdGF0ZShzdGF0ZSwgZGVzY3JpcHRpb24pIHtcblx0Ly8gdGhpcy5zdGF0ZSA9IEpTT04uc3RyaW5naWZ5KHN0YXRlKTtcblx0dGhpcy5zdGF0ZSA9IHN0YXRlLmdldEpTT05TdHJpbmcoKTtcblx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xufVxuXG5mdW5jdGlvbiBVbmRvTWFuYWdlcihkaXNwYXRjaGVyLCBtYXgpIHtcblx0dGhpcy5kaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcblx0dGhpcy5NQVhfSVRFTVMgPSBtYXggfHwgMTAwO1xuXHR0aGlzLmNsZWFyKCk7XG59XG5cblVuZG9NYW5hZ2VyLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24oc3RhdGUsIHN1cHByZXNzKSB7XG5cdHZhciBzdGF0ZXMgPSB0aGlzLnN0YXRlcztcblx0dmFyIG5leHRfaW5kZXggPSB0aGlzLmluZGV4ICsgMTtcblx0dmFyIHRvX3JlbW92ZSA9IHN0YXRlcy5sZW5ndGggLSBuZXh0X2luZGV4O1xuXHRzdGF0ZXMuc3BsaWNlKG5leHRfaW5kZXgsIHRvX3JlbW92ZSwgc3RhdGUpO1xuXG5cdGlmIChzdGF0ZXMubGVuZ3RoID4gdGhpcy5NQVhfSVRFTVMpIHtcblx0XHRzdGF0ZXMuc2hpZnQoKTtcblx0fVxuXG5cdHRoaXMuaW5kZXggPSBzdGF0ZXMubGVuZ3RoIC0gMTtcblxuXHQvLyBjb25zb2xlLmxvZygnVW5kbyBTdGF0ZSBTYXZlZDogJywgc3RhdGUuZGVzY3JpcHRpb24pO1xuXHRpZiAoIXN1cHByZXNzKSB0aGlzLmRpc3BhdGNoZXIuZmlyZSgnc3RhdGU6c2F2ZScsIHN0YXRlLmRlc2NyaXB0aW9uKTtcbn07XG5cblVuZG9NYW5hZ2VyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLnN0YXRlcyA9IFtdO1xuXHR0aGlzLmluZGV4ID0gLTE7XG5cdC8vIEZJWE1FOiBsZWF2ZSBkZWZhdWx0IHN0YXRlIG9yIGFsd2F5cyBsZWF2ZSBvbmUgc3RhdGU/XG59O1xuXG5VbmRvTWFuYWdlci5wcm90b3R5cGUuY2FuVW5kbyA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5pbmRleCA+IDA7XG5cdC8vICYmIHRoaXMuc3RhdGVzLmxlbmd0aCA+IDFcbn07XG5cblVuZG9NYW5hZ2VyLnByb3RvdHlwZS5jYW5SZWRvID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy5zdGF0ZXMubGVuZ3RoIC0gMTtcbn07XG5cblVuZG9NYW5hZ2VyLnByb3RvdHlwZS51bmRvID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmNhblVuZG8oKSkge1xuXHRcdHRoaXMuZGlzcGF0Y2hlci5maXJlKCdzdGF0dXMnLCAnVW5kbzogJyArIHRoaXMuZ2V0KCkuZGVzY3JpcHRpb24pO1xuXHRcdHRoaXMuaW5kZXgtLTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLmRpc3BhdGNoZXIuZmlyZSgnc3RhdHVzJywgJ05vdGhpbmcgdG8gdW5kbycpO1xuXHR9XG5cblx0cmV0dXJuIHRoaXMuZ2V0KCk7XG59O1xuXG5VbmRvTWFuYWdlci5wcm90b3R5cGUucmVkbyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5jYW5SZWRvKCkpIHtcblx0XHR0aGlzLmluZGV4Kys7XG5cdFx0dGhpcy5kaXNwYXRjaGVyLmZpcmUoJ3N0YXR1cycsICdSZWRvOiAnICsgdGhpcy5nZXQoKS5kZXNjcmlwdGlvbik7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5kaXNwYXRjaGVyLmZpcmUoJ3N0YXR1cycsICdOb3RoaW5nIHRvIHJlZG8nKTtcblx0fVxuXG5cdHJldHVybiB0aGlzLmdldCgpO1xufTtcblxuVW5kb01hbmFnZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5zdGF0ZXNbdGhpcy5pbmRleF07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0VW5kb1N0YXRlOiBVbmRvU3RhdGUsXG5cdFVuZG9NYW5hZ2VyOiBVbmRvTWFuYWdlclxufTsiLCJ2YXJcblx0VHdlZW5zID0gcmVxdWlyZSgnLi91dGlsX3R3ZWVuJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRTVE9SQUdFX1BSRUZJWDogJ3RpbWVsaW5lci0nLFxuXHRaX0lOREVYOiA5OTksXG5cdGZpcnN0RGVmaW5lZDogZmlyc3REZWZpbmVkLFxuXHRzdHlsZTogc3R5bGUsXG5cdHNhdmVUb0ZpbGU6IHNhdmVUb0ZpbGUsXG5cdG9wZW5Bczogb3BlbkFzLFxuXHRmb3JtYXRfZnJpZW5kbHlfc2Vjb25kczogZm9ybWF0X2ZyaWVuZGx5X3NlY29uZHMsXG5cdGZpbmRUaW1laW5MYXllcjogZmluZFRpbWVpbkxheWVyLFxuXHR0aW1lQXRMYXllcjogdGltZUF0TGF5ZXIsXG5cdHByb3h5X2N0eDogcHJveHlfY3R4XG59O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBVdGlsc1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5mdW5jdGlvbiBmaXJzdERlZmluZWQoKSB7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRpZih0eXBlb2YgYXJndW1lbnRzW2ldICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGFyZ3VtZW50c1tpXTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc3R5bGUoZWxlbWVudCwgdmFyX2FyZ3MpIHtcblx0Zm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyArK2kpIHtcblx0XHR2YXIgc3R5bGVzID0gYXJndW1lbnRzW2ldO1xuXHRcdGZvciAodmFyIHMgaW4gc3R5bGVzKSB7XG5cdFx0XHRlbGVtZW50LnN0eWxlW3NdID0gc3R5bGVzW3NdO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzYXZlVG9GaWxlKHN0cmluZywgZmlsZW5hbWUpIHtcblx0dmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcblx0YS5zdHlsZSA9IFwiZGlzcGxheTogbm9uZVwiO1xuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW3N0cmluZ10sIHsgdHlwZTogJ29jdGV0L3N0cmVhbScgfSksIC8vIGFwcGxpY2F0aW9uL2pzb25cblx0XHR1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XG5cdGEuaHJlZiA9IHVybDtcblx0YS5kb3dubG9hZCA9IGZpbGVuYW1lO1xuXG5cdGZha2VDbGljayhhKTtcblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdC8vIGNsZWFudXAgYW5kIHJldm9rZVxuXHRcdHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcblx0fSwgNTAwKTtcbn1cblxuXG5cbnZhciBpbnB1dCwgb3BlbkNhbGxiYWNrO1xuXG5mdW5jdGlvbiBoYW5kbGVGaWxlU2VsZWN0KGV2dCkge1xuXHR2YXIgZmlsZXMgPSBldnQudGFyZ2V0LmZpbGVzOyAvLyBGaWxlTGlzdCBvYmplY3RcblxuXHRjb25zb2xlLmxvZygnaGFuZGxlIGZpbGUgc2VsZWN0JywgZmlsZXMubGVuZ3RoKTtcblxuXHR2YXIgZiA9IGZpbGVzWzBdO1xuXHRpZiAoIWYpIHJldHVybjtcblx0Ly8gQ2FuIHRyeSB0byBkbyBNSU5FIG1hdGNoXG5cdC8vIGlmICghZi50eXBlLm1hdGNoKCdhcHBsaWNhdGlvbi9qc29uJykpIHtcblx0Ly8gICByZXR1cm47XG5cdC8vIH1cblx0Y29uc29sZS5sb2coJ21hdGNoJywgZi50eXBlKTtcblxuXHR2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuXHQvLyBDbG9zdXJlIHRvIGNhcHR1cmUgdGhlIGZpbGUgaW5mb3JtYXRpb24uXG5cdHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XG5cdFx0dmFyIGRhdGEgPSBlLnRhcmdldC5yZXN1bHQ7XG5cdFx0b3BlbkNhbGxiYWNrKGRhdGEpO1xuXHR9O1xuXHRcblx0cmVhZGVyLnJlYWRBc1RleHQoZik7XG5cblx0aW5wdXQudmFsdWUgPSAnJztcbn1cblxuXG5mdW5jdGlvbiBvcGVuQXMoY2FsbGJhY2ssIHRhcmdldCkge1xuXHRjb25zb2xlLmxvZygnb3BlbmZpbGUuLi4nKTtcblx0b3BlbkNhbGxiYWNrID0gY2FsbGJhY2s7XG5cblx0aWYgKCFpbnB1dCkge1xuXHRcdGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRpbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGlucHV0LnR5cGUgPSAnZmlsZSc7XG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlRmlsZVNlbGVjdCk7XG5cdFx0dGFyZ2V0ID0gdGFyZ2V0IHx8IGRvY3VtZW50LmJvZHk7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKGlucHV0KTtcblx0fVxuXHRcblx0ZmFrZUNsaWNrKGlucHV0KTtcbn1cblxuZnVuY3Rpb24gZmFrZUNsaWNrKHRhcmdldCkge1xuXHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7XG5cdGUuaW5pdE1vdXNlRXZlbnQoXG5cdFx0J2NsaWNrJywgdHJ1ZSwgZmFsc2UsIHdpbmRvdywgMCwgMCwgMCwgMCwgMCxcblx0XHRmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbFxuXHQpO1xuXHR0YXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0X2ZyaWVuZGx5X3NlY29uZHMocywgdHlwZSkge1xuXHQvLyBUT0RPIFJlZmFjdG9yIHRvIDYwZnBzPz8/XG5cdC8vIDIwIG1pbnMgKiA2MCBzZWMgPSAxMDgwIFxuXHQvLyAxMDgwcyAqIDYwZnBzID0gMTA4MCAqIDYwIDwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcblxuXHR2YXIgcmF3X3NlY3MgPSBzIHwgMDtcblx0dmFyIHNlY3NfbWljcm8gPSBzICUgNjA7XG5cdHZhciBzZWNzID0gcmF3X3NlY3MgJSA2MDtcblx0dmFyIHJhd19taW5zID0gcmF3X3NlY3MgLyA2MCB8IDA7XG5cdHZhciBtaW5zID0gcmF3X21pbnMgJSA2MDtcblx0dmFyIGhvdXJzID0gcmF3X21pbnMgLyA2MCB8IDA7XG5cblx0dmFyIHNlY3Nfc3RyID0gKHNlY3MgLyAxMDApLnRvRml4ZWQoMikuc3Vic3RyaW5nKDIpO1xuXG5cdHZhciBzdHIgPSBtaW5zICsgJzonICsgc2Vjc19zdHI7XG5cblx0aWYgKHMgJSAxID4gMCkge1xuXHRcdHZhciB0MiA9IChzICUgMSkgKiA2MDtcblx0XHRpZiAodHlwZSA9PT0gJ2ZyYW1lcycpIHN0ciA9IHNlY3MgKyAnKycgKyB0Mi50b0ZpeGVkKDApICsgJ2YnO1xuXHRcdGVsc2Ugc3RyICs9ICgocyAlIDEpLnRvRml4ZWQoMikpLnN1YnN0cmluZygxKTtcblx0XHQvLyBlbHNlIHN0ciA9IG1pbnMgKyAnOicgKyBzZWNzX21pY3JvO1xuXHRcdC8vIGVsc2Ugc3RyID0gc2Vjc19taWNybyArICdzJzsgLy8vIC50b0ZpeGVkKDIpXG5cdH1cblx0cmV0dXJuIHN0cjtcdFxufVxuXG4vLyBnZXQgb2JqZWN0IGF0IHRpbWVcbmZ1bmN0aW9uIGZpbmRUaW1laW5MYXllcihsYXllciwgdGltZSkge1xuXHR2YXIgdmFsdWVzID0gbGF5ZXIudmFsdWVzO1xuXHR2YXIgaSwgaWw7XG5cblx0Ly8gVE9ETyBvcHRpbWl6ZSBieSBjaGVja2luZyB0aW1lIC8gYmluYXJ5IHNlYXJjaFxuXG5cdGZvciAoaT0wLCBpbD12YWx1ZXMubGVuZ3RoOyBpPGlsOyBpKyspIHtcblx0XHR2YXIgdmFsdWUgPSB2YWx1ZXNbaV07XG5cdFx0aWYgKHZhbHVlLnRpbWUgPT09IHRpbWUpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGluZGV4OiBpLFxuXHRcdFx0XHRvYmplY3Q6IHZhbHVlXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSBpZiAodmFsdWUudGltZSA+IHRpbWUpIHtcblx0XHRcdHJldHVybiBpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBpO1xufVxuXG5cbmZ1bmN0aW9uIHRpbWVBdExheWVyKGxheWVyLCB0KSB7XG5cdC8vIEZpbmQgdGhlIHZhbHVlIG9mIGxheWVyIGF0IHQgc2Vjb25kcy5cblx0Ly8gdGhpcyBleHBlY3QgbGF5ZXIgdG8gYmUgc29ydGVkXG5cdC8vIG5vdCB0aGUgbW9zdCBvcHRpbWl6ZWQgZm9yIG5vdywgYnV0IHdvdWxkIGRvLlxuXG5cdHZhciB2YWx1ZXMgPSBsYXllci52YWx1ZXM7XG5cdHZhciBpLCBpbCwgZW50cnksIHByZXZfZW50cnk7XG5cblx0aWwgPSB2YWx1ZXMubGVuZ3RoO1xuXG5cdC8vIGNhbid0IGRvIGFueXRoaW5nXG5cdGlmIChpbCA9PT0gMCkgcmV0dXJuO1xuXG5cdGlmIChsYXllci5fbXV0ZSkgcmV0dXJuXG5cblx0Ly8gZmluZCBib3VuZGFyeSBjYXNlc1xuXHRlbnRyeSA9IHZhbHVlc1swXTtcblx0aWYgKHQgPCBlbnRyeS50aW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiBlbnRyeS52YWx1ZSxcblx0XHRcdGNhbl90d2VlbjogZmFsc2UsIC8vIGNhbm5vdCB0d2VlblxuXHRcdFx0a2V5ZnJhbWU6IGZhbHNlIC8vIG5vdCBvbiBrZXlmcmFtZVxuXHRcdH07XG5cdH1cblxuXHRmb3IgKGk9MDsgaTxpbDsgaSsrKSB7XG5cdFx0cHJldl9lbnRyeSA9IGVudHJ5O1xuXHRcdGVudHJ5ID0gdmFsdWVzW2ldO1xuXG5cdFx0aWYgKHQgPT09IGVudHJ5LnRpbWUpIHtcblx0XHRcdC8vIG9ubHkgZXhjZXB0aW9uIGlzIG9uIHRoZSBsYXN0IEtGLCB3aGVyZSB3ZSBkaXNwbGF5IHR3ZWVuIGZyb20gcHJldiBlbnRyeVxuXHRcdFx0aWYgKGkgPT09IGlsIC0gMSkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC8vIGluZGV4OiBpLFxuXHRcdFx0XHRcdGVudHJ5OiBwcmV2X2VudHJ5LFxuXHRcdFx0XHRcdHR3ZWVuOiBwcmV2X2VudHJ5LnR3ZWVuLFxuXHRcdFx0XHRcdGNhbl90d2VlbjogaWwgPiAxLFxuXHRcdFx0XHRcdHZhbHVlOiBlbnRyeS52YWx1ZSxcblx0XHRcdFx0XHRrZXlmcmFtZTogdHJ1ZVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Ly8gaW5kZXg6IGksXG5cdFx0XHRcdGVudHJ5OiBlbnRyeSxcblx0XHRcdFx0dHdlZW46IGVudHJ5LnR3ZWVuLFxuXHRcdFx0XHRjYW5fdHdlZW46IGlsID4gMSxcblx0XHRcdFx0dmFsdWU6IGVudHJ5LnZhbHVlLFxuXHRcdFx0XHRrZXlmcmFtZTogdHJ1ZSAvLyBpbCA+IDFcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmICh0IDwgZW50cnkudGltZSkge1xuXHRcdFx0Ly8gcG9zc2libHkgYSB0d2VlblxuXHRcdFx0aWYgKCFwcmV2X2VudHJ5LnR3ZWVuKSB7IC8vIG9yIGlmIHZhbHVlIGlzIG5vbmVcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR2YWx1ZTogcHJldl9lbnRyeS52YWx1ZSxcblx0XHRcdFx0XHR0d2VlbjogZmFsc2UsXG5cdFx0XHRcdFx0ZW50cnk6IHByZXZfZW50cnksXG5cdFx0XHRcdFx0Y2FuX3R3ZWVuOiB0cnVlLFxuXHRcdFx0XHRcdGtleWZyYW1lOiBmYWxzZVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYWxjdWxhdGUgdHdlZW5cblx0XHRcdHZhciB0aW1lX2RpZmYgPSBlbnRyeS50aW1lIC0gcHJldl9lbnRyeS50aW1lO1xuXHRcdFx0dmFyIHZhbHVlX2RpZmYgPSBlbnRyeS52YWx1ZSAtIHByZXZfZW50cnkudmFsdWU7XG5cdFx0XHR2YXIgdHdlZW4gPSBwcmV2X2VudHJ5LnR3ZWVuO1xuXG5cdFx0XHR2YXIgZHQgPSB0IC0gcHJldl9lbnRyeS50aW1lO1xuXHRcdFx0dmFyIGsgPSBkdCAvIHRpbWVfZGlmZjtcblx0XHRcdHZhciBuZXdfdmFsdWUgPSBwcmV2X2VudHJ5LnZhbHVlICsgVHdlZW5zW3R3ZWVuXShrKSAqIHZhbHVlX2RpZmY7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGVudHJ5OiBwcmV2X2VudHJ5LFxuXHRcdFx0XHR2YWx1ZTogbmV3X3ZhbHVlLFxuXHRcdFx0XHR0d2VlbjogcHJldl9lbnRyeS50d2Vlbixcblx0XHRcdFx0Y2FuX3R3ZWVuOiB0cnVlLFxuXHRcdFx0XHRrZXlmcmFtZTogZmFsc2Vcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cdC8vIHRpbWUgaXMgYWZ0ZXIgYWxsIGVudHJpZXNcblx0cmV0dXJuIHtcblx0XHR2YWx1ZTogZW50cnkudmFsdWUsXG5cdFx0Y2FuX3R3ZWVuOiBmYWxzZSxcblx0XHRrZXlmcmFtZTogZmFsc2Vcblx0fTsgXG5cbn1cblxuXG5mdW5jdGlvbiBwcm94eV9jdHgoY3R4KSB7XG5cdC8vIENyZWF0ZXMgYSBwcm94eSAyZCBjb250ZXh0IHdyYXBwZXIgd2hpY2ggXG5cdC8vIGFsbG93cyB0aGUgZmx1ZW50IC8gY2hhaW5pbmcgQVBJLlxuXHR2YXIgd3JhcHBlciA9IHt9O1xuXG5cdGZ1bmN0aW9uIHByb3h5X2Z1bmN0aW9uKGMpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBXYXJuaW5nOiB0aGlzIGRvZXNuJ3QgcmV0dXJuIHZhbHVlIG9mIGZ1bmN0aW9uIGNhbGxcblx0XHRcdGN0eFtjXS5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gd3JhcHBlcjtcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJveHlfcHJvcGVydHkoYykge1xuXHRcdHJldHVybiBmdW5jdGlvbih2KSB7XG5cdFx0XHRjdHhbY10gPSB2O1xuXHRcdFx0cmV0dXJuIHdyYXBwZXI7XG5cdFx0fTtcblx0fVxuXG5cdHdyYXBwZXIucnVuID0gZnVuY3Rpb24oYXJncykge1xuXHRcdGFyZ3Mod3JhcHBlcik7XG5cdFx0cmV0dXJuIHdyYXBwZXI7XG5cdH07XG5cblx0Zm9yICh2YXIgYyBpbiBjdHgpIHtcblx0XHQvLyBpZiAoIWN0eC5oYXNPd25Qcm9wZXJ0eShjKSkgY29udGludWU7XG5cdFx0Ly8gY29uc29sZS5sb2coYywgdHlwZW9mKGN0eFtjXSksIGN0eC5oYXNPd25Qcm9wZXJ0eShjKSk7XG5cdFx0Ly8gc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4sIGZ1bmN0aW9uLCBvYmplY3RcblxuXHRcdHZhciB0eXBlID0gdHlwZW9mKGN0eFtjXSk7XG5cdFx0c3dpdGNoKHR5cGUpIHtcblx0XHRcdGNhc2UgJ29iamVjdCc6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZnVuY3Rpb24nOlxuXHRcdFx0XHR3cmFwcGVyW2NdID0gcHJveHlfZnVuY3Rpb24oYyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0d3JhcHBlcltjXSA9IHByb3h5X3Byb3BlcnR5KGMpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlcjtcbn1cbiIsInZhciBUaGVtZSA9IHJlcXVpcmUoXCIuL3RoZW1lXCIpLFxuICBVSU51bWJlciA9IHJlcXVpcmUoXCIuL3VpX251bWJlclwiKSxcbiAgVHdlZW5zID0gcmVxdWlyZShcIi4vdXRpbF90d2VlblwiKSxcbiAgU2V0dGluZ3MgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKSxcbiAgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbi8vIFRPRE8gLSB0YWdnZWQgYnkgaW5kZXggaW5zdGVhZCwgd29yayBvZmYgbGF5ZXJzLlxuXG5mdW5jdGlvbiBMYXllclZpZXcobGF5ZXIsIGRpc3BhdGNoZXIpIHtcbiAgdmFyIGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgbGFiZWwuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC1zaXplOiAxMnB4OyBwYWRkaW5nOiA0cHg7XCI7XG5cbiAgdmFyIGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgdmFyIG9wdGlvbjtcbiAgZHJvcGRvd24uc3R5bGUuY3NzVGV4dCA9XG4gICAgXCJmb250LXNpemU6IDEwcHg7IHdpZHRoOiA2MHB4OyBtYXJnaW46IDA7IGZsb2F0OiByaWdodDsgdGV4dC1hbGlnbjogcmlnaHQ7XCI7XG5cbiAgZm9yICh2YXIgayBpbiBUd2VlbnMpIHtcbiAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi50ZXh0ID0gaztcbiAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG5cbiAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgZGlzcGF0Y2hlci5maXJlKFwiZWFzZVwiLCBsYXllciwgZHJvcGRvd24udmFsdWUpO1xuICB9KTtcbiAgdmFyIGhlaWdodCA9IFNldHRpbmdzLkxJTkVfSEVJR0hUIC0gMTtcblxuICB2YXIga2V5ZnJhbWVfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAga2V5ZnJhbWVfYnV0dG9uLmlubmVySFRNTCA9IFwiJiM5NjcyO1wiOyAvLyAnJmRpYW1zOycgJiM5NjcxOyA5Njc5IDk2NzAgOTY3MlxuICBrZXlmcmFtZV9idXR0b24uc3R5bGUuY3NzVGV4dCA9XG4gICAgXCJiYWNrZ3JvdW5kOiBub25lOyBmb250LXNpemU6IDEycHg7IHBhZGRpbmc6IDBweDsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZmxvYXQ6IHJpZ2h0OyB3aWR0aDogMjBweDsgaGVpZ2h0OiBcIiArXG4gICAgaGVpZ2h0ICtcbiAgICBcInB4OyBib3JkZXItc3R5bGU6bm9uZTsgb3V0bGluZTogbm9uZTtcIjsgLy8gIGJvcmRlci1zdHlsZTppbnNldDtcblxuICBrZXlmcmFtZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQ6a2V5ZnJhbWluZy4uLlwiLCBzdGF0ZS5nZXQoXCJfdmFsdWVcIikudmFsdWUpO1xuICAgIGRpc3BhdGNoZXIuZmlyZShcImtleWZyYW1lXCIsIGxheWVyLCBzdGF0ZS5nZXQoXCJfdmFsdWVcIikudmFsdWUpO1xuICB9KTtcblxuICAvKlxuICAvLyBQcmV2IEtleWZyYW1lXG4gIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIjxcIjtcbiAgYnV0dG9uLnN0eWxlLmNzc1RleHQgPSBcImZvbnQtc2l6ZTogMTJweDsgcGFkZGluZzogMXB4OyBcIjtcbiAgZG9tLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgLy8gTmV4dCBLZXlmcmFtZVxuICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIj5cIjtcbiAgYnV0dG9uLnN0eWxlLmNzc1RleHQgPSBcImZvbnQtc2l6ZTogMTJweDsgcGFkZGluZzogMXB4OyBcIjtcbiAgZG9tLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gKi9cblxuICBmdW5jdGlvbiBUb2dnbGVCdXR0b24odGV4dCkge1xuICAgIC8vIGZvciBjc3MgYmFzZWQgYnV0dG9uIHNlZSBodHRwOi8vY29kZXBlbi5pby9tYWxsZW5kZW8vcGVuL2VMSWlHXG5cbiAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgdXRpbHMuc3R5bGUoYnV0dG9uLCB7XG4gICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICBwYWRkaW5nOiBcIjFweFwiLFxuICAgICAgYm9yZGVyU2l6ZTogXCIycHhcIixcbiAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgYmFja2dyb3VuZDogXCIjZmZmXCJcbiAgICB9KTtcblxuICAgIHRoaXMucHJlc3NlZCA9IGZhbHNlO1xuXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucHJlc3NlZCA9ICF0aGlzLnByZXNzZWQ7XG5cbiAgICAgIHV0aWxzLnN0eWxlKGJ1dHRvbiwge1xuICAgICAgICBib3JkZXJTdHlsZTogdGhpcy5wcmVzc2VkID8gXCJpbnNldFwiIDogXCJvdXRzZXRcIiAvLyBpbnNldCBvdXRzZXQgZ3Jvb3ZlIHJpZGdlXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMub25DbGljaykgdGhpcy5vbkNsaWNrKCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5kb20gPSBidXR0b247XG4gIH1cblxuICAvKlxuICAvLyBTb2xvXG4gIHZhciBzb2xvX3RvZ2dsZSA9IG5ldyBUb2dnbGVCdXR0b24oXCJTXCIpO1xuICBkb20uYXBwZW5kQ2hpbGQoc29sb190b2dnbGUuZG9tKTtcblxuICBzb2xvX3RvZ2dsZS5vbkNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgZGlzcGF0Y2hlci5maXJlKFwiYWN0aW9uOnNvbG9cIiwgbGF5ZXIsIHNvbG9fdG9nZ2xlLnByZXNzZWQpO1xuICB9O1xuXG4gIC8vIE11dGVcbiAgdmFyIG11dGVfdG9nZ2xlID0gbmV3IFRvZ2dsZUJ1dHRvbihcIk1cIik7XG4gIGRvbS5hcHBlbmRDaGlsZChtdXRlX3RvZ2dsZS5kb20pO1xuXG4gIG11dGVfdG9nZ2xlLm9uQ2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBkaXNwYXRjaGVyLmZpcmUoXCJhY3Rpb246bXV0ZVwiLCBsYXllciwgbXV0ZV90b2dnbGUucHJlc3NlZCk7XG4gIH07XG5cbiAgXG4gIHZhciBudW1iZXIgPSBuZXcgVUlOdW1iZXIobGF5ZXIsIGRpc3BhdGNoZXIpO1xuXG4gIG51bWJlci5vbkNoYW5nZS5kbyhmdW5jdGlvbih2YWx1ZSwgZG9uZSkge1xuICAgIHN0YXRlLmdldChcIl92YWx1ZVwiKS52YWx1ZSA9IHZhbHVlO1xuICAgIGRpc3BhdGNoZXIuZmlyZShcInZhbHVlLmNoYW5nZVwiLCBsYXllciwgdmFsdWUsIGRvbmUpO1xuICB9KTtcbiBcblxuICB1dGlscy5zdHlsZShudW1iZXIuZG9tLCB7XG4gICAgZmxvYXQ6IFwicmlnaHRcIlxuICB9KTtcbiAgICovXG5cbiAgZG9tLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgZG9tLmFwcGVuZENoaWxkKGtleWZyYW1lX2J1dHRvbik7XG4gIC8vZG9tLmFwcGVuZENoaWxkKG51bWJlci5kb20pO1xuICBkb20uYXBwZW5kQ2hpbGQoZHJvcGRvd24pO1xuXG4gIHV0aWxzLnN0eWxlKGRvbSwge1xuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgbWFyZ2luOiBcIjBweCAwcHggMHB4IDVweFwiLFxuICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgXCIgKyBUaGVtZS5iLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGhlaWdodDogU2V0dGluZ3MuTElORV9IRUlHSFQgLSAxICsgXCJweFwiLFxuICAgIGNvbG9yOiBUaGVtZS5jXG4gIH0pO1xuXG4gIHRoaXMuZG9tID0gZG9tO1xuXG4gIHRoaXMucmVwYWludCA9IHJlcGFpbnQ7XG4gIHZhciBzdGF0ZTtcblxuICB0aGlzLnNldFN0YXRlID0gZnVuY3Rpb24obCwgcykge1xuICAgIGxheWVyID0gbDtcbiAgICBzdGF0ZSA9IHM7XG5cbiAgICB2YXIgdG1wX3ZhbHVlID0gc3RhdGUuZ2V0KFwiX3ZhbHVlXCIpO1xuICAgIGlmICh0bXBfdmFsdWUudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdG1wX3ZhbHVlLnZhbHVlID0gMDtcbiAgICB9XG5cbiAgICAvL251bWJlci5zZXRWYWx1ZSh0bXBfdmFsdWUudmFsdWUpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gc3RhdGUuZ2V0KFwibmFtZVwiKS52YWx1ZTtcblxuICAgIHJlcGFpbnQoKTtcbiAgfTtcblxuICBmdW5jdGlvbiByZXBhaW50KHMpIHtcbiAgICBkcm9wZG93bi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBkcm9wZG93bi5kaXNhYmxlZCA9IHRydWU7XG4gICAga2V5ZnJhbWVfYnV0dG9uLnN0eWxlLmNvbG9yID0gVGhlbWUuYjtcbiAgICAvLyBrZXlmcmFtZV9idXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAvLyBrZXlmcmFtZV9idXR0b24uc3R5bGUuYm9yZGVyU3R5bGUgPSAnc29saWQnO1xuXG4gICAgdmFyIHR3ZWVuID0gbnVsbDtcbiAgICB2YXIgbyA9IHV0aWxzLnRpbWVBdExheWVyKGxheWVyLCBzKTtcblxuICAgIGlmICghbykgcmV0dXJuO1xuXG4gICAgaWYgKG8uY2FuX3R3ZWVuKSB7XG4gICAgICBkcm9wZG93bi5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgIGRyb3Bkb3duLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAvLyBpZiAoby50d2VlbilcbiAgICAgIGRyb3Bkb3duLnZhbHVlID0gby50d2VlbiA/IG8udHdlZW4gOiBcIm5vbmVcIjtcbiAgICAgIGlmIChkcm9wZG93bi52YWx1ZSA9PT0gXCJub25lXCIpIGRyb3Bkb3duLnN0eWxlLm9wYWNpdHkgPSAwLjU7XG4gICAgfVxuXG4gICAgaWYgKG8ua2V5ZnJhbWUpIHtcbiAgICAgIGtleWZyYW1lX2J1dHRvbi5zdHlsZS5jb2xvciA9IFRoZW1lLmM7XG4gICAgICAvLyBrZXlmcmFtZV9idXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgLy8ga2V5ZnJhbWVfYnV0dG9uLnN0eWxlLmJvcmRlclN0eWxlID0gJ2luc2V0JztcbiAgICB9XG5cbiAgICBzdGF0ZS5nZXQoXCJfdmFsdWVcIikudmFsdWUgPSBvLnZhbHVlO1xuICAgIC8vbnVtYmVyLnNldFZhbHVlKG8udmFsdWUpO1xuICAgIC8vbnVtYmVyLnBhaW50KCk7XG5cbiAgICBkaXNwYXRjaGVyLmZpcmUoXCJ0YXJnZXQubm90aWZ5XCIsIGxheWVyLm5hbWUsIG8udmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5ZXJWaWV3O1xuIiwidmFyIFNldHRpbmdzID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIiksXG4gIFZpZXdMYXllciA9IHJlcXVpcmUoXCIuL3ZpZXdfbGF5ZXJcIiksXG4gIEljb25CdXR0b24gPSByZXF1aXJlKFwiLi91aV9pY29uX2J1dHRvblwiKSxcbiAgc3R5bGUgPSByZXF1aXJlKFwiLi91dGlsc1wiKS5zdHlsZSxcbiAgVGhlbWUgPSByZXF1aXJlKFwiLi90aGVtZVwiKSxcbiAgU1RPUkFHRV9QUkVGSVggPSByZXF1aXJlKFwiLi91dGlsc1wiKS5TVE9SQUdFX1BSRUZJWCxcbiAgVUlOdW1iZXIgPSByZXF1aXJlKFwiLi91aV9udW1iZXJcIik7XG52YXIgbGF5ZXJzLCB4MjtcblxuZnVuY3Rpb24gTGF5ZXJDYWJpbmV0KGRhdGEsIGRpc3BhdGNoZXIpIHtcbiAgdmFyIGxheWVyX3N0b3JlID0gZGF0YS5nZXQoXCJsYXllcnNcIik7XG5cbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgdmFyIHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvcC5zdHlsZS5jc3NUZXh0ID1cbiAgICBcIm1hcmdpbjogMHB4OyB0b3A6IDA7IGxlZnQ6IDA7IGhlaWdodDogXCIgK1xuICAgIFNldHRpbmdzLk1BUktFUl9UUkFDS19IRUlHSFQgK1xuICAgIFwicHhcIjtcbiAgLy8gdG9wLnN0eWxlLnRleHRBbGlnbiA9ICdyaWdodCc7XG5cbiAgdmFyIGxheWVyX3Njcm9sbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0eWxlKGxheWVyX3Njcm9sbCwge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBTZXR0aW5ncy5NQVJLRVJfVFJBQ0tfSEVJR0hUICsgXCJweFwiLFxuICAgIC8vIGhlaWdodDogKFNldHRpbmdzLmhlaWdodCAtIFNldHRpbmdzLk1BUktFUl9UUkFDS19IRUlHSFQpICsgJ3B4J1xuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG4gIH0pO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChsYXllcl9zY3JvbGwpO1xuXG4gIHZhciBwbGF5aW5nID0gZmFsc2U7XG5cbiAgdmFyIGJ1dHRvbl9zdHlsZXMgPSB7XG4gICAgd2lkdGg6IFwiMjJweFwiLFxuICAgIGhlaWdodDogXCIyMnB4XCIsXG4gICAgcGFkZGluZzogXCIycHhcIlxuICB9O1xuXG4gIHZhciBvcF9idXR0b25fc3R5bGVzID0ge1xuICAgIHdpZHRoOiBcIjMycHhcIixcbiAgICBwYWRkaW5nOiBcIjNweCA0cHggM3B4IDRweFwiXG4gIH07XG5cbiAgdmFyIHBsYXlfYnV0dG9uID0gbmV3IEljb25CdXR0b24oMTYsIFwicGxheVwiLCBcInBsYXlcIiwgZGlzcGF0Y2hlcik7XG4gIHN0eWxlKHBsYXlfYnV0dG9uLmRvbSwgYnV0dG9uX3N0eWxlcywgeyBtYXJnaW5Ub3A6IFwiMnB4XCIgfSk7XG4gIHBsYXlfYnV0dG9uLm9uQ2xpY2soZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwYXRjaGVyLmZpcmUoXCJjb250cm9scy50b2dnbGVfcGxheVwiKTtcbiAgfSk7XG5cbiAgdmFyIHN0b3BfYnV0dG9uID0gbmV3IEljb25CdXR0b24oMTYsIFwic3RvcFwiLCBcInN0b3BcIiwgZGlzcGF0Y2hlcik7XG4gIHN0eWxlKHN0b3BfYnV0dG9uLmRvbSwgYnV0dG9uX3N0eWxlcywgeyBtYXJnaW5Ub3A6IFwiMnB4XCIgfSk7XG4gIHN0b3BfYnV0dG9uLm9uQ2xpY2soZnVuY3Rpb24oZSkge1xuICAgIGRpc3BhdGNoZXIuZmlyZShcImNvbnRyb2xzLnN0b3BcIik7XG4gIH0pO1xuXG4gIHZhciB1bmRvX2J1dHRvbiA9IG5ldyBJY29uQnV0dG9uKDE2LCBcInVuZG9cIiwgXCJ1bmRvXCIsIGRpc3BhdGNoZXIpO1xuICBzdHlsZSh1bmRvX2J1dHRvbi5kb20sIG9wX2J1dHRvbl9zdHlsZXMpO1xuICB1bmRvX2J1dHRvbi5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGRpc3BhdGNoZXIuZmlyZShcImNvbnRyb2xzLnVuZG9cIik7XG4gIH0pO1xuXG4gIHZhciByZWRvX2J1dHRvbiA9IG5ldyBJY29uQnV0dG9uKDE2LCBcInJlcGVhdFwiLCBcInJlZG9cIiwgZGlzcGF0Y2hlcik7XG4gIHN0eWxlKHJlZG9fYnV0dG9uLmRvbSwgb3BfYnV0dG9uX3N0eWxlcyk7XG4gIHJlZG9fYnV0dG9uLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG4gICAgZGlzcGF0Y2hlci5maXJlKFwiY29udHJvbHMucmVkb1wiKTtcbiAgfSk7XG5cbiAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICByYW5nZS50eXBlID0gXCJyYW5nZVwiO1xuICByYW5nZS52YWx1ZSA9IDA7XG4gIHJhbmdlLm1pbiA9IC0xO1xuICByYW5nZS5tYXggPSArMTtcbiAgcmFuZ2Uuc3RlcCA9IDAuMTI1O1xuXG4gIHN0eWxlKHJhbmdlLCB7XG4gICAgd2lkdGg6IFwiOTBweFwiLFxuICAgIG1hcmdpbjogXCIwcHhcIixcbiAgICBtYXJnaW5MZWZ0OiBcIjJweFwiLFxuICAgIG1hcmdpblJpZ2h0OiBcIjJweFwiXG4gIH0pO1xuXG4gIHZhciBkcmFnZ2luZ1JhbmdlID0gMDtcblxuICByYW5nZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKCkge1xuICAgIGRyYWdnaW5nUmFuZ2UgPSAxO1xuICB9KTtcblxuICByYW5nZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBmdW5jdGlvbigpIHtcbiAgICBkcmFnZ2luZ1JhbmdlID0gMDtcbiAgICBjaGFuZ2VSYW5nZSgpO1xuICB9KTtcblxuICByYW5nZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKCkge1xuICAgIGlmICghZHJhZ2dpbmdSYW5nZSkgcmV0dXJuO1xuICAgIGNoYW5nZVJhbmdlKCk7XG4gIH0pO1xuXG4gIGRpdi5hcHBlbmRDaGlsZCh0b3ApO1xuXG4gIHZhciB0aW1lX29wdGlvbnMgPSB7XG4gICAgbWluOiAwLFxuICAgIHN0ZXA6IDAuMTI1XG4gIH07XG5cbiAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IFVJTnVtYmVyKHRpbWVfb3B0aW9ucyk7XG4gIHZhciB0b3RhbFRpbWUgPSBuZXcgVUlOdW1iZXIodGltZV9vcHRpb25zKTtcblxuICB2YXIgY3VycmVudFRpbWVTdG9yZSA9IGRhdGEuZ2V0KFwidWk6Y3VycmVudFRpbWVcIik7XG4gIHZhciB0b3RhbFRpbWVTdG9yZSA9IGRhdGEuZ2V0KFwidWk6dG90YWxUaW1lXCIpO1xuXG4gIC8vIFVJMlN0b3JlQmluZCh2aWV3LCBkYXRhc3RvcmUpIHtcbiAgLy8gXHR2aWV3Lm9uQ2hhbmdlLmRvKGZ1bmN0aW9uKHYpIHtcbiAgLy8gXHRcdGRhdGFzdG9yZS52YWx1ZSA9IHZpZXc7XG4gIC8vIFx0fSlcblxuICAvLyBcdGRhdGFzdG9yZS5vbkNoYW5nZS5kbyhmdW5jdGlvbih2KSB7XG4gIC8vIFx0XHR2aWV3LnNldFZhbHVlID0gdjtcbiAgLy8gXHR9KVxuICAvLyB9XG5cbiAgY3VycmVudFRpbWUub25DaGFuZ2UuZG8oZnVuY3Rpb24odmFsdWUsIGRvbmUpIHtcbiAgICBkaXNwYXRjaGVyLmZpcmUoXCJ0aW1lLnVwZGF0ZVwiLCB2YWx1ZSk7XG4gICAgLy8gcmVwYWludCgpO1xuICB9KTtcblxuICB0b3RhbFRpbWUub25DaGFuZ2UuZG8oZnVuY3Rpb24odmFsdWUsIGRvbmUpIHtcbiAgICB0b3RhbFRpbWVTdG9yZS52YWx1ZSA9IHZhbHVlO1xuICAgIHJlcGFpbnQoKTtcbiAgfSk7XG5cbiAgLy8gUGxheSBDb250cm9sc1xuICB0b3AuYXBwZW5kQ2hpbGQoY3VycmVudFRpbWUuZG9tKTtcbiAgdG9wLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiL1wiKSk7IC8vIDA6MDA6MDAgLyAwOjEwOjAwXG4gIHRvcC5hcHBlbmRDaGlsZCh0b3RhbFRpbWUuZG9tKTtcbiAgdG9wLmFwcGVuZENoaWxkKHBsYXlfYnV0dG9uLmRvbSk7XG4gIHRvcC5hcHBlbmRDaGlsZChzdG9wX2J1dHRvbi5kb20pO1xuICB0b3AuYXBwZW5kQ2hpbGQocmFuZ2UpO1xuXG4gIHZhciBvcGVyYXRpb25zX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0eWxlKG9wZXJhdGlvbnNfZGl2LCB7XG4gICAgbWFyZ2luVG9wOiBcIjRweFwiXG4gICAgLy8gYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICcgKyBUaGVtZS5iXG4gIH0pO1xuICB0b3AuYXBwZW5kQ2hpbGQob3BlcmF0aW9uc19kaXYpO1xuICAvLyB0b3AuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cbiAgLy8gb3BlbiBfYWx0XG4gIHZhciBmaWxlX29wZW4gPSBuZXcgSWNvbkJ1dHRvbigxNiwgXCJmb2xkZXJfb3Blbl9hbHRcIiwgXCJPcGVuXCIsIGRpc3BhdGNoZXIpO1xuICBzdHlsZShmaWxlX29wZW4uZG9tLCBvcF9idXR0b25fc3R5bGVzKTtcbiAgb3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQoZmlsZV9vcGVuLmRvbSk7XG5cbiAgZnVuY3Rpb24gcG9wdWxhdGVPcGVuKCkge1xuICAgIHdoaWxlIChkcm9wZG93bi5sZW5ndGgpIHtcbiAgICAgIGRyb3Bkb3duLnJlbW92ZSgwKTtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9uO1xuICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnRleHQgPSBcIk5ld1wiO1xuICAgIG9wdGlvbi52YWx1ZSA9IFwiKm5ldypcIjtcbiAgICBkcm9wZG93bi5hZGQob3B0aW9uKTtcblxuICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnRleHQgPSBcIkltcG9ydCBKU09OXCI7XG4gICAgb3B0aW9uLnZhbHVlID0gXCIqaW1wb3J0KlwiO1xuICAgIGRyb3Bkb3duLmFkZChvcHRpb24pO1xuXG4gICAgLy8gRG9lc24ndCB3b3JrXG4gICAgLy8gb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgLy8gb3B0aW9uLnRleHQgPSAnU2VsZWN0IEZpbGUnO1xuICAgIC8vIG9wdGlvbi52YWx1ZSA9ICcqc2VsZWN0Kic7XG4gICAgLy8gZHJvcGRvd24uYWRkKG9wdGlvbik7XG5cbiAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi50ZXh0ID0gXCI9PU9wZW49PVwiO1xuICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBkcm9wZG93bi5hZGQob3B0aW9uKTtcblxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoU1RPUkFHRV9QUkVGSVggKyBcIiguKilcIik7XG4gICAgZm9yICh2YXIga2V5IGluIGxvY2FsU3RvcmFnZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coa2V5KTtcblxuICAgICAgdmFyIG1hdGNoID0gcmVnZXguZXhlYyhrZXkpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gbWF0Y2hbMV07XG5cbiAgICAgICAgZHJvcGRvd24uYWRkKG9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gbGlzdGVuIG9uIG90aGVyIHRhYnNcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFNUT1JBR0VfUFJFRklYICsgXCIoLiopXCIpO1xuICAgIGlmIChyZWdleC5leGVjKGUua2V5KSkge1xuICAgICAgcG9wdWxhdGVPcGVuKCk7XG4gICAgfVxuICB9KTtcblxuICBkaXNwYXRjaGVyLm9uKFwic2F2ZTpkb25lXCIsIHBvcHVsYXRlT3Blbik7XG5cbiAgdmFyIGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblxuICBzdHlsZShkcm9wZG93biwge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgLy8gcmlnaHQ6IDAsXG4gICAgLy8gbWFyZ2luOiAwLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgd2lkdGg6IFwiMTZweFwiLFxuICAgIGhlaWdodDogXCIxNnB4XCJcbiAgICAvLyB6SW5kZXg6IDEsXG4gIH0pO1xuXG4gIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VkJywgZHJvcGRvd24ubGVuZ3RoLCBkcm9wZG93bi52YWx1ZSk7XG5cbiAgICBzd2l0Y2ggKGRyb3Bkb3duLnZhbHVlKSB7XG4gICAgICBjYXNlIFwiKm5ldypcIjpcbiAgICAgICAgZGlzcGF0Y2hlci5maXJlKFwibmV3XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIqaW1wb3J0KlwiOlxuICAgICAgICBkaXNwYXRjaGVyLmZpcmUoXCJpbXBvcnRcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIipzZWxlY3QqXCI6XG4gICAgICAgIGRpc3BhdGNoZXIuZmlyZShcIm9wZW5maWxlXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRpc3BhdGNoZXIuZmlyZShcIm9wZW5cIiwgZHJvcGRvd24udmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuXG4gIGZpbGVfb3Blbi5kb20uaW5zZXJ0QmVmb3JlKGRyb3Bkb3duLCBmaWxlX29wZW4uZG9tLmZpcnN0Q2hpbGQpO1xuXG4gIHBvcHVsYXRlT3BlbigpO1xuXG4gIC8vIC8vIGpzb24gaW1wb3J0XG4gIC8vIHZhciBpbXBvcnRfanNvbiA9IG5ldyBJY29uQnV0dG9uKDE2LCAnc2lnbmluJywgJ0ltcG9ydCBKU09OJywgZGlzcGF0Y2hlcik7XG4gIC8vIG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKGltcG9ydF9qc29uLmRvbSk7XG4gIC8vIGltcG9ydF9qc29uLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG4gIC8vIFx0ZGlzcGF0Y2hlci5maXJlKCdpbXBvcnQnKTtcbiAgLy8gfSk7XG5cbiAgLy8gLy8gbmV3XG4gIC8vIHZhciBmaWxlX2FsdCA9IG5ldyBJY29uQnV0dG9uKDE2LCAnZmlsZV9hbHQnLCAnTmV3JywgZGlzcGF0Y2hlcik7XG4gIC8vIG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKGZpbGVfYWx0LmRvbSk7XG5cbiAgLy8gc2F2ZVxuICB2YXIgc2F2ZSA9IG5ldyBJY29uQnV0dG9uKDE2LCBcInNhdmVcIiwgXCJTYXZlXCIsIGRpc3BhdGNoZXIpO1xuICBzdHlsZShzYXZlLmRvbSwgb3BfYnV0dG9uX3N0eWxlcyk7XG4gIG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKHNhdmUuZG9tKTtcbiAgc2F2ZS5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGRpc3BhdGNoZXIuZmlyZShcInNhdmVcIik7XG4gIH0pO1xuXG4gIC8vIHNhdmUgYXNcbiAgdmFyIHNhdmVfYXMgPSBuZXcgSWNvbkJ1dHRvbigxNiwgXCJwYXN0ZVwiLCBcIlNhdmUgYXNcIiwgZGlzcGF0Y2hlcik7XG4gIHN0eWxlKHNhdmVfYXMuZG9tLCBvcF9idXR0b25fc3R5bGVzKTtcbiAgb3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQoc2F2ZV9hcy5kb20pO1xuICBzYXZlX2FzLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG4gICAgZGlzcGF0Y2hlci5maXJlKFwic2F2ZV9hc1wiKTtcbiAgfSk7XG5cbiAgLy8gZG93bmxvYWQganNvbiAoZXhwb3J0KVxuICB2YXIgZG93bmxvYWRfYWx0ID0gbmV3IEljb25CdXR0b24oXG4gICAgMTYsXG4gICAgXCJkb3dubG9hZF9hbHRcIixcbiAgICBcIkRvd25sb2FkIC8gRXhwb3J0IEpTT04gdG8gZmlsZVwiLFxuICAgIGRpc3BhdGNoZXJcbiAgKTtcbiAgc3R5bGUoZG93bmxvYWRfYWx0LmRvbSwgb3BfYnV0dG9uX3N0eWxlcyk7XG4gIG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKGRvd25sb2FkX2FsdC5kb20pO1xuICBkb3dubG9hZF9hbHQub25DbGljayhmdW5jdGlvbigpIHtcbiAgICBkaXNwYXRjaGVyLmZpcmUoXCJleHBvcnRcIik7XG4gIH0pO1xuXG4gIHZhciB1cGxvYWRfYWx0ID0gbmV3IEljb25CdXR0b24oXG4gICAgMTYsXG4gICAgXCJ1cGxvYWRfYWx0XCIsXG4gICAgXCJMb2FkIGZyb20gZmlsZVwiLFxuICAgIGRpc3BhdGNoZXJcbiAgKTtcbiAgc3R5bGUodXBsb2FkX2FsdC5kb20sIG9wX2J1dHRvbl9zdHlsZXMpO1xuICBvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZCh1cGxvYWRfYWx0LmRvbSk7XG4gIHVwbG9hZF9hbHQub25DbGljayhmdW5jdGlvbigpIHtcbiAgICBkaXNwYXRjaGVyLmZpcmUoXCJvcGVuZmlsZVwiKTtcbiAgfSk7XG5cbiAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5zdHlsZS53aWR0aCA9IFwiMjBweFwiO1xuICBzcGFuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICBvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChzcGFuKTtcblxuICBvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZCh1bmRvX2J1dHRvbi5kb20pO1xuICBvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChyZWRvX2J1dHRvbi5kb20pO1xuICBvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuXG4gIC8vIENsb3VkIERvd25sb2FkIC8gVXBsb2FkIGVkaXQgcGVuY2lsXG5cbiAgLypcblx0Ly8gLy8gc2hvdyBsYXllclxuXHQvLyB2YXIgZXllX29wZW4gPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ2V5ZV9vcGVuJywgJ2V5ZV9vcGVuJywgZGlzcGF0Y2hlcik7XG5cdC8vIG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKGV5ZV9vcGVuLmRvbSk7XG5cblx0Ly8gLy8gaGlkZSAvIGRpc2FibGUgbGF5ZXJcblx0Ly8gdmFyIGV5ZV9jbG9zZSA9IG5ldyBJY29uQnV0dG9uKDE2LCAnZXllX2Nsb3NlJywgJ2V5ZV9jbG9zZScsIGRpc3BhdGNoZXIpO1xuXHQvLyBvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChleWVfY2xvc2UuZG9tKTtcblxuXG5cdC8vIHJlbW92ZSBsYXllclxuXHR2YXIgbWludXMgPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ21pbnVzJywgJ21pbnVzJywgZGlzcGF0Y2hlcik7XG5cdG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKG1pbnVzLmRvbSk7XG5cblx0Ly8gY2hlY2tcblx0dmFyIG9rID0gbmV3IEljb25CdXR0b24oMTYsICdvaycsICdvaycsIGRpc3BhdGNoZXIpO1xuXHRvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChvay5kb20pO1xuXG5cdC8vIGNyb3NzXG5cdHZhciByZW1vdmUgPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ3JlbW92ZScsICdyZW1vdmUnLCBkaXNwYXRjaGVyKTtcblx0b3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQocmVtb3ZlLmRvbSk7XG5cblx0Ki9cblxuICAvLyByYW5nZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VSYW5nZSk7XG5cbiAgZnVuY3Rpb24gY29udmVydFBlcmNlbnRUb1RpbWUodCkge1xuICAgIHZhciBtaW5fdGltZSA9IDEwICogNjA7IC8vIDEwIG1pbnV0ZXNcbiAgICBtaW5fdGltZSA9IGRhdGEuZ2V0KFwidWk6dG90YWxUaW1lXCIpLnZhbHVlO1xuICAgIHZhciBtYXhfdGltZSA9IDE7XG4gICAgdmFyIHYgPSAoU2V0dGluZ3Mud2lkdGggKiAwLjgpIC8gKHQgKiAobWF4X3RpbWUgLSBtaW5fdGltZSkgKyBtaW5fdGltZSk7XG4gICAgcmV0dXJuIHY7XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0VGltZVRvUGVyY2VudCh2KSB7XG4gICAgdmFyIG1pbl90aW1lID0gMTAgKiA2MDsgLy8gMTAgbWludXRlc1xuICAgIG1pbl90aW1lID0gZGF0YS5nZXQoXCJ1aTp0b3RhbFRpbWVcIikudmFsdWU7XG4gICAgdmFyIG1heF90aW1lID0gMTtcbiAgICB2YXIgdCA9ICgoU2V0dGluZ3Mud2lkdGggKiAwLjgpIC8gdiAtIG1pbl90aW1lKSAvIChtYXhfdGltZSAtIG1pbl90aW1lKTtcbiAgICByZXR1cm4gdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZVJhbmdlKCkge1xuICAgIGRpc3BhdGNoZXIuZmlyZShcInVwZGF0ZS5zY2FsZVwiLCBNYXRoLnBvdygxMDAsIC1yYW5nZS52YWx1ZSkpO1xuICB9XG5cbiAgdmFyIGxheWVyX3VpcyA9IFtdLFxuICAgIHZpc2libGVfbGF5ZXJzID0gMDtcbiAgdmFyIHVudXNlZF9sYXllcnMgPSBbXTtcblxuICB0aGlzLmxheWVycyA9IGxheWVyX3VpcztcblxuICB0aGlzLnNldENvbnRyb2xTdGF0dXMgPSBmdW5jdGlvbih2KSB7XG4gICAgcGxheWluZyA9IHY7XG4gICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgIHBsYXlfYnV0dG9uLnNldEljb24oXCJwYXVzZVwiKTtcbiAgICAgIHBsYXlfYnV0dG9uLnNldFRpcChcInBhdXNlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5X2J1dHRvbi5zZXRJY29uKFwicGxheVwiKTtcbiAgICAgIHBsYXlfYnV0dG9uLnNldFRpcChcInBsYXlcIik7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuc2V0U3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGxheWVyX3N0b3JlID0gc3RhdGU7XG4gICAgbGF5ZXJzID0gbGF5ZXJfc3RvcmUudmFsdWU7XG4gICAgLy8gbGF5ZXJzID0gc3RhdGU7XG4gICAgY29uc29sZS5sb2cobGF5ZXJfdWlzLmxlbmd0aCwgbGF5ZXJzKTtcbiAgICB2YXIgaSwgbGF5ZXI7XG4gICAgZm9yIChpID0gMDsgaSA8IGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGF5ZXIgPSBsYXllcnNbaV07XG5cbiAgICAgIGlmICghbGF5ZXJfdWlzW2ldKSB7XG4gICAgICAgIHZhciBsYXllcl91aTtcbiAgICAgICAgaWYgKHVudXNlZF9sYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgbGF5ZXJfdWkgPSB1bnVzZWRfbGF5ZXJzLnBvcCgpO1xuICAgICAgICAgIGxheWVyX3VpLmRvbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG5ld1xuICAgICAgICAgIGxheWVyX3VpID0gbmV3IFZpZXdMYXllcihsYXllciwgZGlzcGF0Y2hlcik7XG4gICAgICAgICAgbGF5ZXJfc2Nyb2xsLmFwcGVuZENoaWxkKGxheWVyX3VpLmRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgbGF5ZXJfdWlzLnB1c2gobGF5ZXJfdWkpO1xuICAgICAgfVxuXG4gICAgICAvLyBsYXllcl91aXNbaV0uc2V0U3RhdGUobGF5ZXIpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCJUb3RhbCBsYXllcnMgKHZpZXcsIGhpZGRlbiwgdG90YWwpXCIsXG4gICAgICBsYXllcl91aXMubGVuZ3RoLFxuICAgICAgdW51c2VkX2xheWVycy5sZW5ndGgsXG4gICAgICBsYXllcl91aXMubGVuZ3RoICsgdW51c2VkX2xheWVycy5sZW5ndGhcbiAgICApO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlcGFpbnQocykge1xuICAgIHMgPSBjdXJyZW50VGltZVN0b3JlLnZhbHVlO1xuICAgIGN1cnJlbnRUaW1lLnNldFZhbHVlKHMpO1xuICAgIHRvdGFsVGltZS5zZXRWYWx1ZSh0b3RhbFRpbWVTdG9yZS52YWx1ZSk7XG4gICAgY3VycmVudFRpbWUucGFpbnQoKTtcbiAgICB0b3RhbFRpbWUucGFpbnQoKTtcblxuICAgIHZhciBpO1xuXG4gICAgcyA9IHMgfHwgMDtcbiAgICBmb3IgKGkgPSBsYXllcl91aXMubGVuZ3RoOyBpLS0gPiAwOyApIHtcbiAgICAgIC8vIHF1aWNrIGhhY2tcbiAgICAgIGlmIChpID49IGxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgbGF5ZXJfdWlzW2ldLmRvbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHVudXNlZF9sYXllcnMucHVzaChsYXllcl91aXMucG9wKCkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGF5ZXJfdWlzW2ldLnNldFN0YXRlKGxheWVyc1tpXSwgbGF5ZXJfc3RvcmUuZ2V0KGkpKTtcbiAgICAgIC8vIGxheWVyX3Vpc1tpXS5zZXRTdGF0ZSgnbGF5ZXJzJysnOicraSk7XG4gICAgICBsYXllcl91aXNbaV0ucmVwYWludChzKTtcbiAgICB9XG5cbiAgICB2aXNpYmxlX2xheWVycyA9IGxheWVyX3Vpcy5sZW5ndGg7XG4gIH1cblxuICB0aGlzLnJlcGFpbnQgPSByZXBhaW50O1xuICB0aGlzLnNldFN0YXRlKGxheWVyX3N0b3JlKTtcblxuICB0aGlzLnNjcm9sbFRvID0gZnVuY3Rpb24oeCkge1xuICAgIGxheWVyX3Njcm9sbC5zY3JvbGxUb3AgPVxuICAgICAgeCAqIChsYXllcl9zY3JvbGwuc2Nyb2xsSGVpZ2h0IC0gbGF5ZXJfc2Nyb2xsLmNsaWVudEhlaWdodCk7XG4gIH07XG5cbiAgdGhpcy5kb20gPSBkaXY7XG5cbiAgcmVwYWludCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExheWVyQ2FiaW5ldDtcbiIsInZhciBTZXR0aW5ncyA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpLFxuICBUaGVtZSA9IHJlcXVpcmUoXCIuL3RoZW1lXCIpLFxuICB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpLFxuICBwcm94eV9jdHggPSB1dGlscy5wcm94eV9jdHgsXG4gIFR3ZWVucyA9IHJlcXVpcmUoXCIuL3V0aWxfdHdlZW5cIiksXG4gIGhhbmRsZURyYWcgPSByZXF1aXJlKFwiLi91dGlsX2hhbmRsZV9kcmFnXCIpLFxuICBTY3JvbGxDYW52YXMgPSByZXF1aXJlKFwiLi92aWV3X3RpbWVfc2Nyb2xsZXJcIiksXG4gIENhbnZhcyA9IHJlcXVpcmUoXCIuL3VpX2NhbnZhc1wiKTtcbnZhciBMSU5FX0hFSUdIVCA9IFNldHRpbmdzLkxJTkVfSEVJR0hULFxuICBESUFNT05EX1NJWkUgPSBTZXR0aW5ncy5ESUFNT05EX1NJWkUsXG4gIFRJTUVfU0NST0xMRVJfSEVJR0hUID0gMzUsXG4gIE1BUktFUl9UUkFDS19IRUlHSFQgPSAyNSxcbiAgTEVGVF9QQU5FX1dJRFRIID0gU2V0dGluZ3MuTEVGVF9QQU5FX1dJRFRILFxuICB0aW1lX3NjYWxlID0gU2V0dGluZ3MudGltZV9zY2FsZSxcbiAgVE9QID0gMTA7XG5cbnZhciBmcmFtZV9zdGFydCA9IDA7IC8vIHRoaXMgaXMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uLlxuXG52YXIgd2lkdGgsIGhlaWdodDtcblxuLypcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgdGhlIHZpZXcgZm9yIHRoZSByaWdodCBtYWluIHNlY3Rpb24gb2YgdGltZWxpbmVyXG4gKi9cblxuLy8gVE9ET1xuLy8gZGlydHkgcmVuZGVyaW5nXG4vLyBkcmFnIGJsb2NrXG4vLyBET04nVCB1c2UgdGltZS51cGRhdGUgZm9yIGV2ZXJ5dGhpbmdcblxudmFyIHRpY2tNYXJrMTtcbnZhciB0aWNrTWFyazI7XG52YXIgdGlja01hcmszO1xuXG5mdW5jdGlvbiB0aW1lX3NjYWxlZCgpIHtcbiAgLypcbiAgICogU3ViZGl2aXNvbiBMT0RcbiAgICogdGltZV9zY2FsZSByZWZlcnMgdG8gbnVtYmVyIG9mIHBpeGVscyBwZXIgdW5pdFxuICAgKiBFZy4gMSBpbmNoIC0gNjBzLCAxIGluY2ggLSA2MGZwcywgMSBpbmNoIC0gNiBtaW5zXG4gICAqL1xuICB2YXIgZGl2ID0gNjA7XG5cbiAgdGlja01hcmsxID0gdGltZV9zY2FsZSAvIGRpdjtcbiAgdGlja01hcmsyID0gMiAqIHRpY2tNYXJrMTtcbiAgdGlja01hcmszID0gMTAgKiB0aWNrTWFyazE7XG59XG5cbnRpbWVfc2NhbGVkKCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8vIFRpbWVsaW5lIFBhbmVsXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmZ1bmN0aW9uIFRpbWVsaW5lUGFuZWwoZGF0YSwgZGlzcGF0Y2hlcikge1xuICB2YXIgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXG4gIHZhciBzY3JvbGxUb3AgPSAwLFxuICAgIHNjcm9sbExlZnQgPSAwLFxuICAgIFNDUk9MTF9IRUlHSFQ7XG4gIHZhciBsYXllcnMgPSBkYXRhLmdldChcImxheWVyc1wiKS52YWx1ZTtcblxuICB0aGlzLnNjcm9sbFRvID0gZnVuY3Rpb24ocywgeSkge1xuICAgIHNjcm9sbFRvcCA9IHMgKiBNYXRoLm1heChsYXllcnMubGVuZ3RoICogTElORV9IRUlHSFQgLSBTQ1JPTExfSEVJR0hULCAwKTtcbiAgICByZXBhaW50KCk7XG4gIH07XG5cbiAgdGhpcy5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaCA9IFNldHRpbmdzLmhlaWdodCAtIFRJTUVfU0NST0xMRVJfSEVJR0hUO1xuICAgIGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgIGNhbnZhcy53aWR0aCA9IFNldHRpbmdzLndpZHRoICogZHByO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoICogZHByO1xuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IFNldHRpbmdzLndpZHRoICsgXCJweFwiO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoICsgXCJweFwiO1xuICAgIFNDUk9MTF9IRUlHSFQgPSBTZXR0aW5ncy5oZWlnaHQgLSBUSU1FX1NDUk9MTEVSX0hFSUdIVDtcbiAgICBzY3JvbGxfY2FudmFzLnNldFNpemUoU2V0dGluZ3Mud2lkdGgsIFRJTUVfU0NST0xMRVJfSEVJR0hUKTtcbiAgfTtcblxuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICB2YXIgc2Nyb2xsX2NhbnZhcyA9IG5ldyBDYW52YXMoU2V0dGluZ3Mud2lkdGgsIFRJTUVfU0NST0xMRVJfSEVJR0hUKTtcbiAgLy8gZGF0YS5hZGRMaXN0ZW5lcigndWknLCByZXBhaW50ICk7XG5cbiAgdXRpbHMuc3R5bGUoY2FudmFzLCB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFRJTUVfU0NST0xMRVJfSEVJR0hUICsgXCJweFwiLFxuICAgIGxlZnQ6IFwiMHB4XCJcbiAgfSk7XG5cbiAgdXRpbHMuc3R5bGUoc2Nyb2xsX2NhbnZhcy5kb20sIHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCIwcHhcIixcbiAgICBsZWZ0OiBcIjEwcHhcIlxuICB9KTtcblxuICBzY3JvbGxfY2FudmFzLnVzZXMobmV3IFNjcm9sbENhbnZhcyhkaXNwYXRjaGVyLCBkYXRhKSk7XG5cbiAgZGl2LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gIGRpdi5hcHBlbmRDaGlsZChzY3JvbGxfY2FudmFzLmRvbSk7XG5cbiAgLy8gdGhpcy5kb20gPSBjYW52YXM7XG4gIHRoaXMuZG9tID0gZGl2O1xuICB0aGlzLnJlc2l6ZSgpO1xuXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICB2YXIgY3R4X3dyYXAgPSBwcm94eV9jdHgoY3R4KTtcblxuICB2YXIgY3VycmVudFRpbWU7IC8vIG1lYXN1cmVkIGluIHNlY29uZHNcbiAgLy8gdGVjaG5pY2FsbHkgaXQgY291bGQgYmUgaW4gZnJhbWVzIG9yICBoYXZlIGl0IGluIHN0cmluZyBmb3JtYXQgKDA6MDA6MDA6MS02MClcblxuICB2YXIgTEVGVF9HVVRURVIgPSAyMDtcbiAgdmFyIGksIHgsIHksIGlsLCBqO1xuXG4gIHZhciBuZWVkc1JlcGFpbnQgPSBmYWxzZTtcbiAgdmFyIHJlbmRlckl0ZW1zID0gW107XG5cbiAgZnVuY3Rpb24gRWFzaW5nUmVjdCh4MSwgeTEsIHgyLCB5MiwgZnJhbWUsIGZyYW1lMiwgdmFsdWVzLCBsYXllciwgaikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMucGF0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY3R4X3dyYXBcbiAgICAgICAgLmJlZ2luUGF0aCgpXG4gICAgICAgIC5yZWN0KHgxLCB5MSwgeDIgLSB4MSwgeTIgLSB5MSlcbiAgICAgICAgLmNsb3NlUGF0aCgpO1xuICAgIH07XG5cbiAgICB0aGlzLnBhaW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnBhdGgoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmcmFtZS5fY29sb3I7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH07XG5cbiAgICB0aGlzLm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgY2FudmFzLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiOyAvLyBwb2ludGVyIG1vdmUgZXctcmVzaXplXG4gICAgfTtcblxuICAgIHRoaXMubW91c2VvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICB9O1xuXG4gICAgdGhpcy5tb3VzZWRyYWcgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdDEgPSB4X3RvX3RpbWUoeDEgKyBlLmR4KTtcbiAgICAgIHQxID0gTWF0aC5tYXgoMCwgdDEpO1xuICAgICAgLy8gVE9ETyBsaW1pdCBtb3ZpbmcgdG8gbmVpZ2hib3Vyc1xuICAgICAgZnJhbWUudGltZSA9IHQxO1xuXG4gICAgICB2YXIgdDIgPSB4X3RvX3RpbWUoeDIgKyBlLmR4KTtcbiAgICAgIHQyID0gTWF0aC5tYXgoMCwgdDIpO1xuICAgICAgZnJhbWUyLnRpbWUgPSB0MjtcblxuICAgICAgLy8gZGlzcGF0Y2hlci5maXJlKCd0aW1lLnVwZGF0ZScsIHQxKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gRGlhbW9uZChmcmFtZSwgeSkge1xuICAgIHZhciB4LCB5MjtcblxuICAgIHggPSB0aW1lX3RvX3goZnJhbWUudGltZSk7XG4gICAgeTIgPSB5ICsgTElORV9IRUlHSFQgKiAwLjUgLSBESUFNT05EX1NJWkUgLyAyO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIGlzT3ZlciA9IGZhbHNlO1xuXG4gICAgdGhpcy5wYXRoID0gZnVuY3Rpb24oY3R4X3dyYXApIHtcbiAgICAgIGN0eF93cmFwXG4gICAgICAgIC5iZWdpblBhdGgoKVxuICAgICAgICAubW92ZVRvKHgsIHkyKVxuICAgICAgICAubGluZVRvKHggKyBESUFNT05EX1NJWkUgLyAyLCB5MiArIERJQU1PTkRfU0laRSAvIDIpXG4gICAgICAgIC5saW5lVG8oeCwgeTIgKyBESUFNT05EX1NJWkUpXG4gICAgICAgIC5saW5lVG8oeCAtIERJQU1PTkRfU0laRSAvIDIsIHkyICsgRElBTU9ORF9TSVpFIC8gMilcbiAgICAgICAgLmNsb3NlUGF0aCgpO1xuICAgIH07XG5cbiAgICB0aGlzLnBhaW50ID0gZnVuY3Rpb24oY3R4X3dyYXApIHtcbiAgICAgIHNlbGYucGF0aChjdHhfd3JhcCk7XG4gICAgICBpZiAoIWlzT3ZlcikgY3R4X3dyYXAuZmlsbFN0eWxlKFRoZW1lLmMpO1xuICAgICAgZWxzZSBjdHhfd3JhcC5maWxsU3R5bGUoXCJ5ZWxsb3dcIik7IC8vIFRoZW1lLmRcblxuICAgICAgY3R4X3dyYXAuZmlsbCgpLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICB0aGlzLm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaXNPdmVyID0gdHJ1ZTtcbiAgICAgIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcIm1vdmVcIjsgLy8gcG9pbnRlciBtb3ZlIGV3LXJlc2l6ZVxuICAgICAgc2VsZi5wYWludChjdHhfd3JhcCk7XG4gICAgfTtcblxuICAgIHRoaXMubW91c2VvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlzT3ZlciA9IGZhbHNlO1xuICAgICAgY2FudmFzLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgc2VsZi5wYWludChjdHhfd3JhcCk7XG4gICAgfTtcblxuICAgIHRoaXMubW91c2VkcmFnID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHQgPSB4X3RvX3RpbWUoeCArIGUuZHgpO1xuICAgICAgdCA9IE1hdGgubWF4KDAsIHQpO1xuICAgICAgLy8gVE9ETyBsaW1pdCBtb3ZpbmcgdG8gbmVpZ2hib3Vyc1xuICAgICAgZnJhbWUudGltZSA9IHQ7XG4gICAgICBkaXNwYXRjaGVyLmZpcmUoXCJ0aW1lLnVwZGF0ZVwiLCB0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdmcmFtZScsIGZyYW1lKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHMsIGZvcm1hdF9mcmllbmRseV9zZWNvbmRzKHMpLCB0aGlzKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwYWludCgpIHtcbiAgICBuZWVkc1JlcGFpbnQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0xheWVyQ29udGVudHMoKSB7XG4gICAgcmVuZGVySXRlbXMgPSBbXTtcbiAgICAvLyBob3Jpem9udGFsIExheWVyIGxpbmVzXG4gICAgZm9yIChpID0gMCwgaWwgPSBsYXllcnMubGVuZ3RoOyBpIDw9IGlsOyBpKyspIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFRoZW1lLmI7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICB5ID0gaSAqIExJTkVfSEVJR0hUO1xuICAgICAgeSA9IH5+eSAtIDAuNTtcblxuICAgICAgY3R4X3dyYXBcbiAgICAgICAgLm1vdmVUbygwLCB5KVxuICAgICAgICAubGluZVRvKHdpZHRoLCB5KVxuICAgICAgICAuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgdmFyIGZyYW1lLCBmcmFtZTIsIGo7XG5cbiAgICAvLyBEcmF3IEVhc2luZyBSZWN0c1xuICAgIGZvciAoaSA9IDA7IGkgPCBpbDsgaSsrKSB7XG4gICAgICAvLyBjaGVjayBmb3Iga2V5ZnJhbWVzXG4gICAgICB2YXIgbGF5ZXIgPSBsYXllcnNbaV07XG4gICAgICB2YXIgdmFsdWVzID0gbGF5ZXIudmFsdWVzO1xuXG4gICAgICB5ID0gaSAqIExJTkVfSEVJR0hUO1xuXG4gICAgICBmb3IgKGogPSAwOyBqIDwgdmFsdWVzLmxlbmd0aCAtIDE7IGorKykge1xuICAgICAgICBmcmFtZSA9IHZhbHVlc1tqXTtcbiAgICAgICAgZnJhbWUyID0gdmFsdWVzW2ogKyAxXTtcblxuICAgICAgICAvLyBEcmF3IFR3ZWVuIFJlY3RcbiAgICAgICAgeCA9IHRpbWVfdG9feChmcmFtZS50aW1lKTtcbiAgICAgICAgdmFyIHgyID0gdGltZV90b194KGZyYW1lMi50aW1lKTtcblxuICAgICAgICBpZiAoIWZyYW1lLnR3ZWVuIHx8IGZyYW1lLnR3ZWVuID09IFwibm9uZVwiKSBjb250aW51ZTtcblxuICAgICAgICB2YXIgeTEgPSB5ICsgMjtcbiAgICAgICAgdmFyIHkyID0geSArIExJTkVfSEVJR0hUIC0gMjtcblxuICAgICAgICByZW5kZXJJdGVtcy5wdXNoKG5ldyBFYXNpbmdSZWN0KHgsIHkxLCB4MiwgeTIsIGZyYW1lLCBmcmFtZTIpKTtcblxuICAgICAgICAvLyAvLyBkcmF3IGVhc2luZyBncmFwaFxuICAgICAgICAvLyB2YXIgY29sb3IgPSBwYXJzZUludChmcmFtZS5fY29sb3Iuc3Vic3RyaW5nKDEsNyksIDE2KTtcbiAgICAgICAgLy8gY29sb3IgPSAweGZmZmZmZiBeIGNvbG9yO1xuICAgICAgICAvLyBjb2xvciA9IGNvbG9yLnRvU3RyaW5nKDE2KTsgICAgICAgICAgIC8vIGNvbnZlcnQgdG8gaGV4XG4gICAgICAgIC8vIGNvbG9yID0gJyMnICsgKCcwMDAwMDAnICsgY29sb3IpLnNsaWNlKC02KTtcblxuICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgLy8gdmFyIHgzO1xuICAgICAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vIGN0eC5tb3ZlVG8oeCwgeTIpO1xuICAgICAgICAvLyB2YXIgZHkgPSB5MSAtIHkyO1xuICAgICAgICAvLyB2YXIgZHggPSB4MiAtIHg7XG5cbiAgICAgICAgLy8gZm9yICh4Mz14OyB4MyA8IHgyOyB4MysrKSB7XG4gICAgICAgIC8vIFx0Y3R4LmxpbmVUbyh4MywgeTIgKyBUd2VlbnNbZnJhbWUudHdlZW5dKCh4MyAtIHgpL2R4KSAqIGR5KTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoaiA9IDA7IGogPCB2YWx1ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgLy8gRGltb25kc1xuICAgICAgICBmcmFtZSA9IHZhbHVlc1tqXTtcbiAgICAgICAgcmVuZGVySXRlbXMucHVzaChuZXcgRGlhbW9uZChmcmFtZSwgeSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbmRlciBpdGVtc1xuICAgIHZhciBpdGVtO1xuICAgIGZvciAoaSA9IDAsIGlsID0gcmVuZGVySXRlbXMubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuICAgICAgaXRlbSA9IHJlbmRlckl0ZW1zW2ldO1xuICAgICAgaXRlbS5wYWludChjdHhfd3JhcCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0VGltZVNjYWxlKCkge1xuICAgIHZhciB2ID0gZGF0YS5nZXQoXCJ1aTp0aW1lU2NhbGVcIikudmFsdWU7XG4gICAgaWYgKHRpbWVfc2NhbGUgIT09IHYpIHtcbiAgICAgIHRpbWVfc2NhbGUgPSB2O1xuICAgICAgdGltZV9zY2FsZWQoKTtcbiAgICB9XG4gIH1cblxuICB2YXIgb3ZlciA9IG51bGw7XG4gIHZhciBtb3VzZWRvd25JdGVtID0gbnVsbDtcblxuICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICB2YXIgaXRlbTtcbiAgICB2YXIgbGFzdF9vdmVyID0gb3ZlcjtcbiAgICAvLyBvdmVyID0gW107XG4gICAgb3ZlciA9IG51bGw7XG4gICAgZm9yIChpID0gcmVuZGVySXRlbXMubGVuZ3RoOyBpLS0gPiAwOyApIHtcbiAgICAgIGl0ZW0gPSByZW5kZXJJdGVtc1tpXTtcbiAgICAgIGl0ZW0ucGF0aChjdHhfd3JhcCk7XG5cbiAgICAgIGlmIChjdHguaXNQb2ludEluUGF0aChwb2ludGVyLnggKiBkcHIsIHBvaW50ZXIueSAqIGRwcikpIHtcbiAgICAgICAgLy8gb3Zlci5wdXNoKGl0ZW0pO1xuICAgICAgICBvdmVyID0gaXRlbTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgb2xkIG1vdXNlaW5cbiAgICBpZiAobGFzdF9vdmVyICYmIGxhc3Rfb3ZlciAhPSBvdmVyKSB7XG4gICAgICBpdGVtID0gbGFzdF9vdmVyO1xuICAgICAgaWYgKGl0ZW0ubW91c2VvdXQpIGl0ZW0ubW91c2VvdXQoKTtcbiAgICB9XG5cbiAgICBpZiAob3Zlcikge1xuICAgICAgaXRlbSA9IG92ZXI7XG4gICAgICBpZiAoaXRlbS5tb3VzZW92ZXIpIGl0ZW0ubW91c2VvdmVyKCk7XG5cbiAgICAgIGlmIChtb3VzZWRvd24yKSB7XG4gICAgICAgIG1vdXNlZG93bkl0ZW0gPSBpdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHBvaW50ZXIpXG4gIH1cblxuICBmdW5jdGlvbiBwb2ludGVyRXZlbnRzKCkge1xuICAgIGlmICghcG9pbnRlcikgcmV0dXJuO1xuXG4gICAgY3R4X3dyYXBcbiAgICAgIC5zYXZlKClcbiAgICAgIC5zY2FsZShkcHIsIGRwcilcbiAgICAgIC50cmFuc2xhdGUoMCwgTUFSS0VSX1RSQUNLX0hFSUdIVClcbiAgICAgIC5iZWdpblBhdGgoKVxuICAgICAgLnJlY3QoMCwgMCwgU2V0dGluZ3Mud2lkdGgsIFNDUk9MTF9IRUlHSFQpXG4gICAgICAudHJhbnNsYXRlKC1zY3JvbGxMZWZ0LCAtc2Nyb2xsVG9wKVxuICAgICAgLmNsaXAoKVxuICAgICAgLnJ1bihjaGVjaylcbiAgICAgIC5yZXN0b3JlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfcGFpbnQoKSB7XG4gICAgaWYgKCFuZWVkc1JlcGFpbnQpIHtcbiAgICAgIHBvaW50ZXJFdmVudHMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzY3JvbGxfY2FudmFzLnJlcGFpbnQoKTtcblxuICAgIHNldFRpbWVTY2FsZSgpO1xuXG4gICAgY3VycmVudFRpbWUgPSBkYXRhLmdldChcInVpOmN1cnJlbnRUaW1lXCIpLnZhbHVlO1xuICAgIGZyYW1lX3N0YXJ0ID0gZGF0YS5nZXQoXCJ1aTpzY3JvbGxUaW1lXCIpLnZhbHVlO1xuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIC8vIGJhY2tncm91bmRcblxuICAgIGN0eC5maWxsU3R5bGUgPSBUaGVtZS5hO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5zY2FsZShkcHIsIGRwcik7XG5cbiAgICAvL1xuXG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7IC8vIC41LCAxLCAyXG5cbiAgICB3aWR0aCA9IFNldHRpbmdzLndpZHRoO1xuICAgIGhlaWdodCA9IFNldHRpbmdzLmhlaWdodDtcblxuICAgIHZhciB1bml0cyA9IHRpbWVfc2NhbGUgLyB0aWNrTWFyazE7XG4gICAgdmFyIG9mZnNldFVuaXRzID0gKGZyYW1lX3N0YXJ0ICogdGltZV9zY2FsZSkgJSB1bml0cztcblxuICAgIHZhciBjb3VudCA9ICh3aWR0aCAtIExFRlRfR1VUVEVSICsgb2Zmc2V0VW5pdHMpIC8gdW5pdHM7XG5cbiAgICAvLyBjb25zb2xlLmxvZygndGltZV9zY2FsZScsIHRpbWVfc2NhbGUsICd0aWNrTWFyazEnLCB0aWNrTWFyazEsICd1bml0cycsIHVuaXRzLCAnb2Zmc2V0VW5pdHMnLCBvZmZzZXRVbml0cywgZnJhbWVfc3RhcnQpO1xuXG4gICAgLy8gdGltZV9zY2FsZSA9IHBpeGVscyB0byAxIHNlY29uZCAoNDApXG4gICAgLy8gdGlja01hcmsxID0gbWFya3MgcGVyIHNlY29uZCAobWFya3MgLyBzKVxuICAgIC8vIHVuaXRzID0gcGl4ZWxzIHRvIGV2ZXJ5IG1hcmsgKDQwKVxuXG4gICAgLy8gbGFiZWxzIG9ubHlcbiAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgeCA9IGkgKiB1bml0cyArIExFRlRfR1VUVEVSIC0gb2Zmc2V0VW5pdHM7XG5cbiAgICAgIC8vIHZlcnRpY2FsIGxpbmVzXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBUaGVtZS5iO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh4LCAwKTtcbiAgICAgIGN0eC5saW5lVG8oeCwgaGVpZ2h0KTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgY3R4LmZpbGxTdHlsZSA9IFRoZW1lLmQ7XG4gICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuICAgICAgdmFyIHQgPSAoaSAqIHVuaXRzIC0gb2Zmc2V0VW5pdHMpIC8gdGltZV9zY2FsZSArIGZyYW1lX3N0YXJ0O1xuICAgICAgdCA9IHV0aWxzLmZvcm1hdF9mcmllbmRseV9zZWNvbmRzKHQpO1xuICAgICAgY3R4LmZpbGxUZXh0KHQsIHgsIDM4KTtcbiAgICB9XG5cbiAgICB1bml0cyA9IHRpbWVfc2NhbGUgLyB0aWNrTWFyazI7XG4gICAgY291bnQgPSAod2lkdGggLSBMRUZUX0dVVFRFUiArIG9mZnNldFVuaXRzKSAvIHVuaXRzO1xuXG4gICAgLy8gbWFya2VyIGxpbmVzIC0gbWFpblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBUaGVtZS5jO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgeCA9IGkgKiB1bml0cyArIExFRlRfR1VUVEVSIC0gb2Zmc2V0VW5pdHM7XG4gICAgICBjdHgubW92ZVRvKHgsIE1BUktFUl9UUkFDS19IRUlHSFQgLSAwKTtcbiAgICAgIGN0eC5saW5lVG8oeCwgTUFSS0VSX1RSQUNLX0hFSUdIVCAtIDE2KTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICB2YXIgbXVsID0gdGlja01hcmszIC8gdGlja01hcmsyO1xuICAgIHVuaXRzID0gdGltZV9zY2FsZSAvIHRpY2tNYXJrMztcbiAgICBjb3VudCA9ICh3aWR0aCAtIExFRlRfR1VUVEVSICsgb2Zmc2V0VW5pdHMpIC8gdW5pdHM7XG5cbiAgICAvLyBzbWFsbCB0aWNrc1xuICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBpZiAoaSAlIG11bCA9PT0gMCkgY29udGludWU7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBUaGVtZS5jO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgeCA9IGkgKiB1bml0cyArIExFRlRfR1VUVEVSIC0gb2Zmc2V0VW5pdHM7XG4gICAgICBjdHgubW92ZVRvKHgsIE1BUktFUl9UUkFDS19IRUlHSFQgLSAwKTtcbiAgICAgIGN0eC5saW5lVG8oeCwgTUFSS0VSX1RSQUNLX0hFSUdIVCAtIDEwKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICAvLyBFbmNhcHN1bGF0ZSBhIHNjcm9sbCByZWN0IGZvciB0aGUgbGF5ZXJzXG4gICAgY3R4X3dyYXBcbiAgICAgIC5zYXZlKClcbiAgICAgIC50cmFuc2xhdGUoMCwgTUFSS0VSX1RSQUNLX0hFSUdIVClcbiAgICAgIC5iZWdpblBhdGgoKVxuICAgICAgLnJlY3QoMCwgMCwgU2V0dGluZ3Mud2lkdGgsIFNDUk9MTF9IRUlHSFQpXG4gICAgICAudHJhbnNsYXRlKC1zY3JvbGxMZWZ0LCAtc2Nyb2xsVG9wKVxuICAgICAgLmNsaXAoKVxuICAgICAgLnJ1bihkcmF3TGF5ZXJDb250ZW50cylcbiAgICAgIC5yZXN0b3JlKCk7XG5cbiAgICAvLyBDdXJyZW50IE1hcmtlciAvIEN1cnNvclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7IC8vIFRoZW1lLmNcbiAgICB4ID0gKGN1cnJlbnRUaW1lIC0gZnJhbWVfc3RhcnQpICogdGltZV9zY2FsZSArIExFRlRfR1VUVEVSO1xuXG4gICAgdmFyIHR4dCA9IHV0aWxzLmZvcm1hdF9mcmllbmRseV9zZWNvbmRzKGN1cnJlbnRUaW1lKTtcbiAgICB2YXIgdGV4dFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHR4dCkud2lkdGg7XG5cbiAgICB2YXIgYmFzZV9saW5lID0gTUFSS0VSX1RSQUNLX0hFSUdIVCAtIDUsXG4gICAgICBoYWxmX3JlY3QgPSB0ZXh0V2lkdGggLyAyICsgNDtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIGJhc2VfbGluZSk7XG4gICAgY3R4LmxpbmVUbyh4LCBoZWlnaHQpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiOyAvLyBibGFja1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIGJhc2VfbGluZSArIDUpO1xuICAgIGN0eC5saW5lVG8oeCArIDUsIGJhc2VfbGluZSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgaGFsZl9yZWN0LCBiYXNlX2xpbmUpO1xuICAgIGN0eC5saW5lVG8oeCArIGhhbGZfcmVjdCwgYmFzZV9saW5lIC0gMTQpO1xuICAgIGN0eC5saW5lVG8oeCAtIGhhbGZfcmVjdCwgYmFzZV9saW5lIC0gMTQpO1xuICAgIGN0eC5saW5lVG8oeCAtIGhhbGZfcmVjdCwgYmFzZV9saW5lKTtcbiAgICBjdHgubGluZVRvKHggLSA1LCBiYXNlX2xpbmUpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQodHh0LCB4LCBiYXNlX2xpbmUgLSA0KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICBuZWVkc1JlcGFpbnQgPSBmYWxzZTtcbiAgICAvLyBwb2ludGVyRXZlbnRzKCk7XG4gIH1cblxuICBmdW5jdGlvbiB5X3RvX3RyYWNrKHkpIHtcbiAgICBpZiAoeSAtIE1BUktFUl9UUkFDS19IRUlHSFQgPCAwKSByZXR1cm4gLTE7XG4gICAgcmV0dXJuICgoeSAtIE1BUktFUl9UUkFDS19IRUlHSFQgKyBzY3JvbGxUb3ApIC8gTElORV9IRUlHSFQpIHwgMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHhfdG9fdGltZSh4KSB7XG4gICAgdmFyIHVuaXRzID0gdGltZV9zY2FsZSAvIHRpY2tNYXJrMztcblxuICAgIC8vIHJldHVybiBmcmFtZV9zdGFydCArICh4IC0gTEVGVF9HVVRURVIpIC8gdGltZV9zY2FsZTtcblxuICAgIHJldHVybiBmcmFtZV9zdGFydCArICgoKHggLSBMRUZUX0dVVFRFUikgLyB1bml0cykgfCAwKSAvIHRpY2tNYXJrMztcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVfdG9feChzKSB7XG4gICAgdmFyIGRzID0gcyAtIGZyYW1lX3N0YXJ0O1xuICAgIGRzICo9IHRpbWVfc2NhbGU7XG4gICAgZHMgKz0gTEVGVF9HVVRURVI7XG5cbiAgICByZXR1cm4gZHM7XG4gIH1cblxuICB2YXIgbWUgPSB0aGlzO1xuICB0aGlzLnJlcGFpbnQgPSByZXBhaW50O1xuICB0aGlzLl9wYWludCA9IF9wYWludDtcblxuICByZXBhaW50KCk7XG5cbiAgdmFyIG1vdXNlZG93biA9IGZhbHNlLFxuICAgIHNlbGVjdGlvbiA9IGZhbHNlO1xuXG4gIHZhciBkcmFnT2JqZWN0O1xuICB2YXIgY2FudmFzQm91bmRzO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIGNhbnZhc0JvdW5kcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgbXggPSBlLmNsaWVudFggLSBjYW52YXNCb3VuZHMubGVmdCxcbiAgICAgIG15ID0gZS5jbGllbnRZIC0gY2FudmFzQm91bmRzLnRvcDtcblxuICAgIHZhciB0cmFjayA9IHlfdG9fdHJhY2sobXkpO1xuICAgIHZhciBzID0geF90b190aW1lKG14KTtcblxuICAgIGRpc3BhdGNoZXIuZmlyZShcImtleWZyYW1lXCIsIGxheWVyc1t0cmFja10sIGN1cnJlbnRUaW1lKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZSkge1xuICAgIGNhbnZhc0JvdW5kcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgbXggPSBlLmNsaWVudFggLSBjYW52YXNCb3VuZHMubGVmdCxcbiAgICAgIG15ID0gZS5jbGllbnRZIC0gY2FudmFzQm91bmRzLnRvcDtcbiAgICBvblBvaW50ZXJNb3ZlKG14LCBteSk7XG4gIH1cblxuICB2YXIgcG9pbnRlcmRpZE1vdmVkID0gZmFsc2U7XG4gIHZhciBwb2ludGVyID0gbnVsbDtcblxuICBmdW5jdGlvbiBvblBvaW50ZXJNb3ZlKHgsIHkpIHtcbiAgICBpZiAobW91c2Vkb3duSXRlbSkgcmV0dXJuO1xuICAgIHBvaW50ZXJkaWRNb3ZlZCA9IHRydWU7XG4gICAgcG9pbnRlciA9IHsgeDogeCwgeTogeSB9O1xuICB9XG5cbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcbiAgICBwb2ludGVyID0gbnVsbDtcbiAgfSk7XG5cbiAgdmFyIG1vdXNlZG93bjIgPSBmYWxzZSxcbiAgICBtb3VzZURvd25UaGVuTW92ZSA9IGZhbHNlO1xuICBoYW5kbGVEcmFnKFxuICAgIGNhbnZhcyxcbiAgICBmdW5jdGlvbiBkb3duKGUpIHtcbiAgICAgIG1vdXNlZG93bjIgPSB0cnVlO1xuICAgICAgcG9pbnRlciA9IHtcbiAgICAgICAgeDogZS5vZmZzZXR4LFxuICAgICAgICB5OiBlLm9mZnNldHlcbiAgICAgIH07XG4gICAgICBwb2ludGVyRXZlbnRzKCk7XG5cbiAgICAgIGlmICghbW91c2Vkb3duSXRlbSkgZGlzcGF0Y2hlci5maXJlKFwidGltZS51cGRhdGVcIiwgeF90b190aW1lKGUub2Zmc2V0eCkpO1xuICAgICAgLy8gSGl0IGNyaXRlcmlhXG4gICAgfSxcbiAgICBmdW5jdGlvbiBtb3ZlKGUpIHtcbiAgICAgIG1vdXNlZG93bjIgPSBmYWxzZTtcbiAgICAgIGlmIChtb3VzZWRvd25JdGVtKSB7XG4gICAgICAgIG1vdXNlRG93blRoZW5Nb3ZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKG1vdXNlZG93bkl0ZW0ubW91c2VkcmFnKSB7XG4gICAgICAgICAgbW91c2Vkb3duSXRlbS5tb3VzZWRyYWcoZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoZXIuZmlyZShcInRpbWUudXBkYXRlXCIsIHhfdG9fdGltZShlLm9mZnNldHgpKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZ1bmN0aW9uIHVwKGUpIHtcbiAgICAgIGlmIChtb3VzZURvd25UaGVuTW92ZSkge1xuICAgICAgICBkaXNwYXRjaGVyLmZpcmUoXCJrZXlmcmFtZS5tb3ZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2hlci5maXJlKFwidGltZS51cGRhdGVcIiwgeF90b190aW1lKGUub2Zmc2V0eCkpO1xuICAgICAgfVxuICAgICAgbW91c2Vkb3duMiA9IGZhbHNlO1xuICAgICAgbW91c2Vkb3duSXRlbSA9IG51bGw7XG4gICAgICBtb3VzZURvd25UaGVuTW92ZSA9IGZhbHNlO1xuICAgIH1cbiAgKTtcblxuICB0aGlzLnNldFN0YXRlID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICBsYXllcnMgPSBzdGF0ZS52YWx1ZTtcbiAgICByZXBhaW50KCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZWxpbmVQYW5lbDtcbiIsInZhclxuXHRUaGVtZSA9IHJlcXVpcmUoJy4vdGhlbWUnKSxcblx0dXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyksXG5cdHByb3h5X2N0eCA9IHV0aWxzLnByb3h5X2N0eCxcblx0aGFuZGxlRHJhZyA9IHJlcXVpcmUoJy4vdXRpbF9oYW5kbGVfZHJhZycpXG5cdDtcblxuXG5mdW5jdGlvbiBSZWN0KCkge1xuXHRcbn1cblxuUmVjdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oeCwgeSwgdywgaCwgY29sb3IsIG91dGxpbmUpIHtcblx0dGhpcy54ID0geDtcblx0dGhpcy55ID0geTtcblx0dGhpcy53ID0gdztcblx0dGhpcy5oID0gaDtcblx0dGhpcy5jb2xvciA9IGNvbG9yO1xuXHR0aGlzLm91dGxpbmUgPSBvdXRsaW5lO1xufTtcblxuUmVjdC5wcm90b3R5cGUucGFpbnQgPSBmdW5jdGlvbihjdHgpIHtcblx0Y3R4LmZpbGxTdHlsZSA9IFRoZW1lLmI7ICAvLyAvLyAneWVsbG93Jztcblx0Y3R4LnN0cm9rZVN0eWxlID0gVGhlbWUuYztcblxuXHR0aGlzLnNoYXBlKGN0eCk7XG5cblx0Y3R4LnN0cm9rZSgpO1xuXHRjdHguZmlsbCgpO1xufTtcblxuUmVjdC5wcm90b3R5cGUuc2hhcGUgPSBmdW5jdGlvbihjdHgpIHtcblx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRjdHgucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xufTtcblxuUmVjdC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbih4LCB5KSB7XG5cdHJldHVybiB4ID49IHRoaXMueCAmJiB5ID49IHRoaXMueVxuXHQgJiYgeCA8PSB0aGlzLnggKyB0aGlzLncgJiYgeSA8PSB0aGlzLnkgKyB0aGlzLmg7XG59O1xuXG5cblxuZnVuY3Rpb24gU2Nyb2xsQ2FudmFzKGRpc3BhdGNoZXIsIGRhdGEpIHtcblx0dmFyIHdpZHRoLCBoZWlnaHQ7XG5cblx0dGhpcy5zZXRTaXplID0gZnVuY3Rpb24odywgaCkge1xuXHRcdHdpZHRoID0gdztcblx0XHRoZWlnaHQgPSBoO1xuXHR9XG5cblx0dmFyIFRPUF9TQ1JPTExfVFJBQ0sgPSAyMDtcblx0dmFyIE1BUkdJTlMgPSAxNTtcblxuXHR2YXIgc2Nyb2xsZXIgPSB7XG5cdFx0bGVmdDogMCxcblx0XHRncmlwX2xlbmd0aDogMCxcblx0XHRrOiAxXG5cdH07XG5cblx0dmFyIHNjcm9sbFJlY3QgPSBuZXcgUmVjdCgpO1xuXG5cdHRoaXMucGFpbnQgPSBmdW5jdGlvbihjdHgpIHtcblx0XHR2YXIgdG90YWxUaW1lID0gZGF0YS5nZXQoJ3VpOnRvdGFsVGltZScpLnZhbHVlO1xuXHRcdHZhciBzY3JvbGxUaW1lID0gZGF0YS5nZXQoJ3VpOnNjcm9sbFRpbWUnKS52YWx1ZTtcblx0XHR2YXIgY3VycmVudFRpbWUgPSBkYXRhLmdldCgndWk6Y3VycmVudFRpbWUnKS52YWx1ZTtcblx0XHRcblx0XHR2YXIgcGl4ZWxzX3Blcl9zZWNvbmQgPSBkYXRhLmdldCgndWk6dGltZVNjYWxlJykudmFsdWU7XG5cblx0XHRjdHguc2F2ZSgpO1xuXG5cdFx0dmFyIHcgPSB3aWR0aCAtIDIgKiBNQVJHSU5TO1xuXHRcdHZhciBoID0gMTY7IC8vIFRPUF9TQ1JPTExfVFJBQ0s7XG5cdFx0dmFyIGgyID0gaDtcblxuXG5cdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblx0XHRjdHgudHJhbnNsYXRlKE1BUkdJTlMsIDUpO1xuXG5cdFx0Ly8gb3V0bGluZSBzY3JvbGxlclxuXHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSBUaGVtZS5iO1xuXHRcdGN0eC5yZWN0KDAsIDAsIHcsIGgpO1xuXHRcdGN0eC5zdHJva2UoKTtcblx0XHRcblx0XHR2YXIgdG90YWxUaW1lUGl4ZWxzID0gdG90YWxUaW1lICogcGl4ZWxzX3Blcl9zZWNvbmQ7XG5cdFx0dmFyIGsgPSB3IC8gdG90YWxUaW1lUGl4ZWxzO1xuXHRcdHNjcm9sbGVyLmsgPSBrO1xuXG5cdFx0dmFyIGdyaXBfbGVuZ3RoID0gdyAqIGs7XG5cblx0XHRzY3JvbGxlci5ncmlwX2xlbmd0aCA9IGdyaXBfbGVuZ3RoO1xuXG5cdFx0c2Nyb2xsZXIubGVmdCA9IHNjcm9sbFRpbWUgLyB0b3RhbFRpbWUgKiB3O1xuXHRcdFxuXHRcdHNjcm9sbFJlY3Quc2V0KHNjcm9sbGVyLmxlZnQsIDAsIHNjcm9sbGVyLmdyaXBfbGVuZ3RoLCBoKTtcblx0XHRzY3JvbGxSZWN0LnBhaW50KGN0eCk7XG5cblx0XHR2YXIgciA9IGN1cnJlbnRUaW1lIC8gdG90YWxUaW1lICogdztcdFx0XG5cblx0XHRjdHguZmlsbFN0eWxlID0gIFRoZW1lLmM7XG5cdFx0Y3R4LmxpbmVXaWR0aCA9IDI7XG5cdFx0XG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdFxuXHRcdC8vIGNpcmNsZVxuXHRcdC8vIGN0eC5hcmMociwgaDIgLyAyLCBoMiAvIDEuNSwgMCwgTWF0aC5QSSAqIDIpO1xuXG5cdFx0Ly8gbGluZVxuXHRcdGN0eC5yZWN0KHIsIDAsIDIsIGggKyA1KTtcblx0XHRjdHguZmlsbCgpXG5cblx0XHRjdHguZmlsbFRleHQoY3VycmVudFRpbWUgJiYgY3VycmVudFRpbWUudG9GaXhlZCgyKSwgciwgaCArIDE0KTtcblx0XHQvLyBjdHguZmlsbFRleHQoY3VycmVudFRpbWUgJiYgY3VycmVudFRpbWUudG9GaXhlZCgzKSwgMTAsIDEwKTtcblx0XHRjdHguZmlsbFRleHQodG90YWxUaW1lLCAzMDAsIDE0KTtcblxuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHQvKiogSGFuZGxlcyBkcmFnZ2luZyBmb3Igc2Nyb2xsIGJhciAqKi9cblxuXHR2YXIgZHJhZ2dpbmd4ID0gbnVsbDtcblxuXHR0aGlzLm9uRG93biA9IGZ1bmN0aW9uKGUpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnb25kb3duJywgZSk7XG5cblx0XHRpZiAoc2Nyb2xsUmVjdC5jb250YWlucyhlLm9mZnNldHggLSBNQVJHSU5TLCBlLm9mZnNldHkgLTUpKSB7XG5cdFx0XHRkcmFnZ2luZ3ggPSBzY3JvbGxlci5sZWZ0O1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHR2YXIgdG90YWxUaW1lID0gZGF0YS5nZXQoJ3VpOnRvdGFsVGltZScpLnZhbHVlO1xuXHRcdHZhciBwaXhlbHNfcGVyX3NlY29uZCA9IGRhdGEuZ2V0KCd1aTp0aW1lU2NhbGUnKS52YWx1ZTtcblx0XHR2YXIgdyA9IHdpZHRoIC0gMiAqIE1BUkdJTlM7XG5cblx0XHR2YXIgdCA9IChlLm9mZnNldHggLSBNQVJHSU5TKSAvIHcgKiB0b3RhbFRpbWU7XG5cdFx0Ly8gdCA9IE1hdGgubWF4KDAsIHQpO1xuXG5cdFx0Ly8gZGF0YS5nZXQoJ3VpOmN1cnJlbnRUaW1lJykudmFsdWUgPSB0O1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgndGltZS51cGRhdGUnLCB0KTtcblx0XHRcblx0fTtcblxuXHR0aGlzLm9uTW92ZSA9IGZ1bmN0aW9uIG1vdmUoZSkge1xuXHRcdGlmIChkcmFnZ2luZ3ggIT0gbnVsbCkge1xuXHRcdFx0dmFyIHRvdGFsVGltZSA9IGRhdGEuZ2V0KCd1aTp0b3RhbFRpbWUnKS52YWx1ZTtcblx0XHRcdHZhciB3ID0gd2lkdGggLSAyICogTUFSR0lOUztcblx0XHRcdFxuXHRcdFx0ZGlzcGF0Y2hlci5maXJlKCd1cGRhdGUuc2Nyb2xsVGltZScsIFxuXHRcdFx0XHQoZHJhZ2dpbmd4ICsgZS5keCkgIC8gdyAqIHRvdGFsVGltZSk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vbkRvd24oZSk7XHRcblx0XHR9XG5cdFx0XG5cdH07XG5cblx0dGhpcy5vblVwID0gZnVuY3Rpb24oZSkge1xuXHRcdGRyYWdnaW5neCA9IG51bGw7XG5cdH1cblxuXHQvKioqIEVuZCBoYW5kbGluZyBmb3Igc2Nyb2xsYmFyICoqKi9cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGxDYW52YXM7Il19

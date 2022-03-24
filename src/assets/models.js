const DEVICE_MODELS_WHOLESALE = {
	"ipad" : [
		//0.model name		1.model number						2.glass repair		3.TP repair		4.LCD repair	5.Backdoor
		[`Air 1`,			"A1474, A1475, A1476",				40],
		[`Air 2`,			"A1566, A1567",						60,					80,],
		[`Air 3`,			"A2123, A2152, A2153",				75,					95,],
		[`Air 4`,			"A2072, A2316, A2324, A2325",		120,				145],
		[`Mini 1`,			"A1432, A1454, A1455",				40,						],
		[`Mini 2`,			"A1489, A1490, A1491",				40,						],
		[`Mini 3`,			"A1599, A1600",						40,						],
		[`Mini 4`,			"A1538, A1550",						55,					75],
		[`Mini 5`,			"A2124, A2126, A2133",				60,					80],
		[`Mini 6`,			"A2567, A2568",						80,					100],
		[`11.0 1st Gen`,	"A1934, A1980, A2013",				110,				135],
		[`11.0 2nd Gen`,	"A2068, A2228, A2230",				110,				135],
		[`11.0 3rd Gen`,	"A2377, A2459, A2301, A2460",		135,				160],
		[`12.9 1st Gen`,	"A1584, A1652",						120,				160],
		[`12.9 2nd Gen`,	"A1670, A1671",						180,				230],
		[`12.9 3rd Gen`,	"A1876, A1895, A2014",				120,				145],
		[`12.9 4th Gen`,	"A2069, A2229, A2232",				120,				145],
		[`12.9 5th Gen`,	"A2378, A2461, A2379, A2462",		380,				430],
		[`9.7"`,			"A1673, A1674, A1675",				65,					85],
		[`10.5"`,			"A1701, A1709",						70,					90],
		[`iPad 1`,			"A1219, A1337",						40],
		[`iPad 2`,			"A1395, A1396, A1397",				40],
		[`iPad 3`,			"A1403, A1416, A1430",				40],
		[`iPad 4`,			"A1458, A1459, A1460",				40],
		[`iPad 5`,			"A1822, A1823",						40],
		[`iPad 6`,			"A1893, A1954",						40],
		[`iPad 7`,			"A2197, A2198, A2200",				40],
		[`iPad 8`,			"A2270, A2428, A2429, A2430",		40],
	],
	"iphone" : [
		["13 Pro Max",		"A2484, A2641, A2644, A2645, A2643",180,				,				,				100],
		["13 Mini",			"A2481, A2626, A2628, A2629, A2630",170,					,				,			80],
		["13 Pro",			"A2483, A2636, A2639, A2640, A2638",160,				,				,				90],
		["13",				"A2482, A2631, A2634, A2635, A2633",160,				,				,				90],
		["12 Pro Max",		"A2342, A2410, A2411, A2412",		120,				,				,				75],
		["12 Mini",			"A2176, A2398, A2400, A2399",		100,				,				,				55],
		["12 Pro",			"A2341, A2406, A2407, A2408",		90,					,				,				60],
		["12",				"A2172, A2402, A2404, A2403",		90,					,				,				60],
		["11 Pro Max",		"A2161, A2220, A2218",				85,					105,			,				50],
		["11 Pro",			"A2160, A2217, A2215",				60,					80,				,				45],
		["11",				"A2111, A2221, A2223",				55,					75,				,				45],
		["XS Max",			"A1921, A2101, A2102, A2104",		65,					85,				,				35],
		["XS",				"A1920, A2097, A2098, A2100",		55,					75,				,				35],
		["XR",				"A1984, A2105, A2106, A2107, A2108",50,					70,				,				35],
		["X",				"A1865, A1901, A1902",				55,					75,				,				35],
		["8 plus",			"A1864, A1897, A1898",				,					,				,				35],
		["8",				"A1863, A1905, A1906",				,					,				,				35],
		["7 plus",			"A1661, A1784, A1785",	],
		["7",				"A1660, A1778, A1779",	],
		["6S plus",			"A1634, A1687, A1699",	],
		["6S",				"A1633, A1688, A1700",	],
		["6 Plus",			"A1522, A1524, A1593",	],
		["6",				"A1549, A1586, A1589",	],
	],
	"apple-watch" : [
		["Series 1",		,									35,					40],
		["Series 2",		,									40],
		["Series 3",		,									60],
		["Series 4",		,									75,					95],
		["Series 5",		,									75,					95],
		["Series 6",		,									80,					100],
	],
	"samsung-phone" : [
		["Note 20 Ultra",	"N985, N986",						160],
		["Note 20",			"N980, N981",						130],
		["Note 10 Plus",	"N975, N976",						110],
		["Note 10",			"N970, N971",						90],
		["Note 9",			"N960",								70],
		["Note 8",			"N950",								60],
		["S21 Ultra",		"A1865, A1901, A1902",				160],
		["S21 Plus",		"G996",								130],
		["S21 5G",			"G990, G991",						110],
		["S20 Ultra",		"G988",								130],
		["S20 Plus",		"G985, G986",						130],
		["S20 5G",			"",									120],
		["S20FE",			"G780, G781",						75],
		["S10 Plus",		"G975",								95],
		["S10E",			"G970",								65],
		["S10 5G",			"G977",								95],
		["S10",				"G973",								85],
		["S9 Plus",			"G965",								70],
		["S9",				"G960",								65],
		["S8 Plus",			"G955",								60],
		["S8",				"G950",								50],
		["S7 Edge",			"G935",								50],
		["S7 Active",		"G891A",							50],
		["S7",				"G930",								50],
		["S6 Edge Plus",	"G928",								55],
		["S6 Edge",			"G925",								50],
		["S6 Active",		"G890A",							50],
		["S6",				"G920",								50],
	],
	"samsung-tablet" : [
		[`Tab A 8.0"`,		"SM-T350, SM-T355, SM-T385",		45],
		[`Tab A 10.1"`,		"SM-T580, SM-T510, SM-T585",		50],
		[`Tab Pro 10.1"`,	"T520",								60],
		[`Tab A 10.5"`,		"T590",								45],
		[`Tab S4 10.5"`,	"T830",								140],
		[`Tab S5e 10.5"`,	"T720",								150],
		[`Tab S6 10.5"`,	"T860",								160],
	]
};

const DEVICE_MODELS_RETAIL = {
	"ipad" : [
		//0.model name		1.model number						2.glass repair		3.TP repair		4.LCD repair	5.Backdoor
		[`Air 1`,			"A1474, A1475, A1476",				60],
		[`Air 2`,			"A1566, A1567",						85,					105,],
		[`Air 3`,			"A2123, A2152, A2153",				95,					115,],
		[`Air 4`,			"A2072, A2316, A2324, A2325",		140,				165],
		[`Mini 1`,			"A1432, A1454, A1455",				60,						],
		[`Mini 2`,			"A1489, A1490, A1491",				60,						],
		[`Mini 3`,			"A1599, A1600",						60,						],
		[`Mini 4`,			"A1538, A1550",						80,					100],
		[`Mini 5`,			"A2124, A2126, A2133",				80,					100],
		[`Mini 6`,			"A2567, A2568",						100,				120],
		[`11.0 1st Gen`,	"A1934, A1980, A2013",				130,				155],
		[`11.0 2nd Gen`,	"A2068, A2228, A2230",				130,				155],
		[`11.0 3rd Gen`,	"A2377, A2459, A2301, A2460",		150,				175],
		[`12.9 1st Gen`,	"A1584, A1652",						140,				180],
		[`12.9 2nd Gen`,	"A1670, A1671",						180,				230],
		[`12.9 3rd Gen`,	"A1876, A1895, A2014",				150,				175],
		[`12.9 4th Gen`,	"A2069, A2229, A2232",				150,				175],
		[`12.9 5th Gen`,	"A2378, A2461, A2379, A2462",		380,				430],
		[`9.7"`,			"A1673, A1674, A1675",				90,					110],
		[`10.5"`,			"A1701, A1709",						90,					110],
		[`iPad 1`,			"A1219, A1337",						60],
		[`iPad 2`,			"A1395, A1396, A1397",				60],
		[`iPad 3`,			"A1403, A1416, A1430",				60],
		[`iPad 4`,			"A1458, A1459, A1460",				60],
		[`iPad 5`,			"A1822, A1823",						60],
		[`iPad 6`,			"A1893, A1954",						60],
		[`iPad 7`,			"A2197, A2198, A2200",				60],
		[`iPad 8`,			"A2270, A2428, A2429, A2430",		60],
	],
	"iphone" : [
		["13 Pro Max",		"A2484, A2641, A2644, A2645, A2643",220,				,				,				120],
		["13 Mini",			"A2481, A2626, A2628, A2629, A2630",190,				,				,				95],
		["13 Pro",			"A2483, A2636, A2639, A2640, A2638",180,				,				,				100],
		["13",				"A2482, A2631, A2634, A2635, A2633",180,				,				,				100],
		["12 Pro Max",		"A2342, A2410, A2411, A2412",		150,				,				,				95],
		["12 Mini",			"A2176, A2398, A2400, A2399",		110,				,				,				75],
		["12 Pro",			"A2341, A2406, A2407, A2408",		130,				,				,				80],
		["12",				"A2172, A2402, A2404, A2403",		130,				,				,				80],
		["11 Pro Max",		"A2161, A2220, A2218",				100,				120,			,				75],
		["11 Pro",			"A2160, A2217, A2215",				80,					100,			,				65],
		["11",				"A2111, A2221, A2223",				75,					95,				,				65],
		["XS Max",			"A1921, A2101, A2102, A2104",		85,					105,			,				45],
		["XS",				"A1920, A2097, A2098, A2100",		75,					95,				,				45],
		["XR",				"A1984, A2105, A2106, A2107, A2108",70,					90,				,				45],
		["X",				"A1865, A1901, A1902",				75,					95,				,				45],
		["8 plus",			"A1864, A1897, A1898",				,					,				,				45],
		["8",				"A1863, A1905, A1906",				,					,				,				45],
		["7 plus",			"A1661, A1784, A1785",	],
		["7",				"A1660, A1778, A1779",	],
		["6S plus",			"A1634, A1687, A1699",	],
		["6S",				"A1633, A1688, A1700",	],
		["6 Plus",			"A1522, A1524, A1593",	],
		["6",				"A1549, A1586, A1589",	],
	],
	"apple-watch" : [
		["Series 1",		,									50,					55],
		["Series 2",		,									80],
		["Series 3",		,									80],
		["Series 4",		,									100,				120],
		["Series 5",		,									100,				120],
		["Series 6",		,									100,				120],
	],
	"samsung-phone" : [
		["Note 20 Ultra",	"N985, N986",						180],
		["Note 20",			"N980, N981",						150],
		["Note 10 Plus",	"N975, N976",						130],
		["Note 10",			"N970, N971",						120],
		["Note 9",			"N960",								100],
		["Note 8",			"N950",								100],
		["S21 Ultra",		"A1865, A1901, A1902",				180],
		["S21 Plus",		"G996",								150],
		["S21 5G",			"G990, G991",						130],
		["S20 Ultra",		"G988",								160],
		["S20 Plus",		"G985, G986",						150],
		["S20 5G",			"",									140],
		["S20FE",			"G780, G781",						95],
		["S10 Plus",		"G975",								120],
		["S10E",			"G970",								85],
		["S10 5G",			"G977",								120],
		["S10",				"G973",								100],
		["S9 Plus",			"G965",								90],
		["S9",				"G960",								80],
		["S8 Plus",			"G955",								80],
		["S8",				"G950",								70],
		["S7 Edge",			"G935",								70],
		["S7 Active",		"G891A",							70],
		["S7",				"G930",								70],
		["S6 Edge Plus",	"G928",								70],
		["S6 Edge",			"G925",								70],
		["S6 Active",		"G890A",							70],
		["S6",				"G920",								70],
	],
	"samsung-tablet" : [
		[`Tab A 8.0"`,		"SM-T350, SM-T355, SM-T385",		45],
		[`Tab A 10.1"`,		"SM-T580, SM-T510, SM-T585",		50],
		[`Tab Pro 10.1"`,	"T520",								60],
		[`Tab A 10.5"`,		"T590",								45],
		[`Tab S4 10.5"`,	"T830",								140],
		[`Tab S5e 10.5"`,	"T720",								150],
		[`Tab S6 10.5"`,	"T860",								160],
	]
};



export {
	DEVICE_MODELS_RETAIL,
	DEVICE_MODELS_WHOLESALE
};

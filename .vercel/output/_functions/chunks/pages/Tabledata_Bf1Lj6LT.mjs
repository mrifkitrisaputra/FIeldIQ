/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderHead } from '../astro_CdlJyK4w.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const data = [
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "18/04/2024, 18:54"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "18/04/2024, 18:54"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 18:54"
	},
	{
		device_id: "solarpanel_1",
		value: "27Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 18:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 18:54"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "18/04/2024, 18:49"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "18/04/2024, 18:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 18:49"
	},
	{
		device_id: "solarpanel_1",
		value: "152Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 18:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 18:49"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "18/04/2024, 18:44"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "18/04/2024, 18:44"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 18:44"
	},
	{
		device_id: "solarpanel_1",
		value: "989Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 18:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 18:44"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "18/04/2024, 18:39"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "18/04/2024, 18:39"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 18:39"
	},
	{
		device_id: "solarpanel_1",
		value: "618Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 18:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 18:39"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "18/04/2024, 18:34"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "18/04/2024, 18:34"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "18/04/2024, 18:34"
	},
	{
		device_id: "solarpanel_1",
		value: "559Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 18:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 18:34"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "18/04/2024, 18:29"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "18/04/2024, 18:29"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 18:29"
	},
	{
		device_id: "solarpanel_1",
		value: "572Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 18:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 18:29"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "18/04/2024, 18:24"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "18/04/2024, 18:24"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "18/04/2024, 18:24"
	},
	{
		device_id: "solarpanel_1",
		value: "116Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 18:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 18:24"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "18/04/2024, 18:19"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "18/04/2024, 18:19"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 18:19"
	},
	{
		device_id: "solarpanel_1",
		value: "942Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 18:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 18:19"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "18/04/2024, 18:14"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "18/04/2024, 18:14"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "18/04/2024, 18:14"
	},
	{
		device_id: "solarpanel_1",
		value: "547Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 18:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 18:14"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "18/04/2024, 18:09"
	},
	{
		device_id: "temp_1",
		value: "37°C",
		type: "temperature",
		timestamp: "18/04/2024, 18:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 18:09"
	},
	{
		device_id: "solarpanel_1",
		value: "729Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 18:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 18:09"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "18/04/2024, 18:04"
	},
	{
		device_id: "temp_1",
		value: "76°C",
		type: "temperature",
		timestamp: "18/04/2024, 18:04"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 18:04"
	},
	{
		device_id: "solarpanel_1",
		value: "691Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 18:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 18:04"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "18/04/2024, 17:59"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "18/04/2024, 17:59"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 17:59"
	},
	{
		device_id: "solarpanel_1",
		value: "815Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 17:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 17:59"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "18/04/2024, 17:54"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "18/04/2024, 17:54"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 17:54"
	},
	{
		device_id: "solarpanel_1",
		value: "649Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 17:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 17:54"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "18/04/2024, 17:49"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "18/04/2024, 17:49"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 17:49"
	},
	{
		device_id: "solarpanel_1",
		value: "237Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 17:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 17:49"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "18/04/2024, 17:44"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "18/04/2024, 17:44"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 17:44"
	},
	{
		device_id: "solarpanel_1",
		value: "977Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 17:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 17:44"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "18/04/2024, 17:39"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "18/04/2024, 17:39"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "18/04/2024, 17:39"
	},
	{
		device_id: "solarpanel_1",
		value: "185Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 17:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 17:39"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "18/04/2024, 17:34"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "18/04/2024, 17:34"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 17:34"
	},
	{
		device_id: "solarpanel_1",
		value: "556Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 17:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 17:34"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "18/04/2024, 17:29"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "18/04/2024, 17:29"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 17:29"
	},
	{
		device_id: "solarpanel_1",
		value: "445Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 17:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 17:29"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "18/04/2024, 17:24"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "18/04/2024, 17:24"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 17:24"
	},
	{
		device_id: "solarpanel_1",
		value: "226Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 17:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 17:24"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "18/04/2024, 17:19"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "18/04/2024, 17:19"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 17:19"
	},
	{
		device_id: "solarpanel_1",
		value: "693Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 17:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 17:19"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "18/04/2024, 17:14"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "18/04/2024, 17:14"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 17:14"
	},
	{
		device_id: "solarpanel_1",
		value: "869Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 17:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 17:14"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "18/04/2024, 17:09"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "18/04/2024, 17:09"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "18/04/2024, 17:09"
	},
	{
		device_id: "solarpanel_1",
		value: "89Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 17:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 17:09"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "18/04/2024, 17:04"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "18/04/2024, 17:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 17:04"
	},
	{
		device_id: "solarpanel_1",
		value: "177Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 17:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 17:04"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "18/04/2024, 16:59"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "18/04/2024, 16:59"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 16:59"
	},
	{
		device_id: "solarpanel_1",
		value: "984Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 16:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 16:59"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "18/04/2024, 16:54"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "18/04/2024, 16:54"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 16:54"
	},
	{
		device_id: "solarpanel_1",
		value: "41Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 16:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 16:54"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "18/04/2024, 16:49"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "18/04/2024, 16:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 16:49"
	},
	{
		device_id: "solarpanel_1",
		value: "214Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 16:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 16:49"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "18/04/2024, 16:44"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "18/04/2024, 16:44"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "18/04/2024, 16:44"
	},
	{
		device_id: "solarpanel_1",
		value: "498Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 16:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 16:44"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "18/04/2024, 16:39"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "18/04/2024, 16:39"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 16:39"
	},
	{
		device_id: "solarpanel_1",
		value: "363Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 16:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 16:39"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "18/04/2024, 16:34"
	},
	{
		device_id: "temp_1",
		value: "12°C",
		type: "temperature",
		timestamp: "18/04/2024, 16:34"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 16:34"
	},
	{
		device_id: "solarpanel_1",
		value: "293Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 16:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 16:34"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "18/04/2024, 16:29"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "18/04/2024, 16:29"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 16:29"
	},
	{
		device_id: "solarpanel_1",
		value: "648Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 16:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 16:29"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "18/04/2024, 16:24"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "18/04/2024, 16:24"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 16:24"
	},
	{
		device_id: "solarpanel_1",
		value: "467Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 16:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 16:24"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "18/04/2024, 16:19"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "18/04/2024, 16:19"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "18/04/2024, 16:19"
	},
	{
		device_id: "solarpanel_1",
		value: "719Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 16:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 16:19"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "18/04/2024, 16:14"
	},
	{
		device_id: "temp_1",
		value: "40°C",
		type: "temperature",
		timestamp: "18/04/2024, 16:14"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "18/04/2024, 16:14"
	},
	{
		device_id: "solarpanel_1",
		value: "752Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 16:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 16:14"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "18/04/2024, 16:09"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "18/04/2024, 16:09"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 16:09"
	},
	{
		device_id: "solarpanel_1",
		value: "179Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 16:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 16:09"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "18/04/2024, 16:04"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "18/04/2024, 16:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 16:04"
	},
	{
		device_id: "solarpanel_1",
		value: "767Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 16:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 16:04"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "18/04/2024, 15:59"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "18/04/2024, 15:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "18/04/2024, 15:59"
	},
	{
		device_id: "solarpanel_1",
		value: "280Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 15:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 15:59"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "18/04/2024, 15:54"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "18/04/2024, 15:54"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "18/04/2024, 15:54"
	},
	{
		device_id: "solarpanel_1",
		value: "373Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 15:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 15:54"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "18/04/2024, 15:49"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "18/04/2024, 15:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 15:49"
	},
	{
		device_id: "solarpanel_1",
		value: "121Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 15:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 15:49"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "18/04/2024, 15:44"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "18/04/2024, 15:44"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 15:44"
	},
	{
		device_id: "solarpanel_1",
		value: "817Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 15:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 15:44"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "18/04/2024, 15:39"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "18/04/2024, 15:39"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 15:39"
	},
	{
		device_id: "solarpanel_1",
		value: "801Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 15:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 15:39"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "18/04/2024, 15:34"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "18/04/2024, 15:34"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "18/04/2024, 15:34"
	},
	{
		device_id: "solarpanel_1",
		value: "348Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 15:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 15:34"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "18/04/2024, 15:29"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "18/04/2024, 15:29"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "18/04/2024, 15:29"
	},
	{
		device_id: "solarpanel_1",
		value: "318Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 15:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 15:29"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "18/04/2024, 15:24"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "18/04/2024, 15:24"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 15:24"
	},
	{
		device_id: "solarpanel_1",
		value: "51Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 15:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 15:24"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "18/04/2024, 15:19"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "18/04/2024, 15:19"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 15:19"
	},
	{
		device_id: "solarpanel_1",
		value: "663Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 15:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 15:19"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "18/04/2024, 15:14"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "18/04/2024, 15:14"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 15:14"
	},
	{
		device_id: "solarpanel_1",
		value: "183Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 15:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 15:14"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "18/04/2024, 15:09"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "18/04/2024, 15:09"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "18/04/2024, 15:09"
	},
	{
		device_id: "solarpanel_1",
		value: "286Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 15:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 15:09"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "18/04/2024, 15:04"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "18/04/2024, 15:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 15:04"
	},
	{
		device_id: "solarpanel_1",
		value: "806Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 15:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 15:04"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "18/04/2024, 14:59"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "18/04/2024, 14:59"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 14:59"
	},
	{
		device_id: "solarpanel_1",
		value: "330Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 14:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 14:59"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "18/04/2024, 14:54"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "18/04/2024, 14:54"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 14:54"
	},
	{
		device_id: "solarpanel_1",
		value: "739Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 14:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 14:54"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "18/04/2024, 14:49"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "18/04/2024, 14:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 14:49"
	},
	{
		device_id: "solarpanel_1",
		value: "85Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 14:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 14:49"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "18/04/2024, 14:44"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "18/04/2024, 14:44"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 14:44"
	},
	{
		device_id: "solarpanel_1",
		value: "404Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 14:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 14:44"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "18/04/2024, 14:39"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "18/04/2024, 14:39"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 14:39"
	},
	{
		device_id: "solarpanel_1",
		value: "628Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 14:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 14:39"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "18/04/2024, 14:34"
	},
	{
		device_id: "temp_1",
		value: "26°C",
		type: "temperature",
		timestamp: "18/04/2024, 14:34"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 14:34"
	},
	{
		device_id: "solarpanel_1",
		value: "812Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 14:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 14:34"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "18/04/2024, 14:29"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "18/04/2024, 14:29"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 14:29"
	},
	{
		device_id: "solarpanel_1",
		value: "701Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 14:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 14:29"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "18/04/2024, 14:24"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "18/04/2024, 14:24"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "18/04/2024, 14:24"
	},
	{
		device_id: "solarpanel_1",
		value: "523Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 14:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 14:24"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "18/04/2024, 14:19"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "18/04/2024, 14:19"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "18/04/2024, 14:19"
	},
	{
		device_id: "solarpanel_1",
		value: "201Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 14:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 14:19"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "18/04/2024, 14:14"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "18/04/2024, 14:14"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 14:14"
	},
	{
		device_id: "solarpanel_1",
		value: "823Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 14:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 14:14"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "18/04/2024, 14:09"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "18/04/2024, 14:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 14:09"
	},
	{
		device_id: "solarpanel_1",
		value: "387Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 14:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 14:09"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "18/04/2024, 14:04"
	},
	{
		device_id: "temp_1",
		value: "12°C",
		type: "temperature",
		timestamp: "18/04/2024, 14:04"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 14:04"
	},
	{
		device_id: "solarpanel_1",
		value: "465Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 14:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 14:04"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "18/04/2024, 13:59"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "18/04/2024, 13:59"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 13:59"
	},
	{
		device_id: "solarpanel_1",
		value: "52Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 13:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 13:59"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "18/04/2024, 13:54"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "18/04/2024, 13:54"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 13:54"
	},
	{
		device_id: "solarpanel_1",
		value: "988Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 13:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 13:54"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "18/04/2024, 13:49"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "18/04/2024, 13:49"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 13:49"
	},
	{
		device_id: "solarpanel_1",
		value: "620Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 13:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 13:49"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "18/04/2024, 13:44"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "18/04/2024, 13:44"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 13:44"
	},
	{
		device_id: "solarpanel_1",
		value: "14Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 13:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 13:44"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "18/04/2024, 13:39"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "18/04/2024, 13:39"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "18/04/2024, 13:39"
	},
	{
		device_id: "solarpanel_1",
		value: "177Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 13:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 13:39"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "18/04/2024, 13:34"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "18/04/2024, 13:34"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 13:34"
	},
	{
		device_id: "solarpanel_1",
		value: "650Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 13:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 13:34"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "18/04/2024, 13:29"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "18/04/2024, 13:29"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 13:29"
	},
	{
		device_id: "solarpanel_1",
		value: "962Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 13:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 13:29"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "18/04/2024, 13:24"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "18/04/2024, 13:24"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 13:24"
	},
	{
		device_id: "solarpanel_1",
		value: "68Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 13:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 13:24"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "18/04/2024, 13:19"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "18/04/2024, 13:19"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 13:19"
	},
	{
		device_id: "solarpanel_1",
		value: "893Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 13:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 13:19"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "18/04/2024, 13:14"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "18/04/2024, 13:14"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "18/04/2024, 13:14"
	},
	{
		device_id: "solarpanel_1",
		value: "14Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 13:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 13:14"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "18/04/2024, 13:09"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "18/04/2024, 13:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 13:09"
	},
	{
		device_id: "solarpanel_1",
		value: "548Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 13:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 13:09"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "18/04/2024, 13:04"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "18/04/2024, 13:04"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "18/04/2024, 13:04"
	},
	{
		device_id: "solarpanel_1",
		value: "378Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 13:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 13:04"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "18/04/2024, 12:59"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "18/04/2024, 12:59"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 12:59"
	},
	{
		device_id: "solarpanel_1",
		value: "797Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 12:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 12:59"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "18/04/2024, 12:54"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "18/04/2024, 12:54"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 12:54"
	},
	{
		device_id: "solarpanel_1",
		value: "343Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 12:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 12:54"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "18/04/2024, 12:49"
	},
	{
		device_id: "temp_1",
		value: "93°C",
		type: "temperature",
		timestamp: "18/04/2024, 12:49"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 12:49"
	},
	{
		device_id: "solarpanel_1",
		value: "647Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 12:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 12:49"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "18/04/2024, 12:44"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "18/04/2024, 12:44"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 12:44"
	},
	{
		device_id: "solarpanel_1",
		value: "177Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 12:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 12:44"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "18/04/2024, 12:39"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "18/04/2024, 12:39"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 12:39"
	},
	{
		device_id: "solarpanel_1",
		value: "559Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 12:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 12:39"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "18/04/2024, 12:34"
	},
	{
		device_id: "temp_1",
		value: "2°C",
		type: "temperature",
		timestamp: "18/04/2024, 12:34"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 12:34"
	},
	{
		device_id: "solarpanel_1",
		value: "928Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 12:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 12:34"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "18/04/2024, 12:29"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "18/04/2024, 12:29"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 12:29"
	},
	{
		device_id: "solarpanel_1",
		value: "317Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 12:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 12:29"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "18/04/2024, 12:24"
	},
	{
		device_id: "temp_1",
		value: "8°C",
		type: "temperature",
		timestamp: "18/04/2024, 12:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 12:24"
	},
	{
		device_id: "solarpanel_1",
		value: "539Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 12:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 12:24"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "18/04/2024, 12:19"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "18/04/2024, 12:19"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 12:19"
	},
	{
		device_id: "solarpanel_1",
		value: "246Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 12:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 12:19"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "18/04/2024, 12:14"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "18/04/2024, 12:14"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 12:14"
	},
	{
		device_id: "solarpanel_1",
		value: "532Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 12:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 12:14"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "18/04/2024, 12:09"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "18/04/2024, 12:09"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "18/04/2024, 12:09"
	},
	{
		device_id: "solarpanel_1",
		value: "609Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 12:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 12:09"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "18/04/2024, 12:04"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "18/04/2024, 12:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 12:04"
	},
	{
		device_id: "solarpanel_1",
		value: "795Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 12:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 12:04"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "18/04/2024, 11:59"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "18/04/2024, 11:59"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "18/04/2024, 11:59"
	},
	{
		device_id: "solarpanel_1",
		value: "949Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 11:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 11:59"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "18/04/2024, 11:54"
	},
	{
		device_id: "temp_1",
		value: "31°C",
		type: "temperature",
		timestamp: "18/04/2024, 11:54"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "18/04/2024, 11:54"
	},
	{
		device_id: "solarpanel_1",
		value: "475Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 11:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 11:54"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "18/04/2024, 11:49"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "18/04/2024, 11:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 11:49"
	},
	{
		device_id: "solarpanel_1",
		value: "490Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 11:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 11:49"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "18/04/2024, 11:44"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "18/04/2024, 11:44"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 11:44"
	},
	{
		device_id: "solarpanel_1",
		value: "426Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 11:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 11:44"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "18/04/2024, 11:39"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "18/04/2024, 11:39"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 11:39"
	},
	{
		device_id: "solarpanel_1",
		value: "760Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 11:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 11:39"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "18/04/2024, 11:34"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "18/04/2024, 11:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 11:34"
	},
	{
		device_id: "solarpanel_1",
		value: "995Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 11:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 11:34"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "18/04/2024, 11:29"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "18/04/2024, 11:29"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "18/04/2024, 11:29"
	},
	{
		device_id: "solarpanel_1",
		value: "499Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 11:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 11:29"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "18/04/2024, 11:24"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "18/04/2024, 11:24"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 11:24"
	},
	{
		device_id: "solarpanel_1",
		value: "520Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 11:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 11:24"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "18/04/2024, 11:19"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "18/04/2024, 11:19"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 11:19"
	},
	{
		device_id: "solarpanel_1",
		value: "718Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 11:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 11:19"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "18/04/2024, 11:14"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "18/04/2024, 11:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 11:14"
	},
	{
		device_id: "solarpanel_1",
		value: "41Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 11:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 11:14"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "18/04/2024, 11:09"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "18/04/2024, 11:09"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 11:09"
	},
	{
		device_id: "solarpanel_1",
		value: "368Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 11:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 11:09"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "18/04/2024, 11:04"
	},
	{
		device_id: "temp_1",
		value: "26°C",
		type: "temperature",
		timestamp: "18/04/2024, 11:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 11:04"
	},
	{
		device_id: "solarpanel_1",
		value: "420Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 11:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 11:04"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "18/04/2024, 10:59"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "18/04/2024, 10:59"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 10:59"
	},
	{
		device_id: "solarpanel_1",
		value: "21Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 10:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 10:59"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "18/04/2024, 10:54"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "18/04/2024, 10:54"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 10:54"
	},
	{
		device_id: "solarpanel_1",
		value: "254Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 10:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 10:54"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "18/04/2024, 10:49"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "18/04/2024, 10:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 10:49"
	},
	{
		device_id: "solarpanel_1",
		value: "433Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 10:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 10:49"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "18/04/2024, 10:44"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "18/04/2024, 10:44"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 10:44"
	},
	{
		device_id: "solarpanel_1",
		value: "188Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 10:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 10:44"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "18/04/2024, 10:39"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "18/04/2024, 10:39"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 10:39"
	},
	{
		device_id: "solarpanel_1",
		value: "787Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 10:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 10:39"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "18/04/2024, 10:34"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "18/04/2024, 10:34"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 10:34"
	},
	{
		device_id: "solarpanel_1",
		value: "99Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 10:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 10:34"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "18/04/2024, 10:29"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "18/04/2024, 10:29"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 10:29"
	},
	{
		device_id: "solarpanel_1",
		value: "632Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 10:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 10:29"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "18/04/2024, 10:24"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "18/04/2024, 10:24"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 10:24"
	},
	{
		device_id: "solarpanel_1",
		value: "375Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 10:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 10:24"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "18/04/2024, 10:19"
	},
	{
		device_id: "temp_1",
		value: "26°C",
		type: "temperature",
		timestamp: "18/04/2024, 10:19"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "18/04/2024, 10:19"
	},
	{
		device_id: "solarpanel_1",
		value: "86Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 10:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 10:19"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "18/04/2024, 10:14"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "18/04/2024, 10:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "18/04/2024, 10:14"
	},
	{
		device_id: "solarpanel_1",
		value: "20Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 10:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 10:14"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "18/04/2024, 10:09"
	},
	{
		device_id: "temp_1",
		value: "76°C",
		type: "temperature",
		timestamp: "18/04/2024, 10:09"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 10:09"
	},
	{
		device_id: "solarpanel_1",
		value: "902Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 10:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 10:09"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "18/04/2024, 10:04"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "18/04/2024, 10:04"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 10:04"
	},
	{
		device_id: "solarpanel_1",
		value: "551Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 10:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 10:04"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "18/04/2024, 09:59"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "18/04/2024, 09:59"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "18/04/2024, 09:59"
	},
	{
		device_id: "solarpanel_1",
		value: "20Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 09:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 09:59"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "18/04/2024, 09:54"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "18/04/2024, 09:54"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 09:54"
	},
	{
		device_id: "solarpanel_1",
		value: "713Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 09:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 09:54"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "18/04/2024, 09:49"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "18/04/2024, 09:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 09:49"
	},
	{
		device_id: "solarpanel_1",
		value: "105Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 09:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 09:49"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "18/04/2024, 09:44"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "18/04/2024, 09:44"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 09:44"
	},
	{
		device_id: "solarpanel_1",
		value: "787Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 09:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 09:44"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "18/04/2024, 09:39"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "18/04/2024, 09:39"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 09:39"
	},
	{
		device_id: "solarpanel_1",
		value: "148Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 09:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 09:39"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "18/04/2024, 09:34"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "18/04/2024, 09:34"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 09:34"
	},
	{
		device_id: "solarpanel_1",
		value: "226Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 09:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 09:34"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "18/04/2024, 09:29"
	},
	{
		device_id: "temp_1",
		value: "93°C",
		type: "temperature",
		timestamp: "18/04/2024, 09:29"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "18/04/2024, 09:29"
	},
	{
		device_id: "solarpanel_1",
		value: "873Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 09:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 09:29"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "18/04/2024, 09:24"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "18/04/2024, 09:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 09:24"
	},
	{
		device_id: "solarpanel_1",
		value: "782Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 09:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 09:24"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "18/04/2024, 09:19"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "18/04/2024, 09:19"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 09:19"
	},
	{
		device_id: "solarpanel_1",
		value: "264Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 09:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 09:19"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "18/04/2024, 09:14"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "18/04/2024, 09:14"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 09:14"
	},
	{
		device_id: "solarpanel_1",
		value: "99Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 09:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 09:14"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "18/04/2024, 09:09"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "18/04/2024, 09:09"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 09:09"
	},
	{
		device_id: "solarpanel_1",
		value: "124Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 09:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 09:09"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "18/04/2024, 09:04"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "18/04/2024, 09:04"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 09:04"
	},
	{
		device_id: "solarpanel_1",
		value: "478Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 09:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 09:04"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "18/04/2024, 08:59"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "18/04/2024, 08:59"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 08:59"
	},
	{
		device_id: "solarpanel_1",
		value: "343Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 08:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 08:59"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "18/04/2024, 08:54"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "18/04/2024, 08:54"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 08:54"
	},
	{
		device_id: "solarpanel_1",
		value: "762Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 08:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 08:54"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "18/04/2024, 08:49"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "18/04/2024, 08:49"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 08:49"
	},
	{
		device_id: "solarpanel_1",
		value: "970Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 08:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 08:49"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "18/04/2024, 08:44"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "18/04/2024, 08:44"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 08:44"
	},
	{
		device_id: "solarpanel_1",
		value: "936Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 08:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 08:44"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "18/04/2024, 08:39"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "18/04/2024, 08:39"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 08:39"
	},
	{
		device_id: "solarpanel_1",
		value: "944Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 08:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 08:39"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "18/04/2024, 08:34"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "18/04/2024, 08:34"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 08:34"
	},
	{
		device_id: "solarpanel_1",
		value: "685Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 08:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 08:34"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "18/04/2024, 08:29"
	},
	{
		device_id: "temp_1",
		value: "20°C",
		type: "temperature",
		timestamp: "18/04/2024, 08:29"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 08:29"
	},
	{
		device_id: "solarpanel_1",
		value: "787Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 08:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 08:29"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "18/04/2024, 08:24"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "18/04/2024, 08:24"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 08:24"
	},
	{
		device_id: "solarpanel_1",
		value: "462Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 08:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 08:24"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "18/04/2024, 08:19"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "18/04/2024, 08:19"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "18/04/2024, 08:19"
	},
	{
		device_id: "solarpanel_1",
		value: "595Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 08:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 08:19"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "18/04/2024, 08:14"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "18/04/2024, 08:14"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 08:14"
	},
	{
		device_id: "solarpanel_1",
		value: "617Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 08:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 08:14"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "18/04/2024, 08:09"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "18/04/2024, 08:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 08:09"
	},
	{
		device_id: "solarpanel_1",
		value: "450Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 08:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 08:09"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "18/04/2024, 08:04"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "18/04/2024, 08:04"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "18/04/2024, 08:04"
	},
	{
		device_id: "solarpanel_1",
		value: "433Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 08:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 08:04"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "18/04/2024, 07:59"
	},
	{
		device_id: "temp_1",
		value: "26°C",
		type: "temperature",
		timestamp: "18/04/2024, 07:59"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "18/04/2024, 07:59"
	},
	{
		device_id: "solarpanel_1",
		value: "994Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 07:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 07:59"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "18/04/2024, 07:54"
	},
	{
		device_id: "temp_1",
		value: "25°C",
		type: "temperature",
		timestamp: "18/04/2024, 07:54"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 07:54"
	},
	{
		device_id: "solarpanel_1",
		value: "860Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 07:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 07:54"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "18/04/2024, 07:49"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "18/04/2024, 07:49"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 07:49"
	},
	{
		device_id: "solarpanel_1",
		value: "433Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 07:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 07:49"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "18/04/2024, 07:44"
	},
	{
		device_id: "temp_1",
		value: "2°C",
		type: "temperature",
		timestamp: "18/04/2024, 07:44"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 07:44"
	},
	{
		device_id: "solarpanel_1",
		value: "450Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 07:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 07:44"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "18/04/2024, 07:39"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "18/04/2024, 07:39"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 07:39"
	},
	{
		device_id: "solarpanel_1",
		value: "220Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 07:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 07:39"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "18/04/2024, 07:34"
	},
	{
		device_id: "temp_1",
		value: "76°C",
		type: "temperature",
		timestamp: "18/04/2024, 07:34"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "18/04/2024, 07:34"
	},
	{
		device_id: "solarpanel_1",
		value: "372Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 07:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 07:34"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "18/04/2024, 07:29"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "18/04/2024, 07:29"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 07:29"
	},
	{
		device_id: "solarpanel_1",
		value: "2Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 07:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 07:29"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "18/04/2024, 07:24"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "18/04/2024, 07:24"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 07:24"
	},
	{
		device_id: "solarpanel_1",
		value: "386Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 07:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 07:24"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "18/04/2024, 07:19"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "18/04/2024, 07:19"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 07:19"
	},
	{
		device_id: "solarpanel_1",
		value: "293Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 07:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 07:19"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "18/04/2024, 07:14"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "18/04/2024, 07:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "18/04/2024, 07:14"
	},
	{
		device_id: "solarpanel_1",
		value: "859Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 07:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 07:14"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "18/04/2024, 07:09"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "18/04/2024, 07:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 07:09"
	},
	{
		device_id: "solarpanel_1",
		value: "349Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 07:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 07:09"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "18/04/2024, 07:04"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "18/04/2024, 07:04"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "18/04/2024, 07:04"
	},
	{
		device_id: "solarpanel_1",
		value: "668Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 07:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 07:04"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "18/04/2024, 06:59"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "18/04/2024, 06:59"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 06:59"
	},
	{
		device_id: "solarpanel_1",
		value: "615Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 06:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 06:59"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "18/04/2024, 06:54"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "18/04/2024, 06:54"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "18/04/2024, 06:54"
	},
	{
		device_id: "solarpanel_1",
		value: "585Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 06:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 06:54"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "18/04/2024, 06:49"
	},
	{
		device_id: "temp_1",
		value: "78°C",
		type: "temperature",
		timestamp: "18/04/2024, 06:49"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "18/04/2024, 06:49"
	},
	{
		device_id: "solarpanel_1",
		value: "885Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 06:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 06:49"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "18/04/2024, 06:44"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "18/04/2024, 06:44"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 06:44"
	},
	{
		device_id: "solarpanel_1",
		value: "749Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 06:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 06:44"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "18/04/2024, 06:39"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "18/04/2024, 06:39"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 06:39"
	},
	{
		device_id: "solarpanel_1",
		value: "686Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 06:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 06:39"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "18/04/2024, 06:34"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "18/04/2024, 06:34"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "18/04/2024, 06:34"
	},
	{
		device_id: "solarpanel_1",
		value: "402Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 06:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 06:34"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "18/04/2024, 06:29"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "18/04/2024, 06:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 06:29"
	},
	{
		device_id: "solarpanel_1",
		value: "688Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 06:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 06:29"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "18/04/2024, 06:24"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "18/04/2024, 06:24"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "18/04/2024, 06:24"
	},
	{
		device_id: "solarpanel_1",
		value: "603Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 06:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 06:24"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "18/04/2024, 06:19"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "18/04/2024, 06:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 06:19"
	},
	{
		device_id: "solarpanel_1",
		value: "650Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 06:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 06:19"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "18/04/2024, 06:14"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "18/04/2024, 06:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 06:14"
	},
	{
		device_id: "solarpanel_1",
		value: "715Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 06:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 06:14"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "18/04/2024, 06:09"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "18/04/2024, 06:09"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 06:09"
	},
	{
		device_id: "solarpanel_1",
		value: "464Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 06:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 06:09"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "18/04/2024, 06:04"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "18/04/2024, 06:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 06:04"
	},
	{
		device_id: "solarpanel_1",
		value: "466Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 06:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 06:04"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "18/04/2024, 05:59"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "18/04/2024, 05:59"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 05:59"
	},
	{
		device_id: "solarpanel_1",
		value: "862Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 05:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 05:59"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "18/04/2024, 05:54"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "18/04/2024, 05:54"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "18/04/2024, 05:54"
	},
	{
		device_id: "solarpanel_1",
		value: "459Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 05:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 05:54"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "18/04/2024, 05:49"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "18/04/2024, 05:49"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "18/04/2024, 05:49"
	},
	{
		device_id: "solarpanel_1",
		value: "280Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 05:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 05:49"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "18/04/2024, 05:44"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "18/04/2024, 05:44"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "18/04/2024, 05:44"
	},
	{
		device_id: "solarpanel_1",
		value: "592Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 05:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 05:44"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "18/04/2024, 05:39"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "18/04/2024, 05:39"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "18/04/2024, 05:39"
	},
	{
		device_id: "solarpanel_1",
		value: "998Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 05:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 05:39"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "18/04/2024, 05:34"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "18/04/2024, 05:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 05:34"
	},
	{
		device_id: "solarpanel_1",
		value: "826Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 05:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 05:34"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "18/04/2024, 05:29"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "18/04/2024, 05:29"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "18/04/2024, 05:29"
	},
	{
		device_id: "solarpanel_1",
		value: "120Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 05:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 05:29"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "18/04/2024, 05:24"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "18/04/2024, 05:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 05:24"
	},
	{
		device_id: "solarpanel_1",
		value: "861Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 05:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 05:24"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "18/04/2024, 05:19"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "18/04/2024, 05:19"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 05:19"
	},
	{
		device_id: "solarpanel_1",
		value: "58Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 05:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 05:19"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "18/04/2024, 05:14"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "18/04/2024, 05:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "18/04/2024, 05:14"
	},
	{
		device_id: "solarpanel_1",
		value: "126Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 05:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 05:14"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "18/04/2024, 05:09"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "18/04/2024, 05:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 05:09"
	},
	{
		device_id: "solarpanel_1",
		value: "424Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 05:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 05:09"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "18/04/2024, 05:04"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "18/04/2024, 05:04"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 05:04"
	},
	{
		device_id: "solarpanel_1",
		value: "976Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 05:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 05:04"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "18/04/2024, 04:59"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "18/04/2024, 04:59"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 04:59"
	},
	{
		device_id: "solarpanel_1",
		value: "515Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 04:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 04:59"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "18/04/2024, 04:54"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "18/04/2024, 04:54"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 04:54"
	},
	{
		device_id: "solarpanel_1",
		value: "956Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 04:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 04:54"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "18/04/2024, 04:49"
	},
	{
		device_id: "temp_1",
		value: "90°C",
		type: "temperature",
		timestamp: "18/04/2024, 04:49"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 04:49"
	},
	{
		device_id: "solarpanel_1",
		value: "386Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 04:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 04:49"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "18/04/2024, 04:44"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "18/04/2024, 04:44"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 04:44"
	},
	{
		device_id: "solarpanel_1",
		value: "695Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 04:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 04:44"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "18/04/2024, 04:39"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "18/04/2024, 04:39"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 04:39"
	},
	{
		device_id: "solarpanel_1",
		value: "86Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 04:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 04:39"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "18/04/2024, 04:34"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "18/04/2024, 04:34"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 04:34"
	},
	{
		device_id: "solarpanel_1",
		value: "155Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 04:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 04:34"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "18/04/2024, 04:29"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "18/04/2024, 04:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "18/04/2024, 04:29"
	},
	{
		device_id: "solarpanel_1",
		value: "634Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 04:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 04:29"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "18/04/2024, 04:24"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "18/04/2024, 04:24"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "18/04/2024, 04:24"
	},
	{
		device_id: "solarpanel_1",
		value: "206Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 04:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 04:24"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "18/04/2024, 04:19"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "18/04/2024, 04:19"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 04:19"
	},
	{
		device_id: "solarpanel_1",
		value: "368Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 04:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 04:19"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "18/04/2024, 04:14"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "18/04/2024, 04:14"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "18/04/2024, 04:14"
	},
	{
		device_id: "solarpanel_1",
		value: "961Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 04:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 04:14"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "18/04/2024, 04:09"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "18/04/2024, 04:09"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 04:09"
	},
	{
		device_id: "solarpanel_1",
		value: "917Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 04:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 04:09"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "18/04/2024, 04:04"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "18/04/2024, 04:04"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 04:04"
	},
	{
		device_id: "solarpanel_1",
		value: "209Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 04:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 04:04"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "18/04/2024, 03:59"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "18/04/2024, 03:59"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "18/04/2024, 03:59"
	},
	{
		device_id: "solarpanel_1",
		value: "333Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 03:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 03:59"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "18/04/2024, 03:54"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "18/04/2024, 03:54"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 03:54"
	},
	{
		device_id: "solarpanel_1",
		value: "935Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 03:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 03:54"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "18/04/2024, 03:49"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "18/04/2024, 03:49"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 03:49"
	},
	{
		device_id: "solarpanel_1",
		value: "372Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 03:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 03:49"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "18/04/2024, 03:44"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "18/04/2024, 03:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 03:44"
	},
	{
		device_id: "solarpanel_1",
		value: "985Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 03:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 03:44"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "18/04/2024, 03:39"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "18/04/2024, 03:39"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 03:39"
	},
	{
		device_id: "solarpanel_1",
		value: "926Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 03:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 03:39"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "18/04/2024, 03:34"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "18/04/2024, 03:34"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 03:34"
	},
	{
		device_id: "solarpanel_1",
		value: "319Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 03:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 03:34"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "18/04/2024, 03:29"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "18/04/2024, 03:29"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 03:29"
	},
	{
		device_id: "solarpanel_1",
		value: "998Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 03:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 03:29"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "18/04/2024, 03:24"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "18/04/2024, 03:24"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 03:24"
	},
	{
		device_id: "solarpanel_1",
		value: "974Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 03:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 03:24"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "18/04/2024, 03:19"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "18/04/2024, 03:19"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "18/04/2024, 03:19"
	},
	{
		device_id: "solarpanel_1",
		value: "521Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 03:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 03:19"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "18/04/2024, 03:14"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "18/04/2024, 03:14"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "18/04/2024, 03:14"
	},
	{
		device_id: "solarpanel_1",
		value: "601Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 03:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 03:14"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "18/04/2024, 03:09"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "18/04/2024, 03:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 03:09"
	},
	{
		device_id: "solarpanel_1",
		value: "765Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 03:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 03:09"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "18/04/2024, 03:04"
	},
	{
		device_id: "temp_1",
		value: "53°C",
		type: "temperature",
		timestamp: "18/04/2024, 03:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 03:04"
	},
	{
		device_id: "solarpanel_1",
		value: "176Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 03:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 03:04"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "18/04/2024, 02:59"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "18/04/2024, 02:59"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 02:59"
	},
	{
		device_id: "solarpanel_1",
		value: "933Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 02:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 02:59"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "18/04/2024, 02:54"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "18/04/2024, 02:54"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 02:54"
	},
	{
		device_id: "solarpanel_1",
		value: "461Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 02:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 02:54"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "18/04/2024, 02:49"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "18/04/2024, 02:49"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 02:49"
	},
	{
		device_id: "solarpanel_1",
		value: "31Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 02:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 02:49"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "18/04/2024, 02:44"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "18/04/2024, 02:44"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 02:44"
	},
	{
		device_id: "solarpanel_1",
		value: "599Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 02:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 02:44"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "18/04/2024, 02:39"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "18/04/2024, 02:39"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 02:39"
	},
	{
		device_id: "solarpanel_1",
		value: "720Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 02:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 02:39"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "18/04/2024, 02:34"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "18/04/2024, 02:34"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 02:34"
	},
	{
		device_id: "solarpanel_1",
		value: "888Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 02:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 02:34"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "18/04/2024, 02:29"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "18/04/2024, 02:29"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 02:29"
	},
	{
		device_id: "solarpanel_1",
		value: "855Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 02:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 02:29"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "18/04/2024, 02:24"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "18/04/2024, 02:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 02:24"
	},
	{
		device_id: "solarpanel_1",
		value: "532Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 02:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 02:24"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "18/04/2024, 02:19"
	},
	{
		device_id: "temp_1",
		value: "78°C",
		type: "temperature",
		timestamp: "18/04/2024, 02:19"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 02:19"
	},
	{
		device_id: "solarpanel_1",
		value: "897Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 02:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 02:19"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "18/04/2024, 02:14"
	},
	{
		device_id: "temp_1",
		value: "20°C",
		type: "temperature",
		timestamp: "18/04/2024, 02:14"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 02:14"
	},
	{
		device_id: "solarpanel_1",
		value: "495Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 02:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 02:14"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "18/04/2024, 02:09"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "18/04/2024, 02:09"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "18/04/2024, 02:09"
	},
	{
		device_id: "solarpanel_1",
		value: "587Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 02:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 02:09"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "18/04/2024, 02:04"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "18/04/2024, 02:04"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 02:04"
	},
	{
		device_id: "solarpanel_1",
		value: "438Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 02:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 02:04"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "18/04/2024, 01:59"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "18/04/2024, 01:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 01:59"
	},
	{
		device_id: "solarpanel_1",
		value: "774Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 01:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 01:59"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "18/04/2024, 01:54"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "18/04/2024, 01:54"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "18/04/2024, 01:54"
	},
	{
		device_id: "solarpanel_1",
		value: "585Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 01:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 01:54"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "18/04/2024, 01:49"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "18/04/2024, 01:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "18/04/2024, 01:49"
	},
	{
		device_id: "solarpanel_1",
		value: "571Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 01:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 01:49"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "18/04/2024, 01:44"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "18/04/2024, 01:44"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 01:44"
	},
	{
		device_id: "solarpanel_1",
		value: "991Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 01:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 01:44"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "18/04/2024, 01:39"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "18/04/2024, 01:39"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 01:39"
	},
	{
		device_id: "solarpanel_1",
		value: "507Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 01:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 01:39"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "18/04/2024, 01:34"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "18/04/2024, 01:34"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 01:34"
	},
	{
		device_id: "solarpanel_1",
		value: "295Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 01:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 01:34"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "18/04/2024, 01:29"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "18/04/2024, 01:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 01:29"
	},
	{
		device_id: "solarpanel_1",
		value: "635Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 01:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 01:29"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "18/04/2024, 01:24"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "18/04/2024, 01:24"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 01:24"
	},
	{
		device_id: "solarpanel_1",
		value: "343Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 01:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 01:24"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "18/04/2024, 01:19"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "18/04/2024, 01:19"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "18/04/2024, 01:19"
	},
	{
		device_id: "solarpanel_1",
		value: "923Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 01:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 01:19"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "18/04/2024, 01:14"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "18/04/2024, 01:14"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "18/04/2024, 01:14"
	},
	{
		device_id: "solarpanel_1",
		value: "874Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 01:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 01:14"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "18/04/2024, 01:09"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "18/04/2024, 01:09"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 01:09"
	},
	{
		device_id: "solarpanel_1",
		value: "966Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 01:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 01:09"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "18/04/2024, 01:04"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "18/04/2024, 01:04"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 01:04"
	},
	{
		device_id: "solarpanel_1",
		value: "721Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 01:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 01:04"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "18/04/2024, 00:59"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "18/04/2024, 00:59"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "18/04/2024, 00:59"
	},
	{
		device_id: "solarpanel_1",
		value: "87Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 00:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 00:59"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "18/04/2024, 00:54"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "18/04/2024, 00:54"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 00:54"
	},
	{
		device_id: "solarpanel_1",
		value: "210Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 00:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 00:54"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "18/04/2024, 00:49"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "18/04/2024, 00:49"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "18/04/2024, 00:49"
	},
	{
		device_id: "solarpanel_1",
		value: "702Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 00:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 00:49"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "18/04/2024, 00:44"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "18/04/2024, 00:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "18/04/2024, 00:44"
	},
	{
		device_id: "solarpanel_1",
		value: "115Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 00:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 00:44"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "18/04/2024, 00:39"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "18/04/2024, 00:39"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 00:39"
	},
	{
		device_id: "solarpanel_1",
		value: "174Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 00:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 00:39"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "18/04/2024, 00:34"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "18/04/2024, 00:34"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 00:34"
	},
	{
		device_id: "solarpanel_1",
		value: "396Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 00:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 00:34"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "18/04/2024, 00:29"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "18/04/2024, 00:29"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 00:29"
	},
	{
		device_id: "solarpanel_1",
		value: "181Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 00:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 00:29"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "18/04/2024, 00:24"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "18/04/2024, 00:24"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "18/04/2024, 00:24"
	},
	{
		device_id: "solarpanel_1",
		value: "649Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 00:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 00:24"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "18/04/2024, 00:19"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "18/04/2024, 00:19"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "18/04/2024, 00:19"
	},
	{
		device_id: "solarpanel_1",
		value: "206Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 00:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 00:19"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "18/04/2024, 00:14"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "18/04/2024, 00:14"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "18/04/2024, 00:14"
	},
	{
		device_id: "solarpanel_1",
		value: "458Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 00:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "18/04/2024, 00:14"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "18/04/2024, 00:09"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "18/04/2024, 00:09"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "18/04/2024, 00:09"
	},
	{
		device_id: "solarpanel_1",
		value: "109Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 00:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 00:09"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "18/04/2024, 00:04"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "18/04/2024, 00:04"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "18/04/2024, 00:04"
	},
	{
		device_id: "solarpanel_1",
		value: "991Lux",
		type: "Sun Intensity",
		timestamp: "18/04/2024, 00:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "18/04/2024, 00:04"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "17/04/2024, 23:59"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "17/04/2024, 23:59"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "17/04/2024, 23:59"
	},
	{
		device_id: "solarpanel_1",
		value: "444Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 23:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 23:59"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "17/04/2024, 23:54"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "17/04/2024, 23:54"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "17/04/2024, 23:54"
	},
	{
		device_id: "solarpanel_1",
		value: "931Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 23:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 23:54"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "17/04/2024, 23:49"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "17/04/2024, 23:49"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "17/04/2024, 23:49"
	},
	{
		device_id: "solarpanel_1",
		value: "350Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 23:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 23:49"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "17/04/2024, 23:44"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "17/04/2024, 23:44"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "17/04/2024, 23:44"
	},
	{
		device_id: "solarpanel_1",
		value: "202Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 23:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 23:44"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "17/04/2024, 23:39"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "17/04/2024, 23:39"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "17/04/2024, 23:39"
	},
	{
		device_id: "solarpanel_1",
		value: "241Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 23:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 23:39"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "17/04/2024, 23:34"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "17/04/2024, 23:34"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "17/04/2024, 23:34"
	},
	{
		device_id: "solarpanel_1",
		value: "858Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 23:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 23:34"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "17/04/2024, 23:29"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "17/04/2024, 23:29"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "17/04/2024, 23:29"
	},
	{
		device_id: "solarpanel_1",
		value: "770Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 23:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 23:29"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "17/04/2024, 23:24"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "17/04/2024, 23:24"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "17/04/2024, 23:24"
	},
	{
		device_id: "solarpanel_1",
		value: "754Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 23:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 23:24"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "17/04/2024, 23:19"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "17/04/2024, 23:19"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "17/04/2024, 23:19"
	},
	{
		device_id: "solarpanel_1",
		value: "842Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 23:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 23:19"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "17/04/2024, 23:14"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "17/04/2024, 23:14"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "17/04/2024, 23:14"
	},
	{
		device_id: "solarpanel_1",
		value: "373Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 23:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 23:14"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "17/04/2024, 23:09"
	},
	{
		device_id: "temp_1",
		value: "90°C",
		type: "temperature",
		timestamp: "17/04/2024, 23:09"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "17/04/2024, 23:09"
	},
	{
		device_id: "solarpanel_1",
		value: "688Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 23:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 23:09"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "17/04/2024, 23:04"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "17/04/2024, 23:04"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "17/04/2024, 23:04"
	},
	{
		device_id: "solarpanel_1",
		value: "871Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 23:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 23:04"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "17/04/2024, 22:59"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "17/04/2024, 22:59"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "17/04/2024, 22:59"
	},
	{
		device_id: "solarpanel_1",
		value: "115Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 22:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 22:59"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "17/04/2024, 22:54"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "17/04/2024, 22:54"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "17/04/2024, 22:54"
	},
	{
		device_id: "solarpanel_1",
		value: "647Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 22:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 22:54"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "17/04/2024, 22:49"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "17/04/2024, 22:49"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "17/04/2024, 22:49"
	},
	{
		device_id: "solarpanel_1",
		value: "144Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 22:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 22:49"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "17/04/2024, 22:44"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "17/04/2024, 22:44"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "17/04/2024, 22:44"
	},
	{
		device_id: "solarpanel_1",
		value: "48Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 22:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 22:44"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "17/04/2024, 22:39"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "17/04/2024, 22:39"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "17/04/2024, 22:39"
	},
	{
		device_id: "solarpanel_1",
		value: "871Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 22:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 22:39"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "17/04/2024, 22:34"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "17/04/2024, 22:34"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "17/04/2024, 22:34"
	},
	{
		device_id: "solarpanel_1",
		value: "517Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 22:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 22:34"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "17/04/2024, 22:29"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "17/04/2024, 22:29"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "17/04/2024, 22:29"
	},
	{
		device_id: "solarpanel_1",
		value: "60Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 22:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 22:29"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "17/04/2024, 22:24"
	},
	{
		device_id: "temp_1",
		value: "78°C",
		type: "temperature",
		timestamp: "17/04/2024, 22:24"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "17/04/2024, 22:24"
	},
	{
		device_id: "solarpanel_1",
		value: "448Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 22:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 22:24"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "17/04/2024, 22:19"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "17/04/2024, 22:19"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "17/04/2024, 22:19"
	},
	{
		device_id: "solarpanel_1",
		value: "222Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 22:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 22:19"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "17/04/2024, 22:14"
	},
	{
		device_id: "temp_1",
		value: "10°C",
		type: "temperature",
		timestamp: "17/04/2024, 22:14"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "17/04/2024, 22:14"
	},
	{
		device_id: "solarpanel_1",
		value: "946Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 22:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 22:14"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "17/04/2024, 22:09"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "17/04/2024, 22:09"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "17/04/2024, 22:09"
	},
	{
		device_id: "solarpanel_1",
		value: "114Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 22:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 22:09"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "17/04/2024, 22:04"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "17/04/2024, 22:04"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "17/04/2024, 22:04"
	},
	{
		device_id: "solarpanel_1",
		value: "216Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 22:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 22:04"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "17/04/2024, 21:59"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "17/04/2024, 21:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "17/04/2024, 21:59"
	},
	{
		device_id: "solarpanel_1",
		value: "760Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 21:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 21:59"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "17/04/2024, 21:54"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "17/04/2024, 21:54"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "17/04/2024, 21:54"
	},
	{
		device_id: "solarpanel_1",
		value: "418Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 21:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 21:54"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "17/04/2024, 21:49"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "17/04/2024, 21:49"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "17/04/2024, 21:49"
	},
	{
		device_id: "solarpanel_1",
		value: "984Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 21:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 21:49"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "17/04/2024, 21:44"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "17/04/2024, 21:44"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "17/04/2024, 21:44"
	},
	{
		device_id: "solarpanel_1",
		value: "385Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 21:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 21:44"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "17/04/2024, 21:39"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "17/04/2024, 21:39"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "17/04/2024, 21:39"
	},
	{
		device_id: "solarpanel_1",
		value: "42Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 21:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 21:39"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "17/04/2024, 21:34"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "17/04/2024, 21:34"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "17/04/2024, 21:34"
	},
	{
		device_id: "solarpanel_1",
		value: "896Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 21:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 21:34"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "17/04/2024, 21:29"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "17/04/2024, 21:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "17/04/2024, 21:29"
	},
	{
		device_id: "solarpanel_1",
		value: "383Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 21:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 21:29"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "17/04/2024, 21:24"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "17/04/2024, 21:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "17/04/2024, 21:24"
	},
	{
		device_id: "solarpanel_1",
		value: "147Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 21:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 21:24"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "17/04/2024, 21:19"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "17/04/2024, 21:19"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "17/04/2024, 21:19"
	},
	{
		device_id: "solarpanel_1",
		value: "125Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 21:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 21:19"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "17/04/2024, 21:14"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "17/04/2024, 21:14"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "17/04/2024, 21:14"
	},
	{
		device_id: "solarpanel_1",
		value: "249Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 21:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 21:14"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "17/04/2024, 21:09"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "17/04/2024, 21:09"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "17/04/2024, 21:09"
	},
	{
		device_id: "solarpanel_1",
		value: "424Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 21:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 21:09"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "17/04/2024, 21:04"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "17/04/2024, 21:04"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "17/04/2024, 21:04"
	},
	{
		device_id: "solarpanel_1",
		value: "882Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 21:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 21:04"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "17/04/2024, 20:59"
	},
	{
		device_id: "temp_1",
		value: "37°C",
		type: "temperature",
		timestamp: "17/04/2024, 20:59"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "17/04/2024, 20:59"
	},
	{
		device_id: "solarpanel_1",
		value: "34Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 20:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 20:59"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "17/04/2024, 20:54"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "17/04/2024, 20:54"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "17/04/2024, 20:54"
	},
	{
		device_id: "solarpanel_1",
		value: "523Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 20:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 20:54"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "17/04/2024, 20:49"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "17/04/2024, 20:49"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "17/04/2024, 20:49"
	},
	{
		device_id: "solarpanel_1",
		value: "875Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 20:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 20:49"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "17/04/2024, 20:44"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "17/04/2024, 20:44"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "17/04/2024, 20:44"
	},
	{
		device_id: "solarpanel_1",
		value: "830Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 20:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 20:44"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "17/04/2024, 20:39"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "17/04/2024, 20:39"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "17/04/2024, 20:39"
	},
	{
		device_id: "solarpanel_1",
		value: "52Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 20:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 20:39"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "17/04/2024, 20:34"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "17/04/2024, 20:34"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "17/04/2024, 20:34"
	},
	{
		device_id: "solarpanel_1",
		value: "940Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 20:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 20:34"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "17/04/2024, 20:29"
	},
	{
		device_id: "temp_1",
		value: "12°C",
		type: "temperature",
		timestamp: "17/04/2024, 20:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "17/04/2024, 20:29"
	},
	{
		device_id: "solarpanel_1",
		value: "812Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 20:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 20:29"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "17/04/2024, 20:24"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "17/04/2024, 20:24"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "17/04/2024, 20:24"
	},
	{
		device_id: "solarpanel_1",
		value: "8Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 20:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 20:24"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "17/04/2024, 20:19"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "17/04/2024, 20:19"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "17/04/2024, 20:19"
	},
	{
		device_id: "solarpanel_1",
		value: "418Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 20:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 20:19"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "17/04/2024, 20:14"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "17/04/2024, 20:14"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "17/04/2024, 20:14"
	},
	{
		device_id: "solarpanel_1",
		value: "718Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 20:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 20:14"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "17/04/2024, 20:09"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "17/04/2024, 20:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "17/04/2024, 20:09"
	},
	{
		device_id: "solarpanel_1",
		value: "124Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 20:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 20:09"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "17/04/2024, 20:04"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "17/04/2024, 20:04"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "17/04/2024, 20:04"
	},
	{
		device_id: "solarpanel_1",
		value: "472Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 20:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 20:04"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "17/04/2024, 19:59"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "17/04/2024, 19:59"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "17/04/2024, 19:59"
	},
	{
		device_id: "solarpanel_1",
		value: "203Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 19:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 19:59"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "17/04/2024, 19:54"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "17/04/2024, 19:54"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "17/04/2024, 19:54"
	},
	{
		device_id: "solarpanel_1",
		value: "903Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 19:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 19:54"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "17/04/2024, 19:49"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "17/04/2024, 19:49"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "17/04/2024, 19:49"
	},
	{
		device_id: "solarpanel_1",
		value: "138Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 19:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 19:49"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "17/04/2024, 19:44"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "17/04/2024, 19:44"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "17/04/2024, 19:44"
	},
	{
		device_id: "solarpanel_1",
		value: "739Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 19:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 19:44"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "17/04/2024, 19:39"
	},
	{
		device_id: "temp_1",
		value: "16°C",
		type: "temperature",
		timestamp: "17/04/2024, 19:39"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "17/04/2024, 19:39"
	},
	{
		device_id: "solarpanel_1",
		value: "817Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 19:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 19:39"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "17/04/2024, 19:34"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "17/04/2024, 19:34"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "17/04/2024, 19:34"
	},
	{
		device_id: "solarpanel_1",
		value: "972Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 19:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 19:34"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "17/04/2024, 19:29"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "17/04/2024, 19:29"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "17/04/2024, 19:29"
	},
	{
		device_id: "solarpanel_1",
		value: "542Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 19:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 19:29"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "17/04/2024, 19:24"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "17/04/2024, 19:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "17/04/2024, 19:24"
	},
	{
		device_id: "solarpanel_1",
		value: "162Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 19:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 19:24"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "17/04/2024, 19:19"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "17/04/2024, 19:19"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "17/04/2024, 19:19"
	},
	{
		device_id: "solarpanel_1",
		value: "256Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 19:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 19:19"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "17/04/2024, 19:14"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "17/04/2024, 19:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "17/04/2024, 19:14"
	},
	{
		device_id: "solarpanel_1",
		value: "267Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 19:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 19:14"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "17/04/2024, 19:09"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "17/04/2024, 19:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "17/04/2024, 19:09"
	},
	{
		device_id: "solarpanel_1",
		value: "849Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 19:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 19:09"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "17/04/2024, 19:04"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "17/04/2024, 19:04"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "17/04/2024, 19:04"
	},
	{
		device_id: "solarpanel_1",
		value: "464Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 19:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "17/04/2024, 19:04"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "17/04/2024, 18:59"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "17/04/2024, 18:59"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "17/04/2024, 18:59"
	},
	{
		device_id: "solarpanel_1",
		value: "210Lux",
		type: "Sun Intensity",
		timestamp: "17/04/2024, 18:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "17/04/2024, 18:59"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "16/04/2024, 18:54"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "16/04/2024, 18:54"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "16/04/2024, 18:54"
	},
	{
		device_id: "solarpanel_1",
		value: "126Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 18:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 18:54"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "16/04/2024, 18:49"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "16/04/2024, 18:49"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "16/04/2024, 18:49"
	},
	{
		device_id: "solarpanel_1",
		value: "578Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 18:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 18:49"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "16/04/2024, 18:44"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "16/04/2024, 18:44"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 18:44"
	},
	{
		device_id: "solarpanel_1",
		value: "429Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 18:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 18:44"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "16/04/2024, 18:39"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "16/04/2024, 18:39"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 18:39"
	},
	{
		device_id: "solarpanel_1",
		value: "139Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 18:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 18:39"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "16/04/2024, 18:34"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "16/04/2024, 18:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "16/04/2024, 18:34"
	},
	{
		device_id: "solarpanel_1",
		value: "240Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 18:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 18:34"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "16/04/2024, 18:29"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "16/04/2024, 18:29"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 18:29"
	},
	{
		device_id: "solarpanel_1",
		value: "894Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 18:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 18:29"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "16/04/2024, 18:24"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "16/04/2024, 18:24"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "16/04/2024, 18:24"
	},
	{
		device_id: "solarpanel_1",
		value: "179Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 18:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 18:24"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "16/04/2024, 18:19"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "16/04/2024, 18:19"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "16/04/2024, 18:19"
	},
	{
		device_id: "solarpanel_1",
		value: "785Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 18:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 18:19"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "16/04/2024, 18:14"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "16/04/2024, 18:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "16/04/2024, 18:14"
	},
	{
		device_id: "solarpanel_1",
		value: "897Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 18:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 18:14"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "16/04/2024, 18:09"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "16/04/2024, 18:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 18:09"
	},
	{
		device_id: "solarpanel_1",
		value: "280Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 18:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 18:09"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "16/04/2024, 18:04"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "16/04/2024, 18:04"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "16/04/2024, 18:04"
	},
	{
		device_id: "solarpanel_1",
		value: "759Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 18:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 18:04"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "16/04/2024, 17:59"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "16/04/2024, 17:59"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 17:59"
	},
	{
		device_id: "solarpanel_1",
		value: "831Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 17:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 17:59"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "16/04/2024, 17:54"
	},
	{
		device_id: "temp_1",
		value: "12°C",
		type: "temperature",
		timestamp: "16/04/2024, 17:54"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "16/04/2024, 17:54"
	},
	{
		device_id: "solarpanel_1",
		value: "481Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 17:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 17:54"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "16/04/2024, 17:49"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "16/04/2024, 17:49"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 17:49"
	},
	{
		device_id: "solarpanel_1",
		value: "604Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 17:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 17:49"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "16/04/2024, 17:44"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "16/04/2024, 17:44"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "16/04/2024, 17:44"
	},
	{
		device_id: "solarpanel_1",
		value: "935Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 17:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 17:44"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "16/04/2024, 17:39"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "16/04/2024, 17:39"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "16/04/2024, 17:39"
	},
	{
		device_id: "solarpanel_1",
		value: "207Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 17:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 17:39"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "16/04/2024, 17:34"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "16/04/2024, 17:34"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 17:34"
	},
	{
		device_id: "solarpanel_1",
		value: "484Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 17:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 17:34"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "16/04/2024, 17:29"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "16/04/2024, 17:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 17:29"
	},
	{
		device_id: "solarpanel_1",
		value: "820Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 17:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 17:29"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "16/04/2024, 17:24"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "16/04/2024, 17:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 17:24"
	},
	{
		device_id: "solarpanel_1",
		value: "489Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 17:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 17:24"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "16/04/2024, 17:19"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "16/04/2024, 17:19"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 17:19"
	},
	{
		device_id: "solarpanel_1",
		value: "976Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 17:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 17:19"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "16/04/2024, 17:14"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "16/04/2024, 17:14"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "16/04/2024, 17:14"
	},
	{
		device_id: "solarpanel_1",
		value: "158Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 17:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 17:14"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "16/04/2024, 17:09"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "16/04/2024, 17:09"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 17:09"
	},
	{
		device_id: "solarpanel_1",
		value: "768Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 17:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 17:09"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "16/04/2024, 17:04"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "16/04/2024, 17:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 17:04"
	},
	{
		device_id: "solarpanel_1",
		value: "431Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 17:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 17:04"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "16/04/2024, 16:59"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "16/04/2024, 16:59"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 16:59"
	},
	{
		device_id: "solarpanel_1",
		value: "312Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 16:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 16:59"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "16/04/2024, 16:54"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "16/04/2024, 16:54"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 16:54"
	},
	{
		device_id: "solarpanel_1",
		value: "382Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 16:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 16:54"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "16/04/2024, 16:49"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "16/04/2024, 16:49"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 16:49"
	},
	{
		device_id: "solarpanel_1",
		value: "114Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 16:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 16:49"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "16/04/2024, 16:44"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "16/04/2024, 16:44"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 16:44"
	},
	{
		device_id: "solarpanel_1",
		value: "733Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 16:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 16:44"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "16/04/2024, 16:39"
	},
	{
		device_id: "temp_1",
		value: "28°C",
		type: "temperature",
		timestamp: "16/04/2024, 16:39"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "16/04/2024, 16:39"
	},
	{
		device_id: "solarpanel_1",
		value: "673Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 16:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 16:39"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "16/04/2024, 16:34"
	},
	{
		device_id: "temp_1",
		value: "12°C",
		type: "temperature",
		timestamp: "16/04/2024, 16:34"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 16:34"
	},
	{
		device_id: "solarpanel_1",
		value: "465Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 16:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 16:34"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "16/04/2024, 16:29"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "16/04/2024, 16:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 16:29"
	},
	{
		device_id: "solarpanel_1",
		value: "475Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 16:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 16:29"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "16/04/2024, 16:24"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "16/04/2024, 16:24"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 16:24"
	},
	{
		device_id: "solarpanel_1",
		value: "754Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 16:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 16:24"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "16/04/2024, 16:19"
	},
	{
		device_id: "temp_1",
		value: "16°C",
		type: "temperature",
		timestamp: "16/04/2024, 16:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 16:19"
	},
	{
		device_id: "solarpanel_1",
		value: "523Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 16:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 16:19"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "16/04/2024, 16:14"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "16/04/2024, 16:14"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "16/04/2024, 16:14"
	},
	{
		device_id: "solarpanel_1",
		value: "600Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 16:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 16:14"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "16/04/2024, 16:09"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "16/04/2024, 16:09"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 16:09"
	},
	{
		device_id: "solarpanel_1",
		value: "404Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 16:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 16:09"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "16/04/2024, 16:04"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "16/04/2024, 16:04"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 16:04"
	},
	{
		device_id: "solarpanel_1",
		value: "403Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 16:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 16:04"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "16/04/2024, 15:59"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "16/04/2024, 15:59"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "16/04/2024, 15:59"
	},
	{
		device_id: "solarpanel_1",
		value: "163Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 15:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 15:59"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "16/04/2024, 15:54"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "16/04/2024, 15:54"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 15:54"
	},
	{
		device_id: "solarpanel_1",
		value: "133Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 15:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 15:54"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "16/04/2024, 15:49"
	},
	{
		device_id: "temp_1",
		value: "2°C",
		type: "temperature",
		timestamp: "16/04/2024, 15:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "16/04/2024, 15:49"
	},
	{
		device_id: "solarpanel_1",
		value: "84Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 15:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 15:49"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "16/04/2024, 15:44"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "16/04/2024, 15:44"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "16/04/2024, 15:44"
	},
	{
		device_id: "solarpanel_1",
		value: "305Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 15:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 15:44"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "16/04/2024, 15:39"
	},
	{
		device_id: "temp_1",
		value: "2°C",
		type: "temperature",
		timestamp: "16/04/2024, 15:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 15:39"
	},
	{
		device_id: "solarpanel_1",
		value: "412Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 15:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 15:39"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "16/04/2024, 15:34"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "16/04/2024, 15:34"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 15:34"
	},
	{
		device_id: "solarpanel_1",
		value: "420Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 15:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 15:34"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "16/04/2024, 15:29"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "16/04/2024, 15:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 15:29"
	},
	{
		device_id: "solarpanel_1",
		value: "815Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 15:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 15:29"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "16/04/2024, 15:24"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "16/04/2024, 15:24"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "16/04/2024, 15:24"
	},
	{
		device_id: "solarpanel_1",
		value: "440Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 15:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 15:24"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "16/04/2024, 15:19"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "16/04/2024, 15:19"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 15:19"
	},
	{
		device_id: "solarpanel_1",
		value: "962Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 15:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 15:19"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "16/04/2024, 15:14"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "16/04/2024, 15:14"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 15:14"
	},
	{
		device_id: "solarpanel_1",
		value: "801Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 15:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 15:14"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "16/04/2024, 15:09"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "16/04/2024, 15:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 15:09"
	},
	{
		device_id: "solarpanel_1",
		value: "897Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 15:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 15:09"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "16/04/2024, 15:04"
	},
	{
		device_id: "temp_1",
		value: "76°C",
		type: "temperature",
		timestamp: "16/04/2024, 15:04"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 15:04"
	},
	{
		device_id: "solarpanel_1",
		value: "434Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 15:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 15:04"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "16/04/2024, 14:59"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "16/04/2024, 14:59"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 14:59"
	},
	{
		device_id: "solarpanel_1",
		value: "921Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 14:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 14:59"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "16/04/2024, 14:54"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "16/04/2024, 14:54"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "16/04/2024, 14:54"
	},
	{
		device_id: "solarpanel_1",
		value: "916Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 14:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 14:54"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "16/04/2024, 14:49"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "16/04/2024, 14:49"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 14:49"
	},
	{
		device_id: "solarpanel_1",
		value: "264Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 14:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 14:49"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "16/04/2024, 14:44"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "16/04/2024, 14:44"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "16/04/2024, 14:44"
	},
	{
		device_id: "solarpanel_1",
		value: "961Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 14:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 14:44"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "16/04/2024, 14:39"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "16/04/2024, 14:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 14:39"
	},
	{
		device_id: "solarpanel_1",
		value: "933Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 14:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 14:39"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "16/04/2024, 14:34"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "16/04/2024, 14:34"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "16/04/2024, 14:34"
	},
	{
		device_id: "solarpanel_1",
		value: "689Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 14:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 14:34"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "16/04/2024, 14:29"
	},
	{
		device_id: "temp_1",
		value: "2°C",
		type: "temperature",
		timestamp: "16/04/2024, 14:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 14:29"
	},
	{
		device_id: "solarpanel_1",
		value: "325Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 14:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 14:29"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "16/04/2024, 14:24"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "16/04/2024, 14:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 14:24"
	},
	{
		device_id: "solarpanel_1",
		value: "357Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 14:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 14:24"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "16/04/2024, 14:19"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "16/04/2024, 14:19"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 14:19"
	},
	{
		device_id: "solarpanel_1",
		value: "406Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 14:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 14:19"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "16/04/2024, 14:14"
	},
	{
		device_id: "temp_1",
		value: "37°C",
		type: "temperature",
		timestamp: "16/04/2024, 14:14"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 14:14"
	},
	{
		device_id: "solarpanel_1",
		value: "67Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 14:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 14:14"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "16/04/2024, 14:09"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "16/04/2024, 14:09"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "16/04/2024, 14:09"
	},
	{
		device_id: "solarpanel_1",
		value: "714Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 14:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 14:09"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "16/04/2024, 14:04"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "16/04/2024, 14:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 14:04"
	},
	{
		device_id: "solarpanel_1",
		value: "701Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 14:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 14:04"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "16/04/2024, 13:59"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "16/04/2024, 13:59"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "16/04/2024, 13:59"
	},
	{
		device_id: "solarpanel_1",
		value: "822Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 13:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 13:59"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "16/04/2024, 13:54"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "16/04/2024, 13:54"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 13:54"
	},
	{
		device_id: "solarpanel_1",
		value: "537Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 13:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 13:54"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "16/04/2024, 13:49"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "16/04/2024, 13:49"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "16/04/2024, 13:49"
	},
	{
		device_id: "solarpanel_1",
		value: "108Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 13:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 13:49"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "16/04/2024, 13:44"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "16/04/2024, 13:44"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 13:44"
	},
	{
		device_id: "solarpanel_1",
		value: "63Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 13:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 13:44"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "16/04/2024, 13:39"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "16/04/2024, 13:39"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 13:39"
	},
	{
		device_id: "solarpanel_1",
		value: "93Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 13:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 13:39"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "16/04/2024, 13:34"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "16/04/2024, 13:34"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "16/04/2024, 13:34"
	},
	{
		device_id: "solarpanel_1",
		value: "617Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 13:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 13:34"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "16/04/2024, 13:29"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "16/04/2024, 13:29"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 13:29"
	},
	{
		device_id: "solarpanel_1",
		value: "177Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 13:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 13:29"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "16/04/2024, 13:24"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "16/04/2024, 13:24"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 13:24"
	},
	{
		device_id: "solarpanel_1",
		value: "475Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 13:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 13:24"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "16/04/2024, 13:19"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "16/04/2024, 13:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 13:19"
	},
	{
		device_id: "solarpanel_1",
		value: "797Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 13:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 13:19"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "16/04/2024, 13:14"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "16/04/2024, 13:14"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 13:14"
	},
	{
		device_id: "solarpanel_1",
		value: "209Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 13:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 13:14"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "16/04/2024, 13:09"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "16/04/2024, 13:09"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "16/04/2024, 13:09"
	},
	{
		device_id: "solarpanel_1",
		value: "198Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 13:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 13:09"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "16/04/2024, 13:04"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "16/04/2024, 13:04"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 13:04"
	},
	{
		device_id: "solarpanel_1",
		value: "278Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 13:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 13:04"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "16/04/2024, 12:59"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "16/04/2024, 12:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 12:59"
	},
	{
		device_id: "solarpanel_1",
		value: "34Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 12:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 12:59"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "16/04/2024, 12:54"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "16/04/2024, 12:54"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "16/04/2024, 12:54"
	},
	{
		device_id: "solarpanel_1",
		value: "60Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 12:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 12:54"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "16/04/2024, 12:49"
	},
	{
		device_id: "temp_1",
		value: "37°C",
		type: "temperature",
		timestamp: "16/04/2024, 12:49"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 12:49"
	},
	{
		device_id: "solarpanel_1",
		value: "929Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 12:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 12:49"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "16/04/2024, 12:44"
	},
	{
		device_id: "temp_1",
		value: "40°C",
		type: "temperature",
		timestamp: "16/04/2024, 12:44"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "16/04/2024, 12:44"
	},
	{
		device_id: "solarpanel_1",
		value: "406Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 12:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 12:44"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "16/04/2024, 12:39"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "16/04/2024, 12:39"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 12:39"
	},
	{
		device_id: "solarpanel_1",
		value: "363Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 12:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 12:39"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "16/04/2024, 12:34"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "16/04/2024, 12:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "16/04/2024, 12:34"
	},
	{
		device_id: "solarpanel_1",
		value: "861Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 12:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 12:34"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "16/04/2024, 12:29"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "16/04/2024, 12:29"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 12:29"
	},
	{
		device_id: "solarpanel_1",
		value: "247Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 12:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 12:29"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "16/04/2024, 12:24"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "16/04/2024, 12:24"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "16/04/2024, 12:24"
	},
	{
		device_id: "solarpanel_1",
		value: "833Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 12:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 12:24"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "16/04/2024, 12:19"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "16/04/2024, 12:19"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "16/04/2024, 12:19"
	},
	{
		device_id: "solarpanel_1",
		value: "964Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 12:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 12:19"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "16/04/2024, 12:14"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "16/04/2024, 12:14"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 12:14"
	},
	{
		device_id: "solarpanel_1",
		value: "638Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 12:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 12:14"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "16/04/2024, 12:09"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "16/04/2024, 12:09"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 12:09"
	},
	{
		device_id: "solarpanel_1",
		value: "464Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 12:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 12:09"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "16/04/2024, 12:04"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "16/04/2024, 12:04"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "16/04/2024, 12:04"
	},
	{
		device_id: "solarpanel_1",
		value: "593Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 12:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 12:04"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "16/04/2024, 11:59"
	},
	{
		device_id: "temp_1",
		value: "31°C",
		type: "temperature",
		timestamp: "16/04/2024, 11:59"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "16/04/2024, 11:59"
	},
	{
		device_id: "solarpanel_1",
		value: "589Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 11:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 11:59"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "16/04/2024, 11:54"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "16/04/2024, 11:54"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 11:54"
	},
	{
		device_id: "solarpanel_1",
		value: "932Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 11:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 11:54"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "16/04/2024, 11:49"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "16/04/2024, 11:49"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 11:49"
	},
	{
		device_id: "solarpanel_1",
		value: "312Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 11:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 11:49"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "16/04/2024, 11:44"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "16/04/2024, 11:44"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 11:44"
	},
	{
		device_id: "solarpanel_1",
		value: "593Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 11:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 11:44"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "16/04/2024, 11:39"
	},
	{
		device_id: "temp_1",
		value: "42°C",
		type: "temperature",
		timestamp: "16/04/2024, 11:39"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "16/04/2024, 11:39"
	},
	{
		device_id: "solarpanel_1",
		value: "298Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 11:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 11:39"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "16/04/2024, 11:34"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "16/04/2024, 11:34"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 11:34"
	},
	{
		device_id: "solarpanel_1",
		value: "454Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 11:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 11:34"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "16/04/2024, 11:29"
	},
	{
		device_id: "temp_1",
		value: "8°C",
		type: "temperature",
		timestamp: "16/04/2024, 11:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 11:29"
	},
	{
		device_id: "solarpanel_1",
		value: "216Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 11:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 11:29"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "16/04/2024, 11:24"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "16/04/2024, 11:24"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "16/04/2024, 11:24"
	},
	{
		device_id: "solarpanel_1",
		value: "390Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 11:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 11:24"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "16/04/2024, 11:19"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "16/04/2024, 11:19"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 11:19"
	},
	{
		device_id: "solarpanel_1",
		value: "171Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 11:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 11:19"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "16/04/2024, 11:14"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "16/04/2024, 11:14"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 11:14"
	},
	{
		device_id: "solarpanel_1",
		value: "729Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 11:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 11:14"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "16/04/2024, 11:09"
	},
	{
		device_id: "temp_1",
		value: "8°C",
		type: "temperature",
		timestamp: "16/04/2024, 11:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 11:09"
	},
	{
		device_id: "solarpanel_1",
		value: "239Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 11:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 11:09"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "16/04/2024, 11:04"
	},
	{
		device_id: "temp_1",
		value: "42°C",
		type: "temperature",
		timestamp: "16/04/2024, 11:04"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "16/04/2024, 11:04"
	},
	{
		device_id: "solarpanel_1",
		value: "10Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 11:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 11:04"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "16/04/2024, 10:59"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "16/04/2024, 10:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "16/04/2024, 10:59"
	},
	{
		device_id: "solarpanel_1",
		value: "713Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 10:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 10:59"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "16/04/2024, 10:54"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "16/04/2024, 10:54"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 10:54"
	},
	{
		device_id: "solarpanel_1",
		value: "303Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 10:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 10:54"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "16/04/2024, 10:49"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "16/04/2024, 10:49"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 10:49"
	},
	{
		device_id: "solarpanel_1",
		value: "348Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 10:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 10:49"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "16/04/2024, 10:44"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "16/04/2024, 10:44"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "16/04/2024, 10:44"
	},
	{
		device_id: "solarpanel_1",
		value: "662Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 10:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 10:44"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "16/04/2024, 10:39"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "16/04/2024, 10:39"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 10:39"
	},
	{
		device_id: "solarpanel_1",
		value: "838Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 10:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 10:39"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "16/04/2024, 10:34"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "16/04/2024, 10:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "16/04/2024, 10:34"
	},
	{
		device_id: "solarpanel_1",
		value: "222Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 10:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 10:34"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "16/04/2024, 10:29"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "16/04/2024, 10:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 10:29"
	},
	{
		device_id: "solarpanel_1",
		value: "983Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 10:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 10:29"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "16/04/2024, 10:24"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "16/04/2024, 10:24"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 10:24"
	},
	{
		device_id: "solarpanel_1",
		value: "346Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 10:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 10:24"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "16/04/2024, 10:19"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "16/04/2024, 10:19"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 10:19"
	},
	{
		device_id: "solarpanel_1",
		value: "687Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 10:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 10:19"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "16/04/2024, 10:14"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "16/04/2024, 10:14"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "16/04/2024, 10:14"
	},
	{
		device_id: "solarpanel_1",
		value: "608Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 10:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 10:14"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "16/04/2024, 10:09"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "16/04/2024, 10:09"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 10:09"
	},
	{
		device_id: "solarpanel_1",
		value: "113Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 10:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 10:09"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "16/04/2024, 10:04"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "16/04/2024, 10:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 10:04"
	},
	{
		device_id: "solarpanel_1",
		value: "857Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 10:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 10:04"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "16/04/2024, 09:59"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "16/04/2024, 09:59"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 09:59"
	},
	{
		device_id: "solarpanel_1",
		value: "766Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 09:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 09:59"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "16/04/2024, 09:54"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "16/04/2024, 09:54"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "16/04/2024, 09:54"
	},
	{
		device_id: "solarpanel_1",
		value: "758Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 09:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 09:54"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "16/04/2024, 09:49"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "16/04/2024, 09:49"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 09:49"
	},
	{
		device_id: "solarpanel_1",
		value: "176Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 09:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 09:49"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "16/04/2024, 09:44"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "16/04/2024, 09:44"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 09:44"
	},
	{
		device_id: "solarpanel_1",
		value: "933Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 09:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 09:44"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "16/04/2024, 09:39"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "16/04/2024, 09:39"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 09:39"
	},
	{
		device_id: "solarpanel_1",
		value: "468Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 09:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 09:39"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "16/04/2024, 09:34"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "16/04/2024, 09:34"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 09:34"
	},
	{
		device_id: "solarpanel_1",
		value: "778Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 09:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 09:34"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "16/04/2024, 09:29"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "16/04/2024, 09:29"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 09:29"
	},
	{
		device_id: "solarpanel_1",
		value: "270Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 09:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 09:29"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "16/04/2024, 09:24"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "16/04/2024, 09:24"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 09:24"
	},
	{
		device_id: "solarpanel_1",
		value: "616Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 09:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 09:24"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "16/04/2024, 09:19"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "16/04/2024, 09:19"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "16/04/2024, 09:19"
	},
	{
		device_id: "solarpanel_1",
		value: "693Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 09:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 09:19"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "16/04/2024, 09:14"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "16/04/2024, 09:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 09:14"
	},
	{
		device_id: "solarpanel_1",
		value: "119Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 09:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 09:14"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "16/04/2024, 09:09"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "16/04/2024, 09:09"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "16/04/2024, 09:09"
	},
	{
		device_id: "solarpanel_1",
		value: "194Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 09:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 09:09"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "16/04/2024, 09:04"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "16/04/2024, 09:04"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 09:04"
	},
	{
		device_id: "solarpanel_1",
		value: "575Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 09:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 09:04"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "16/04/2024, 08:59"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "16/04/2024, 08:59"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 08:59"
	},
	{
		device_id: "solarpanel_1",
		value: "415Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 08:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 08:59"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "16/04/2024, 08:54"
	},
	{
		device_id: "temp_1",
		value: "57°C",
		type: "temperature",
		timestamp: "16/04/2024, 08:54"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 08:54"
	},
	{
		device_id: "solarpanel_1",
		value: "4Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 08:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 08:54"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "16/04/2024, 08:49"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "16/04/2024, 08:49"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 08:49"
	},
	{
		device_id: "solarpanel_1",
		value: "782Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 08:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 08:49"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "16/04/2024, 08:44"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "16/04/2024, 08:44"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 08:44"
	},
	{
		device_id: "solarpanel_1",
		value: "106Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 08:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 08:44"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "16/04/2024, 08:39"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "16/04/2024, 08:39"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 08:39"
	},
	{
		device_id: "solarpanel_1",
		value: "839Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 08:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 08:39"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "16/04/2024, 08:34"
	},
	{
		device_id: "temp_1",
		value: "78°C",
		type: "temperature",
		timestamp: "16/04/2024, 08:34"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "16/04/2024, 08:34"
	},
	{
		device_id: "solarpanel_1",
		value: "919Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 08:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 08:34"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "16/04/2024, 08:29"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "16/04/2024, 08:29"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 08:29"
	},
	{
		device_id: "solarpanel_1",
		value: "754Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 08:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 08:29"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "16/04/2024, 08:24"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "16/04/2024, 08:24"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 08:24"
	},
	{
		device_id: "solarpanel_1",
		value: "804Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 08:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 08:24"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "16/04/2024, 08:19"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "16/04/2024, 08:19"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "16/04/2024, 08:19"
	},
	{
		device_id: "solarpanel_1",
		value: "640Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 08:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 08:19"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "16/04/2024, 08:14"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "16/04/2024, 08:14"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 08:14"
	},
	{
		device_id: "solarpanel_1",
		value: "925Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 08:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 08:14"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "16/04/2024, 08:09"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "16/04/2024, 08:09"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "16/04/2024, 08:09"
	},
	{
		device_id: "solarpanel_1",
		value: "779Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 08:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 08:09"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "16/04/2024, 08:04"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "16/04/2024, 08:04"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 08:04"
	},
	{
		device_id: "solarpanel_1",
		value: "867Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 08:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 08:04"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "16/04/2024, 07:59"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "16/04/2024, 07:59"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "16/04/2024, 07:59"
	},
	{
		device_id: "solarpanel_1",
		value: "193Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 07:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 07:59"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "16/04/2024, 07:54"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "16/04/2024, 07:54"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 07:54"
	},
	{
		device_id: "solarpanel_1",
		value: "298Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 07:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 07:54"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "16/04/2024, 07:49"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "16/04/2024, 07:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "16/04/2024, 07:49"
	},
	{
		device_id: "solarpanel_1",
		value: "279Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 07:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 07:49"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "16/04/2024, 07:44"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "16/04/2024, 07:44"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 07:44"
	},
	{
		device_id: "solarpanel_1",
		value: "400Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 07:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 07:44"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "16/04/2024, 07:39"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "16/04/2024, 07:39"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 07:39"
	},
	{
		device_id: "solarpanel_1",
		value: "986Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 07:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 07:39"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "16/04/2024, 07:34"
	},
	{
		device_id: "temp_1",
		value: "37°C",
		type: "temperature",
		timestamp: "16/04/2024, 07:34"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 07:34"
	},
	{
		device_id: "solarpanel_1",
		value: "136Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 07:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 07:34"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "16/04/2024, 07:29"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "16/04/2024, 07:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 07:29"
	},
	{
		device_id: "solarpanel_1",
		value: "947Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 07:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 07:29"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "16/04/2024, 07:24"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "16/04/2024, 07:24"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "16/04/2024, 07:24"
	},
	{
		device_id: "solarpanel_1",
		value: "595Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 07:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 07:24"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "16/04/2024, 07:19"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "16/04/2024, 07:19"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 07:19"
	},
	{
		device_id: "solarpanel_1",
		value: "168Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 07:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 07:19"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "16/04/2024, 07:14"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "16/04/2024, 07:14"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 07:14"
	},
	{
		device_id: "solarpanel_1",
		value: "63Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 07:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 07:14"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "16/04/2024, 07:09"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "16/04/2024, 07:09"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "16/04/2024, 07:09"
	},
	{
		device_id: "solarpanel_1",
		value: "967Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 07:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 07:09"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "16/04/2024, 07:04"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "16/04/2024, 07:04"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "16/04/2024, 07:04"
	},
	{
		device_id: "solarpanel_1",
		value: "75Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 07:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 07:04"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "16/04/2024, 06:59"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "16/04/2024, 06:59"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "16/04/2024, 06:59"
	},
	{
		device_id: "solarpanel_1",
		value: "220Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 06:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 06:59"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "16/04/2024, 06:54"
	},
	{
		device_id: "temp_1",
		value: "93°C",
		type: "temperature",
		timestamp: "16/04/2024, 06:54"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "16/04/2024, 06:54"
	},
	{
		device_id: "solarpanel_1",
		value: "593Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 06:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 06:54"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "16/04/2024, 06:49"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "16/04/2024, 06:49"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 06:49"
	},
	{
		device_id: "solarpanel_1",
		value: "574Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 06:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 06:49"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "16/04/2024, 06:44"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "16/04/2024, 06:44"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 06:44"
	},
	{
		device_id: "solarpanel_1",
		value: "266Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 06:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 06:44"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "16/04/2024, 06:39"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "16/04/2024, 06:39"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 06:39"
	},
	{
		device_id: "solarpanel_1",
		value: "767Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 06:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 06:39"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "16/04/2024, 06:34"
	},
	{
		device_id: "temp_1",
		value: "25°C",
		type: "temperature",
		timestamp: "16/04/2024, 06:34"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 06:34"
	},
	{
		device_id: "solarpanel_1",
		value: "351Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 06:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 06:34"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "16/04/2024, 06:29"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "16/04/2024, 06:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 06:29"
	},
	{
		device_id: "solarpanel_1",
		value: "336Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 06:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 06:29"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "16/04/2024, 06:24"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "16/04/2024, 06:24"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "16/04/2024, 06:24"
	},
	{
		device_id: "solarpanel_1",
		value: "604Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 06:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 06:24"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "16/04/2024, 06:19"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "16/04/2024, 06:19"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 06:19"
	},
	{
		device_id: "solarpanel_1",
		value: "776Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 06:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 06:19"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "16/04/2024, 06:14"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "16/04/2024, 06:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 06:14"
	},
	{
		device_id: "solarpanel_1",
		value: "303Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 06:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 06:14"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "16/04/2024, 06:09"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "16/04/2024, 06:09"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 06:09"
	},
	{
		device_id: "solarpanel_1",
		value: "459Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 06:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 06:09"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "16/04/2024, 06:04"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "16/04/2024, 06:04"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 06:04"
	},
	{
		device_id: "solarpanel_1",
		value: "565Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 06:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 06:04"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "16/04/2024, 05:59"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "16/04/2024, 05:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 05:59"
	},
	{
		device_id: "solarpanel_1",
		value: "812Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 05:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 05:59"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "16/04/2024, 05:54"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "16/04/2024, 05:54"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 05:54"
	},
	{
		device_id: "solarpanel_1",
		value: "553Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 05:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 05:54"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "16/04/2024, 05:49"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "16/04/2024, 05:49"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 05:49"
	},
	{
		device_id: "solarpanel_1",
		value: "915Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 05:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 05:49"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "16/04/2024, 05:44"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "16/04/2024, 05:44"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 05:44"
	},
	{
		device_id: "solarpanel_1",
		value: "196Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 05:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 05:44"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "16/04/2024, 05:39"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "16/04/2024, 05:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 05:39"
	},
	{
		device_id: "solarpanel_1",
		value: "351Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 05:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 05:39"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "16/04/2024, 05:34"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "16/04/2024, 05:34"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 05:34"
	},
	{
		device_id: "solarpanel_1",
		value: "345Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 05:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 05:34"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "16/04/2024, 05:29"
	},
	{
		device_id: "temp_1",
		value: "93°C",
		type: "temperature",
		timestamp: "16/04/2024, 05:29"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 05:29"
	},
	{
		device_id: "solarpanel_1",
		value: "44Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 05:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 05:29"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "16/04/2024, 05:24"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "16/04/2024, 05:24"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 05:24"
	},
	{
		device_id: "solarpanel_1",
		value: "735Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 05:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 05:24"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "16/04/2024, 05:19"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "16/04/2024, 05:19"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "16/04/2024, 05:19"
	},
	{
		device_id: "solarpanel_1",
		value: "641Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 05:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 05:19"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "16/04/2024, 05:14"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "16/04/2024, 05:14"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "16/04/2024, 05:14"
	},
	{
		device_id: "solarpanel_1",
		value: "309Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 05:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 05:14"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "16/04/2024, 05:09"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "16/04/2024, 05:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 05:09"
	},
	{
		device_id: "solarpanel_1",
		value: "391Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 05:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 05:09"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "16/04/2024, 05:04"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "16/04/2024, 05:04"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 05:04"
	},
	{
		device_id: "solarpanel_1",
		value: "597Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 05:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 05:04"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "16/04/2024, 04:59"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "16/04/2024, 04:59"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 04:59"
	},
	{
		device_id: "solarpanel_1",
		value: "660Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 04:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 04:59"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "16/04/2024, 04:54"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "16/04/2024, 04:54"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 04:54"
	},
	{
		device_id: "solarpanel_1",
		value: "31Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 04:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 04:54"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "16/04/2024, 04:49"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "16/04/2024, 04:49"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 04:49"
	},
	{
		device_id: "solarpanel_1",
		value: "514Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 04:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 04:49"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "16/04/2024, 04:44"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "16/04/2024, 04:44"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "16/04/2024, 04:44"
	},
	{
		device_id: "solarpanel_1",
		value: "377Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 04:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 04:44"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "16/04/2024, 04:39"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "16/04/2024, 04:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 04:39"
	},
	{
		device_id: "solarpanel_1",
		value: "442Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 04:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 04:39"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "16/04/2024, 04:34"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "16/04/2024, 04:34"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 04:34"
	},
	{
		device_id: "solarpanel_1",
		value: "441Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 04:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 04:34"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "16/04/2024, 04:29"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "16/04/2024, 04:29"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "16/04/2024, 04:29"
	},
	{
		device_id: "solarpanel_1",
		value: "710Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 04:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 04:29"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "16/04/2024, 04:24"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "16/04/2024, 04:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 04:24"
	},
	{
		device_id: "solarpanel_1",
		value: "233Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 04:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 04:24"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "16/04/2024, 04:19"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "16/04/2024, 04:19"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 04:19"
	},
	{
		device_id: "solarpanel_1",
		value: "71Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 04:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 04:19"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "16/04/2024, 04:14"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "16/04/2024, 04:14"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 04:14"
	},
	{
		device_id: "solarpanel_1",
		value: "275Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 04:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 04:14"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "16/04/2024, 04:09"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "16/04/2024, 04:09"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "16/04/2024, 04:09"
	},
	{
		device_id: "solarpanel_1",
		value: "113Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 04:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 04:09"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "16/04/2024, 04:04"
	},
	{
		device_id: "temp_1",
		value: "16°C",
		type: "temperature",
		timestamp: "16/04/2024, 04:04"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 04:04"
	},
	{
		device_id: "solarpanel_1",
		value: "509Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 04:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 04:04"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "16/04/2024, 03:59"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "16/04/2024, 03:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 03:59"
	},
	{
		device_id: "solarpanel_1",
		value: "831Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 03:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 03:59"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "16/04/2024, 03:54"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "16/04/2024, 03:54"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 03:54"
	},
	{
		device_id: "solarpanel_1",
		value: "120Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 03:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 03:54"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "16/04/2024, 03:49"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "16/04/2024, 03:49"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 03:49"
	},
	{
		device_id: "solarpanel_1",
		value: "481Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 03:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 03:49"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "16/04/2024, 03:44"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "16/04/2024, 03:44"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 03:44"
	},
	{
		device_id: "solarpanel_1",
		value: "553Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 03:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 03:44"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "16/04/2024, 03:39"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "16/04/2024, 03:39"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "16/04/2024, 03:39"
	},
	{
		device_id: "solarpanel_1",
		value: "67Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 03:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 03:39"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "16/04/2024, 03:34"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "16/04/2024, 03:34"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 03:34"
	},
	{
		device_id: "solarpanel_1",
		value: "699Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 03:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 03:34"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "16/04/2024, 03:29"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "16/04/2024, 03:29"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 03:29"
	},
	{
		device_id: "solarpanel_1",
		value: "474Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 03:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 03:29"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "16/04/2024, 03:24"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "16/04/2024, 03:24"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "16/04/2024, 03:24"
	},
	{
		device_id: "solarpanel_1",
		value: "250Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 03:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 03:24"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "16/04/2024, 03:19"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "16/04/2024, 03:19"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 03:19"
	},
	{
		device_id: "solarpanel_1",
		value: "699Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 03:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 03:19"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "16/04/2024, 03:14"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "16/04/2024, 03:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "16/04/2024, 03:14"
	},
	{
		device_id: "solarpanel_1",
		value: "436Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 03:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 03:14"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "16/04/2024, 03:09"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "16/04/2024, 03:09"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 03:09"
	},
	{
		device_id: "solarpanel_1",
		value: "889Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 03:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 03:09"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "16/04/2024, 03:04"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "16/04/2024, 03:04"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "16/04/2024, 03:04"
	},
	{
		device_id: "solarpanel_1",
		value: "170Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 03:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 03:04"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "16/04/2024, 02:59"
	},
	{
		device_id: "temp_1",
		value: "8°C",
		type: "temperature",
		timestamp: "16/04/2024, 02:59"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 02:59"
	},
	{
		device_id: "solarpanel_1",
		value: "339Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 02:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 02:59"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "16/04/2024, 02:54"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "16/04/2024, 02:54"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "16/04/2024, 02:54"
	},
	{
		device_id: "solarpanel_1",
		value: "18Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 02:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 02:54"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "16/04/2024, 02:49"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "16/04/2024, 02:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "16/04/2024, 02:49"
	},
	{
		device_id: "solarpanel_1",
		value: "949Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 02:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 02:49"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "16/04/2024, 02:44"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "16/04/2024, 02:44"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 02:44"
	},
	{
		device_id: "solarpanel_1",
		value: "708Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 02:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 02:44"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "16/04/2024, 02:39"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "16/04/2024, 02:39"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 02:39"
	},
	{
		device_id: "solarpanel_1",
		value: "785Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 02:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 02:39"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "16/04/2024, 02:34"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "16/04/2024, 02:34"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "16/04/2024, 02:34"
	},
	{
		device_id: "solarpanel_1",
		value: "500Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 02:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 02:34"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "16/04/2024, 02:29"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "16/04/2024, 02:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 02:29"
	},
	{
		device_id: "solarpanel_1",
		value: "925Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 02:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 02:29"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "16/04/2024, 02:24"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "16/04/2024, 02:24"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "16/04/2024, 02:24"
	},
	{
		device_id: "solarpanel_1",
		value: "833Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 02:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 02:24"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "16/04/2024, 02:19"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "16/04/2024, 02:19"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 02:19"
	},
	{
		device_id: "solarpanel_1",
		value: "623Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 02:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 02:19"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "16/04/2024, 02:14"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "16/04/2024, 02:14"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 02:14"
	},
	{
		device_id: "solarpanel_1",
		value: "19Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 02:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 02:14"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "16/04/2024, 02:09"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "16/04/2024, 02:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 02:09"
	},
	{
		device_id: "solarpanel_1",
		value: "548Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 02:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 02:09"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "16/04/2024, 02:04"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "16/04/2024, 02:04"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "16/04/2024, 02:04"
	},
	{
		device_id: "solarpanel_1",
		value: "631Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 02:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 02:04"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "16/04/2024, 01:59"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "16/04/2024, 01:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 01:59"
	},
	{
		device_id: "solarpanel_1",
		value: "284Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 01:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 01:59"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "16/04/2024, 01:54"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "16/04/2024, 01:54"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "16/04/2024, 01:54"
	},
	{
		device_id: "solarpanel_1",
		value: "124Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 01:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 01:54"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "16/04/2024, 01:49"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "16/04/2024, 01:49"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 01:49"
	},
	{
		device_id: "solarpanel_1",
		value: "331Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 01:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 01:49"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "16/04/2024, 01:44"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "16/04/2024, 01:44"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "16/04/2024, 01:44"
	},
	{
		device_id: "solarpanel_1",
		value: "700Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 01:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 01:44"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "16/04/2024, 01:39"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "16/04/2024, 01:39"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "16/04/2024, 01:39"
	},
	{
		device_id: "solarpanel_1",
		value: "141Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 01:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 01:39"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "16/04/2024, 01:34"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "16/04/2024, 01:34"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 01:34"
	},
	{
		device_id: "solarpanel_1",
		value: "990Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 01:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 01:34"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "16/04/2024, 01:29"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "16/04/2024, 01:29"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 01:29"
	},
	{
		device_id: "solarpanel_1",
		value: "421Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 01:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 01:29"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "16/04/2024, 01:24"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "16/04/2024, 01:24"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "16/04/2024, 01:24"
	},
	{
		device_id: "solarpanel_1",
		value: "441Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 01:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 01:24"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "16/04/2024, 01:19"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "16/04/2024, 01:19"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 01:19"
	},
	{
		device_id: "solarpanel_1",
		value: "334Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 01:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 01:19"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "16/04/2024, 01:14"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "16/04/2024, 01:14"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "16/04/2024, 01:14"
	},
	{
		device_id: "solarpanel_1",
		value: "854Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 01:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 01:14"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "16/04/2024, 01:09"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "16/04/2024, 01:09"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 01:09"
	},
	{
		device_id: "solarpanel_1",
		value: "563Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 01:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 01:09"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "16/04/2024, 01:04"
	},
	{
		device_id: "temp_1",
		value: "76°C",
		type: "temperature",
		timestamp: "16/04/2024, 01:04"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 01:04"
	},
	{
		device_id: "solarpanel_1",
		value: "934Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 01:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 01:04"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "16/04/2024, 00:59"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "16/04/2024, 00:59"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 00:59"
	},
	{
		device_id: "solarpanel_1",
		value: "929Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 00:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 00:59"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "16/04/2024, 00:54"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "16/04/2024, 00:54"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "16/04/2024, 00:54"
	},
	{
		device_id: "solarpanel_1",
		value: "642Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 00:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 00:54"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "16/04/2024, 00:49"
	},
	{
		device_id: "temp_1",
		value: "93°C",
		type: "temperature",
		timestamp: "16/04/2024, 00:49"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "16/04/2024, 00:49"
	},
	{
		device_id: "solarpanel_1",
		value: "903Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 00:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 00:49"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "16/04/2024, 00:44"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "16/04/2024, 00:44"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "16/04/2024, 00:44"
	},
	{
		device_id: "solarpanel_1",
		value: "71Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 00:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 00:44"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "16/04/2024, 00:39"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "16/04/2024, 00:39"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 00:39"
	},
	{
		device_id: "solarpanel_1",
		value: "724Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 00:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 00:39"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "16/04/2024, 00:34"
	},
	{
		device_id: "temp_1",
		value: "16°C",
		type: "temperature",
		timestamp: "16/04/2024, 00:34"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "16/04/2024, 00:34"
	},
	{
		device_id: "solarpanel_1",
		value: "292Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 00:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 00:34"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "16/04/2024, 00:29"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "16/04/2024, 00:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "16/04/2024, 00:29"
	},
	{
		device_id: "solarpanel_1",
		value: "191Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 00:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 00:29"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "16/04/2024, 00:24"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "16/04/2024, 00:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "16/04/2024, 00:24"
	},
	{
		device_id: "solarpanel_1",
		value: "546Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 00:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 00:24"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "16/04/2024, 00:19"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "16/04/2024, 00:19"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "16/04/2024, 00:19"
	},
	{
		device_id: "solarpanel_1",
		value: "473Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 00:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 00:19"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "16/04/2024, 00:14"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "16/04/2024, 00:14"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "16/04/2024, 00:14"
	},
	{
		device_id: "solarpanel_1",
		value: "770Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 00:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 00:14"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "16/04/2024, 00:09"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "16/04/2024, 00:09"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "16/04/2024, 00:09"
	},
	{
		device_id: "solarpanel_1",
		value: "193Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 00:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "16/04/2024, 00:09"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "16/04/2024, 00:04"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "16/04/2024, 00:04"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "16/04/2024, 00:04"
	},
	{
		device_id: "solarpanel_1",
		value: "32Lux",
		type: "Sun Intensity",
		timestamp: "16/04/2024, 00:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "16/04/2024, 00:04"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "15/04/2024, 23:59"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "15/04/2024, 23:59"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "15/04/2024, 23:59"
	},
	{
		device_id: "solarpanel_1",
		value: "4Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 23:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 23:59"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "15/04/2024, 23:54"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "15/04/2024, 23:54"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "15/04/2024, 23:54"
	},
	{
		device_id: "solarpanel_1",
		value: "198Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 23:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 23:54"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "15/04/2024, 23:49"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "15/04/2024, 23:49"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "15/04/2024, 23:49"
	},
	{
		device_id: "solarpanel_1",
		value: "177Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 23:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 23:49"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "15/04/2024, 23:44"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "15/04/2024, 23:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "15/04/2024, 23:44"
	},
	{
		device_id: "solarpanel_1",
		value: "247Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 23:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 23:44"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "15/04/2024, 23:39"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "15/04/2024, 23:39"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "15/04/2024, 23:39"
	},
	{
		device_id: "solarpanel_1",
		value: "498Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 23:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 23:39"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "15/04/2024, 23:34"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "15/04/2024, 23:34"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "15/04/2024, 23:34"
	},
	{
		device_id: "solarpanel_1",
		value: "207Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 23:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 23:34"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "15/04/2024, 23:29"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "15/04/2024, 23:29"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "15/04/2024, 23:29"
	},
	{
		device_id: "solarpanel_1",
		value: "392Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 23:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 23:29"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "15/04/2024, 23:24"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "15/04/2024, 23:24"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "15/04/2024, 23:24"
	},
	{
		device_id: "solarpanel_1",
		value: "118Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 23:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 23:24"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "15/04/2024, 23:19"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "15/04/2024, 23:19"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "15/04/2024, 23:19"
	},
	{
		device_id: "solarpanel_1",
		value: "969Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 23:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 23:19"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "15/04/2024, 23:14"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "15/04/2024, 23:14"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "15/04/2024, 23:14"
	},
	{
		device_id: "solarpanel_1",
		value: "130Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 23:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 23:14"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "15/04/2024, 23:09"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "15/04/2024, 23:09"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "15/04/2024, 23:09"
	},
	{
		device_id: "solarpanel_1",
		value: "410Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 23:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 23:09"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "15/04/2024, 23:04"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "15/04/2024, 23:04"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "15/04/2024, 23:04"
	},
	{
		device_id: "solarpanel_1",
		value: "254Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 23:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 23:04"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "15/04/2024, 22:59"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "15/04/2024, 22:59"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "15/04/2024, 22:59"
	},
	{
		device_id: "solarpanel_1",
		value: "410Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 22:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 22:59"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "15/04/2024, 22:54"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "15/04/2024, 22:54"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "15/04/2024, 22:54"
	},
	{
		device_id: "solarpanel_1",
		value: "431Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 22:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 22:54"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "15/04/2024, 22:49"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "15/04/2024, 22:49"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "15/04/2024, 22:49"
	},
	{
		device_id: "solarpanel_1",
		value: "589Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 22:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 22:49"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "15/04/2024, 22:44"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "15/04/2024, 22:44"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "15/04/2024, 22:44"
	},
	{
		device_id: "solarpanel_1",
		value: "105Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 22:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 22:44"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "15/04/2024, 22:39"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "15/04/2024, 22:39"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "15/04/2024, 22:39"
	},
	{
		device_id: "solarpanel_1",
		value: "150Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 22:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 22:39"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "15/04/2024, 22:34"
	},
	{
		device_id: "temp_1",
		value: "93°C",
		type: "temperature",
		timestamp: "15/04/2024, 22:34"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "15/04/2024, 22:34"
	},
	{
		device_id: "solarpanel_1",
		value: "991Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 22:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 22:34"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "15/04/2024, 22:29"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "15/04/2024, 22:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "15/04/2024, 22:29"
	},
	{
		device_id: "solarpanel_1",
		value: "935Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 22:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 22:29"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "15/04/2024, 22:24"
	},
	{
		device_id: "temp_1",
		value: "40°C",
		type: "temperature",
		timestamp: "15/04/2024, 22:24"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "15/04/2024, 22:24"
	},
	{
		device_id: "solarpanel_1",
		value: "521Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 22:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 22:24"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "15/04/2024, 22:19"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "15/04/2024, 22:19"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "15/04/2024, 22:19"
	},
	{
		device_id: "solarpanel_1",
		value: "904Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 22:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 22:19"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "15/04/2024, 22:14"
	},
	{
		device_id: "temp_1",
		value: "93°C",
		type: "temperature",
		timestamp: "15/04/2024, 22:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "15/04/2024, 22:14"
	},
	{
		device_id: "solarpanel_1",
		value: "523Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 22:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 22:14"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "15/04/2024, 22:09"
	},
	{
		device_id: "temp_1",
		value: "42°C",
		type: "temperature",
		timestamp: "15/04/2024, 22:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "15/04/2024, 22:09"
	},
	{
		device_id: "solarpanel_1",
		value: "163Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 22:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 22:09"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "15/04/2024, 22:04"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "15/04/2024, 22:04"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "15/04/2024, 22:04"
	},
	{
		device_id: "solarpanel_1",
		value: "128Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 22:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 22:04"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "15/04/2024, 21:59"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "15/04/2024, 21:59"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "15/04/2024, 21:59"
	},
	{
		device_id: "solarpanel_1",
		value: "780Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 21:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 21:59"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "15/04/2024, 21:54"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "15/04/2024, 21:54"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "15/04/2024, 21:54"
	},
	{
		device_id: "solarpanel_1",
		value: "680Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 21:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 21:54"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "15/04/2024, 21:49"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "15/04/2024, 21:49"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "15/04/2024, 21:49"
	},
	{
		device_id: "solarpanel_1",
		value: "699Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 21:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 21:49"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "15/04/2024, 21:44"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "15/04/2024, 21:44"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "15/04/2024, 21:44"
	},
	{
		device_id: "solarpanel_1",
		value: "39Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 21:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 21:44"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "15/04/2024, 21:39"
	},
	{
		device_id: "temp_1",
		value: "20°C",
		type: "temperature",
		timestamp: "15/04/2024, 21:39"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "15/04/2024, 21:39"
	},
	{
		device_id: "solarpanel_1",
		value: "501Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 21:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 21:39"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "15/04/2024, 21:34"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "15/04/2024, 21:34"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "15/04/2024, 21:34"
	},
	{
		device_id: "solarpanel_1",
		value: "155Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 21:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 21:34"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "15/04/2024, 21:29"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "15/04/2024, 21:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "15/04/2024, 21:29"
	},
	{
		device_id: "solarpanel_1",
		value: "323Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 21:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 21:29"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "15/04/2024, 21:24"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "15/04/2024, 21:24"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "15/04/2024, 21:24"
	},
	{
		device_id: "solarpanel_1",
		value: "542Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 21:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 21:24"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "15/04/2024, 21:19"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "15/04/2024, 21:19"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "15/04/2024, 21:19"
	},
	{
		device_id: "solarpanel_1",
		value: "255Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 21:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 21:19"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "15/04/2024, 21:14"
	},
	{
		device_id: "temp_1",
		value: "10°C",
		type: "temperature",
		timestamp: "15/04/2024, 21:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "15/04/2024, 21:14"
	},
	{
		device_id: "solarpanel_1",
		value: "622Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 21:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 21:14"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "15/04/2024, 21:09"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "15/04/2024, 21:09"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "15/04/2024, 21:09"
	},
	{
		device_id: "solarpanel_1",
		value: "737Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 21:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 21:09"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "15/04/2024, 21:04"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "15/04/2024, 21:04"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "15/04/2024, 21:04"
	},
	{
		device_id: "solarpanel_1",
		value: "772Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 21:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 21:04"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "15/04/2024, 20:59"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "15/04/2024, 20:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "15/04/2024, 20:59"
	},
	{
		device_id: "solarpanel_1",
		value: "641Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 20:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 20:59"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "15/04/2024, 20:54"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "15/04/2024, 20:54"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "15/04/2024, 20:54"
	},
	{
		device_id: "solarpanel_1",
		value: "953Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 20:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 20:54"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "15/04/2024, 20:49"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "15/04/2024, 20:49"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "15/04/2024, 20:49"
	},
	{
		device_id: "solarpanel_1",
		value: "499Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 20:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 20:49"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "15/04/2024, 20:44"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "15/04/2024, 20:44"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "15/04/2024, 20:44"
	},
	{
		device_id: "solarpanel_1",
		value: "836Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 20:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 20:44"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "15/04/2024, 20:39"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "15/04/2024, 20:39"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "15/04/2024, 20:39"
	},
	{
		device_id: "solarpanel_1",
		value: "778Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 20:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 20:39"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "15/04/2024, 20:34"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "15/04/2024, 20:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "15/04/2024, 20:34"
	},
	{
		device_id: "solarpanel_1",
		value: "545Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 20:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 20:34"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "15/04/2024, 20:29"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "15/04/2024, 20:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "15/04/2024, 20:29"
	},
	{
		device_id: "solarpanel_1",
		value: "948Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 20:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 20:29"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "15/04/2024, 20:24"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "15/04/2024, 20:24"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "15/04/2024, 20:24"
	},
	{
		device_id: "solarpanel_1",
		value: "847Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 20:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 20:24"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "15/04/2024, 20:19"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "15/04/2024, 20:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "15/04/2024, 20:19"
	},
	{
		device_id: "solarpanel_1",
		value: "352Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 20:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 20:19"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "15/04/2024, 20:14"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "15/04/2024, 20:14"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "15/04/2024, 20:14"
	},
	{
		device_id: "solarpanel_1",
		value: "552Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 20:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 20:14"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "15/04/2024, 20:09"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "15/04/2024, 20:09"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "15/04/2024, 20:09"
	},
	{
		device_id: "solarpanel_1",
		value: "483Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 20:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 20:09"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "15/04/2024, 20:04"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "15/04/2024, 20:04"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "15/04/2024, 20:04"
	},
	{
		device_id: "solarpanel_1",
		value: "757Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 20:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 20:04"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "15/04/2024, 19:59"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "15/04/2024, 19:59"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "15/04/2024, 19:59"
	},
	{
		device_id: "solarpanel_1",
		value: "45Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 19:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 19:59"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "15/04/2024, 19:54"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "15/04/2024, 19:54"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "15/04/2024, 19:54"
	},
	{
		device_id: "solarpanel_1",
		value: "391Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 19:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 19:54"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "15/04/2024, 19:49"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "15/04/2024, 19:49"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "15/04/2024, 19:49"
	},
	{
		device_id: "solarpanel_1",
		value: "743Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 19:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 19:49"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "15/04/2024, 19:44"
	},
	{
		device_id: "temp_1",
		value: "57°C",
		type: "temperature",
		timestamp: "15/04/2024, 19:44"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "15/04/2024, 19:44"
	},
	{
		device_id: "solarpanel_1",
		value: "533Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 19:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 19:44"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "15/04/2024, 19:39"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "15/04/2024, 19:39"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "15/04/2024, 19:39"
	},
	{
		device_id: "solarpanel_1",
		value: "917Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 19:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 19:39"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "15/04/2024, 19:34"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "15/04/2024, 19:34"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "15/04/2024, 19:34"
	},
	{
		device_id: "solarpanel_1",
		value: "297Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 19:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 19:34"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "15/04/2024, 19:29"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "15/04/2024, 19:29"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "15/04/2024, 19:29"
	},
	{
		device_id: "solarpanel_1",
		value: "619Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 19:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 19:29"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "15/04/2024, 19:24"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "15/04/2024, 19:24"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "15/04/2024, 19:24"
	},
	{
		device_id: "solarpanel_1",
		value: "606Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 19:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 19:24"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "15/04/2024, 19:19"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "15/04/2024, 19:19"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "15/04/2024, 19:19"
	},
	{
		device_id: "solarpanel_1",
		value: "562Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 19:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 19:19"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "15/04/2024, 19:14"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "15/04/2024, 19:14"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "15/04/2024, 19:14"
	},
	{
		device_id: "solarpanel_1",
		value: "54Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 19:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 19:14"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "15/04/2024, 19:09"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "15/04/2024, 19:09"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "15/04/2024, 19:09"
	},
	{
		device_id: "solarpanel_1",
		value: "999Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 19:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 19:09"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "15/04/2024, 19:04"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "15/04/2024, 19:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "15/04/2024, 19:04"
	},
	{
		device_id: "solarpanel_1",
		value: "134Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 19:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "15/04/2024, 19:04"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "15/04/2024, 18:59"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "15/04/2024, 18:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "15/04/2024, 18:59"
	},
	{
		device_id: "solarpanel_1",
		value: "882Lux",
		type: "Sun Intensity",
		timestamp: "15/04/2024, 18:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "15/04/2024, 18:59"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "14/04/2024, 18:54"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "14/04/2024, 18:54"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 18:54"
	},
	{
		device_id: "solarpanel_1",
		value: "924Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 18:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 18:54"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "14/04/2024, 18:49"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "14/04/2024, 18:49"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 18:49"
	},
	{
		device_id: "solarpanel_1",
		value: "391Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 18:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 18:49"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "14/04/2024, 18:44"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "14/04/2024, 18:44"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 18:44"
	},
	{
		device_id: "solarpanel_1",
		value: "896Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 18:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 18:44"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "14/04/2024, 18:39"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "14/04/2024, 18:39"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "14/04/2024, 18:39"
	},
	{
		device_id: "solarpanel_1",
		value: "484Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 18:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 18:39"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "14/04/2024, 18:34"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "14/04/2024, 18:34"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "14/04/2024, 18:34"
	},
	{
		device_id: "solarpanel_1",
		value: "90Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 18:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 18:34"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "14/04/2024, 18:29"
	},
	{
		device_id: "temp_1",
		value: "10°C",
		type: "temperature",
		timestamp: "14/04/2024, 18:29"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "14/04/2024, 18:29"
	},
	{
		device_id: "solarpanel_1",
		value: "786Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 18:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 18:29"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "14/04/2024, 18:24"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "14/04/2024, 18:24"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 18:24"
	},
	{
		device_id: "solarpanel_1",
		value: "173Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 18:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 18:24"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "14/04/2024, 18:19"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "14/04/2024, 18:19"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "14/04/2024, 18:19"
	},
	{
		device_id: "solarpanel_1",
		value: "276Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 18:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 18:19"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "14/04/2024, 18:14"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "14/04/2024, 18:14"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 18:14"
	},
	{
		device_id: "solarpanel_1",
		value: "323Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 18:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 18:14"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "14/04/2024, 18:09"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "14/04/2024, 18:09"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 18:09"
	},
	{
		device_id: "solarpanel_1",
		value: "69Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 18:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 18:09"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "14/04/2024, 18:04"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "14/04/2024, 18:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 18:04"
	},
	{
		device_id: "solarpanel_1",
		value: "534Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 18:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 18:04"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "14/04/2024, 17:59"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "14/04/2024, 17:59"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 17:59"
	},
	{
		device_id: "solarpanel_1",
		value: "75Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 17:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 17:59"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "14/04/2024, 17:54"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "14/04/2024, 17:54"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 17:54"
	},
	{
		device_id: "solarpanel_1",
		value: "142Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 17:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 17:54"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "14/04/2024, 17:49"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "14/04/2024, 17:49"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 17:49"
	},
	{
		device_id: "solarpanel_1",
		value: "994Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 17:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 17:49"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "14/04/2024, 17:44"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "14/04/2024, 17:44"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 17:44"
	},
	{
		device_id: "solarpanel_1",
		value: "17Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 17:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 17:44"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "14/04/2024, 17:39"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "14/04/2024, 17:39"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "14/04/2024, 17:39"
	},
	{
		device_id: "solarpanel_1",
		value: "823Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 17:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 17:39"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "14/04/2024, 17:34"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "14/04/2024, 17:34"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 17:34"
	},
	{
		device_id: "solarpanel_1",
		value: "104Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 17:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 17:34"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "14/04/2024, 17:29"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "14/04/2024, 17:29"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 17:29"
	},
	{
		device_id: "solarpanel_1",
		value: "70Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 17:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 17:29"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "14/04/2024, 17:24"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "14/04/2024, 17:24"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 17:24"
	},
	{
		device_id: "solarpanel_1",
		value: "454Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 17:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 17:24"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "14/04/2024, 17:19"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "14/04/2024, 17:19"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "14/04/2024, 17:19"
	},
	{
		device_id: "solarpanel_1",
		value: "646Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 17:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 17:19"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "14/04/2024, 17:14"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "14/04/2024, 17:14"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "14/04/2024, 17:14"
	},
	{
		device_id: "solarpanel_1",
		value: "965Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 17:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 17:14"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "14/04/2024, 17:09"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "14/04/2024, 17:09"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "14/04/2024, 17:09"
	},
	{
		device_id: "solarpanel_1",
		value: "149Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 17:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 17:09"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "14/04/2024, 17:04"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "14/04/2024, 17:04"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 17:04"
	},
	{
		device_id: "solarpanel_1",
		value: "40Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 17:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 17:04"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "14/04/2024, 16:59"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "14/04/2024, 16:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 16:59"
	},
	{
		device_id: "solarpanel_1",
		value: "904Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 16:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 16:59"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "14/04/2024, 16:54"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "14/04/2024, 16:54"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "14/04/2024, 16:54"
	},
	{
		device_id: "solarpanel_1",
		value: "541Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 16:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 16:54"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "14/04/2024, 16:49"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "14/04/2024, 16:49"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 16:49"
	},
	{
		device_id: "solarpanel_1",
		value: "585Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 16:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 16:49"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "14/04/2024, 16:44"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "14/04/2024, 16:44"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 16:44"
	},
	{
		device_id: "solarpanel_1",
		value: "136Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 16:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 16:44"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "14/04/2024, 16:39"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "14/04/2024, 16:39"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "14/04/2024, 16:39"
	},
	{
		device_id: "solarpanel_1",
		value: "989Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 16:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 16:39"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "14/04/2024, 16:34"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "14/04/2024, 16:34"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 16:34"
	},
	{
		device_id: "solarpanel_1",
		value: "393Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 16:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 16:34"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "14/04/2024, 16:29"
	},
	{
		device_id: "temp_1",
		value: "28°C",
		type: "temperature",
		timestamp: "14/04/2024, 16:29"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "14/04/2024, 16:29"
	},
	{
		device_id: "solarpanel_1",
		value: "620Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 16:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 16:29"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "14/04/2024, 16:24"
	},
	{
		device_id: "temp_1",
		value: "53°C",
		type: "temperature",
		timestamp: "14/04/2024, 16:24"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "14/04/2024, 16:24"
	},
	{
		device_id: "solarpanel_1",
		value: "764Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 16:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 16:24"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "14/04/2024, 16:19"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "14/04/2024, 16:19"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 16:19"
	},
	{
		device_id: "solarpanel_1",
		value: "483Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 16:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 16:19"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "14/04/2024, 16:14"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "14/04/2024, 16:14"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 16:14"
	},
	{
		device_id: "solarpanel_1",
		value: "359Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 16:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 16:14"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "14/04/2024, 16:09"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "14/04/2024, 16:09"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "14/04/2024, 16:09"
	},
	{
		device_id: "solarpanel_1",
		value: "49Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 16:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 16:09"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "14/04/2024, 16:04"
	},
	{
		device_id: "temp_1",
		value: "8°C",
		type: "temperature",
		timestamp: "14/04/2024, 16:04"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 16:04"
	},
	{
		device_id: "solarpanel_1",
		value: "294Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 16:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 16:04"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "14/04/2024, 15:59"
	},
	{
		device_id: "temp_1",
		value: "25°C",
		type: "temperature",
		timestamp: "14/04/2024, 15:59"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "14/04/2024, 15:59"
	},
	{
		device_id: "solarpanel_1",
		value: "654Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 15:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 15:59"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "14/04/2024, 15:54"
	},
	{
		device_id: "temp_1",
		value: "8°C",
		type: "temperature",
		timestamp: "14/04/2024, 15:54"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 15:54"
	},
	{
		device_id: "solarpanel_1",
		value: "286Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 15:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 15:54"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "14/04/2024, 15:49"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "14/04/2024, 15:49"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 15:49"
	},
	{
		device_id: "solarpanel_1",
		value: "335Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 15:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 15:49"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "14/04/2024, 15:44"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "14/04/2024, 15:44"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "14/04/2024, 15:44"
	},
	{
		device_id: "solarpanel_1",
		value: "324Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 15:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 15:44"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "14/04/2024, 15:39"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "14/04/2024, 15:39"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "14/04/2024, 15:39"
	},
	{
		device_id: "solarpanel_1",
		value: "586Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 15:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 15:39"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "14/04/2024, 15:34"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "14/04/2024, 15:34"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 15:34"
	},
	{
		device_id: "solarpanel_1",
		value: "348Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 15:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 15:34"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "14/04/2024, 15:29"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "14/04/2024, 15:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 15:29"
	},
	{
		device_id: "solarpanel_1",
		value: "49Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 15:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 15:29"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "14/04/2024, 15:24"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "14/04/2024, 15:24"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "14/04/2024, 15:24"
	},
	{
		device_id: "solarpanel_1",
		value: "946Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 15:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 15:24"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "14/04/2024, 15:19"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "14/04/2024, 15:19"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "14/04/2024, 15:19"
	},
	{
		device_id: "solarpanel_1",
		value: "56Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 15:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 15:19"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "14/04/2024, 15:14"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "14/04/2024, 15:14"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 15:14"
	},
	{
		device_id: "solarpanel_1",
		value: "285Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 15:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 15:14"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "14/04/2024, 15:09"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "14/04/2024, 15:09"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 15:09"
	},
	{
		device_id: "solarpanel_1",
		value: "902Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 15:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 15:09"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "14/04/2024, 15:04"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "14/04/2024, 15:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 15:04"
	},
	{
		device_id: "solarpanel_1",
		value: "296Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 15:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 15:04"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "14/04/2024, 14:59"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "14/04/2024, 14:59"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 14:59"
	},
	{
		device_id: "solarpanel_1",
		value: "306Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 14:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 14:59"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "14/04/2024, 14:54"
	},
	{
		device_id: "temp_1",
		value: "20°C",
		type: "temperature",
		timestamp: "14/04/2024, 14:54"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 14:54"
	},
	{
		device_id: "solarpanel_1",
		value: "826Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 14:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 14:54"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "14/04/2024, 14:49"
	},
	{
		device_id: "temp_1",
		value: "53°C",
		type: "temperature",
		timestamp: "14/04/2024, 14:49"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 14:49"
	},
	{
		device_id: "solarpanel_1",
		value: "118Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 14:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 14:49"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "14/04/2024, 14:44"
	},
	{
		device_id: "temp_1",
		value: "10°C",
		type: "temperature",
		timestamp: "14/04/2024, 14:44"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "14/04/2024, 14:44"
	},
	{
		device_id: "solarpanel_1",
		value: "256Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 14:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 14:44"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "14/04/2024, 14:39"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "14/04/2024, 14:39"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 14:39"
	},
	{
		device_id: "solarpanel_1",
		value: "688Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 14:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 14:39"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "14/04/2024, 14:34"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "14/04/2024, 14:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "14/04/2024, 14:34"
	},
	{
		device_id: "solarpanel_1",
		value: "725Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 14:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 14:34"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "14/04/2024, 14:29"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "14/04/2024, 14:29"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "14/04/2024, 14:29"
	},
	{
		device_id: "solarpanel_1",
		value: "519Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 14:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 14:29"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "14/04/2024, 14:24"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "14/04/2024, 14:24"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 14:24"
	},
	{
		device_id: "solarpanel_1",
		value: "529Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 14:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 14:24"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "14/04/2024, 14:19"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "14/04/2024, 14:19"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "14/04/2024, 14:19"
	},
	{
		device_id: "solarpanel_1",
		value: "883Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 14:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 14:19"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "14/04/2024, 14:14"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "14/04/2024, 14:14"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "14/04/2024, 14:14"
	},
	{
		device_id: "solarpanel_1",
		value: "692Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 14:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 14:14"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "14/04/2024, 14:09"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "14/04/2024, 14:09"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 14:09"
	},
	{
		device_id: "solarpanel_1",
		value: "355Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 14:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 14:09"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "14/04/2024, 14:04"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "14/04/2024, 14:04"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "14/04/2024, 14:04"
	},
	{
		device_id: "solarpanel_1",
		value: "997Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 14:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 14:04"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "14/04/2024, 13:59"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "14/04/2024, 13:59"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 13:59"
	},
	{
		device_id: "solarpanel_1",
		value: "700Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 13:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 13:59"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "14/04/2024, 13:54"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "14/04/2024, 13:54"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "14/04/2024, 13:54"
	},
	{
		device_id: "solarpanel_1",
		value: "898Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 13:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 13:54"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "14/04/2024, 13:49"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "14/04/2024, 13:49"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 13:49"
	},
	{
		device_id: "solarpanel_1",
		value: "919Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 13:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 13:49"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "14/04/2024, 13:44"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "14/04/2024, 13:44"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "14/04/2024, 13:44"
	},
	{
		device_id: "solarpanel_1",
		value: "243Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 13:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 13:44"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "14/04/2024, 13:39"
	},
	{
		device_id: "temp_1",
		value: "76°C",
		type: "temperature",
		timestamp: "14/04/2024, 13:39"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "14/04/2024, 13:39"
	},
	{
		device_id: "solarpanel_1",
		value: "651Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 13:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 13:39"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "14/04/2024, 13:34"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "14/04/2024, 13:34"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "14/04/2024, 13:34"
	},
	{
		device_id: "solarpanel_1",
		value: "734Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 13:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 13:34"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "14/04/2024, 13:29"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "14/04/2024, 13:29"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 13:29"
	},
	{
		device_id: "solarpanel_1",
		value: "147Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 13:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 13:29"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "14/04/2024, 13:24"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "14/04/2024, 13:24"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 13:24"
	},
	{
		device_id: "solarpanel_1",
		value: "582Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 13:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 13:24"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "14/04/2024, 13:19"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "14/04/2024, 13:19"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "14/04/2024, 13:19"
	},
	{
		device_id: "solarpanel_1",
		value: "996Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 13:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 13:19"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "14/04/2024, 13:14"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "14/04/2024, 13:14"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 13:14"
	},
	{
		device_id: "solarpanel_1",
		value: "621Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 13:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 13:14"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "14/04/2024, 13:09"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "14/04/2024, 13:09"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 13:09"
	},
	{
		device_id: "solarpanel_1",
		value: "649Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 13:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 13:09"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "14/04/2024, 13:04"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "14/04/2024, 13:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 13:04"
	},
	{
		device_id: "solarpanel_1",
		value: "838Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 13:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 13:04"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "14/04/2024, 12:59"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "14/04/2024, 12:59"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 12:59"
	},
	{
		device_id: "solarpanel_1",
		value: "550Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 12:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 12:59"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "14/04/2024, 12:54"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "14/04/2024, 12:54"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 12:54"
	},
	{
		device_id: "solarpanel_1",
		value: "129Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 12:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 12:54"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "14/04/2024, 12:49"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "14/04/2024, 12:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "14/04/2024, 12:49"
	},
	{
		device_id: "solarpanel_1",
		value: "514Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 12:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 12:49"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "14/04/2024, 12:44"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "14/04/2024, 12:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 12:44"
	},
	{
		device_id: "solarpanel_1",
		value: "942Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 12:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 12:44"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "14/04/2024, 12:39"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "14/04/2024, 12:39"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "14/04/2024, 12:39"
	},
	{
		device_id: "solarpanel_1",
		value: "536Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 12:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 12:39"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "14/04/2024, 12:34"
	},
	{
		device_id: "temp_1",
		value: "31°C",
		type: "temperature",
		timestamp: "14/04/2024, 12:34"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 12:34"
	},
	{
		device_id: "solarpanel_1",
		value: "420Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 12:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 12:34"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "14/04/2024, 12:29"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "14/04/2024, 12:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 12:29"
	},
	{
		device_id: "solarpanel_1",
		value: "587Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 12:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 12:29"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "14/04/2024, 12:24"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "14/04/2024, 12:24"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "14/04/2024, 12:24"
	},
	{
		device_id: "solarpanel_1",
		value: "123Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 12:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 12:24"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "14/04/2024, 12:19"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "14/04/2024, 12:19"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 12:19"
	},
	{
		device_id: "solarpanel_1",
		value: "891Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 12:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 12:19"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "14/04/2024, 12:14"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "14/04/2024, 12:14"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 12:14"
	},
	{
		device_id: "solarpanel_1",
		value: "314Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 12:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 12:14"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "14/04/2024, 12:09"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "14/04/2024, 12:09"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "14/04/2024, 12:09"
	},
	{
		device_id: "solarpanel_1",
		value: "774Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 12:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 12:09"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "14/04/2024, 12:04"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "14/04/2024, 12:04"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "14/04/2024, 12:04"
	},
	{
		device_id: "solarpanel_1",
		value: "133Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 12:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 12:04"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "14/04/2024, 11:59"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "14/04/2024, 11:59"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "14/04/2024, 11:59"
	},
	{
		device_id: "solarpanel_1",
		value: "952Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 11:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 11:59"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "14/04/2024, 11:54"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "14/04/2024, 11:54"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 11:54"
	},
	{
		device_id: "solarpanel_1",
		value: "956Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 11:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 11:54"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "14/04/2024, 11:49"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "14/04/2024, 11:49"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 11:49"
	},
	{
		device_id: "solarpanel_1",
		value: "320Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 11:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 11:49"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "14/04/2024, 11:44"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "14/04/2024, 11:44"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "14/04/2024, 11:44"
	},
	{
		device_id: "solarpanel_1",
		value: "408Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 11:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 11:44"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "14/04/2024, 11:39"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "14/04/2024, 11:39"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 11:39"
	},
	{
		device_id: "solarpanel_1",
		value: "314Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 11:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 11:39"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "14/04/2024, 11:34"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "14/04/2024, 11:34"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "14/04/2024, 11:34"
	},
	{
		device_id: "solarpanel_1",
		value: "291Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 11:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 11:34"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "14/04/2024, 11:29"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "14/04/2024, 11:29"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "14/04/2024, 11:29"
	},
	{
		device_id: "solarpanel_1",
		value: "751Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 11:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 11:29"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "14/04/2024, 11:24"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "14/04/2024, 11:24"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 11:24"
	},
	{
		device_id: "solarpanel_1",
		value: "437Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 11:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 11:24"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "14/04/2024, 11:19"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "14/04/2024, 11:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "14/04/2024, 11:19"
	},
	{
		device_id: "solarpanel_1",
		value: "601Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 11:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 11:19"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "14/04/2024, 11:14"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "14/04/2024, 11:14"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 11:14"
	},
	{
		device_id: "solarpanel_1",
		value: "353Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 11:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 11:14"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "14/04/2024, 11:09"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "14/04/2024, 11:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "14/04/2024, 11:09"
	},
	{
		device_id: "solarpanel_1",
		value: "410Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 11:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 11:09"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "14/04/2024, 11:04"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "14/04/2024, 11:04"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 11:04"
	},
	{
		device_id: "solarpanel_1",
		value: "853Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 11:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 11:04"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "14/04/2024, 10:59"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "14/04/2024, 10:59"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "14/04/2024, 10:59"
	},
	{
		device_id: "solarpanel_1",
		value: "256Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 10:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 10:59"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "14/04/2024, 10:54"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "14/04/2024, 10:54"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 10:54"
	},
	{
		device_id: "solarpanel_1",
		value: "519Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 10:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 10:54"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "14/04/2024, 10:49"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "14/04/2024, 10:49"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 10:49"
	},
	{
		device_id: "solarpanel_1",
		value: "626Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 10:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 10:49"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "14/04/2024, 10:44"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "14/04/2024, 10:44"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 10:44"
	},
	{
		device_id: "solarpanel_1",
		value: "767Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 10:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 10:44"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "14/04/2024, 10:39"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "14/04/2024, 10:39"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "14/04/2024, 10:39"
	},
	{
		device_id: "solarpanel_1",
		value: "279Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 10:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 10:39"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "14/04/2024, 10:34"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "14/04/2024, 10:34"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "14/04/2024, 10:34"
	},
	{
		device_id: "solarpanel_1",
		value: "160Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 10:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 10:34"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "14/04/2024, 10:29"
	},
	{
		device_id: "temp_1",
		value: "10°C",
		type: "temperature",
		timestamp: "14/04/2024, 10:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 10:29"
	},
	{
		device_id: "solarpanel_1",
		value: "330Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 10:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 10:29"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "14/04/2024, 10:24"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "14/04/2024, 10:24"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 10:24"
	},
	{
		device_id: "solarpanel_1",
		value: "865Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 10:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 10:24"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "14/04/2024, 10:19"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "14/04/2024, 10:19"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 10:19"
	},
	{
		device_id: "solarpanel_1",
		value: "17Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 10:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 10:19"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "14/04/2024, 10:14"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "14/04/2024, 10:14"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 10:14"
	},
	{
		device_id: "solarpanel_1",
		value: "464Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 10:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 10:14"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "14/04/2024, 10:09"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "14/04/2024, 10:09"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "14/04/2024, 10:09"
	},
	{
		device_id: "solarpanel_1",
		value: "994Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 10:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 10:09"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "14/04/2024, 10:04"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "14/04/2024, 10:04"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 10:04"
	},
	{
		device_id: "solarpanel_1",
		value: "921Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 10:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 10:04"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "14/04/2024, 09:59"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "14/04/2024, 09:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 09:59"
	},
	{
		device_id: "solarpanel_1",
		value: "92Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 09:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 09:59"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "14/04/2024, 09:54"
	},
	{
		device_id: "temp_1",
		value: "20°C",
		type: "temperature",
		timestamp: "14/04/2024, 09:54"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 09:54"
	},
	{
		device_id: "solarpanel_1",
		value: "544Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 09:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 09:54"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "14/04/2024, 09:49"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "14/04/2024, 09:49"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "14/04/2024, 09:49"
	},
	{
		device_id: "solarpanel_1",
		value: "378Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 09:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 09:49"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "14/04/2024, 09:44"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "14/04/2024, 09:44"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 09:44"
	},
	{
		device_id: "solarpanel_1",
		value: "126Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 09:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 09:44"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "14/04/2024, 09:39"
	},
	{
		device_id: "temp_1",
		value: "26°C",
		type: "temperature",
		timestamp: "14/04/2024, 09:39"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 09:39"
	},
	{
		device_id: "solarpanel_1",
		value: "655Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 09:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 09:39"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "14/04/2024, 09:34"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "14/04/2024, 09:34"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 09:34"
	},
	{
		device_id: "solarpanel_1",
		value: "911Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 09:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 09:34"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "14/04/2024, 09:29"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "14/04/2024, 09:29"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 09:29"
	},
	{
		device_id: "solarpanel_1",
		value: "52Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 09:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 09:29"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "14/04/2024, 09:24"
	},
	{
		device_id: "temp_1",
		value: "53°C",
		type: "temperature",
		timestamp: "14/04/2024, 09:24"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "14/04/2024, 09:24"
	},
	{
		device_id: "solarpanel_1",
		value: "777Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 09:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 09:24"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "14/04/2024, 09:19"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "14/04/2024, 09:19"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "14/04/2024, 09:19"
	},
	{
		device_id: "solarpanel_1",
		value: "385Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 09:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 09:19"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "14/04/2024, 09:14"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "14/04/2024, 09:14"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "14/04/2024, 09:14"
	},
	{
		device_id: "solarpanel_1",
		value: "141Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 09:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 09:14"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "14/04/2024, 09:09"
	},
	{
		device_id: "temp_1",
		value: "26°C",
		type: "temperature",
		timestamp: "14/04/2024, 09:09"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 09:09"
	},
	{
		device_id: "solarpanel_1",
		value: "956Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 09:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 09:09"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "14/04/2024, 09:04"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "14/04/2024, 09:04"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "14/04/2024, 09:04"
	},
	{
		device_id: "solarpanel_1",
		value: "81Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 09:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 09:04"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "14/04/2024, 08:59"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "14/04/2024, 08:59"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "14/04/2024, 08:59"
	},
	{
		device_id: "solarpanel_1",
		value: "728Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 08:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 08:59"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "14/04/2024, 08:54"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "14/04/2024, 08:54"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 08:54"
	},
	{
		device_id: "solarpanel_1",
		value: "716Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 08:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 08:54"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "14/04/2024, 08:49"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "14/04/2024, 08:49"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 08:49"
	},
	{
		device_id: "solarpanel_1",
		value: "81Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 08:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 08:49"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "14/04/2024, 08:44"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "14/04/2024, 08:44"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 08:44"
	},
	{
		device_id: "solarpanel_1",
		value: "393Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 08:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 08:44"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "14/04/2024, 08:39"
	},
	{
		device_id: "temp_1",
		value: "16°C",
		type: "temperature",
		timestamp: "14/04/2024, 08:39"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 08:39"
	},
	{
		device_id: "solarpanel_1",
		value: "492Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 08:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 08:39"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "14/04/2024, 08:34"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "14/04/2024, 08:34"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 08:34"
	},
	{
		device_id: "solarpanel_1",
		value: "651Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 08:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 08:34"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "14/04/2024, 08:29"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "14/04/2024, 08:29"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 08:29"
	},
	{
		device_id: "solarpanel_1",
		value: "206Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 08:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 08:29"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "14/04/2024, 08:24"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "14/04/2024, 08:24"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 08:24"
	},
	{
		device_id: "solarpanel_1",
		value: "978Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 08:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 08:24"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "14/04/2024, 08:19"
	},
	{
		device_id: "temp_1",
		value: "16°C",
		type: "temperature",
		timestamp: "14/04/2024, 08:19"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 08:19"
	},
	{
		device_id: "solarpanel_1",
		value: "212Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 08:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 08:19"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "14/04/2024, 08:14"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "14/04/2024, 08:14"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "14/04/2024, 08:14"
	},
	{
		device_id: "solarpanel_1",
		value: "364Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 08:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 08:14"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "14/04/2024, 08:09"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "14/04/2024, 08:09"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "14/04/2024, 08:09"
	},
	{
		device_id: "solarpanel_1",
		value: "756Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 08:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 08:09"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "14/04/2024, 08:04"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "14/04/2024, 08:04"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "14/04/2024, 08:04"
	},
	{
		device_id: "solarpanel_1",
		value: "673Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 08:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 08:04"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "14/04/2024, 07:59"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "14/04/2024, 07:59"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "14/04/2024, 07:59"
	},
	{
		device_id: "solarpanel_1",
		value: "168Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 07:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 07:59"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "14/04/2024, 07:54"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "14/04/2024, 07:54"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 07:54"
	},
	{
		device_id: "solarpanel_1",
		value: "589Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 07:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 07:54"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "14/04/2024, 07:49"
	},
	{
		device_id: "temp_1",
		value: "25°C",
		type: "temperature",
		timestamp: "14/04/2024, 07:49"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 07:49"
	},
	{
		device_id: "solarpanel_1",
		value: "538Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 07:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 07:49"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "14/04/2024, 07:44"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "14/04/2024, 07:44"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "14/04/2024, 07:44"
	},
	{
		device_id: "solarpanel_1",
		value: "127Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 07:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 07:44"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "14/04/2024, 07:39"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "14/04/2024, 07:39"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "14/04/2024, 07:39"
	},
	{
		device_id: "solarpanel_1",
		value: "627Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 07:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 07:39"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "14/04/2024, 07:34"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "14/04/2024, 07:34"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 07:34"
	},
	{
		device_id: "solarpanel_1",
		value: "991Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 07:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 07:34"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "14/04/2024, 07:29"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "14/04/2024, 07:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 07:29"
	},
	{
		device_id: "solarpanel_1",
		value: "511Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 07:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 07:29"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "14/04/2024, 07:24"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "14/04/2024, 07:24"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 07:24"
	},
	{
		device_id: "solarpanel_1",
		value: "499Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 07:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 07:24"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "14/04/2024, 07:19"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "14/04/2024, 07:19"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 07:19"
	},
	{
		device_id: "solarpanel_1",
		value: "752Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 07:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 07:19"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "14/04/2024, 07:14"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "14/04/2024, 07:14"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 07:14"
	},
	{
		device_id: "solarpanel_1",
		value: "822Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 07:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 07:14"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "14/04/2024, 07:09"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "14/04/2024, 07:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "14/04/2024, 07:09"
	},
	{
		device_id: "solarpanel_1",
		value: "325Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 07:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 07:09"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "14/04/2024, 07:04"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "14/04/2024, 07:04"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 07:04"
	},
	{
		device_id: "solarpanel_1",
		value: "329Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 07:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 07:04"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "14/04/2024, 06:59"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "14/04/2024, 06:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 06:59"
	},
	{
		device_id: "solarpanel_1",
		value: "623Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 06:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 06:59"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "14/04/2024, 06:54"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "14/04/2024, 06:54"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 06:54"
	},
	{
		device_id: "solarpanel_1",
		value: "106Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 06:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 06:54"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "14/04/2024, 06:49"
	},
	{
		device_id: "temp_1",
		value: "31°C",
		type: "temperature",
		timestamp: "14/04/2024, 06:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "14/04/2024, 06:49"
	},
	{
		device_id: "solarpanel_1",
		value: "995Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 06:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 06:49"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "14/04/2024, 06:44"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "14/04/2024, 06:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 06:44"
	},
	{
		device_id: "solarpanel_1",
		value: "64Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 06:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 06:44"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "14/04/2024, 06:39"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "14/04/2024, 06:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 06:39"
	},
	{
		device_id: "solarpanel_1",
		value: "957Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 06:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 06:39"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "14/04/2024, 06:34"
	},
	{
		device_id: "temp_1",
		value: "12°C",
		type: "temperature",
		timestamp: "14/04/2024, 06:34"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 06:34"
	},
	{
		device_id: "solarpanel_1",
		value: "836Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 06:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 06:34"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "14/04/2024, 06:29"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "14/04/2024, 06:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 06:29"
	},
	{
		device_id: "solarpanel_1",
		value: "437Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 06:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 06:29"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "14/04/2024, 06:24"
	},
	{
		device_id: "temp_1",
		value: "40°C",
		type: "temperature",
		timestamp: "14/04/2024, 06:24"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 06:24"
	},
	{
		device_id: "solarpanel_1",
		value: "189Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 06:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 06:24"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "14/04/2024, 06:19"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "14/04/2024, 06:19"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 06:19"
	},
	{
		device_id: "solarpanel_1",
		value: "727Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 06:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 06:19"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "14/04/2024, 06:14"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "14/04/2024, 06:14"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "14/04/2024, 06:14"
	},
	{
		device_id: "solarpanel_1",
		value: "693Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 06:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 06:14"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "14/04/2024, 06:09"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "14/04/2024, 06:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "14/04/2024, 06:09"
	},
	{
		device_id: "solarpanel_1",
		value: "984Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 06:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 06:09"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "14/04/2024, 06:04"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "14/04/2024, 06:04"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 06:04"
	},
	{
		device_id: "solarpanel_1",
		value: "108Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 06:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 06:04"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "14/04/2024, 05:59"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "14/04/2024, 05:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 05:59"
	},
	{
		device_id: "solarpanel_1",
		value: "765Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 05:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 05:59"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "14/04/2024, 05:54"
	},
	{
		device_id: "temp_1",
		value: "78°C",
		type: "temperature",
		timestamp: "14/04/2024, 05:54"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 05:54"
	},
	{
		device_id: "solarpanel_1",
		value: "135Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 05:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 05:54"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "14/04/2024, 05:49"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "14/04/2024, 05:49"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 05:49"
	},
	{
		device_id: "solarpanel_1",
		value: "898Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 05:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 05:49"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "14/04/2024, 05:44"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "14/04/2024, 05:44"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "14/04/2024, 05:44"
	},
	{
		device_id: "solarpanel_1",
		value: "463Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 05:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 05:44"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "14/04/2024, 05:39"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "14/04/2024, 05:39"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 05:39"
	},
	{
		device_id: "solarpanel_1",
		value: "882Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 05:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 05:39"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "14/04/2024, 05:34"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "14/04/2024, 05:34"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 05:34"
	},
	{
		device_id: "solarpanel_1",
		value: "102Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 05:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 05:34"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "14/04/2024, 05:29"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "14/04/2024, 05:29"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 05:29"
	},
	{
		device_id: "solarpanel_1",
		value: "222Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 05:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 05:29"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "14/04/2024, 05:24"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "14/04/2024, 05:24"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "14/04/2024, 05:24"
	},
	{
		device_id: "solarpanel_1",
		value: "880Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 05:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 05:24"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "14/04/2024, 05:19"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "14/04/2024, 05:19"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 05:19"
	},
	{
		device_id: "solarpanel_1",
		value: "537Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 05:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 05:19"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "14/04/2024, 05:14"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "14/04/2024, 05:14"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "14/04/2024, 05:14"
	},
	{
		device_id: "solarpanel_1",
		value: "521Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 05:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 05:14"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "14/04/2024, 05:09"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "14/04/2024, 05:09"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 05:09"
	},
	{
		device_id: "solarpanel_1",
		value: "996Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 05:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 05:09"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "14/04/2024, 05:04"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "14/04/2024, 05:04"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 05:04"
	},
	{
		device_id: "solarpanel_1",
		value: "367Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 05:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 05:04"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "14/04/2024, 04:59"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "14/04/2024, 04:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 04:59"
	},
	{
		device_id: "solarpanel_1",
		value: "230Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 04:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 04:59"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "14/04/2024, 04:54"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "14/04/2024, 04:54"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 04:54"
	},
	{
		device_id: "solarpanel_1",
		value: "1Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 04:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 04:54"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "14/04/2024, 04:49"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "14/04/2024, 04:49"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "14/04/2024, 04:49"
	},
	{
		device_id: "solarpanel_1",
		value: "796Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 04:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 04:49"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "14/04/2024, 04:44"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "14/04/2024, 04:44"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "14/04/2024, 04:44"
	},
	{
		device_id: "solarpanel_1",
		value: "796Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 04:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 04:44"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "14/04/2024, 04:39"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "14/04/2024, 04:39"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "14/04/2024, 04:39"
	},
	{
		device_id: "solarpanel_1",
		value: "838Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 04:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 04:39"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "14/04/2024, 04:34"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "14/04/2024, 04:34"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "14/04/2024, 04:34"
	},
	{
		device_id: "solarpanel_1",
		value: "461Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 04:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 04:34"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "14/04/2024, 04:29"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "14/04/2024, 04:29"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "14/04/2024, 04:29"
	},
	{
		device_id: "solarpanel_1",
		value: "786Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 04:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 04:29"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "14/04/2024, 04:24"
	},
	{
		device_id: "temp_1",
		value: "53°C",
		type: "temperature",
		timestamp: "14/04/2024, 04:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 04:24"
	},
	{
		device_id: "solarpanel_1",
		value: "133Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 04:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 04:24"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "14/04/2024, 04:19"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "14/04/2024, 04:19"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "14/04/2024, 04:19"
	},
	{
		device_id: "solarpanel_1",
		value: "744Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 04:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 04:19"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "14/04/2024, 04:14"
	},
	{
		device_id: "temp_1",
		value: "8°C",
		type: "temperature",
		timestamp: "14/04/2024, 04:14"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "14/04/2024, 04:14"
	},
	{
		device_id: "solarpanel_1",
		value: "590Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 04:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 04:14"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "14/04/2024, 04:09"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "14/04/2024, 04:09"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "14/04/2024, 04:09"
	},
	{
		device_id: "solarpanel_1",
		value: "877Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 04:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 04:09"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "14/04/2024, 04:04"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "14/04/2024, 04:04"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 04:04"
	},
	{
		device_id: "solarpanel_1",
		value: "975Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 04:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 04:04"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "14/04/2024, 03:59"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "14/04/2024, 03:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 03:59"
	},
	{
		device_id: "solarpanel_1",
		value: "255Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 03:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 03:59"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "14/04/2024, 03:54"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "14/04/2024, 03:54"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 03:54"
	},
	{
		device_id: "solarpanel_1",
		value: "474Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 03:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 03:54"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "14/04/2024, 03:49"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "14/04/2024, 03:49"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 03:49"
	},
	{
		device_id: "solarpanel_1",
		value: "126Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 03:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 03:49"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "14/04/2024, 03:44"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "14/04/2024, 03:44"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 03:44"
	},
	{
		device_id: "solarpanel_1",
		value: "282Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 03:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 03:44"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "14/04/2024, 03:39"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "14/04/2024, 03:39"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "14/04/2024, 03:39"
	},
	{
		device_id: "solarpanel_1",
		value: "798Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 03:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 03:39"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "14/04/2024, 03:34"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "14/04/2024, 03:34"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "14/04/2024, 03:34"
	},
	{
		device_id: "solarpanel_1",
		value: "614Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 03:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 03:34"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "14/04/2024, 03:29"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "14/04/2024, 03:29"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "14/04/2024, 03:29"
	},
	{
		device_id: "solarpanel_1",
		value: "821Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 03:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 03:29"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "14/04/2024, 03:24"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "14/04/2024, 03:24"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 03:24"
	},
	{
		device_id: "solarpanel_1",
		value: "401Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 03:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 03:24"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "14/04/2024, 03:19"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "14/04/2024, 03:19"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 03:19"
	},
	{
		device_id: "solarpanel_1",
		value: "789Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 03:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 03:19"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "14/04/2024, 03:14"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "14/04/2024, 03:14"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "14/04/2024, 03:14"
	},
	{
		device_id: "solarpanel_1",
		value: "895Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 03:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 03:14"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "14/04/2024, 03:09"
	},
	{
		device_id: "temp_1",
		value: "37°C",
		type: "temperature",
		timestamp: "14/04/2024, 03:09"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "14/04/2024, 03:09"
	},
	{
		device_id: "solarpanel_1",
		value: "869Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 03:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 03:09"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "14/04/2024, 03:04"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "14/04/2024, 03:04"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 03:04"
	},
	{
		device_id: "solarpanel_1",
		value: "789Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 03:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 03:04"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "14/04/2024, 02:59"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "14/04/2024, 02:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 02:59"
	},
	{
		device_id: "solarpanel_1",
		value: "985Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 02:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 02:59"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "14/04/2024, 02:54"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "14/04/2024, 02:54"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "14/04/2024, 02:54"
	},
	{
		device_id: "solarpanel_1",
		value: "920Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 02:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 02:54"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "14/04/2024, 02:49"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "14/04/2024, 02:49"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "14/04/2024, 02:49"
	},
	{
		device_id: "solarpanel_1",
		value: "159Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 02:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 02:49"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "14/04/2024, 02:44"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "14/04/2024, 02:44"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 02:44"
	},
	{
		device_id: "solarpanel_1",
		value: "487Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 02:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 02:44"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "14/04/2024, 02:39"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "14/04/2024, 02:39"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 02:39"
	},
	{
		device_id: "solarpanel_1",
		value: "960Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 02:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 02:39"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "14/04/2024, 02:34"
	},
	{
		device_id: "temp_1",
		value: "8°C",
		type: "temperature",
		timestamp: "14/04/2024, 02:34"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 02:34"
	},
	{
		device_id: "solarpanel_1",
		value: "806Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 02:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 02:34"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "14/04/2024, 02:29"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "14/04/2024, 02:29"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 02:29"
	},
	{
		device_id: "solarpanel_1",
		value: "863Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 02:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 02:29"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "14/04/2024, 02:24"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "14/04/2024, 02:24"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 02:24"
	},
	{
		device_id: "solarpanel_1",
		value: "580Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 02:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 02:24"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "14/04/2024, 02:19"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "14/04/2024, 02:19"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "14/04/2024, 02:19"
	},
	{
		device_id: "solarpanel_1",
		value: "519Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 02:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 02:19"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "14/04/2024, 02:14"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "14/04/2024, 02:14"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "14/04/2024, 02:14"
	},
	{
		device_id: "solarpanel_1",
		value: "23Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 02:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 02:14"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "14/04/2024, 02:09"
	},
	{
		device_id: "temp_1",
		value: "78°C",
		type: "temperature",
		timestamp: "14/04/2024, 02:09"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 02:09"
	},
	{
		device_id: "solarpanel_1",
		value: "138Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 02:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 02:09"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "14/04/2024, 02:04"
	},
	{
		device_id: "temp_1",
		value: "37°C",
		type: "temperature",
		timestamp: "14/04/2024, 02:04"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "14/04/2024, 02:04"
	},
	{
		device_id: "solarpanel_1",
		value: "384Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 02:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 02:04"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "14/04/2024, 01:59"
	},
	{
		device_id: "temp_1",
		value: "20°C",
		type: "temperature",
		timestamp: "14/04/2024, 01:59"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 01:59"
	},
	{
		device_id: "solarpanel_1",
		value: "444Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 01:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 01:59"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "14/04/2024, 01:54"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "14/04/2024, 01:54"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "14/04/2024, 01:54"
	},
	{
		device_id: "solarpanel_1",
		value: "935Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 01:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 01:54"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "14/04/2024, 01:49"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "14/04/2024, 01:49"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 01:49"
	},
	{
		device_id: "solarpanel_1",
		value: "362Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 01:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 01:49"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "14/04/2024, 01:44"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "14/04/2024, 01:44"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 01:44"
	},
	{
		device_id: "solarpanel_1",
		value: "257Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 01:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 01:44"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "14/04/2024, 01:39"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "14/04/2024, 01:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 01:39"
	},
	{
		device_id: "solarpanel_1",
		value: "772Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 01:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 01:39"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "14/04/2024, 01:34"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "14/04/2024, 01:34"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "14/04/2024, 01:34"
	},
	{
		device_id: "solarpanel_1",
		value: "308Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 01:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 01:34"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "14/04/2024, 01:29"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "14/04/2024, 01:29"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "14/04/2024, 01:29"
	},
	{
		device_id: "solarpanel_1",
		value: "628Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 01:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 01:29"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "14/04/2024, 01:24"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "14/04/2024, 01:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 01:24"
	},
	{
		device_id: "solarpanel_1",
		value: "266Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 01:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 01:24"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "14/04/2024, 01:19"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "14/04/2024, 01:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "14/04/2024, 01:19"
	},
	{
		device_id: "solarpanel_1",
		value: "794Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 01:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 01:19"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "14/04/2024, 01:14"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "14/04/2024, 01:14"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "14/04/2024, 01:14"
	},
	{
		device_id: "solarpanel_1",
		value: "938Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 01:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 01:14"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "14/04/2024, 01:09"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "14/04/2024, 01:09"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 01:09"
	},
	{
		device_id: "solarpanel_1",
		value: "211Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 01:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 01:09"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "14/04/2024, 01:04"
	},
	{
		device_id: "temp_1",
		value: "93°C",
		type: "temperature",
		timestamp: "14/04/2024, 01:04"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 01:04"
	},
	{
		device_id: "solarpanel_1",
		value: "867Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 01:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 01:04"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "14/04/2024, 00:59"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "14/04/2024, 00:59"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "14/04/2024, 00:59"
	},
	{
		device_id: "solarpanel_1",
		value: "791Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 00:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 00:59"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "14/04/2024, 00:54"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "14/04/2024, 00:54"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 00:54"
	},
	{
		device_id: "solarpanel_1",
		value: "88Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 00:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 00:54"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "14/04/2024, 00:49"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "14/04/2024, 00:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "14/04/2024, 00:49"
	},
	{
		device_id: "solarpanel_1",
		value: "562Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 00:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 00:49"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "14/04/2024, 00:44"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "14/04/2024, 00:44"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "14/04/2024, 00:44"
	},
	{
		device_id: "solarpanel_1",
		value: "327Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 00:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 00:44"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "14/04/2024, 00:39"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "14/04/2024, 00:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 00:39"
	},
	{
		device_id: "solarpanel_1",
		value: "167Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 00:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 00:39"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "14/04/2024, 00:34"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "14/04/2024, 00:34"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "14/04/2024, 00:34"
	},
	{
		device_id: "solarpanel_1",
		value: "769Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 00:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 00:34"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "14/04/2024, 00:29"
	},
	{
		device_id: "temp_1",
		value: "28°C",
		type: "temperature",
		timestamp: "14/04/2024, 00:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "14/04/2024, 00:29"
	},
	{
		device_id: "solarpanel_1",
		value: "394Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 00:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 00:29"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "14/04/2024, 00:24"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "14/04/2024, 00:24"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 00:24"
	},
	{
		device_id: "solarpanel_1",
		value: "625Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 00:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 00:24"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "14/04/2024, 00:19"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "14/04/2024, 00:19"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "14/04/2024, 00:19"
	},
	{
		device_id: "solarpanel_1",
		value: "556Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 00:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 00:19"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "14/04/2024, 00:14"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "14/04/2024, 00:14"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "14/04/2024, 00:14"
	},
	{
		device_id: "solarpanel_1",
		value: "378Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 00:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 00:14"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "14/04/2024, 00:09"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "14/04/2024, 00:09"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "14/04/2024, 00:09"
	},
	{
		device_id: "solarpanel_1",
		value: "138Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 00:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "14/04/2024, 00:09"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "14/04/2024, 00:04"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "14/04/2024, 00:04"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "14/04/2024, 00:04"
	},
	{
		device_id: "solarpanel_1",
		value: "149Lux",
		type: "Sun Intensity",
		timestamp: "14/04/2024, 00:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "14/04/2024, 00:04"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "13/04/2024, 23:59"
	},
	{
		device_id: "temp_1",
		value: "8°C",
		type: "temperature",
		timestamp: "13/04/2024, 23:59"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "13/04/2024, 23:59"
	},
	{
		device_id: "solarpanel_1",
		value: "702Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 23:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 23:59"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "13/04/2024, 23:54"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "13/04/2024, 23:54"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "13/04/2024, 23:54"
	},
	{
		device_id: "solarpanel_1",
		value: "743Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 23:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 23:54"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "13/04/2024, 23:49"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "13/04/2024, 23:49"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "13/04/2024, 23:49"
	},
	{
		device_id: "solarpanel_1",
		value: "956Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 23:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 23:49"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "13/04/2024, 23:44"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "13/04/2024, 23:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "13/04/2024, 23:44"
	},
	{
		device_id: "solarpanel_1",
		value: "782Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 23:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 23:44"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "13/04/2024, 23:39"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "13/04/2024, 23:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "13/04/2024, 23:39"
	},
	{
		device_id: "solarpanel_1",
		value: "286Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 23:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 23:39"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "13/04/2024, 23:34"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "13/04/2024, 23:34"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "13/04/2024, 23:34"
	},
	{
		device_id: "solarpanel_1",
		value: "841Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 23:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 23:34"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "13/04/2024, 23:29"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "13/04/2024, 23:29"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "13/04/2024, 23:29"
	},
	{
		device_id: "solarpanel_1",
		value: "972Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 23:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 23:29"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "13/04/2024, 23:24"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "13/04/2024, 23:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "13/04/2024, 23:24"
	},
	{
		device_id: "solarpanel_1",
		value: "907Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 23:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 23:24"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "13/04/2024, 23:19"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "13/04/2024, 23:19"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "13/04/2024, 23:19"
	},
	{
		device_id: "solarpanel_1",
		value: "54Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 23:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 23:19"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "13/04/2024, 23:14"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "13/04/2024, 23:14"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "13/04/2024, 23:14"
	},
	{
		device_id: "solarpanel_1",
		value: "185Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 23:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 23:14"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "13/04/2024, 23:09"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "13/04/2024, 23:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "13/04/2024, 23:09"
	},
	{
		device_id: "solarpanel_1",
		value: "225Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 23:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 23:09"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "13/04/2024, 23:04"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "13/04/2024, 23:04"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "13/04/2024, 23:04"
	},
	{
		device_id: "solarpanel_1",
		value: "822Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 23:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 23:04"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "13/04/2024, 22:59"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "13/04/2024, 22:59"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "13/04/2024, 22:59"
	},
	{
		device_id: "solarpanel_1",
		value: "949Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 22:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 22:59"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "13/04/2024, 22:54"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "13/04/2024, 22:54"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "13/04/2024, 22:54"
	},
	{
		device_id: "solarpanel_1",
		value: "176Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 22:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 22:54"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "13/04/2024, 22:49"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "13/04/2024, 22:49"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "13/04/2024, 22:49"
	},
	{
		device_id: "solarpanel_1",
		value: "603Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 22:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 22:49"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "13/04/2024, 22:44"
	},
	{
		device_id: "temp_1",
		value: "10°C",
		type: "temperature",
		timestamp: "13/04/2024, 22:44"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "13/04/2024, 22:44"
	},
	{
		device_id: "solarpanel_1",
		value: "158Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 22:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 22:44"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "13/04/2024, 22:39"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "13/04/2024, 22:39"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "13/04/2024, 22:39"
	},
	{
		device_id: "solarpanel_1",
		value: "680Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 22:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 22:39"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "13/04/2024, 22:34"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "13/04/2024, 22:34"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "13/04/2024, 22:34"
	},
	{
		device_id: "solarpanel_1",
		value: "385Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 22:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 22:34"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "13/04/2024, 22:29"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "13/04/2024, 22:29"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "13/04/2024, 22:29"
	},
	{
		device_id: "solarpanel_1",
		value: "842Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 22:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 22:29"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "13/04/2024, 22:24"
	},
	{
		device_id: "temp_1",
		value: "10°C",
		type: "temperature",
		timestamp: "13/04/2024, 22:24"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "13/04/2024, 22:24"
	},
	{
		device_id: "solarpanel_1",
		value: "265Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 22:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 22:24"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "13/04/2024, 22:19"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "13/04/2024, 22:19"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "13/04/2024, 22:19"
	},
	{
		device_id: "solarpanel_1",
		value: "503Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 22:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 22:19"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "13/04/2024, 22:14"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "13/04/2024, 22:14"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "13/04/2024, 22:14"
	},
	{
		device_id: "solarpanel_1",
		value: "840Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 22:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 22:14"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "13/04/2024, 22:09"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "13/04/2024, 22:09"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "13/04/2024, 22:09"
	},
	{
		device_id: "solarpanel_1",
		value: "520Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 22:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 22:09"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "13/04/2024, 22:04"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "13/04/2024, 22:04"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "13/04/2024, 22:04"
	},
	{
		device_id: "solarpanel_1",
		value: "113Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 22:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 22:04"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "13/04/2024, 21:59"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "13/04/2024, 21:59"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "13/04/2024, 21:59"
	},
	{
		device_id: "solarpanel_1",
		value: "628Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 21:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 21:59"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "13/04/2024, 21:54"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "13/04/2024, 21:54"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "13/04/2024, 21:54"
	},
	{
		device_id: "solarpanel_1",
		value: "369Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 21:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 21:54"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "13/04/2024, 21:49"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "13/04/2024, 21:49"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "13/04/2024, 21:49"
	},
	{
		device_id: "solarpanel_1",
		value: "865Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 21:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 21:49"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "13/04/2024, 21:44"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "13/04/2024, 21:44"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "13/04/2024, 21:44"
	},
	{
		device_id: "solarpanel_1",
		value: "379Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 21:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 21:44"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "13/04/2024, 21:39"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "13/04/2024, 21:39"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "13/04/2024, 21:39"
	},
	{
		device_id: "solarpanel_1",
		value: "147Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 21:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 21:39"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "13/04/2024, 21:34"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "13/04/2024, 21:34"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "13/04/2024, 21:34"
	},
	{
		device_id: "solarpanel_1",
		value: "72Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 21:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 21:34"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "13/04/2024, 21:29"
	},
	{
		device_id: "temp_1",
		value: "78°C",
		type: "temperature",
		timestamp: "13/04/2024, 21:29"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "13/04/2024, 21:29"
	},
	{
		device_id: "solarpanel_1",
		value: "630Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 21:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 21:29"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "13/04/2024, 21:24"
	},
	{
		device_id: "temp_1",
		value: "28°C",
		type: "temperature",
		timestamp: "13/04/2024, 21:24"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "13/04/2024, 21:24"
	},
	{
		device_id: "solarpanel_1",
		value: "939Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 21:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 21:24"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "13/04/2024, 21:19"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "13/04/2024, 21:19"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "13/04/2024, 21:19"
	},
	{
		device_id: "solarpanel_1",
		value: "293Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 21:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 21:19"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "13/04/2024, 21:14"
	},
	{
		device_id: "temp_1",
		value: "93°C",
		type: "temperature",
		timestamp: "13/04/2024, 21:14"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "13/04/2024, 21:14"
	},
	{
		device_id: "solarpanel_1",
		value: "592Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 21:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 21:14"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "13/04/2024, 21:09"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "13/04/2024, 21:09"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "13/04/2024, 21:09"
	},
	{
		device_id: "solarpanel_1",
		value: "263Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 21:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 21:09"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "13/04/2024, 21:04"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "13/04/2024, 21:04"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "13/04/2024, 21:04"
	},
	{
		device_id: "solarpanel_1",
		value: "696Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 21:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 21:04"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "13/04/2024, 20:59"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "13/04/2024, 20:59"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "13/04/2024, 20:59"
	},
	{
		device_id: "solarpanel_1",
		value: "482Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 20:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 20:59"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "13/04/2024, 20:54"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "13/04/2024, 20:54"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "13/04/2024, 20:54"
	},
	{
		device_id: "solarpanel_1",
		value: "517Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 20:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 20:54"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "13/04/2024, 20:49"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "13/04/2024, 20:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "13/04/2024, 20:49"
	},
	{
		device_id: "solarpanel_1",
		value: "148Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 20:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 20:49"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "13/04/2024, 20:44"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "13/04/2024, 20:44"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "13/04/2024, 20:44"
	},
	{
		device_id: "solarpanel_1",
		value: "814Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 20:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 20:44"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "13/04/2024, 20:39"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "13/04/2024, 20:39"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "13/04/2024, 20:39"
	},
	{
		device_id: "solarpanel_1",
		value: "24Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 20:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 20:39"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "13/04/2024, 20:34"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "13/04/2024, 20:34"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "13/04/2024, 20:34"
	},
	{
		device_id: "solarpanel_1",
		value: "423Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 20:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 20:34"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "13/04/2024, 20:29"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "13/04/2024, 20:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "13/04/2024, 20:29"
	},
	{
		device_id: "solarpanel_1",
		value: "883Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 20:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 20:29"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "13/04/2024, 20:24"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "13/04/2024, 20:24"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "13/04/2024, 20:24"
	},
	{
		device_id: "solarpanel_1",
		value: "412Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 20:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 20:24"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "13/04/2024, 20:19"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "13/04/2024, 20:19"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "13/04/2024, 20:19"
	},
	{
		device_id: "solarpanel_1",
		value: "133Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 20:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 20:19"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "13/04/2024, 20:14"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "13/04/2024, 20:14"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "13/04/2024, 20:14"
	},
	{
		device_id: "solarpanel_1",
		value: "459Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 20:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 20:14"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "13/04/2024, 20:09"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "13/04/2024, 20:09"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "13/04/2024, 20:09"
	},
	{
		device_id: "solarpanel_1",
		value: "763Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 20:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 20:09"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "13/04/2024, 20:04"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "13/04/2024, 20:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "13/04/2024, 20:04"
	},
	{
		device_id: "solarpanel_1",
		value: "191Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 20:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 20:04"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "13/04/2024, 19:59"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "13/04/2024, 19:59"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "13/04/2024, 19:59"
	},
	{
		device_id: "solarpanel_1",
		value: "802Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 19:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 19:59"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "13/04/2024, 19:54"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "13/04/2024, 19:54"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "13/04/2024, 19:54"
	},
	{
		device_id: "solarpanel_1",
		value: "840Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 19:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 19:54"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "13/04/2024, 19:49"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "13/04/2024, 19:49"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "13/04/2024, 19:49"
	},
	{
		device_id: "solarpanel_1",
		value: "692Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 19:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 19:49"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "13/04/2024, 19:44"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "13/04/2024, 19:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "13/04/2024, 19:44"
	},
	{
		device_id: "solarpanel_1",
		value: "804Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 19:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 19:44"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "13/04/2024, 19:39"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "13/04/2024, 19:39"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "13/04/2024, 19:39"
	},
	{
		device_id: "solarpanel_1",
		value: "332Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 19:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 19:39"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "13/04/2024, 19:34"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "13/04/2024, 19:34"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "13/04/2024, 19:34"
	},
	{
		device_id: "solarpanel_1",
		value: "523Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 19:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 19:34"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "13/04/2024, 19:29"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "13/04/2024, 19:29"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "13/04/2024, 19:29"
	},
	{
		device_id: "solarpanel_1",
		value: "365Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 19:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 19:29"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "13/04/2024, 19:24"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "13/04/2024, 19:24"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "13/04/2024, 19:24"
	},
	{
		device_id: "solarpanel_1",
		value: "772Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 19:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 19:24"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "13/04/2024, 19:19"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "13/04/2024, 19:19"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "13/04/2024, 19:19"
	},
	{
		device_id: "solarpanel_1",
		value: "180Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 19:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 19:19"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "13/04/2024, 19:14"
	},
	{
		device_id: "temp_1",
		value: "53°C",
		type: "temperature",
		timestamp: "13/04/2024, 19:14"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "13/04/2024, 19:14"
	},
	{
		device_id: "solarpanel_1",
		value: "904Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 19:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 19:14"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "13/04/2024, 19:09"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "13/04/2024, 19:09"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "13/04/2024, 19:09"
	},
	{
		device_id: "solarpanel_1",
		value: "785Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 19:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 19:09"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "13/04/2024, 19:04"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "13/04/2024, 19:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "13/04/2024, 19:04"
	},
	{
		device_id: "solarpanel_1",
		value: "998Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 19:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "13/04/2024, 19:04"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "13/04/2024, 18:59"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "13/04/2024, 18:59"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "13/04/2024, 18:59"
	},
	{
		device_id: "solarpanel_1",
		value: "276Lux",
		type: "Sun Intensity",
		timestamp: "13/04/2024, 18:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "13/04/2024, 18:59"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "12/04/2024, 18:54"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "12/04/2024, 18:54"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 18:54"
	},
	{
		device_id: "solarpanel_1",
		value: "162Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 18:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 18:54"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "12/04/2024, 18:49"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "12/04/2024, 18:49"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 18:49"
	},
	{
		device_id: "solarpanel_1",
		value: "194Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 18:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 18:49"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "12/04/2024, 18:44"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "12/04/2024, 18:44"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "12/04/2024, 18:44"
	},
	{
		device_id: "solarpanel_1",
		value: "705Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 18:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 18:44"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "12/04/2024, 18:39"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "12/04/2024, 18:39"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 18:39"
	},
	{
		device_id: "solarpanel_1",
		value: "176Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 18:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 18:39"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "12/04/2024, 18:34"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "12/04/2024, 18:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 18:34"
	},
	{
		device_id: "solarpanel_1",
		value: "992Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 18:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 18:34"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "12/04/2024, 18:29"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "12/04/2024, 18:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "12/04/2024, 18:29"
	},
	{
		device_id: "solarpanel_1",
		value: "785Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 18:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 18:29"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "12/04/2024, 18:24"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "12/04/2024, 18:24"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "12/04/2024, 18:24"
	},
	{
		device_id: "solarpanel_1",
		value: "149Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 18:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 18:24"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "12/04/2024, 18:19"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "12/04/2024, 18:19"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "12/04/2024, 18:19"
	},
	{
		device_id: "solarpanel_1",
		value: "920Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 18:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 18:19"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "12/04/2024, 18:14"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "12/04/2024, 18:14"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 18:14"
	},
	{
		device_id: "solarpanel_1",
		value: "86Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 18:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 18:14"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "12/04/2024, 18:09"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "12/04/2024, 18:09"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 18:09"
	},
	{
		device_id: "solarpanel_1",
		value: "690Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 18:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 18:09"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "12/04/2024, 18:04"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "12/04/2024, 18:04"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 18:04"
	},
	{
		device_id: "solarpanel_1",
		value: "702Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 18:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 18:04"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "12/04/2024, 17:59"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "12/04/2024, 17:59"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "12/04/2024, 17:59"
	},
	{
		device_id: "solarpanel_1",
		value: "578Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 17:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 17:59"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "12/04/2024, 17:54"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "12/04/2024, 17:54"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 17:54"
	},
	{
		device_id: "solarpanel_1",
		value: "186Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 17:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 17:54"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "12/04/2024, 17:49"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "12/04/2024, 17:49"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 17:49"
	},
	{
		device_id: "solarpanel_1",
		value: "375Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 17:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 17:49"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "12/04/2024, 17:44"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "12/04/2024, 17:44"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "12/04/2024, 17:44"
	},
	{
		device_id: "solarpanel_1",
		value: "394Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 17:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 17:44"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "12/04/2024, 17:39"
	},
	{
		device_id: "temp_1",
		value: "57°C",
		type: "temperature",
		timestamp: "12/04/2024, 17:39"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "12/04/2024, 17:39"
	},
	{
		device_id: "solarpanel_1",
		value: "36Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 17:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 17:39"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "12/04/2024, 17:34"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "12/04/2024, 17:34"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "12/04/2024, 17:34"
	},
	{
		device_id: "solarpanel_1",
		value: "440Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 17:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 17:34"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "12/04/2024, 17:29"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "12/04/2024, 17:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 17:29"
	},
	{
		device_id: "solarpanel_1",
		value: "402Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 17:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 17:29"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "12/04/2024, 17:24"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "12/04/2024, 17:24"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "12/04/2024, 17:24"
	},
	{
		device_id: "solarpanel_1",
		value: "292Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 17:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 17:24"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "12/04/2024, 17:19"
	},
	{
		device_id: "temp_1",
		value: "90°C",
		type: "temperature",
		timestamp: "12/04/2024, 17:19"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "12/04/2024, 17:19"
	},
	{
		device_id: "solarpanel_1",
		value: "358Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 17:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 17:19"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "12/04/2024, 17:14"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "12/04/2024, 17:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "12/04/2024, 17:14"
	},
	{
		device_id: "solarpanel_1",
		value: "301Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 17:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 17:14"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "12/04/2024, 17:09"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "12/04/2024, 17:09"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 17:09"
	},
	{
		device_id: "solarpanel_1",
		value: "781Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 17:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 17:09"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "12/04/2024, 17:04"
	},
	{
		device_id: "temp_1",
		value: "10°C",
		type: "temperature",
		timestamp: "12/04/2024, 17:04"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "12/04/2024, 17:04"
	},
	{
		device_id: "solarpanel_1",
		value: "98Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 17:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 17:04"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "12/04/2024, 16:59"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "12/04/2024, 16:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 16:59"
	},
	{
		device_id: "solarpanel_1",
		value: "935Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 16:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 16:59"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "12/04/2024, 16:54"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "12/04/2024, 16:54"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 16:54"
	},
	{
		device_id: "solarpanel_1",
		value: "583Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 16:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 16:54"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "12/04/2024, 16:49"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "12/04/2024, 16:49"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 16:49"
	},
	{
		device_id: "solarpanel_1",
		value: "555Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 16:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 16:49"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "12/04/2024, 16:44"
	},
	{
		device_id: "temp_1",
		value: "76°C",
		type: "temperature",
		timestamp: "12/04/2024, 16:44"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "12/04/2024, 16:44"
	},
	{
		device_id: "solarpanel_1",
		value: "4Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 16:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 16:44"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "12/04/2024, 16:39"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "12/04/2024, 16:39"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 16:39"
	},
	{
		device_id: "solarpanel_1",
		value: "474Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 16:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 16:39"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "12/04/2024, 16:34"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "12/04/2024, 16:34"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 16:34"
	},
	{
		device_id: "solarpanel_1",
		value: "969Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 16:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 16:34"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "12/04/2024, 16:29"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "12/04/2024, 16:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "12/04/2024, 16:29"
	},
	{
		device_id: "solarpanel_1",
		value: "789Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 16:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 16:29"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "12/04/2024, 16:24"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "12/04/2024, 16:24"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 16:24"
	},
	{
		device_id: "solarpanel_1",
		value: "359Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 16:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 16:24"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "12/04/2024, 16:19"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "12/04/2024, 16:19"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "12/04/2024, 16:19"
	},
	{
		device_id: "solarpanel_1",
		value: "474Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 16:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 16:19"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "12/04/2024, 16:14"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "12/04/2024, 16:14"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 16:14"
	},
	{
		device_id: "solarpanel_1",
		value: "236Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 16:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 16:14"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "12/04/2024, 16:09"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "12/04/2024, 16:09"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "12/04/2024, 16:09"
	},
	{
		device_id: "solarpanel_1",
		value: "286Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 16:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 16:09"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "12/04/2024, 16:04"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "12/04/2024, 16:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 16:04"
	},
	{
		device_id: "solarpanel_1",
		value: "687Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 16:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 16:04"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "12/04/2024, 15:59"
	},
	{
		device_id: "temp_1",
		value: "57°C",
		type: "temperature",
		timestamp: "12/04/2024, 15:59"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 15:59"
	},
	{
		device_id: "solarpanel_1",
		value: "730Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 15:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 15:59"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "12/04/2024, 15:54"
	},
	{
		device_id: "temp_1",
		value: "78°C",
		type: "temperature",
		timestamp: "12/04/2024, 15:54"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "12/04/2024, 15:54"
	},
	{
		device_id: "solarpanel_1",
		value: "648Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 15:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 15:54"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "12/04/2024, 15:49"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "12/04/2024, 15:49"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 15:49"
	},
	{
		device_id: "solarpanel_1",
		value: "457Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 15:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 15:49"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "12/04/2024, 15:44"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "12/04/2024, 15:44"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "12/04/2024, 15:44"
	},
	{
		device_id: "solarpanel_1",
		value: "85Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 15:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 15:44"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "12/04/2024, 15:39"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "12/04/2024, 15:39"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "12/04/2024, 15:39"
	},
	{
		device_id: "solarpanel_1",
		value: "194Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 15:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 15:39"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "12/04/2024, 15:34"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "12/04/2024, 15:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 15:34"
	},
	{
		device_id: "solarpanel_1",
		value: "313Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 15:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 15:34"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "12/04/2024, 15:29"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "12/04/2024, 15:29"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "12/04/2024, 15:29"
	},
	{
		device_id: "solarpanel_1",
		value: "73Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 15:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 15:29"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "12/04/2024, 15:24"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "12/04/2024, 15:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 15:24"
	},
	{
		device_id: "solarpanel_1",
		value: "723Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 15:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 15:24"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "12/04/2024, 15:19"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "12/04/2024, 15:19"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 15:19"
	},
	{
		device_id: "solarpanel_1",
		value: "620Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 15:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 15:19"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "12/04/2024, 15:14"
	},
	{
		device_id: "temp_1",
		value: "76°C",
		type: "temperature",
		timestamp: "12/04/2024, 15:14"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 15:14"
	},
	{
		device_id: "solarpanel_1",
		value: "897Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 15:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 15:14"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "12/04/2024, 15:09"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "12/04/2024, 15:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 15:09"
	},
	{
		device_id: "solarpanel_1",
		value: "977Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 15:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 15:09"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "12/04/2024, 15:04"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "12/04/2024, 15:04"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "12/04/2024, 15:04"
	},
	{
		device_id: "solarpanel_1",
		value: "880Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 15:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 15:04"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "12/04/2024, 14:59"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "12/04/2024, 14:59"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 14:59"
	},
	{
		device_id: "solarpanel_1",
		value: "214Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 14:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 14:59"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "12/04/2024, 14:54"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "12/04/2024, 14:54"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "12/04/2024, 14:54"
	},
	{
		device_id: "solarpanel_1",
		value: "306Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 14:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 14:54"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "12/04/2024, 14:49"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "12/04/2024, 14:49"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "12/04/2024, 14:49"
	},
	{
		device_id: "solarpanel_1",
		value: "970Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 14:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 14:49"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "12/04/2024, 14:44"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "12/04/2024, 14:44"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 14:44"
	},
	{
		device_id: "solarpanel_1",
		value: "131Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 14:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 14:44"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "12/04/2024, 14:39"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "12/04/2024, 14:39"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 14:39"
	},
	{
		device_id: "solarpanel_1",
		value: "106Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 14:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 14:39"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "12/04/2024, 14:34"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "12/04/2024, 14:34"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "12/04/2024, 14:34"
	},
	{
		device_id: "solarpanel_1",
		value: "123Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 14:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 14:34"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "12/04/2024, 14:29"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "12/04/2024, 14:29"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "12/04/2024, 14:29"
	},
	{
		device_id: "solarpanel_1",
		value: "728Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 14:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 14:29"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "12/04/2024, 14:24"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "12/04/2024, 14:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "12/04/2024, 14:24"
	},
	{
		device_id: "solarpanel_1",
		value: "4Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 14:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 14:24"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "12/04/2024, 14:19"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "12/04/2024, 14:19"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 14:19"
	},
	{
		device_id: "solarpanel_1",
		value: "568Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 14:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 14:19"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "12/04/2024, 14:14"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "12/04/2024, 14:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "12/04/2024, 14:14"
	},
	{
		device_id: "solarpanel_1",
		value: "740Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 14:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 14:14"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "12/04/2024, 14:09"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "12/04/2024, 14:09"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "12/04/2024, 14:09"
	},
	{
		device_id: "solarpanel_1",
		value: "494Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 14:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 14:09"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "12/04/2024, 14:04"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "12/04/2024, 14:04"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 14:04"
	},
	{
		device_id: "solarpanel_1",
		value: "342Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 14:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 14:04"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "12/04/2024, 13:59"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "12/04/2024, 13:59"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "12/04/2024, 13:59"
	},
	{
		device_id: "solarpanel_1",
		value: "849Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 13:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 13:59"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "12/04/2024, 13:54"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "12/04/2024, 13:54"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "12/04/2024, 13:54"
	},
	{
		device_id: "solarpanel_1",
		value: "330Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 13:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 13:54"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "12/04/2024, 13:49"
	},
	{
		device_id: "temp_1",
		value: "93°C",
		type: "temperature",
		timestamp: "12/04/2024, 13:49"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "12/04/2024, 13:49"
	},
	{
		device_id: "solarpanel_1",
		value: "871Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 13:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 13:49"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "12/04/2024, 13:44"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "12/04/2024, 13:44"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "12/04/2024, 13:44"
	},
	{
		device_id: "solarpanel_1",
		value: "732Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 13:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 13:44"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "12/04/2024, 13:39"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "12/04/2024, 13:39"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "12/04/2024, 13:39"
	},
	{
		device_id: "solarpanel_1",
		value: "492Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 13:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 13:39"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "12/04/2024, 13:34"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "12/04/2024, 13:34"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "12/04/2024, 13:34"
	},
	{
		device_id: "solarpanel_1",
		value: "825Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 13:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 13:34"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "12/04/2024, 13:29"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "12/04/2024, 13:29"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "12/04/2024, 13:29"
	},
	{
		device_id: "solarpanel_1",
		value: "469Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 13:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 13:29"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "12/04/2024, 13:24"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "12/04/2024, 13:24"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "12/04/2024, 13:24"
	},
	{
		device_id: "solarpanel_1",
		value: "763Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 13:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 13:24"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "12/04/2024, 13:19"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "12/04/2024, 13:19"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 13:19"
	},
	{
		device_id: "solarpanel_1",
		value: "134Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 13:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 13:19"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "12/04/2024, 13:14"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "12/04/2024, 13:14"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "12/04/2024, 13:14"
	},
	{
		device_id: "solarpanel_1",
		value: "988Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 13:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 13:14"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "12/04/2024, 13:09"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "12/04/2024, 13:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "12/04/2024, 13:09"
	},
	{
		device_id: "solarpanel_1",
		value: "940Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 13:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 13:09"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "12/04/2024, 13:04"
	},
	{
		device_id: "temp_1",
		value: "57°C",
		type: "temperature",
		timestamp: "12/04/2024, 13:04"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "12/04/2024, 13:04"
	},
	{
		device_id: "solarpanel_1",
		value: "80Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 13:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 13:04"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "12/04/2024, 12:59"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "12/04/2024, 12:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 12:59"
	},
	{
		device_id: "solarpanel_1",
		value: "143Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 12:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 12:59"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "12/04/2024, 12:54"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "12/04/2024, 12:54"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "12/04/2024, 12:54"
	},
	{
		device_id: "solarpanel_1",
		value: "314Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 12:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 12:54"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "12/04/2024, 12:49"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "12/04/2024, 12:49"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "12/04/2024, 12:49"
	},
	{
		device_id: "solarpanel_1",
		value: "448Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 12:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 12:49"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "12/04/2024, 12:44"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "12/04/2024, 12:44"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 12:44"
	},
	{
		device_id: "solarpanel_1",
		value: "796Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 12:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 12:44"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "12/04/2024, 12:39"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "12/04/2024, 12:39"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "12/04/2024, 12:39"
	},
	{
		device_id: "solarpanel_1",
		value: "469Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 12:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 12:39"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "12/04/2024, 12:34"
	},
	{
		device_id: "temp_1",
		value: "16°C",
		type: "temperature",
		timestamp: "12/04/2024, 12:34"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "12/04/2024, 12:34"
	},
	{
		device_id: "solarpanel_1",
		value: "236Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 12:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 12:34"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "12/04/2024, 12:29"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "12/04/2024, 12:29"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "12/04/2024, 12:29"
	},
	{
		device_id: "solarpanel_1",
		value: "295Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 12:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 12:29"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "12/04/2024, 12:24"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "12/04/2024, 12:24"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 12:24"
	},
	{
		device_id: "solarpanel_1",
		value: "864Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 12:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 12:24"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "12/04/2024, 12:19"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "12/04/2024, 12:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "12/04/2024, 12:19"
	},
	{
		device_id: "solarpanel_1",
		value: "230Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 12:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 12:19"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "12/04/2024, 12:14"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "12/04/2024, 12:14"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 12:14"
	},
	{
		device_id: "solarpanel_1",
		value: "753Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 12:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 12:14"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "12/04/2024, 12:09"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "12/04/2024, 12:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "12/04/2024, 12:09"
	},
	{
		device_id: "solarpanel_1",
		value: "921Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 12:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 12:09"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "12/04/2024, 12:04"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "12/04/2024, 12:04"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "12/04/2024, 12:04"
	},
	{
		device_id: "solarpanel_1",
		value: "440Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 12:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 12:04"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "12/04/2024, 11:59"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "12/04/2024, 11:59"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "12/04/2024, 11:59"
	},
	{
		device_id: "solarpanel_1",
		value: "607Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 11:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 11:59"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "12/04/2024, 11:54"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "12/04/2024, 11:54"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "12/04/2024, 11:54"
	},
	{
		device_id: "solarpanel_1",
		value: "717Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 11:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 11:54"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "12/04/2024, 11:49"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "12/04/2024, 11:49"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "12/04/2024, 11:49"
	},
	{
		device_id: "solarpanel_1",
		value: "342Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 11:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 11:49"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "12/04/2024, 11:44"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "12/04/2024, 11:44"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "12/04/2024, 11:44"
	},
	{
		device_id: "solarpanel_1",
		value: "617Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 11:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 11:44"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "12/04/2024, 11:39"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "12/04/2024, 11:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "12/04/2024, 11:39"
	},
	{
		device_id: "solarpanel_1",
		value: "288Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 11:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 11:39"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "12/04/2024, 11:34"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "12/04/2024, 11:34"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "12/04/2024, 11:34"
	},
	{
		device_id: "solarpanel_1",
		value: "379Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 11:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 11:34"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "12/04/2024, 11:29"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "12/04/2024, 11:29"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 11:29"
	},
	{
		device_id: "solarpanel_1",
		value: "386Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 11:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 11:29"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "12/04/2024, 11:24"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "12/04/2024, 11:24"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "12/04/2024, 11:24"
	},
	{
		device_id: "solarpanel_1",
		value: "564Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 11:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 11:24"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "12/04/2024, 11:19"
	},
	{
		device_id: "temp_1",
		value: "57°C",
		type: "temperature",
		timestamp: "12/04/2024, 11:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "12/04/2024, 11:19"
	},
	{
		device_id: "solarpanel_1",
		value: "403Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 11:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 11:19"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "12/04/2024, 11:14"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "12/04/2024, 11:14"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 11:14"
	},
	{
		device_id: "solarpanel_1",
		value: "742Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 11:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 11:14"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "12/04/2024, 11:09"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "12/04/2024, 11:09"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "12/04/2024, 11:09"
	},
	{
		device_id: "solarpanel_1",
		value: "988Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 11:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 11:09"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "12/04/2024, 11:04"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "12/04/2024, 11:04"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "12/04/2024, 11:04"
	},
	{
		device_id: "solarpanel_1",
		value: "926Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 11:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 11:04"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "12/04/2024, 10:59"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "12/04/2024, 10:59"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "12/04/2024, 10:59"
	},
	{
		device_id: "solarpanel_1",
		value: "109Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 10:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 10:59"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "12/04/2024, 10:54"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "12/04/2024, 10:54"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 10:54"
	},
	{
		device_id: "solarpanel_1",
		value: "556Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 10:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 10:54"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "12/04/2024, 10:49"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "12/04/2024, 10:49"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 10:49"
	},
	{
		device_id: "solarpanel_1",
		value: "683Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 10:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 10:49"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "12/04/2024, 10:44"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "12/04/2024, 10:44"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 10:44"
	},
	{
		device_id: "solarpanel_1",
		value: "537Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 10:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 10:44"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "12/04/2024, 10:39"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "12/04/2024, 10:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "12/04/2024, 10:39"
	},
	{
		device_id: "solarpanel_1",
		value: "727Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 10:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 10:39"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "12/04/2024, 10:34"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "12/04/2024, 10:34"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 10:34"
	},
	{
		device_id: "solarpanel_1",
		value: "879Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 10:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 10:34"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "12/04/2024, 10:29"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "12/04/2024, 10:29"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "12/04/2024, 10:29"
	},
	{
		device_id: "solarpanel_1",
		value: "676Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 10:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 10:29"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "12/04/2024, 10:24"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "12/04/2024, 10:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "12/04/2024, 10:24"
	},
	{
		device_id: "solarpanel_1",
		value: "902Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 10:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 10:24"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "12/04/2024, 10:19"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "12/04/2024, 10:19"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "12/04/2024, 10:19"
	},
	{
		device_id: "solarpanel_1",
		value: "392Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 10:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 10:19"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "12/04/2024, 10:14"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "12/04/2024, 10:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "12/04/2024, 10:14"
	},
	{
		device_id: "solarpanel_1",
		value: "299Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 10:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 10:14"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "12/04/2024, 10:09"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "12/04/2024, 10:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "12/04/2024, 10:09"
	},
	{
		device_id: "solarpanel_1",
		value: "351Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 10:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 10:09"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "12/04/2024, 10:04"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "12/04/2024, 10:04"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 10:04"
	},
	{
		device_id: "solarpanel_1",
		value: "43Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 10:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 10:04"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "12/04/2024, 09:59"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "12/04/2024, 09:59"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 09:59"
	},
	{
		device_id: "solarpanel_1",
		value: "716Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 09:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 09:59"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "12/04/2024, 09:54"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "12/04/2024, 09:54"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 09:54"
	},
	{
		device_id: "solarpanel_1",
		value: "9Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 09:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 09:54"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "12/04/2024, 09:49"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "12/04/2024, 09:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 09:49"
	},
	{
		device_id: "solarpanel_1",
		value: "484Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 09:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 09:49"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "12/04/2024, 09:44"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "12/04/2024, 09:44"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "12/04/2024, 09:44"
	},
	{
		device_id: "solarpanel_1",
		value: "948Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 09:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 09:44"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "12/04/2024, 09:39"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "12/04/2024, 09:39"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 09:39"
	},
	{
		device_id: "solarpanel_1",
		value: "545Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 09:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 09:39"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "12/04/2024, 09:34"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "12/04/2024, 09:34"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "12/04/2024, 09:34"
	},
	{
		device_id: "solarpanel_1",
		value: "691Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 09:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 09:34"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "12/04/2024, 09:29"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "12/04/2024, 09:29"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 09:29"
	},
	{
		device_id: "solarpanel_1",
		value: "828Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 09:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 09:29"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "12/04/2024, 09:24"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "12/04/2024, 09:24"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 09:24"
	},
	{
		device_id: "solarpanel_1",
		value: "442Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 09:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 09:24"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "12/04/2024, 09:19"
	},
	{
		device_id: "temp_1",
		value: "26°C",
		type: "temperature",
		timestamp: "12/04/2024, 09:19"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 09:19"
	},
	{
		device_id: "solarpanel_1",
		value: "314Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 09:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 09:19"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "12/04/2024, 09:14"
	},
	{
		device_id: "temp_1",
		value: "57°C",
		type: "temperature",
		timestamp: "12/04/2024, 09:14"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 09:14"
	},
	{
		device_id: "solarpanel_1",
		value: "749Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 09:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 09:14"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "12/04/2024, 09:09"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "12/04/2024, 09:09"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 09:09"
	},
	{
		device_id: "solarpanel_1",
		value: "810Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 09:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 09:09"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "12/04/2024, 09:04"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "12/04/2024, 09:04"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 09:04"
	},
	{
		device_id: "solarpanel_1",
		value: "629Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 09:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 09:04"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "12/04/2024, 08:59"
	},
	{
		device_id: "temp_1",
		value: "2°C",
		type: "temperature",
		timestamp: "12/04/2024, 08:59"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "12/04/2024, 08:59"
	},
	{
		device_id: "solarpanel_1",
		value: "321Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 08:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 08:59"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "12/04/2024, 08:54"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "12/04/2024, 08:54"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "12/04/2024, 08:54"
	},
	{
		device_id: "solarpanel_1",
		value: "201Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 08:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 08:54"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "12/04/2024, 08:49"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "12/04/2024, 08:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 08:49"
	},
	{
		device_id: "solarpanel_1",
		value: "636Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 08:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 08:49"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "12/04/2024, 08:44"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "12/04/2024, 08:44"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 08:44"
	},
	{
		device_id: "solarpanel_1",
		value: "925Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 08:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 08:44"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "12/04/2024, 08:39"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "12/04/2024, 08:39"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "12/04/2024, 08:39"
	},
	{
		device_id: "solarpanel_1",
		value: "912Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 08:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 08:39"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "12/04/2024, 08:34"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "12/04/2024, 08:34"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 08:34"
	},
	{
		device_id: "solarpanel_1",
		value: "909Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 08:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 08:34"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "12/04/2024, 08:29"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "12/04/2024, 08:29"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 08:29"
	},
	{
		device_id: "solarpanel_1",
		value: "627Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 08:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 08:29"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "12/04/2024, 08:24"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "12/04/2024, 08:24"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 08:24"
	},
	{
		device_id: "solarpanel_1",
		value: "947Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 08:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 08:24"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "12/04/2024, 08:19"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "12/04/2024, 08:19"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 08:19"
	},
	{
		device_id: "solarpanel_1",
		value: "250Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 08:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 08:19"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "12/04/2024, 08:14"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "12/04/2024, 08:14"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 08:14"
	},
	{
		device_id: "solarpanel_1",
		value: "664Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 08:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 08:14"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "12/04/2024, 08:09"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "12/04/2024, 08:09"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 08:09"
	},
	{
		device_id: "solarpanel_1",
		value: "64Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 08:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 08:09"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "12/04/2024, 08:04"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "12/04/2024, 08:04"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "12/04/2024, 08:04"
	},
	{
		device_id: "solarpanel_1",
		value: "730Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 08:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 08:04"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "12/04/2024, 07:59"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "12/04/2024, 07:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "12/04/2024, 07:59"
	},
	{
		device_id: "solarpanel_1",
		value: "794Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 07:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 07:59"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "12/04/2024, 07:54"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "12/04/2024, 07:54"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 07:54"
	},
	{
		device_id: "solarpanel_1",
		value: "118Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 07:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 07:54"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "12/04/2024, 07:49"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "12/04/2024, 07:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "12/04/2024, 07:49"
	},
	{
		device_id: "solarpanel_1",
		value: "448Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 07:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 07:49"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "12/04/2024, 07:44"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "12/04/2024, 07:44"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 07:44"
	},
	{
		device_id: "solarpanel_1",
		value: "924Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 07:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 07:44"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "12/04/2024, 07:39"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "12/04/2024, 07:39"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 07:39"
	},
	{
		device_id: "solarpanel_1",
		value: "981Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 07:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 07:39"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "12/04/2024, 07:34"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "12/04/2024, 07:34"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "12/04/2024, 07:34"
	},
	{
		device_id: "solarpanel_1",
		value: "114Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 07:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 07:34"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "12/04/2024, 07:29"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "12/04/2024, 07:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 07:29"
	},
	{
		device_id: "solarpanel_1",
		value: "44Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 07:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 07:29"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "12/04/2024, 07:24"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "12/04/2024, 07:24"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "12/04/2024, 07:24"
	},
	{
		device_id: "solarpanel_1",
		value: "837Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 07:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 07:24"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "12/04/2024, 07:19"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "12/04/2024, 07:19"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 07:19"
	},
	{
		device_id: "solarpanel_1",
		value: "449Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 07:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 07:19"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "12/04/2024, 07:14"
	},
	{
		device_id: "temp_1",
		value: "90°C",
		type: "temperature",
		timestamp: "12/04/2024, 07:14"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 07:14"
	},
	{
		device_id: "solarpanel_1",
		value: "670Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 07:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 07:14"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "12/04/2024, 07:09"
	},
	{
		device_id: "temp_1",
		value: "12°C",
		type: "temperature",
		timestamp: "12/04/2024, 07:09"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 07:09"
	},
	{
		device_id: "solarpanel_1",
		value: "23Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 07:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 07:09"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "12/04/2024, 07:04"
	},
	{
		device_id: "temp_1",
		value: "90°C",
		type: "temperature",
		timestamp: "12/04/2024, 07:04"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 07:04"
	},
	{
		device_id: "solarpanel_1",
		value: "482Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 07:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 07:04"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "12/04/2024, 06:59"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "12/04/2024, 06:59"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "12/04/2024, 06:59"
	},
	{
		device_id: "solarpanel_1",
		value: "754Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 06:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 06:59"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "12/04/2024, 06:54"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "12/04/2024, 06:54"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "12/04/2024, 06:54"
	},
	{
		device_id: "solarpanel_1",
		value: "485Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 06:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 06:54"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "12/04/2024, 06:49"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "12/04/2024, 06:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "12/04/2024, 06:49"
	},
	{
		device_id: "solarpanel_1",
		value: "612Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 06:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 06:49"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "12/04/2024, 06:44"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "12/04/2024, 06:44"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "12/04/2024, 06:44"
	},
	{
		device_id: "solarpanel_1",
		value: "51Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 06:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 06:44"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "12/04/2024, 06:39"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "12/04/2024, 06:39"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "12/04/2024, 06:39"
	},
	{
		device_id: "solarpanel_1",
		value: "548Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 06:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 06:39"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "12/04/2024, 06:34"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "12/04/2024, 06:34"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 06:34"
	},
	{
		device_id: "solarpanel_1",
		value: "841Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 06:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 06:34"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "12/04/2024, 06:29"
	},
	{
		device_id: "temp_1",
		value: "28°C",
		type: "temperature",
		timestamp: "12/04/2024, 06:29"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "12/04/2024, 06:29"
	},
	{
		device_id: "solarpanel_1",
		value: "823Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 06:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 06:29"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "12/04/2024, 06:24"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "12/04/2024, 06:24"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 06:24"
	},
	{
		device_id: "solarpanel_1",
		value: "59Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 06:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 06:24"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "12/04/2024, 06:19"
	},
	{
		device_id: "temp_1",
		value: "26°C",
		type: "temperature",
		timestamp: "12/04/2024, 06:19"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 06:19"
	},
	{
		device_id: "solarpanel_1",
		value: "976Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 06:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 06:19"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "12/04/2024, 06:14"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "12/04/2024, 06:14"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "12/04/2024, 06:14"
	},
	{
		device_id: "solarpanel_1",
		value: "435Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 06:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 06:14"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "12/04/2024, 06:09"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "12/04/2024, 06:09"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 06:09"
	},
	{
		device_id: "solarpanel_1",
		value: "1000Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 06:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 06:09"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "12/04/2024, 06:04"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "12/04/2024, 06:04"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "12/04/2024, 06:04"
	},
	{
		device_id: "solarpanel_1",
		value: "445Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 06:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 06:04"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "12/04/2024, 05:59"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "12/04/2024, 05:59"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "12/04/2024, 05:59"
	},
	{
		device_id: "solarpanel_1",
		value: "734Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 05:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 05:59"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "12/04/2024, 05:54"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "12/04/2024, 05:54"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 05:54"
	},
	{
		device_id: "solarpanel_1",
		value: "779Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 05:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 05:54"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "12/04/2024, 05:49"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "12/04/2024, 05:49"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 05:49"
	},
	{
		device_id: "solarpanel_1",
		value: "621Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 05:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 05:49"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "12/04/2024, 05:44"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "12/04/2024, 05:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 05:44"
	},
	{
		device_id: "solarpanel_1",
		value: "5Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 05:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 05:44"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "12/04/2024, 05:39"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "12/04/2024, 05:39"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 05:39"
	},
	{
		device_id: "solarpanel_1",
		value: "213Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 05:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 05:39"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "12/04/2024, 05:34"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "12/04/2024, 05:34"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 05:34"
	},
	{
		device_id: "solarpanel_1",
		value: "803Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 05:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 05:34"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "12/04/2024, 05:29"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "12/04/2024, 05:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 05:29"
	},
	{
		device_id: "solarpanel_1",
		value: "502Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 05:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 05:29"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "12/04/2024, 05:24"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "12/04/2024, 05:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 05:24"
	},
	{
		device_id: "solarpanel_1",
		value: "847Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 05:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 05:24"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "12/04/2024, 05:19"
	},
	{
		device_id: "temp_1",
		value: "10°C",
		type: "temperature",
		timestamp: "12/04/2024, 05:19"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 05:19"
	},
	{
		device_id: "solarpanel_1",
		value: "283Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 05:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 05:19"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "12/04/2024, 05:14"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "12/04/2024, 05:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "12/04/2024, 05:14"
	},
	{
		device_id: "solarpanel_1",
		value: "609Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 05:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 05:14"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "12/04/2024, 05:09"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "12/04/2024, 05:09"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 05:09"
	},
	{
		device_id: "solarpanel_1",
		value: "213Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 05:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 05:09"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "12/04/2024, 05:04"
	},
	{
		device_id: "temp_1",
		value: "12°C",
		type: "temperature",
		timestamp: "12/04/2024, 05:04"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 05:04"
	},
	{
		device_id: "solarpanel_1",
		value: "563Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 05:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 05:04"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "12/04/2024, 04:59"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "12/04/2024, 04:59"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "12/04/2024, 04:59"
	},
	{
		device_id: "solarpanel_1",
		value: "597Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 04:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 04:59"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "12/04/2024, 04:54"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "12/04/2024, 04:54"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 04:54"
	},
	{
		device_id: "solarpanel_1",
		value: "211Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 04:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 04:54"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "12/04/2024, 04:49"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "12/04/2024, 04:49"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "12/04/2024, 04:49"
	},
	{
		device_id: "solarpanel_1",
		value: "222Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 04:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 04:49"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "12/04/2024, 04:44"
	},
	{
		device_id: "temp_1",
		value: "90°C",
		type: "temperature",
		timestamp: "12/04/2024, 04:44"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "12/04/2024, 04:44"
	},
	{
		device_id: "solarpanel_1",
		value: "669Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 04:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 04:44"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "12/04/2024, 04:39"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "12/04/2024, 04:39"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 04:39"
	},
	{
		device_id: "solarpanel_1",
		value: "963Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 04:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 04:39"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "12/04/2024, 04:34"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "12/04/2024, 04:34"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "12/04/2024, 04:34"
	},
	{
		device_id: "solarpanel_1",
		value: "884Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 04:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 04:34"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "12/04/2024, 04:29"
	},
	{
		device_id: "temp_1",
		value: "25°C",
		type: "temperature",
		timestamp: "12/04/2024, 04:29"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 04:29"
	},
	{
		device_id: "solarpanel_1",
		value: "39Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 04:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 04:29"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "12/04/2024, 04:24"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "12/04/2024, 04:24"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 04:24"
	},
	{
		device_id: "solarpanel_1",
		value: "57Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 04:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 04:24"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "12/04/2024, 04:19"
	},
	{
		device_id: "temp_1",
		value: "90°C",
		type: "temperature",
		timestamp: "12/04/2024, 04:19"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 04:19"
	},
	{
		device_id: "solarpanel_1",
		value: "321Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 04:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 04:19"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "12/04/2024, 04:14"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "12/04/2024, 04:14"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 04:14"
	},
	{
		device_id: "solarpanel_1",
		value: "150Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 04:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 04:14"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "12/04/2024, 04:09"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "12/04/2024, 04:09"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 04:09"
	},
	{
		device_id: "solarpanel_1",
		value: "524Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 04:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 04:09"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "12/04/2024, 04:04"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "12/04/2024, 04:04"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "12/04/2024, 04:04"
	},
	{
		device_id: "solarpanel_1",
		value: "452Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 04:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 04:04"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "12/04/2024, 03:59"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "12/04/2024, 03:59"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 03:59"
	},
	{
		device_id: "solarpanel_1",
		value: "623Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 03:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 03:59"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "12/04/2024, 03:54"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "12/04/2024, 03:54"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 03:54"
	},
	{
		device_id: "solarpanel_1",
		value: "872Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 03:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 03:54"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "12/04/2024, 03:49"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "12/04/2024, 03:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 03:49"
	},
	{
		device_id: "solarpanel_1",
		value: "736Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 03:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 03:49"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "12/04/2024, 03:44"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "12/04/2024, 03:44"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "12/04/2024, 03:44"
	},
	{
		device_id: "solarpanel_1",
		value: "654Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 03:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 03:44"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "12/04/2024, 03:39"
	},
	{
		device_id: "temp_1",
		value: "90°C",
		type: "temperature",
		timestamp: "12/04/2024, 03:39"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "12/04/2024, 03:39"
	},
	{
		device_id: "solarpanel_1",
		value: "247Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 03:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 03:39"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "12/04/2024, 03:34"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "12/04/2024, 03:34"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 03:34"
	},
	{
		device_id: "solarpanel_1",
		value: "448Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 03:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 03:34"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "12/04/2024, 03:29"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "12/04/2024, 03:29"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 03:29"
	},
	{
		device_id: "solarpanel_1",
		value: "836Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 03:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 03:29"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "12/04/2024, 03:24"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "12/04/2024, 03:24"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "12/04/2024, 03:24"
	},
	{
		device_id: "solarpanel_1",
		value: "614Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 03:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 03:24"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "12/04/2024, 03:19"
	},
	{
		device_id: "temp_1",
		value: "78°C",
		type: "temperature",
		timestamp: "12/04/2024, 03:19"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "12/04/2024, 03:19"
	},
	{
		device_id: "solarpanel_1",
		value: "759Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 03:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 03:19"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "12/04/2024, 03:14"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "12/04/2024, 03:14"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 03:14"
	},
	{
		device_id: "solarpanel_1",
		value: "578Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 03:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 03:14"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "12/04/2024, 03:09"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "12/04/2024, 03:09"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 03:09"
	},
	{
		device_id: "solarpanel_1",
		value: "494Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 03:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 03:09"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "12/04/2024, 03:04"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "12/04/2024, 03:04"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "12/04/2024, 03:04"
	},
	{
		device_id: "solarpanel_1",
		value: "809Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 03:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 03:04"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "12/04/2024, 02:59"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "12/04/2024, 02:59"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 02:59"
	},
	{
		device_id: "solarpanel_1",
		value: "579Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 02:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 02:59"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "12/04/2024, 02:54"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "12/04/2024, 02:54"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 02:54"
	},
	{
		device_id: "solarpanel_1",
		value: "324Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 02:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 02:54"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "12/04/2024, 02:49"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "12/04/2024, 02:49"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "12/04/2024, 02:49"
	},
	{
		device_id: "solarpanel_1",
		value: "51Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 02:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 02:49"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "12/04/2024, 02:44"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "12/04/2024, 02:44"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "12/04/2024, 02:44"
	},
	{
		device_id: "solarpanel_1",
		value: "493Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 02:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 02:44"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "12/04/2024, 02:39"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "12/04/2024, 02:39"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 02:39"
	},
	{
		device_id: "solarpanel_1",
		value: "764Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 02:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 02:39"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "12/04/2024, 02:34"
	},
	{
		device_id: "temp_1",
		value: "76°C",
		type: "temperature",
		timestamp: "12/04/2024, 02:34"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 02:34"
	},
	{
		device_id: "solarpanel_1",
		value: "240Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 02:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 02:34"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "12/04/2024, 02:29"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "12/04/2024, 02:29"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "12/04/2024, 02:29"
	},
	{
		device_id: "solarpanel_1",
		value: "701Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 02:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 02:29"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "12/04/2024, 02:24"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "12/04/2024, 02:24"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 02:24"
	},
	{
		device_id: "solarpanel_1",
		value: "505Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 02:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 02:24"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "12/04/2024, 02:19"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "12/04/2024, 02:19"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "12/04/2024, 02:19"
	},
	{
		device_id: "solarpanel_1",
		value: "157Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 02:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 02:19"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "12/04/2024, 02:14"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "12/04/2024, 02:14"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "12/04/2024, 02:14"
	},
	{
		device_id: "solarpanel_1",
		value: "323Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 02:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 02:14"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "12/04/2024, 02:09"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "12/04/2024, 02:09"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 02:09"
	},
	{
		device_id: "solarpanel_1",
		value: "809Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 02:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 02:09"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "12/04/2024, 02:04"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "12/04/2024, 02:04"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 02:04"
	},
	{
		device_id: "solarpanel_1",
		value: "100Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 02:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 02:04"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "12/04/2024, 01:59"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "12/04/2024, 01:59"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "12/04/2024, 01:59"
	},
	{
		device_id: "solarpanel_1",
		value: "439Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 01:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 01:59"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "12/04/2024, 01:54"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "12/04/2024, 01:54"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 01:54"
	},
	{
		device_id: "solarpanel_1",
		value: "1Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 01:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 01:54"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "12/04/2024, 01:49"
	},
	{
		device_id: "temp_1",
		value: "42°C",
		type: "temperature",
		timestamp: "12/04/2024, 01:49"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 01:49"
	},
	{
		device_id: "solarpanel_1",
		value: "729Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 01:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 01:49"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "12/04/2024, 01:44"
	},
	{
		device_id: "temp_1",
		value: "26°C",
		type: "temperature",
		timestamp: "12/04/2024, 01:44"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "12/04/2024, 01:44"
	},
	{
		device_id: "solarpanel_1",
		value: "923Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 01:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 01:44"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "12/04/2024, 01:39"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "12/04/2024, 01:39"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 01:39"
	},
	{
		device_id: "solarpanel_1",
		value: "971Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 01:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 01:39"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "12/04/2024, 01:34"
	},
	{
		device_id: "temp_1",
		value: "31°C",
		type: "temperature",
		timestamp: "12/04/2024, 01:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 01:34"
	},
	{
		device_id: "solarpanel_1",
		value: "218Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 01:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 01:34"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "12/04/2024, 01:29"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "12/04/2024, 01:29"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "12/04/2024, 01:29"
	},
	{
		device_id: "solarpanel_1",
		value: "284Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 01:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 01:29"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "12/04/2024, 01:24"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "12/04/2024, 01:24"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "12/04/2024, 01:24"
	},
	{
		device_id: "solarpanel_1",
		value: "129Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 01:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 01:24"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "12/04/2024, 01:19"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "12/04/2024, 01:19"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "12/04/2024, 01:19"
	},
	{
		device_id: "solarpanel_1",
		value: "537Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 01:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 01:19"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "12/04/2024, 01:14"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "12/04/2024, 01:14"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "12/04/2024, 01:14"
	},
	{
		device_id: "solarpanel_1",
		value: "278Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 01:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 01:14"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "12/04/2024, 01:09"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "12/04/2024, 01:09"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 01:09"
	},
	{
		device_id: "solarpanel_1",
		value: "64Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 01:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 01:09"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "12/04/2024, 01:04"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "12/04/2024, 01:04"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "12/04/2024, 01:04"
	},
	{
		device_id: "solarpanel_1",
		value: "486Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 01:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 01:04"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "12/04/2024, 00:59"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "12/04/2024, 00:59"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "12/04/2024, 00:59"
	},
	{
		device_id: "solarpanel_1",
		value: "630Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 00:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 00:59"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "12/04/2024, 00:54"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "12/04/2024, 00:54"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "12/04/2024, 00:54"
	},
	{
		device_id: "solarpanel_1",
		value: "275Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 00:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 00:54"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "12/04/2024, 00:49"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "12/04/2024, 00:49"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "12/04/2024, 00:49"
	},
	{
		device_id: "solarpanel_1",
		value: "483Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 00:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 00:49"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "12/04/2024, 00:44"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "12/04/2024, 00:44"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 00:44"
	},
	{
		device_id: "solarpanel_1",
		value: "451Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 00:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 00:44"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "12/04/2024, 00:39"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "12/04/2024, 00:39"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "12/04/2024, 00:39"
	},
	{
		device_id: "solarpanel_1",
		value: "194Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 00:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 00:39"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "12/04/2024, 00:34"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "12/04/2024, 00:34"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "12/04/2024, 00:34"
	},
	{
		device_id: "solarpanel_1",
		value: "846Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 00:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 00:34"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "12/04/2024, 00:29"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "12/04/2024, 00:29"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 00:29"
	},
	{
		device_id: "solarpanel_1",
		value: "487Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 00:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 00:29"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "12/04/2024, 00:24"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "12/04/2024, 00:24"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "12/04/2024, 00:24"
	},
	{
		device_id: "solarpanel_1",
		value: "630Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 00:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 00:24"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "12/04/2024, 00:19"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "12/04/2024, 00:19"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "12/04/2024, 00:19"
	},
	{
		device_id: "solarpanel_1",
		value: "392Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 00:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 00:19"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "12/04/2024, 00:14"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "12/04/2024, 00:14"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "12/04/2024, 00:14"
	},
	{
		device_id: "solarpanel_1",
		value: "338Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 00:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 00:14"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "12/04/2024, 00:09"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "12/04/2024, 00:09"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "12/04/2024, 00:09"
	},
	{
		device_id: "solarpanel_1",
		value: "348Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 00:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "12/04/2024, 00:09"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "12/04/2024, 00:04"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "12/04/2024, 00:04"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "12/04/2024, 00:04"
	},
	{
		device_id: "solarpanel_1",
		value: "955Lux",
		type: "Sun Intensity",
		timestamp: "12/04/2024, 00:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "12/04/2024, 00:04"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "11/04/2024, 23:59"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "11/04/2024, 23:59"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "11/04/2024, 23:59"
	},
	{
		device_id: "solarpanel_1",
		value: "802Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 23:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 23:59"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "11/04/2024, 23:54"
	},
	{
		device_id: "temp_1",
		value: "25°C",
		type: "temperature",
		timestamp: "11/04/2024, 23:54"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "11/04/2024, 23:54"
	},
	{
		device_id: "solarpanel_1",
		value: "113Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 23:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 23:54"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "11/04/2024, 23:49"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "11/04/2024, 23:49"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "11/04/2024, 23:49"
	},
	{
		device_id: "solarpanel_1",
		value: "128Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 23:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 23:49"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "11/04/2024, 23:44"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "11/04/2024, 23:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "11/04/2024, 23:44"
	},
	{
		device_id: "solarpanel_1",
		value: "977Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 23:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 23:44"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "11/04/2024, 23:39"
	},
	{
		device_id: "temp_1",
		value: "78°C",
		type: "temperature",
		timestamp: "11/04/2024, 23:39"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "11/04/2024, 23:39"
	},
	{
		device_id: "solarpanel_1",
		value: "569Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 23:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 23:39"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "11/04/2024, 23:34"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "11/04/2024, 23:34"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "11/04/2024, 23:34"
	},
	{
		device_id: "solarpanel_1",
		value: "789Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 23:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 23:34"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "11/04/2024, 23:29"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "11/04/2024, 23:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "11/04/2024, 23:29"
	},
	{
		device_id: "solarpanel_1",
		value: "295Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 23:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 23:29"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "11/04/2024, 23:24"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "11/04/2024, 23:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "11/04/2024, 23:24"
	},
	{
		device_id: "solarpanel_1",
		value: "152Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 23:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 23:24"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "11/04/2024, 23:19"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "11/04/2024, 23:19"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "11/04/2024, 23:19"
	},
	{
		device_id: "solarpanel_1",
		value: "89Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 23:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 23:19"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "11/04/2024, 23:14"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "11/04/2024, 23:14"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "11/04/2024, 23:14"
	},
	{
		device_id: "solarpanel_1",
		value: "817Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 23:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 23:14"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "11/04/2024, 23:09"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "11/04/2024, 23:09"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "11/04/2024, 23:09"
	},
	{
		device_id: "solarpanel_1",
		value: "848Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 23:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 23:09"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "11/04/2024, 23:04"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "11/04/2024, 23:04"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "11/04/2024, 23:04"
	},
	{
		device_id: "solarpanel_1",
		value: "677Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 23:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 23:04"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "11/04/2024, 22:59"
	},
	{
		device_id: "temp_1",
		value: "57°C",
		type: "temperature",
		timestamp: "11/04/2024, 22:59"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "11/04/2024, 22:59"
	},
	{
		device_id: "solarpanel_1",
		value: "225Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 22:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 22:59"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "11/04/2024, 22:54"
	},
	{
		device_id: "temp_1",
		value: "16°C",
		type: "temperature",
		timestamp: "11/04/2024, 22:54"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "11/04/2024, 22:54"
	},
	{
		device_id: "solarpanel_1",
		value: "300Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 22:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 22:54"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "11/04/2024, 22:49"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "11/04/2024, 22:49"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "11/04/2024, 22:49"
	},
	{
		device_id: "solarpanel_1",
		value: "608Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 22:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 22:49"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "11/04/2024, 22:44"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "11/04/2024, 22:44"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "11/04/2024, 22:44"
	},
	{
		device_id: "solarpanel_1",
		value: "226Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 22:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 22:44"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "11/04/2024, 22:39"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "11/04/2024, 22:39"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "11/04/2024, 22:39"
	},
	{
		device_id: "solarpanel_1",
		value: "933Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 22:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 22:39"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "11/04/2024, 22:34"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "11/04/2024, 22:34"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "11/04/2024, 22:34"
	},
	{
		device_id: "solarpanel_1",
		value: "769Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 22:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 22:34"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "11/04/2024, 22:29"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "11/04/2024, 22:29"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "11/04/2024, 22:29"
	},
	{
		device_id: "solarpanel_1",
		value: "791Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 22:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 22:29"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "11/04/2024, 22:24"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "11/04/2024, 22:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "11/04/2024, 22:24"
	},
	{
		device_id: "solarpanel_1",
		value: "301Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 22:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 22:24"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "11/04/2024, 22:19"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "11/04/2024, 22:19"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "11/04/2024, 22:19"
	},
	{
		device_id: "solarpanel_1",
		value: "222Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 22:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 22:19"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "11/04/2024, 22:14"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "11/04/2024, 22:14"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "11/04/2024, 22:14"
	},
	{
		device_id: "solarpanel_1",
		value: "339Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 22:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 22:14"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "11/04/2024, 22:09"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "11/04/2024, 22:09"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "11/04/2024, 22:09"
	},
	{
		device_id: "solarpanel_1",
		value: "355Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 22:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 22:09"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "11/04/2024, 22:04"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "11/04/2024, 22:04"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "11/04/2024, 22:04"
	},
	{
		device_id: "solarpanel_1",
		value: "338Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 22:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 22:04"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "11/04/2024, 21:59"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "11/04/2024, 21:59"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "11/04/2024, 21:59"
	},
	{
		device_id: "solarpanel_1",
		value: "977Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 21:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 21:59"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "11/04/2024, 21:54"
	},
	{
		device_id: "temp_1",
		value: "90°C",
		type: "temperature",
		timestamp: "11/04/2024, 21:54"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "11/04/2024, 21:54"
	},
	{
		device_id: "solarpanel_1",
		value: "635Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 21:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 21:54"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "11/04/2024, 21:49"
	},
	{
		device_id: "temp_1",
		value: "26°C",
		type: "temperature",
		timestamp: "11/04/2024, 21:49"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "11/04/2024, 21:49"
	},
	{
		device_id: "solarpanel_1",
		value: "824Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 21:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 21:49"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "11/04/2024, 21:44"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "11/04/2024, 21:44"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "11/04/2024, 21:44"
	},
	{
		device_id: "solarpanel_1",
		value: "3Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 21:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 21:44"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "11/04/2024, 21:39"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "11/04/2024, 21:39"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "11/04/2024, 21:39"
	},
	{
		device_id: "solarpanel_1",
		value: "850Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 21:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 21:39"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "11/04/2024, 21:34"
	},
	{
		device_id: "temp_1",
		value: "31°C",
		type: "temperature",
		timestamp: "11/04/2024, 21:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "11/04/2024, 21:34"
	},
	{
		device_id: "solarpanel_1",
		value: "743Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 21:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 21:34"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "11/04/2024, 21:29"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "11/04/2024, 21:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "11/04/2024, 21:29"
	},
	{
		device_id: "solarpanel_1",
		value: "761Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 21:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 21:29"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "11/04/2024, 21:24"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "11/04/2024, 21:24"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "11/04/2024, 21:24"
	},
	{
		device_id: "solarpanel_1",
		value: "252Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 21:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 21:24"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "11/04/2024, 21:19"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "11/04/2024, 21:19"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "11/04/2024, 21:19"
	},
	{
		device_id: "solarpanel_1",
		value: "609Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 21:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 21:19"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "11/04/2024, 21:14"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "11/04/2024, 21:14"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "11/04/2024, 21:14"
	},
	{
		device_id: "solarpanel_1",
		value: "269Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 21:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 21:14"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "11/04/2024, 21:09"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "11/04/2024, 21:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "11/04/2024, 21:09"
	},
	{
		device_id: "solarpanel_1",
		value: "747Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 21:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 21:09"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "11/04/2024, 21:04"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "11/04/2024, 21:04"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "11/04/2024, 21:04"
	},
	{
		device_id: "solarpanel_1",
		value: "70Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 21:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 21:04"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "11/04/2024, 20:59"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "11/04/2024, 20:59"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "11/04/2024, 20:59"
	},
	{
		device_id: "solarpanel_1",
		value: "312Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 20:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 20:59"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "11/04/2024, 20:54"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "11/04/2024, 20:54"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "11/04/2024, 20:54"
	},
	{
		device_id: "solarpanel_1",
		value: "860Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 20:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 20:54"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "11/04/2024, 20:49"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "11/04/2024, 20:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "11/04/2024, 20:49"
	},
	{
		device_id: "solarpanel_1",
		value: "570Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 20:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 20:49"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "11/04/2024, 20:44"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "11/04/2024, 20:44"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "11/04/2024, 20:44"
	},
	{
		device_id: "solarpanel_1",
		value: "558Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 20:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 20:44"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "11/04/2024, 20:39"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "11/04/2024, 20:39"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "11/04/2024, 20:39"
	},
	{
		device_id: "solarpanel_1",
		value: "601Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 20:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 20:39"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "11/04/2024, 20:34"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "11/04/2024, 20:34"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "11/04/2024, 20:34"
	},
	{
		device_id: "solarpanel_1",
		value: "727Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 20:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 20:34"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "11/04/2024, 20:29"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "11/04/2024, 20:29"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "11/04/2024, 20:29"
	},
	{
		device_id: "solarpanel_1",
		value: "106Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 20:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 20:29"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "11/04/2024, 20:24"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "11/04/2024, 20:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "11/04/2024, 20:24"
	},
	{
		device_id: "solarpanel_1",
		value: "237Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 20:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 20:24"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "11/04/2024, 20:19"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "11/04/2024, 20:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "11/04/2024, 20:19"
	},
	{
		device_id: "solarpanel_1",
		value: "90Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 20:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 20:19"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "11/04/2024, 20:14"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "11/04/2024, 20:14"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "11/04/2024, 20:14"
	},
	{
		device_id: "solarpanel_1",
		value: "702Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 20:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 20:14"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "11/04/2024, 20:09"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "11/04/2024, 20:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "11/04/2024, 20:09"
	},
	{
		device_id: "solarpanel_1",
		value: "273Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 20:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 20:09"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "11/04/2024, 20:04"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "11/04/2024, 20:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "11/04/2024, 20:04"
	},
	{
		device_id: "solarpanel_1",
		value: "374Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 20:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 20:04"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "11/04/2024, 19:59"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "11/04/2024, 19:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "11/04/2024, 19:59"
	},
	{
		device_id: "solarpanel_1",
		value: "764Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 19:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 19:59"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "11/04/2024, 19:54"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "11/04/2024, 19:54"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "11/04/2024, 19:54"
	},
	{
		device_id: "solarpanel_1",
		value: "190Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 19:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 19:54"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "11/04/2024, 19:49"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "11/04/2024, 19:49"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "11/04/2024, 19:49"
	},
	{
		device_id: "solarpanel_1",
		value: "612Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 19:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 19:49"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "11/04/2024, 19:44"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "11/04/2024, 19:44"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "11/04/2024, 19:44"
	},
	{
		device_id: "solarpanel_1",
		value: "247Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 19:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 19:44"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "11/04/2024, 19:39"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "11/04/2024, 19:39"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "11/04/2024, 19:39"
	},
	{
		device_id: "solarpanel_1",
		value: "340Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 19:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 19:39"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "11/04/2024, 19:34"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "11/04/2024, 19:34"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "11/04/2024, 19:34"
	},
	{
		device_id: "solarpanel_1",
		value: "119Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 19:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 19:34"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "11/04/2024, 19:29"
	},
	{
		device_id: "temp_1",
		value: "20°C",
		type: "temperature",
		timestamp: "11/04/2024, 19:29"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "11/04/2024, 19:29"
	},
	{
		device_id: "solarpanel_1",
		value: "945Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 19:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 19:29"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "11/04/2024, 19:24"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "11/04/2024, 19:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "11/04/2024, 19:24"
	},
	{
		device_id: "solarpanel_1",
		value: "148Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 19:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 19:24"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "11/04/2024, 19:19"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "11/04/2024, 19:19"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "11/04/2024, 19:19"
	},
	{
		device_id: "solarpanel_1",
		value: "713Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 19:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 19:19"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "11/04/2024, 19:14"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "11/04/2024, 19:14"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "11/04/2024, 19:14"
	},
	{
		device_id: "solarpanel_1",
		value: "445Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 19:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 19:14"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "11/04/2024, 19:09"
	},
	{
		device_id: "temp_1",
		value: "37°C",
		type: "temperature",
		timestamp: "11/04/2024, 19:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "11/04/2024, 19:09"
	},
	{
		device_id: "solarpanel_1",
		value: "64Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 19:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "11/04/2024, 19:09"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "11/04/2024, 19:04"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "11/04/2024, 19:04"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "11/04/2024, 19:04"
	},
	{
		device_id: "solarpanel_1",
		value: "824Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 19:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 19:04"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "11/04/2024, 18:59"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "11/04/2024, 18:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "11/04/2024, 18:59"
	},
	{
		device_id: "solarpanel_1",
		value: "167Lux",
		type: "Sun Intensity",
		timestamp: "11/04/2024, 18:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "11/04/2024, 18:59"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "10/04/2024, 18:54"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "10/04/2024, 18:54"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 18:54"
	},
	{
		device_id: "solarpanel_1",
		value: "860Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 18:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 18:54"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "10/04/2024, 18:49"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "10/04/2024, 18:49"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 18:49"
	},
	{
		device_id: "solarpanel_1",
		value: "97Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 18:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 18:49"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "10/04/2024, 18:44"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "10/04/2024, 18:44"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 18:44"
	},
	{
		device_id: "solarpanel_1",
		value: "907Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 18:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 18:44"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "10/04/2024, 18:39"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "10/04/2024, 18:39"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "10/04/2024, 18:39"
	},
	{
		device_id: "solarpanel_1",
		value: "925Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 18:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 18:39"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "10/04/2024, 18:34"
	},
	{
		device_id: "temp_1",
		value: "76°C",
		type: "temperature",
		timestamp: "10/04/2024, 18:34"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 18:34"
	},
	{
		device_id: "solarpanel_1",
		value: "762Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 18:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 18:34"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "10/04/2024, 18:29"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "10/04/2024, 18:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 18:29"
	},
	{
		device_id: "solarpanel_1",
		value: "359Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 18:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 18:29"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "10/04/2024, 18:24"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "10/04/2024, 18:24"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 18:24"
	},
	{
		device_id: "solarpanel_1",
		value: "60Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 18:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 18:24"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "10/04/2024, 18:19"
	},
	{
		device_id: "temp_1",
		value: "12°C",
		type: "temperature",
		timestamp: "10/04/2024, 18:19"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "10/04/2024, 18:19"
	},
	{
		device_id: "solarpanel_1",
		value: "588Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 18:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 18:19"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "10/04/2024, 18:14"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "10/04/2024, 18:14"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 18:14"
	},
	{
		device_id: "solarpanel_1",
		value: "126Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 18:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 18:14"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "10/04/2024, 18:09"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "10/04/2024, 18:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 18:09"
	},
	{
		device_id: "solarpanel_1",
		value: "514Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 18:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 18:09"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "10/04/2024, 18:04"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "10/04/2024, 18:04"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 18:04"
	},
	{
		device_id: "solarpanel_1",
		value: "198Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 18:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 18:04"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "10/04/2024, 17:59"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "10/04/2024, 17:59"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 17:59"
	},
	{
		device_id: "solarpanel_1",
		value: "225Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 17:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 17:59"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "10/04/2024, 17:54"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "10/04/2024, 17:54"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 17:54"
	},
	{
		device_id: "solarpanel_1",
		value: "67Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 17:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 17:54"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "10/04/2024, 17:49"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "10/04/2024, 17:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "10/04/2024, 17:49"
	},
	{
		device_id: "solarpanel_1",
		value: "610Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 17:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 17:49"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "10/04/2024, 17:44"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "10/04/2024, 17:44"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 17:44"
	},
	{
		device_id: "solarpanel_1",
		value: "899Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 17:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 17:44"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "10/04/2024, 17:39"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "10/04/2024, 17:39"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 17:39"
	},
	{
		device_id: "solarpanel_1",
		value: "999Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 17:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 17:39"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "10/04/2024, 17:34"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "10/04/2024, 17:34"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "10/04/2024, 17:34"
	},
	{
		device_id: "solarpanel_1",
		value: "625Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 17:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 17:34"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "10/04/2024, 17:29"
	},
	{
		device_id: "temp_1",
		value: "20°C",
		type: "temperature",
		timestamp: "10/04/2024, 17:29"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 17:29"
	},
	{
		device_id: "solarpanel_1",
		value: "706Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 17:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 17:29"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "10/04/2024, 17:24"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "10/04/2024, 17:24"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 17:24"
	},
	{
		device_id: "solarpanel_1",
		value: "813Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 17:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 17:24"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "10/04/2024, 17:19"
	},
	{
		device_id: "temp_1",
		value: "26°C",
		type: "temperature",
		timestamp: "10/04/2024, 17:19"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 17:19"
	},
	{
		device_id: "solarpanel_1",
		value: "179Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 17:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 17:19"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "10/04/2024, 17:14"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "10/04/2024, 17:14"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 17:14"
	},
	{
		device_id: "solarpanel_1",
		value: "183Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 17:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 17:14"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "10/04/2024, 17:09"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "10/04/2024, 17:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 17:09"
	},
	{
		device_id: "solarpanel_1",
		value: "140Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 17:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 17:09"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "10/04/2024, 17:04"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "10/04/2024, 17:04"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "10/04/2024, 17:04"
	},
	{
		device_id: "solarpanel_1",
		value: "688Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 17:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 17:04"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "10/04/2024, 16:59"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "10/04/2024, 16:59"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "10/04/2024, 16:59"
	},
	{
		device_id: "solarpanel_1",
		value: "182Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 16:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 16:59"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "10/04/2024, 16:54"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "10/04/2024, 16:54"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 16:54"
	},
	{
		device_id: "solarpanel_1",
		value: "868Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 16:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 16:54"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "10/04/2024, 16:49"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "10/04/2024, 16:49"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 16:49"
	},
	{
		device_id: "solarpanel_1",
		value: "140Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 16:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 16:49"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "10/04/2024, 16:44"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "10/04/2024, 16:44"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 16:44"
	},
	{
		device_id: "solarpanel_1",
		value: "609Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 16:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 16:44"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "10/04/2024, 16:39"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "10/04/2024, 16:39"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 16:39"
	},
	{
		device_id: "solarpanel_1",
		value: "869Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 16:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 16:39"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "10/04/2024, 16:34"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "10/04/2024, 16:34"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 16:34"
	},
	{
		device_id: "solarpanel_1",
		value: "499Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 16:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 16:34"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "10/04/2024, 16:29"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "10/04/2024, 16:29"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "10/04/2024, 16:29"
	},
	{
		device_id: "solarpanel_1",
		value: "122Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 16:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 16:29"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "10/04/2024, 16:24"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "10/04/2024, 16:24"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 16:24"
	},
	{
		device_id: "solarpanel_1",
		value: "603Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 16:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 16:24"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "10/04/2024, 16:19"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "10/04/2024, 16:19"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 16:19"
	},
	{
		device_id: "solarpanel_1",
		value: "489Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 16:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 16:19"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "10/04/2024, 16:14"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "10/04/2024, 16:14"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 16:14"
	},
	{
		device_id: "solarpanel_1",
		value: "205Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 16:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 16:14"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "10/04/2024, 16:09"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "10/04/2024, 16:09"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "10/04/2024, 16:09"
	},
	{
		device_id: "solarpanel_1",
		value: "232Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 16:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 16:09"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "10/04/2024, 16:04"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "10/04/2024, 16:04"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "10/04/2024, 16:04"
	},
	{
		device_id: "solarpanel_1",
		value: "475Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 16:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 16:04"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "10/04/2024, 15:59"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "10/04/2024, 15:59"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 15:59"
	},
	{
		device_id: "solarpanel_1",
		value: "400Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 15:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 15:59"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "10/04/2024, 15:54"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "10/04/2024, 15:54"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 15:54"
	},
	{
		device_id: "solarpanel_1",
		value: "354Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 15:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 15:54"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "10/04/2024, 15:49"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "10/04/2024, 15:49"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 15:49"
	},
	{
		device_id: "solarpanel_1",
		value: "3Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 15:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 15:49"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "10/04/2024, 15:44"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "10/04/2024, 15:44"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 15:44"
	},
	{
		device_id: "solarpanel_1",
		value: "279Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 15:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 15:44"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "10/04/2024, 15:39"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "10/04/2024, 15:39"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 15:39"
	},
	{
		device_id: "solarpanel_1",
		value: "504Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 15:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 15:39"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "10/04/2024, 15:34"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "10/04/2024, 15:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 15:34"
	},
	{
		device_id: "solarpanel_1",
		value: "546Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 15:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 15:34"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "10/04/2024, 15:29"
	},
	{
		device_id: "temp_1",
		value: "37°C",
		type: "temperature",
		timestamp: "10/04/2024, 15:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 15:29"
	},
	{
		device_id: "solarpanel_1",
		value: "128Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 15:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 15:29"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "10/04/2024, 15:24"
	},
	{
		device_id: "temp_1",
		value: "25°C",
		type: "temperature",
		timestamp: "10/04/2024, 15:24"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 15:24"
	},
	{
		device_id: "solarpanel_1",
		value: "227Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 15:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 15:24"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "10/04/2024, 15:19"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "10/04/2024, 15:19"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 15:19"
	},
	{
		device_id: "solarpanel_1",
		value: "9Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 15:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 15:19"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "10/04/2024, 15:14"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "10/04/2024, 15:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "10/04/2024, 15:14"
	},
	{
		device_id: "solarpanel_1",
		value: "670Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 15:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 15:14"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "10/04/2024, 15:09"
	},
	{
		device_id: "temp_1",
		value: "28°C",
		type: "temperature",
		timestamp: "10/04/2024, 15:09"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 15:09"
	},
	{
		device_id: "solarpanel_1",
		value: "345Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 15:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 15:09"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "10/04/2024, 15:04"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "10/04/2024, 15:04"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 15:04"
	},
	{
		device_id: "solarpanel_1",
		value: "144Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 15:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 15:04"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "10/04/2024, 14:59"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "10/04/2024, 14:59"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 14:59"
	},
	{
		device_id: "solarpanel_1",
		value: "555Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 14:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 14:59"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "10/04/2024, 14:54"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "10/04/2024, 14:54"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 14:54"
	},
	{
		device_id: "solarpanel_1",
		value: "816Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 14:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 14:54"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "10/04/2024, 14:49"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "10/04/2024, 14:49"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "10/04/2024, 14:49"
	},
	{
		device_id: "solarpanel_1",
		value: "991Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 14:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 14:49"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "10/04/2024, 14:44"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "10/04/2024, 14:44"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "10/04/2024, 14:44"
	},
	{
		device_id: "solarpanel_1",
		value: "492Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 14:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 14:44"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "10/04/2024, 14:39"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "10/04/2024, 14:39"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 14:39"
	},
	{
		device_id: "solarpanel_1",
		value: "44Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 14:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 14:39"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "10/04/2024, 14:34"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "10/04/2024, 14:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 14:34"
	},
	{
		device_id: "solarpanel_1",
		value: "892Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 14:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 14:34"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "10/04/2024, 14:29"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "10/04/2024, 14:29"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 14:29"
	},
	{
		device_id: "solarpanel_1",
		value: "664Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 14:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 14:29"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "10/04/2024, 14:24"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "10/04/2024, 14:24"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "10/04/2024, 14:24"
	},
	{
		device_id: "solarpanel_1",
		value: "537Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 14:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 14:24"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "10/04/2024, 14:19"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "10/04/2024, 14:19"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 14:19"
	},
	{
		device_id: "solarpanel_1",
		value: "637Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 14:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 14:19"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "10/04/2024, 14:14"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "10/04/2024, 14:14"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 14:14"
	},
	{
		device_id: "solarpanel_1",
		value: "705Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 14:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 14:14"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "10/04/2024, 14:09"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "10/04/2024, 14:09"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 14:09"
	},
	{
		device_id: "solarpanel_1",
		value: "735Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 14:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 14:09"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "10/04/2024, 14:04"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "10/04/2024, 14:04"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "10/04/2024, 14:04"
	},
	{
		device_id: "solarpanel_1",
		value: "634Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 14:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 14:04"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "10/04/2024, 13:59"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "10/04/2024, 13:59"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "10/04/2024, 13:59"
	},
	{
		device_id: "solarpanel_1",
		value: "6Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 13:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 13:59"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "10/04/2024, 13:54"
	},
	{
		device_id: "temp_1",
		value: "8°C",
		type: "temperature",
		timestamp: "10/04/2024, 13:54"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "10/04/2024, 13:54"
	},
	{
		device_id: "solarpanel_1",
		value: "603Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 13:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 13:54"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "10/04/2024, 13:49"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "10/04/2024, 13:49"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "10/04/2024, 13:49"
	},
	{
		device_id: "solarpanel_1",
		value: "227Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 13:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 13:49"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "10/04/2024, 13:44"
	},
	{
		device_id: "temp_1",
		value: "93°C",
		type: "temperature",
		timestamp: "10/04/2024, 13:44"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "10/04/2024, 13:44"
	},
	{
		device_id: "solarpanel_1",
		value: "736Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 13:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 13:44"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "10/04/2024, 13:39"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "10/04/2024, 13:39"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 13:39"
	},
	{
		device_id: "solarpanel_1",
		value: "554Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 13:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 13:39"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "10/04/2024, 13:34"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "10/04/2024, 13:34"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 13:34"
	},
	{
		device_id: "solarpanel_1",
		value: "546Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 13:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 13:34"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "10/04/2024, 13:29"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "10/04/2024, 13:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 13:29"
	},
	{
		device_id: "solarpanel_1",
		value: "584Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 13:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 13:29"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "10/04/2024, 13:24"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "10/04/2024, 13:24"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "10/04/2024, 13:24"
	},
	{
		device_id: "solarpanel_1",
		value: "14Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 13:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 13:24"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "10/04/2024, 13:19"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "10/04/2024, 13:19"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 13:19"
	},
	{
		device_id: "solarpanel_1",
		value: "428Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 13:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 13:19"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "10/04/2024, 13:14"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "10/04/2024, 13:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 13:14"
	},
	{
		device_id: "solarpanel_1",
		value: "293Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 13:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 13:14"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "10/04/2024, 13:09"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "10/04/2024, 13:09"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 13:09"
	},
	{
		device_id: "solarpanel_1",
		value: "648Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 13:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 13:09"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "10/04/2024, 13:04"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "10/04/2024, 13:04"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "10/04/2024, 13:04"
	},
	{
		device_id: "solarpanel_1",
		value: "631Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 13:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 13:04"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "10/04/2024, 12:59"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "10/04/2024, 12:59"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 12:59"
	},
	{
		device_id: "solarpanel_1",
		value: "62Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 12:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 12:59"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "10/04/2024, 12:54"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "10/04/2024, 12:54"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 12:54"
	},
	{
		device_id: "solarpanel_1",
		value: "876Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 12:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 12:54"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "10/04/2024, 12:49"
	},
	{
		device_id: "temp_1",
		value: "42°C",
		type: "temperature",
		timestamp: "10/04/2024, 12:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "10/04/2024, 12:49"
	},
	{
		device_id: "solarpanel_1",
		value: "161Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 12:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 12:49"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "10/04/2024, 12:44"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "10/04/2024, 12:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 12:44"
	},
	{
		device_id: "solarpanel_1",
		value: "6Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 12:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 12:44"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "10/04/2024, 12:39"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "10/04/2024, 12:39"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "10/04/2024, 12:39"
	},
	{
		device_id: "solarpanel_1",
		value: "194Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 12:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 12:39"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "10/04/2024, 12:34"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "10/04/2024, 12:34"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "10/04/2024, 12:34"
	},
	{
		device_id: "solarpanel_1",
		value: "416Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 12:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 12:34"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "10/04/2024, 12:29"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "10/04/2024, 12:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 12:29"
	},
	{
		device_id: "solarpanel_1",
		value: "192Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 12:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 12:29"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "10/04/2024, 12:24"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "10/04/2024, 12:24"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 12:24"
	},
	{
		device_id: "solarpanel_1",
		value: "386Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 12:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 12:24"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "10/04/2024, 12:19"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "10/04/2024, 12:19"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 12:19"
	},
	{
		device_id: "solarpanel_1",
		value: "634Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 12:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 12:19"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "10/04/2024, 12:14"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "10/04/2024, 12:14"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "10/04/2024, 12:14"
	},
	{
		device_id: "solarpanel_1",
		value: "223Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 12:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 12:14"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "10/04/2024, 12:09"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "10/04/2024, 12:09"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 12:09"
	},
	{
		device_id: "solarpanel_1",
		value: "894Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 12:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 12:09"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "10/04/2024, 12:04"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "10/04/2024, 12:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 12:04"
	},
	{
		device_id: "solarpanel_1",
		value: "696Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 12:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 12:04"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "10/04/2024, 11:59"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "10/04/2024, 11:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 11:59"
	},
	{
		device_id: "solarpanel_1",
		value: "86Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 11:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 11:59"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "10/04/2024, 11:54"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "10/04/2024, 11:54"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "10/04/2024, 11:54"
	},
	{
		device_id: "solarpanel_1",
		value: "551Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 11:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 11:54"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "10/04/2024, 11:49"
	},
	{
		device_id: "temp_1",
		value: "25°C",
		type: "temperature",
		timestamp: "10/04/2024, 11:49"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 11:49"
	},
	{
		device_id: "solarpanel_1",
		value: "620Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 11:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 11:49"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "10/04/2024, 11:44"
	},
	{
		device_id: "temp_1",
		value: "31°C",
		type: "temperature",
		timestamp: "10/04/2024, 11:44"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 11:44"
	},
	{
		device_id: "solarpanel_1",
		value: "701Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 11:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 11:44"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "10/04/2024, 11:39"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "10/04/2024, 11:39"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "10/04/2024, 11:39"
	},
	{
		device_id: "solarpanel_1",
		value: "156Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 11:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 11:39"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "10/04/2024, 11:34"
	},
	{
		device_id: "temp_1",
		value: "42°C",
		type: "temperature",
		timestamp: "10/04/2024, 11:34"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "10/04/2024, 11:34"
	},
	{
		device_id: "solarpanel_1",
		value: "703Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 11:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 11:34"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "10/04/2024, 11:29"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "10/04/2024, 11:29"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 11:29"
	},
	{
		device_id: "solarpanel_1",
		value: "31Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 11:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 11:29"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "10/04/2024, 11:24"
	},
	{
		device_id: "temp_1",
		value: "10°C",
		type: "temperature",
		timestamp: "10/04/2024, 11:24"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 11:24"
	},
	{
		device_id: "solarpanel_1",
		value: "77Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 11:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 11:24"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "10/04/2024, 11:19"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "10/04/2024, 11:19"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 11:19"
	},
	{
		device_id: "solarpanel_1",
		value: "297Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 11:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 11:19"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "10/04/2024, 11:14"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "10/04/2024, 11:14"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 11:14"
	},
	{
		device_id: "solarpanel_1",
		value: "170Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 11:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 11:14"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "10/04/2024, 11:09"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "10/04/2024, 11:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 11:09"
	},
	{
		device_id: "solarpanel_1",
		value: "112Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 11:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 11:09"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "10/04/2024, 11:04"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "10/04/2024, 11:04"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "10/04/2024, 11:04"
	},
	{
		device_id: "solarpanel_1",
		value: "433Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 11:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 11:04"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "10/04/2024, 10:59"
	},
	{
		device_id: "temp_1",
		value: "26°C",
		type: "temperature",
		timestamp: "10/04/2024, 10:59"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 10:59"
	},
	{
		device_id: "solarpanel_1",
		value: "733Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 10:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 10:59"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "10/04/2024, 10:54"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "10/04/2024, 10:54"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 10:54"
	},
	{
		device_id: "solarpanel_1",
		value: "427Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 10:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 10:54"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "10/04/2024, 10:49"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "10/04/2024, 10:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "10/04/2024, 10:49"
	},
	{
		device_id: "solarpanel_1",
		value: "889Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 10:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 10:49"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "10/04/2024, 10:44"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "10/04/2024, 10:44"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "10/04/2024, 10:44"
	},
	{
		device_id: "solarpanel_1",
		value: "495Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 10:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 10:44"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "10/04/2024, 10:39"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "10/04/2024, 10:39"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 10:39"
	},
	{
		device_id: "solarpanel_1",
		value: "717Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 10:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 10:39"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "10/04/2024, 10:34"
	},
	{
		device_id: "temp_1",
		value: "93°C",
		type: "temperature",
		timestamp: "10/04/2024, 10:34"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 10:34"
	},
	{
		device_id: "solarpanel_1",
		value: "142Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 10:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 10:34"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "10/04/2024, 10:29"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "10/04/2024, 10:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 10:29"
	},
	{
		device_id: "solarpanel_1",
		value: "526Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 10:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 10:29"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "10/04/2024, 10:24"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "10/04/2024, 10:24"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 10:24"
	},
	{
		device_id: "solarpanel_1",
		value: "581Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 10:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 10:24"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "10/04/2024, 10:19"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "10/04/2024, 10:19"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "10/04/2024, 10:19"
	},
	{
		device_id: "solarpanel_1",
		value: "828Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 10:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 10:19"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "10/04/2024, 10:14"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "10/04/2024, 10:14"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 10:14"
	},
	{
		device_id: "solarpanel_1",
		value: "757Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 10:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 10:14"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "10/04/2024, 10:09"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "10/04/2024, 10:09"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 10:09"
	},
	{
		device_id: "solarpanel_1",
		value: "748Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 10:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 10:09"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "10/04/2024, 10:04"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "10/04/2024, 10:04"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 10:04"
	},
	{
		device_id: "solarpanel_1",
		value: "593Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 10:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 10:04"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "10/04/2024, 09:59"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "10/04/2024, 09:59"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 09:59"
	},
	{
		device_id: "solarpanel_1",
		value: "633Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 09:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 09:59"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "10/04/2024, 09:54"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "10/04/2024, 09:54"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 09:54"
	},
	{
		device_id: "solarpanel_1",
		value: "415Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 09:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 09:54"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "10/04/2024, 09:49"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "10/04/2024, 09:49"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 09:49"
	},
	{
		device_id: "solarpanel_1",
		value: "980Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 09:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 09:49"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "10/04/2024, 09:44"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "10/04/2024, 09:44"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 09:44"
	},
	{
		device_id: "solarpanel_1",
		value: "403Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 09:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 09:44"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "10/04/2024, 09:39"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "10/04/2024, 09:39"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 09:39"
	},
	{
		device_id: "solarpanel_1",
		value: "703Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 09:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 09:39"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "10/04/2024, 09:34"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "10/04/2024, 09:34"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 09:34"
	},
	{
		device_id: "solarpanel_1",
		value: "342Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 09:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 09:34"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "10/04/2024, 09:29"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "10/04/2024, 09:29"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "10/04/2024, 09:29"
	},
	{
		device_id: "solarpanel_1",
		value: "100Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 09:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 09:29"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "10/04/2024, 09:24"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "10/04/2024, 09:24"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "10/04/2024, 09:24"
	},
	{
		device_id: "solarpanel_1",
		value: "969Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 09:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 09:24"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "10/04/2024, 09:19"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "10/04/2024, 09:19"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "10/04/2024, 09:19"
	},
	{
		device_id: "solarpanel_1",
		value: "800Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 09:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 09:19"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "10/04/2024, 09:14"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "10/04/2024, 09:14"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 09:14"
	},
	{
		device_id: "solarpanel_1",
		value: "178Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 09:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 09:14"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "10/04/2024, 09:09"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "10/04/2024, 09:09"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "10/04/2024, 09:09"
	},
	{
		device_id: "solarpanel_1",
		value: "867Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 09:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 09:09"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "10/04/2024, 09:04"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "10/04/2024, 09:04"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "10/04/2024, 09:04"
	},
	{
		device_id: "solarpanel_1",
		value: "716Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 09:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 09:04"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "10/04/2024, 08:59"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "10/04/2024, 08:59"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "10/04/2024, 08:59"
	},
	{
		device_id: "solarpanel_1",
		value: "74Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 08:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 08:59"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "10/04/2024, 08:54"
	},
	{
		device_id: "temp_1",
		value: "26°C",
		type: "temperature",
		timestamp: "10/04/2024, 08:54"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 08:54"
	},
	{
		device_id: "solarpanel_1",
		value: "298Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 08:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 08:54"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "10/04/2024, 08:49"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "10/04/2024, 08:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 08:49"
	},
	{
		device_id: "solarpanel_1",
		value: "911Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 08:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 08:49"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "10/04/2024, 08:44"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "10/04/2024, 08:44"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 08:44"
	},
	{
		device_id: "solarpanel_1",
		value: "231Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 08:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 08:44"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "10/04/2024, 08:39"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "10/04/2024, 08:39"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "10/04/2024, 08:39"
	},
	{
		device_id: "solarpanel_1",
		value: "191Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 08:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 08:39"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "10/04/2024, 08:34"
	},
	{
		device_id: "temp_1",
		value: "76°C",
		type: "temperature",
		timestamp: "10/04/2024, 08:34"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 08:34"
	},
	{
		device_id: "solarpanel_1",
		value: "497Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 08:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 08:34"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "10/04/2024, 08:29"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "10/04/2024, 08:29"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "10/04/2024, 08:29"
	},
	{
		device_id: "solarpanel_1",
		value: "48Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 08:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 08:29"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "10/04/2024, 08:24"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "10/04/2024, 08:24"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 08:24"
	},
	{
		device_id: "solarpanel_1",
		value: "67Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 08:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 08:24"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "10/04/2024, 08:19"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "10/04/2024, 08:19"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 08:19"
	},
	{
		device_id: "solarpanel_1",
		value: "904Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 08:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 08:19"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "10/04/2024, 08:14"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "10/04/2024, 08:14"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 08:14"
	},
	{
		device_id: "solarpanel_1",
		value: "311Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 08:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 08:14"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "10/04/2024, 08:09"
	},
	{
		device_id: "temp_1",
		value: "28°C",
		type: "temperature",
		timestamp: "10/04/2024, 08:09"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 08:09"
	},
	{
		device_id: "solarpanel_1",
		value: "885Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 08:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 08:09"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "10/04/2024, 08:04"
	},
	{
		device_id: "temp_1",
		value: "31°C",
		type: "temperature",
		timestamp: "10/04/2024, 08:04"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "10/04/2024, 08:04"
	},
	{
		device_id: "solarpanel_1",
		value: "28Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 08:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 08:04"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "10/04/2024, 07:59"
	},
	{
		device_id: "temp_1",
		value: "42°C",
		type: "temperature",
		timestamp: "10/04/2024, 07:59"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "10/04/2024, 07:59"
	},
	{
		device_id: "solarpanel_1",
		value: "291Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 07:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 07:59"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "10/04/2024, 07:54"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "10/04/2024, 07:54"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "10/04/2024, 07:54"
	},
	{
		device_id: "solarpanel_1",
		value: "40Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 07:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 07:54"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "10/04/2024, 07:49"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "10/04/2024, 07:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 07:49"
	},
	{
		device_id: "solarpanel_1",
		value: "151Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 07:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 07:49"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "10/04/2024, 07:44"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "10/04/2024, 07:44"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 07:44"
	},
	{
		device_id: "solarpanel_1",
		value: "754Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 07:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 07:44"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "10/04/2024, 07:39"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "10/04/2024, 07:39"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 07:39"
	},
	{
		device_id: "solarpanel_1",
		value: "139Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 07:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 07:39"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "10/04/2024, 07:34"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "10/04/2024, 07:34"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 07:34"
	},
	{
		device_id: "solarpanel_1",
		value: "242Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 07:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 07:34"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "10/04/2024, 07:29"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "10/04/2024, 07:29"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 07:29"
	},
	{
		device_id: "solarpanel_1",
		value: "269Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 07:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 07:29"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "10/04/2024, 07:24"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "10/04/2024, 07:24"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 07:24"
	},
	{
		device_id: "solarpanel_1",
		value: "10Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 07:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 07:24"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "10/04/2024, 07:19"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "10/04/2024, 07:19"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 07:19"
	},
	{
		device_id: "solarpanel_1",
		value: "886Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 07:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 07:19"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "10/04/2024, 07:14"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "10/04/2024, 07:14"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 07:14"
	},
	{
		device_id: "solarpanel_1",
		value: "322Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 07:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 07:14"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "10/04/2024, 07:09"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "10/04/2024, 07:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 07:09"
	},
	{
		device_id: "solarpanel_1",
		value: "6Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 07:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 07:09"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "10/04/2024, 07:04"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "10/04/2024, 07:04"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "10/04/2024, 07:04"
	},
	{
		device_id: "solarpanel_1",
		value: "728Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 07:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 07:04"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "10/04/2024, 06:59"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "10/04/2024, 06:59"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 06:59"
	},
	{
		device_id: "solarpanel_1",
		value: "898Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 06:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 06:59"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "10/04/2024, 06:54"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "10/04/2024, 06:54"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 06:54"
	},
	{
		device_id: "solarpanel_1",
		value: "720Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 06:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 06:54"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "10/04/2024, 06:49"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "10/04/2024, 06:49"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 06:49"
	},
	{
		device_id: "solarpanel_1",
		value: "590Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 06:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 06:49"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "10/04/2024, 06:44"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "10/04/2024, 06:44"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 06:44"
	},
	{
		device_id: "solarpanel_1",
		value: "622Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 06:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 06:44"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "10/04/2024, 06:39"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "10/04/2024, 06:39"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 06:39"
	},
	{
		device_id: "solarpanel_1",
		value: "623Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 06:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 06:39"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "10/04/2024, 06:34"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "10/04/2024, 06:34"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 06:34"
	},
	{
		device_id: "solarpanel_1",
		value: "381Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 06:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 06:34"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "10/04/2024, 06:29"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "10/04/2024, 06:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "10/04/2024, 06:29"
	},
	{
		device_id: "solarpanel_1",
		value: "542Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 06:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 06:29"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "10/04/2024, 06:24"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "10/04/2024, 06:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 06:24"
	},
	{
		device_id: "solarpanel_1",
		value: "617Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 06:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 06:24"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "10/04/2024, 06:19"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "10/04/2024, 06:19"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 06:19"
	},
	{
		device_id: "solarpanel_1",
		value: "691Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 06:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 06:19"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "10/04/2024, 06:14"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "10/04/2024, 06:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 06:14"
	},
	{
		device_id: "solarpanel_1",
		value: "915Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 06:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 06:14"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "10/04/2024, 06:09"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "10/04/2024, 06:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 06:09"
	},
	{
		device_id: "solarpanel_1",
		value: "148Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 06:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 06:09"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "10/04/2024, 06:04"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "10/04/2024, 06:04"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 06:04"
	},
	{
		device_id: "solarpanel_1",
		value: "15Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 06:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 06:04"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "10/04/2024, 05:59"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "10/04/2024, 05:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 05:59"
	},
	{
		device_id: "solarpanel_1",
		value: "582Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 05:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 05:59"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "10/04/2024, 05:54"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "10/04/2024, 05:54"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 05:54"
	},
	{
		device_id: "solarpanel_1",
		value: "852Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 05:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 05:54"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "10/04/2024, 05:49"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "10/04/2024, 05:49"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 05:49"
	},
	{
		device_id: "solarpanel_1",
		value: "245Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 05:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 05:49"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "10/04/2024, 05:44"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "10/04/2024, 05:44"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 05:44"
	},
	{
		device_id: "solarpanel_1",
		value: "153Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 05:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 05:44"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "10/04/2024, 05:39"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "10/04/2024, 05:39"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 05:39"
	},
	{
		device_id: "solarpanel_1",
		value: "536Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 05:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 05:39"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "10/04/2024, 05:34"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "10/04/2024, 05:34"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 05:34"
	},
	{
		device_id: "solarpanel_1",
		value: "606Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 05:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 05:34"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "10/04/2024, 05:29"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "10/04/2024, 05:29"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 05:29"
	},
	{
		device_id: "solarpanel_1",
		value: "64Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 05:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 05:29"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "10/04/2024, 05:24"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "10/04/2024, 05:24"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "10/04/2024, 05:24"
	},
	{
		device_id: "solarpanel_1",
		value: "801Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 05:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 05:24"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "10/04/2024, 05:19"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "10/04/2024, 05:19"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 05:19"
	},
	{
		device_id: "solarpanel_1",
		value: "631Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 05:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 05:19"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "10/04/2024, 05:14"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "10/04/2024, 05:14"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 05:14"
	},
	{
		device_id: "solarpanel_1",
		value: "889Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 05:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 05:14"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "10/04/2024, 05:09"
	},
	{
		device_id: "temp_1",
		value: "20°C",
		type: "temperature",
		timestamp: "10/04/2024, 05:09"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "10/04/2024, 05:09"
	},
	{
		device_id: "solarpanel_1",
		value: "205Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 05:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 05:09"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "10/04/2024, 05:04"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "10/04/2024, 05:04"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "10/04/2024, 05:04"
	},
	{
		device_id: "solarpanel_1",
		value: "209Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 05:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 05:04"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "10/04/2024, 04:59"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "10/04/2024, 04:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 04:59"
	},
	{
		device_id: "solarpanel_1",
		value: "148Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 04:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 04:59"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "10/04/2024, 04:54"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "10/04/2024, 04:54"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 04:54"
	},
	{
		device_id: "solarpanel_1",
		value: "465Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 04:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 04:54"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "10/04/2024, 04:49"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "10/04/2024, 04:49"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 04:49"
	},
	{
		device_id: "solarpanel_1",
		value: "814Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 04:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 04:49"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "10/04/2024, 04:44"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "10/04/2024, 04:44"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "10/04/2024, 04:44"
	},
	{
		device_id: "solarpanel_1",
		value: "31Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 04:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 04:44"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "10/04/2024, 04:39"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "10/04/2024, 04:39"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 04:39"
	},
	{
		device_id: "solarpanel_1",
		value: "56Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 04:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 04:39"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "10/04/2024, 04:34"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "10/04/2024, 04:34"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 04:34"
	},
	{
		device_id: "solarpanel_1",
		value: "82Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 04:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 04:34"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "10/04/2024, 04:29"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "10/04/2024, 04:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 04:29"
	},
	{
		device_id: "solarpanel_1",
		value: "666Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 04:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 04:29"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "10/04/2024, 04:24"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "10/04/2024, 04:24"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 04:24"
	},
	{
		device_id: "solarpanel_1",
		value: "69Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 04:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 04:24"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "10/04/2024, 04:19"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "10/04/2024, 04:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 04:19"
	},
	{
		device_id: "solarpanel_1",
		value: "607Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 04:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 04:19"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "10/04/2024, 04:14"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "10/04/2024, 04:14"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 04:14"
	},
	{
		device_id: "solarpanel_1",
		value: "879Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 04:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 04:14"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "10/04/2024, 04:09"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "10/04/2024, 04:09"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 04:09"
	},
	{
		device_id: "solarpanel_1",
		value: "881Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 04:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 04:09"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "10/04/2024, 04:04"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "10/04/2024, 04:04"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "10/04/2024, 04:04"
	},
	{
		device_id: "solarpanel_1",
		value: "118Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 04:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 04:04"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "10/04/2024, 03:59"
	},
	{
		device_id: "temp_1",
		value: "57°C",
		type: "temperature",
		timestamp: "10/04/2024, 03:59"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 03:59"
	},
	{
		device_id: "solarpanel_1",
		value: "196Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 03:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 03:59"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "10/04/2024, 03:54"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "10/04/2024, 03:54"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 03:54"
	},
	{
		device_id: "solarpanel_1",
		value: "591Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 03:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 03:54"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "10/04/2024, 03:49"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "10/04/2024, 03:49"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 03:49"
	},
	{
		device_id: "solarpanel_1",
		value: "311Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 03:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 03:49"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "10/04/2024, 03:44"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "10/04/2024, 03:44"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 03:44"
	},
	{
		device_id: "solarpanel_1",
		value: "475Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 03:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 03:44"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "10/04/2024, 03:39"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "10/04/2024, 03:39"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 03:39"
	},
	{
		device_id: "solarpanel_1",
		value: "648Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 03:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 03:39"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "10/04/2024, 03:34"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "10/04/2024, 03:34"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 03:34"
	},
	{
		device_id: "solarpanel_1",
		value: "645Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 03:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 03:34"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "10/04/2024, 03:29"
	},
	{
		device_id: "temp_1",
		value: "10°C",
		type: "temperature",
		timestamp: "10/04/2024, 03:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 03:29"
	},
	{
		device_id: "solarpanel_1",
		value: "340Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 03:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 03:29"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "10/04/2024, 03:24"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "10/04/2024, 03:24"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "10/04/2024, 03:24"
	},
	{
		device_id: "solarpanel_1",
		value: "589Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 03:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 03:24"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "10/04/2024, 03:19"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "10/04/2024, 03:19"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "10/04/2024, 03:19"
	},
	{
		device_id: "solarpanel_1",
		value: "769Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 03:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 03:19"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "10/04/2024, 03:14"
	},
	{
		device_id: "temp_1",
		value: "10°C",
		type: "temperature",
		timestamp: "10/04/2024, 03:14"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 03:14"
	},
	{
		device_id: "solarpanel_1",
		value: "367Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 03:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 03:14"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "10/04/2024, 03:09"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "10/04/2024, 03:09"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "10/04/2024, 03:09"
	},
	{
		device_id: "solarpanel_1",
		value: "821Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 03:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 03:09"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "10/04/2024, 03:04"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "10/04/2024, 03:04"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 03:04"
	},
	{
		device_id: "solarpanel_1",
		value: "650Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 03:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 03:04"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "10/04/2024, 02:59"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "10/04/2024, 02:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 02:59"
	},
	{
		device_id: "solarpanel_1",
		value: "715Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 02:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 02:59"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "10/04/2024, 02:54"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "10/04/2024, 02:54"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 02:54"
	},
	{
		device_id: "solarpanel_1",
		value: "816Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 02:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 02:54"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "10/04/2024, 02:49"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "10/04/2024, 02:49"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 02:49"
	},
	{
		device_id: "solarpanel_1",
		value: "173Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 02:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 02:49"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "10/04/2024, 02:44"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "10/04/2024, 02:44"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 02:44"
	},
	{
		device_id: "solarpanel_1",
		value: "919Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 02:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 02:44"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "10/04/2024, 02:39"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "10/04/2024, 02:39"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "10/04/2024, 02:39"
	},
	{
		device_id: "solarpanel_1",
		value: "308Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 02:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 02:39"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "10/04/2024, 02:34"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "10/04/2024, 02:34"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 02:34"
	},
	{
		device_id: "solarpanel_1",
		value: "164Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 02:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 02:34"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "10/04/2024, 02:29"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "10/04/2024, 02:29"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 02:29"
	},
	{
		device_id: "solarpanel_1",
		value: "98Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 02:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 02:29"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "10/04/2024, 02:24"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "10/04/2024, 02:24"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 02:24"
	},
	{
		device_id: "solarpanel_1",
		value: "758Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 02:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 02:24"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "10/04/2024, 02:19"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "10/04/2024, 02:19"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "10/04/2024, 02:19"
	},
	{
		device_id: "solarpanel_1",
		value: "941Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 02:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 02:19"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "10/04/2024, 02:14"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "10/04/2024, 02:14"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "10/04/2024, 02:14"
	},
	{
		device_id: "solarpanel_1",
		value: "17Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 02:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 02:14"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "10/04/2024, 02:09"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "10/04/2024, 02:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 02:09"
	},
	{
		device_id: "solarpanel_1",
		value: "94Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 02:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 02:09"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "10/04/2024, 02:04"
	},
	{
		device_id: "temp_1",
		value: "53°C",
		type: "temperature",
		timestamp: "10/04/2024, 02:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 02:04"
	},
	{
		device_id: "solarpanel_1",
		value: "601Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 02:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 02:04"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "10/04/2024, 01:59"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "10/04/2024, 01:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 01:59"
	},
	{
		device_id: "solarpanel_1",
		value: "457Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 01:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 01:59"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "10/04/2024, 01:54"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "10/04/2024, 01:54"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "10/04/2024, 01:54"
	},
	{
		device_id: "solarpanel_1",
		value: "612Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 01:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 01:54"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "10/04/2024, 01:49"
	},
	{
		device_id: "temp_1",
		value: "76°C",
		type: "temperature",
		timestamp: "10/04/2024, 01:49"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "10/04/2024, 01:49"
	},
	{
		device_id: "solarpanel_1",
		value: "659Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 01:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 01:49"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "10/04/2024, 01:44"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "10/04/2024, 01:44"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "10/04/2024, 01:44"
	},
	{
		device_id: "solarpanel_1",
		value: "841Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 01:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 01:44"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "10/04/2024, 01:39"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "10/04/2024, 01:39"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 01:39"
	},
	{
		device_id: "solarpanel_1",
		value: "62Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 01:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 01:39"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "10/04/2024, 01:34"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "10/04/2024, 01:34"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "10/04/2024, 01:34"
	},
	{
		device_id: "solarpanel_1",
		value: "65Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 01:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 01:34"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "10/04/2024, 01:29"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "10/04/2024, 01:29"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 01:29"
	},
	{
		device_id: "solarpanel_1",
		value: "37Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 01:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 01:29"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "10/04/2024, 01:24"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "10/04/2024, 01:24"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 01:24"
	},
	{
		device_id: "solarpanel_1",
		value: "609Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 01:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 01:24"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "10/04/2024, 01:19"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "10/04/2024, 01:19"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 01:19"
	},
	{
		device_id: "solarpanel_1",
		value: "172Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 01:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 01:19"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "10/04/2024, 01:14"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "10/04/2024, 01:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "10/04/2024, 01:14"
	},
	{
		device_id: "solarpanel_1",
		value: "945Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 01:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 01:14"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "10/04/2024, 01:09"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "10/04/2024, 01:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 01:09"
	},
	{
		device_id: "solarpanel_1",
		value: "998Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 01:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 01:09"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "10/04/2024, 01:04"
	},
	{
		device_id: "temp_1",
		value: "78°C",
		type: "temperature",
		timestamp: "10/04/2024, 01:04"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "10/04/2024, 01:04"
	},
	{
		device_id: "solarpanel_1",
		value: "40Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 01:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 01:04"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "10/04/2024, 00:59"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "10/04/2024, 00:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 00:59"
	},
	{
		device_id: "solarpanel_1",
		value: "621Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 00:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 00:59"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "10/04/2024, 00:54"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "10/04/2024, 00:54"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "10/04/2024, 00:54"
	},
	{
		device_id: "solarpanel_1",
		value: "55Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 00:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 00:54"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "10/04/2024, 00:49"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "10/04/2024, 00:49"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "10/04/2024, 00:49"
	},
	{
		device_id: "solarpanel_1",
		value: "346Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 00:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 00:49"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "10/04/2024, 00:44"
	},
	{
		device_id: "temp_1",
		value: "40°C",
		type: "temperature",
		timestamp: "10/04/2024, 00:44"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "10/04/2024, 00:44"
	},
	{
		device_id: "solarpanel_1",
		value: "685Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 00:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 00:44"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "10/04/2024, 00:39"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "10/04/2024, 00:39"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "10/04/2024, 00:39"
	},
	{
		device_id: "solarpanel_1",
		value: "195Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 00:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 00:39"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "10/04/2024, 00:34"
	},
	{
		device_id: "temp_1",
		value: "10°C",
		type: "temperature",
		timestamp: "10/04/2024, 00:34"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "10/04/2024, 00:34"
	},
	{
		device_id: "solarpanel_1",
		value: "909Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 00:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 00:34"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "10/04/2024, 00:29"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "10/04/2024, 00:29"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "10/04/2024, 00:29"
	},
	{
		device_id: "solarpanel_1",
		value: "274Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 00:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 00:29"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "10/04/2024, 00:24"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "10/04/2024, 00:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 00:24"
	},
	{
		device_id: "solarpanel_1",
		value: "45Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 00:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 00:24"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "10/04/2024, 00:19"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "10/04/2024, 00:19"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "10/04/2024, 00:19"
	},
	{
		device_id: "solarpanel_1",
		value: "139Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 00:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "10/04/2024, 00:19"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "10/04/2024, 00:14"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "10/04/2024, 00:14"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "10/04/2024, 00:14"
	},
	{
		device_id: "solarpanel_1",
		value: "529Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 00:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 00:14"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "10/04/2024, 00:09"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "10/04/2024, 00:09"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "10/04/2024, 00:09"
	},
	{
		device_id: "solarpanel_1",
		value: "12Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 00:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 00:09"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "10/04/2024, 00:04"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "10/04/2024, 00:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "10/04/2024, 00:04"
	},
	{
		device_id: "solarpanel_1",
		value: "615Lux",
		type: "Sun Intensity",
		timestamp: "10/04/2024, 00:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "10/04/2024, 00:04"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "09/04/2024, 23:59"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "09/04/2024, 23:59"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "09/04/2024, 23:59"
	},
	{
		device_id: "solarpanel_1",
		value: "564Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 23:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 23:59"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "09/04/2024, 23:54"
	},
	{
		device_id: "temp_1",
		value: "78°C",
		type: "temperature",
		timestamp: "09/04/2024, 23:54"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "09/04/2024, 23:54"
	},
	{
		device_id: "solarpanel_1",
		value: "568Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 23:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 23:54"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "09/04/2024, 23:49"
	},
	{
		device_id: "temp_1",
		value: "12°C",
		type: "temperature",
		timestamp: "09/04/2024, 23:49"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "09/04/2024, 23:49"
	},
	{
		device_id: "solarpanel_1",
		value: "587Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 23:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 23:49"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "09/04/2024, 23:44"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "09/04/2024, 23:44"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "09/04/2024, 23:44"
	},
	{
		device_id: "solarpanel_1",
		value: "773Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 23:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 23:44"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "09/04/2024, 23:39"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "09/04/2024, 23:39"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "09/04/2024, 23:39"
	},
	{
		device_id: "solarpanel_1",
		value: "8Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 23:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 23:39"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "09/04/2024, 23:34"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "09/04/2024, 23:34"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "09/04/2024, 23:34"
	},
	{
		device_id: "solarpanel_1",
		value: "92Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 23:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 23:34"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "09/04/2024, 23:29"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "09/04/2024, 23:29"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "09/04/2024, 23:29"
	},
	{
		device_id: "solarpanel_1",
		value: "75Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 23:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 23:29"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "09/04/2024, 23:24"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "09/04/2024, 23:24"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "09/04/2024, 23:24"
	},
	{
		device_id: "solarpanel_1",
		value: "123Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 23:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 23:24"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "09/04/2024, 23:19"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "09/04/2024, 23:19"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "09/04/2024, 23:19"
	},
	{
		device_id: "solarpanel_1",
		value: "254Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 23:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 23:19"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "09/04/2024, 23:14"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "09/04/2024, 23:14"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "09/04/2024, 23:14"
	},
	{
		device_id: "solarpanel_1",
		value: "263Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 23:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 23:14"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "09/04/2024, 23:09"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "09/04/2024, 23:09"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "09/04/2024, 23:09"
	},
	{
		device_id: "solarpanel_1",
		value: "394Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 23:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 23:09"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "09/04/2024, 23:04"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "09/04/2024, 23:04"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "09/04/2024, 23:04"
	},
	{
		device_id: "solarpanel_1",
		value: "703Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 23:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 23:04"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "09/04/2024, 22:59"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "09/04/2024, 22:59"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "09/04/2024, 22:59"
	},
	{
		device_id: "solarpanel_1",
		value: "180Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 22:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 22:59"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "09/04/2024, 22:54"
	},
	{
		device_id: "temp_1",
		value: "90°C",
		type: "temperature",
		timestamp: "09/04/2024, 22:54"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "09/04/2024, 22:54"
	},
	{
		device_id: "solarpanel_1",
		value: "751Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 22:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 22:54"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "09/04/2024, 22:49"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "09/04/2024, 22:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "09/04/2024, 22:49"
	},
	{
		device_id: "solarpanel_1",
		value: "374Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 22:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 22:49"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "09/04/2024, 22:44"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "09/04/2024, 22:44"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "09/04/2024, 22:44"
	},
	{
		device_id: "solarpanel_1",
		value: "527Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 22:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 22:44"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "09/04/2024, 22:39"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "09/04/2024, 22:39"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "09/04/2024, 22:39"
	},
	{
		device_id: "solarpanel_1",
		value: "792Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 22:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 22:39"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "09/04/2024, 22:34"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "09/04/2024, 22:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "09/04/2024, 22:34"
	},
	{
		device_id: "solarpanel_1",
		value: "183Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 22:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 22:34"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "09/04/2024, 22:29"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "09/04/2024, 22:29"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "09/04/2024, 22:29"
	},
	{
		device_id: "solarpanel_1",
		value: "653Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 22:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 22:29"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "09/04/2024, 22:24"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "09/04/2024, 22:24"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "09/04/2024, 22:24"
	},
	{
		device_id: "solarpanel_1",
		value: "499Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 22:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 22:24"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "09/04/2024, 22:19"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "09/04/2024, 22:19"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "09/04/2024, 22:19"
	},
	{
		device_id: "solarpanel_1",
		value: "791Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 22:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 22:19"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "09/04/2024, 22:14"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "09/04/2024, 22:14"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "09/04/2024, 22:14"
	},
	{
		device_id: "solarpanel_1",
		value: "900Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 22:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 22:14"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "09/04/2024, 22:09"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "09/04/2024, 22:09"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "09/04/2024, 22:09"
	},
	{
		device_id: "solarpanel_1",
		value: "321Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 22:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 22:09"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "09/04/2024, 22:04"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "09/04/2024, 22:04"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "09/04/2024, 22:04"
	},
	{
		device_id: "solarpanel_1",
		value: "945Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 22:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 22:04"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "09/04/2024, 21:59"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "09/04/2024, 21:59"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "09/04/2024, 21:59"
	},
	{
		device_id: "solarpanel_1",
		value: "378Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 21:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 21:59"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "09/04/2024, 21:54"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "09/04/2024, 21:54"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "09/04/2024, 21:54"
	},
	{
		device_id: "solarpanel_1",
		value: "251Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 21:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 21:54"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "09/04/2024, 21:49"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "09/04/2024, 21:49"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "09/04/2024, 21:49"
	},
	{
		device_id: "solarpanel_1",
		value: "963Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 21:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 21:49"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "09/04/2024, 21:44"
	},
	{
		device_id: "temp_1",
		value: "26°C",
		type: "temperature",
		timestamp: "09/04/2024, 21:44"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "09/04/2024, 21:44"
	},
	{
		device_id: "solarpanel_1",
		value: "391Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 21:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 21:44"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "09/04/2024, 21:39"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "09/04/2024, 21:39"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "09/04/2024, 21:39"
	},
	{
		device_id: "solarpanel_1",
		value: "990Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 21:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 21:39"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "09/04/2024, 21:34"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "09/04/2024, 21:34"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "09/04/2024, 21:34"
	},
	{
		device_id: "solarpanel_1",
		value: "656Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 21:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 21:34"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "09/04/2024, 21:29"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "09/04/2024, 21:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "09/04/2024, 21:29"
	},
	{
		device_id: "solarpanel_1",
		value: "793Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 21:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 21:29"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "09/04/2024, 21:24"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "09/04/2024, 21:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "09/04/2024, 21:24"
	},
	{
		device_id: "solarpanel_1",
		value: "959Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 21:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 21:24"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "09/04/2024, 21:19"
	},
	{
		device_id: "temp_1",
		value: "90°C",
		type: "temperature",
		timestamp: "09/04/2024, 21:19"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "09/04/2024, 21:19"
	},
	{
		device_id: "solarpanel_1",
		value: "327Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 21:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 21:19"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "09/04/2024, 21:14"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "09/04/2024, 21:14"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "09/04/2024, 21:14"
	},
	{
		device_id: "solarpanel_1",
		value: "343Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 21:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 21:14"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "09/04/2024, 21:09"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "09/04/2024, 21:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "09/04/2024, 21:09"
	},
	{
		device_id: "solarpanel_1",
		value: "47Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 21:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 21:09"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "09/04/2024, 21:04"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "09/04/2024, 21:04"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "09/04/2024, 21:04"
	},
	{
		device_id: "solarpanel_1",
		value: "608Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 21:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 21:04"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "09/04/2024, 20:59"
	},
	{
		device_id: "temp_1",
		value: "8°C",
		type: "temperature",
		timestamp: "09/04/2024, 20:59"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "09/04/2024, 20:59"
	},
	{
		device_id: "solarpanel_1",
		value: "36Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 20:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 20:59"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "09/04/2024, 20:54"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "09/04/2024, 20:54"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "09/04/2024, 20:54"
	},
	{
		device_id: "solarpanel_1",
		value: "220Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 20:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 20:54"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "09/04/2024, 20:49"
	},
	{
		device_id: "temp_1",
		value: "53°C",
		type: "temperature",
		timestamp: "09/04/2024, 20:49"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "09/04/2024, 20:49"
	},
	{
		device_id: "solarpanel_1",
		value: "504Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 20:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 20:49"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "09/04/2024, 20:44"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "09/04/2024, 20:44"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "09/04/2024, 20:44"
	},
	{
		device_id: "solarpanel_1",
		value: "120Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 20:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 20:44"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "09/04/2024, 20:39"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "09/04/2024, 20:39"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "09/04/2024, 20:39"
	},
	{
		device_id: "solarpanel_1",
		value: "698Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 20:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 20:39"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "09/04/2024, 20:34"
	},
	{
		device_id: "temp_1",
		value: "57°C",
		type: "temperature",
		timestamp: "09/04/2024, 20:34"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "09/04/2024, 20:34"
	},
	{
		device_id: "solarpanel_1",
		value: "283Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 20:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 20:34"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "09/04/2024, 20:29"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "09/04/2024, 20:29"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "09/04/2024, 20:29"
	},
	{
		device_id: "solarpanel_1",
		value: "203Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 20:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 20:29"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "09/04/2024, 20:24"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "09/04/2024, 20:24"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "09/04/2024, 20:24"
	},
	{
		device_id: "solarpanel_1",
		value: "955Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 20:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 20:24"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "09/04/2024, 20:19"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "09/04/2024, 20:19"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "09/04/2024, 20:19"
	},
	{
		device_id: "solarpanel_1",
		value: "673Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 20:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 20:19"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "09/04/2024, 20:14"
	},
	{
		device_id: "temp_1",
		value: "10°C",
		type: "temperature",
		timestamp: "09/04/2024, 20:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "09/04/2024, 20:14"
	},
	{
		device_id: "solarpanel_1",
		value: "727Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 20:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 20:14"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "09/04/2024, 20:09"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "09/04/2024, 20:09"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "09/04/2024, 20:09"
	},
	{
		device_id: "solarpanel_1",
		value: "434Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 20:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 20:09"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "09/04/2024, 20:04"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "09/04/2024, 20:04"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "09/04/2024, 20:04"
	},
	{
		device_id: "solarpanel_1",
		value: "827Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 20:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 20:04"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "09/04/2024, 19:59"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "09/04/2024, 19:59"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "09/04/2024, 19:59"
	},
	{
		device_id: "solarpanel_1",
		value: "611Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 19:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 19:59"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "09/04/2024, 19:54"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "09/04/2024, 19:54"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "09/04/2024, 19:54"
	},
	{
		device_id: "solarpanel_1",
		value: "512Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 19:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 19:54"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "09/04/2024, 19:49"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "09/04/2024, 19:49"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "09/04/2024, 19:49"
	},
	{
		device_id: "solarpanel_1",
		value: "473Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 19:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 19:49"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "09/04/2024, 19:44"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "09/04/2024, 19:44"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "09/04/2024, 19:44"
	},
	{
		device_id: "solarpanel_1",
		value: "686Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 19:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 19:44"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "09/04/2024, 19:39"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "09/04/2024, 19:39"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "09/04/2024, 19:39"
	},
	{
		device_id: "solarpanel_1",
		value: "536Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 19:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 19:39"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "09/04/2024, 19:34"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "09/04/2024, 19:34"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "09/04/2024, 19:34"
	},
	{
		device_id: "solarpanel_1",
		value: "919Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 19:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 19:34"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "09/04/2024, 19:29"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "09/04/2024, 19:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "09/04/2024, 19:29"
	},
	{
		device_id: "solarpanel_1",
		value: "397Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 19:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 19:29"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "09/04/2024, 19:24"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "09/04/2024, 19:24"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "09/04/2024, 19:24"
	},
	{
		device_id: "solarpanel_1",
		value: "673Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 19:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 19:24"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "09/04/2024, 19:19"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "09/04/2024, 19:19"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "09/04/2024, 19:19"
	},
	{
		device_id: "solarpanel_1",
		value: "925Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 19:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 19:19"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "09/04/2024, 19:14"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "09/04/2024, 19:14"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "09/04/2024, 19:14"
	},
	{
		device_id: "solarpanel_1",
		value: "329Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 19:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 19:14"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "09/04/2024, 19:09"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "09/04/2024, 19:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "09/04/2024, 19:09"
	},
	{
		device_id: "solarpanel_1",
		value: "484Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 19:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "09/04/2024, 19:09"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "09/04/2024, 19:04"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "09/04/2024, 19:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "09/04/2024, 19:04"
	},
	{
		device_id: "solarpanel_1",
		value: "46Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 19:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 19:04"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "09/04/2024, 18:59"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "09/04/2024, 18:59"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "09/04/2024, 18:59"
	},
	{
		device_id: "solarpanel_1",
		value: "896Lux",
		type: "Sun Intensity",
		timestamp: "09/04/2024, 18:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "09/04/2024, 18:59"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "08/04/2024, 18:54"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "08/04/2024, 18:54"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 18:54"
	},
	{
		device_id: "solarpanel_1",
		value: "586Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 18:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 18:54"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "08/04/2024, 18:49"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "08/04/2024, 18:49"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "08/04/2024, 18:49"
	},
	{
		device_id: "solarpanel_1",
		value: "756Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 18:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 18:49"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "08/04/2024, 18:44"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "08/04/2024, 18:44"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 18:44"
	},
	{
		device_id: "solarpanel_1",
		value: "464Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 18:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 18:44"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "08/04/2024, 18:39"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "08/04/2024, 18:39"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 18:39"
	},
	{
		device_id: "solarpanel_1",
		value: "88Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 18:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 18:39"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "08/04/2024, 18:34"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "08/04/2024, 18:34"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 18:34"
	},
	{
		device_id: "solarpanel_1",
		value: "37Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 18:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 18:34"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "08/04/2024, 18:29"
	},
	{
		device_id: "temp_1",
		value: "78°C",
		type: "temperature",
		timestamp: "08/04/2024, 18:29"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "08/04/2024, 18:29"
	},
	{
		device_id: "solarpanel_1",
		value: "969Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 18:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 18:29"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "08/04/2024, 18:24"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "08/04/2024, 18:24"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 18:24"
	},
	{
		device_id: "solarpanel_1",
		value: "983Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 18:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 18:24"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "08/04/2024, 18:19"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "08/04/2024, 18:19"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 18:19"
	},
	{
		device_id: "solarpanel_1",
		value: "436Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 18:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 18:19"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "08/04/2024, 18:14"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "08/04/2024, 18:14"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 18:14"
	},
	{
		device_id: "solarpanel_1",
		value: "65Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 18:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 18:14"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "08/04/2024, 18:09"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "08/04/2024, 18:09"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "08/04/2024, 18:09"
	},
	{
		device_id: "solarpanel_1",
		value: "735Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 18:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 18:09"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "08/04/2024, 18:04"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "08/04/2024, 18:04"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 18:04"
	},
	{
		device_id: "solarpanel_1",
		value: "277Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 18:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 18:04"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "08/04/2024, 17:59"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "08/04/2024, 17:59"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 17:59"
	},
	{
		device_id: "solarpanel_1",
		value: "102Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 17:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 17:59"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "08/04/2024, 17:54"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "08/04/2024, 17:54"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 17:54"
	},
	{
		device_id: "solarpanel_1",
		value: "639Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 17:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 17:54"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "08/04/2024, 17:49"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "08/04/2024, 17:49"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 17:49"
	},
	{
		device_id: "solarpanel_1",
		value: "169Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 17:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 17:49"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "08/04/2024, 17:44"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "08/04/2024, 17:44"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 17:44"
	},
	{
		device_id: "solarpanel_1",
		value: "294Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 17:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 17:44"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "08/04/2024, 17:39"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "08/04/2024, 17:39"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 17:39"
	},
	{
		device_id: "solarpanel_1",
		value: "23Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 17:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 17:39"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "08/04/2024, 17:34"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "08/04/2024, 17:34"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 17:34"
	},
	{
		device_id: "solarpanel_1",
		value: "845Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 17:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 17:34"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "08/04/2024, 17:29"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "08/04/2024, 17:29"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 17:29"
	},
	{
		device_id: "solarpanel_1",
		value: "387Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 17:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 17:29"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "08/04/2024, 17:24"
	},
	{
		device_id: "temp_1",
		value: "40°C",
		type: "temperature",
		timestamp: "08/04/2024, 17:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 17:24"
	},
	{
		device_id: "solarpanel_1",
		value: "257Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 17:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 17:24"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "08/04/2024, 17:19"
	},
	{
		device_id: "temp_1",
		value: "16°C",
		type: "temperature",
		timestamp: "08/04/2024, 17:19"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 17:19"
	},
	{
		device_id: "solarpanel_1",
		value: "432Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 17:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 17:19"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "08/04/2024, 17:14"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "08/04/2024, 17:14"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "08/04/2024, 17:14"
	},
	{
		device_id: "solarpanel_1",
		value: "510Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 17:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 17:14"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "08/04/2024, 17:09"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "08/04/2024, 17:09"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 17:09"
	},
	{
		device_id: "solarpanel_1",
		value: "16Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 17:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 17:09"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "08/04/2024, 17:04"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "08/04/2024, 17:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 17:04"
	},
	{
		device_id: "solarpanel_1",
		value: "363Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 17:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 17:04"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "08/04/2024, 16:59"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "08/04/2024, 16:59"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "08/04/2024, 16:59"
	},
	{
		device_id: "solarpanel_1",
		value: "99Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 16:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 16:59"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "08/04/2024, 16:54"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "08/04/2024, 16:54"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 16:54"
	},
	{
		device_id: "solarpanel_1",
		value: "711Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 16:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 16:54"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "08/04/2024, 16:49"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "08/04/2024, 16:49"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 16:49"
	},
	{
		device_id: "solarpanel_1",
		value: "510Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 16:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 16:49"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "08/04/2024, 16:44"
	},
	{
		device_id: "temp_1",
		value: "57°C",
		type: "temperature",
		timestamp: "08/04/2024, 16:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 16:44"
	},
	{
		device_id: "solarpanel_1",
		value: "412Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 16:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 16:44"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "08/04/2024, 16:39"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "08/04/2024, 16:39"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 16:39"
	},
	{
		device_id: "solarpanel_1",
		value: "671Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 16:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 16:39"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "08/04/2024, 16:34"
	},
	{
		device_id: "temp_1",
		value: "8°C",
		type: "temperature",
		timestamp: "08/04/2024, 16:34"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 16:34"
	},
	{
		device_id: "solarpanel_1",
		value: "675Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 16:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 16:34"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "08/04/2024, 16:29"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "08/04/2024, 16:29"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 16:29"
	},
	{
		device_id: "solarpanel_1",
		value: "640Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 16:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 16:29"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "08/04/2024, 16:24"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "08/04/2024, 16:24"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 16:24"
	},
	{
		device_id: "solarpanel_1",
		value: "789Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 16:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 16:24"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "08/04/2024, 16:19"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "08/04/2024, 16:19"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 16:19"
	},
	{
		device_id: "solarpanel_1",
		value: "850Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 16:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 16:19"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "08/04/2024, 16:14"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "08/04/2024, 16:14"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 16:14"
	},
	{
		device_id: "solarpanel_1",
		value: "671Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 16:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 16:14"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "08/04/2024, 16:09"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "08/04/2024, 16:09"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 16:09"
	},
	{
		device_id: "solarpanel_1",
		value: "818Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 16:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 16:09"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "08/04/2024, 16:04"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "08/04/2024, 16:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 16:04"
	},
	{
		device_id: "solarpanel_1",
		value: "603Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 16:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 16:04"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "08/04/2024, 15:59"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "08/04/2024, 15:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "08/04/2024, 15:59"
	},
	{
		device_id: "solarpanel_1",
		value: "353Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 15:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 15:59"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "08/04/2024, 15:54"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "08/04/2024, 15:54"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 15:54"
	},
	{
		device_id: "solarpanel_1",
		value: "905Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 15:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 15:54"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "08/04/2024, 15:49"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "08/04/2024, 15:49"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 15:49"
	},
	{
		device_id: "solarpanel_1",
		value: "600Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 15:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 15:49"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "08/04/2024, 15:44"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "08/04/2024, 15:44"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 15:44"
	},
	{
		device_id: "solarpanel_1",
		value: "606Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 15:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 15:44"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "08/04/2024, 15:39"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "08/04/2024, 15:39"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 15:39"
	},
	{
		device_id: "solarpanel_1",
		value: "141Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 15:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 15:39"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "08/04/2024, 15:34"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "08/04/2024, 15:34"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "08/04/2024, 15:34"
	},
	{
		device_id: "solarpanel_1",
		value: "501Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 15:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 15:34"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "08/04/2024, 15:29"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "08/04/2024, 15:29"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 15:29"
	},
	{
		device_id: "solarpanel_1",
		value: "493Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 15:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 15:29"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "08/04/2024, 15:24"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "08/04/2024, 15:24"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "08/04/2024, 15:24"
	},
	{
		device_id: "solarpanel_1",
		value: "970Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 15:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 15:24"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "08/04/2024, 15:19"
	},
	{
		device_id: "temp_1",
		value: "42°C",
		type: "temperature",
		timestamp: "08/04/2024, 15:19"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 15:19"
	},
	{
		device_id: "solarpanel_1",
		value: "452Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 15:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 15:19"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "08/04/2024, 15:14"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "08/04/2024, 15:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 15:14"
	},
	{
		device_id: "solarpanel_1",
		value: "152Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 15:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 15:14"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "08/04/2024, 15:09"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "08/04/2024, 15:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 15:09"
	},
	{
		device_id: "solarpanel_1",
		value: "731Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 15:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 15:09"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "08/04/2024, 15:04"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "08/04/2024, 15:04"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 15:04"
	},
	{
		device_id: "solarpanel_1",
		value: "71Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 15:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 15:04"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "08/04/2024, 14:59"
	},
	{
		device_id: "temp_1",
		value: "90°C",
		type: "temperature",
		timestamp: "08/04/2024, 14:59"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 14:59"
	},
	{
		device_id: "solarpanel_1",
		value: "965Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 14:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 14:59"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "08/04/2024, 14:54"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "08/04/2024, 14:54"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 14:54"
	},
	{
		device_id: "solarpanel_1",
		value: "167Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 14:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 14:54"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "08/04/2024, 14:49"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "08/04/2024, 14:49"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "08/04/2024, 14:49"
	},
	{
		device_id: "solarpanel_1",
		value: "608Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 14:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 14:49"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "08/04/2024, 14:44"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "08/04/2024, 14:44"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 14:44"
	},
	{
		device_id: "solarpanel_1",
		value: "306Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 14:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 14:44"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "08/04/2024, 14:39"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "08/04/2024, 14:39"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "08/04/2024, 14:39"
	},
	{
		device_id: "solarpanel_1",
		value: "953Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 14:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 14:39"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "08/04/2024, 14:34"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "08/04/2024, 14:34"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 14:34"
	},
	{
		device_id: "solarpanel_1",
		value: "841Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 14:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 14:34"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "08/04/2024, 14:29"
	},
	{
		device_id: "temp_1",
		value: "40°C",
		type: "temperature",
		timestamp: "08/04/2024, 14:29"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 14:29"
	},
	{
		device_id: "solarpanel_1",
		value: "577Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 14:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 14:29"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "08/04/2024, 14:24"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "08/04/2024, 14:24"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 14:24"
	},
	{
		device_id: "solarpanel_1",
		value: "657Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 14:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 14:24"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "08/04/2024, 14:19"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "08/04/2024, 14:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 14:19"
	},
	{
		device_id: "solarpanel_1",
		value: "111Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 14:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 14:19"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "08/04/2024, 14:14"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "08/04/2024, 14:14"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 14:14"
	},
	{
		device_id: "solarpanel_1",
		value: "156Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 14:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 14:14"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "08/04/2024, 14:09"
	},
	{
		device_id: "temp_1",
		value: "57°C",
		type: "temperature",
		timestamp: "08/04/2024, 14:09"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 14:09"
	},
	{
		device_id: "solarpanel_1",
		value: "745Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 14:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 14:09"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "08/04/2024, 14:04"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "08/04/2024, 14:04"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 14:04"
	},
	{
		device_id: "solarpanel_1",
		value: "95Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 14:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 14:04"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "08/04/2024, 13:59"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "08/04/2024, 13:59"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 13:59"
	},
	{
		device_id: "solarpanel_1",
		value: "297Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 13:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 13:59"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "08/04/2024, 13:54"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "08/04/2024, 13:54"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 13:54"
	},
	{
		device_id: "solarpanel_1",
		value: "31Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 13:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 13:54"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "08/04/2024, 13:49"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "08/04/2024, 13:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 13:49"
	},
	{
		device_id: "solarpanel_1",
		value: "790Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 13:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 13:49"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "08/04/2024, 13:44"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "08/04/2024, 13:44"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 13:44"
	},
	{
		device_id: "solarpanel_1",
		value: "415Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 13:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 13:44"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "08/04/2024, 13:39"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "08/04/2024, 13:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 13:39"
	},
	{
		device_id: "solarpanel_1",
		value: "189Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 13:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 13:39"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "08/04/2024, 13:34"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "08/04/2024, 13:34"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 13:34"
	},
	{
		device_id: "solarpanel_1",
		value: "21Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 13:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 13:34"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "08/04/2024, 13:29"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "08/04/2024, 13:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "08/04/2024, 13:29"
	},
	{
		device_id: "solarpanel_1",
		value: "65Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 13:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 13:29"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "08/04/2024, 13:24"
	},
	{
		device_id: "temp_1",
		value: "76°C",
		type: "temperature",
		timestamp: "08/04/2024, 13:24"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 13:24"
	},
	{
		device_id: "solarpanel_1",
		value: "628Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 13:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 13:24"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "08/04/2024, 13:19"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "08/04/2024, 13:19"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 13:19"
	},
	{
		device_id: "solarpanel_1",
		value: "402Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 13:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 13:19"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "08/04/2024, 13:14"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "08/04/2024, 13:14"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 13:14"
	},
	{
		device_id: "solarpanel_1",
		value: "621Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 13:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 13:14"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "08/04/2024, 13:09"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "08/04/2024, 13:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 13:09"
	},
	{
		device_id: "solarpanel_1",
		value: "861Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 13:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 13:09"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "08/04/2024, 13:04"
	},
	{
		device_id: "temp_1",
		value: "10°C",
		type: "temperature",
		timestamp: "08/04/2024, 13:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 13:04"
	},
	{
		device_id: "solarpanel_1",
		value: "482Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 13:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 13:04"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "08/04/2024, 12:59"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "08/04/2024, 12:59"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 12:59"
	},
	{
		device_id: "solarpanel_1",
		value: "710Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 12:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 12:59"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "08/04/2024, 12:54"
	},
	{
		device_id: "temp_1",
		value: "25°C",
		type: "temperature",
		timestamp: "08/04/2024, 12:54"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 12:54"
	},
	{
		device_id: "solarpanel_1",
		value: "592Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 12:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 12:54"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "08/04/2024, 12:49"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "08/04/2024, 12:49"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "08/04/2024, 12:49"
	},
	{
		device_id: "solarpanel_1",
		value: "25Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 12:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 12:49"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "08/04/2024, 12:44"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "08/04/2024, 12:44"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 12:44"
	},
	{
		device_id: "solarpanel_1",
		value: "248Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 12:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 12:44"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "08/04/2024, 12:39"
	},
	{
		device_id: "temp_1",
		value: "57°C",
		type: "temperature",
		timestamp: "08/04/2024, 12:39"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "08/04/2024, 12:39"
	},
	{
		device_id: "solarpanel_1",
		value: "897Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 12:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 12:39"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "08/04/2024, 12:34"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "08/04/2024, 12:34"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 12:34"
	},
	{
		device_id: "solarpanel_1",
		value: "304Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 12:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 12:34"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "08/04/2024, 12:29"
	},
	{
		device_id: "temp_1",
		value: "42°C",
		type: "temperature",
		timestamp: "08/04/2024, 12:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "08/04/2024, 12:29"
	},
	{
		device_id: "solarpanel_1",
		value: "429Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 12:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 12:29"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "08/04/2024, 12:24"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "08/04/2024, 12:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 12:24"
	},
	{
		device_id: "solarpanel_1",
		value: "250Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 12:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 12:24"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "08/04/2024, 12:19"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "08/04/2024, 12:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 12:19"
	},
	{
		device_id: "solarpanel_1",
		value: "684Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 12:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 12:19"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "08/04/2024, 12:14"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "08/04/2024, 12:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 12:14"
	},
	{
		device_id: "solarpanel_1",
		value: "495Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 12:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 12:14"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "08/04/2024, 12:09"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "08/04/2024, 12:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "08/04/2024, 12:09"
	},
	{
		device_id: "solarpanel_1",
		value: "562Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 12:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 12:09"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "08/04/2024, 12:04"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "08/04/2024, 12:04"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 12:04"
	},
	{
		device_id: "solarpanel_1",
		value: "417Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 12:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 12:04"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "08/04/2024, 11:59"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "08/04/2024, 11:59"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 11:59"
	},
	{
		device_id: "solarpanel_1",
		value: "414Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 11:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 11:59"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "08/04/2024, 11:54"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "08/04/2024, 11:54"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "08/04/2024, 11:54"
	},
	{
		device_id: "solarpanel_1",
		value: "659Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 11:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 11:54"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "08/04/2024, 11:49"
	},
	{
		device_id: "temp_1",
		value: "31°C",
		type: "temperature",
		timestamp: "08/04/2024, 11:49"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 11:49"
	},
	{
		device_id: "solarpanel_1",
		value: "454Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 11:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 11:49"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "08/04/2024, 11:44"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "08/04/2024, 11:44"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "08/04/2024, 11:44"
	},
	{
		device_id: "solarpanel_1",
		value: "885Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 11:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 11:44"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "08/04/2024, 11:39"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "08/04/2024, 11:39"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 11:39"
	},
	{
		device_id: "solarpanel_1",
		value: "695Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 11:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 11:39"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "08/04/2024, 11:34"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "08/04/2024, 11:34"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 11:34"
	},
	{
		device_id: "solarpanel_1",
		value: "237Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 11:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 11:34"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "08/04/2024, 11:29"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "08/04/2024, 11:29"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 11:29"
	},
	{
		device_id: "solarpanel_1",
		value: "807Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 11:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 11:29"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "08/04/2024, 11:24"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "08/04/2024, 11:24"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 11:24"
	},
	{
		device_id: "solarpanel_1",
		value: "640Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 11:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 11:24"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "08/04/2024, 11:19"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "08/04/2024, 11:19"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 11:19"
	},
	{
		device_id: "solarpanel_1",
		value: "282Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 11:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 11:19"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "08/04/2024, 11:14"
	},
	{
		device_id: "temp_1",
		value: "57°C",
		type: "temperature",
		timestamp: "08/04/2024, 11:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 11:14"
	},
	{
		device_id: "solarpanel_1",
		value: "435Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 11:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 11:14"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "08/04/2024, 11:09"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "08/04/2024, 11:09"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 11:09"
	},
	{
		device_id: "solarpanel_1",
		value: "896Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 11:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 11:09"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "08/04/2024, 11:04"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "08/04/2024, 11:04"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 11:04"
	},
	{
		device_id: "solarpanel_1",
		value: "339Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 11:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 11:04"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "08/04/2024, 10:59"
	},
	{
		device_id: "temp_1",
		value: "78°C",
		type: "temperature",
		timestamp: "08/04/2024, 10:59"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "08/04/2024, 10:59"
	},
	{
		device_id: "solarpanel_1",
		value: "751Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 10:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 10:59"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "08/04/2024, 10:54"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "08/04/2024, 10:54"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "08/04/2024, 10:54"
	},
	{
		device_id: "solarpanel_1",
		value: "510Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 10:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 10:54"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "08/04/2024, 10:49"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "08/04/2024, 10:49"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 10:49"
	},
	{
		device_id: "solarpanel_1",
		value: "265Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 10:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 10:49"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "08/04/2024, 10:44"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "08/04/2024, 10:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 10:44"
	},
	{
		device_id: "solarpanel_1",
		value: "608Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 10:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 10:44"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "08/04/2024, 10:39"
	},
	{
		device_id: "temp_1",
		value: "57°C",
		type: "temperature",
		timestamp: "08/04/2024, 10:39"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 10:39"
	},
	{
		device_id: "solarpanel_1",
		value: "5Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 10:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 10:39"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "08/04/2024, 10:34"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "08/04/2024, 10:34"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 10:34"
	},
	{
		device_id: "solarpanel_1",
		value: "673Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 10:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 10:34"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "08/04/2024, 10:29"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "08/04/2024, 10:29"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 10:29"
	},
	{
		device_id: "solarpanel_1",
		value: "679Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 10:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 10:29"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "08/04/2024, 10:24"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "08/04/2024, 10:24"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 10:24"
	},
	{
		device_id: "solarpanel_1",
		value: "987Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 10:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 10:24"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "08/04/2024, 10:19"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "08/04/2024, 10:19"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 10:19"
	},
	{
		device_id: "solarpanel_1",
		value: "267Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 10:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 10:19"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "08/04/2024, 10:14"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "08/04/2024, 10:14"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 10:14"
	},
	{
		device_id: "solarpanel_1",
		value: "964Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 10:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 10:14"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "08/04/2024, 10:09"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "08/04/2024, 10:09"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 10:09"
	},
	{
		device_id: "solarpanel_1",
		value: "804Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 10:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 10:09"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "08/04/2024, 10:04"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "08/04/2024, 10:04"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 10:04"
	},
	{
		device_id: "solarpanel_1",
		value: "592Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 10:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 10:04"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "08/04/2024, 09:59"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "08/04/2024, 09:59"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "08/04/2024, 09:59"
	},
	{
		device_id: "solarpanel_1",
		value: "456Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 09:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 09:59"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "08/04/2024, 09:54"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "08/04/2024, 09:54"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 09:54"
	},
	{
		device_id: "solarpanel_1",
		value: "67Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 09:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 09:54"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "08/04/2024, 09:49"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "08/04/2024, 09:49"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 09:49"
	},
	{
		device_id: "solarpanel_1",
		value: "937Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 09:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 09:49"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "08/04/2024, 09:44"
	},
	{
		device_id: "temp_1",
		value: "76°C",
		type: "temperature",
		timestamp: "08/04/2024, 09:44"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 09:44"
	},
	{
		device_id: "solarpanel_1",
		value: "989Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 09:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 09:44"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "08/04/2024, 09:39"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "08/04/2024, 09:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 09:39"
	},
	{
		device_id: "solarpanel_1",
		value: "220Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 09:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 09:39"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "08/04/2024, 09:34"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "08/04/2024, 09:34"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 09:34"
	},
	{
		device_id: "solarpanel_1",
		value: "180Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 09:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 09:34"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "08/04/2024, 09:29"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "08/04/2024, 09:29"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 09:29"
	},
	{
		device_id: "solarpanel_1",
		value: "621Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 09:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 09:29"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "08/04/2024, 09:24"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "08/04/2024, 09:24"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 09:24"
	},
	{
		device_id: "solarpanel_1",
		value: "642Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 09:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 09:24"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "08/04/2024, 09:19"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "08/04/2024, 09:19"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 09:19"
	},
	{
		device_id: "solarpanel_1",
		value: "469Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 09:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 09:19"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "08/04/2024, 09:14"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "08/04/2024, 09:14"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 09:14"
	},
	{
		device_id: "solarpanel_1",
		value: "258Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 09:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 09:14"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "08/04/2024, 09:09"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "08/04/2024, 09:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "08/04/2024, 09:09"
	},
	{
		device_id: "solarpanel_1",
		value: "726Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 09:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 09:09"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "08/04/2024, 09:04"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "08/04/2024, 09:04"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 09:04"
	},
	{
		device_id: "solarpanel_1",
		value: "167Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 09:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 09:04"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "08/04/2024, 08:59"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "08/04/2024, 08:59"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "08/04/2024, 08:59"
	},
	{
		device_id: "solarpanel_1",
		value: "502Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 08:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 08:59"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "08/04/2024, 08:54"
	},
	{
		device_id: "temp_1",
		value: "93°C",
		type: "temperature",
		timestamp: "08/04/2024, 08:54"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "08/04/2024, 08:54"
	},
	{
		device_id: "solarpanel_1",
		value: "243Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 08:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 08:54"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "08/04/2024, 08:49"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "08/04/2024, 08:49"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 08:49"
	},
	{
		device_id: "solarpanel_1",
		value: "916Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 08:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 08:49"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "08/04/2024, 08:44"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "08/04/2024, 08:44"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "08/04/2024, 08:44"
	},
	{
		device_id: "solarpanel_1",
		value: "720Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 08:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 08:44"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "08/04/2024, 08:39"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "08/04/2024, 08:39"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 08:39"
	},
	{
		device_id: "solarpanel_1",
		value: "283Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 08:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 08:39"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "08/04/2024, 08:34"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "08/04/2024, 08:34"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 08:34"
	},
	{
		device_id: "solarpanel_1",
		value: "703Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 08:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 08:34"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "08/04/2024, 08:29"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "08/04/2024, 08:29"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "08/04/2024, 08:29"
	},
	{
		device_id: "solarpanel_1",
		value: "274Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 08:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 08:29"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "08/04/2024, 08:24"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "08/04/2024, 08:24"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "08/04/2024, 08:24"
	},
	{
		device_id: "solarpanel_1",
		value: "44Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 08:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 08:24"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "08/04/2024, 08:19"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "08/04/2024, 08:19"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 08:19"
	},
	{
		device_id: "solarpanel_1",
		value: "578Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 08:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 08:19"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "08/04/2024, 08:14"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "08/04/2024, 08:14"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 08:14"
	},
	{
		device_id: "solarpanel_1",
		value: "672Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 08:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 08:14"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "08/04/2024, 08:09"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "08/04/2024, 08:09"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 08:09"
	},
	{
		device_id: "solarpanel_1",
		value: "427Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 08:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 08:09"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "08/04/2024, 08:04"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "08/04/2024, 08:04"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 08:04"
	},
	{
		device_id: "solarpanel_1",
		value: "750Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 08:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 08:04"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "08/04/2024, 07:59"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "08/04/2024, 07:59"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "08/04/2024, 07:59"
	},
	{
		device_id: "solarpanel_1",
		value: "640Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 07:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 07:59"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "08/04/2024, 07:54"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "08/04/2024, 07:54"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 07:54"
	},
	{
		device_id: "solarpanel_1",
		value: "102Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 07:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 07:54"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "08/04/2024, 07:49"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "08/04/2024, 07:49"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 07:49"
	},
	{
		device_id: "solarpanel_1",
		value: "589Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 07:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 07:49"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "08/04/2024, 07:44"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "08/04/2024, 07:44"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 07:44"
	},
	{
		device_id: "solarpanel_1",
		value: "614Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 07:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 07:44"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "08/04/2024, 07:39"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "08/04/2024, 07:39"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 07:39"
	},
	{
		device_id: "solarpanel_1",
		value: "497Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 07:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 07:39"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "08/04/2024, 07:34"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "08/04/2024, 07:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 07:34"
	},
	{
		device_id: "solarpanel_1",
		value: "949Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 07:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 07:34"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "08/04/2024, 07:29"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "08/04/2024, 07:29"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 07:29"
	},
	{
		device_id: "solarpanel_1",
		value: "377Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 07:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 07:29"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "08/04/2024, 07:24"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "08/04/2024, 07:24"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 07:24"
	},
	{
		device_id: "solarpanel_1",
		value: "523Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 07:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 07:24"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "08/04/2024, 07:19"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "08/04/2024, 07:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 07:19"
	},
	{
		device_id: "solarpanel_1",
		value: "324Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 07:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 07:19"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "08/04/2024, 07:14"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "08/04/2024, 07:14"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 07:14"
	},
	{
		device_id: "solarpanel_1",
		value: "458Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 07:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 07:14"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "08/04/2024, 07:09"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "08/04/2024, 07:09"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 07:09"
	},
	{
		device_id: "solarpanel_1",
		value: "305Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 07:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 07:09"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "08/04/2024, 07:04"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "08/04/2024, 07:04"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 07:04"
	},
	{
		device_id: "solarpanel_1",
		value: "21Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 07:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 07:04"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "08/04/2024, 06:59"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "08/04/2024, 06:59"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 06:59"
	},
	{
		device_id: "solarpanel_1",
		value: "148Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 06:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 06:59"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "08/04/2024, 06:54"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "08/04/2024, 06:54"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 06:54"
	},
	{
		device_id: "solarpanel_1",
		value: "69Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 06:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 06:54"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "08/04/2024, 06:49"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "08/04/2024, 06:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 06:49"
	},
	{
		device_id: "solarpanel_1",
		value: "200Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 06:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 06:49"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "08/04/2024, 06:44"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "08/04/2024, 06:44"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "08/04/2024, 06:44"
	},
	{
		device_id: "solarpanel_1",
		value: "315Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 06:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 06:44"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "08/04/2024, 06:39"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "08/04/2024, 06:39"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 06:39"
	},
	{
		device_id: "solarpanel_1",
		value: "392Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 06:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 06:39"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "08/04/2024, 06:34"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "08/04/2024, 06:34"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 06:34"
	},
	{
		device_id: "solarpanel_1",
		value: "845Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 06:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 06:34"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "08/04/2024, 06:29"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "08/04/2024, 06:29"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 06:29"
	},
	{
		device_id: "solarpanel_1",
		value: "624Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 06:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 06:29"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "08/04/2024, 06:24"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "08/04/2024, 06:24"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 06:24"
	},
	{
		device_id: "solarpanel_1",
		value: "28Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 06:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 06:24"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "08/04/2024, 06:19"
	},
	{
		device_id: "temp_1",
		value: "90°C",
		type: "temperature",
		timestamp: "08/04/2024, 06:19"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 06:19"
	},
	{
		device_id: "solarpanel_1",
		value: "223Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 06:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 06:19"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "08/04/2024, 06:14"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "08/04/2024, 06:14"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 06:14"
	},
	{
		device_id: "solarpanel_1",
		value: "62Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 06:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 06:14"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "08/04/2024, 06:09"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "08/04/2024, 06:09"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 06:09"
	},
	{
		device_id: "solarpanel_1",
		value: "587Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 06:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 06:09"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "08/04/2024, 06:04"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "08/04/2024, 06:04"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 06:04"
	},
	{
		device_id: "solarpanel_1",
		value: "314Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 06:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 06:04"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "08/04/2024, 05:59"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "08/04/2024, 05:59"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 05:59"
	},
	{
		device_id: "solarpanel_1",
		value: "910Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 05:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 05:59"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "08/04/2024, 05:54"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "08/04/2024, 05:54"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 05:54"
	},
	{
		device_id: "solarpanel_1",
		value: "363Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 05:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 05:54"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "08/04/2024, 05:49"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "08/04/2024, 05:49"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "08/04/2024, 05:49"
	},
	{
		device_id: "solarpanel_1",
		value: "341Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 05:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 05:49"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "08/04/2024, 05:44"
	},
	{
		device_id: "temp_1",
		value: "93°C",
		type: "temperature",
		timestamp: "08/04/2024, 05:44"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 05:44"
	},
	{
		device_id: "solarpanel_1",
		value: "550Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 05:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 05:44"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "08/04/2024, 05:39"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "08/04/2024, 05:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 05:39"
	},
	{
		device_id: "solarpanel_1",
		value: "752Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 05:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 05:39"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "08/04/2024, 05:34"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "08/04/2024, 05:34"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 05:34"
	},
	{
		device_id: "solarpanel_1",
		value: "435Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 05:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 05:34"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "08/04/2024, 05:29"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "08/04/2024, 05:29"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 05:29"
	},
	{
		device_id: "solarpanel_1",
		value: "461Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 05:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 05:29"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "08/04/2024, 05:24"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "08/04/2024, 05:24"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 05:24"
	},
	{
		device_id: "solarpanel_1",
		value: "553Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 05:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 05:24"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "08/04/2024, 05:19"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "08/04/2024, 05:19"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 05:19"
	},
	{
		device_id: "solarpanel_1",
		value: "384Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 05:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 05:19"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "08/04/2024, 05:14"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "08/04/2024, 05:14"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "08/04/2024, 05:14"
	},
	{
		device_id: "solarpanel_1",
		value: "720Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 05:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 05:14"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "08/04/2024, 05:09"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "08/04/2024, 05:09"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "08/04/2024, 05:09"
	},
	{
		device_id: "solarpanel_1",
		value: "584Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 05:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 05:09"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "08/04/2024, 05:04"
	},
	{
		device_id: "temp_1",
		value: "37°C",
		type: "temperature",
		timestamp: "08/04/2024, 05:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "08/04/2024, 05:04"
	},
	{
		device_id: "solarpanel_1",
		value: "310Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 05:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 05:04"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "08/04/2024, 04:59"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "08/04/2024, 04:59"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 04:59"
	},
	{
		device_id: "solarpanel_1",
		value: "992Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 04:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 04:59"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "08/04/2024, 04:54"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "08/04/2024, 04:54"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 04:54"
	},
	{
		device_id: "solarpanel_1",
		value: "516Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 04:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 04:54"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "08/04/2024, 04:49"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "08/04/2024, 04:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 04:49"
	},
	{
		device_id: "solarpanel_1",
		value: "329Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 04:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 04:49"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "08/04/2024, 04:44"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "08/04/2024, 04:44"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 04:44"
	},
	{
		device_id: "solarpanel_1",
		value: "866Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 04:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 04:44"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "08/04/2024, 04:39"
	},
	{
		device_id: "temp_1",
		value: "28°C",
		type: "temperature",
		timestamp: "08/04/2024, 04:39"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "08/04/2024, 04:39"
	},
	{
		device_id: "solarpanel_1",
		value: "489Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 04:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 04:39"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "08/04/2024, 04:34"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "08/04/2024, 04:34"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 04:34"
	},
	{
		device_id: "solarpanel_1",
		value: "750Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 04:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 04:34"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "08/04/2024, 04:29"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "08/04/2024, 04:29"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 04:29"
	},
	{
		device_id: "solarpanel_1",
		value: "44Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 04:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 04:29"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "08/04/2024, 04:24"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "08/04/2024, 04:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 04:24"
	},
	{
		device_id: "solarpanel_1",
		value: "959Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 04:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 04:24"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "08/04/2024, 04:19"
	},
	{
		device_id: "temp_1",
		value: "16°C",
		type: "temperature",
		timestamp: "08/04/2024, 04:19"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 04:19"
	},
	{
		device_id: "solarpanel_1",
		value: "731Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 04:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 04:19"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "08/04/2024, 04:14"
	},
	{
		device_id: "temp_1",
		value: "20°C",
		type: "temperature",
		timestamp: "08/04/2024, 04:14"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 04:14"
	},
	{
		device_id: "solarpanel_1",
		value: "877Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 04:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 04:14"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "08/04/2024, 04:09"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "08/04/2024, 04:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 04:09"
	},
	{
		device_id: "solarpanel_1",
		value: "165Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 04:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 04:09"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "08/04/2024, 04:04"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "08/04/2024, 04:04"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "08/04/2024, 04:04"
	},
	{
		device_id: "solarpanel_1",
		value: "14Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 04:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 04:04"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "08/04/2024, 03:59"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "08/04/2024, 03:59"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 03:59"
	},
	{
		device_id: "solarpanel_1",
		value: "89Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 03:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 03:59"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "08/04/2024, 03:54"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "08/04/2024, 03:54"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "08/04/2024, 03:54"
	},
	{
		device_id: "solarpanel_1",
		value: "422Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 03:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 03:54"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "08/04/2024, 03:49"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "08/04/2024, 03:49"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 03:49"
	},
	{
		device_id: "solarpanel_1",
		value: "575Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 03:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 03:49"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "08/04/2024, 03:44"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "08/04/2024, 03:44"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 03:44"
	},
	{
		device_id: "solarpanel_1",
		value: "184Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 03:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 03:44"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "08/04/2024, 03:39"
	},
	{
		device_id: "temp_1",
		value: "20°C",
		type: "temperature",
		timestamp: "08/04/2024, 03:39"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 03:39"
	},
	{
		device_id: "solarpanel_1",
		value: "592Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 03:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 03:39"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "08/04/2024, 03:34"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "08/04/2024, 03:34"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 03:34"
	},
	{
		device_id: "solarpanel_1",
		value: "312Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 03:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 03:34"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "08/04/2024, 03:29"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "08/04/2024, 03:29"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 03:29"
	},
	{
		device_id: "solarpanel_1",
		value: "212Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 03:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 03:29"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "08/04/2024, 03:24"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "08/04/2024, 03:24"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "08/04/2024, 03:24"
	},
	{
		device_id: "solarpanel_1",
		value: "919Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 03:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 03:24"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "08/04/2024, 03:19"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "08/04/2024, 03:19"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 03:19"
	},
	{
		device_id: "solarpanel_1",
		value: "84Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 03:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 03:19"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "08/04/2024, 03:14"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "08/04/2024, 03:14"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "08/04/2024, 03:14"
	},
	{
		device_id: "solarpanel_1",
		value: "511Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 03:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 03:14"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "08/04/2024, 03:09"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "08/04/2024, 03:09"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 03:09"
	},
	{
		device_id: "solarpanel_1",
		value: "834Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 03:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 03:09"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "08/04/2024, 03:04"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "08/04/2024, 03:04"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 03:04"
	},
	{
		device_id: "solarpanel_1",
		value: "171Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 03:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 03:04"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "08/04/2024, 02:59"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "08/04/2024, 02:59"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 02:59"
	},
	{
		device_id: "solarpanel_1",
		value: "333Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 02:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 02:59"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "08/04/2024, 02:54"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "08/04/2024, 02:54"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 02:54"
	},
	{
		device_id: "solarpanel_1",
		value: "646Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 02:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 02:54"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "08/04/2024, 02:49"
	},
	{
		device_id: "temp_1",
		value: "42°C",
		type: "temperature",
		timestamp: "08/04/2024, 02:49"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 02:49"
	},
	{
		device_id: "solarpanel_1",
		value: "876Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 02:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 02:49"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "08/04/2024, 02:44"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "08/04/2024, 02:44"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 02:44"
	},
	{
		device_id: "solarpanel_1",
		value: "585Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 02:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 02:44"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "08/04/2024, 02:39"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "08/04/2024, 02:39"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 02:39"
	},
	{
		device_id: "solarpanel_1",
		value: "585Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 02:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 02:39"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "08/04/2024, 02:34"
	},
	{
		device_id: "temp_1",
		value: "86°C",
		type: "temperature",
		timestamp: "08/04/2024, 02:34"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "08/04/2024, 02:34"
	},
	{
		device_id: "solarpanel_1",
		value: "510Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 02:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 02:34"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "08/04/2024, 02:29"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "08/04/2024, 02:29"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "08/04/2024, 02:29"
	},
	{
		device_id: "solarpanel_1",
		value: "617Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 02:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 02:29"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "08/04/2024, 02:24"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "08/04/2024, 02:24"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 02:24"
	},
	{
		device_id: "solarpanel_1",
		value: "946Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 02:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 02:24"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "08/04/2024, 02:19"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "08/04/2024, 02:19"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "08/04/2024, 02:19"
	},
	{
		device_id: "solarpanel_1",
		value: "212Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 02:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 02:19"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "08/04/2024, 02:14"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "08/04/2024, 02:14"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 02:14"
	},
	{
		device_id: "solarpanel_1",
		value: "877Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 02:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 02:14"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "08/04/2024, 02:09"
	},
	{
		device_id: "temp_1",
		value: "25°C",
		type: "temperature",
		timestamp: "08/04/2024, 02:09"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 02:09"
	},
	{
		device_id: "solarpanel_1",
		value: "948Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 02:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 02:09"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "08/04/2024, 02:04"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "08/04/2024, 02:04"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 02:04"
	},
	{
		device_id: "solarpanel_1",
		value: "854Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 02:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 02:04"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "08/04/2024, 01:59"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "08/04/2024, 01:59"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 01:59"
	},
	{
		device_id: "solarpanel_1",
		value: "136Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 01:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 01:59"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "08/04/2024, 01:54"
	},
	{
		device_id: "temp_1",
		value: "88°C",
		type: "temperature",
		timestamp: "08/04/2024, 01:54"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "08/04/2024, 01:54"
	},
	{
		device_id: "solarpanel_1",
		value: "671Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 01:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 01:54"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "08/04/2024, 01:49"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "08/04/2024, 01:49"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 01:49"
	},
	{
		device_id: "solarpanel_1",
		value: "318Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 01:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 01:49"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "08/04/2024, 01:44"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "08/04/2024, 01:44"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 01:44"
	},
	{
		device_id: "solarpanel_1",
		value: "744Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 01:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 01:44"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "08/04/2024, 01:39"
	},
	{
		device_id: "temp_1",
		value: "20°C",
		type: "temperature",
		timestamp: "08/04/2024, 01:39"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "08/04/2024, 01:39"
	},
	{
		device_id: "solarpanel_1",
		value: "997Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 01:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 01:39"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "08/04/2024, 01:34"
	},
	{
		device_id: "temp_1",
		value: "37°C",
		type: "temperature",
		timestamp: "08/04/2024, 01:34"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "08/04/2024, 01:34"
	},
	{
		device_id: "solarpanel_1",
		value: "803Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 01:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 01:34"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "08/04/2024, 01:29"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "08/04/2024, 01:29"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 01:29"
	},
	{
		device_id: "solarpanel_1",
		value: "638Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 01:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 01:29"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "08/04/2024, 01:24"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "08/04/2024, 01:24"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 01:24"
	},
	{
		device_id: "solarpanel_1",
		value: "578Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 01:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 01:24"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "08/04/2024, 01:19"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "08/04/2024, 01:19"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "08/04/2024, 01:19"
	},
	{
		device_id: "solarpanel_1",
		value: "571Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 01:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 01:19"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "08/04/2024, 01:14"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "08/04/2024, 01:14"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "08/04/2024, 01:14"
	},
	{
		device_id: "solarpanel_1",
		value: "521Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 01:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 01:14"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "08/04/2024, 01:09"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "08/04/2024, 01:09"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "08/04/2024, 01:09"
	},
	{
		device_id: "solarpanel_1",
		value: "918Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 01:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 01:09"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "08/04/2024, 01:04"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "08/04/2024, 01:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 01:04"
	},
	{
		device_id: "solarpanel_1",
		value: "767Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 01:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 01:04"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "08/04/2024, 00:59"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "08/04/2024, 00:59"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "08/04/2024, 00:59"
	},
	{
		device_id: "solarpanel_1",
		value: "459Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 00:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 00:59"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "08/04/2024, 00:54"
	},
	{
		device_id: "temp_1",
		value: "35°C",
		type: "temperature",
		timestamp: "08/04/2024, 00:54"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 00:54"
	},
	{
		device_id: "solarpanel_1",
		value: "693Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 00:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 00:54"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "08/04/2024, 00:49"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "08/04/2024, 00:49"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 00:49"
	},
	{
		device_id: "solarpanel_1",
		value: "898Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 00:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 00:49"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "08/04/2024, 00:44"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "08/04/2024, 00:44"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 00:44"
	},
	{
		device_id: "solarpanel_1",
		value: "593Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 00:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 00:44"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "08/04/2024, 00:39"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "08/04/2024, 00:39"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "08/04/2024, 00:39"
	},
	{
		device_id: "solarpanel_1",
		value: "833Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 00:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 00:39"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "08/04/2024, 00:34"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "08/04/2024, 00:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "08/04/2024, 00:34"
	},
	{
		device_id: "solarpanel_1",
		value: "161Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 00:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 00:34"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "08/04/2024, 00:29"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "08/04/2024, 00:29"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "08/04/2024, 00:29"
	},
	{
		device_id: "solarpanel_1",
		value: "144Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 00:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 00:29"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "08/04/2024, 00:24"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "08/04/2024, 00:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "08/04/2024, 00:24"
	},
	{
		device_id: "solarpanel_1",
		value: "653Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 00:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 00:24"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "08/04/2024, 00:19"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "08/04/2024, 00:19"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 00:19"
	},
	{
		device_id: "solarpanel_1",
		value: "615Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 00:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 00:19"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "08/04/2024, 00:14"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "08/04/2024, 00:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "08/04/2024, 00:14"
	},
	{
		device_id: "solarpanel_1",
		value: "721Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 00:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "08/04/2024, 00:14"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "08/04/2024, 00:09"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "08/04/2024, 00:09"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "08/04/2024, 00:09"
	},
	{
		device_id: "solarpanel_1",
		value: "89Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 00:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 00:09"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "08/04/2024, 00:04"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "08/04/2024, 00:04"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "08/04/2024, 00:04"
	},
	{
		device_id: "solarpanel_1",
		value: "120Lux",
		type: "Sun Intensity",
		timestamp: "08/04/2024, 00:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "08/04/2024, 00:04"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "07/04/2024, 23:59"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "07/04/2024, 23:59"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "07/04/2024, 23:59"
	},
	{
		device_id: "solarpanel_1",
		value: "449Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 23:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 23:59"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "07/04/2024, 23:54"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "07/04/2024, 23:54"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "07/04/2024, 23:54"
	},
	{
		device_id: "solarpanel_1",
		value: "595Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 23:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 23:54"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "07/04/2024, 23:49"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "07/04/2024, 23:49"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "07/04/2024, 23:49"
	},
	{
		device_id: "solarpanel_1",
		value: "749Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 23:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 23:49"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "07/04/2024, 23:44"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "07/04/2024, 23:44"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "07/04/2024, 23:44"
	},
	{
		device_id: "solarpanel_1",
		value: "981Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 23:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 23:44"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "07/04/2024, 23:39"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "07/04/2024, 23:39"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "07/04/2024, 23:39"
	},
	{
		device_id: "solarpanel_1",
		value: "926Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 23:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 23:39"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "07/04/2024, 23:34"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "07/04/2024, 23:34"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "07/04/2024, 23:34"
	},
	{
		device_id: "solarpanel_1",
		value: "976Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 23:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 23:34"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "07/04/2024, 23:29"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "07/04/2024, 23:29"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "07/04/2024, 23:29"
	},
	{
		device_id: "solarpanel_1",
		value: "421Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 23:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 23:29"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "07/04/2024, 23:24"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "07/04/2024, 23:24"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "07/04/2024, 23:24"
	},
	{
		device_id: "solarpanel_1",
		value: "216Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 23:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 23:24"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "07/04/2024, 23:19"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "07/04/2024, 23:19"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "07/04/2024, 23:19"
	},
	{
		device_id: "solarpanel_1",
		value: "945Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 23:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 23:19"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "07/04/2024, 23:14"
	},
	{
		device_id: "temp_1",
		value: "8°C",
		type: "temperature",
		timestamp: "07/04/2024, 23:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "07/04/2024, 23:14"
	},
	{
		device_id: "solarpanel_1",
		value: "116Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 23:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 23:14"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "07/04/2024, 23:09"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "07/04/2024, 23:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "07/04/2024, 23:09"
	},
	{
		device_id: "solarpanel_1",
		value: "5Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 23:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 23:09"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "07/04/2024, 23:04"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "07/04/2024, 23:04"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "07/04/2024, 23:04"
	},
	{
		device_id: "solarpanel_1",
		value: "328Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 23:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 23:04"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "07/04/2024, 22:59"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "07/04/2024, 22:59"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "07/04/2024, 22:59"
	},
	{
		device_id: "solarpanel_1",
		value: "76Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 22:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 22:59"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "07/04/2024, 22:54"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "07/04/2024, 22:54"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "07/04/2024, 22:54"
	},
	{
		device_id: "solarpanel_1",
		value: "812Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 22:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 22:54"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "07/04/2024, 22:49"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "07/04/2024, 22:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "07/04/2024, 22:49"
	},
	{
		device_id: "solarpanel_1",
		value: "340Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 22:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 22:49"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "07/04/2024, 22:44"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "07/04/2024, 22:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "07/04/2024, 22:44"
	},
	{
		device_id: "solarpanel_1",
		value: "589Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 22:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 22:44"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "07/04/2024, 22:39"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "07/04/2024, 22:39"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "07/04/2024, 22:39"
	},
	{
		device_id: "solarpanel_1",
		value: "515Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 22:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 22:39"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "07/04/2024, 22:34"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "07/04/2024, 22:34"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "07/04/2024, 22:34"
	},
	{
		device_id: "solarpanel_1",
		value: "361Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 22:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 22:34"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "07/04/2024, 22:29"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "07/04/2024, 22:29"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "07/04/2024, 22:29"
	},
	{
		device_id: "solarpanel_1",
		value: "283Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 22:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 22:29"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "07/04/2024, 22:24"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "07/04/2024, 22:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "07/04/2024, 22:24"
	},
	{
		device_id: "solarpanel_1",
		value: "162Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 22:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 22:24"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "07/04/2024, 22:19"
	},
	{
		device_id: "temp_1",
		value: "33°C",
		type: "temperature",
		timestamp: "07/04/2024, 22:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "07/04/2024, 22:19"
	},
	{
		device_id: "solarpanel_1",
		value: "851Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 22:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 22:19"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "07/04/2024, 22:14"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "07/04/2024, 22:14"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "07/04/2024, 22:14"
	},
	{
		device_id: "solarpanel_1",
		value: "579Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 22:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 22:14"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "07/04/2024, 22:09"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "07/04/2024, 22:09"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "07/04/2024, 22:09"
	},
	{
		device_id: "solarpanel_1",
		value: "104Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 22:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 22:09"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "07/04/2024, 22:04"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "07/04/2024, 22:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "07/04/2024, 22:04"
	},
	{
		device_id: "solarpanel_1",
		value: "110Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 22:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 22:04"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "07/04/2024, 21:59"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "07/04/2024, 21:59"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "07/04/2024, 21:59"
	},
	{
		device_id: "solarpanel_1",
		value: "699Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 21:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 21:59"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "07/04/2024, 21:54"
	},
	{
		device_id: "temp_1",
		value: "28°C",
		type: "temperature",
		timestamp: "07/04/2024, 21:54"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "07/04/2024, 21:54"
	},
	{
		device_id: "solarpanel_1",
		value: "244Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 21:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 21:54"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "07/04/2024, 21:49"
	},
	{
		device_id: "temp_1",
		value: "31°C",
		type: "temperature",
		timestamp: "07/04/2024, 21:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "07/04/2024, 21:49"
	},
	{
		device_id: "solarpanel_1",
		value: "324Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 21:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 21:49"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "07/04/2024, 21:44"
	},
	{
		device_id: "temp_1",
		value: "31°C",
		type: "temperature",
		timestamp: "07/04/2024, 21:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "07/04/2024, 21:44"
	},
	{
		device_id: "solarpanel_1",
		value: "479Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 21:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 21:44"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "07/04/2024, 21:39"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "07/04/2024, 21:39"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "07/04/2024, 21:39"
	},
	{
		device_id: "solarpanel_1",
		value: "444Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 21:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 21:39"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "07/04/2024, 21:34"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "07/04/2024, 21:34"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "07/04/2024, 21:34"
	},
	{
		device_id: "solarpanel_1",
		value: "631Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 21:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 21:34"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "07/04/2024, 21:29"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "07/04/2024, 21:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "07/04/2024, 21:29"
	},
	{
		device_id: "solarpanel_1",
		value: "319Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 21:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 21:29"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "07/04/2024, 21:24"
	},
	{
		device_id: "temp_1",
		value: "8°C",
		type: "temperature",
		timestamp: "07/04/2024, 21:24"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "07/04/2024, 21:24"
	},
	{
		device_id: "solarpanel_1",
		value: "979Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 21:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 21:24"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "07/04/2024, 21:19"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "07/04/2024, 21:19"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "07/04/2024, 21:19"
	},
	{
		device_id: "solarpanel_1",
		value: "86Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 21:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 21:19"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "07/04/2024, 21:14"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "07/04/2024, 21:14"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "07/04/2024, 21:14"
	},
	{
		device_id: "solarpanel_1",
		value: "121Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 21:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 21:14"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "07/04/2024, 21:09"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "07/04/2024, 21:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "07/04/2024, 21:09"
	},
	{
		device_id: "solarpanel_1",
		value: "658Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 21:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 21:09"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "07/04/2024, 21:04"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "07/04/2024, 21:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "07/04/2024, 21:04"
	},
	{
		device_id: "solarpanel_1",
		value: "339Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 21:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 21:04"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "07/04/2024, 20:59"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "07/04/2024, 20:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "07/04/2024, 20:59"
	},
	{
		device_id: "solarpanel_1",
		value: "927Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 20:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 20:59"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "07/04/2024, 20:54"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "07/04/2024, 20:54"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "07/04/2024, 20:54"
	},
	{
		device_id: "solarpanel_1",
		value: "371Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 20:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 20:54"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "07/04/2024, 20:49"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "07/04/2024, 20:49"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "07/04/2024, 20:49"
	},
	{
		device_id: "solarpanel_1",
		value: "1000Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 20:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 20:49"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "07/04/2024, 20:44"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "07/04/2024, 20:44"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "07/04/2024, 20:44"
	},
	{
		device_id: "solarpanel_1",
		value: "827Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 20:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 20:44"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "07/04/2024, 20:39"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "07/04/2024, 20:39"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "07/04/2024, 20:39"
	},
	{
		device_id: "solarpanel_1",
		value: "906Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 20:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 20:39"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "07/04/2024, 20:34"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "07/04/2024, 20:34"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "07/04/2024, 20:34"
	},
	{
		device_id: "solarpanel_1",
		value: "328Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 20:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 20:34"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "07/04/2024, 20:29"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "07/04/2024, 20:29"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "07/04/2024, 20:29"
	},
	{
		device_id: "solarpanel_1",
		value: "788Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 20:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 20:29"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "07/04/2024, 20:24"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "07/04/2024, 20:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "07/04/2024, 20:24"
	},
	{
		device_id: "solarpanel_1",
		value: "720Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 20:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 20:24"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "07/04/2024, 20:19"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "07/04/2024, 20:19"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "07/04/2024, 20:19"
	},
	{
		device_id: "solarpanel_1",
		value: "808Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 20:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 20:19"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "07/04/2024, 20:14"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "07/04/2024, 20:14"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "07/04/2024, 20:14"
	},
	{
		device_id: "solarpanel_1",
		value: "54Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 20:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 20:14"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "07/04/2024, 20:09"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "07/04/2024, 20:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "07/04/2024, 20:09"
	},
	{
		device_id: "solarpanel_1",
		value: "568Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 20:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 20:09"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "07/04/2024, 20:04"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "07/04/2024, 20:04"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "07/04/2024, 20:04"
	},
	{
		device_id: "solarpanel_1",
		value: "989Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 20:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 20:04"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "07/04/2024, 19:59"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "07/04/2024, 19:59"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "07/04/2024, 19:59"
	},
	{
		device_id: "solarpanel_1",
		value: "487Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 19:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 19:59"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "07/04/2024, 19:54"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "07/04/2024, 19:54"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "07/04/2024, 19:54"
	},
	{
		device_id: "solarpanel_1",
		value: "661Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 19:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 19:54"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "07/04/2024, 19:49"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "07/04/2024, 19:49"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "07/04/2024, 19:49"
	},
	{
		device_id: "solarpanel_1",
		value: "382Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 19:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 19:49"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "07/04/2024, 19:44"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "07/04/2024, 19:44"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "07/04/2024, 19:44"
	},
	{
		device_id: "solarpanel_1",
		value: "282Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 19:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 19:44"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "07/04/2024, 19:39"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "07/04/2024, 19:39"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "07/04/2024, 19:39"
	},
	{
		device_id: "solarpanel_1",
		value: "403Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 19:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 19:39"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "07/04/2024, 19:34"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "07/04/2024, 19:34"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "07/04/2024, 19:34"
	},
	{
		device_id: "solarpanel_1",
		value: "209Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 19:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 19:34"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "07/04/2024, 19:29"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "07/04/2024, 19:29"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "07/04/2024, 19:29"
	},
	{
		device_id: "solarpanel_1",
		value: "167Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 19:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 19:29"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "07/04/2024, 19:24"
	},
	{
		device_id: "temp_1",
		value: "37°C",
		type: "temperature",
		timestamp: "07/04/2024, 19:24"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "07/04/2024, 19:24"
	},
	{
		device_id: "solarpanel_1",
		value: "821Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 19:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 19:24"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "07/04/2024, 19:19"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "07/04/2024, 19:19"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "07/04/2024, 19:19"
	},
	{
		device_id: "solarpanel_1",
		value: "243Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 19:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "07/04/2024, 19:19"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "07/04/2024, 19:14"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "07/04/2024, 19:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "07/04/2024, 19:14"
	},
	{
		device_id: "solarpanel_1",
		value: "225Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 19:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 19:14"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "07/04/2024, 19:09"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "07/04/2024, 19:09"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "07/04/2024, 19:09"
	},
	{
		device_id: "solarpanel_1",
		value: "303Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 19:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 19:09"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "07/04/2024, 19:04"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "07/04/2024, 19:04"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "07/04/2024, 19:04"
	},
	{
		device_id: "solarpanel_1",
		value: "438Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 19:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 19:04"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "07/04/2024, 18:59"
	},
	{
		device_id: "temp_1",
		value: "20°C",
		type: "temperature",
		timestamp: "07/04/2024, 18:59"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "07/04/2024, 18:59"
	},
	{
		device_id: "solarpanel_1",
		value: "689Lux",
		type: "Sun Intensity",
		timestamp: "07/04/2024, 18:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "07/04/2024, 18:59"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "06/04/2024, 18:54"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "06/04/2024, 18:54"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "06/04/2024, 18:54"
	},
	{
		device_id: "solarpanel_1",
		value: "46Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 18:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 18:54"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "06/04/2024, 18:49"
	},
	{
		device_id: "temp_1",
		value: "69°C",
		type: "temperature",
		timestamp: "06/04/2024, 18:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "06/04/2024, 18:49"
	},
	{
		device_id: "solarpanel_1",
		value: "180Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 18:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 18:49"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "06/04/2024, 18:44"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "06/04/2024, 18:44"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "06/04/2024, 18:44"
	},
	{
		device_id: "solarpanel_1",
		value: "931Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 18:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 18:44"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "06/04/2024, 18:39"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "06/04/2024, 18:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 18:39"
	},
	{
		device_id: "solarpanel_1",
		value: "453Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 18:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 18:39"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "06/04/2024, 18:34"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "06/04/2024, 18:34"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 18:34"
	},
	{
		device_id: "solarpanel_1",
		value: "448Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 18:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 18:34"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "06/04/2024, 18:29"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "06/04/2024, 18:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 18:29"
	},
	{
		device_id: "solarpanel_1",
		value: "915Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 18:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 18:29"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "06/04/2024, 18:24"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "06/04/2024, 18:24"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 18:24"
	},
	{
		device_id: "solarpanel_1",
		value: "703Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 18:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 18:24"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "06/04/2024, 18:19"
	},
	{
		device_id: "temp_1",
		value: "25°C",
		type: "temperature",
		timestamp: "06/04/2024, 18:19"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 18:19"
	},
	{
		device_id: "solarpanel_1",
		value: "29Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 18:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 18:19"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "06/04/2024, 18:14"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "06/04/2024, 18:14"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "06/04/2024, 18:14"
	},
	{
		device_id: "solarpanel_1",
		value: "940Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 18:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 18:14"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "06/04/2024, 18:09"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "06/04/2024, 18:09"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 18:09"
	},
	{
		device_id: "solarpanel_1",
		value: "373Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 18:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 18:09"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "06/04/2024, 18:04"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "06/04/2024, 18:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "06/04/2024, 18:04"
	},
	{
		device_id: "solarpanel_1",
		value: "525Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 18:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 18:04"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "06/04/2024, 17:59"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "06/04/2024, 17:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 17:59"
	},
	{
		device_id: "solarpanel_1",
		value: "725Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 17:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 17:59"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "06/04/2024, 17:54"
	},
	{
		device_id: "temp_1",
		value: "26°C",
		type: "temperature",
		timestamp: "06/04/2024, 17:54"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 17:54"
	},
	{
		device_id: "solarpanel_1",
		value: "116Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 17:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 17:54"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "06/04/2024, 17:49"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "06/04/2024, 17:49"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 17:49"
	},
	{
		device_id: "solarpanel_1",
		value: "195Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 17:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 17:49"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "06/04/2024, 17:44"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "06/04/2024, 17:44"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 17:44"
	},
	{
		device_id: "solarpanel_1",
		value: "624Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 17:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 17:44"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "06/04/2024, 17:39"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "06/04/2024, 17:39"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 17:39"
	},
	{
		device_id: "solarpanel_1",
		value: "339Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 17:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 17:39"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "06/04/2024, 17:34"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "06/04/2024, 17:34"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "06/04/2024, 17:34"
	},
	{
		device_id: "solarpanel_1",
		value: "166Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 17:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 17:34"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "06/04/2024, 17:29"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "06/04/2024, 17:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 17:29"
	},
	{
		device_id: "solarpanel_1",
		value: "205Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 17:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 17:29"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "06/04/2024, 17:24"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "06/04/2024, 17:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 17:24"
	},
	{
		device_id: "solarpanel_1",
		value: "904Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 17:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 17:24"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "06/04/2024, 17:19"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "06/04/2024, 17:19"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 17:19"
	},
	{
		device_id: "solarpanel_1",
		value: "229Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 17:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 17:19"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "06/04/2024, 17:14"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "06/04/2024, 17:14"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 17:14"
	},
	{
		device_id: "solarpanel_1",
		value: "505Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 17:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 17:14"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "06/04/2024, 17:09"
	},
	{
		device_id: "temp_1",
		value: "16°C",
		type: "temperature",
		timestamp: "06/04/2024, 17:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "06/04/2024, 17:09"
	},
	{
		device_id: "solarpanel_1",
		value: "531Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 17:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 17:09"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "06/04/2024, 17:04"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "06/04/2024, 17:04"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "06/04/2024, 17:04"
	},
	{
		device_id: "solarpanel_1",
		value: "370Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 17:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 17:04"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "06/04/2024, 16:59"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "06/04/2024, 16:59"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 16:59"
	},
	{
		device_id: "solarpanel_1",
		value: "428Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 16:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 16:59"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "06/04/2024, 16:54"
	},
	{
		device_id: "temp_1",
		value: "11°C",
		type: "temperature",
		timestamp: "06/04/2024, 16:54"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 16:54"
	},
	{
		device_id: "solarpanel_1",
		value: "99Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 16:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 16:54"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "06/04/2024, 16:49"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "06/04/2024, 16:49"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 16:49"
	},
	{
		device_id: "solarpanel_1",
		value: "623Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 16:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 16:49"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "06/04/2024, 16:44"
	},
	{
		device_id: "temp_1",
		value: "16°C",
		type: "temperature",
		timestamp: "06/04/2024, 16:44"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 16:44"
	},
	{
		device_id: "solarpanel_1",
		value: "263Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 16:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 16:44"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "06/04/2024, 16:39"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "06/04/2024, 16:39"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "06/04/2024, 16:39"
	},
	{
		device_id: "solarpanel_1",
		value: "801Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 16:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 16:39"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "06/04/2024, 16:34"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "06/04/2024, 16:34"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 16:34"
	},
	{
		device_id: "solarpanel_1",
		value: "632Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 16:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 16:34"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "06/04/2024, 16:29"
	},
	{
		device_id: "temp_1",
		value: "37°C",
		type: "temperature",
		timestamp: "06/04/2024, 16:29"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "06/04/2024, 16:29"
	},
	{
		device_id: "solarpanel_1",
		value: "495Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 16:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 16:29"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "06/04/2024, 16:24"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "06/04/2024, 16:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 16:24"
	},
	{
		device_id: "solarpanel_1",
		value: "836Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 16:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 16:24"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "06/04/2024, 16:19"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "06/04/2024, 16:19"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 16:19"
	},
	{
		device_id: "solarpanel_1",
		value: "56Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 16:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 16:19"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "06/04/2024, 16:14"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "06/04/2024, 16:14"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 16:14"
	},
	{
		device_id: "solarpanel_1",
		value: "49Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 16:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 16:14"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "06/04/2024, 16:09"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "06/04/2024, 16:09"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 16:09"
	},
	{
		device_id: "solarpanel_1",
		value: "286Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 16:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 16:09"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "06/04/2024, 16:04"
	},
	{
		device_id: "temp_1",
		value: "94°C",
		type: "temperature",
		timestamp: "06/04/2024, 16:04"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 16:04"
	},
	{
		device_id: "solarpanel_1",
		value: "102Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 16:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 16:04"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "06/04/2024, 15:59"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "06/04/2024, 15:59"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 15:59"
	},
	{
		device_id: "solarpanel_1",
		value: "735Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 15:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 15:59"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "06/04/2024, 15:54"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "06/04/2024, 15:54"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 15:54"
	},
	{
		device_id: "solarpanel_1",
		value: "575Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 15:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 15:54"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "06/04/2024, 15:49"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "06/04/2024, 15:49"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 15:49"
	},
	{
		device_id: "solarpanel_1",
		value: "554Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 15:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 15:49"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "06/04/2024, 15:44"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "06/04/2024, 15:44"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 15:44"
	},
	{
		device_id: "solarpanel_1",
		value: "425Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 15:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 15:44"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "06/04/2024, 15:39"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "06/04/2024, 15:39"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 15:39"
	},
	{
		device_id: "solarpanel_1",
		value: "122Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 15:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 15:39"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "06/04/2024, 15:34"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "06/04/2024, 15:34"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "06/04/2024, 15:34"
	},
	{
		device_id: "solarpanel_1",
		value: "162Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 15:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 15:34"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "06/04/2024, 15:29"
	},
	{
		device_id: "temp_1",
		value: "25°C",
		type: "temperature",
		timestamp: "06/04/2024, 15:29"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 15:29"
	},
	{
		device_id: "solarpanel_1",
		value: "91Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 15:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 15:29"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "06/04/2024, 15:24"
	},
	{
		device_id: "temp_1",
		value: "59°C",
		type: "temperature",
		timestamp: "06/04/2024, 15:24"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 15:24"
	},
	{
		device_id: "solarpanel_1",
		value: "46Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 15:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 15:24"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "06/04/2024, 15:19"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "06/04/2024, 15:19"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 15:19"
	},
	{
		device_id: "solarpanel_1",
		value: "554Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 15:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 15:19"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "06/04/2024, 15:14"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "06/04/2024, 15:14"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 15:14"
	},
	{
		device_id: "solarpanel_1",
		value: "303Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 15:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 15:14"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "06/04/2024, 15:09"
	},
	{
		device_id: "temp_1",
		value: "73°C",
		type: "temperature",
		timestamp: "06/04/2024, 15:09"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 15:09"
	},
	{
		device_id: "solarpanel_1",
		value: "403Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 15:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 15:09"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "06/04/2024, 15:04"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "06/04/2024, 15:04"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 15:04"
	},
	{
		device_id: "solarpanel_1",
		value: "345Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 15:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 15:04"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "06/04/2024, 14:59"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "06/04/2024, 14:59"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 14:59"
	},
	{
		device_id: "solarpanel_1",
		value: "446Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 14:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 14:59"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "06/04/2024, 14:54"
	},
	{
		device_id: "temp_1",
		value: "64°C",
		type: "temperature",
		timestamp: "06/04/2024, 14:54"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 14:54"
	},
	{
		device_id: "solarpanel_1",
		value: "741Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 14:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 14:54"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "06/04/2024, 14:49"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "06/04/2024, 14:49"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 14:49"
	},
	{
		device_id: "solarpanel_1",
		value: "471Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 14:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 14:49"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "06/04/2024, 14:44"
	},
	{
		device_id: "temp_1",
		value: "2°C",
		type: "temperature",
		timestamp: "06/04/2024, 14:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "06/04/2024, 14:44"
	},
	{
		device_id: "solarpanel_1",
		value: "103Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 14:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 14:44"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "06/04/2024, 14:39"
	},
	{
		device_id: "temp_1",
		value: "28°C",
		type: "temperature",
		timestamp: "06/04/2024, 14:39"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "06/04/2024, 14:39"
	},
	{
		device_id: "solarpanel_1",
		value: "6Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 14:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 14:39"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "06/04/2024, 14:34"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "06/04/2024, 14:34"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "06/04/2024, 14:34"
	},
	{
		device_id: "solarpanel_1",
		value: "706Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 14:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 14:34"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "06/04/2024, 14:29"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "06/04/2024, 14:29"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 14:29"
	},
	{
		device_id: "solarpanel_1",
		value: "233Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 14:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 14:29"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "06/04/2024, 14:24"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "06/04/2024, 14:24"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "06/04/2024, 14:24"
	},
	{
		device_id: "solarpanel_1",
		value: "129Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 14:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 14:24"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "06/04/2024, 14:19"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "06/04/2024, 14:19"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 14:19"
	},
	{
		device_id: "solarpanel_1",
		value: "18Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 14:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 14:19"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "06/04/2024, 14:14"
	},
	{
		device_id: "temp_1",
		value: "55°C",
		type: "temperature",
		timestamp: "06/04/2024, 14:14"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 14:14"
	},
	{
		device_id: "solarpanel_1",
		value: "314Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 14:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 14:14"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "06/04/2024, 14:09"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "06/04/2024, 14:09"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 14:09"
	},
	{
		device_id: "solarpanel_1",
		value: "443Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 14:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 14:09"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "06/04/2024, 14:04"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "06/04/2024, 14:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "06/04/2024, 14:04"
	},
	{
		device_id: "solarpanel_1",
		value: "227Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 14:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 14:04"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "06/04/2024, 13:59"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "06/04/2024, 13:59"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "06/04/2024, 13:59"
	},
	{
		device_id: "solarpanel_1",
		value: "801Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 13:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 13:59"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "06/04/2024, 13:54"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "06/04/2024, 13:54"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 13:54"
	},
	{
		device_id: "solarpanel_1",
		value: "288Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 13:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 13:54"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "06/04/2024, 13:49"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "06/04/2024, 13:49"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 13:49"
	},
	{
		device_id: "solarpanel_1",
		value: "91Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 13:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 13:49"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "06/04/2024, 13:44"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "06/04/2024, 13:44"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "06/04/2024, 13:44"
	},
	{
		device_id: "solarpanel_1",
		value: "485Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 13:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 13:44"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "06/04/2024, 13:39"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "06/04/2024, 13:39"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 13:39"
	},
	{
		device_id: "solarpanel_1",
		value: "820Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 13:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 13:39"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "06/04/2024, 13:34"
	},
	{
		device_id: "temp_1",
		value: "93°C",
		type: "temperature",
		timestamp: "06/04/2024, 13:34"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 13:34"
	},
	{
		device_id: "solarpanel_1",
		value: "789Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 13:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 13:34"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "06/04/2024, 13:29"
	},
	{
		device_id: "temp_1",
		value: "90°C",
		type: "temperature",
		timestamp: "06/04/2024, 13:29"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 13:29"
	},
	{
		device_id: "solarpanel_1",
		value: "478Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 13:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 13:29"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "06/04/2024, 13:24"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "06/04/2024, 13:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 13:24"
	},
	{
		device_id: "solarpanel_1",
		value: "121Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 13:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 13:24"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "06/04/2024, 13:19"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "06/04/2024, 13:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 13:19"
	},
	{
		device_id: "solarpanel_1",
		value: "636Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 13:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 13:19"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "06/04/2024, 13:14"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "06/04/2024, 13:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 13:14"
	},
	{
		device_id: "solarpanel_1",
		value: "611Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 13:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 13:14"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "06/04/2024, 13:09"
	},
	{
		device_id: "temp_1",
		value: "9°C",
		type: "temperature",
		timestamp: "06/04/2024, 13:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 13:09"
	},
	{
		device_id: "solarpanel_1",
		value: "943Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 13:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 13:09"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "06/04/2024, 13:04"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "06/04/2024, 13:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 13:04"
	},
	{
		device_id: "solarpanel_1",
		value: "328Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 13:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 13:04"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "06/04/2024, 12:59"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "06/04/2024, 12:59"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 12:59"
	},
	{
		device_id: "solarpanel_1",
		value: "138Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 12:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 12:59"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "06/04/2024, 12:54"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "06/04/2024, 12:54"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 12:54"
	},
	{
		device_id: "solarpanel_1",
		value: "409Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 12:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 12:54"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "06/04/2024, 12:49"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "06/04/2024, 12:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "06/04/2024, 12:49"
	},
	{
		device_id: "solarpanel_1",
		value: "88Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 12:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 12:49"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "06/04/2024, 12:44"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "06/04/2024, 12:44"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "06/04/2024, 12:44"
	},
	{
		device_id: "solarpanel_1",
		value: "888Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 12:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 12:44"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "06/04/2024, 12:39"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "06/04/2024, 12:39"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "06/04/2024, 12:39"
	},
	{
		device_id: "solarpanel_1",
		value: "389Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 12:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 12:39"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "06/04/2024, 12:34"
	},
	{
		device_id: "temp_1",
		value: "38°C",
		type: "temperature",
		timestamp: "06/04/2024, 12:34"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 12:34"
	},
	{
		device_id: "solarpanel_1",
		value: "141Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 12:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 12:34"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "06/04/2024, 12:29"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "06/04/2024, 12:29"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 12:29"
	},
	{
		device_id: "solarpanel_1",
		value: "313Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 12:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 12:29"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "06/04/2024, 12:24"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "06/04/2024, 12:24"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "06/04/2024, 12:24"
	},
	{
		device_id: "solarpanel_1",
		value: "223Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 12:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 12:24"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "06/04/2024, 12:19"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "06/04/2024, 12:19"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 12:19"
	},
	{
		device_id: "solarpanel_1",
		value: "36Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 12:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 12:19"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "06/04/2024, 12:14"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "06/04/2024, 12:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 12:14"
	},
	{
		device_id: "solarpanel_1",
		value: "693Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 12:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 12:14"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "06/04/2024, 12:09"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "06/04/2024, 12:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "06/04/2024, 12:09"
	},
	{
		device_id: "solarpanel_1",
		value: "73Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 12:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 12:09"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "06/04/2024, 12:04"
	},
	{
		device_id: "temp_1",
		value: "81°C",
		type: "temperature",
		timestamp: "06/04/2024, 12:04"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "06/04/2024, 12:04"
	},
	{
		device_id: "solarpanel_1",
		value: "826Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 12:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 12:04"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "06/04/2024, 11:59"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "06/04/2024, 11:59"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 11:59"
	},
	{
		device_id: "solarpanel_1",
		value: "795Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 11:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 11:59"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "06/04/2024, 11:54"
	},
	{
		device_id: "temp_1",
		value: "19°C",
		type: "temperature",
		timestamp: "06/04/2024, 11:54"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "06/04/2024, 11:54"
	},
	{
		device_id: "solarpanel_1",
		value: "215Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 11:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 11:54"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "06/04/2024, 11:49"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "06/04/2024, 11:49"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 11:49"
	},
	{
		device_id: "solarpanel_1",
		value: "249Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 11:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 11:49"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "06/04/2024, 11:44"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "06/04/2024, 11:44"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 11:44"
	},
	{
		device_id: "solarpanel_1",
		value: "44Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 11:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 11:44"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "06/04/2024, 11:39"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "06/04/2024, 11:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 11:39"
	},
	{
		device_id: "solarpanel_1",
		value: "762Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 11:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 11:39"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "06/04/2024, 11:34"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "06/04/2024, 11:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 11:34"
	},
	{
		device_id: "solarpanel_1",
		value: "37Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 11:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 11:34"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "06/04/2024, 11:29"
	},
	{
		device_id: "temp_1",
		value: "37°C",
		type: "temperature",
		timestamp: "06/04/2024, 11:29"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 11:29"
	},
	{
		device_id: "solarpanel_1",
		value: "451Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 11:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 11:29"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "06/04/2024, 11:24"
	},
	{
		device_id: "temp_1",
		value: "36°C",
		type: "temperature",
		timestamp: "06/04/2024, 11:24"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "06/04/2024, 11:24"
	},
	{
		device_id: "solarpanel_1",
		value: "175Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 11:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 11:24"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "06/04/2024, 11:19"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "06/04/2024, 11:19"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 11:19"
	},
	{
		device_id: "solarpanel_1",
		value: "417Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 11:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 11:19"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "06/04/2024, 11:14"
	},
	{
		device_id: "temp_1",
		value: "99°C",
		type: "temperature",
		timestamp: "06/04/2024, 11:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 11:14"
	},
	{
		device_id: "solarpanel_1",
		value: "849Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 11:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 11:14"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "06/04/2024, 11:09"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "06/04/2024, 11:09"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 11:09"
	},
	{
		device_id: "solarpanel_1",
		value: "582Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 11:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 11:09"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "06/04/2024, 11:04"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "06/04/2024, 11:04"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "06/04/2024, 11:04"
	},
	{
		device_id: "solarpanel_1",
		value: "72Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 11:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 11:04"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "06/04/2024, 10:59"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "06/04/2024, 10:59"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 10:59"
	},
	{
		device_id: "solarpanel_1",
		value: "748Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 10:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 10:59"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "06/04/2024, 10:54"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "06/04/2024, 10:54"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "06/04/2024, 10:54"
	},
	{
		device_id: "solarpanel_1",
		value: "504Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 10:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 10:54"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "06/04/2024, 10:49"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "06/04/2024, 10:49"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 10:49"
	},
	{
		device_id: "solarpanel_1",
		value: "806Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 10:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 10:49"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "06/04/2024, 10:44"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "06/04/2024, 10:44"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "06/04/2024, 10:44"
	},
	{
		device_id: "solarpanel_1",
		value: "923Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 10:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 10:44"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "06/04/2024, 10:39"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "06/04/2024, 10:39"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "06/04/2024, 10:39"
	},
	{
		device_id: "solarpanel_1",
		value: "882Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 10:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 10:39"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "06/04/2024, 10:34"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "06/04/2024, 10:34"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 10:34"
	},
	{
		device_id: "solarpanel_1",
		value: "978Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 10:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 10:34"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "06/04/2024, 10:29"
	},
	{
		device_id: "temp_1",
		value: "58°C",
		type: "temperature",
		timestamp: "06/04/2024, 10:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 10:29"
	},
	{
		device_id: "solarpanel_1",
		value: "160Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 10:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 10:29"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "06/04/2024, 10:24"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "06/04/2024, 10:24"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 10:24"
	},
	{
		device_id: "solarpanel_1",
		value: "691Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 10:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 10:24"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "06/04/2024, 10:19"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "06/04/2024, 10:19"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "06/04/2024, 10:19"
	},
	{
		device_id: "solarpanel_1",
		value: "778Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 10:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 10:19"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "06/04/2024, 10:14"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "06/04/2024, 10:14"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "06/04/2024, 10:14"
	},
	{
		device_id: "solarpanel_1",
		value: "121Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 10:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 10:14"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "06/04/2024, 10:09"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "06/04/2024, 10:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 10:09"
	},
	{
		device_id: "solarpanel_1",
		value: "635Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 10:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 10:09"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "06/04/2024, 10:04"
	},
	{
		device_id: "temp_1",
		value: "96°C",
		type: "temperature",
		timestamp: "06/04/2024, 10:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 10:04"
	},
	{
		device_id: "solarpanel_1",
		value: "378Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 10:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 10:04"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "06/04/2024, 09:59"
	},
	{
		device_id: "temp_1",
		value: "100°C",
		type: "temperature",
		timestamp: "06/04/2024, 09:59"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 09:59"
	},
	{
		device_id: "solarpanel_1",
		value: "258Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 09:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 09:59"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "06/04/2024, 09:54"
	},
	{
		device_id: "temp_1",
		value: "28°C",
		type: "temperature",
		timestamp: "06/04/2024, 09:54"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 09:54"
	},
	{
		device_id: "solarpanel_1",
		value: "152Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 09:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 09:54"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "06/04/2024, 09:49"
	},
	{
		device_id: "temp_1",
		value: "50°C",
		type: "temperature",
		timestamp: "06/04/2024, 09:49"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 09:49"
	},
	{
		device_id: "solarpanel_1",
		value: "801Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 09:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 09:49"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "06/04/2024, 09:44"
	},
	{
		device_id: "temp_1",
		value: "34°C",
		type: "temperature",
		timestamp: "06/04/2024, 09:44"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 09:44"
	},
	{
		device_id: "solarpanel_1",
		value: "899Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 09:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 09:44"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "06/04/2024, 09:39"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "06/04/2024, 09:39"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 09:39"
	},
	{
		device_id: "solarpanel_1",
		value: "143Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 09:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 09:39"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "06/04/2024, 09:34"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "06/04/2024, 09:34"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "06/04/2024, 09:34"
	},
	{
		device_id: "solarpanel_1",
		value: "405Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 09:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 09:34"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "06/04/2024, 09:29"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "06/04/2024, 09:29"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "06/04/2024, 09:29"
	},
	{
		device_id: "solarpanel_1",
		value: "835Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 09:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 09:29"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "06/04/2024, 09:24"
	},
	{
		device_id: "temp_1",
		value: "76°C",
		type: "temperature",
		timestamp: "06/04/2024, 09:24"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 09:24"
	},
	{
		device_id: "solarpanel_1",
		value: "861Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 09:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 09:24"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "06/04/2024, 09:19"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "06/04/2024, 09:19"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 09:19"
	},
	{
		device_id: "solarpanel_1",
		value: "807Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 09:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 09:19"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "06/04/2024, 09:14"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "06/04/2024, 09:14"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "06/04/2024, 09:14"
	},
	{
		device_id: "solarpanel_1",
		value: "541Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 09:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 09:14"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "06/04/2024, 09:09"
	},
	{
		device_id: "temp_1",
		value: "89°C",
		type: "temperature",
		timestamp: "06/04/2024, 09:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 09:09"
	},
	{
		device_id: "solarpanel_1",
		value: "601Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 09:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 09:09"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "06/04/2024, 09:04"
	},
	{
		device_id: "temp_1",
		value: "41°C",
		type: "temperature",
		timestamp: "06/04/2024, 09:04"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 09:04"
	},
	{
		device_id: "solarpanel_1",
		value: "582Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 09:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 09:04"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "06/04/2024, 08:59"
	},
	{
		device_id: "temp_1",
		value: "46°C",
		type: "temperature",
		timestamp: "06/04/2024, 08:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "06/04/2024, 08:59"
	},
	{
		device_id: "solarpanel_1",
		value: "279Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 08:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 08:59"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "06/04/2024, 08:54"
	},
	{
		device_id: "temp_1",
		value: "61°C",
		type: "temperature",
		timestamp: "06/04/2024, 08:54"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 08:54"
	},
	{
		device_id: "solarpanel_1",
		value: "768Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 08:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 08:54"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "06/04/2024, 08:49"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "06/04/2024, 08:49"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 08:49"
	},
	{
		device_id: "solarpanel_1",
		value: "354Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 08:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 08:49"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "06/04/2024, 08:44"
	},
	{
		device_id: "temp_1",
		value: "31°C",
		type: "temperature",
		timestamp: "06/04/2024, 08:44"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 08:44"
	},
	{
		device_id: "solarpanel_1",
		value: "564Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 08:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 08:44"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "06/04/2024, 08:39"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "06/04/2024, 08:39"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "06/04/2024, 08:39"
	},
	{
		device_id: "solarpanel_1",
		value: "728Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 08:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 08:39"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "06/04/2024, 08:34"
	},
	{
		device_id: "temp_1",
		value: "20°C",
		type: "temperature",
		timestamp: "06/04/2024, 08:34"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 08:34"
	},
	{
		device_id: "solarpanel_1",
		value: "427Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 08:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 08:34"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "06/04/2024, 08:29"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "06/04/2024, 08:29"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 08:29"
	},
	{
		device_id: "solarpanel_1",
		value: "157Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 08:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 08:29"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "06/04/2024, 08:24"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "06/04/2024, 08:24"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 08:24"
	},
	{
		device_id: "solarpanel_1",
		value: "973Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 08:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 08:24"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "06/04/2024, 08:19"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "06/04/2024, 08:19"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "06/04/2024, 08:19"
	},
	{
		device_id: "solarpanel_1",
		value: "379Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 08:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 08:19"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "06/04/2024, 08:14"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "06/04/2024, 08:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 08:14"
	},
	{
		device_id: "solarpanel_1",
		value: "946Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 08:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 08:14"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "06/04/2024, 08:09"
	},
	{
		device_id: "temp_1",
		value: "60°C",
		type: "temperature",
		timestamp: "06/04/2024, 08:09"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "06/04/2024, 08:09"
	},
	{
		device_id: "solarpanel_1",
		value: "254Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 08:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 08:09"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "06/04/2024, 08:04"
	},
	{
		device_id: "temp_1",
		value: "40°C",
		type: "temperature",
		timestamp: "06/04/2024, 08:04"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 08:04"
	},
	{
		device_id: "solarpanel_1",
		value: "326Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 08:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 08:04"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "06/04/2024, 07:59"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "06/04/2024, 07:59"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 07:59"
	},
	{
		device_id: "solarpanel_1",
		value: "873Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 07:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 07:59"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "06/04/2024, 07:54"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "06/04/2024, 07:54"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "06/04/2024, 07:54"
	},
	{
		device_id: "solarpanel_1",
		value: "99Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 07:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 07:54"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "06/04/2024, 07:49"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "06/04/2024, 07:49"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 07:49"
	},
	{
		device_id: "solarpanel_1",
		value: "665Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 07:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 07:49"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "06/04/2024, 07:44"
	},
	{
		device_id: "temp_1",
		value: "45°C",
		type: "temperature",
		timestamp: "06/04/2024, 07:44"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "06/04/2024, 07:44"
	},
	{
		device_id: "solarpanel_1",
		value: "49Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 07:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 07:44"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "06/04/2024, 07:39"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "06/04/2024, 07:39"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 07:39"
	},
	{
		device_id: "solarpanel_1",
		value: "331Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 07:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 07:39"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "06/04/2024, 07:34"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "06/04/2024, 07:34"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 07:34"
	},
	{
		device_id: "solarpanel_1",
		value: "286Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 07:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 07:34"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "06/04/2024, 07:29"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "06/04/2024, 07:29"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 07:29"
	},
	{
		device_id: "solarpanel_1",
		value: "930Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 07:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 07:29"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "06/04/2024, 07:24"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "06/04/2024, 07:24"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "06/04/2024, 07:24"
	},
	{
		device_id: "solarpanel_1",
		value: "82Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 07:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 07:24"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "06/04/2024, 07:19"
	},
	{
		device_id: "temp_1",
		value: "29°C",
		type: "temperature",
		timestamp: "06/04/2024, 07:19"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "06/04/2024, 07:19"
	},
	{
		device_id: "solarpanel_1",
		value: "426Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 07:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 07:19"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "06/04/2024, 07:14"
	},
	{
		device_id: "temp_1",
		value: "71°C",
		type: "temperature",
		timestamp: "06/04/2024, 07:14"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "06/04/2024, 07:14"
	},
	{
		device_id: "solarpanel_1",
		value: "951Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 07:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 07:14"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "06/04/2024, 07:09"
	},
	{
		device_id: "temp_1",
		value: "42°C",
		type: "temperature",
		timestamp: "06/04/2024, 07:09"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 07:09"
	},
	{
		device_id: "solarpanel_1",
		value: "380Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 07:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 07:09"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "06/04/2024, 07:04"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "06/04/2024, 07:04"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 07:04"
	},
	{
		device_id: "solarpanel_1",
		value: "288Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 07:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 07:04"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "06/04/2024, 06:59"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "06/04/2024, 06:59"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "06/04/2024, 06:59"
	},
	{
		device_id: "solarpanel_1",
		value: "737Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 06:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 06:59"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "06/04/2024, 06:54"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "06/04/2024, 06:54"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "06/04/2024, 06:54"
	},
	{
		device_id: "solarpanel_1",
		value: "698Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 06:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 06:54"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "06/04/2024, 06:49"
	},
	{
		device_id: "temp_1",
		value: "92°C",
		type: "temperature",
		timestamp: "06/04/2024, 06:49"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "06/04/2024, 06:49"
	},
	{
		device_id: "solarpanel_1",
		value: "972Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 06:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 06:49"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "06/04/2024, 06:44"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "06/04/2024, 06:44"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 06:44"
	},
	{
		device_id: "solarpanel_1",
		value: "952Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 06:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 06:44"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "06/04/2024, 06:39"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "06/04/2024, 06:39"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 06:39"
	},
	{
		device_id: "solarpanel_1",
		value: "924Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 06:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 06:39"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "06/04/2024, 06:34"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "06/04/2024, 06:34"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 06:34"
	},
	{
		device_id: "solarpanel_1",
		value: "744Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 06:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 06:34"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "06/04/2024, 06:29"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "06/04/2024, 06:29"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 06:29"
	},
	{
		device_id: "solarpanel_1",
		value: "348Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 06:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 06:29"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "06/04/2024, 06:24"
	},
	{
		device_id: "temp_1",
		value: "30°C",
		type: "temperature",
		timestamp: "06/04/2024, 06:24"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 06:24"
	},
	{
		device_id: "solarpanel_1",
		value: "690Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 06:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 06:24"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "06/04/2024, 06:19"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "06/04/2024, 06:19"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 06:19"
	},
	{
		device_id: "solarpanel_1",
		value: "628Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 06:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 06:19"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "06/04/2024, 06:14"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "06/04/2024, 06:14"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 06:14"
	},
	{
		device_id: "solarpanel_1",
		value: "661Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 06:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 06:14"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "06/04/2024, 06:09"
	},
	{
		device_id: "temp_1",
		value: "74°C",
		type: "temperature",
		timestamp: "06/04/2024, 06:09"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "06/04/2024, 06:09"
	},
	{
		device_id: "solarpanel_1",
		value: "288Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 06:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 06:09"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "06/04/2024, 06:04"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "06/04/2024, 06:04"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 06:04"
	},
	{
		device_id: "solarpanel_1",
		value: "298Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 06:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 06:04"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "06/04/2024, 05:59"
	},
	{
		device_id: "temp_1",
		value: "42°C",
		type: "temperature",
		timestamp: "06/04/2024, 05:59"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 05:59"
	},
	{
		device_id: "solarpanel_1",
		value: "284Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 05:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 05:59"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "06/04/2024, 05:54"
	},
	{
		device_id: "temp_1",
		value: "52°C",
		type: "temperature",
		timestamp: "06/04/2024, 05:54"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 05:54"
	},
	{
		device_id: "solarpanel_1",
		value: "525Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 05:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 05:54"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "06/04/2024, 05:49"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "06/04/2024, 05:49"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "06/04/2024, 05:49"
	},
	{
		device_id: "solarpanel_1",
		value: "560Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 05:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 05:49"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "06/04/2024, 05:44"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "06/04/2024, 05:44"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "06/04/2024, 05:44"
	},
	{
		device_id: "solarpanel_1",
		value: "96Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 05:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 05:44"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "06/04/2024, 05:39"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "06/04/2024, 05:39"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "06/04/2024, 05:39"
	},
	{
		device_id: "solarpanel_1",
		value: "354Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 05:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 05:39"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "06/04/2024, 05:34"
	},
	{
		device_id: "temp_1",
		value: "16°C",
		type: "temperature",
		timestamp: "06/04/2024, 05:34"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 05:34"
	},
	{
		device_id: "solarpanel_1",
		value: "45Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 05:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 05:34"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "06/04/2024, 05:29"
	},
	{
		device_id: "temp_1",
		value: "3°C",
		type: "temperature",
		timestamp: "06/04/2024, 05:29"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "06/04/2024, 05:29"
	},
	{
		device_id: "solarpanel_1",
		value: "936Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 05:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 05:29"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "06/04/2024, 05:24"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "06/04/2024, 05:24"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 05:24"
	},
	{
		device_id: "solarpanel_1",
		value: "424Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 05:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 05:24"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "06/04/2024, 05:19"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "06/04/2024, 05:19"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 05:19"
	},
	{
		device_id: "solarpanel_1",
		value: "620Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 05:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 05:19"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "06/04/2024, 05:14"
	},
	{
		device_id: "temp_1",
		value: "20°C",
		type: "temperature",
		timestamp: "06/04/2024, 05:14"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 05:14"
	},
	{
		device_id: "solarpanel_1",
		value: "960Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 05:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 05:14"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "06/04/2024, 05:09"
	},
	{
		device_id: "temp_1",
		value: "77°C",
		type: "temperature",
		timestamp: "06/04/2024, 05:09"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "06/04/2024, 05:09"
	},
	{
		device_id: "solarpanel_1",
		value: "660Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 05:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 05:09"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "06/04/2024, 05:04"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "06/04/2024, 05:04"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 05:04"
	},
	{
		device_id: "solarpanel_1",
		value: "149Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 05:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 05:04"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "06/04/2024, 04:59"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "06/04/2024, 04:59"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 04:59"
	},
	{
		device_id: "solarpanel_1",
		value: "802Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 04:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 04:59"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "06/04/2024, 04:54"
	},
	{
		device_id: "temp_1",
		value: "97°C",
		type: "temperature",
		timestamp: "06/04/2024, 04:54"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 04:54"
	},
	{
		device_id: "solarpanel_1",
		value: "94Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 04:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 04:54"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "06/04/2024, 04:49"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "06/04/2024, 04:49"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 04:49"
	},
	{
		device_id: "solarpanel_1",
		value: "547Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 04:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 04:49"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "06/04/2024, 04:44"
	},
	{
		device_id: "temp_1",
		value: "5°C",
		type: "temperature",
		timestamp: "06/04/2024, 04:44"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "06/04/2024, 04:44"
	},
	{
		device_id: "solarpanel_1",
		value: "600Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 04:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 04:44"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "06/04/2024, 04:39"
	},
	{
		device_id: "temp_1",
		value: "18°C",
		type: "temperature",
		timestamp: "06/04/2024, 04:39"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 04:39"
	},
	{
		device_id: "solarpanel_1",
		value: "989Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 04:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 04:39"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "06/04/2024, 04:34"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "06/04/2024, 04:34"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 04:34"
	},
	{
		device_id: "solarpanel_1",
		value: "934Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 04:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 04:34"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "06/04/2024, 04:29"
	},
	{
		device_id: "temp_1",
		value: "53°C",
		type: "temperature",
		timestamp: "06/04/2024, 04:29"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "06/04/2024, 04:29"
	},
	{
		device_id: "solarpanel_1",
		value: "790Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 04:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 04:29"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "06/04/2024, 04:24"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "06/04/2024, 04:24"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "06/04/2024, 04:24"
	},
	{
		device_id: "solarpanel_1",
		value: "980Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 04:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 04:24"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "06/04/2024, 04:19"
	},
	{
		device_id: "temp_1",
		value: "90°C",
		type: "temperature",
		timestamp: "06/04/2024, 04:19"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 04:19"
	},
	{
		device_id: "solarpanel_1",
		value: "565Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 04:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 04:19"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "06/04/2024, 04:14"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "06/04/2024, 04:14"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 04:14"
	},
	{
		device_id: "solarpanel_1",
		value: "342Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 04:14"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 04:14"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "06/04/2024, 04:09"
	},
	{
		device_id: "temp_1",
		value: "22°C",
		type: "temperature",
		timestamp: "06/04/2024, 04:09"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 04:09"
	},
	{
		device_id: "solarpanel_1",
		value: "809Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 04:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 04:09"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "06/04/2024, 04:04"
	},
	{
		device_id: "temp_1",
		value: "12°C",
		type: "temperature",
		timestamp: "06/04/2024, 04:04"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "06/04/2024, 04:04"
	},
	{
		device_id: "solarpanel_1",
		value: "54Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 04:04"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 04:04"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "06/04/2024, 03:59"
	},
	{
		device_id: "temp_1",
		value: "51°C",
		type: "temperature",
		timestamp: "06/04/2024, 03:59"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "06/04/2024, 03:59"
	},
	{
		device_id: "solarpanel_1",
		value: "494Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 03:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 03:59"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "06/04/2024, 03:54"
	},
	{
		device_id: "temp_1",
		value: "43°C",
		type: "temperature",
		timestamp: "06/04/2024, 03:54"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 03:54"
	},
	{
		device_id: "solarpanel_1",
		value: "650Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 03:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 03:54"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "06/04/2024, 03:49"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "06/04/2024, 03:49"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "06/04/2024, 03:49"
	},
	{
		device_id: "solarpanel_1",
		value: "44Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 03:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 03:49"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "06/04/2024, 03:44"
	},
	{
		device_id: "temp_1",
		value: "49°C",
		type: "temperature",
		timestamp: "06/04/2024, 03:44"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 03:44"
	},
	{
		device_id: "solarpanel_1",
		value: "813Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 03:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 03:44"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "06/04/2024, 03:39"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "06/04/2024, 03:39"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 03:39"
	},
	{
		device_id: "solarpanel_1",
		value: "42Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 03:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 03:39"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "06/04/2024, 03:34"
	},
	{
		device_id: "temp_1",
		value: "44°C",
		type: "temperature",
		timestamp: "06/04/2024, 03:34"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 03:34"
	},
	{
		device_id: "solarpanel_1",
		value: "968Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 03:34"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 03:34"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "06/04/2024, 03:29"
	},
	{
		device_id: "temp_1",
		value: "67°C",
		type: "temperature",
		timestamp: "06/04/2024, 03:29"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 03:29"
	},
	{
		device_id: "solarpanel_1",
		value: "643Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 03:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 03:29"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "06/04/2024, 03:24"
	},
	{
		device_id: "temp_1",
		value: "1°C",
		type: "temperature",
		timestamp: "06/04/2024, 03:24"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "06/04/2024, 03:24"
	},
	{
		device_id: "solarpanel_1",
		value: "930Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 03:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 03:24"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "06/04/2024, 03:19"
	},
	{
		device_id: "temp_1",
		value: "42°C",
		type: "temperature",
		timestamp: "06/04/2024, 03:19"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "06/04/2024, 03:19"
	},
	{
		device_id: "solarpanel_1",
		value: "758Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 03:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 03:19"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "06/04/2024, 03:14"
	},
	{
		device_id: "temp_1",
		value: "40°C",
		type: "temperature",
		timestamp: "06/04/2024, 03:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 03:14"
	},
	{
		device_id: "solarpanel_1",
		value: "24Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 03:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 03:14"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "06/04/2024, 03:09"
	},
	{
		device_id: "temp_1",
		value: "65°C",
		type: "temperature",
		timestamp: "06/04/2024, 03:09"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 03:09"
	},
	{
		device_id: "solarpanel_1",
		value: "639Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 03:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 03:09"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "06/04/2024, 03:04"
	},
	{
		device_id: "temp_1",
		value: "91°C",
		type: "temperature",
		timestamp: "06/04/2024, 03:04"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "06/04/2024, 03:04"
	},
	{
		device_id: "solarpanel_1",
		value: "68Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 03:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 03:04"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "06/04/2024, 02:59"
	},
	{
		device_id: "temp_1",
		value: "70°C",
		type: "temperature",
		timestamp: "06/04/2024, 02:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "06/04/2024, 02:59"
	},
	{
		device_id: "solarpanel_1",
		value: "218Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 02:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 02:59"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "06/04/2024, 02:54"
	},
	{
		device_id: "temp_1",
		value: "13°C",
		type: "temperature",
		timestamp: "06/04/2024, 02:54"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 02:54"
	},
	{
		device_id: "solarpanel_1",
		value: "795Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 02:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 02:54"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "06/04/2024, 02:49"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "06/04/2024, 02:49"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 02:49"
	},
	{
		device_id: "solarpanel_1",
		value: "19Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 02:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 02:49"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "06/04/2024, 02:44"
	},
	{
		device_id: "temp_1",
		value: "23°C",
		type: "temperature",
		timestamp: "06/04/2024, 02:44"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 02:44"
	},
	{
		device_id: "solarpanel_1",
		value: "923Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 02:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 02:44"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "06/04/2024, 02:39"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "06/04/2024, 02:39"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "06/04/2024, 02:39"
	},
	{
		device_id: "solarpanel_1",
		value: "969Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 02:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 02:39"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "06/04/2024, 02:34"
	},
	{
		device_id: "temp_1",
		value: "63°C",
		type: "temperature",
		timestamp: "06/04/2024, 02:34"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 02:34"
	},
	{
		device_id: "solarpanel_1",
		value: "596Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 02:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 02:34"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "06/04/2024, 02:29"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "06/04/2024, 02:29"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 02:29"
	},
	{
		device_id: "solarpanel_1",
		value: "805Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 02:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 02:29"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "06/04/2024, 02:24"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "06/04/2024, 02:24"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 02:24"
	},
	{
		device_id: "solarpanel_1",
		value: "536Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 02:24"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 02:24"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "06/04/2024, 02:19"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "06/04/2024, 02:19"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "06/04/2024, 02:19"
	},
	{
		device_id: "solarpanel_1",
		value: "622Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 02:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 02:19"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "06/04/2024, 02:14"
	},
	{
		device_id: "temp_1",
		value: "85°C",
		type: "temperature",
		timestamp: "06/04/2024, 02:14"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 02:14"
	},
	{
		device_id: "solarpanel_1",
		value: "762Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 02:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 02:14"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "06/04/2024, 02:09"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "06/04/2024, 02:09"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "06/04/2024, 02:09"
	},
	{
		device_id: "solarpanel_1",
		value: "224Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 02:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 02:09"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "06/04/2024, 02:04"
	},
	{
		device_id: "temp_1",
		value: "80°C",
		type: "temperature",
		timestamp: "06/04/2024, 02:04"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 02:04"
	},
	{
		device_id: "solarpanel_1",
		value: "712Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 02:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 02:04"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "06/04/2024, 01:59"
	},
	{
		device_id: "temp_1",
		value: "87°C",
		type: "temperature",
		timestamp: "06/04/2024, 01:59"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "06/04/2024, 01:59"
	},
	{
		device_id: "solarpanel_1",
		value: "446Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 01:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 01:59"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "06/04/2024, 01:54"
	},
	{
		device_id: "temp_1",
		value: "24°C",
		type: "temperature",
		timestamp: "06/04/2024, 01:54"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 01:54"
	},
	{
		device_id: "solarpanel_1",
		value: "879Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 01:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 01:54"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "06/04/2024, 01:49"
	},
	{
		device_id: "temp_1",
		value: "4°C",
		type: "temperature",
		timestamp: "06/04/2024, 01:49"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 01:49"
	},
	{
		device_id: "solarpanel_1",
		value: "129Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 01:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 01:49"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "06/04/2024, 01:44"
	},
	{
		device_id: "temp_1",
		value: "8°C",
		type: "temperature",
		timestamp: "06/04/2024, 01:44"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 01:44"
	},
	{
		device_id: "solarpanel_1",
		value: "561Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 01:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 01:44"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "06/04/2024, 01:39"
	},
	{
		device_id: "temp_1",
		value: "75°C",
		type: "temperature",
		timestamp: "06/04/2024, 01:39"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 01:39"
	},
	{
		device_id: "solarpanel_1",
		value: "291Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 01:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 01:39"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "06/04/2024, 01:34"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "06/04/2024, 01:34"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 01:34"
	},
	{
		device_id: "solarpanel_1",
		value: "649Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 01:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 01:34"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "06/04/2024, 01:29"
	},
	{
		device_id: "temp_1",
		value: "31°C",
		type: "temperature",
		timestamp: "06/04/2024, 01:29"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "06/04/2024, 01:29"
	},
	{
		device_id: "solarpanel_1",
		value: "277Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 01:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 01:29"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "06/04/2024, 01:24"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "06/04/2024, 01:24"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 01:24"
	},
	{
		device_id: "solarpanel_1",
		value: "572Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 01:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 01:24"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "06/04/2024, 01:19"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "06/04/2024, 01:19"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "06/04/2024, 01:19"
	},
	{
		device_id: "solarpanel_1",
		value: "470Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 01:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 01:19"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "06/04/2024, 01:14"
	},
	{
		device_id: "temp_1",
		value: "72°C",
		type: "temperature",
		timestamp: "06/04/2024, 01:14"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "06/04/2024, 01:14"
	},
	{
		device_id: "solarpanel_1",
		value: "947Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 01:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 01:14"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "06/04/2024, 01:09"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "06/04/2024, 01:09"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 01:09"
	},
	{
		device_id: "solarpanel_1",
		value: "107Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 01:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 01:09"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "06/04/2024, 01:04"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "06/04/2024, 01:04"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "06/04/2024, 01:04"
	},
	{
		device_id: "solarpanel_1",
		value: "198Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 01:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 01:04"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "06/04/2024, 00:59"
	},
	{
		device_id: "temp_1",
		value: "6°C",
		type: "temperature",
		timestamp: "06/04/2024, 00:59"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 00:59"
	},
	{
		device_id: "solarpanel_1",
		value: "449Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 00:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 00:59"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "06/04/2024, 00:54"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "06/04/2024, 00:54"
	},
	{
		device_id: "ph_1",
		value: "11",
		type: "PH",
		timestamp: "06/04/2024, 00:54"
	},
	{
		device_id: "solarpanel_1",
		value: "29Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 00:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 00:54"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "06/04/2024, 00:49"
	},
	{
		device_id: "temp_1",
		value: "15°C",
		type: "temperature",
		timestamp: "06/04/2024, 00:49"
	},
	{
		device_id: "ph_1",
		value: "3",
		type: "PH",
		timestamp: "06/04/2024, 00:49"
	},
	{
		device_id: "solarpanel_1",
		value: "297Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 00:49"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 00:49"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "06/04/2024, 00:44"
	},
	{
		device_id: "temp_1",
		value: "48°C",
		type: "temperature",
		timestamp: "06/04/2024, 00:44"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "06/04/2024, 00:44"
	},
	{
		device_id: "solarpanel_1",
		value: "1Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 00:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 00:44"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "06/04/2024, 00:39"
	},
	{
		device_id: "temp_1",
		value: "95°C",
		type: "temperature",
		timestamp: "06/04/2024, 00:39"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "06/04/2024, 00:39"
	},
	{
		device_id: "solarpanel_1",
		value: "119Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 00:39"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 00:39"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "06/04/2024, 00:34"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "06/04/2024, 00:34"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 00:34"
	},
	{
		device_id: "solarpanel_1",
		value: "667Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 00:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 00:34"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "06/04/2024, 00:29"
	},
	{
		device_id: "temp_1",
		value: "84°C",
		type: "temperature",
		timestamp: "06/04/2024, 00:29"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 00:29"
	},
	{
		device_id: "solarpanel_1",
		value: "671Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 00:29"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 00:29"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "06/04/2024, 00:24"
	},
	{
		device_id: "temp_1",
		value: "83°C",
		type: "temperature",
		timestamp: "06/04/2024, 00:24"
	},
	{
		device_id: "ph_1",
		value: "12",
		type: "PH",
		timestamp: "06/04/2024, 00:24"
	},
	{
		device_id: "solarpanel_1",
		value: "578Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 00:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 00:24"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "06/04/2024, 00:19"
	},
	{
		device_id: "temp_1",
		value: "14°C",
		type: "temperature",
		timestamp: "06/04/2024, 00:19"
	},
	{
		device_id: "ph_1",
		value: "6",
		type: "PH",
		timestamp: "06/04/2024, 00:19"
	},
	{
		device_id: "solarpanel_1",
		value: "719Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 00:19"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 00:19"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "06/04/2024, 00:14"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "06/04/2024, 00:14"
	},
	{
		device_id: "ph_1",
		value: "10",
		type: "PH",
		timestamp: "06/04/2024, 00:14"
	},
	{
		device_id: "solarpanel_1",
		value: "820Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 00:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "06/04/2024, 00:14"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "06/04/2024, 00:09"
	},
	{
		device_id: "temp_1",
		value: "56°C",
		type: "temperature",
		timestamp: "06/04/2024, 00:09"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "06/04/2024, 00:09"
	},
	{
		device_id: "solarpanel_1",
		value: "60Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 00:09"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 00:09"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "06/04/2024, 00:04"
	},
	{
		device_id: "temp_1",
		value: "21°C",
		type: "temperature",
		timestamp: "06/04/2024, 00:04"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "06/04/2024, 00:04"
	},
	{
		device_id: "solarpanel_1",
		value: "769Lux",
		type: "Sun Intensity",
		timestamp: "06/04/2024, 00:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "06/04/2024, 00:04"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "05/04/2024, 23:59"
	},
	{
		device_id: "temp_1",
		value: "66°C",
		type: "temperature",
		timestamp: "05/04/2024, 23:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "05/04/2024, 23:59"
	},
	{
		device_id: "solarpanel_1",
		value: "533Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 23:59"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "05/04/2024, 23:59"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "05/04/2024, 23:54"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "05/04/2024, 23:54"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "05/04/2024, 23:54"
	},
	{
		device_id: "solarpanel_1",
		value: "286Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 23:54"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "05/04/2024, 23:54"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "05/04/2024, 23:49"
	},
	{
		device_id: "temp_1",
		value: "62°C",
		type: "temperature",
		timestamp: "05/04/2024, 23:49"
	},
	{
		device_id: "ph_1",
		value: "7",
		type: "PH",
		timestamp: "05/04/2024, 23:49"
	},
	{
		device_id: "solarpanel_1",
		value: "409Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 23:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "05/04/2024, 23:49"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "05/04/2024, 23:44"
	},
	{
		device_id: "temp_1",
		value: "82°C",
		type: "temperature",
		timestamp: "05/04/2024, 23:44"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "05/04/2024, 23:44"
	},
	{
		device_id: "solarpanel_1",
		value: "987Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 23:44"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "05/04/2024, 23:44"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "05/04/2024, 23:39"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "05/04/2024, 23:39"
	},
	{
		device_id: "ph_1",
		value: "8",
		type: "PH",
		timestamp: "05/04/2024, 23:39"
	},
	{
		device_id: "solarpanel_1",
		value: "94Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 23:39"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "05/04/2024, 23:39"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "05/04/2024, 23:34"
	},
	{
		device_id: "temp_1",
		value: "16°C",
		type: "temperature",
		timestamp: "05/04/2024, 23:34"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "05/04/2024, 23:34"
	},
	{
		device_id: "solarpanel_1",
		value: "472Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 23:34"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "05/04/2024, 23:34"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "05/04/2024, 23:29"
	},
	{
		device_id: "temp_1",
		value: "47°C",
		type: "temperature",
		timestamp: "05/04/2024, 23:29"
	},
	{
		device_id: "ph_1",
		value: "9",
		type: "PH",
		timestamp: "05/04/2024, 23:29"
	},
	{
		device_id: "solarpanel_1",
		value: "292Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 23:29"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "05/04/2024, 23:29"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "05/04/2024, 23:24"
	},
	{
		device_id: "temp_1",
		value: "98°C",
		type: "temperature",
		timestamp: "05/04/2024, 23:24"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "05/04/2024, 23:24"
	},
	{
		device_id: "solarpanel_1",
		value: "169Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 23:24"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "05/04/2024, 23:24"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "05/04/2024, 23:19"
	},
	{
		device_id: "temp_1",
		value: "7°C",
		type: "temperature",
		timestamp: "05/04/2024, 23:19"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "05/04/2024, 23:19"
	},
	{
		device_id: "solarpanel_1",
		value: "917Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 23:19"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "05/04/2024, 23:19"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "05/04/2024, 23:14"
	},
	{
		device_id: "temp_1",
		value: "39°C",
		type: "temperature",
		timestamp: "05/04/2024, 23:14"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "05/04/2024, 23:14"
	},
	{
		device_id: "solarpanel_1",
		value: "400Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 23:14"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "05/04/2024, 23:14"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "05/04/2024, 23:09"
	},
	{
		device_id: "temp_1",
		value: "79°C",
		type: "temperature",
		timestamp: "05/04/2024, 23:09"
	},
	{
		device_id: "ph_1",
		value: "2",
		type: "PH",
		timestamp: "05/04/2024, 23:09"
	},
	{
		device_id: "solarpanel_1",
		value: "326Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 23:09"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "05/04/2024, 23:09"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "05/04/2024, 23:04"
	},
	{
		device_id: "temp_1",
		value: "25°C",
		type: "temperature",
		timestamp: "05/04/2024, 23:04"
	},
	{
		device_id: "ph_1",
		value: "14",
		type: "PH",
		timestamp: "05/04/2024, 23:04"
	},
	{
		device_id: "solarpanel_1",
		value: "426Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 23:04"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "05/04/2024, 23:04"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "05/04/2024, 22:59"
	},
	{
		device_id: "temp_1",
		value: "32°C",
		type: "temperature",
		timestamp: "05/04/2024, 22:59"
	},
	{
		device_id: "ph_1",
		value: "5",
		type: "PH",
		timestamp: "05/04/2024, 22:59"
	},
	{
		device_id: "solarpanel_1",
		value: "923Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 22:59"
	},
	{
		device_id: "valve_1",
		value: "off",
		type: "Valve",
		timestamp: "05/04/2024, 22:59"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "05/04/2024, 22:54"
	},
	{
		device_id: "temp_1",
		value: "17°C",
		type: "temperature",
		timestamp: "05/04/2024, 22:54"
	},
	{
		device_id: "ph_1",
		value: "13",
		type: "PH",
		timestamp: "05/04/2024, 22:54"
	},
	{
		device_id: "solarpanel_1",
		value: "9Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 22:54"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "05/04/2024, 22:54"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "05/04/2024, 22:49"
	},
	{
		device_id: "temp_1",
		value: "27°C",
		type: "temperature",
		timestamp: "05/04/2024, 22:49"
	},
	{
		device_id: "ph_1",
		value: "4",
		type: "PH",
		timestamp: "05/04/2024, 22:49"
	},
	{
		device_id: "solarpanel_1",
		value: "37Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 22:49"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "05/04/2024, 22:49"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "05/04/2024, 22:44"
	},
	{
		device_id: "temp_1",
		value: "68°C",
		type: "temperature",
		timestamp: "05/04/2024, 22:44"
	},
	{
		device_id: "ph_1",
		value: "1",
		type: "PH",
		timestamp: "05/04/2024, 22:44"
	},
	{
		device_id: "solarpanel_1",
		value: "777Lux",
		type: "Sun Intensity",
		timestamp: "05/04/2024, 22:44"
	},
	{
		device_id: "valve_1",
		value: "on",
		type: "Valve",
		timestamp: "05/04/2024, 22:44"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "05/04/2024, 22:39"
	},
	{
		device_id: "temp_1",
		value: "54°C",
		type: "temperature",
		timestamp: "05/04/2024, 22:39"
	},
	{
		device_id: "ph_1",

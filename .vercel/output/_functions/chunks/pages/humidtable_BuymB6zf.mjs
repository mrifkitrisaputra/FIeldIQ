/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderHead } from '../astro_3fiXy-ut.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const data = [
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "18/04/2024, 18:51"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "18/04/2024, 18:46"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "18/04/2024, 18:41"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "18/04/2024, 18:36"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "18/04/2024, 18:31"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "18/04/2024, 18:26"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "18/04/2024, 18:21"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "18/04/2024, 18:16"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "18/04/2024, 18:11"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "18/04/2024, 18:06"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "18/04/2024, 18:01"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "18/04/2024, 17:56"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "18/04/2024, 17:51"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "18/04/2024, 17:46"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "18/04/2024, 17:41"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "18/04/2024, 17:36"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "18/04/2024, 17:31"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "18/04/2024, 17:26"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "18/04/2024, 17:21"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "18/04/2024, 17:16"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "18/04/2024, 17:11"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "18/04/2024, 17:06"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "18/04/2024, 17:01"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "18/04/2024, 16:56"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "18/04/2024, 16:51"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "18/04/2024, 16:46"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "18/04/2024, 16:41"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "18/04/2024, 16:36"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "18/04/2024, 16:31"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "18/04/2024, 16:26"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "18/04/2024, 16:21"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "18/04/2024, 16:16"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "18/04/2024, 16:11"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "18/04/2024, 16:06"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "18/04/2024, 16:01"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "18/04/2024, 15:56"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "18/04/2024, 15:51"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "18/04/2024, 15:46"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "18/04/2024, 15:41"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "18/04/2024, 15:36"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "18/04/2024, 15:31"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "18/04/2024, 15:26"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "18/04/2024, 15:21"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "18/04/2024, 15:16"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "18/04/2024, 15:11"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "18/04/2024, 15:06"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "18/04/2024, 15:01"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "18/04/2024, 14:56"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "18/04/2024, 14:51"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "18/04/2024, 14:46"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "18/04/2024, 14:41"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "18/04/2024, 14:36"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "18/04/2024, 14:31"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "18/04/2024, 14:26"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "18/04/2024, 14:21"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "18/04/2024, 14:16"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "18/04/2024, 14:11"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "18/04/2024, 14:06"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "18/04/2024, 14:01"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "18/04/2024, 13:56"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "18/04/2024, 13:51"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "18/04/2024, 13:46"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "18/04/2024, 13:41"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "18/04/2024, 13:36"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "18/04/2024, 13:31"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "18/04/2024, 13:26"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "18/04/2024, 13:21"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "18/04/2024, 13:16"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "18/04/2024, 13:11"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "18/04/2024, 13:06"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "18/04/2024, 13:01"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "18/04/2024, 12:56"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "18/04/2024, 12:51"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "18/04/2024, 12:46"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "18/04/2024, 12:41"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "18/04/2024, 12:36"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "18/04/2024, 12:31"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "18/04/2024, 12:26"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "18/04/2024, 12:21"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "18/04/2024, 12:16"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "18/04/2024, 12:11"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "18/04/2024, 12:06"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "18/04/2024, 12:01"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "18/04/2024, 11:56"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "18/04/2024, 11:51"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "18/04/2024, 11:46"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "18/04/2024, 11:41"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "18/04/2024, 11:36"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "18/04/2024, 11:31"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "18/04/2024, 11:26"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "18/04/2024, 11:21"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "18/04/2024, 11:16"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "18/04/2024, 11:11"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "18/04/2024, 11:06"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "18/04/2024, 11:01"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "18/04/2024, 10:56"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "18/04/2024, 10:51"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "18/04/2024, 10:46"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "18/04/2024, 10:41"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "18/04/2024, 10:36"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "18/04/2024, 10:31"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "18/04/2024, 10:26"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "18/04/2024, 10:21"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "18/04/2024, 10:16"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "18/04/2024, 10:11"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "18/04/2024, 10:06"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "18/04/2024, 10:01"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "18/04/2024, 09:56"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "18/04/2024, 09:51"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "18/04/2024, 09:46"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "18/04/2024, 09:41"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "18/04/2024, 09:36"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "18/04/2024, 09:31"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "18/04/2024, 09:26"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "18/04/2024, 09:21"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "18/04/2024, 09:16"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "18/04/2024, 09:11"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "18/04/2024, 09:06"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "18/04/2024, 09:01"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "18/04/2024, 08:56"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "18/04/2024, 08:51"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "18/04/2024, 08:46"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "18/04/2024, 08:41"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "18/04/2024, 08:36"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "18/04/2024, 08:31"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "18/04/2024, 08:26"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "18/04/2024, 08:21"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "18/04/2024, 08:16"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "18/04/2024, 08:11"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "18/04/2024, 08:06"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "18/04/2024, 08:01"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "18/04/2024, 07:56"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "18/04/2024, 07:51"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "18/04/2024, 07:46"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "18/04/2024, 07:41"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "18/04/2024, 07:36"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "18/04/2024, 07:31"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "18/04/2024, 07:26"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "18/04/2024, 07:21"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "18/04/2024, 07:16"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "18/04/2024, 07:11"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "18/04/2024, 07:06"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "18/04/2024, 07:01"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "18/04/2024, 06:56"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "18/04/2024, 06:51"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "18/04/2024, 06:46"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "18/04/2024, 06:41"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "18/04/2024, 06:36"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "18/04/2024, 06:31"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "18/04/2024, 06:26"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "18/04/2024, 06:21"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "18/04/2024, 06:16"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "18/04/2024, 06:11"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "18/04/2024, 06:06"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "18/04/2024, 06:01"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "18/04/2024, 05:56"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "18/04/2024, 05:51"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "18/04/2024, 05:46"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "18/04/2024, 05:41"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "18/04/2024, 05:36"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "18/04/2024, 05:31"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "18/04/2024, 05:26"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "18/04/2024, 05:21"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "18/04/2024, 05:16"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "18/04/2024, 05:11"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "18/04/2024, 05:06"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "18/04/2024, 05:01"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "18/04/2024, 04:56"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "18/04/2024, 04:51"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "18/04/2024, 04:46"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "18/04/2024, 04:41"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "18/04/2024, 04:36"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "18/04/2024, 04:31"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "18/04/2024, 04:26"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "18/04/2024, 04:21"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "18/04/2024, 04:16"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "18/04/2024, 04:11"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "18/04/2024, 04:06"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "18/04/2024, 04:01"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "18/04/2024, 03:56"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "18/04/2024, 03:51"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "18/04/2024, 03:46"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "18/04/2024, 03:41"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "18/04/2024, 03:36"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "18/04/2024, 03:31"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "18/04/2024, 03:26"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "18/04/2024, 03:21"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "18/04/2024, 03:16"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "18/04/2024, 03:11"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "18/04/2024, 03:06"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "18/04/2024, 03:01"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "18/04/2024, 02:56"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "18/04/2024, 02:51"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "18/04/2024, 02:46"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "18/04/2024, 02:41"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "18/04/2024, 02:36"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "18/04/2024, 02:31"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "18/04/2024, 02:26"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "18/04/2024, 02:21"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "18/04/2024, 02:16"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "18/04/2024, 02:11"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "18/04/2024, 02:06"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "18/04/2024, 02:01"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "18/04/2024, 01:56"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "18/04/2024, 01:51"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "18/04/2024, 01:46"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "18/04/2024, 01:41"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "18/04/2024, 01:36"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "18/04/2024, 01:31"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "18/04/2024, 01:26"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "18/04/2024, 01:21"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "18/04/2024, 01:16"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "18/04/2024, 01:11"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "18/04/2024, 01:06"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "18/04/2024, 01:01"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "18/04/2024, 00:56"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "18/04/2024, 00:51"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "18/04/2024, 00:46"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "18/04/2024, 00:41"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "18/04/2024, 00:36"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "18/04/2024, 00:31"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "18/04/2024, 00:26"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "18/04/2024, 00:21"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "18/04/2024, 00:16"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "18/04/2024, 00:11"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "18/04/2024, 00:06"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "18/04/2024, 00:01"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "17/04/2024, 23:56"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "17/04/2024, 23:51"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "17/04/2024, 23:46"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "17/04/2024, 23:41"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "17/04/2024, 23:36"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "17/04/2024, 23:31"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "17/04/2024, 23:26"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "17/04/2024, 23:21"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "17/04/2024, 23:16"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "17/04/2024, 23:11"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "17/04/2024, 23:06"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "17/04/2024, 23:01"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "17/04/2024, 22:56"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "17/04/2024, 22:51"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "17/04/2024, 22:46"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "17/04/2024, 22:41"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "17/04/2024, 22:36"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "17/04/2024, 22:31"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "17/04/2024, 22:26"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "17/04/2024, 22:21"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "17/04/2024, 22:16"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "17/04/2024, 22:11"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "17/04/2024, 22:06"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "17/04/2024, 22:01"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "17/04/2024, 21:56"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "17/04/2024, 21:51"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "17/04/2024, 21:46"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "17/04/2024, 21:41"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "17/04/2024, 21:36"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "17/04/2024, 21:31"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "17/04/2024, 21:26"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "17/04/2024, 21:21"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "17/04/2024, 21:16"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "17/04/2024, 21:11"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "17/04/2024, 21:06"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "17/04/2024, 21:01"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "17/04/2024, 20:56"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "17/04/2024, 20:51"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "17/04/2024, 20:46"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "17/04/2024, 20:41"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "17/04/2024, 20:36"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "17/04/2024, 20:31"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "17/04/2024, 20:26"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "17/04/2024, 20:21"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "17/04/2024, 20:16"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "17/04/2024, 20:11"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "17/04/2024, 20:06"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "17/04/2024, 20:01"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "17/04/2024, 19:56"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "17/04/2024, 19:51"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "17/04/2024, 19:46"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "17/04/2024, 19:41"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "17/04/2024, 19:36"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "17/04/2024, 19:31"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "17/04/2024, 19:26"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "17/04/2024, 19:21"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "17/04/2024, 19:16"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "17/04/2024, 19:11"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "17/04/2024, 19:06"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "17/04/2024, 19:01"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "17/04/2024, 18:56"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "16/04/2024, 18:51"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "16/04/2024, 18:46"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "16/04/2024, 18:41"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "16/04/2024, 18:36"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "16/04/2024, 18:31"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "16/04/2024, 18:26"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "16/04/2024, 18:21"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "16/04/2024, 18:16"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "16/04/2024, 18:11"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "16/04/2024, 18:06"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "16/04/2024, 18:01"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "16/04/2024, 17:56"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "16/04/2024, 17:51"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "16/04/2024, 17:46"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "16/04/2024, 17:41"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "16/04/2024, 17:36"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "16/04/2024, 17:31"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "16/04/2024, 17:26"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "16/04/2024, 17:21"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "16/04/2024, 17:16"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "16/04/2024, 17:11"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "16/04/2024, 17:06"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "16/04/2024, 17:01"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "16/04/2024, 16:56"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "16/04/2024, 16:51"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "16/04/2024, 16:46"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "16/04/2024, 16:41"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "16/04/2024, 16:36"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "16/04/2024, 16:31"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "16/04/2024, 16:26"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "16/04/2024, 16:21"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "16/04/2024, 16:16"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "16/04/2024, 16:11"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "16/04/2024, 16:06"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "16/04/2024, 16:01"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "16/04/2024, 15:56"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "16/04/2024, 15:51"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "16/04/2024, 15:46"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "16/04/2024, 15:41"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "16/04/2024, 15:36"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "16/04/2024, 15:31"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "16/04/2024, 15:26"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "16/04/2024, 15:21"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "16/04/2024, 15:16"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "16/04/2024, 15:11"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "16/04/2024, 15:06"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "16/04/2024, 15:01"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "16/04/2024, 14:56"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "16/04/2024, 14:51"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "16/04/2024, 14:46"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "16/04/2024, 14:41"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "16/04/2024, 14:36"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "16/04/2024, 14:31"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "16/04/2024, 14:26"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "16/04/2024, 14:21"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "16/04/2024, 14:16"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "16/04/2024, 14:11"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "16/04/2024, 14:06"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "16/04/2024, 14:01"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "16/04/2024, 13:56"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "16/04/2024, 13:51"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "16/04/2024, 13:46"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "16/04/2024, 13:41"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "16/04/2024, 13:36"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "16/04/2024, 13:31"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "16/04/2024, 13:26"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "16/04/2024, 13:21"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "16/04/2024, 13:16"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "16/04/2024, 13:11"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "16/04/2024, 13:06"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "16/04/2024, 13:01"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "16/04/2024, 12:56"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "16/04/2024, 12:51"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "16/04/2024, 12:46"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "16/04/2024, 12:41"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "16/04/2024, 12:36"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "16/04/2024, 12:31"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "16/04/2024, 12:26"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "16/04/2024, 12:21"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "16/04/2024, 12:16"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "16/04/2024, 12:11"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "16/04/2024, 12:06"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "16/04/2024, 12:01"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "16/04/2024, 11:56"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "16/04/2024, 11:51"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "16/04/2024, 11:46"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "16/04/2024, 11:41"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "16/04/2024, 11:36"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "16/04/2024, 11:31"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "16/04/2024, 11:26"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "16/04/2024, 11:21"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "16/04/2024, 11:16"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "16/04/2024, 11:11"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "16/04/2024, 11:06"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "16/04/2024, 11:01"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "16/04/2024, 10:56"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "16/04/2024, 10:51"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "16/04/2024, 10:46"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "16/04/2024, 10:41"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "16/04/2024, 10:36"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "16/04/2024, 10:31"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "16/04/2024, 10:26"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "16/04/2024, 10:21"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "16/04/2024, 10:16"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "16/04/2024, 10:11"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "16/04/2024, 10:06"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "16/04/2024, 10:01"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "16/04/2024, 09:56"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "16/04/2024, 09:51"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "16/04/2024, 09:46"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "16/04/2024, 09:41"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "16/04/2024, 09:36"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "16/04/2024, 09:31"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "16/04/2024, 09:26"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "16/04/2024, 09:21"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "16/04/2024, 09:16"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "16/04/2024, 09:11"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "16/04/2024, 09:06"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "16/04/2024, 09:01"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "16/04/2024, 08:56"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "16/04/2024, 08:51"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "16/04/2024, 08:46"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "16/04/2024, 08:41"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "16/04/2024, 08:36"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "16/04/2024, 08:31"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "16/04/2024, 08:26"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "16/04/2024, 08:21"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "16/04/2024, 08:16"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "16/04/2024, 08:11"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "16/04/2024, 08:06"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "16/04/2024, 08:01"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "16/04/2024, 07:56"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "16/04/2024, 07:51"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "16/04/2024, 07:46"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "16/04/2024, 07:41"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "16/04/2024, 07:36"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "16/04/2024, 07:31"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "16/04/2024, 07:26"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "16/04/2024, 07:21"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "16/04/2024, 07:16"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "16/04/2024, 07:11"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "16/04/2024, 07:06"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "16/04/2024, 07:01"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "16/04/2024, 06:56"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "16/04/2024, 06:51"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "16/04/2024, 06:46"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "16/04/2024, 06:41"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "16/04/2024, 06:36"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "16/04/2024, 06:31"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "16/04/2024, 06:26"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "16/04/2024, 06:21"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "16/04/2024, 06:16"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "16/04/2024, 06:11"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "16/04/2024, 06:06"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "16/04/2024, 06:01"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "16/04/2024, 05:56"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "16/04/2024, 05:51"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "16/04/2024, 05:46"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "16/04/2024, 05:41"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "16/04/2024, 05:36"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "16/04/2024, 05:31"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "16/04/2024, 05:26"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "16/04/2024, 05:21"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "16/04/2024, 05:16"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "16/04/2024, 05:11"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "16/04/2024, 05:06"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "16/04/2024, 05:01"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "16/04/2024, 04:56"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "16/04/2024, 04:51"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "16/04/2024, 04:46"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "16/04/2024, 04:41"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "16/04/2024, 04:36"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "16/04/2024, 04:31"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "16/04/2024, 04:26"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "16/04/2024, 04:21"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "16/04/2024, 04:16"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "16/04/2024, 04:11"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "16/04/2024, 04:06"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "16/04/2024, 04:01"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "16/04/2024, 03:56"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "16/04/2024, 03:51"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "16/04/2024, 03:46"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "16/04/2024, 03:41"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "16/04/2024, 03:36"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "16/04/2024, 03:31"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "16/04/2024, 03:26"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "16/04/2024, 03:21"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "16/04/2024, 03:16"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "16/04/2024, 03:11"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "16/04/2024, 03:06"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "16/04/2024, 03:01"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "16/04/2024, 02:56"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "16/04/2024, 02:51"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "16/04/2024, 02:46"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "16/04/2024, 02:41"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "16/04/2024, 02:36"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "16/04/2024, 02:31"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "16/04/2024, 02:26"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "16/04/2024, 02:21"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "16/04/2024, 02:16"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "16/04/2024, 02:11"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "16/04/2024, 02:06"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "16/04/2024, 02:01"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "16/04/2024, 01:56"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "16/04/2024, 01:51"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "16/04/2024, 01:46"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "16/04/2024, 01:41"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "16/04/2024, 01:36"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "16/04/2024, 01:31"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "16/04/2024, 01:26"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "16/04/2024, 01:21"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "16/04/2024, 01:16"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "16/04/2024, 01:11"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "16/04/2024, 01:06"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "16/04/2024, 01:01"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "16/04/2024, 00:56"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "16/04/2024, 00:51"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "16/04/2024, 00:46"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "16/04/2024, 00:41"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "16/04/2024, 00:36"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "16/04/2024, 00:31"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "16/04/2024, 00:26"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "16/04/2024, 00:21"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "16/04/2024, 00:16"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "16/04/2024, 00:11"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "16/04/2024, 00:06"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "16/04/2024, 00:01"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "15/04/2024, 23:56"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "15/04/2024, 23:51"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "15/04/2024, 23:46"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "15/04/2024, 23:41"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "15/04/2024, 23:36"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "15/04/2024, 23:31"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "15/04/2024, 23:26"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "15/04/2024, 23:21"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "15/04/2024, 23:16"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "15/04/2024, 23:11"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "15/04/2024, 23:06"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "15/04/2024, 23:01"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "15/04/2024, 22:56"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "15/04/2024, 22:51"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "15/04/2024, 22:46"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "15/04/2024, 22:41"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "15/04/2024, 22:36"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "15/04/2024, 22:31"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "15/04/2024, 22:26"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "15/04/2024, 22:21"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "15/04/2024, 22:16"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "15/04/2024, 22:11"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "15/04/2024, 22:06"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "15/04/2024, 22:01"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "15/04/2024, 21:56"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "15/04/2024, 21:51"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "15/04/2024, 21:46"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "15/04/2024, 21:41"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "15/04/2024, 21:36"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "15/04/2024, 21:31"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "15/04/2024, 21:26"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "15/04/2024, 21:21"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "15/04/2024, 21:16"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "15/04/2024, 21:11"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "15/04/2024, 21:06"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "15/04/2024, 21:01"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "15/04/2024, 20:56"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "15/04/2024, 20:51"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "15/04/2024, 20:46"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "15/04/2024, 20:41"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "15/04/2024, 20:36"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "15/04/2024, 20:31"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "15/04/2024, 20:26"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "15/04/2024, 20:21"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "15/04/2024, 20:16"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "15/04/2024, 20:11"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "15/04/2024, 20:06"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "15/04/2024, 20:01"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "15/04/2024, 19:56"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "15/04/2024, 19:51"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "15/04/2024, 19:46"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "15/04/2024, 19:41"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "15/04/2024, 19:36"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "15/04/2024, 19:31"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "15/04/2024, 19:26"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "15/04/2024, 19:21"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "15/04/2024, 19:16"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "15/04/2024, 19:11"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "15/04/2024, 19:06"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "15/04/2024, 19:01"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "15/04/2024, 18:56"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "14/04/2024, 18:51"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "14/04/2024, 18:46"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "14/04/2024, 18:41"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "14/04/2024, 18:36"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "14/04/2024, 18:31"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "14/04/2024, 18:26"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "14/04/2024, 18:21"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "14/04/2024, 18:16"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "14/04/2024, 18:11"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "14/04/2024, 18:06"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "14/04/2024, 18:01"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "14/04/2024, 17:56"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "14/04/2024, 17:51"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "14/04/2024, 17:46"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "14/04/2024, 17:41"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "14/04/2024, 17:36"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "14/04/2024, 17:31"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "14/04/2024, 17:26"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "14/04/2024, 17:21"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "14/04/2024, 17:16"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "14/04/2024, 17:11"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "14/04/2024, 17:06"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "14/04/2024, 17:01"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "14/04/2024, 16:56"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "14/04/2024, 16:51"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "14/04/2024, 16:46"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "14/04/2024, 16:41"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "14/04/2024, 16:36"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "14/04/2024, 16:31"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "14/04/2024, 16:26"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "14/04/2024, 16:21"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "14/04/2024, 16:16"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "14/04/2024, 16:11"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "14/04/2024, 16:06"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "14/04/2024, 16:01"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "14/04/2024, 15:56"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "14/04/2024, 15:51"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "14/04/2024, 15:46"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "14/04/2024, 15:41"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "14/04/2024, 15:36"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "14/04/2024, 15:31"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "14/04/2024, 15:26"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "14/04/2024, 15:21"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "14/04/2024, 15:16"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "14/04/2024, 15:11"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "14/04/2024, 15:06"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "14/04/2024, 15:01"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "14/04/2024, 14:56"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "14/04/2024, 14:51"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "14/04/2024, 14:46"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "14/04/2024, 14:41"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "14/04/2024, 14:36"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "14/04/2024, 14:31"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "14/04/2024, 14:26"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "14/04/2024, 14:21"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "14/04/2024, 14:16"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "14/04/2024, 14:11"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "14/04/2024, 14:06"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "14/04/2024, 14:01"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "14/04/2024, 13:56"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "14/04/2024, 13:51"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "14/04/2024, 13:46"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "14/04/2024, 13:41"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "14/04/2024, 13:36"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "14/04/2024, 13:31"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "14/04/2024, 13:26"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "14/04/2024, 13:21"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "14/04/2024, 13:16"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "14/04/2024, 13:11"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "14/04/2024, 13:06"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "14/04/2024, 13:01"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "14/04/2024, 12:56"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "14/04/2024, 12:51"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "14/04/2024, 12:46"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "14/04/2024, 12:41"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "14/04/2024, 12:36"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "14/04/2024, 12:31"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "14/04/2024, 12:26"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "14/04/2024, 12:21"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "14/04/2024, 12:16"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "14/04/2024, 12:11"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "14/04/2024, 12:06"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "14/04/2024, 12:01"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "14/04/2024, 11:56"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "14/04/2024, 11:51"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "14/04/2024, 11:46"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "14/04/2024, 11:41"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "14/04/2024, 11:36"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "14/04/2024, 11:31"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "14/04/2024, 11:26"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "14/04/2024, 11:21"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "14/04/2024, 11:16"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "14/04/2024, 11:11"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "14/04/2024, 11:06"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "14/04/2024, 11:01"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "14/04/2024, 10:56"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "14/04/2024, 10:51"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "14/04/2024, 10:46"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "14/04/2024, 10:41"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "14/04/2024, 10:36"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "14/04/2024, 10:31"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "14/04/2024, 10:26"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "14/04/2024, 10:21"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "14/04/2024, 10:16"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "14/04/2024, 10:11"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "14/04/2024, 10:06"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "14/04/2024, 10:01"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "14/04/2024, 09:56"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "14/04/2024, 09:51"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "14/04/2024, 09:46"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "14/04/2024, 09:41"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "14/04/2024, 09:36"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "14/04/2024, 09:31"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "14/04/2024, 09:26"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "14/04/2024, 09:21"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "14/04/2024, 09:16"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "14/04/2024, 09:11"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "14/04/2024, 09:06"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "14/04/2024, 09:01"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "14/04/2024, 08:56"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "14/04/2024, 08:51"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "14/04/2024, 08:46"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "14/04/2024, 08:41"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "14/04/2024, 08:36"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "14/04/2024, 08:31"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "14/04/2024, 08:26"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "14/04/2024, 08:21"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "14/04/2024, 08:16"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "14/04/2024, 08:11"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "14/04/2024, 08:06"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "14/04/2024, 08:01"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "14/04/2024, 07:56"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "14/04/2024, 07:51"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "14/04/2024, 07:46"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "14/04/2024, 07:41"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "14/04/2024, 07:36"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "14/04/2024, 07:31"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "14/04/2024, 07:26"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "14/04/2024, 07:21"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "14/04/2024, 07:16"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "14/04/2024, 07:11"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "14/04/2024, 07:06"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "14/04/2024, 07:01"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "14/04/2024, 06:56"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "14/04/2024, 06:51"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "14/04/2024, 06:46"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "14/04/2024, 06:41"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "14/04/2024, 06:36"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "14/04/2024, 06:31"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "14/04/2024, 06:26"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "14/04/2024, 06:21"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "14/04/2024, 06:16"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "14/04/2024, 06:11"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "14/04/2024, 06:06"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "14/04/2024, 06:01"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "14/04/2024, 05:56"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "14/04/2024, 05:51"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "14/04/2024, 05:46"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "14/04/2024, 05:41"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "14/04/2024, 05:36"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "14/04/2024, 05:31"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "14/04/2024, 05:26"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "14/04/2024, 05:21"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "14/04/2024, 05:16"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "14/04/2024, 05:11"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "14/04/2024, 05:06"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "14/04/2024, 05:01"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "14/04/2024, 04:56"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "14/04/2024, 04:51"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "14/04/2024, 04:46"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "14/04/2024, 04:41"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "14/04/2024, 04:36"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "14/04/2024, 04:31"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "14/04/2024, 04:26"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "14/04/2024, 04:21"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "14/04/2024, 04:16"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "14/04/2024, 04:11"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "14/04/2024, 04:06"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "14/04/2024, 04:01"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "14/04/2024, 03:56"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "14/04/2024, 03:51"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "14/04/2024, 03:46"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "14/04/2024, 03:41"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "14/04/2024, 03:36"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "14/04/2024, 03:31"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "14/04/2024, 03:26"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "14/04/2024, 03:21"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "14/04/2024, 03:16"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "14/04/2024, 03:11"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "14/04/2024, 03:06"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "14/04/2024, 03:01"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "14/04/2024, 02:56"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "14/04/2024, 02:51"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "14/04/2024, 02:46"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "14/04/2024, 02:41"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "14/04/2024, 02:36"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "14/04/2024, 02:31"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "14/04/2024, 02:26"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "14/04/2024, 02:21"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "14/04/2024, 02:16"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "14/04/2024, 02:11"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "14/04/2024, 02:06"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "14/04/2024, 02:01"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "14/04/2024, 01:56"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "14/04/2024, 01:51"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "14/04/2024, 01:46"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "14/04/2024, 01:41"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "14/04/2024, 01:36"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "14/04/2024, 01:31"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "14/04/2024, 01:26"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "14/04/2024, 01:21"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "14/04/2024, 01:16"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "14/04/2024, 01:11"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "14/04/2024, 01:06"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "14/04/2024, 01:01"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "14/04/2024, 00:56"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "14/04/2024, 00:51"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "14/04/2024, 00:46"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "14/04/2024, 00:41"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "14/04/2024, 00:36"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "14/04/2024, 00:31"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "14/04/2024, 00:26"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "14/04/2024, 00:21"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "14/04/2024, 00:16"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "14/04/2024, 00:11"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "14/04/2024, 00:06"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "14/04/2024, 00:01"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "13/04/2024, 23:56"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "13/04/2024, 23:51"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "13/04/2024, 23:46"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "13/04/2024, 23:41"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "13/04/2024, 23:36"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "13/04/2024, 23:31"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "13/04/2024, 23:26"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "13/04/2024, 23:21"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "13/04/2024, 23:16"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "13/04/2024, 23:11"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "13/04/2024, 23:06"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "13/04/2024, 23:01"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "13/04/2024, 22:56"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "13/04/2024, 22:51"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "13/04/2024, 22:46"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "13/04/2024, 22:41"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "13/04/2024, 22:36"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "13/04/2024, 22:31"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "13/04/2024, 22:26"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "13/04/2024, 22:21"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "13/04/2024, 22:16"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "13/04/2024, 22:11"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "13/04/2024, 22:06"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "13/04/2024, 22:01"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "13/04/2024, 21:56"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "13/04/2024, 21:51"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "13/04/2024, 21:46"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "13/04/2024, 21:41"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "13/04/2024, 21:36"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "13/04/2024, 21:31"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "13/04/2024, 21:26"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "13/04/2024, 21:21"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "13/04/2024, 21:16"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "13/04/2024, 21:11"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "13/04/2024, 21:06"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "13/04/2024, 21:01"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "13/04/2024, 20:56"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "13/04/2024, 20:51"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "13/04/2024, 20:46"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "13/04/2024, 20:41"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "13/04/2024, 20:36"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "13/04/2024, 20:31"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "13/04/2024, 20:26"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "13/04/2024, 20:21"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "13/04/2024, 20:16"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "13/04/2024, 20:11"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "13/04/2024, 20:06"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "13/04/2024, 20:01"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "13/04/2024, 19:56"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "13/04/2024, 19:51"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "13/04/2024, 19:46"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "13/04/2024, 19:41"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "13/04/2024, 19:36"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "13/04/2024, 19:31"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "13/04/2024, 19:26"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "13/04/2024, 19:21"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "13/04/2024, 19:16"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "13/04/2024, 19:11"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "13/04/2024, 19:06"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "13/04/2024, 19:01"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "13/04/2024, 18:56"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "12/04/2024, 18:51"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "12/04/2024, 18:46"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "12/04/2024, 18:41"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "12/04/2024, 18:36"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "12/04/2024, 18:31"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "12/04/2024, 18:26"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "12/04/2024, 18:21"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "12/04/2024, 18:16"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "12/04/2024, 18:11"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "12/04/2024, 18:06"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "12/04/2024, 18:01"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "12/04/2024, 17:56"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "12/04/2024, 17:51"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "12/04/2024, 17:46"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "12/04/2024, 17:41"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "12/04/2024, 17:36"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "12/04/2024, 17:31"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "12/04/2024, 17:26"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "12/04/2024, 17:21"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "12/04/2024, 17:16"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "12/04/2024, 17:11"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "12/04/2024, 17:06"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "12/04/2024, 17:01"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "12/04/2024, 16:56"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "12/04/2024, 16:51"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "12/04/2024, 16:46"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "12/04/2024, 16:41"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "12/04/2024, 16:36"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "12/04/2024, 16:31"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "12/04/2024, 16:26"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "12/04/2024, 16:21"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "12/04/2024, 16:16"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "12/04/2024, 16:11"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "12/04/2024, 16:06"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "12/04/2024, 16:01"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "12/04/2024, 15:56"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "12/04/2024, 15:51"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "12/04/2024, 15:46"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "12/04/2024, 15:41"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "12/04/2024, 15:36"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "12/04/2024, 15:31"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "12/04/2024, 15:26"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "12/04/2024, 15:21"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "12/04/2024, 15:16"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "12/04/2024, 15:11"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "12/04/2024, 15:06"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "12/04/2024, 15:01"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "12/04/2024, 14:56"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "12/04/2024, 14:51"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "12/04/2024, 14:46"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "12/04/2024, 14:41"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "12/04/2024, 14:36"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "12/04/2024, 14:31"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "12/04/2024, 14:26"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "12/04/2024, 14:21"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "12/04/2024, 14:16"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "12/04/2024, 14:11"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "12/04/2024, 14:06"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "12/04/2024, 14:01"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "12/04/2024, 13:56"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "12/04/2024, 13:51"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "12/04/2024, 13:46"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "12/04/2024, 13:41"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "12/04/2024, 13:36"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "12/04/2024, 13:31"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "12/04/2024, 13:26"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "12/04/2024, 13:21"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "12/04/2024, 13:16"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "12/04/2024, 13:11"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "12/04/2024, 13:06"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "12/04/2024, 13:01"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "12/04/2024, 12:56"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "12/04/2024, 12:51"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "12/04/2024, 12:46"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "12/04/2024, 12:41"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "12/04/2024, 12:36"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "12/04/2024, 12:31"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "12/04/2024, 12:26"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "12/04/2024, 12:21"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "12/04/2024, 12:16"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "12/04/2024, 12:11"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "12/04/2024, 12:06"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "12/04/2024, 12:01"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "12/04/2024, 11:56"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "12/04/2024, 11:51"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "12/04/2024, 11:46"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "12/04/2024, 11:41"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "12/04/2024, 11:36"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "12/04/2024, 11:31"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "12/04/2024, 11:26"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "12/04/2024, 11:21"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "12/04/2024, 11:16"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "12/04/2024, 11:11"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "12/04/2024, 11:06"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "12/04/2024, 11:01"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "12/04/2024, 10:56"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "12/04/2024, 10:51"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "12/04/2024, 10:46"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "12/04/2024, 10:41"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "12/04/2024, 10:36"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "12/04/2024, 10:31"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "12/04/2024, 10:26"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "12/04/2024, 10:21"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "12/04/2024, 10:16"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "12/04/2024, 10:11"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "12/04/2024, 10:06"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "12/04/2024, 10:01"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "12/04/2024, 09:56"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "12/04/2024, 09:51"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "12/04/2024, 09:46"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "12/04/2024, 09:41"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "12/04/2024, 09:36"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "12/04/2024, 09:31"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "12/04/2024, 09:26"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "12/04/2024, 09:21"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "12/04/2024, 09:16"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "12/04/2024, 09:11"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "12/04/2024, 09:06"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "12/04/2024, 09:01"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "12/04/2024, 08:56"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "12/04/2024, 08:51"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "12/04/2024, 08:46"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "12/04/2024, 08:41"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "12/04/2024, 08:36"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "12/04/2024, 08:31"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "12/04/2024, 08:26"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "12/04/2024, 08:21"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "12/04/2024, 08:16"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "12/04/2024, 08:11"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "12/04/2024, 08:06"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "12/04/2024, 08:01"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "12/04/2024, 07:56"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "12/04/2024, 07:51"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "12/04/2024, 07:46"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "12/04/2024, 07:41"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "12/04/2024, 07:36"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "12/04/2024, 07:31"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "12/04/2024, 07:26"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "12/04/2024, 07:21"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "12/04/2024, 07:16"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "12/04/2024, 07:11"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "12/04/2024, 07:06"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "12/04/2024, 07:01"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "12/04/2024, 06:56"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "12/04/2024, 06:51"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "12/04/2024, 06:46"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "12/04/2024, 06:41"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "12/04/2024, 06:36"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "12/04/2024, 06:31"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "12/04/2024, 06:26"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "12/04/2024, 06:21"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "12/04/2024, 06:16"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "12/04/2024, 06:11"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "12/04/2024, 06:06"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "12/04/2024, 06:01"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "12/04/2024, 05:56"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "12/04/2024, 05:51"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "12/04/2024, 05:46"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "12/04/2024, 05:41"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "12/04/2024, 05:36"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "12/04/2024, 05:31"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "12/04/2024, 05:26"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "12/04/2024, 05:21"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "12/04/2024, 05:16"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "12/04/2024, 05:11"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "12/04/2024, 05:06"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "12/04/2024, 05:01"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "12/04/2024, 04:56"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "12/04/2024, 04:51"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "12/04/2024, 04:46"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "12/04/2024, 04:41"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "12/04/2024, 04:36"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "12/04/2024, 04:31"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "12/04/2024, 04:26"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "12/04/2024, 04:21"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "12/04/2024, 04:16"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "12/04/2024, 04:11"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "12/04/2024, 04:06"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "12/04/2024, 04:01"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "12/04/2024, 03:56"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "12/04/2024, 03:51"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "12/04/2024, 03:46"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "12/04/2024, 03:41"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "12/04/2024, 03:36"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "12/04/2024, 03:31"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "12/04/2024, 03:26"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "12/04/2024, 03:21"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "12/04/2024, 03:16"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "12/04/2024, 03:11"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "12/04/2024, 03:06"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "12/04/2024, 03:01"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "12/04/2024, 02:56"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "12/04/2024, 02:51"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "12/04/2024, 02:46"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "12/04/2024, 02:41"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "12/04/2024, 02:36"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "12/04/2024, 02:31"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "12/04/2024, 02:26"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "12/04/2024, 02:21"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "12/04/2024, 02:16"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "12/04/2024, 02:11"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "12/04/2024, 02:06"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "12/04/2024, 02:01"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "12/04/2024, 01:56"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "12/04/2024, 01:51"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "12/04/2024, 01:46"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "12/04/2024, 01:41"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "12/04/2024, 01:36"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "12/04/2024, 01:31"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "12/04/2024, 01:26"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "12/04/2024, 01:21"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "12/04/2024, 01:16"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "12/04/2024, 01:11"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "12/04/2024, 01:06"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "12/04/2024, 01:01"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "12/04/2024, 00:56"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "12/04/2024, 00:51"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "12/04/2024, 00:46"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "12/04/2024, 00:41"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "12/04/2024, 00:36"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "12/04/2024, 00:31"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "12/04/2024, 00:26"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "12/04/2024, 00:21"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "12/04/2024, 00:16"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "12/04/2024, 00:11"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "12/04/2024, 00:06"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "12/04/2024, 00:01"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "11/04/2024, 23:56"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "11/04/2024, 23:51"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "11/04/2024, 23:46"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "11/04/2024, 23:41"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "11/04/2024, 23:36"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "11/04/2024, 23:31"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "11/04/2024, 23:26"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "11/04/2024, 23:21"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "11/04/2024, 23:16"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "11/04/2024, 23:11"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "11/04/2024, 23:06"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "11/04/2024, 23:01"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "11/04/2024, 22:56"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "11/04/2024, 22:51"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "11/04/2024, 22:46"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "11/04/2024, 22:41"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "11/04/2024, 22:36"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "11/04/2024, 22:31"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "11/04/2024, 22:26"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "11/04/2024, 22:21"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "11/04/2024, 22:16"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "11/04/2024, 22:11"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "11/04/2024, 22:06"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "11/04/2024, 22:01"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "11/04/2024, 21:56"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "11/04/2024, 21:51"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "11/04/2024, 21:46"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "11/04/2024, 21:41"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "11/04/2024, 21:36"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "11/04/2024, 21:31"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "11/04/2024, 21:26"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "11/04/2024, 21:21"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "11/04/2024, 21:16"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "11/04/2024, 21:11"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "11/04/2024, 21:06"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "11/04/2024, 21:01"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "11/04/2024, 20:56"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "11/04/2024, 20:51"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "11/04/2024, 20:46"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "11/04/2024, 20:41"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "11/04/2024, 20:36"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "11/04/2024, 20:31"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "11/04/2024, 20:26"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "11/04/2024, 20:21"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "11/04/2024, 20:16"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "11/04/2024, 20:11"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "11/04/2024, 20:06"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "11/04/2024, 20:01"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "11/04/2024, 19:56"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "11/04/2024, 19:51"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "11/04/2024, 19:46"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "11/04/2024, 19:41"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "11/04/2024, 19:36"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "11/04/2024, 19:31"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "11/04/2024, 19:26"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "11/04/2024, 19:21"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "11/04/2024, 19:16"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "11/04/2024, 19:11"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "11/04/2024, 19:06"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "11/04/2024, 19:01"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "11/04/2024, 18:56"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "10/04/2024, 18:51"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "10/04/2024, 18:46"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "10/04/2024, 18:41"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "10/04/2024, 18:36"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "10/04/2024, 18:31"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "10/04/2024, 18:26"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "10/04/2024, 18:21"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "10/04/2024, 18:16"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "10/04/2024, 18:11"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "10/04/2024, 18:06"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "10/04/2024, 18:01"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "10/04/2024, 17:56"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "10/04/2024, 17:51"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "10/04/2024, 17:46"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "10/04/2024, 17:41"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "10/04/2024, 17:36"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "10/04/2024, 17:31"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "10/04/2024, 17:26"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "10/04/2024, 17:21"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "10/04/2024, 17:16"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "10/04/2024, 17:11"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "10/04/2024, 17:06"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "10/04/2024, 17:01"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "10/04/2024, 16:56"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "10/04/2024, 16:51"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "10/04/2024, 16:46"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "10/04/2024, 16:41"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "10/04/2024, 16:36"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "10/04/2024, 16:31"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "10/04/2024, 16:26"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "10/04/2024, 16:21"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "10/04/2024, 16:16"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "10/04/2024, 16:11"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "10/04/2024, 16:06"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "10/04/2024, 16:01"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "10/04/2024, 15:56"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "10/04/2024, 15:51"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "10/04/2024, 15:46"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "10/04/2024, 15:41"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "10/04/2024, 15:36"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "10/04/2024, 15:31"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "10/04/2024, 15:26"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "10/04/2024, 15:21"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "10/04/2024, 15:16"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "10/04/2024, 15:11"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "10/04/2024, 15:06"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "10/04/2024, 15:01"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "10/04/2024, 14:56"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "10/04/2024, 14:51"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "10/04/2024, 14:46"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "10/04/2024, 14:41"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "10/04/2024, 14:36"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "10/04/2024, 14:31"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "10/04/2024, 14:26"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "10/04/2024, 14:21"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "10/04/2024, 14:16"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "10/04/2024, 14:11"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "10/04/2024, 14:06"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "10/04/2024, 14:01"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "10/04/2024, 13:56"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "10/04/2024, 13:51"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "10/04/2024, 13:46"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "10/04/2024, 13:41"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "10/04/2024, 13:36"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "10/04/2024, 13:31"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "10/04/2024, 13:26"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "10/04/2024, 13:21"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "10/04/2024, 13:16"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "10/04/2024, 13:11"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "10/04/2024, 13:06"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "10/04/2024, 13:01"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "10/04/2024, 12:56"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "10/04/2024, 12:51"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "10/04/2024, 12:46"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "10/04/2024, 12:41"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "10/04/2024, 12:36"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "10/04/2024, 12:31"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "10/04/2024, 12:26"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "10/04/2024, 12:21"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "10/04/2024, 12:16"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "10/04/2024, 12:11"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "10/04/2024, 12:06"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "10/04/2024, 12:01"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "10/04/2024, 11:56"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "10/04/2024, 11:51"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "10/04/2024, 11:46"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "10/04/2024, 11:41"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "10/04/2024, 11:36"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "10/04/2024, 11:31"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "10/04/2024, 11:26"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "10/04/2024, 11:21"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "10/04/2024, 11:16"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "10/04/2024, 11:11"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "10/04/2024, 11:06"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "10/04/2024, 11:01"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "10/04/2024, 10:56"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "10/04/2024, 10:51"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "10/04/2024, 10:46"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "10/04/2024, 10:41"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "10/04/2024, 10:36"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "10/04/2024, 10:31"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "10/04/2024, 10:26"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "10/04/2024, 10:21"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "10/04/2024, 10:16"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "10/04/2024, 10:11"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "10/04/2024, 10:06"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "10/04/2024, 10:01"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "10/04/2024, 09:56"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "10/04/2024, 09:51"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "10/04/2024, 09:46"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "10/04/2024, 09:41"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "10/04/2024, 09:36"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "10/04/2024, 09:31"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "10/04/2024, 09:26"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "10/04/2024, 09:21"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "10/04/2024, 09:16"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "10/04/2024, 09:11"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "10/04/2024, 09:06"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "10/04/2024, 09:01"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "10/04/2024, 08:56"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "10/04/2024, 08:51"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "10/04/2024, 08:46"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "10/04/2024, 08:41"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "10/04/2024, 08:36"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "10/04/2024, 08:31"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "10/04/2024, 08:26"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "10/04/2024, 08:21"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "10/04/2024, 08:16"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "10/04/2024, 08:11"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "10/04/2024, 08:06"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "10/04/2024, 08:01"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "10/04/2024, 07:56"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "10/04/2024, 07:51"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "10/04/2024, 07:46"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "10/04/2024, 07:41"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "10/04/2024, 07:36"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "10/04/2024, 07:31"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "10/04/2024, 07:26"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "10/04/2024, 07:21"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "10/04/2024, 07:16"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "10/04/2024, 07:11"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "10/04/2024, 07:06"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "10/04/2024, 07:01"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "10/04/2024, 06:56"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "10/04/2024, 06:51"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "10/04/2024, 06:46"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "10/04/2024, 06:41"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "10/04/2024, 06:36"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "10/04/2024, 06:31"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "10/04/2024, 06:26"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "10/04/2024, 06:21"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "10/04/2024, 06:16"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "10/04/2024, 06:11"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "10/04/2024, 06:06"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "10/04/2024, 06:01"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "10/04/2024, 05:56"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "10/04/2024, 05:51"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "10/04/2024, 05:46"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "10/04/2024, 05:41"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "10/04/2024, 05:36"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "10/04/2024, 05:31"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "10/04/2024, 05:26"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "10/04/2024, 05:21"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "10/04/2024, 05:16"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "10/04/2024, 05:11"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "10/04/2024, 05:06"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "10/04/2024, 05:01"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "10/04/2024, 04:56"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "10/04/2024, 04:51"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "10/04/2024, 04:46"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "10/04/2024, 04:41"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "10/04/2024, 04:36"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "10/04/2024, 04:31"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "10/04/2024, 04:26"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "10/04/2024, 04:21"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "10/04/2024, 04:16"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "10/04/2024, 04:11"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "10/04/2024, 04:06"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "10/04/2024, 04:01"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "10/04/2024, 03:56"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "10/04/2024, 03:51"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "10/04/2024, 03:46"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "10/04/2024, 03:41"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "10/04/2024, 03:36"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "10/04/2024, 03:31"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "10/04/2024, 03:26"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "10/04/2024, 03:21"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "10/04/2024, 03:16"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "10/04/2024, 03:11"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "10/04/2024, 03:06"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "10/04/2024, 03:01"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "10/04/2024, 02:56"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "10/04/2024, 02:51"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "10/04/2024, 02:46"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "10/04/2024, 02:41"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "10/04/2024, 02:36"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "10/04/2024, 02:31"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "10/04/2024, 02:26"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "10/04/2024, 02:21"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "10/04/2024, 02:16"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "10/04/2024, 02:11"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "10/04/2024, 02:06"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "10/04/2024, 02:01"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "10/04/2024, 01:56"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "10/04/2024, 01:51"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "10/04/2024, 01:46"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "10/04/2024, 01:41"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "10/04/2024, 01:36"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "10/04/2024, 01:31"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "10/04/2024, 01:26"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "10/04/2024, 01:21"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "10/04/2024, 01:16"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "10/04/2024, 01:11"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "10/04/2024, 01:06"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "10/04/2024, 01:01"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "10/04/2024, 00:56"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "10/04/2024, 00:51"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "10/04/2024, 00:46"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "10/04/2024, 00:41"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "10/04/2024, 00:36"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "10/04/2024, 00:31"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "10/04/2024, 00:26"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "10/04/2024, 00:21"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "10/04/2024, 00:16"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "10/04/2024, 00:11"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "10/04/2024, 00:06"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "10/04/2024, 00:01"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "09/04/2024, 23:56"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "09/04/2024, 23:51"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "09/04/2024, 23:46"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "09/04/2024, 23:41"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "09/04/2024, 23:36"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "09/04/2024, 23:31"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "09/04/2024, 23:26"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "09/04/2024, 23:21"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "09/04/2024, 23:16"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "09/04/2024, 23:11"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "09/04/2024, 23:06"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "09/04/2024, 23:01"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "09/04/2024, 22:56"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "09/04/2024, 22:51"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "09/04/2024, 22:46"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "09/04/2024, 22:41"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "09/04/2024, 22:36"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "09/04/2024, 22:31"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "09/04/2024, 22:26"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "09/04/2024, 22:21"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "09/04/2024, 22:16"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "09/04/2024, 22:11"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "09/04/2024, 22:06"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "09/04/2024, 22:01"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "09/04/2024, 21:56"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "09/04/2024, 21:51"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "09/04/2024, 21:46"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "09/04/2024, 21:41"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "09/04/2024, 21:36"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "09/04/2024, 21:31"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "09/04/2024, 21:26"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "09/04/2024, 21:21"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "09/04/2024, 21:16"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "09/04/2024, 21:11"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "09/04/2024, 21:06"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "09/04/2024, 21:01"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "09/04/2024, 20:56"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "09/04/2024, 20:51"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "09/04/2024, 20:46"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "09/04/2024, 20:41"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "09/04/2024, 20:36"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "09/04/2024, 20:31"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "09/04/2024, 20:26"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "09/04/2024, 20:21"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "09/04/2024, 20:16"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "09/04/2024, 20:11"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "09/04/2024, 20:06"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "09/04/2024, 20:01"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "09/04/2024, 19:56"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "09/04/2024, 19:51"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "09/04/2024, 19:46"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "09/04/2024, 19:41"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "09/04/2024, 19:36"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "09/04/2024, 19:31"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "09/04/2024, 19:26"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "09/04/2024, 19:21"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "09/04/2024, 19:16"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "09/04/2024, 19:11"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "09/04/2024, 19:06"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "09/04/2024, 19:01"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "09/04/2024, 18:56"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "08/04/2024, 18:51"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "08/04/2024, 18:46"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "08/04/2024, 18:41"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "08/04/2024, 18:36"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "08/04/2024, 18:31"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "08/04/2024, 18:26"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "08/04/2024, 18:21"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "08/04/2024, 18:16"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "08/04/2024, 18:11"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "08/04/2024, 18:06"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "08/04/2024, 18:01"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "08/04/2024, 17:56"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "08/04/2024, 17:51"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "08/04/2024, 17:46"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "08/04/2024, 17:41"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "08/04/2024, 17:36"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "08/04/2024, 17:31"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "08/04/2024, 17:26"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "08/04/2024, 17:21"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "08/04/2024, 17:16"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "08/04/2024, 17:11"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "08/04/2024, 17:06"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "08/04/2024, 17:01"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "08/04/2024, 16:56"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "08/04/2024, 16:51"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "08/04/2024, 16:46"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "08/04/2024, 16:41"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "08/04/2024, 16:36"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "08/04/2024, 16:31"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "08/04/2024, 16:26"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "08/04/2024, 16:21"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "08/04/2024, 16:16"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "08/04/2024, 16:11"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "08/04/2024, 16:06"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "08/04/2024, 16:01"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "08/04/2024, 15:56"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "08/04/2024, 15:51"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "08/04/2024, 15:46"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "08/04/2024, 15:41"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "08/04/2024, 15:36"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "08/04/2024, 15:31"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "08/04/2024, 15:26"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "08/04/2024, 15:21"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "08/04/2024, 15:16"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "08/04/2024, 15:11"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "08/04/2024, 15:06"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "08/04/2024, 15:01"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "08/04/2024, 14:56"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "08/04/2024, 14:51"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "08/04/2024, 14:46"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "08/04/2024, 14:41"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "08/04/2024, 14:36"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "08/04/2024, 14:31"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "08/04/2024, 14:26"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "08/04/2024, 14:21"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "08/04/2024, 14:16"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "08/04/2024, 14:11"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "08/04/2024, 14:06"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "08/04/2024, 14:01"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "08/04/2024, 13:56"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "08/04/2024, 13:51"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "08/04/2024, 13:46"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "08/04/2024, 13:41"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "08/04/2024, 13:36"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "08/04/2024, 13:31"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "08/04/2024, 13:26"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "08/04/2024, 13:21"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "08/04/2024, 13:16"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "08/04/2024, 13:11"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "08/04/2024, 13:06"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "08/04/2024, 13:01"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "08/04/2024, 12:56"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "08/04/2024, 12:51"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "08/04/2024, 12:46"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "08/04/2024, 12:41"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "08/04/2024, 12:36"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "08/04/2024, 12:31"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "08/04/2024, 12:26"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "08/04/2024, 12:21"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "08/04/2024, 12:16"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "08/04/2024, 12:11"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "08/04/2024, 12:06"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "08/04/2024, 12:01"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "08/04/2024, 11:56"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "08/04/2024, 11:51"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "08/04/2024, 11:46"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "08/04/2024, 11:41"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "08/04/2024, 11:36"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "08/04/2024, 11:31"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "08/04/2024, 11:26"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "08/04/2024, 11:21"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "08/04/2024, 11:16"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "08/04/2024, 11:11"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "08/04/2024, 11:06"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "08/04/2024, 11:01"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "08/04/2024, 10:56"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "08/04/2024, 10:51"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "08/04/2024, 10:46"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "08/04/2024, 10:41"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "08/04/2024, 10:36"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "08/04/2024, 10:31"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "08/04/2024, 10:26"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "08/04/2024, 10:21"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "08/04/2024, 10:16"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "08/04/2024, 10:11"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "08/04/2024, 10:06"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "08/04/2024, 10:01"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "08/04/2024, 09:56"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "08/04/2024, 09:51"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "08/04/2024, 09:46"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "08/04/2024, 09:41"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "08/04/2024, 09:36"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "08/04/2024, 09:31"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "08/04/2024, 09:26"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "08/04/2024, 09:21"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "08/04/2024, 09:16"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "08/04/2024, 09:11"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "08/04/2024, 09:06"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "08/04/2024, 09:01"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "08/04/2024, 08:56"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "08/04/2024, 08:51"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "08/04/2024, 08:46"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "08/04/2024, 08:41"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "08/04/2024, 08:36"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "08/04/2024, 08:31"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "08/04/2024, 08:26"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "08/04/2024, 08:21"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "08/04/2024, 08:16"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "08/04/2024, 08:11"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "08/04/2024, 08:06"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "08/04/2024, 08:01"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "08/04/2024, 07:56"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "08/04/2024, 07:51"
	},
	{
		device_id: "humid_1",
		value: "54%",
		type: "humidity",
		timestamp: "08/04/2024, 07:46"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "08/04/2024, 07:41"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "08/04/2024, 07:36"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "08/04/2024, 07:31"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "08/04/2024, 07:26"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "08/04/2024, 07:21"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "08/04/2024, 07:16"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "08/04/2024, 07:11"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "08/04/2024, 07:06"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "08/04/2024, 07:01"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "08/04/2024, 06:56"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "08/04/2024, 06:51"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "08/04/2024, 06:46"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "08/04/2024, 06:41"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "08/04/2024, 06:36"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "08/04/2024, 06:31"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "08/04/2024, 06:26"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "08/04/2024, 06:21"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "08/04/2024, 06:16"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "08/04/2024, 06:11"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "08/04/2024, 06:06"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "08/04/2024, 06:01"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "08/04/2024, 05:56"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "08/04/2024, 05:51"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "08/04/2024, 05:46"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "08/04/2024, 05:41"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "08/04/2024, 05:36"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "08/04/2024, 05:31"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "08/04/2024, 05:26"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "08/04/2024, 05:21"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "08/04/2024, 05:16"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "08/04/2024, 05:11"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "08/04/2024, 05:06"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "08/04/2024, 05:01"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "08/04/2024, 04:56"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "08/04/2024, 04:51"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "08/04/2024, 04:46"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "08/04/2024, 04:41"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "08/04/2024, 04:36"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "08/04/2024, 04:31"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "08/04/2024, 04:26"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "08/04/2024, 04:21"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "08/04/2024, 04:16"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "08/04/2024, 04:11"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "08/04/2024, 04:06"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "08/04/2024, 04:01"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "08/04/2024, 03:56"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "08/04/2024, 03:51"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "08/04/2024, 03:46"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "08/04/2024, 03:41"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "08/04/2024, 03:36"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "08/04/2024, 03:31"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "08/04/2024, 03:26"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "08/04/2024, 03:21"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "08/04/2024, 03:16"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "08/04/2024, 03:11"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "08/04/2024, 03:06"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "08/04/2024, 03:01"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "08/04/2024, 02:56"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "08/04/2024, 02:51"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "08/04/2024, 02:46"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "08/04/2024, 02:41"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "08/04/2024, 02:36"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "08/04/2024, 02:31"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "08/04/2024, 02:26"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "08/04/2024, 02:21"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "08/04/2024, 02:16"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "08/04/2024, 02:11"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "08/04/2024, 02:06"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "08/04/2024, 02:01"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "08/04/2024, 01:56"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "08/04/2024, 01:51"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "08/04/2024, 01:46"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "08/04/2024, 01:41"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "08/04/2024, 01:36"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "08/04/2024, 01:31"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "08/04/2024, 01:26"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "08/04/2024, 01:21"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "08/04/2024, 01:16"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "08/04/2024, 01:11"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "08/04/2024, 01:06"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "08/04/2024, 01:01"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "08/04/2024, 00:56"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "08/04/2024, 00:51"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "08/04/2024, 00:46"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "08/04/2024, 00:41"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "08/04/2024, 00:36"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "08/04/2024, 00:31"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "08/04/2024, 00:26"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "08/04/2024, 00:21"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "08/04/2024, 00:16"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "08/04/2024, 00:11"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "08/04/2024, 00:06"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "08/04/2024, 00:01"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "07/04/2024, 23:56"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "07/04/2024, 23:51"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "07/04/2024, 23:46"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "07/04/2024, 23:41"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "07/04/2024, 23:36"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "07/04/2024, 23:31"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "07/04/2024, 23:26"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "07/04/2024, 23:21"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "07/04/2024, 23:16"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "07/04/2024, 23:11"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "07/04/2024, 23:06"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "07/04/2024, 23:01"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "07/04/2024, 22:56"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "07/04/2024, 22:51"
	},
	{
		device_id: "humid_1",
		value: "77%",
		type: "humidity",
		timestamp: "07/04/2024, 22:46"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "07/04/2024, 22:41"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "07/04/2024, 22:36"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "07/04/2024, 22:31"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "07/04/2024, 22:26"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "07/04/2024, 22:21"
	},
	{
		device_id: "humid_1",
		value: "96%",
		type: "humidity",
		timestamp: "07/04/2024, 22:16"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "07/04/2024, 22:11"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "07/04/2024, 22:06"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "07/04/2024, 22:01"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "07/04/2024, 21:56"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "07/04/2024, 21:51"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "07/04/2024, 21:46"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "07/04/2024, 21:41"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "07/04/2024, 21:36"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "07/04/2024, 21:31"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "07/04/2024, 21:26"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "07/04/2024, 21:21"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "07/04/2024, 21:16"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "07/04/2024, 21:11"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "07/04/2024, 21:06"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "07/04/2024, 21:01"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "07/04/2024, 20:56"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "07/04/2024, 20:51"
	},
	{
		device_id: "humid_1",
		value: "93%",
		type: "humidity",
		timestamp: "07/04/2024, 20:46"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "07/04/2024, 20:41"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "07/04/2024, 20:36"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "07/04/2024, 20:31"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "07/04/2024, 20:26"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "07/04/2024, 20:21"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "07/04/2024, 20:16"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "07/04/2024, 20:11"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "07/04/2024, 20:06"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "07/04/2024, 20:01"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "07/04/2024, 19:56"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "07/04/2024, 19:51"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "07/04/2024, 19:46"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "07/04/2024, 19:41"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "07/04/2024, 19:36"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "07/04/2024, 19:31"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "07/04/2024, 19:26"
	},
	{
		device_id: "humid_1",
		value: "44%",
		type: "humidity",
		timestamp: "07/04/2024, 19:21"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "07/04/2024, 19:16"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "07/04/2024, 19:11"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "07/04/2024, 19:06"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "07/04/2024, 19:01"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "07/04/2024, 18:56"
	},
	{
		device_id: "humid_1",
		value: "50%",
		type: "humidity",
		timestamp: "06/04/2024, 18:51"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "06/04/2024, 18:46"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "06/04/2024, 18:41"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "06/04/2024, 18:36"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "06/04/2024, 18:31"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "06/04/2024, 18:26"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "06/04/2024, 18:21"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "06/04/2024, 18:16"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "06/04/2024, 18:11"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "06/04/2024, 18:06"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "06/04/2024, 18:01"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "06/04/2024, 17:56"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "06/04/2024, 17:51"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "06/04/2024, 17:46"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "06/04/2024, 17:41"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "06/04/2024, 17:36"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "06/04/2024, 17:31"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "06/04/2024, 17:26"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "06/04/2024, 17:21"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "06/04/2024, 17:16"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "06/04/2024, 17:11"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "06/04/2024, 17:06"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "06/04/2024, 17:01"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "06/04/2024, 16:56"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "06/04/2024, 16:51"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "06/04/2024, 16:46"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "06/04/2024, 16:41"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "06/04/2024, 16:36"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "06/04/2024, 16:31"
	},
	{
		device_id: "humid_1",
		value: "18%",
		type: "humidity",
		timestamp: "06/04/2024, 16:26"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "06/04/2024, 16:21"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "06/04/2024, 16:16"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "06/04/2024, 16:11"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "06/04/2024, 16:06"
	},
	{
		device_id: "humid_1",
		value: "34%",
		type: "humidity",
		timestamp: "06/04/2024, 16:01"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "06/04/2024, 15:56"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "06/04/2024, 15:51"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "06/04/2024, 15:46"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "06/04/2024, 15:41"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "06/04/2024, 15:36"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "06/04/2024, 15:31"
	},
	{
		device_id: "humid_1",
		value: "45%",
		type: "humidity",
		timestamp: "06/04/2024, 15:26"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "06/04/2024, 15:21"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "06/04/2024, 15:16"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "06/04/2024, 15:11"
	},
	{
		device_id: "humid_1",
		value: "29%",
		type: "humidity",
		timestamp: "06/04/2024, 15:06"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "06/04/2024, 15:01"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "06/04/2024, 14:56"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "06/04/2024, 14:51"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "06/04/2024, 14:46"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "06/04/2024, 14:41"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "06/04/2024, 14:36"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "06/04/2024, 14:31"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "06/04/2024, 14:26"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "06/04/2024, 14:21"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "06/04/2024, 14:16"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "06/04/2024, 14:11"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "06/04/2024, 14:06"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "06/04/2024, 14:01"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "06/04/2024, 13:56"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "06/04/2024, 13:51"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "06/04/2024, 13:46"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "06/04/2024, 13:41"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "06/04/2024, 13:36"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "06/04/2024, 13:31"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "06/04/2024, 13:26"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "06/04/2024, 13:21"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "06/04/2024, 13:16"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "06/04/2024, 13:11"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "06/04/2024, 13:06"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "06/04/2024, 13:01"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "06/04/2024, 12:56"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "06/04/2024, 12:51"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "06/04/2024, 12:46"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "06/04/2024, 12:41"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "06/04/2024, 12:36"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "06/04/2024, 12:31"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "06/04/2024, 12:26"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "06/04/2024, 12:21"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "06/04/2024, 12:16"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "06/04/2024, 12:11"
	},
	{
		device_id: "humid_1",
		value: "42%",
		type: "humidity",
		timestamp: "06/04/2024, 12:06"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "06/04/2024, 12:01"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "06/04/2024, 11:56"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "06/04/2024, 11:51"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "06/04/2024, 11:46"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "06/04/2024, 11:41"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "06/04/2024, 11:36"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "06/04/2024, 11:31"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "06/04/2024, 11:26"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "06/04/2024, 11:21"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "06/04/2024, 11:16"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "06/04/2024, 11:11"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "06/04/2024, 11:06"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "06/04/2024, 11:01"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "06/04/2024, 10:56"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "06/04/2024, 10:51"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "06/04/2024, 10:46"
	},
	{
		device_id: "humid_1",
		value: "22%",
		type: "humidity",
		timestamp: "06/04/2024, 10:41"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "06/04/2024, 10:36"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "06/04/2024, 10:31"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "06/04/2024, 10:26"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "06/04/2024, 10:21"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "06/04/2024, 10:16"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "06/04/2024, 10:11"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "06/04/2024, 10:06"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "06/04/2024, 10:01"
	},
	{
		device_id: "humid_1",
		value: "26%",
		type: "humidity",
		timestamp: "06/04/2024, 09:56"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "06/04/2024, 09:51"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "06/04/2024, 09:46"
	},
	{
		device_id: "humid_1",
		value: "43%",
		type: "humidity",
		timestamp: "06/04/2024, 09:41"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "06/04/2024, 09:36"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "06/04/2024, 09:31"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "06/04/2024, 09:26"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "06/04/2024, 09:21"
	},
	{
		device_id: "humid_1",
		value: "5%",
		type: "humidity",
		timestamp: "06/04/2024, 09:16"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "06/04/2024, 09:11"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "06/04/2024, 09:06"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "06/04/2024, 09:01"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "06/04/2024, 08:56"
	},
	{
		device_id: "humid_1",
		value: "11%",
		type: "humidity",
		timestamp: "06/04/2024, 08:51"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "06/04/2024, 08:46"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "06/04/2024, 08:41"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "06/04/2024, 08:36"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "06/04/2024, 08:31"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "06/04/2024, 08:26"
	},
	{
		device_id: "humid_1",
		value: "7%",
		type: "humidity",
		timestamp: "06/04/2024, 08:21"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "06/04/2024, 08:16"
	},
	{
		device_id: "humid_1",
		value: "8%",
		type: "humidity",
		timestamp: "06/04/2024, 08:11"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "06/04/2024, 08:06"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "06/04/2024, 08:01"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "06/04/2024, 07:56"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "06/04/2024, 07:51"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "06/04/2024, 07:46"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "06/04/2024, 07:41"
	},
	{
		device_id: "humid_1",
		value: "58%",
		type: "humidity",
		timestamp: "06/04/2024, 07:36"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "06/04/2024, 07:31"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "06/04/2024, 07:26"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "06/04/2024, 07:21"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "06/04/2024, 07:16"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "06/04/2024, 07:11"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "06/04/2024, 07:06"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "06/04/2024, 07:01"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "06/04/2024, 06:56"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "06/04/2024, 06:51"
	},
	{
		device_id: "humid_1",
		value: "75%",
		type: "humidity",
		timestamp: "06/04/2024, 06:46"
	},
	{
		device_id: "humid_1",
		value: "25%",
		type: "humidity",
		timestamp: "06/04/2024, 06:41"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "06/04/2024, 06:36"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "06/04/2024, 06:31"
	},
	{
		device_id: "humid_1",
		value: "81%",
		type: "humidity",
		timestamp: "06/04/2024, 06:26"
	},
	{
		device_id: "humid_1",
		value: "21%",
		type: "humidity",
		timestamp: "06/04/2024, 06:21"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "06/04/2024, 06:16"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "06/04/2024, 06:11"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "06/04/2024, 06:06"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "06/04/2024, 06:01"
	},
	{
		device_id: "humid_1",
		value: "53%",
		type: "humidity",
		timestamp: "06/04/2024, 05:56"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "06/04/2024, 05:51"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "06/04/2024, 05:46"
	},
	{
		device_id: "humid_1",
		value: "59%",
		type: "humidity",
		timestamp: "06/04/2024, 05:41"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "06/04/2024, 05:36"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "06/04/2024, 05:31"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "06/04/2024, 05:26"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "06/04/2024, 05:21"
	},
	{
		device_id: "humid_1",
		value: "98%",
		type: "humidity",
		timestamp: "06/04/2024, 05:16"
	},
	{
		device_id: "humid_1",
		value: "74%",
		type: "humidity",
		timestamp: "06/04/2024, 05:11"
	},
	{
		device_id: "humid_1",
		value: "80%",
		type: "humidity",
		timestamp: "06/04/2024, 05:06"
	},
	{
		device_id: "humid_1",
		value: "36%",
		type: "humidity",
		timestamp: "06/04/2024, 05:01"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "06/04/2024, 04:56"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "06/04/2024, 04:51"
	},
	{
		device_id: "humid_1",
		value: "9%",
		type: "humidity",
		timestamp: "06/04/2024, 04:46"
	},
	{
		device_id: "humid_1",
		value: "41%",
		type: "humidity",
		timestamp: "06/04/2024, 04:41"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "06/04/2024, 04:36"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "06/04/2024, 04:31"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "06/04/2024, 04:26"
	},
	{
		device_id: "humid_1",
		value: "10%",
		type: "humidity",
		timestamp: "06/04/2024, 04:21"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "06/04/2024, 04:16"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "06/04/2024, 04:11"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "06/04/2024, 04:06"
	},
	{
		device_id: "humid_1",
		value: "87%",
		type: "humidity",
		timestamp: "06/04/2024, 04:01"
	},
	{
		device_id: "humid_1",
		value: "95%",
		type: "humidity",
		timestamp: "06/04/2024, 03:56"
	},
	{
		device_id: "humid_1",
		value: "61%",
		type: "humidity",
		timestamp: "06/04/2024, 03:51"
	},
	{
		device_id: "humid_1",
		value: "48%",
		type: "humidity",
		timestamp: "06/04/2024, 03:46"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "06/04/2024, 03:41"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "06/04/2024, 03:36"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "06/04/2024, 03:31"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "06/04/2024, 03:26"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "06/04/2024, 03:21"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "06/04/2024, 03:16"
	},
	{
		device_id: "humid_1",
		value: "12%",
		type: "humidity",
		timestamp: "06/04/2024, 03:11"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "06/04/2024, 03:06"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "06/04/2024, 03:01"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "06/04/2024, 02:56"
	},
	{
		device_id: "humid_1",
		value: "31%",
		type: "humidity",
		timestamp: "06/04/2024, 02:51"
	},
	{
		device_id: "humid_1",
		value: "70%",
		type: "humidity",
		timestamp: "06/04/2024, 02:46"
	},
	{
		device_id: "humid_1",
		value: "68%",
		type: "humidity",
		timestamp: "06/04/2024, 02:41"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "06/04/2024, 02:36"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "06/04/2024, 02:31"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "06/04/2024, 02:26"
	},
	{
		device_id: "humid_1",
		value: "14%",
		type: "humidity",
		timestamp: "06/04/2024, 02:21"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "06/04/2024, 02:16"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "06/04/2024, 02:11"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "06/04/2024, 02:06"
	},
	{
		device_id: "humid_1",
		value: "100%",
		type: "humidity",
		timestamp: "06/04/2024, 02:01"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "06/04/2024, 01:56"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "06/04/2024, 01:51"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "06/04/2024, 01:46"
	},
	{
		device_id: "humid_1",
		value: "23%",
		type: "humidity",
		timestamp: "06/04/2024, 01:41"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "06/04/2024, 01:36"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "06/04/2024, 01:31"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "06/04/2024, 01:26"
	},
	{
		device_id: "humid_1",
		value: "76%",
		type: "humidity",
		timestamp: "06/04/2024, 01:21"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "06/04/2024, 01:16"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "06/04/2024, 01:11"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "06/04/2024, 01:06"
	},
	{
		device_id: "humid_1",
		value: "99%",
		type: "humidity",
		timestamp: "06/04/2024, 01:01"
	},
	{
		device_id: "humid_1",
		value: "85%",
		type: "humidity",
		timestamp: "06/04/2024, 00:56"
	},
	{
		device_id: "humid_1",
		value: "69%",
		type: "humidity",
		timestamp: "06/04/2024, 00:51"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "06/04/2024, 00:46"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "06/04/2024, 00:41"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "06/04/2024, 00:36"
	},
	{
		device_id: "humid_1",
		value: "3%",
		type: "humidity",
		timestamp: "06/04/2024, 00:31"
	},
	{
		device_id: "humid_1",
		value: "17%",
		type: "humidity",
		timestamp: "06/04/2024, 00:26"
	},
	{
		device_id: "humid_1",
		value: "71%",
		type: "humidity",
		timestamp: "06/04/2024, 00:21"
	},
	{
		device_id: "humid_1",
		value: "13%",
		type: "humidity",
		timestamp: "06/04/2024, 00:16"
	},
	{
		device_id: "humid_1",
		value: "66%",
		type: "humidity",
		timestamp: "06/04/2024, 00:11"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "06/04/2024, 00:06"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "06/04/2024, 00:01"
	},
	{
		device_id: "humid_1",
		value: "55%",
		type: "humidity",
		timestamp: "05/04/2024, 23:56"
	},
	{
		device_id: "humid_1",
		value: "33%",
		type: "humidity",
		timestamp: "05/04/2024, 23:51"
	},
	{
		device_id: "humid_1",
		value: "84%",
		type: "humidity",
		timestamp: "05/04/2024, 23:46"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "05/04/2024, 23:41"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "05/04/2024, 23:36"
	},
	{
		device_id: "humid_1",
		value: "79%",
		type: "humidity",
		timestamp: "05/04/2024, 23:31"
	},
	{
		device_id: "humid_1",
		value: "19%",
		type: "humidity",
		timestamp: "05/04/2024, 23:26"
	},
	{
		device_id: "humid_1",
		value: "47%",
		type: "humidity",
		timestamp: "05/04/2024, 23:21"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "05/04/2024, 23:16"
	},
	{
		device_id: "humid_1",
		value: "91%",
		type: "humidity",
		timestamp: "05/04/2024, 23:11"
	},
	{
		device_id: "humid_1",
		value: "39%",
		type: "humidity",
		timestamp: "05/04/2024, 23:06"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "05/04/2024, 23:01"
	},
	{
		device_id: "humid_1",
		value: "90%",
		type: "humidity",
		timestamp: "05/04/2024, 22:56"
	},
	{
		device_id: "humid_1",
		value: "28%",
		type: "humidity",
		timestamp: "05/04/2024, 22:51"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "05/04/2024, 22:46"
	},
	{
		device_id: "humid_1",
		value: "46%",
		type: "humidity",
		timestamp: "05/04/2024, 22:41"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "05/04/2024, 22:36"
	},
	{
		device_id: "humid_1",
		value: "56%",
		type: "humidity",
		timestamp: "05/04/2024, 22:31"
	},
	{
		device_id: "humid_1",
		value: "30%",
		type: "humidity",
		timestamp: "05/04/2024, 22:26"
	},
	{
		device_id: "humid_1",
		value: "40%",
		type: "humidity",
		timestamp: "05/04/2024, 22:21"
	},
	{
		device_id: "humid_1",
		value: "88%",
		type: "humidity",
		timestamp: "05/04/2024, 22:16"
	},
	{
		device_id: "humid_1",
		value: "15%",
		type: "humidity",
		timestamp: "05/04/2024, 22:11"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "05/04/2024, 22:06"
	},
	{
		device_id: "humid_1",
		value: "24%",
		type: "humidity",
		timestamp: "05/04/2024, 22:01"
	},
	{
		device_id: "humid_1",
		value: "20%",
		type: "humidity",
		timestamp: "05/04/2024, 21:56"
	},
	{
		device_id: "humid_1",
		value: "38%",
		type: "humidity",
		timestamp: "05/04/2024, 21:51"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "05/04/2024, 21:46"
	},
	{
		device_id: "humid_1",
		value: "86%",
		type: "humidity",
		timestamp: "05/04/2024, 21:41"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "05/04/2024, 21:36"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "05/04/2024, 21:31"
	},
	{
		device_id: "humid_1",
		value: "51%",
		type: "humidity",
		timestamp: "05/04/2024, 21:26"
	},
	{
		device_id: "humid_1",
		value: "92%",
		type: "humidity",
		timestamp: "05/04/2024, 21:21"
	},
	{
		device_id: "humid_1",
		value: "6%",
		type: "humidity",
		timestamp: "05/04/2024, 21:16"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "05/04/2024, 21:11"
	},
	{
		device_id: "humid_1",
		value: "2%",
		type: "humidity",
		timestamp: "05/04/2024, 21:06"
	},
	{
		device_id: "humid_1",
		value: "94%",
		type: "humidity",
		timestamp: "05/04/2024, 21:01"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "05/04/2024, 20:56"
	},
	{
		device_id: "humid_1",
		value: "35%",
		type: "humidity",
		timestamp: "05/04/2024, 20:51"
	},
	{
		device_id: "humid_1",
		value: "32%",
		type: "humidity",
		timestamp: "05/04/2024, 20:46"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "05/04/2024, 20:41"
	},
	{
		device_id: "humid_1",
		value: "16%",
		type: "humidity",
		timestamp: "05/04/2024, 20:36"
	},
	{
		device_id: "humid_1",
		value: "1%",
		type: "humidity",
		timestamp: "05/04/2024, 20:31"
	},
	{
		device_id: "humid_1",
		value: "27%",
		type: "humidity",
		timestamp: "05/04/2024, 20:26"
	},
	{
		device_id: "humid_1",
		value: "97%",
		type: "humidity",
		timestamp: "05/04/2024, 20:21"
	},
	{
		device_id: "humid_1",
		value: "73%",
		type: "humidity",
		timestamp: "05/04/2024, 20:16"
	},
	{
		device_id: "humid_1",
		value: "37%",
		type: "humidity",
		timestamp: "05/04/2024, 20:11"
	},
	{
		device_id: "humid_1",
		value: "60%",
		type: "humidity",
		timestamp: "05/04/2024, 20:06"
	},
	{
		device_id: "humid_1",
		value: "49%",
		type: "humidity",
		timestamp: "05/04/2024, 20:01"
	},
	{
		device_id: "humid_1",
		value: "82%",
		type: "humidity",
		timestamp: "05/04/2024, 19:56"
	},
	{
		device_id: "humid_1",
		value: "64%",
		type: "humidity",
		timestamp: "05/04/2024, 19:51"
	},
	{
		device_id: "humid_1",
		value: "63%",
		type: "humidity",
		timestamp: "05/04/2024, 19:46"
	},
	{
		device_id: "humid_1",
		value: "67%",
		type: "humidity",
		timestamp: "05/04/2024, 19:41"
	},
	{
		device_id: "humid_1",
		value: "89%",
		type: "humidity",
		timestamp: "05/04/2024, 19:36"
	},
	{
		device_id: "humid_1",
		value: "62%",
		type: "humidity",
		timestamp: "05/04/2024, 19:31"
	},
	{
		device_id: "humid_1",
		value: "78%",
		type: "humidity",
		timestamp: "05/04/2024, 19:26"
	},
	{
		device_id: "humid_1",
		value: "57%",
		type: "humidity",
		timestamp: "05/04/2024, 19:21"
	},
	{
		device_id: "humid_1",
		value: "4%",
		type: "humidity",
		timestamp: "05/04/2024, 19:16"
	},
	{
		device_id: "humid_1",
		value: "52%",
		type: "humidity",
		timestamp: "05/04/2024, 19:11"
	},
	{
		device_id: "humid_1",
		value: "83%",
		type: "humidity",
		timestamp: "05/04/2024, 19:06"
	},
	{
		device_id: "humid_1",
		value: "72%",
		type: "humidity",
		timestamp: "05/04/2024, 19:01"
	},
	{
		device_id: "humid_1",
		value: "65%",
		type: "humidity",
		timestamp: "05/04/2024, 18:56"
	}
];

const $$Astro = createAstro();
const $$Humidtable = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Humidtable;
  let searchQuery = "";
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderHead()}</head> <body> <div class="relative flex gap-3"> <input class="mb-3 h-9 w-[23rem] rounded-lg border border-neutral-200 pl-10" type="text" id="searchInput" placeholder="Search Data..."> <select class="flex h-9 w-4 rounded-lg border border-neutral-200" id="entryCountSelect"> <option value="10">10</option> <option value="50">50</option> <option value="100">100</option> </select> <svg class="absolute left-2 top-1.5 mt-1 text-neutral-400" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="search"> <path id="Vector" d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path id="Vector_2" d="M21 20.9999L16.65 16.6499" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </svg> </div> <div class="relative overflow-x-auto shadow-md sm:rounded-lg"> <table class="table-sortable w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right"> <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"> <tr> <th scope="col" class="px-6 py-3" id="timeStampHeader" data-sort="timestamp"> <div class="flex items-center">
Timestamp
<a href="#"><svg class="ms-1.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"></path> </svg></a> </div> </th> <th scope="col" class="px-6 py-3" id="deviceIdHeader" data-sort="deviceId"> <div class="flex items-center">
Device Id
<a href="#"><svg class="ms-1.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"></path> </svg></a> </div> </th> <th scope="col" class="px-6 py-3" id="valueHeader" data-sort="value"> <div class="flex items-center">
Value
<a href="#"><svg class="ms-1.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"></path> </svg></a> </div> </th> <th scope="col" class="px-6 py-3" id="typeHeader" data-sort="type"> <div class="flex items-center">
Type
<a href="#"><svg class="ms-1.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"></path> </svg></a> </div> </th> <th scope="col" class="px-6 py-3"> <span class="sr-only">Edit</span> </th> </tr> </thead> <tbody> ${data.filter((item) => {
    return item.timestamp.toLowerCase().includes(searchQuery.toLowerCase()) || item.device_id.toLowerCase().includes(searchQuery.toLowerCase()) || item.value.toLowerCase().includes(searchQuery.toLowerCase()) || item.type.toLowerCase().includes(searchQuery.toLowerCase());
  }).map((datas) => renderTemplate`<tr class="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"> <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"> ${datas.timestamp} </th> <td class="px-6 py-4"> ${datas.device_id} </td> <td class="px-6 py-4"> ${datas.value} </td> <td class="px-6 py-4"> ${datas.type} </td> <td class="px-6 py-4 text-right"></td> </tr>`)} </tbody> </table> </div>  </body></html>`;
}, "D:/0 to hero/astro js/FieldIQ/src/pages/humid/humidtable.astro", void 0);

const $$file = "D:/0 to hero/astro js/FieldIQ/src/pages/humid/humidtable.astro";
const $$url = "/humid/humidtable";

export { $$Humidtable as default, $$file as file, $$url as url };

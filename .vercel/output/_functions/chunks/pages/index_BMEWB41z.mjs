import { c as createAstro, d as createComponent, r as renderTemplate, i as addAttribute, m as maybeRenderHead, j as renderSlot, k as renderComponent, e as renderHead } from '../astro_CdlJyK4w.mjs';
/* empty css                          */
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image } from './generic_B-thV5sQ.mjs';
import $$Humidtable from './humidtable_DpWA2hE8.mjs';
import $$Phtable from './phtable_CkgetVOW.mjs';
import $$Tabledata from './Tabledata_Bf1Lj6LT.mjs';
import $$Suntable from './suntable_Bm_ZRwZ1.mjs';
import $$Temptable from './temptable_BWFtW068.mjs';
import 'clsx';
import $$Usertable from './usertable_CBLEgEk9.mjs';
/* empty css                          */
/* empty css                          */
import $$Content from './content_BpEQg1ST.mjs';

const $$Astro$e = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/0 to hero/astro js/FieldIQ/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$d = createAstro();
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Sidebar;
  return renderTemplate`${maybeRenderHead()}<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"> <span class="sr-only">Open sidebar</span> <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path> </svg> </button> <aside id="logo-sidebar" class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0" aria-label="Sidebar"> <div class="h-full overflow-y-auto bg-white px-6 py-10 dark:bg-gray-800"> <a href="/#" class="mb-10 flex items-center  gap-0.2   "> <img src="../../public/images/vector.png" class="ml-1 h-6 sm:h-7" alt="FieldIQ"> <span class="pl-[13px] self-center whitespace-nowrap text-xl font-semibold dark:text-white">FieldIQ</span> </a> <ul class="space-y-2 font-medium"> <li> <a href="/position" class="font-semibold group flex items-center rounded-lg p-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> <svg class="h-5 w-5 text-black transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 56 56"> <path fill="currentColor" d="M5.137 28.223c.82.82 1.64 1.078 3.258 1.078l17.742.094c.164 0 .304 0 .375.093c.07.07.093.211.093.352l.07 17.766c.024 1.617.282 2.437 1.102 3.257c1.102 1.125 2.649.938 3.797-.187c.61-.61 1.102-1.617 1.547-2.555L51.051 9.45c.937-1.968.82-3.422-.14-4.383c-.939-.937-2.392-1.054-4.36-.117L7.879 22.88c-.938.445-1.945.937-2.555 1.547c-1.125 1.148-1.312 2.672-.187 3.797"></path> </svg> <span class="ms-3">Position</span> </a> </li> <li> <a href="/report" class="font-semibold group flex items-center rounded-lg p-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> <svg class="h-5 w-5 flex-shrink-0 text-black transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path fill="currentColor" d="M22 21H2V3h2v16h2v-9h4v9h2V6h4v13h2v-5h4z"></path> </svg> <span class="ms-3 flex-1 whitespace-nowrap">Reports</span> </a> </li> <li> <a href="/analis" class="font-semibold group flex items-center rounded-lg p-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> <svg class="h-5 w-5 flex-shrink-0 text-black transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 8"> <path fill="currentColor" d="M3.5 0c-.97 0-1.84.4-2.47 1.03L4 4V.03A4.07 4.07 0 0 0 3.5 0M5 1.06v3.41L2.28 7.19c.61.5 1.37.81 2.22.81C6.43 8 8 6.43 8 4.5c0-1.76-1.31-3.19-3-3.44M.91 2.37C.35 2.91 0 3.66 0 4.5c0 .96.46 1.79 1.16 2.34l2.13-2.13z"></path> </svg> <span class="ms-3 flex-1 whitespace-nowrap">Analytics</span> </a> </li> <li> <a href="/farm" class="font-semibold group flex items-center rounded-lg p-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> <svg class="h-5 w-5 flex-shrink-0 text-black transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path fill="currentColor" d="M13.5 2a4.5 4.5 0 0 0-4.417 5.36l-6.426 6.658a2.357 2.357 0 0 0 3.374 3.293L9.004 14.3a5.5 5.5 0 0 1 7.833-4.78a4.514 4.514 0 0 0 1.05-4.03a.5.5 0 0 0-.841-.242L14.5 7.793L12.208 5.5l2.545-2.545a.5.5 0 0 0-.242-.84A4.513 4.513 0 0 0 13.501 2m-2.865 11.92a2 2 0 0 0 1.43-2.478l-.155-.557c.254-.195.529-.362.821-.497l.338.358a2 2 0 0 0 2.91.001l.324-.344c.298.141.578.315.835.519l-.126.422a2 2 0 0 0 1.456 2.519l.349.082a4.697 4.697 0 0 1 .01 1.017l-.46.118a2 2 0 0 0-1.431 2.478l.156.556c-.254.196-.53.363-.822.498l-.338-.358a2 2 0 0 0-2.909-.002l-.325.345a4.311 4.311 0 0 1-.835-.518l.127-.423a2 2 0 0 0-1.456-2.52l-.35-.082a4.713 4.713 0 0 1-.01-1.016zm2.865.58a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></path> </svg> <span class="ms-3 flex-1 whitespace-nowrap">Farm manage</span> </a> </li> <li> <a href="/users" class="font-semibold group flex items-center rounded-lg p-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> <svg class="h-5 w-5 flex-shrink-0 text-black transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1200 1200"> <path fill="currentColor" d="M939.574 858.383c-157.341-57.318-207.64-105.702-207.64-209.298c0-62.17 51.555-102.462 69.128-155.744c17.575-53.283 27.741-116.367 36.191-162.256c8.451-45.889 11.809-63.638 16.404-112.532C859.276 157.532 818.426 0 600 0C381.639 0 340.659 157.532 346.404 218.553c4.596 48.894 7.972 66.645 16.404 112.532c8.433 45.888 18.5 108.969 36.063 162.256c17.562 53.286 69.19 93.574 69.19 155.744c0 103.596-50.298 151.979-207.638 209.298C102.511 915.83 0 972.479 0 1012.5V1200h1200v-187.5c0-39.957-102.574-96.606-260.426-154.117"></path> </svg> <span class="ms-3 flex-1 whitespace-nowrap">Manage User</span> </a> </li> <li> <a href="#" class="font-semibold group flex items-center rounded-lg p-2 text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> <svg class="h-5 w-5 flex-shrink-0 text-black transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"></path> </svg> <span class="ms-3 flex-1 whitespace-nowrap">Logout</span> </a> </li> </ul> <img class="mt-[50px] ml-[25px] w-[70%] h-auto" src="../../../public/images/contact.png" alt=""> </div> </aside>`;
}, "D:/0 to hero/astro js/FieldIQ/src/component/sidebar.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$c = createAstro();
const $$Secondlayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Secondlayout;
  Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="../../public/images/vector.png"><title>Field IQ</title>', "", '</head> <body class="bg-[#f3f3f3]" style="overflow-x: hidden;"> <!-- <Sidebar/> --> ', ' <main class=""> ', ' </main> <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script> </body> </html>'])), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Sidebar", $$Sidebar, {}), renderSlot($$result, $$slots["default"], renderTemplate`
kosongan nih isi woi jangan lupa...
<!--  ini adalah isi konten dari luar --> `));
}, "D:/0 to hero/astro js/FieldIQ/src/layout/secondlayout.astro", void 0);

const myImage = new Proxy({"src":"/_astro/frieren.DZLQGDot.jpg","width":1200,"height":700,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/0 to hero/astro js/FieldIQ/public/images/frieren.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$b = createAstro();
const $$Index$9 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$9;
  return renderTemplate`${renderComponent($$result, "Secondlayout", $$Secondlayout, { "title": "analis" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="w-[1440px]justify-center relative h-[1024px] items-center"> <div class="absolute left-0 top-0 h-[1024px] w-[1440px] rounded-[10.67px]"></div> <div class="absolute left-[228.76px] top-0 h-[102.50px] w-[1211.24px]"> <div class="absolute right-[75px] top-0 h-[102.50px] w-[600px] rounded-tr-[10px] bg-white opacity-50"></div> <div class="absolute left-[37px] top-0 h-[102.50px] w-[483.72px] rounded-bl-[10px] bg-white opacity-50"></div> <div class="absolute left-[66.96px] top-[33.05px] h-[36.13px] w-[138.51px] font-secondary text-3xl font-bold text-black">
Map
</div> <div class="absolute left-[247.55px] top-[29.83px] inline-flex h-[42.83px] w-[198.09px] items-center justify-center gap-[10.67px] rounded-[10.67px] bg-white p-[10.67px]"> <div class="font-secondary text-[12.80px] font-medium text-black">
16/03/2024
</div> <div class="relative ml-2 h-[29.34px] w-[21.34px]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path></svg> </div> </div> <div class="absolute left-[950.30px] top-[29.24px] inline-flex h-11 w-[156.45px] items-center justify-center gap-[20.14px]"> <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="" type="button"> <span class="sr-only">Open user menu</span> ${renderComponent($$result2, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": myImage, "alt": "user photo" })} </button> <div id="dropdownAvatar" class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"> <div class="px-4 py-3 text-sm text-gray-900 dark:text-white"> <div>Bonnie Green</div> <div class="truncate font-medium">name@flowbite.com</div> </div> <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton"> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a> </li> </ul> <div class="py-2"> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a> </div> </div> <div class="font-secondary text-[14.94px] font-bold text-black">
User
</div> </div> </div> <!-- content --> <div class="absolute left-[266px] mt-[120px] h-auto w-[79.5%] justify-center"> <img src="../../../public/images/status.png" alt="status"> <div class="grid grid-cols-2 gap-4"> <div class="mt-5"> <a href="/sun"> <img class="h-auto w-full" src="../../../public/images/sun.png" alt=""> </a> </div> <div class="mt-5"> <a href="/humid"> <img class="h-auto w-full" src="../../../public/images/hum.png" alt=""> </a> </div> <div> <a href="/ph"> <img class="h-auto w-full" src="../../../public/images/ph.png" alt=""> </a> </div> <div> <a href="/temp"> <img class="h-auto w-full" src="../../../public/images/temp.png" alt=""> </a> </div> </div> </div> <!-- content end --> </div> </section> ` })}`;
}, "D:/0 to hero/astro js/FieldIQ/src/pages/analis/index.astro", void 0);

const $$file$9 = "D:/0 to hero/astro js/FieldIQ/src/pages/analis/index.astro";
const $$url$9 = "/analis";

const index$9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$9,
	file: $$file$9,
	url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro();
const $$Index$8 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index$8;
  return renderTemplate`${renderComponent($$result, "Secondlayout", $$Secondlayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="w-[1440px]justify-center relative h-[1024px] items-center"> <div class="absolute left-0 top-0 h-[1024px] w-[1440px] rounded-[10.67px]"></div> <div class="absolute left-[228.76px] top-0 h-[102.50px] w-[1211.24px]"> <div class="absolute right-[75px] top-0 h-[102.50px] w-[600px] rounded-tr-[10px] bg-white opacity-50"></div> <div class="absolute left-[37px] top-0 h-[102.50px] w-[483.72px] rounded-bl-[10px] bg-white opacity-50"></div> <div class="absolute left-[66.96px] top-[33.05px] h-[36.13px] w-[138.51px] font-secondary text-3xl font-bold text-black">
Map
</div> <div class="absolute left-[247.55px] top-[29.83px] inline-flex h-[42.83px] w-[198.09px] items-center justify-center gap-[10.67px] rounded-[10.67px] bg-white p-[10.67px]"> <div class="font-secondary text-[12.80px] font-medium text-black">
16/03/2024
</div> <div class="relative ml-2 h-[29.34px] w-[21.34px]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path></svg> </div> </div> <div class="absolute left-[950.30px] top-[29.24px] inline-flex h-11 w-[156.45px] items-center justify-center gap-[20.14px]"> <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="" type="button"> <span class="sr-only">Open user menu</span> ${renderComponent($$result2, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": myImage, "alt": "user photo" })} </button> <div id="dropdownAvatar" class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"> <div class="px-4 py-3 text-sm text-gray-900 dark:text-white"> <div>Bonnie Green</div> <div class="truncate font-medium">name@flowbite.com</div> </div> <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton"> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a> </li> </ul> <div class="py-2"> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a> </div> </div> <div class="font-secondary text-[14.94px] font-bold text-black">
User
</div> </div> </div> <!-- content --> <div class="absolute left-[266px] mt-[120px] h-auto w-[79.5%] justify-center"> <div> <img src="../../../public/images/sensor.png" alt=""> </div> <div class="mt-4"> <img class="" src="../../../public/images/menus.png" alt=""> </div> </div> <!-- content end --> </div> </section> ` })}`;
}, "D:/0 to hero/astro js/FieldIQ/src/pages/farm/index.astro", void 0);

const $$file$8 = "D:/0 to hero/astro js/FieldIQ/src/pages/farm/index.astro";
const $$url$8 = "/farm";

const index$8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$8,
	file: $$file$8,
	url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro();
const $$Index$7 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$7;
  return renderTemplate`${renderComponent($$result, "Secondlayout", $$Secondlayout, { "title": "humid" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="w-[1440px]justify-center relative h-[1024px] items-center"> <div class="absolute left-0 top-0 h-[1024px] w-[1440px] rounded-[10.67px]"></div> <div class="absolute left-[228.76px] top-0 h-[102.50px] w-[1211.24px]"> <div class="absolute right-[75px] top-0 h-[102.50px] w-[600px] rounded-tr-[10px] bg-white opacity-50"></div> <div class="absolute left-[37px] top-0 h-[102.50px] w-[483.72px] rounded-bl-[10px] bg-white opacity-50"></div> <div class="absolute left-[66.96px] top-[33.05px] h-[36.13px] w-[138.51px] font-secondary text-3xl font-bold text-black">
Map
</div> <div class="absolute left-[247.55px] top-[29.83px] inline-flex h-[42.83px] w-[198.09px] items-center justify-center gap-[10.67px] rounded-[10.67px] bg-white p-[10.67px]"> <div class="font-secondary text-[12.80px] font-medium text-black">
16/03/2024
</div> <div class="relative ml-2 h-[29.34px] w-[21.34px]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path></svg> </div> </div> <div class="absolute left-[950.30px] top-[29.24px] inline-flex h-11 w-[156.45px] items-center justify-center gap-[20.14px]"> <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="" type="button"> <span class="sr-only">Open user menu</span> ${renderComponent($$result2, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": myImage, "alt": "user photo" })} </button> <div id="dropdownAvatar" class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"> <div class="px-4 py-3 text-sm text-gray-900 dark:text-white"> <div>Bonnie Green</div> <div class="truncate font-medium">name@flowbite.com</div> </div> <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton"> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a> </li> </ul> <div class="py-2"> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a> </div> </div> <div class="font-secondary text-[14.94px] font-bold text-black">
User
</div> </div> </div> <!-- content --> <div class="absolute left-[266px] mt-[120px] h-auto w-[79.5%] justify-center"> ${renderComponent($$result2, "Tabledatas", $$Humidtable, {})} </div> <!-- content end --> </div> </section> ` })}`;
}, "D:/0 to hero/astro js/FieldIQ/src/pages/humid/index.astro", void 0);

const $$file$7 = "D:/0 to hero/astro js/FieldIQ/src/pages/humid/index.astro";
const $$url$7 = "/humid";

const index$7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$7,
	file: $$file$7,
	url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$Index$6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$6;
  return renderTemplate`${renderComponent($$result, "Secondlayout", $$Secondlayout, { "title": "ph" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="w-[1440px]justify-center relative h-[1024px] items-center"> <div class="absolute left-0 top-0 h-[1024px] w-[1440px] rounded-[10.67px]"></div> <div class="absolute left-[228.76px] top-0 h-[102.50px] w-[1211.24px]"> <div class="absolute right-[75px] top-0 h-[102.50px] w-[600px] rounded-tr-[10px] bg-white opacity-50"></div> <div class="absolute left-[37px] top-0 h-[102.50px] w-[483.72px] rounded-bl-[10px] bg-white opacity-50"></div> <div class="absolute left-[66.96px] top-[33.05px] h-[36.13px] w-[138.51px] font-secondary text-3xl font-bold text-black">
Map
</div> <div class="absolute left-[247.55px] top-[29.83px] inline-flex h-[42.83px] w-[198.09px] items-center justify-center gap-[10.67px] rounded-[10.67px] bg-white p-[10.67px]"> <div class="font-secondary text-[12.80px] font-medium text-black">
16/03/2024
</div> <div class="relative ml-2 h-[29.34px] w-[21.34px]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path></svg> </div> </div> <div class="absolute left-[950.30px] top-[29.24px] inline-flex h-11 w-[156.45px] items-center justify-center gap-[20.14px]"> <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="" type="button"> <span class="sr-only">Open user menu</span> ${renderComponent($$result2, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": myImage, "alt": "user photo" })} </button> <div id="dropdownAvatar" class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"> <div class="px-4 py-3 text-sm text-gray-900 dark:text-white"> <div>Bonnie Green</div> <div class="truncate font-medium">name@flowbite.com</div> </div> <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton"> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a> </li> </ul> <div class="py-2"> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a> </div> </div> <div class="font-secondary text-[14.94px] font-bold text-black">
User
</div> </div> </div> <!-- content --> <div class="absolute left-[266px] mt-[120px] h-auto w-[79.5%] justify-center"> ${renderComponent($$result2, "Tabledatas", $$Phtable, {})} </div> <!-- content end --> </div> </section> ` })}`;
}, "D:/0 to hero/astro js/FieldIQ/src/pages/ph/index.astro", void 0);

const $$file$6 = "D:/0 to hero/astro js/FieldIQ/src/pages/ph/index.astro";
const $$url$6 = "/ph";

const index$6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$6,
	file: $$file$6,
	url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro();
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$5;
  return renderTemplate`${renderComponent($$result, "Secondlayout", $$Secondlayout, { "title": "position" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="w-[1440px]justify-center relative h-[1024px] items-center"> <div class="absolute left-0 top-0 h-[1024px] w-[1440px] rounded-[10.67px]"></div> <div class="absolute left-[228.76px] top-0 h-[102.50px] w-[1211.24px]"> <div class="absolute right-[75px] top-0 h-[102.50px] w-[600px] rounded-tr-[10px] bg-white opacity-50"></div> <div class="absolute left-[37px] top-0 h-[102.50px] w-[483.72px] rounded-bl-[10px] bg-white opacity-50"></div> <div class="absolute left-[66.96px] top-[33.05px] h-[36.13px] w-[138.51px] font-secondary text-3xl font-bold text-black">
Map
</div> <div class="absolute left-[247.55px] top-[29.83px] inline-flex h-[42.83px] w-[198.09px] items-center justify-center gap-[10.67px] rounded-[10.67px] bg-white p-[10.67px]"> <div class="font-secondary text-[12.80px] font-medium text-black">
16/03/2024
</div> <div class="relative ml-2 h-[29.34px] w-[21.34px]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path></svg> </div> </div> <div class="absolute left-[950.30px] top-[29.24px] inline-flex h-11 w-[156.45px] items-center justify-center gap-[20.14px]"> <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="" type="button"> <span class="sr-only">Open user menu</span> ${renderComponent($$result2, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": myImage, "alt": "user photo" })} </button> <div id="dropdownAvatar" class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"> <div class="px-4 py-3 text-sm text-gray-900 dark:text-white"> <div>Bonnie Green</div> <div class="truncate font-medium">name@flowbite.com</div> </div> <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton"> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a> </li> </ul> <div class="py-2"> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a> </div> </div> <div class="font-secondary text-[14.94px] font-bold text-black">
User
</div> </div> </div> <!-- content --> <img class="absolute left-[200px] mt-[100px] inline-flex h-[75%] w-[90%] items-center justify-center" src="../../../public/images/maping.png" alt="mapImage" id="mapImage"> <!-- content end --> <div class="absolute left-[1030.19px] top-[39.58px] inline-flex items-center justify-center gap-[11px] rounded-[23px]"> <label class="inline-flex cursor-pointer items-center"> <input type="checkbox" value="" class="peer sr-only" onchange="toggleSatelliteMode(event)"> <div class="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div> <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Satelite Mode</span> </label> </div> </div> </section>  ` })}`;
}, "D:/0 to hero/astro js/FieldIQ/src/pages/position/index.astro", void 0);

const $$file$5 = "D:/0 to hero/astro js/FieldIQ/src/pages/position/index.astro";
const $$url$5 = "/position";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$5,
	file: $$file$5,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$4;
  return renderTemplate`${renderComponent($$result, "Secondlayout", $$Secondlayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="w-[1440px]justify-center relative h-[1024px] items-center"> <div class="absolute left-0 top-0 h-[1024px] w-[1440px] rounded-[10.67px]"></div> <div class="absolute left-[228.76px] top-0 h-[102.50px] w-[1211.24px]"> <div class="absolute right-[75px] top-0 h-[102.50px] w-[600px] rounded-tr-[10px] bg-white opacity-50"></div> <div class="absolute left-[37px] top-0 h-[102.50px] w-[483.72px] rounded-bl-[10px] bg-white opacity-50"></div> <div class="absolute left-[66.96px] top-[33.05px] h-[36.13px] w-[138.51px] font-secondary text-3xl font-bold text-black">
Map
</div> <div class="absolute left-[247.55px] top-[29.83px] inline-flex h-[42.83px] w-[198.09px] items-center justify-center gap-[10.67px] rounded-[10.67px] bg-white p-[10.67px]"> <div class="font-secondary text-[12.80px] font-medium text-black">
16/03/2024
</div> <div class="relative ml-2 h-[29.34px] w-[21.34px]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path></svg> </div> </div> <div class="absolute left-[950.30px] top-[29.24px] inline-flex h-11 w-[156.45px] items-center justify-center gap-[20.14px]"> <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="" type="button"> <span class="sr-only">Open user menu</span> ${renderComponent($$result2, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": myImage, "alt": "user photo" })} </button> <div id="dropdownAvatar" class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"> <div class="px-4 py-3 text-sm text-gray-900 dark:text-white"> <div>Bonnie Green</div> <div class="truncate font-medium">name@flowbite.com</div> </div> <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton"> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a> </li> </ul> <div class="py-2"> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a> </div> </div> <div class="font-secondary text-[14.94px] font-bold text-black">
User
</div> </div> </div> <!-- content --> <div class="absolute left-[266px] mt-[120px] h-auto w-[79.5%] justify-center"> ${renderComponent($$result2, "Tabledatas", $$Tabledata, {})} </div> <!-- content end --> </div> </section> ` })}`;
}, "D:/0 to hero/astro js/FieldIQ/src/pages/report/index.astro", void 0);

const $$file$4 = "D:/0 to hero/astro js/FieldIQ/src/pages/report/index.astro";
const $$url$4 = "/report";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$4,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "Secondlayout", $$Secondlayout, { "title": "sun" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="w-[1440px]justify-center relative h-[1024px] items-center"> <div class="absolute left-0 top-0 h-[1024px] w-[1440px] rounded-[10.67px]"></div> <div class="absolute left-[228.76px] top-0 h-[102.50px] w-[1211.24px]"> <div class="absolute right-[75px] top-0 h-[102.50px] w-[600px] rounded-tr-[10px] bg-white opacity-50"></div> <div class="absolute left-[37px] top-0 h-[102.50px] w-[483.72px] rounded-bl-[10px] bg-white opacity-50"></div> <div class="absolute left-[66.96px] top-[33.05px] h-[36.13px] w-[138.51px] font-secondary text-3xl font-bold text-black">
Map
</div> <div class="absolute left-[247.55px] top-[29.83px] inline-flex h-[42.83px] w-[198.09px] items-center justify-center gap-[10.67px] rounded-[10.67px] bg-white p-[10.67px]"> <div class="font-secondary text-[12.80px] font-medium text-black">
16/03/2024
</div> <div class="relative ml-2 h-[29.34px] w-[21.34px]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path></svg> </div> </div> <div class="absolute left-[950.30px] top-[29.24px] inline-flex h-11 w-[156.45px] items-center justify-center gap-[20.14px]"> <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="" type="button"> <span class="sr-only">Open user menu</span> ${renderComponent($$result2, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": myImage, "alt": "user photo" })} </button> <div id="dropdownAvatar" class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"> <div class="px-4 py-3 text-sm text-gray-900 dark:text-white"> <div>Bonnie Green</div> <div class="truncate font-medium">name@flowbite.com</div> </div> <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton"> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a> </li> </ul> <div class="py-2"> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a> </div> </div> <div class="font-secondary text-[14.94px] font-bold text-black">
User
</div> </div> </div> <!-- content --> <div class="absolute left-[266px] mt-[120px] h-auto w-[79.5%] justify-center"> ${renderComponent($$result2, "Tabledatas", $$Suntable, {})} </div> <!-- content end --> </div> </section> ` })}`;
}, "D:/0 to hero/astro js/FieldIQ/src/pages/sun/index.astro", void 0);

const $$file$3 = "D:/0 to hero/astro js/FieldIQ/src/pages/sun/index.astro";
const $$url$3 = "/sun";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$3,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Secondlayout", $$Secondlayout, { "title": "sun" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="w-[1440px]justify-center relative h-[1024px] items-center"> <div class="absolute left-0 top-0 h-[1024px] w-[1440px] rounded-[10.67px]"></div> <div class="absolute left-[228.76px] top-0 h-[102.50px] w-[1211.24px]"> <div class="absolute right-[75px] top-0 h-[102.50px] w-[600px] rounded-tr-[10px] bg-white opacity-50"></div> <div class="absolute left-[37px] top-0 h-[102.50px] w-[483.72px] rounded-bl-[10px] bg-white opacity-50"></div> <div class="absolute left-[66.96px] top-[33.05px] h-[36.13px] w-[138.51px] font-secondary text-3xl font-bold text-black">
Map
</div> <div class="absolute left-[247.55px] top-[29.83px] inline-flex h-[42.83px] w-[198.09px] items-center justify-center gap-[10.67px] rounded-[10.67px] bg-white p-[10.67px]"> <div class="font-secondary text-[12.80px] font-medium text-black">
16/03/2024
</div> <div class="relative ml-2 h-[29.34px] w-[21.34px]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path></svg> </div> </div> <div class="absolute left-[950.30px] top-[29.24px] inline-flex h-11 w-[156.45px] items-center justify-center gap-[20.14px]"> <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="" type="button"> <span class="sr-only">Open user menu</span> ${renderComponent($$result2, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": myImage, "alt": "user photo" })} </button> <div id="dropdownAvatar" class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"> <div class="px-4 py-3 text-sm text-gray-900 dark:text-white"> <div>Bonnie Green</div> <div class="truncate font-medium">name@flowbite.com</div> </div> <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton"> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a> </li> </ul> <div class="py-2"> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a> </div> </div> <div class="font-secondary text-[14.94px] font-bold text-black">
User
</div> </div> </div> <!-- content --> <div class="absolute left-[266px] mt-[120px] h-auto w-[79.5%] justify-center"> ${renderComponent($$result2, "Tabledatas", $$Temptable, {})} </div> <!-- content end --> </div> </section> ` })}`;
}, "D:/0 to hero/astro js/FieldIQ/src/pages/temp/index.astro", void 0);

const $$file$2 = "D:/0 to hero/astro js/FieldIQ/src/pages/temp/index.astro";
const $$url$2 = "/temp";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Secondlayout", $$Secondlayout, { "title": "sun" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="w-[1440px]justify-center relative h-[1024px] items-center"> <div class="absolute left-0 top-0 h-[1024px] w-[1440px] rounded-[10.67px]"></div> <div class="absolute left-[228.76px] top-0 h-[102.50px] w-[1211.24px]"> <div class="absolute right-[75px] top-0 h-[102.50px] w-[600px] rounded-tr-[10px] bg-white opacity-50"></div> <div class="absolute left-[37px] top-0 h-[102.50px] w-[483.72px] rounded-bl-[10px] bg-white opacity-50"></div> <div class="absolute left-[66.96px] top-[33.05px] h-[36.13px] w-[138.51px] font-secondary text-3xl font-bold text-black">
Map
</div> <div class="absolute left-[247.55px] top-[29.83px] inline-flex h-[42.83px] w-[198.09px] items-center justify-center gap-[10.67px] rounded-[10.67px] bg-white p-[10.67px]"> <div class="font-secondary text-[12.80px] font-medium text-black">
16/03/2024
</div> <div class="relative ml-2 h-[29.34px] w-[21.34px]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path></svg> </div> </div> <div class="absolute left-[950.30px] top-[29.24px] inline-flex h-11 w-[156.45px] items-center justify-center gap-[20.14px]"> <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="" type="button"> <span class="sr-only">Open user menu</span> ${renderComponent($$result2, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": myImage, "alt": "user photo" })} </button> <div id="dropdownAvatar" class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"> <div class="px-4 py-3 text-sm text-gray-900 dark:text-white"> <div>Bonnie Green</div> <div class="truncate font-medium">name@flowbite.com</div> </div> <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton"> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a> </li> </ul> <div class="py-2"> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a> </div> </div> <div class="font-secondary text-[14.94px] font-bold text-black">
User
</div> </div> </div> <!-- content --> <div class="absolute left-[266px] mt-[120px] h-auto w-[79.5%] justify-center"> ${renderComponent($$result2, "Tabledatas", $$Usertable, {})} </div> <!-- content end --> </div> </section> ` })}`;
}, "D:/0 to hero/astro js/FieldIQ/src/pages/users/index.astro", void 0);

const $$file$1 = "D:/0 to hero/astro js/FieldIQ/src/pages/users/index.astro";
const $$url$1 = "/users";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { pathname } = Astro2.url;
  const lists = [
    { name: "Home", url: "/" },
    { name: "Position", url: "/position" },
    { name: "Report", url: "/report" },
    { name: "Data Analysis", url: "/analis" },
    { name: "Farm Manage", url: "/farm" }
  ];
  const baseClass = "block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-mine-primary md:dark:hover:bg-transparent md:dark:hover:text-blue-500";
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 w-full border-gray-200 bg-white font-sans dark:bg-gray-900 z-10"> <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4"> <a href="#" class="flex items-center gap-4 space-x-3 rtl:space-x-reverse"> <img src="../../public/images/vector.png" class="h-8" alt="logo"> <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">FieldIQ</span> </a> <!-- search input --> <div class="relative hidden md:block"> <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"> <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path> </svg> <span class="sr-only">Search icon</span> </div> <input type="text" id="search-navbar" class="block w-[400px] rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Search..."> </div> <!-- search input --> <!-- search bar --> <div class="flex md:order-2 gap-3"> <!-- profil --> <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="" type="button"> <span class="sr-only">Open user menu</span> ${renderComponent($$result, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": myImage, "alt": "user photo" })} </button> <!-- profil --> <button data-collapse-toggle="navbar-search" type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden" aria-controls="navbar-search" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div id="dropdownAvatar" class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"> <div class="px-4 py-3 text-sm text-gray-900 dark:text-white"> <div>Bonnie Green</div> <div class="truncate font-medium">name@flowbite.com</div> </div> <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton"> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a> </li> </ul> <div class="py-2"> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a> </div> </div> <div class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-search"> <div class="relative mt-3 md:hidden"> <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"> <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path> </svg> </div> <input type="text" id="search-navbar" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Search..."> </div> <!-- dropdown --> <div class="flex items-center space-x-5 md:order-4 md:space-x-0 rtl:space-x-reverse"></div> <div class="hidden w-full  md:w-[45%]" id="navbar-user"></div> <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse"> ${lists.map((item) => renderTemplate`<li> <a${addAttribute([
    baseClass,
    { "md:text-mine-primary": item.url === pathname }
  ], "class:list")} aria-current="page"${addAttribute(item.url, "href")}> ${item.name} </a> </li>`)} </ul> </div> </div> </nav>`;
}, "D:/0 to hero/astro js/FieldIQ/src/component/navbar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Mainlayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Mainlayout;
  Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="../../public/images/vector.png"><title>Field IQ</title>', "", '</head> <body class="w-[100vh] bg-mine-secondary" style="overflow-x: hidden;"> ', ' <main class="ml-[100px] my-8  mt-[100px] w-[80vw]"> ', ' </main> <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script> </body> </html>'])), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/0 to hero/astro js/FieldIQ/src/component/navbar.astro", "client:component-export": "default" }), renderSlot($$result, $$slots["default"], renderTemplate`
kosongan nih isi woi jangan lupa...
<!--  ini adalah isi konten dari luar --> `));
}, "D:/0 to hero/astro js/FieldIQ/src/layout/mainlayout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Mainlayout", $$Mainlayout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section> <div class="absolute left-[800px] mt-[35px] inline-flex h-[380px] w-[508.78px] items-center justify-center rounded-[20px] bg-mine-basic"> <img class="flex h-[334px] w-[460px] items-center justify-center" src="../../public//images/grafik.png" alt="grafik"> </div> <!-- grafik --> <div class="flex flex-wrap"></div> <div class="mt-[70px] h-[186.75px] w-[523.1px]"> <span class="font-primary text-[48px] font-semibold text-white">Optimizing Your Farm With
</span><span class="font-primary text-[48px] font-semibold leading-[101.25px] text-green-300">Field</span><span class="font-primary text-[48px] font-semibold leading-[101.25px] text-yellow-400">IQ</span> <span class="font-primary text-white opacity-[70%]">
Empowerment at Your Fingertips
</span> </div> <div class="relative top-[70px] h-[56.25px] w-[196.88px] rounded-[16.88px]"> <div class="h-18 absolute left-0 top-0 w-[197px] rounded-[16.88px] bg-amber-300"></div> <!-- Modal toggle --> <div class="h-18 absolute left-0 top-0 h-14 w-[197px] rounded-[16.88px] bg-amber-300"> <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="absolute left-[31.63px] top-[10px] text-center font-primary text-xl font-semibold leading-9 text-zinc-800" type="button">
Get started !
</button> </div> <!-- Main modal --> <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"> <div class="relative max-h-full w-full max-w-md p-4"> <!-- Modal content --> <div class="relative rounded-lg border border-gray-400 bg-white shadow dark:bg-gray-700"> <!-- Modal header --> <div class="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
Log in to FieldIQ
</h3> <button type="button" class="end-2.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal"> <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> <span class="sr-only">Close modal</span> </button> </div> <!-- Modal body --> <div class="p-4 md:p-5"> <form class="space-y-4" action="#"> <div> <label for="username" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Username</label> <input type="text" name="username" id="username" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400" placeholder="Enter your username" required> </div> <div> <label for="password" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Password</label> <input type="password" name="password" id="password" placeholder="Enter your password" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400" required> </div> <div> <label for="password" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Code Verification</label> <input type="password" name="password" id="password" placeholder="Enter your code" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400" required> </div> <div class="flex justify-between"> <div class="flex items-start"> <div class="flex h-5 items-center"> <input id="remember" type="checkbox" value="" class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800" required> </div> <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label> </div> <a class="text-sm text-amber-300 hover:underline dark:text-amber-200">Lost Password?</a> </div> <button id="buttonAlert" type="submit" class="w-full rounded-lg bg-amber-300 px-5 py-2.5 text-center text-sm font-medium text-zinc-800 hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account
</button> <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
Not registered? <a href="/signup" class="text-amber-300 hover:underline dark:text-amber-200">Create account</a> </div> </form> </div> </div> </div> </div> </div> </section>  ` })} ${renderComponent($$result, "Content", $$Content, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/0 to hero/astro js/FieldIQ/src/pages/homepage/content.astro", "client:component-export": "default" })}`;
}, "D:/0 to hero/astro js/FieldIQ/src/pages/index.astro", void 0);

const $$file = "D:/0 to hero/astro js/FieldIQ/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$8 as a, index$7 as b, index$6 as c, index$5 as d, index$4 as e, index$3 as f, index$2 as g, index$1 as h, index$9 as i, index as j };

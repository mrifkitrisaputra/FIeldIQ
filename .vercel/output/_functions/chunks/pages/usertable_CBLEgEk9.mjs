/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderHead } from '../astro_CdlJyK4w.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Usertable = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Usertable;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderHead()}</head> <body> <div class="relative flex gap-3"> <input class="mb-3 h-9 w-[23rem] rounded-lg border border-neutral-200 pl-10" type="text" id="searchInput" placeholder="Search Data..."> <select class="flex h-9 w-4 rounded-lg border border-neutral-200" id="entryCountSelect"> <option value="10">10</option> <option value="50">50</option> <option value="100">100</option> </select> <svg class="absolute left-2 top-1.5 mt-1 text-neutral-400" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="search"> <path id="Vector" d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path id="Vector_2" d="M21 20.9999L16.65 16.6499" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </svg> </div> <div> <img src="../../../public/images/users.png" alt=""> </div> </body></html>`;
}, "D:/0 to hero/astro js/FieldIQ/src/pages/users/usertable.astro", void 0);

const $$file = "D:/0 to hero/astro js/FieldIQ/src/pages/users/usertable.astro";
const $$url = "/users/usertable";

export { $$Usertable as default, $$file as file, $$url as url };

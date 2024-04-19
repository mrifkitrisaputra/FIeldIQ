/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_CdlJyK4w.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Content = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Content;
  return renderTemplate`${maybeRenderHead()}<section class="mt-[236px] "> <div class="inline-flex  w-[1400px] flex-col items-center justify-end gap-14 bg-white px-[108px] "> <div> <img src="../../../public/images/content.png" alt=""> </div> </div> </section>`;
}, "D:/0 to hero/astro js/FieldIQ/src/pages/homepage/content.astro", void 0);

const $$file = "D:/0 to hero/astro js/FieldIQ/src/pages/homepage/content.astro";
const $$url = "/homepage/content";

export { $$Content as default, $$file as file, $$url as url };

/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as addAttribute, m as maybeRenderHead, g as renderComponent } from '../astro_3fiXy-ut.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/0 to hero/astro js/FieldIQ/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Content = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Content;
  return renderTemplate`${maybeRenderHead()}<section class="mt-[236px] "> ${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})} <div class="inline-flex  w-[1400px] flex-col items-center justify-end gap-14 bg-white px-[108px] "> <div> <img src="../../../public/images/content.png" alt=""> </div> </div> </section>`;
}, "D:/0 to hero/astro js/FieldIQ/src/pages/homepage/content.astro", void 0);

const $$file = "D:/0 to hero/astro js/FieldIQ/src/pages/homepage/content.astro";
const $$url = "/homepage/content";

const content = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Content,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ViewTransitions as $, $$Content as a, content as c };

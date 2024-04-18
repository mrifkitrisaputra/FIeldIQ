/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_3fiXy-ut.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`<html class="h-full"> ${maybeRenderHead()}<body class="flex h-full items-center bg-white bg-[url('../../public/images/orang.png')] bg-big bg-right bg-no-repeat py-16 dark:bg-slate-900"> <main class="ml-[4rem] w-full max-w-md p-9"> <div class="shadow- rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"> <div class="p-4 sm:p-7"> <div class=""> <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
Log in
</h1> <p class="mt-2 text-sm font-normal text-gray-400">
enter to continue and explore with your grasp.
</p> </div> <div class="mt-6"> <!-- Form --> <form> <div class="grid gap-y-4"> <!-- Form Group --> <div> <label for="username" class="mb-2 block text-sm dark:text-white">Username</label> <div class="relative"> <input type="text" id="username" value="" name="username" class="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error" placeholder="Enter your Username"> <div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3"> <svg class="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <p class="mt-2 hidden text-xs text-red-600" id="email-error">
Please include a valid email address so we can get back to
                    you
</p> </div> <!-- End Form Group --> <!-- Form Group --> <div> <div class="flex items-center justify-between"> <label for="password" class="mb-2 block text-sm dark:text-white">Password</label> <a class="text-sm font-medium text-amber-300 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples/html/recover-account.html">Forgot password?</a> </div> <div class="relative"> <input type="password" id="password" name="password" class="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="password-error" placeholder="Enter your password"> <div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3"> <svg class="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <p class="mt-2 hidden text-xs text-red-600" id="password-error">
8+ characters required
</p> </div> <div> <div class="flex items-center justify-between"> <label for="password" class="mb-2 block text-sm dark:text-white">Code Verification</label> </div> <div class="relative"> <input type="password" id="password" name="password" class="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="password-error" placeholder="Enter your code"> <div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3"> <svg class="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <p class="mt-2 hidden text-xs text-red-600" id="password-error">
8+ characters required
</p> </div> <!-- End Form Group --> <!-- Checkbox --> <div class="mt-[15px] flex items-center"> <input id="default-checkbox" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"> <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember Me</label> </div> <!-- End Checkbox --> <button type="submit" class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-amber-300 px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-amber-200 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" id="buttonAlert">Login to Continue</button> <p class="mt-2 text-center text-sm font-thin text-gray-600 dark:text-gray-400">
Don't have an account yet?
<a class="text-amber-300 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/signup">
Sign up here
</a> </p> </div> </form> <!-- End Form --> </div> </div> </div> </main>  </body></html>`;
}, "D:/0 to hero/astro js/FieldIQ/src/pages/login.astro", void 0);

const $$file = "D:/0 to hero/astro js/FieldIQ/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };

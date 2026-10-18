# Yoon & Kuba — Breathing Archives

Gotowe do GitHub Pages: instrukcja publikacji znajduje się w [GITHUB-PAGES.md](GITHUB-PAGES.md). Repozytorium powinno zawierać zawartość tego folderu w katalogu głównym. `npm run build` tworzy i sprawdza kompletną statyczną stronę w `out`; `npm start` służy do jej lokalnego podglądu.

An English-language, responsive fan archive built in the existing Next.js project. All twelve forms are translated from `../forms.txt`; the supplied illustrations remain the source of truth. The character biography follows the user’s supplied story for Yoon and Kuba.

## Run locally

```powershell
npm install
npm run dev
```

Open http://localhost:3000. For a production preview, run `npm run build`, then `npm start`. Run `npm run lint` and `npx tsc --noEmit` for code checks.

## Artwork and content

`public/art/asset-manifest.json` maps each optimized WebP to the exact original filename, dimensions, and correct form number. Original PNGs remain unchanged in the parent folder. Each form has a labeled technique plate and an alternate character illustration.

Filename discrepancies resolved against both `forms.txt` and the visible English image labels:

- `Szósta forma_ Goryeo — seledynowe fale-7.png`: Form 6, despite the `-7` suffix.
- `Siódma forma Hahoe — fałszywe odbicie-6.png`: Form 7, despite the `-6` suffix.
- `Dwunasta Forma_ Arirang — Wir Powracających Głosów-12.png`: “River of Returning Voices,” as stated in the text and illustration, rather than “Whirlpool.”
- `Jedenasta forma_ Pierwszy marsz — Niezłamana fala-11.png`: “March First,” as stated in the text and illustration.
- `Siedem gwiezdnych kroków pioruna-5.png`: an alternate Form 5 illustration with golden lightning imagery; it does not establish another technique or a lightning-derived breathing style.

The user’s later biography supersedes the initial proposed multigenerational origin: Yoon and her husband Kuba trained under Mitsuri in Love Breathing, then developed Korean Breathing through Water Breathing and Polish Breathing through Flame Breathing respectively. Yellow freesias are Yoon’s favorite flowers and gifts from Kuba, worn on her Corps uniform. Their shared aim is to avenge loved ones, defeat Muzan, and create a safer world for their children before growing their family. The source’s twelve technique descriptions and final-form limitation are retained.

## Design and accessibility

The main page uses server-rendered content. JavaScript is limited to artwork dialogs, gallery controls, mobile navigation, and restrained interface motion. Native anchor navigation and content work without animation or WebGL. Images are optimized, sized explicitly, and lazy-loaded below the hero. Viewer dialogs support keyboard focus containment, Escape, and focus restoration. Reduced-motion preferences disable decorative movement and smooth scrolling.

This is a fan-created character and breathing style inspired by Demon Slayer, with no claim to official canon or affiliation. Local delivery; no hosting, account, or external service is required.

GitHub Actions automatically sets `NEXT_PUBLIC_SITE_URL` to the Pages origin and `NEXT_PUBLIC_BASE_PATH` to the repository prefix. For local builds both default to localhost and an empty prefix. See GITHUB-PAGES.md.

## Visual revision — matching the selected concept

The selected concept now guides the larger hero crop, ornamental wave crest and wave lines, warm paper character spread, editorial serif text, water-and-petal background, curated gallery opening (main portrait, Sejong, Cheomseongdae), and portrait closing composition. All twelve forms and their source text remain intact.

`public/art/derived-assets.json` documents the two presentation assets made with built-in image generation. The background-extracted portrait is used in the light spread and closing; its viewer opens the unchanged original. The generated water artwork is decorative. The original 25-asset mapping remains unchanged.

Fidelity review covered six points: dominant illustration scale, three-line character heading, dark/light/celadon palette, body typography, water atmosphere and wave ornaments, and mixed-art gallery rhythm. The technique plates retain their supplied landscape proportions and source numbering where the mockup used invented sample captions. Mobile sections intentionally stack their contents.

## Motion and interaction

The archive now has viewport-triggered text and artwork reveals, pointer/scroll depth on the desktop hero, drifting petals and droplets, moving water ribbons and local ripple rings. Ambient effects pause outside the viewport and when the tab is hidden. A fixed pause/resume control stops decorative motion. Mobile uses six particles per scene and omits pointer parallax; reduced-motion preferences disable ambient animation and smooth scrolling.

A reading-progress line tracks the page. The technique navigation follows the visible form with an active underline and desktop name. Each technique plate can crossfade to its corresponding character illustration without changing layout; the viewer opens the currently selected artwork and retains Escape/focus restoration behavior. All original forms remain in order.

Validation included moving-versus-paused particle transforms, desktop parallax, active form tracking, illustration switching, viewer keyboard behavior, mobile navigation, and reduced-motion emulation at 1440, 768, and 390 pixels. Production build, lint and TypeScript checks pass. Chrome DevTools reported no console errors and zero layout shift in a local trace.

## Additional character perspectives

Four identity-referenced illustrations were generated with the built-in image tool from `../Wojowniczka Hanbok z Żółtymi Frezjami.png`. Full PNG deliverables are saved in `output/character-poses/`, with a prompt/asset inventory in `prompts-and-assets.json`. Optimized WebP copies are in `public/art/`.

- `yoon-current`: low twisting sword stance and turquoise arc — opening hero.
- `yoon-freesias`: seated, tucking favorite flowers into the uniform — character spread.
- `yoon-stillness`: seated beside a misty stream — story panorama.
- `yoon-dawn`: looking back over the shoulder — closing portrait.

The new portraits are also included in the gallery. Each of the four new section illustrations opens its own complete composition in the accessible viewer. The original character reference remains in the gallery. All twelve technique plates and their original matching alternate illustrations are unchanged; the new images are character studies, not additional numbered forms.

## Kuba / Polish Breathing

The `/kuba` route is linked from both desktop and mobile navigation. It shares the archive components with Yoon while using a crimson, ember and old-gold theme. Its story follows the established Mitsuri → Love → Flame → Polish Breathing lineage and the couple’s promise concerning Muzan and their family.

All twelve forms from `../polish breahting.txt` are presented in English, including heritage, the sixth form’s signature status, the three phases of White Eagle and its physical cost. The supplied origin proposal is superseded by the established character story. The comparison with Korean Breathing is included.

38 optimized assets live under `public/art/polish`; `asset-manifest.json` records their original filenames. Mapping follows embedded form labels and depicted movements rather than misleading source filename suffixes. Each form has a movement plate, separate character pose, and illuminated scroll. The gallery contains the main portrait, twelve poses and twelve scrolls. Fullscreen viewers, movement/pose switches, keyboard gallery controls, motion pause and reduced-motion behavior are shared with Yoon.

### Original Kuba perspectives

Four images created with the built-in image generator are integrated into the hero (`kuba-ember`), character (`kuba-freesias`), story panorama (`kuba-stillness`), and closing (`kuba-dawn`). They also appear at the start of the gallery, which now contains 29 entries. The original reference and all twelve form studies remain available. PNG originals and full prompts are saved in `output/character-poses/kuba-*`; optimized WebP assets are in `public/art/polish`. The two transparent portraits preserve their alpha channels.

Visual QA uses regular Playwright because the Browser plugin is not available. Checked desktop, tablet and phone widths (1440/768/390): no horizontal overflow, correct fullscreen artwork source, keyboard dismissal, all 12 forms and 29 gallery entries, no page or console errors. Production build, TypeScript and ESLint pass.

## GitHub Pages validation

Static export has been verified at `/` and `/breathing-archive/` on a plain local HTTP server. Both character pages support direct loading and refresh; images, CSS backgrounds, fonts, galleries, dialog images and social image URLs include the build-time prefix. Browser checks found no failed requests, runtime/console errors or mobile overflow. Code checks and the export verifier pass. The workflow is prepared locally; no GitHub repository or remote was configured in this workspace, so no live deployment has been performed.

# hashira

## Elemental interface

Both archives share an element-specific UI system: Yoon uses aqua glass, cool borders and rounded controls; Kuba uses dark burgundy metal, copper edges, amber gradients and rising embers. Primary/secondary buttons, navigation, form selectors, art switches, expansion controls, galleries and dialog viewers use consistent tokens. React context keeps the character theme inside portal-based artwork viewers. The static export includes the generated ember backdrop and resolves its repository prefix through `sitePath`.

The concept, ember background and generation prompts are saved in `output/elemental-ui/`. Browser QA covered both routes at 1440, 1024, 768, 390 and 360 px, image switches, themed dialogs, keyboard dismissal, gallery controls, animation pause and reduced motion; no overflow or runtime errors. The site is deployed at https://kubeusz04.github.io/hashira/.

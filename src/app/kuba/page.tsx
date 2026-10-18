/* Full document transitions keep each character’s page-level animation lifecycle isolated. */
import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import Image from "@/components/asset-image";
import { ArrowDown, ArrowUpRight, Flame } from "lucide-react";
import { Artwork, Gallery, SiteNav } from "@/components/archive";
import {
  ArchiveExperience,
  WaterAtmosphere,
  FormNavigation,
} from "@/components/experience";
import { polishForms, polishArt, finalPhases } from "@/data/polish-forms";
import { pad } from "@/data/forms";

export const metadata: Metadata = {
  title: "Kuba — The Polish Hashira | Polish Breathing",
  description:
    "Meet Kuba, the Polish Hashira. Twelve forms of Polish Breathing, a sabre forged through Flame, and a promise shared with Yoon.",
  openGraph: {
    title: "Kuba — The Polish Hashira",
    description: "Twelve forms. One unyielding flame.",
    images: [{ url: sitePath("/art/polish/kuba.webp") }],
  },
};
const chapters = [
  {
    title: "The flowers he gives her",
    text: "Yellow freesias are Yoon’s favorite flowers. Whenever Kuba gives them to her, she tucks the blossoms into her Demon Slayer Corps uniform. Beside his crimson robes and burning sabre, those small yellow flowers carry a quieter part of their life together.",
    more: "He fights with the woman who carries them. Each battle is bound to the same hope: that the people they love will have an ordinary life to return to.",
  },
  {
    title: "Their first shared breath",
    text: "Yoon and Kuba began by learning Love Breathing under Mitsuri. They chose it together, believing it suited them best. Their bond became a discipline: listening, matching the other’s rhythm, and learning how to move as two people with one purpose.",
    more: "During their training they also watched other masters. Different ways of moving began to speak to each of them, opening two paths from the foundation they shared.",
  },
  {
    title: "Following love back to flame",
    text: "Kuba followed Love Breathing toward its roots in Flame Breathing. Its explosive force became the foundation of his Polish Breathing: a style shaped by the sabre, the charge of winged hussars, the shifting accents of Polish dances, and a history of resolve.",
    more: "Yoon turned toward Water Breathing and developed Korean Breathing. Their techniques became distinct, but neither forgot Mitsuri’s teaching. Love remained the thread between water and flame.",
  },
  {
    title: "A world beyond Muzan",
    text: "Demons took people they loved. Kuba and Yoon fight to avenge those losses, and to do everything they can to create a better world for their children. Revenge gives their blades a direction; their family gives them a future.",
    more: "They want to grow their family. First, they have promised to make sure Muzan dies. They will take that next step when his shadow can no longer reach the life they hope to build.",
  },
];
const portraits = [
  {
    src: "/art/polish/kuba-ember.webp",
    title: "A blade that burns",
    label: "A new perspective / Motion",
    alt: "Kuba in a low twisting sabre stance, his crimson coat sweeping through a crescent of flame",
  },
  {
    src: "/art/polish/kuba-freesias.webp",
    title: "The flowers he gives her",
    label: "A new perspective / Freesias",
    alt: "Kuba seated, smiling softly as he ties a ribbon around yellow freesias for Yoon",
  },
  {
    src: "/art/polish/kuba-dawn.webp",
    title: "Beyond the battlefield",
    label: "A new perspective / Dawn",
    alt: "Kuba looking back over his shoulder, glasses catching the dawn light above his embroidered ivory coat",
  },
  {
    src: "/art/polish/kuba-stillness.webp",
    title: "A quiet promise",
    label: "A new perspective / Stillness",
    alt: "Kuba seated in a garden at dawn, looking down thoughtfully at yellow freesias in his hands",
  },
];
const gallery = [
  ...portraits,
  {
    src: "/art/polish/kuba.webp",
    title: "The Polish Hashira",
    label: "Character portrait",
    alt: "Kuba with glasses, crimson and ivory embroidered robes, and a glowing sabre",
  },
  ...polishForms.map((f) => ({
    src: polishArt(f.number, "art"),
    title: f.title,
    label: pad(f.number) + " / " + f.name,
    alt: "Kuba performing " + f.name + " — " + f.title,
  })),
  ...polishForms.map((f) => ({
    src: polishArt(f.number, "scroll"),
    title: f.name,
    label: "Illuminated scroll / " + pad(f.number),
    alt: "Illustrated parchment scroll of " + f.name + " — " + f.title,
  })),
];
export default function KubaPage() {
  return (
    <div className="polish-page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ArchiveExperience />
      <header className="site-header" id="top">
        <a href="#top" className="brand" aria-label="Polish Breathing — home">
          <Flame strokeWidth={0.8} />
          <span>
            Polish
            <br />
            Breathing
          </span>
        </a>
        <SiteNav character="kuba" />
      </header>
      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <WaterAtmosphere variant="petals" />
          <div className="ember-halo" aria-hidden="true" />
          <div className="hero-copy">
            <h1 id="hero-title">
              Kuba<span>The Polish Hashira</span>
            </h1>
            <div className="small-rule" />
            <p className="hero-poem">
              A heart that endures.
              <br />A blade that burns.
            </p>
            <p className="hero-intro">
              For those he lost. For Yoon beside him. For the world their
              children deserve to inherit.
            </p>
            <a className="text-link primary-link" href="#forms">
              Explore the twelve forms <ArrowUpRight />
            </a>
            <a className="text-link secondary-link" href="#character">
              Meet Kuba <ArrowDown />
            </a>
          </div>
          <div className="hero-portrait">
            <Artwork
              src="/art/polish/kuba-ember.webp"
              title="Kuba — A blade that burns"
              alt="Kuba in a low twisting sabre stance, his crimson coat sweeping through a crescent of flame"
              variant="hero"
              priority
            />
          </div>
          <div className="hero-bottom">
            <a href="#character">
              Scroll to discover <ArrowDown size={14} />
            </a>
          </div>
        </section>
        <section
          className="character light-section"
          id="character"
          aria-labelledby="character-title"
        >
          <div className="character-portrait">
            <Artwork
              src="/art/polish/kuba-freesias.webp"
              title="Kuba — The flowers he gives her"
              alt="Kuba seated, smiling softly as he ties a ribbon around yellow freesias for Yoon"
              variant="character"
            />
          </div>
          <div className="character-copy">
            <p className="section-label">01 / The Polish Hashira</p>
            <h2 id="character-title">
              Resolve
              <br />
              in every
              <br />
              <em>spark.</em>
            </h2>
            <p>
              Kuba’s strength begins with the people he loves. Beside his wife,
              Yoon, he fights to avenge their lost loved ones and protect a
              future their children can call their own.
            </p>
            <p>
              His Polish Breathing carries the force of Flame, the arcs of a
              sabre, and a rhythm learned through Love. Beneath its fierce
              attacks lives the same promise as the yellow freesias he gives
              Yoon: a life together beyond the battlefield.
            </p>
            <details className="character-extra">
              <summary>
                Character details <span>+</span>
              </summary>
              <dl className="character-details">
                {[
                  ["Identity", "Kuba · The Polish Hashira"],
                  ["Breathing style", "Polish Breathing"],
                  ["Wife", "Yoon · The Korean Hashira"],
                  ["Foundation", "Flame Breathing"],
                  ["Shared style", "Love Breathing · trained under Mitsuri"],
                  ["Weapon", "Ornamental Polish sabre"],
                ].map(([a, b]) => (
                  <div key={a}>
                    <dt>{a}</dt>
                    <dd>{b}</dd>
                  </div>
                ))}
              </dl>
            </details>
          </div>
          <div className="detail-strip" aria-label="Kuba’s swordsmanship">
            {portraits.slice(0, 3).map((portrait) => (
              <figure key={portrait.src}>
                <div>
                  <Image
                    src={portrait.src}
                    alt={portrait.alt}
                    fill
                    sizes="(max-width:700px)80vw,45vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <figcaption>{portrait.title}</figcaption>
              </figure>
            ))}{" "}
          </div>
        </section>
        <section
          className="story-section section-shell"
          id="story"
          aria-labelledby="story-title"
        >
          <div className="story-heading">
            <div>
              <p className="section-label">Kuba & Yoon / Their story</p>
              <h2 id="story-title">
                An ember,
                <br />
                <em>and a promise.</em>
              </h2>
            </div>
            <p className="story-lead">
              The fire he carries is shaped by love. The future they want is
              worth every battle.
            </p>
          </div>
          <figure className="story-panorama">
            <Artwork
              src="/art/polish/kuba-stillness.webp"
              title="Kuba — A quiet promise"
              alt="Kuba seated in a quiet garden at dawn, holding yellow freesias with his sabre safely sheathed"
              variant="scene"
            />
            <figcaption>
              <span>A quiet promise</span>
              <span>The flowers he gives her.</span>
            </figcaption>
          </figure>
          <div className="couple-portraits">
            <figure>
              <Artwork
                src="/art/polish/kuba-freesias.webp"
                title="Kuba — A gift for Yoon"
                alt="Kuba carefully tying a ribbon around a bouquet of yellow freesias"
              />
              <figcaption>Kuba / Flame & resolve</figcaption>
            </figure>
            <figure>
              <Artwork
                src="/art/yoon-freesias.webp"
                title="Yoon — The flowers he gives her"
                alt="Yoon with the yellow freesias Kuba gives her"
              />
              <figcaption>Yoon / Water & grace</figcaption>
            </figure>
          </div>
          <div className="story-chapters">
            {chapters.map((c, i) => (
              <article className="story-chapter" key={c.title}>
                <span className="chapter-number" aria-hidden="true">
                  {pad(i + 1)}
                </span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <p>{c.more}</p>
              </article>
            ))}
          </div>
          <div className="shared-breath">
            <div className="duet-heading">
              <p className="section-label">Love Breathing / In harmony</p>
              <h3>
                Two blades.
                <br />
                <em>One shared breath.</em>
              </h3>
            </div>
            <div className="duet-copy">
              <p>
                When they fight together, Kuba and Yoon blend Polish Breathing
                and Korean Breathing with the Love Breathing they learned from
                Mitsuri. They synchronize their breaths until each movement
                answers the other: a change of tempo, a sweeping cut, an opening
                that becomes a partner’s strike.
              </p>
              <p>
                His flame and her water move in perfect harmony, like a dance.
                Their shared training lives in every turn.
              </p>
              <a className="text-link" href={sitePath("/")}>
                Discover Yoon’s path <ArrowUpRight />
              </a>
            </div>
            <div className="duet-current" aria-hidden="true">
              <svg viewBox="0 0 800 120" fill="none">
                <path d="M0 95C180-80 400 200 800 25" />
                <path d="M0 25C250 200 450-80 800 95" />
              </svg>
              <span>Polish Breathing</span>
              <span>Love Breathing</span>
              <span>Korean Breathing</span>
            </div>
          </div>
        </section>
        <section
          className="breathing section-shell"
          id="breathing"
          aria-labelledby="breathing-title"
        >
          <WaterAtmosphere />
          <div className="philosophy">
            <p className="section-label">02 / The philosophy of flame</p>
            <h2 id="breathing-title">
              Polish
              <br />
              <em>Breathing.</em>
            </h2>
            <blockquote>
              “A flame may be extinguished,
              <br />
              but its embers will always rise again.”
            </blockquote>
            <p>
              Descended from Flame Breathing, this is a style of explosive
              acceleration, powerful cuts and unyielding resolve. Where Yoon
              adapts around resistance, Kuba commits to breaking through it.
            </p>
            <p>
              Crimson and orange flare along the sabre’s edge. Gold sparks
              scatter through sharp, jagged flames that become hussar wings,
              sweeping crescents and the silver-white silhouette of an eagle.
            </p>
          </div>
          <div className="principles">
            {[
              [
                "01",
                "Force",
                "Commit power to the opening. Break the guard before it can close.",
              ],
              [
                "02",
                "Rhythm",
                "Change the accent. Let the sabre’s next cut arrive before it is expected.",
              ],
              [
                "03",
                "Resolve",
                "Carry the ember forward, even when the flame falls quiet.",
              ],
            ].map(([n, h, p]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
          <details className="origin-note">
            <summary>
              The roots of Polish Breathing <span>+</span>
            </summary>
            <p>
              Kuba first trained in Love Breathing alongside Yoon under Mitsuri.
              While observing other masters, he followed Love’s roots toward
              Flame Breathing. He developed Polish Breathing from that
              foundation, adding circular sabre cuts, changing rhythms and
              counterattacks inspired by Polish heritage. Love remains their
              shared language when they fight together.
            </p>
          </details>
          <div className="style-comparison">
            <p className="section-label">Two paths / One purpose</p>
            <div className="comparison-scroll">
              <table>
                <caption>Polish & Korean Breathing</caption>
                <thead>
                  <tr>
                    <th scope="col">Discipline</th>
                    <th scope="col">Kuba / Polish Breathing</th>
                    <th scope="col">Yoon / Korean Breathing</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Foundation", "Flame", "Water"],
                    [
                      "Specialty",
                      "Breaking the guard",
                      "Controlling the tempo",
                    ],
                    ["Movement", "Explosive & dynamic", "Fluid & deceptive"],
                    [
                      "Inspiration",
                      "Sabre, cavalry charges, national dances",
                      "Taekkyeon, Korean history & traditions",
                    ],
                    ["Strength", "Offensive power", "Adaptability"],
                    [
                      "Cost",
                      "High energy consumption",
                      "Less force in a single cut",
                    ],
                  ].map(([a, b, c]) => (
                    <tr key={a}>
                      <th scope="row">{a}</th>
                      <td>{b}</td>
                      <td>{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section
          className="forms-section"
          id="forms"
          aria-labelledby="forms-title"
        >
          <div className="forms-heading section-shell">
            <p className="section-label">03 / The technique archive</p>
            <h2 id="forms-title">
              Twelve forms.
              <br />
              <em>One unyielding flame.</em>
            </h2>
            <p>
              From the first spark to the eagle’s ascent.
              <br />A history of resolve, written with a sabre.
            </p>
          </div>
          <FormNavigation entries={polishForms} />
          <div className="form-list section-shell">
            {polishForms.map((f) => (
              <article
                className={
                  "form-row " + (f.number === 6 ? "signature-form" : "")
                }
                id={"form-" + pad(f.number)}
                data-form={f.number}
                key={f.number}
                aria-labelledby={"title-" + f.number}
              >
                <div className="form-art">
                  <Artwork
                    src={polishArt(f.number)}
                    alternate={polishArt(f.number, "art")}
                    title={
                      "Form " + pad(f.number) + ": " + f.name + " — " + f.title
                    }
                    alt={"Technique study of " + f.name + " — " + f.title}
                    variant="plate"
                  />
                </div>
                <div className="form-copy">
                  <div className="form-meta">
                    <span className="form-number">{pad(f.number)}</span>
                    <span>
                      {f.role}
                      {f.number === 6 ? (
                        <b>Signature technique</b>
                      ) : f.number === 12 ? (
                        <b>Ultimate technique</b>
                      ) : null}
                    </span>
                  </div>
                  <h3 id={"title-" + f.number}>
                    {f.name}
                    <em>{f.title}</em>
                  </h3>
                  <p>{f.description}</p>
                  {f.number === 12 ? (
                    <ol className="final-phases">
                      {finalPhases.map((p, i) => (
                        <li key={p.name}>
                          <span>
                            {pad(i + 1)} / {p.name}
                          </span>
                          <p>{p.text}</p>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                  <details open>
                    <summary>
                      Heritage & inspiration <span>+</span>
                    </summary>
                    <p>{f.heritage}</p>
                  </details>
                  {f.limitation ? (
                    <p className="limitation">
                      <strong>The cost of the final form</strong>
                      {f.limitation}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className="gallery-section"
          id="gallery"
          aria-labelledby="gallery-title"
        >
          <div className="section-shell">
            <p className="section-label">04 / Artwork gallery</p>
            <div className="gallery-heading">
              <h2 id="gallery-title">
                Studies <em>in flame.</em>
              </h2>
              <p>
                Sabre movements.
                <br />
                Illuminated histories.
              </p>
            </div>
            <Gallery items={gallery} />
          </div>
        </section>
        <section
          className="closing section-shell"
          aria-labelledby="closing-title"
        >
          <WaterAtmosphere variant="petals" />
          <div className="closing-copy">
            <h2 id="closing-title">
              Let the
              <br />
              embers
              <br />
              <em>rise again.</em>
            </h2>
            <p>
              For those they lost.
              <br />
              For the life they will build together.
            </p>
            <a className="text-link" href={sitePath("/")}>
              Follow Yoon’s current <ArrowUpRight />
            </a>
          </div>
          <div className="closing-image">
            <Artwork
              src="/art/polish/kuba-dawn.webp"
              title="Kuba — Beyond the battlefield"
              alt="Kuba looking back over his shoulder with a hopeful smile, his embroidered ivory coat caught in the breeze"
              variant="closing"
            />
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a href="#top" className="brand">
          <Flame strokeWidth={0.8} />
          <span>
            Polish
            <br />
            Breathing
          </span>
        </a>
        <a href={sitePath("/")}>
          Yoon · The Korean Hashira <ArrowUpRight size={16} />
        </a>
      </footer>
    </div>
  );
}

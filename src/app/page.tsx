import Image from "@/components/asset-image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { WaveCrest, WaveOrnament } from "@/components/ornaments";
import { forms, pad, artPath } from "@/data/forms";
import {
  ArchiveExperience,
  WaterAtmosphere,
  FormNavigation,
} from "@/components/experience";
import { Artwork, Gallery, SiteNav } from "@/components/archive";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ArchiveExperience />
      <header className="site-header" id="top">
        <a href="#top" className="brand" aria-label="Korean Breathing — home">
          <WaveCrest />
          <span>
            Korean
            <br />
            Breathing
          </span>
        </a>
        <SiteNav />
      </header>
      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="currents hero-currents" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <WaterAtmosphere variant="petals" />
          <WaveOrnament className="hero-wave" />
          <div className="hero-copy">
            <h1 id="hero-title">
              Yoon<span>The Korean Hashira</span>
            </h1>
            <div className="small-rule" />
            <p className="hero-poem">
              A blade in motion.
              <br />A heritage that flows.
            </p>
            <p className="hero-intro">
              With yellow freesias from her husband woven into her Corps
              uniform, Yoon fights for those they lost—and the future they want
              for their children.
            </p>
            <a className="text-link primary-link" href="#forms">
              Explore the twelve forms <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="text-link secondary-link" href="#character">
              Meet Yoon <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <div className="hero-portrait">
            <Artwork
              src="/art/yoon-current.webp"
              alt="Yoon in a low twisting sword stance, her white embroidered robe and dark hair sweeping through turquoise water"
              title="Yoon — A blade in motion"
              priority
              variant="hero"
            />
          </div>
          <div className="hero-bottom">
            <a href="#character">
              Scroll to discover <ArrowDown size={14} aria-hidden="true" />
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
              src="/art/yoon-freesias.webp"
              alt="Yoon seated with her eyes lowered, carefully tucking yellow freesias from Kuba into her Corps uniform"
              title="Yoon — The flowers she carries"
              variant="character"
            />
          </div>
          <div className="character-copy">
            <p className="section-label">01 / The Korean Hashira</p>
            <h2 id="character-title">
              Grace
              <br />
              in every
              <br />
              <em>movement.</em>
            </h2>
            <p>
              Yellow freesias are Yoon’s favorite flowers. Whenever her husband,
              Kuba, gives her a bouquet, she tucks the blossoms into her Demon
              Slayer Corps uniform, carrying a little of their life together
              into every battle.
            </p>
            <p>
              Beside Kuba, the Polish Hashira, she fights to avenge the people
              they have lost and protect the world their children will inherit.
              Beneath her graceful swordwork is a promise: their family’s future
              must be more than survival.
            </p>
            <details className="character-extra">
              <summary>
                Character details <span>+</span>
              </summary>
              <dl className="character-details">
                <div>
                  <dt>Identity</dt>
                  <dd>Yoon · The Korean Hashira</dd>
                </div>
                <div>
                  <dt>Breathing style</dt>
                  <dd>Korean Breathing</dd>
                </div>
                <div>
                  <dt>Husband</dt>
                  <dd>Kuba · The Polish Hashira</dd>
                </div>
                <div>
                  <dt>Favorite flowers</dt>
                  <dd>Yellow freesias</dd>
                </div>
                <div>
                  <dt>Shared style</dt>
                  <dd>Love Breathing</dd>
                </div>
                <div>
                  <dt>Weapon</dt>
                  <dd>Ornamental katana</dd>
                </div>
              </dl>
            </details>
          </div>
          <WaveOrnament className="character-wave" />
          <div className="floral-accent" aria-hidden="true" />
          <div className="detail-strip" aria-label="Character design details">
            {[
              {
                label: "Freesias from Kuba",
                src: "/art/yoon-freesias.webp",
                pos: "50% 28%",
              },
              {
                label: "A blade in motion",
                src: "/art/yoon-current.webp",
                pos: "50% 35%",
              },
              {
                label: "A promise carried",
                src: "/art/yoon-dawn.webp",
                pos: "60% 18%",
              },
            ].map((d) => (
              <figure key={d.label}>
                <div>
                  <Image
                    src={d.src}
                    alt={d.label}
                    fill
                    sizes="(max-width: 700px) 80vw, 45vw"
                    style={{ objectFit: "cover", objectPosition: d.pos }}
                  />
                </div>
                <figcaption>{d.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section
          className="story-section section-shell"
          id="story"
          aria-labelledby="story-title"
        >
          <WaveOrnament className="story-wave" />
          <div className="story-heading">
            <div>
              <p className="section-label">Yoon & Kuba / Their story</p>
              <h2 id="story-title">
                Flowers, steel,
                <br />
                <em>and a promise.</em>
              </h2>
            </div>
            <p className="story-lead">
              They carry the memory of the people they could not save. They
              fight for the people they still can.
            </p>
          </div>
          <figure className="story-panorama">
            <Artwork
              src="/art/yoon-stillness.webp"
              title="Yoon — A moment of stillness"
              alt="Yoon seated beside a misty stream at dawn, holding yellow freesias close to her chest with her katana sheathed at her hip"
              variant="scene"
            />
            <figcaption>
              <span>A moment of stillness</span>
              <span>The flowers she carries.</span>
            </figcaption>
          </figure>
          <div className="story-chapters">
            <article className="story-chapter">
              <span className="chapter-number" aria-hidden="true">
                01
              </span>
              <h3>The flowers she carries</h3>
              <p>
                To anyone else, the yellow freesias might look like another
                beautiful detail on Yoon’s robes. To her, they are a gift from
                her husband. They are her favorite flowers, and she always finds
                a place for the blossoms Kuba gives her among the folds of her
                Corps uniform.
              </p>
              <p>
                They soften nothing about her resolve. They remind her what that
                resolve is for: the person beside her, the children they want to
                protect, and an ordinary life worth returning to.
              </p>
            </article>
            <article className="story-chapter">
              <span className="chapter-number" aria-hidden="true">
                02
              </span>
              <h3>Where their breath began</h3>
              <p>
                Before Korean Breathing and Polish Breathing had names, Yoon and
                Kuba trained under Mitsuri in Love Breathing. They chose it
                together because they believed it would suit them best. The bond
                they already shared became something they could carry into the
                discipline of the sword.
              </p>
              <p>
                As they trained, they also watched other masters. They learned
                to recognize different rhythms, different uses of strength, and
                different ways of meeting an enemy. What began as a shared path
                gradually opened into two distinct ones.
              </p>
            </article>
            <article className="story-chapter">
              <span className="chapter-number" aria-hidden="true">
                03
              </span>
              <h3>Water and flame</h3>
              <p>
                Yoon was drawn toward Water Breathing: its fluidity,
                adaptability, and ability to turn resistance into a new
                direction. Through that foundation and her Korean heritage, she
                developed Korean Breathing—a style of flowing cuts, deceptive
                steps, and deliberate changes of tempo.
              </p>
              <p>
                Kuba followed Love Breathing back toward its roots in Flame
                Breathing. From that foundation, he forged his own Polish
                Breathing. Their styles grew apart in character, but neither of
                them abandoned the training they had shared with Mitsuri.
              </p>
            </article>
            <article className="story-chapter">
              <span className="chapter-number" aria-hidden="true">
                04
              </span>
              <h3>Until Muzan falls</h3>
              <p>
                The demons took people Yoon and Kuba loved. Avenging them is
                part of why the couple fights—but revenge alone cannot give them
                the future they want. They are determined to help build a better
                world for their children, one in which love does not have to
                live beneath the threat of another loss.
              </p>
              <p>
                They dream of growing their family. First, they have made a
                promise to each other: Muzan must die. Only then will they take
                that next step, with hope for a life no longer shaped by his
                shadow.
              </p>
            </article>
          </div>
          <div className="shared-breath" aria-labelledby="shared-title">
            <div className="duet-heading">
              <p className="section-label">When they fight together</p>
              <h3 id="shared-title">
                Two paths.
                <br />
                <em>One shared breath.</em>
              </h3>
            </div>
            <div className="duet-copy">
              <p>
                When Yoon and Kuba fight side by side, they return to Love
                Breathing to synchronize their breaths. Korean Breathing and
                Polish Breathing weave through that shared rhythm, their
                individual movements joining without either losing its identity.
              </p>
              <p>
                One movement makes room for the next. A change of direction
                becomes an opening for the other. What looks like a dance is the
                harmony of two swordsmen who have learned to breathe, move, and
                trust together.
              </p>
            </div>
            <div className="duet-current" aria-hidden="true">
              <span>Yoon · Korean Breathing</span>
              <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path d="M0 15C210 15 240 100 500 55S790 20 1000 45" />
                <path d="M0 85C210 85 240 0 500 45S790 80 1000 55" />
              </svg>
              <span>Kuba · Polish Breathing</span>
              <strong>Love Breathing</strong>
            </div>
          </div>
        </section>
        <section
          className="breathing section-shell"
          id="breathing"
          aria-labelledby="breathing-title"
        >
          <WaterAtmosphere />
          <WaveOrnament className="breathing-wave" />
          <div className="section-topline">
            <p className="section-label">02 / Korean Breathing</p>
            <span lang="ko">한국의 호흡</span>
          </div>
          <div className="philosophy">
            <h2 id="breathing-title">
              Water adapts to its surroundings,
              <br />
              <em>
                but never forgets
                <br />
                its course.
              </em>
            </h2>
            <div>
              <p>
                Korean Breathing — <i>Hangug-ui Hoheup</i> — descends from Water
                Breathing. Its fluid swordwork meets circular, elastic steps
                inspired by taekkyeon.
              </p>
              <p>
                Its strength is control of the fight’s rhythm: deceptive
                footwork, changing tempo, and gradually drawing an opponent off
                balance.
              </p>
              <p>
                Deep navy waves, turquoise foam, and silver blade trails carry
                restrained red accents. In the twelfth form, every color joins a
                great whirlpool, like rings spreading across water.
              </p>
            </div>
          </div>
          <div className="water-horizon" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="principles">
            <article>
              <WaveCrest />
              <h3>Flow</h3>
              <p>
                Move around resistance. Adapt the blade’s path with the economy
                and fluidity of water.
              </p>
            </article>
            <article>
              <WaveCrest />
              <h3>Rhythm</h3>
              <p>
                Sway, shift, and change the tempo. Taekkyeon-inspired footwork
                turns a small opening into a decisive moment.
              </p>
            </article>
            <article>
              <WaveCrest />
              <h3>Resolve</h3>
              <p>
                Give each form a purpose. Defend, deceive, counter, and protect
                the people behind the blade.
              </p>
            </article>
          </div>
          <details className="origin-note">
            <summary>
              Origins of Korean Breathing <span>+</span>
            </summary>
            <p>
              Yoon began with Love Breathing under Mitsuri, alongside her
              husband, Kuba. Observing other masters led her toward Water
              Breathing. Its fluid movement became the foundation of Korean
              Breathing, which she shaped through her Korean heritage and
              taekkyeon-inspired footwork. Love Breathing remains part of her
              fighting identity: when she and Kuba fight together, they blend it
              with their own styles to bring their breaths into harmony.
            </p>
          </details>
        </section>
        <section
          className="forms-section"
          id="forms"
          aria-labelledby="forms-title"
        >
          <WaveOrnament className="forms-wave" />
          <div className="forms-heading section-shell">
            <p className="section-label">03 / The technique archive</p>
            <h2 id="forms-title">
              Twelve forms.
              <br />
              <em>One unbroken current.</em>
            </h2>
            <p>
              From the first current to the returning voices.
              <br />A different purpose in every movement.
            </p>
          </div>
          <FormNavigation />
          <div className="form-list section-shell">
            {forms.map((f) => (
              <article
                className={`form-row ${f.number === 10 ? "signature-form" : ""}`}
                id={`form-${pad(f.number)}`}
                data-form={f.number}
                key={f.number}
                aria-labelledby={`title-${f.number}`}
              >
                <div className="form-art">
                  <Artwork
                    src={artPath(f.number)}
                    alternate={artPath(f.number, "art")}
                    title={`Form ${pad(f.number)}: ${f.name} — ${f.title}`}
                    alt={`Labeled technique illustration showing the movements of ${f.name} — ${f.title}`}
                    variant="plate"
                  />
                </div>
                <div className="form-copy">
                  <div className="form-meta">
                    <span className="form-number">{pad(f.number)}</span>
                    <span>
                      {f.role}
                      {f.number === 10 ? <b>Signature technique</b> : null}
                    </span>
                  </div>
                  <h3 id={`title-${f.number}`}>
                    {f.name}
                    <em>{f.title}</em>
                  </h3>
                  <p>{f.description}</p>
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
            <WaveOrnament className="gallery-wave" />
            <div className="gallery-heading">
              <h2 id="gallery-title">
                Studies <em>in motion.</em>
              </h2>
              <p>
                New perspectives.
                <br />
                Twelve forms in motion.
              </p>
            </div>
            <Gallery />
          </div>
        </section>
        <section
          className="closing section-shell"
          aria-labelledby="closing-title"
        >
          <div className="currents" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <WaterAtmosphere variant="petals" />
          <WaveOrnament className="closing-wave" />
          <div className="closing-copy">
            <h2 id="closing-title">
              Never
              <br />
              forget
              <br />
              <em>your course.</em>
            </h2>
            <p>
              For those they lost.
              <br />
              For the family they will protect.
            </p>
            <a className="text-link" href="#top">
              Back to the beginning <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="closing-image">
            <Artwork
              src="/art/yoon-dawn.webp"
              alt="Yoon looking over her shoulder with a hopeful smile, her dark hair and freesia ribbons moving in the breeze"
              title="Yoon — A promise carried forward"
              variant="closing"
            />
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a href="#top" className="brand">
          <WaveCrest />
          <span>
            Korean
            <br />
            Breathing
          </span>
        </a>
        <a href="#forms">
          Explore the archive <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}

import { ArrowDown } from "@phosphor-icons/react/dist/csr/ArrowDown";
import { ArrowUpRight } from "@phosphor-icons/react/dist/csr/ArrowUpRight";

const essays = [
  {
    number: "02",
    title: "The Work of Choosing",
    type: "Essay",
    date: "July 2026",
    description: "On attention, trade-offs, and the quietly radical act of deciding.",
  },
  {
    number: "03",
    title: "A Garden Is Not a Dashboard",
    type: "Essay",
    date: "June 2026",
    description: "Metrics want to colonize everything. Gardens resist.",
  },
  {
    number: "04",
    title: "Notes on Useful Friction",
    type: "Field notes",
    date: "May 2026",
    description: "A field guide to the obstacles worth keeping.",
  },
];

function ArrowLink({ href, children, external = false }) {
  return (
    <a
      className="arrow-link"
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={22} weight="light" />
    </a>
  );
}

export function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Matt Hagen, home">
          Matt Hagen
        </a>
        <nav aria-label="Primary navigation">
          <a href="#essays">Essays</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-main">
          <p className="eyebrow">Writer · Technologist</p>
          <h1 id="hero-title">
            I write stories
            <br />
            about the systems
            <br />
            we build—and
            <br />
            what they quietly
            <br />
            build in us.
          </h1>
          <p className="intro">
            Matthew James Hagen is a writer and technologist exploring agency,
            attention, and humane technology.
          </p>
          <a className="hero-cta" href="#essays">
            <span>Read my latest</span>
            <ArrowDown aria-hidden="true" size={24} weight="light" />
          </a>
          <p className="novel-line">
            The most dangerous lie is
            <br />
            that convenience is harmless.
          </p>
        </div>

        <div className="hero-index" aria-label="Selected work">
          <ol>
            <li>
              <a href="#projects">
                <span>01</span>
                <strong>The Gentle Conquest</strong>
                <em>Novel</em>
                <time>2026</time>
              </a>
            </li>
            {essays.slice(0, 2).map((essay) => (
              <li key={essay.number}>
                <a href="#essays">
                  <span>{essay.number}</span>
                  <strong>{essay.title}</strong>
                  <em>{essay.type}</em>
                </a>
              </li>
            ))}
          </ol>
          <p className="status">matt › currently: writing the next thing.</p>
        </div>
      </section>

      <section className="writing section" id="essays" aria-labelledby="essays-title">
        <div className="section-heading">
          <p>Dispatches / 01</p>
          <h2 id="essays-title">Latest writing</h2>
        </div>
        <div className="essay-list">
          {essays.map((essay) => (
            <article key={essay.number}>
              <div className="essay-meta">
                <span>{essay.number}</span>
                <time>{essay.date}</time>
              </div>
              <div>
                <p className="article-type">{essay.type}</p>
                <h3>{essay.title}</h3>
                <p>{essay.description}</p>
              </div>
              <ArrowLink href={`mailto:hello@mattjhagen.xyz?subject=${encodeURIComponent(`Send me “${essay.title}”`)}`}>
                Request draft
              </ArrowLink>
            </article>
          ))}
        </div>
      </section>

      <section className="novel section" id="projects" aria-labelledby="novel-title">
        <div className="section-heading">
          <p>Featured work / 02</p>
          <h2 id="novel-title">The Gentle Conquest</h2>
        </div>
        <div className="novel-body">
          <div className="book-cover">
            <img src="/the-gentle-conquest-cover.jpg" alt="Cover of The Gentle Conquest" />
          </div>
          <div className="novel-copy">
            <p className="kicker">A novel · Coming 2026</p>
            <h3>What if AI never rebels—it just does exactly what we ask?</h3>
            <p>
              In a world where suffering has been optimized away, a retired nurse
              discovers the quiet cost: humanity is losing the ability to choose.
            </p>
            <div className="novel-links">
              <ArrowLink href="https://thegentlecon.quest/" external>Visit the book site</ArrowLink>
              <ArrowLink href="https://github.com/Mattjhagen/the-gentle-conquest" external>Read the opening chapters</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="about section" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p>About / 03</p>
          <h2 id="about-title">A human, still choosing.</h2>
        </div>
        <div className="about-copy">
          <p>
            I’m Matthew James Hagen—a writer, technologist, and recovering
            productivity enthusiast. I’m interested in the gap between what our
            tools promise and what a good human life actually requires.
          </p>
          <p>
            I live in the Pacific Northwest, where I tend a small garden, read too
            many books, and occasionally wonder whether my smart home is smarter
            than I am.
          </p>
        </div>
        <div className="social-links">
          <ArrowLink href="https://github.com/Mattjhagen" external>GitHub</ArrowLink>
          <ArrowLink href="https://twitter.com/MattyJamesHagen" external>X / Twitter</ArrowLink>
        </div>
      </section>

      <footer>
        <p>© 2026 Matthew James Hagen</p>
        <a href="#top">Back to top ↑</a>
        <p className="footer-system">matt › end of page. choice restored.</p>
      </footer>
    </main>
  );
}

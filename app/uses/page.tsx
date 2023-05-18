import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Uses</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Here's what tech I'm currently using for coding, videos, and music.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>13&quot; Macbook Pro M2 (2022)</li>
          <li>31.5&quot; LG 32QN600</li>
          <li>Logitech MX Master 3 Mouse</li>
          <li>Apple Magic Keyboard</li>
          <li>Magicforce Mechanical Keyboard</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>
            Editor: VSCode (
            <a href="https://gist.github.com/hayatibis/a3b901f709d862a35d823ee44ffffccb">
              Settings / Extensions
            </a>
            )
          </li>
          <li>Theme: Noctis Azureus</li>
          <li>Terminal: Hyper / zsh</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>Wakatime</li>
        </ul>
        <h3 id="music">Music</h3>
        <ul>
          <li>Akai MPK mini play 3</li>
        </ul>
        <h3 id="other-tech">Other Tech</h3>
        <ul>
          <li>Apple Airpods</li>
          <li>Apple Watch</li>
          <li>Apple iPhone</li>
        </ul>
      </div>
    </section>
  );
}

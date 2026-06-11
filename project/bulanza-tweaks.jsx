/* Tweaks — BULANZALAWFIRM
   accent / fond / typo titres — appliqués via variables CSS sur :root */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#8B2635",
  "fond": "pierre",
  "titres": "Space Grotesk"
}/*EDITMODE-END*/;

const ACCENT_ON_DARK = {
  "#8B2635": "#C04B5C",
  "#2F4538": "#6E8F77",
  "#5A4632": "#A88B66"
};

function BulanzaTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--accent", t.accent);
    r.setProperty("--accent-on-dark", ACCENT_ON_DARK[t.accent] || "#C04B5C");
    r.setProperty("--bg", t.fond === "béton" ? "#D4D0C8" : "#E8E6E1");
    r.setProperty("--font-display",
      t.titres === "Archivo Black"
        ? '"Archivo Black", "Space Grotesk", sans-serif'
        : '"Space Grotesk", sans-serif');
  }, [t]);

  return (
    <TweaksPanel>
      <TweakSection label="Palette" />
      <TweakColor label="Accent" value={t.accent}
                  options={["#8B2635", "#2F4538", "#5A4632"]}
                  onChange={(v) => setTweak("accent", v)} />
      <TweakRadio label="Fond" value={t.fond}
                  options={["pierre", "béton"]}
                  onChange={(v) => setTweak("fond", v)} />
      <TweakSection label="Typographie" />
      <TweakRadio label="Titres" value={t.titres}
                  options={["Space Grotesk", "Archivo Black"]}
                  onChange={(v) => setTweak("titres", v)} />
    </TweaksPanel>
  );
}

const tweaksRoot = document.createElement("div");
document.body.appendChild(tweaksRoot);
ReactDOM.createRoot(tweaksRoot).render(<BulanzaTweaks />);

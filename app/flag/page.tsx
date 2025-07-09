import Script from "next/script";

export default function FlagPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">🤫 Shhhhhh...</h1>

      <p className="text-lg">
        Sometimes secrets are hidden in plain sight. Or maybe they're whispering in a place you can't quite see?
      </p>
      <br />
      <p>
        Where's the flag? <br />
        Keep your eyes open and try to visit other things?
      </p>
      <Script
        id="console-log"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `console.log("83116971143279100121115115101121");`,
        }}
      />
    </main>
  );
}

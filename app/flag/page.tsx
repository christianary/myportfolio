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
        keep your eyes open and xxxx xxxxxxx xxx...
      </p>
      <Script
        id="flag-console-log"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `console.log("102108971031239710410495121111117951021111171101009510912195115101991141011169510210897103125");`,
        }}
      />
    </main>
  );
}

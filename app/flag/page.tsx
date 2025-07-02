import Script from "next/script";

export default function FlagPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">🤫 Secret Page</h1>

      <p className="text-lg">
        Congrats! You found the secret page.
      </p>
      <Script
        id="flag-console-log"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `console.log("flag{ahh_you_found_my_secret_flag}");`,
        }}
      />
    </main>
  );
}

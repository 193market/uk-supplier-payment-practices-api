// UK Supplier Payment Practices API — quick start (Node 18+, built-in fetch).
// Set RAPIDAPI_KEY to the key shown on uk-supplier-payment-practices at rapidapi.com after subscribing to the free plan.
const HOST = "uk-supplier-payment-practices.p.rapidapi.com";
const KEY = process.env.RAPIDAPI_KEY;

async function call(path) {
  const res = await fetch(`https://${HOST}${path}`, {
    headers: { "X-RapidAPI-Key": KEY, "X-RapidAPI-Host": HOST },
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
}

// Find a company that files reports
call("/v1/companies/search?q=Tesco&limit=3").then((d) => console.log(JSON.stringify(d, null, 2).slice(0, 2000)));

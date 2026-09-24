# UK Supplier Payment Practices API

How fast large UK companies pay suppliers: days to pay, late share, trend and benchmark against ~9,000 reporters.

**Try it (free tier for evaluation):** [https://rapidapi.com/193market/api/uk-supplier-payment-practices](https://rapidapi.com/193market/api/uk-supplier-payment-practices) · also on [api.market](https://api.market/store/193market/uk-supplier-payment-practices)

How fast do large UK companies pay their suppliers? Average days to pay, share of invoices paid late, payment terms and trend for about 10,000 companies, from the statutory Payment Practices Reporting filings. One call returns the latest figures, the history and how the company compares.

## Who uses it

Credit controllers setting terms for a UK customer, invoice-finance and factoring platforms pricing a debtor, procurement teams checking a buyer, B2B marketplaces showing 'pays in N days'.

## Quick start

Subscribe to the free BASIC plan on RapidAPI, copy your `X-RapidAPI-Key`, then:

```bash
curl "https://uk-supplier-payment-practices.p.rapidapi.com/v1/companies/search?q=Tesco&limit=3" \
  -H "X-RapidAPI-Key: $RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: uk-supplier-payment-practices.p.rapidapi.com"
```

Python and Node examples are in [`examples/`](examples/). Both read the key from the `RAPIDAPI_KEY` environment variable.

Other calls worth trying:
- Latest figures, history, benchmark and signals for one company (Companies House number): `GET /v1/companies/00519500`
- How UK large companies pay, across all latest reports: `GET /v1/benchmarks`

## Example response

`GET /v1/companies/search?q=Tesco&limit=3` — Find a company that files reports:

```json
{
  "query": "Tesco",
  "count": 3,
  "results": [
    {
      "company_number": "04780736",
      "company_name": "TESCO MOBILE LIMITED",
      "reports": 18,
      "first_period_end": "2018-06-30",
      "last_period_end": "2026-06-30",
      "match_type": "prefix"
    },
    {
      "company_number": "00519500",
      "company_name": "TESCO STORES LIMITED",
      "reports": 16,
      "first_period_end": "2018-08-26",
      "last_period_end": "2026-03-01",
      "match_type": "prefix"
    },
    "..."
  ],
  "data_freshness": {
    "latest_filing": "2026-09-23",
    "built_at": "2026-09-24T05:00:34+00:00"
  },
  "attribution": {
    "source": "UK Payment Practices Reporting, Department for Business and Trade",
    "source_url": "https://check-payment-practices.service.gov.uk/",
    "license": "Contains public sector information licensed under the Open Government Licence v3.0.",
    "license_url": "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/",
    "changes": "Reports grouped by company number, figures typed, free-text answers omitted (read them at source_url), implausible values flagged, benchmarks and signals computed by this API.",
    "notice": "Figures are as filed by each company and are not verified by the UK government or by this API. This API is not affiliated with or endorsed by the UK government."
  }
}
```

## Endpoints

| Method | Path | What it does | Parameters (* required) |
|---|---|---|---|
| GET | `/health` | Health check |  |
| GET | `/v1/companies/search` | Find companies that file payment practices reports | `q`*, `limit` |
| GET | `/v1/companies/{company_number}` | Latest payment figures, history, benchmark and signals for one company | `company_number`*, `history` |
| GET | `/v1/companies/{company_number}/reports` | Every report a company has filed | `company_number`*, `page`, `per_page` |
| GET | `/v1/benchmarks` | How UK large companies pay, across all latest reports |  |
| GET | `/v1/codes` | What the fields and signals mean |  |

The full OpenAPI 3 specification is in [`openapi.json`](openapi.json).

## Plans

| Plan | Price | Included per month |
|---|---|---|
| BASIC | free | a small monthly quota for evaluation |
| PRO / ULTRA / MEGA | from $49 / month | larger monthly quotas, per-request overage, higher rate limits |

Current prices are always on the [RapidAPI pricing page](https://rapidapi.com/193market/api/uk-supplier-payment-practices/pricing). Error responses (4xx/5xx) are not charged on api.market.

## Data source and licence

UK government 'Check payment practices' reporting data (check-payment-practices.service.gov.uk), Open Government Licence v3.0. Free-text fields are not served.

Every response carries an `attribution` object naming the source and the changes made (translation, normalisation, filtering, aggregation). This API is an independent product and is not affiliated with or endorsed by any government agency or regulator.

## Support

Questions, missing fields, or a use case the current plans do not fit: open an issue in this repository or use the Discussions tab on the RapidAPI listing.

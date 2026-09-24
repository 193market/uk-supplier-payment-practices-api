"""UK Supplier Payment Practices API — quick start (Python, requests).
Set RAPIDAPI_KEY to the key shown on uk-supplier-payment-practices at rapidapi.com after subscribing to the free plan."""
import os
import requests

HOST = "uk-supplier-payment-practices.p.rapidapi.com"
KEY = os.environ["RAPIDAPI_KEY"]

def call(path: str):
    r = requests.get(f"https://{HOST}{path}",
                     headers={"X-RapidAPI-Key": KEY, "X-RapidAPI-Host": HOST}, timeout=30)
    r.raise_for_status()
    return r.json()

if __name__ == "__main__":
    # Find a company that files reports
    data = call("/v1/companies/search?q=Tesco&limit=3")
    import json
    print(json.dumps(data, ensure_ascii=False, indent=2)[:2000])

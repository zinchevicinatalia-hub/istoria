# Istoria clasa a V-a — Orientul Antic

Aplicație de învățat pentru elevii de clasa a V-a, după manualul „Istoria românilor și universală” (temele 1–6, Orientul Antic).

- Lecții citite cu voce, carduri cu termeni, teste, adevărat/fals, completare, ordonarea evenimentelor.
- Răspunsuri cu voce (microfon) — merge cel mai bine în Chrome pe Android sau pe calculator.
- Progresul se păstrează pe telefon (în browser).

Deschide pagina pe telefon și alege „Adaugă pe ecranul de start” ca s-o folosești ca aplicație.

## Profesorul AI (opțional)

Funcționează fără cont Claude, cu o cheie API Anthropic:
- **Varianta simplă:** în aplicație, Setări → „Profesorul AI” → introdu cheia. Cheia rămâne doar pe acel telefon (nu se pune niciodată în GitHub).
- **Varianta sigură:** pune `worker.js` pe Cloudflare Workers, cu secretul `ANTHROPIC_API_KEY` și variabila `ALLOWED_ORIGIN`, apoi în aplicație introdu doar adresa serverului.

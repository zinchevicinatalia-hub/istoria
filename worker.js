// Cloudflare Worker: server mic pentru profesorul AI.
// Cheia API stă aici, ca secret (ANTHROPIC_API_KEY), nu pe telefon și nu în GitHub.
// Setează ALLOWED_ORIGIN la adresa ta GitHub Pages, de ex. https://numele-tau.github.io
export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowed = env.ALLOWED_ORIGIN || "";
    const cors = {
      "Access-Control-Allow-Origin": allowed,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "content-type",
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST" || origin !== allowed) {
      return new Response("Forbidden", { status: 403, headers: cors });
    }
    let body;
    try { body = await request.json(); } catch { return new Response("Bad request", { status: 400, headers: cors }); }
    const messages = Array.isArray(body.messages) ? body.messages.slice(-30) : [];
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({ model: "claude-haiku-5-5", max_tokens: 700, messages }),
    });
    return new Response(await res.text(), {
      status: res.status,
      headers: { ...cors, "content-type": "application/json" },
    });
  },
};

const SYSTEM_PROMPT = "You are an AI assistant specialized in giving concise, actionable advice on healthy phone usage.";
const FALLBACK_RESPONSE = "Sorry, there was an error connecting to the AI service. Please try again.";

export async function getPhoneUsageAdvice(userQuery: string): Promise<string> {
  try {
    const res = await fetch('/api/advice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userQuery }
        ]
      })
    });
    
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.response;
  } catch (error) {
    console.error('Error:', error);
    return FALLBACK_RESPONSE;
  }
}
import os
import httpx
from dotenv import load_dotenv

# ✅ Load environment variables
load_dotenv()

class AIClient:
    def __init__(self):
        self.api_key = os.getenv("GROQ_API_KEY")

        if not self.api_key:
            raise ValueError("Missing GROQ_API_KEY")

    async def generate_text(self, prompt: str) -> str:
        try:
            async with httpx.AsyncClient(
                timeout=30.0,
                verify=False,            # ✅ fix SSL issue (Windows)
                follow_redirects=True    # ✅ FIX 302 redirect issue
            ) as client:

                response = await client.post(
                    "https://api.groq.com/openai/v1/chat/completions",
                    headers={
                        "Authorization": f"Bearer {self.api_key}",
                        "Content-Type": "application/json"
                    },
                    json={
                        "model": "llama3-70b-8192",
                        "messages": [
                            {
                                "role": "user",
                                "content": prompt
                            }
                        ]
                    }
                )

                # ✅ DEBUG OUTPUT (DO NOT REMOVE until fully tested)
                print("\n===== GROQ DEBUG =====")
                print("STATUS CODE:", response.status_code)
                print("RESPONSE TEXT:", response.text)
                print("======================\n")

                # ✅ Handle API error
                if response.status_code != 200:
                    return f"[ERROR] {response.text}"

                data = response.json()

                # ✅ Safe extraction (prevents crashes)
                return (
                    data.get("choices", [{}])[0]
                    .get("message", {})
                    .get("content", "[ERROR] No content returned")
                )

        except Exception as e:
            print("\n===== EXCEPTION =====")
            print(str(e))
            print("=====================\n")

            return f"[ERROR] {str(e)}"


# ✅ Singleton instance
ai_client = AIClient()
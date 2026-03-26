# AI Model Providers Configuration

Zina AI supports multiple AI providers. Choose what works for your use case.

## 1. **Ollama (Local)** - Default ✅

**Best for**: Local development, offline use, privacy

No setup needed! Runs locally on your machine.

```bash
# Make sure Ollama is running
ollama serve

# In another terminal, pull the model
ollama pull Tutehau/zina
```

**Model**: `ollama:Tutehau/zina` (3.2B, Q4_K_M)
**Speed**: Fast (local)
**Cost**: Free
**API Key Required**: No

---

## 2. **OpenAI**

**Best for**: GPT-4 models, vision, state-of-the-art performance

### Setup

1. Get API key: https://platform.openai.com/api-keys
2. Add to `.env.local`:
   ```
   OPENAI_API_KEY=sk-...
   ```

### Available Models

- `openai:gpt-4-turbo` — Advanced reasoning, vision
- `openai:gpt-4o` — Latest flagship (multimodal)
- `openai:gpt-4o-mini` — Fast, efficient

**Cost**: Varies by model (see [pricing](https://openai.com/pricing))

---

## 3. **Claude (Anthropic)**

**Best for**: Strong reasoning, long context, creative tasks

### Setup

1. Get API key: https://console.anthropic.com/
2. Add to `.env.local`:
   ```
   ANTHROPIC_API_KEY=sk-ant-...
   ```

### Available Models

- `anthropic:claude-3-5-sonnet-20241022` — Latest & fastest
- `anthropic:claude-3-opus-20250219` — Most capable
- `anthropic:claude-3-haiku-20250307` — Fast & cheap

**Cost**: See [Anthropic pricing](https://www.anthropic.com/pricing/claude)

---

## 4. **OpenRouter** (Multi-Provider Aggregator)

**Best for**: Access to 200+ models (OpenAI, Anthropic, Llama, Nvidia, Mistral, etc.)

### Setup

1. Get API key: https://openrouter.ai/keys
2. Add to `.env.local`:
   ```
   OPENROUTER_API_KEY=sk-or-...
   ```

### Available Models (Examples)

- `openrouter:openai/gpt-4o` — OpenAI via OpenRouter
- `openrouter:anthropic/claude-3.5-sonnet` — Claude via OpenRouter
- `openrouter:nvidia/llama-3.1-405b-instruct` — Nvidia Llama
- `openrouter:meta-llama/llama-3.3-70b-instruct` — Meta Llama
- _...and 200+ more_

**Cost**: Per-request billing via OpenRouter

---

## How to Use

### In the UI

1. Start the app: `pnpm dev`
2. Open http://localhost:3000
3. Click the **model dropdown** in the chat header
4. Select your desired model

### Permissions

- **Guests** (no account): Only local models (Ollama)
- **Regular users** (logged in): All models (if API keys configured)

---

## Troubleshooting

### "Model not available" error

Check:
1. API key is set in `.env.local`
2. API key is valid
3. Account has credits/quota
4. Model ID is correct

### Ollama connection error

```bash
# Ollama must be running
ollama serve

# Pull the model if needed
ollama pull Tutehau/zina
```

### OpenRouter rate limiting

See: https://openrouter.ai/docs/limits

---

## Environment Variables Reference

```bash
# OpenAI
OPENAI_API_KEY=sk-...

# Anthropic
ANTHROPIC_API_KEY=sk-ant-...

# OpenRouter
OPENROUTER_API_KEY=sk-or-...
```

**Note**: Leave blank for providers you don't use. Local Ollama works without any API keys.

---

## Model IDs Format

All models use the format: `provider:model-name`

Examples:
- `ollama:Tutehau/zina`
- `openai:gpt-4-turbo`
- `anthropic:claude-3-5-sonnet-20241022`
- `openrouter:meta-llama/llama-3.3-70b-instruct`

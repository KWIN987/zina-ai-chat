export const DEFAULT_CHAT_MODEL: string = 'ollama:Tutehau/zina';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
  provider: 'ollama' | 'openai' | 'anthropic' | 'openrouter';
}

export const chatModels: Array<ChatModel> = [
  // Ollama - Local
  {
    id: 'ollama:Tutehau/zina',
    name: 'Tutehau Zina (Local)',
    description: 'Local 3.2B model - fast, offline, no API needed',
    provider: 'ollama',
  },

  // OpenAI
  {
    id: 'openai:gpt-4-turbo',
    name: 'GPT-4 Turbo',
    description: 'Advanced reasoning, vision support',
    provider: 'openai',
  },
  {
    id: 'openai:gpt-4o',
    name: 'GPT-4o',
    description: 'Latest flagship model, multimodal',
    provider: 'openai',
  },
  {
    id: 'openai:gpt-4o-mini',
    name: 'GPT-4o Mini',
    description: 'Fast, efficient, good for most tasks',
    provider: 'openai',
  },

  // Claude (Anthropic)
  {
    id: 'anthropic:claude-3-5-sonnet-20241022',
    name: 'Claude 3.5 Sonnet',
    description: 'Latest Claude model - strong reasoning',
    provider: 'anthropic',
  },
  {
    id: 'anthropic:claude-3-opus-20250219',
    name: 'Claude 3 Opus',
    description: 'Most capable Claude model',
    provider: 'anthropic',
  },
  {
    id: 'anthropic:claude-3-haiku-20250307',
    name: 'Claude 3 Haiku',
    description: 'Fast Claude model, good for quick tasks',
    provider: 'anthropic',
  },

  // OpenRouter (aggregator - access to 200+ models)
  {
    id: 'openrouter:openai/gpt-4o',
    name: 'GPT-4o (via OpenRouter)',
    description: 'OpenAI via OpenRouter',
    provider: 'openrouter',
  },
  {
    id: 'openrouter:anthropic/claude-3.5-sonnet',
    name: 'Claude 3.5 Sonnet (via OpenRouter)',
    description: 'Anthropic via OpenRouter',
    provider: 'openrouter',
  },
  {
    id: 'openrouter:nvidia/llama-3.1-405b-instruct',
    name: 'Llama 3.1 405B (Nvidia)',
    description: 'Via OpenRouter',
    provider: 'openrouter',
  },
  {
    id: 'openrouter:meta-llama/llama-3.3-70b-instruct',
    name: 'Llama 3.3 70B',
    description: 'Via OpenRouter',
    provider: 'openrouter',
  },
];

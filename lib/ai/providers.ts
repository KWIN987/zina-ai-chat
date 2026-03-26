import { createOpenAI } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { isTestEnvironment } from '../constants';
import { chatModel } from './models.test';
import type { LanguageModel } from 'ai';

// Provider instances
const ollamaClient = createOpenAI({
  baseURL: 'http://localhost:11434/v1',
  apiKey: 'ollama',
});

const openaiClient = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

const openrouterClient = createOpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY || '',
});

// Model resolver
export function resolveModel(modelId: string): LanguageModel {
  const [provider, ...modelParts] = modelId.split(':');
  const model = modelParts.join(':');

  if (isTestEnvironment) {
    return chatModel as any;
  }

  switch (provider) {
    case 'ollama':
      return ollamaClient(model) as any;

    case 'openai':
      return openaiClient(model) as any;

    case 'anthropic':
      return anthropic(model as any) as any;

    case 'openrouter':
      return openrouterClient(model) as any;

    default:
      return ollamaClient('Tutehau/zina') as any;
  }
}

// Provider wrapper that uses resolveModel at runtime
export const myProvider = {
  languageModel: (modelId: string) => resolveModel(modelId),
} as any;

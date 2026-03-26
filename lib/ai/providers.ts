import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';
import type { LanguageModel } from 'ai';

// Ollama API compatible with OpenAI
const ollama = createOpenAI({
  baseURL: 'http://localhost:11434/v1',
  apiKey: 'ollama',
});

const testProvider = customProvider({
  languageModels: {
    'chat-model': chatModel,
    'chat-model-reasoning': reasoningModel,
    'title-model': titleModel,
    'artifact-model': artifactModel,
  },
});

const productionModels: Record<string, LanguageModel> = {
  'chat-model': ollama('Tutehau/zina') as any,
  'chat-model-reasoning': ollama('Tutehau/zina') as any,
  'title-model': ollama('Tutehau/zina') as any,
  'artifact-model': ollama('Tutehau/zina') as any,
};

export const myProvider = isTestEnvironment
  ? testProvider
  : (customProvider({
      languageModels: productionModels,
    }) as any);

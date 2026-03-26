import type { UserType } from '@/app/(auth)/auth';
import type { ChatModel } from './models';
import { chatModels } from './models';

interface Entitlements {
  maxMessagesPerDay: number;
  availableChatModelIds: Array<ChatModel['id']>;
}

// All available models
const allModelIds = chatModels.map((m) => m.id);

// Local-only models (don't require API keys)
const localModelIds = chatModels
  .filter((m) => m.provider === 'ollama')
  .map((m) => m.id);

export const entitlementsByUserType: Record<UserType, Entitlements> = {
  /*
   * For users without an account - local models only
   */
  guest: {
    maxMessagesPerDay: 20,
    availableChatModelIds: localModelIds,
  },

  /*
   * For users with an account - all models
   */
  regular: {
    maxMessagesPerDay: 100,
    availableChatModelIds: allModelIds,
  },

  /*
   * TODO: For users with an account and a paid membership
   */
};

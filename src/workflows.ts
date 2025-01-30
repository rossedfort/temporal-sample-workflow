import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

const { heartbeatActivity } = proxyActivities<typeof activities>({
  retry: {
    initialInterval: '50 milliseconds',
    maximumAttempts: 10,
  },
  heartbeatTimeout: '5s',
  startToCloseTimeout: '1 day',
});

export const heartbeatWithSensitivePayload = async (): Promise<void> => {
  await heartbeatActivity('This is a sensitive payload');
};

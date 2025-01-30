import { log, heartbeat, sleep } from '@temporalio/activity';
import { ApplicationFailure } from '@temporalio/common';

const mockFailure = async (ms: number) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Mock Error'));
    }, ms);
  });
};

export const heartbeatActivity = async (payload: string): Promise<void> => {
  const startingPoint = 1;

  for (let progress = startingPoint; progress <= 10; ++progress) {
    log.info('Progress', { progress });
    await sleep(1 * 1000);
    heartbeat(`Heartbeat no. ${progress} - ${payload}`);
  }

  try {
    await mockFailure(200);
  } catch (error) {
    throw new ApplicationFailure(
      'Error',
      'heartbeatActivityFailure',
      false,
      ['fake payload'],
      error as unknown as Error,
    );
  }
};

import { Client } from '@temporalio/client';
import { heartbeatWithSensitivePayload } from './workflows';

async function run(): Promise<void> {
  const client = new Client();

  await client.workflow.execute(heartbeatWithSensitivePayload, {
    taskQueue: 'redfort-samples',
    workflowId: 'redfort-samples',
  });
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

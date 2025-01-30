import { Worker } from '@temporalio/worker';
import * as activities from './activities';
import { getDataConverter } from './data-converter';

async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve('./workflows'),
    activities,
    taskQueue: 'redfort-samples',
    dataConverter: await getDataConverter(),
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

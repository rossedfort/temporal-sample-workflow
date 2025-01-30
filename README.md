# Redfort Samples

This is a sample Temporal workflow that will send a heartbeat 10 times with a payload, then mock a failing dependency call which will trigger an `ApplicationFailure`.

This is for testing pending activities with heartbeat and failure payloads that can be decoded via a codec server.

## Instructions
1. clone this repo
2. `npm install`
3. `npm run start`
4. (In a separate shell) `npm run codec-server`
5. (In a third shell) `npm run workflow`
6. in the UI repo
7. `pnpm dev`
8. Open the codec server settings, and paste `http://localhost:8888` in the codec server URL field.
9. View the workflow

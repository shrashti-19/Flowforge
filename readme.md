# FlowForge

A lightweight background job processing system.

## Goal

FlowForge allows clients to submit long-running tasks
and process them asynchronously using workers.

## MVP

- Create a job
- Track job status
- Queue jobs
- Process jobs using a worker
- Store job results

## Architecture

Client → API → Job → Queue → Worker → Result
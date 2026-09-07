# FlowForge

A lightweight background job processing system built to explore asynchronous processing, queues, workers, job lifecycle management, and backend reliability.

## 🎯 Goal

FlowForge allows clients to submit long-running tasks without keeping the API request open until the task finishes.

The system is being built step-by-step to understand how background job processing systems work internally.

## 🏗️ Current Architecture

Client → API → Job → MongoDB → Queue → Worker

### Current Flow

1. Client sends a job request using `POST /jobs`
2. API validates the request
3. FlowForge creates a Job with a unique UUID
4. Job starts with `PENDING` status
5. Job is persisted in MongoDB
6. Job is added to the queue
7. Worker consumes jobs from the queue

## ✅ Current Features

- Job creation API
- Request validation
- Unique UUID-based Job IDs
- Job status management
- MongoDB persistence
- Flexible job payloads
- In-memory queue
- Basic producer-consumer architecture
- Basic worker implementation

## 📦 Job Structure

A Job currently contains:

- `id` / `_id` — unique identifier
- `type` — type of work to perform
- `payload` — input required for the job
- `status` — current job state
- `result` — job output
- `createdAt` — creation time
- `updatedAt` — last update time

### Job Lifecycle

PENDING → RUNNING → COMPLETED / FAILED

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- Git & GitHub

## 🧠 Engineering Concepts

FlowForge is being built to understand:

- Asynchronous processing
- Producer-consumer pattern
- Queues
- Worker processes
- Persistence
- Job lifecycle
- Failure handling
- Idempotency
- Concurrency
- Scalability

## 🚧 Important Current Limitation

The current queue is an **in-memory queue**.

The API server and worker run as separate Node.js processes, so they have separate memory. Therefore, the current in-memory queue cannot be shared between them.

This is an intentional learning step.

The next phase will solve this using a shared queue mechanism.

## 🔮 Planned Improvements

- Shared/distributed queue
- Worker processing
- Retry mechanism
- Failure handling
- Idempotency
- Job locking and concurrency control
- Scheduled jobs
- Redis
- Docker
- Observability
- AI-powered background jobs

## 📌 Project Philosophy

Think → Learn → Build → Question → Explain → Note → Commit
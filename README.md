forge1: Custom UI with Forge Resolvers

A Jira issue panel built with @forge/react (Custom UI) and @forge/bridge.
- Renders UI using Forge's React component library (Text, Lozenge, Inline)
- Calls a backend resolver via invoke() to fetch data from the frontend
- Demonstrates the Custom UI ↔ resolver communication pattern that Forge apps rely on

product-trigger: Jira REST API Integration via Event Trigger

A Forge function triggered by a Jira issue event, using @forge/api to call the Jira REST API and post a comment back to the issue.
- Reads event/context data passed into a Forge trigger
- Authenticates and calls the Jira REST API using api.asApp()
- Handles the request/response cycle for a REST API call from within Forge

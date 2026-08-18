import api, { route } from "@forge/api";

export async function run(event, context) {
  console.log(event);

  const issueIdOrKey = event.issue.id;

  const issueResponse = await api.asApp().requestJira(
    route`/rest/api/2/issue/${issueIdOrKey}?fields=summary,reporter`
  );
  const issueData = await issueResponse.json();

  const summary = issueData.fields.summary;
  const reporterName = issueData.fields.reporter?.displayName ?? "Unknown reporter";

  const bodyData = JSON.stringify({
    body: `This issue ("${summary}") was reported by ${reporterName}. Automated comment triggered by product-trigger.`
  });

  const response = await api.asApp().requestJira(
    route`/rest/api/2/issue/${issueIdOrKey}/comment`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: bodyData
    }
  );

  console.log(`Response: ${response.status} ${response.statusText}`);
  console.log(await response.json());
}
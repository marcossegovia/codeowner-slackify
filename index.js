const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
    const myToken = core.getInput("GITHUB_TOKEN");
    const octokit = new github.GitHub(myToken);

    const { data: pullRequest } = await octokit.pulls.get({
        owner: 'octokit',
        repo: 'rest.js',
        pull_number: 1484,
        mediaType: {
            format: 'diff'
        }
    });

    console.log(pullRequest);
}

run();

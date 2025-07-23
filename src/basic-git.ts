// Lessons about Git using TypeScript, just for fun.
// Made to help new students or anyone who wants to learn Git.

// How to initialize a Git repository:
const git_init = 'git init'

// Check the status in the terminal
const git_status = 'git status'

// To add your files to the staging area:
const git_add_file = 'git add <file or path>'
const git_add_all = 'git add *'

// Make your commit message like this:
const git_commit = 'git commit -m "first commit"'

// Connect your local repository with your remote GitHub repository:
const git_remote_HTTPS = 'git remote add origin https://github.com/Ryanditko/git4noobs.git'
const git_remote_SSH = 'git remote add origin git@github.com:Ryanditko/git4noobs.git'

// Create and switch to a new branch:
const git_branch = 'git checkout -b nome_da_branch'

// Push your code and set the upstream:
const git_push_upstream = 'git push --set-upstream origin nome_da_branch'

// Thanks for being here :)
function Gitlesson() {
    console.log('Thanks for being here :)');
    console.log('Bye! Now you can start learning Git');
}

Gitlesson();

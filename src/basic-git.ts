// Lessons about git with typescript, just for run. Making this to help news students or any person who want to learn git.

//  How to intialize a git repository: Just apply the command git init in your terminal, without = ''.
const git_init = ''
// check the status in the terminal
const git_status = 'git status'
const git_add
// Maker your commit message like this ou any thing in terminal
const git_commit = 'git commit -m "first commit"'
// Create a branch for the next step ( Branchs are like a new folder, you can create, delete, or switch between them)
const git_branch = 'git branch -M main'
//  Adding a commit and conect your local repository with your remote repository ( github https model and SSH model)
const git_add_repo_commit_from_your_pc_HTTPS = 'git remote add origin https://github.com/Ryanditko/git4noobs.git'
const git_add_repo_commit_from_your_pc_SSH = 'git remote add origin git@github.com:Ryanditko/git4noobs.git' 
// uploading your local repository to remote repository ( github https model and SSH model)
const git_push = 'git push -u origin main'

// Ty for being here :) 
function Gitlesson() {
    console.log('bye, now you can start learning git :)')
};
Gitlesson() 
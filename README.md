# Git for Noobs – Command Guide

<p align="center">
  <img src="https://i.ytimg.com/vi/teUBcP4SNrc/maxresdefault.jpg" alt="git wallpaper" width="800">
</p>

## Index
1. [Initial Setup](#initial-setup)
2. [Basic Commands](#basic-commands)
3. [Branches](#branches)
4. [Commits](#commits)
5. [History and Diff](#history-and-diff)
6. [Remote Repositories](#remote-repositories)
7. [Undoing Changes](#undoing-changes)
8. [Stash and Tags](#stash-and-tags)
9. [Merge and Rebase](#merge-and-rebase)
10. [Advanced Tips](#advanced-tips)

---

## Initial Setup

| Command | Description | Example |
|---------|------------|----------|
| `git config --global user.name "Name"` | Set global username | `git config --global user.name "John Doe"` |
| `git config --global user.email "email@example.com"` | Set global email | `git config --global user.email "john@example.com"` |
| `git config --list` | List all configurations | `git config --list` |
| `git config user.name` | Show configured username | `git config user.name` |
| `git config --global core.editor "vim"` | Set default editor | `git config --global core.editor "code"` |

---

## Basic Commands

| Command | Description | Example |
|---------|------------|----------|
| `git init` | Initialize a new Git repository | `git init` |
| `git clone <url>` | Clone a remote repository | `git clone https://github.com/user/repo.git` |
| `git status` | Show current file state | `git status` |
| `git add <file>` | Stage a specific file | `git add main.js` |
| `git add .` | Stage all modified files | `git add .` |
| `git add *.js` | Stage files by extension | `git add *.js` |
| `git reset <file>` | Remove a file from staging | `git reset main.js` |

---

## Commits

| Command | Description | Example |
|---------|------------|----------|
| `git commit -m "message"` | Create a commit with message | `git commit -m "Add email validation"` |
| `git commit -am "message"` | Add and commit tracked files | `git commit -am "Fix login bug"` |
| `git commit --amend` | Modify last commit | `git commit --amend --no-edit` |
| `git commit --amend -m "new message"` | Change last commit message | `git commit --amend -m "New title"` |
| `git commit --allow-empty -m "message"` | Create empty commit (useful for CI/CD) | `git commit --allow-empty -m "Trigger build"` |

---

## Branches

| Command | Description | Example |
|---------|------------|----------|
| `git branch` | List local branches | `git branch` |
| `git branch -a` | List local and remote branches | `git branch -a` |
| `git branch <name>` | Create a new branch | `git branch feature/new-login` |
| `git branch -d <name>` | Delete a branch | `git branch -d feature/new-login` |
| `git branch -D <name>` | Force delete a branch | `git branch -D feature/incomplete` |
| `git branch -m <new-name>` | Rename current branch | `git branch -m feature/login-fix` |
| `git branch -m <old> <new>` | Rename specific branch | `git branch -m feature/old feature/new` |
| `git checkout <branch>` | Switch to a branch | `git checkout main` |
| `git checkout -b <branch>` | Create and switch to branch | `git checkout -b feature/new-feature` |
| `git switch <branch>` | Switch branch (modern syntax) | `git switch main` |
| `git switch -c <branch>` | Create and switch (modern syntax) | `git switch -c feature/new` |

---

## History and Diff

| Command | Description | Example |
|---------|------------|----------|
| `git log` | Show commit history | `git log` |
| `git log --oneline` | One-line commit history | `git log --oneline` |
| `git log --graph --oneline --all` | Visual branch graph | `git log --graph --oneline --all` |
| `git log -n <number>` | Show last N commits | `git log -n 5` |
| `git log --author="Name"` | Filter by author | `git log --author="John"` |
| `git log --since="2 weeks ago"` | Filter by time | `git log --since="2 weeks ago"` |
| `git log <file>` | File history | `git log main.js` |
| `git log -p` | Show full changes | `git log -p` |
| `git show <commit>` | Show commit details | `git show abc123def` |
| `git diff` | Show unstaged changes | `git diff` |
| `git diff --staged` | Show staged changes | `git diff --staged` |
| `git diff <branch1> <branch2>` | Compare branches | `git diff main feature/new` |
| `git diff HEAD~2 HEAD` | Compare commits | `git diff HEAD~2 HEAD` |

---

## Remote Repositories

| Command | Description | Example |
|---------|------------|----------|
| `git remote` | List remotes | `git remote` |
| `git remote -v` | List remotes with URLs | `git remote -v` |
| `git remote add <name> <url>` | Add remote | `git remote add origin https://github.com/user/repo.git` |
| `git remote remove <name>` | Remove remote | `git remote remove origin` |
| `git remote rename <old> <new>` | Rename remote | `git remote rename origin upstream` |
| `git remote set-url <name> <url>` | Change remote URL | `git remote set-url origin https://github.com/new/repo.git` |
| `git push <remote> <branch>` | Push commits | `git push origin main` |
| `git push -u <remote> <branch>` | Push and set upstream | `git push -u origin feature/new` |
| `git push <remote> --all` | Push all branches | `git push origin --all` |
| `git push <remote> <branch> --force` | Force push (CAUTION!) | `git push origin main --force` |
| `git pull` | Pull and merge | `git pull` |
| `git pull <remote> <branch>` | Pull from specific remote | `git pull origin main` |
| `git fetch` | Fetch without merging | `git fetch` |
| `git fetch <remote>` | Fetch from specific remote | `git fetch origin` |

---

## Undoing Changes

| Command | Description | Example |
|---------|------------|----------|
| `git restore <file>` | Discard unstaged changes | `git restore main.js` |
| `git restore --staged <file>` | Unstage file | `git restore --staged main.js` |
| `git reset <file>` | Remove from staging | `git reset main.js` |
| `git reset --soft HEAD~1` | Undo last commit (keep staged) | `git reset --soft HEAD~1` |
| `git reset --mixed HEAD~1` | Undo last commit (default) | `git reset --mixed HEAD~1` |
| `git reset --hard HEAD~1` | Undo last commit (discard changes) | `git reset --hard HEAD~1` |
| `git reset --hard <commit>` | Reset to specific commit | `git reset --hard abc123def` |
| `git revert <commit>` | Create revert commit | `git revert abc123def` |
| `git clean -fd` | Remove untracked files | `git clean -fd` |

---

## Stash and Tags

| Command | Description | Example |
|---------|------------|----------|
| `git stash` | Save changes temporarily | `git stash` |
| `git stash save "description"` | Stash with message | `git stash save "work in progress"` |
| `git stash list` | List stashes | `git stash list` |
| `git stash pop` | Restore and remove latest stash | `git stash pop` |
| `git stash apply` | Restore without removing | `git stash apply` |
| `git stash apply stash@{n}` | Apply specific stash | `git stash apply stash@{0}` |
| `git stash drop` | Delete latest stash | `git stash drop` |
| `git stash clear` | Delete all stashes | `git stash clear` |
| `git tag` | List tags | `git tag` |
| `git tag <name>` | Create lightweight tag | `git tag v1.0.0` |
| `git tag -a <name> -m "message"` | Create annotated tag | `git tag -a v1.0.0 -m "Version 1.0"` |
| `git push origin <tag>` | Push tag | `git push origin v1.0.0` |
| `git push origin --tags` | Push all tags | `git push origin --tags` |

---

## Merge and Rebase

| Command | Description | Example |
|---------|------------|----------|
| `git merge <branch>` | Merge into current branch | `git merge feature/new` |
| `git merge --no-ff <branch>` | Create merge commit | `git merge --no-ff feature/new` |
| `git merge --squash <branch>` | Squash commits before merge | `git merge --squash feature/new` |
| `git rebase <branch>` | Reapply commits on new base | `git rebase main` |
| `git rebase -i HEAD~3` | Interactive rebase | `git rebase -i HEAD~3` |
| `git merge --abort` | Abort merge | `git merge --abort` |
| `git rebase --abort` | Abort rebase | `git rebase --abort` |

---

## Advanced Tips

| Command | Description | Example |
|---------|------------|----------|
| `git cherry-pick <commit>` | Apply specific commit | `git cherry-pick abc123def` |
| `git reflog` | Show reference history | `git reflog` |
| `git blame <file>` | Show line authorship | `git blame main.js` |
| `git bisect start` | Start binary search for bug | `git bisect start` |
| `git grep "pattern"` | Search in repository | `git grep "TODO"` |
| `git alias.co checkout` | Create alias | `git config --global alias.co checkout` |
| `git shortlog` | Commit summary by author | `git shortlog` |

---

## Typical Workflow

```bash
# 1. Clone repository
git clone https://github.com/user/project.git
cd project

# 2. Create feature branch
git checkout -b feature/new-feature

# 3. Make changes and commit
git add .
git commit -m "Add new feature"

# 4. Push to remote
git push -u origin feature/new-feature

# 5. Open Pull Request on GitHub

# 6. After approval, sync main
git checkout main
git pull origin main

# 7. Optional local merge
git merge feature/new-feature

# 8. Delete branch
git branch -d feature/new-feature


## Better Commit Messages

✅ GOOD:

- "Fix authentication bug"
- "Add email validation"
- "Refactor login function"

❌ BAD:

- "fix"
- "update"
-"changes"

```
---

## Quick References

- `HEAD` = Current commit  
- `HEAD~1` = Previous commit  
- `HEAD~2` = 2 commits behind  
- `origin` = Default remote repository  
- `main/master` = Default branch  

---

**Built to help beginners master Git!**

---

## How to Use This Repository

1. **Read the README in order**: Start from setup and move to advanced topics  
2. **Try the commands**: Use a local test repository  
3. **Revisit when in doubt**: Forgetting is normal — practice will reinforce learning  
4. **Look for more resources**: After the basics, explore `git help` and the official documentation  

---

## Golden Tip

> Git is not as complex as it seems. Most developers use only 5–10 commands in their daily workflow. The rest is for specific cases!

---

## Contributing

Found a mistake or have suggestions? Open an issue or submit a PR! This guide gets better with community contributions.

---

## License

This project is licensed under the **MIT License** — feel free to use and share!
---


#!/bin/bash
<!-- HTTPS -->
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Ryanditko/git4noobs.git
git push -u origin main 

<!-- SSH -->
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:Ryanditko/git4noobs.git
git push -u origin main
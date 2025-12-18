# 📘 Git para Noobs - Guia Completo de Comandos

## Índice
1. [Configuração Inicial](#configuração-inicial)
2. [Comandos Básicos](#comandos-básicos)
3. [Branches](#branches)
4. [Commits](#commits)
5. [Histórico e Diff](#histórico-e-diff)
6. [Repositórios Remotos](#repositórios-remotos)
7. [Desfazendo Mudanças](#desfazendo-mudanças)
8. [Stash e Tags](#stash-e-tags)
9. [Merge e Rebase](#merge-e-rebase)
10. [Dicas Avançadas](#dicas-avançadas)

---

## Configuração Inicial

| Comando | Descrição | Exemplo |
|---------|-----------|----------|
| `git config --global user.name "Nome"` | Define nome do usuário globalmente | `git config --global user.name "João Silva"` |
| `git config --global user.email "email@ex.com"` | Define email globalmente | `git config --global user.email "joao@example.com"` |
| `git config --list` | Lista todas as configurações | `git config --list` |
| `git config user.name` | Mostra o nome configurado | `git config user.name` |
| `git config --global core.editor "vim"` | Define editor padrão | `git config --global core.editor "code"` |

---

## Comandos Básicos

| Comando | Descrição | Exemplo |
|---------|-----------|----------|
| `git init` | Inicializa um novo repositório Git | `git init` |
| `git clone <url>` | Clona um repositório remoto | `git clone https://github.com/usuario/repo.git` |
| `git status` | Mostra o estado atual dos arquivos | `git status` |
| `git add <arquivo>` | Adiciona um arquivo específico para commit | `git add main.js` |
| `git add .` | Adiciona todos os arquivos modificados | `git add .` |
| `git add *.js` | Adiciona todos os arquivos com extensão específica | `git add *.js` |
| `git reset <arquivo>` | Remove um arquivo da staging area | `git reset main.js` |

---

## Commits

| Comando | Descrição | Exemplo |
|---------|-----------|----------|
| `git commit -m "mensagem"` | Cria um commit com mensagem | `git commit -m "Adiciona validação de email"` |
| `git commit -am "mensagem"` | Combina add e commit (-a: tracked files apenas) | `git commit -am "Corrige bug no login"` |
| `git commit --amend` | Modifica o último commit | `git commit --amend --no-edit` |
| `git commit --amend -m "nova mensagem"` | Muda a mensagem do último commit | `git commit --amend -m "Novo título"` |
| `git commit --allow-empty -m "mensagem"` | Cria commit vazio (útil para CI/CD) | `git commit --allow-empty -m "Trigger build"` |

---

## Branches

| Comando | Descrição | Exemplo |
|---------|-----------|----------|
| `git branch` | Lista branches locais | `git branch` |
| `git branch -a` | Lista branches locais e remotas | `git branch -a` |
| `git branch <nome>` | Cria uma nova branch | `git branch feature/novo-login` |
| `git branch -d <nome>` | Deleta uma branch | `git branch -d feature/novo-login` |
| `git branch -D <nome>` | Força a deleção de uma branch | `git branch -D feature/incompleta` |
| `git branch -m <nome-novo>` | Renomeia a branch atual | `git branch -m feature/login-fix` |
| `git branch -m <nome-antigo> <nome-novo>` | Renomeia uma branch específica | `git branch -m feature/old feature/new` |
| `git checkout <branch>` | Troca para uma branch | `git checkout main` |
| `git checkout -b <branch>` | Cria e troca para nova branch | `git checkout -b feature/novo-recurso` |
| `git switch <branch>` | Troca para uma branch (sintaxe moderna) | `git switch main` |
| `git switch -c <branch>` | Cria e troca para nova branch (sintaxe moderna) | `git switch -c feature/novo` |

---

## Histórico e Diff

| Comando | Descrição | Exemplo |
|---------|-----------|----------|
| `git log` | Mostra histórico de commits | `git log` |
| `git log --oneline` | Mostra histórico em uma linha por commit | `git log --oneline` |
| `git log --graph --oneline --all` | Mostra gráfico visual das branches | `git log --graph --oneline --all` |
| `git log -n <número>` | Mostra últimos N commits | `git log -n 5` |
| `git log --author="Nome"` | Filtra commits por autor | `git log --author="João"` |
| `git log --since="2 weeks ago"` | Mostra commits de um período | `git log --since="2 weeks ago"` |
| `git log <arquivo>` | Mostra histórico de um arquivo específico | `git log main.js` |
| `git log -p` | Mostra commits com as mudanças completas | `git log -p` |
| `git show <commit>` | Mostra detalhes de um commit específico | `git show abc123def` |
| `git diff` | Mostra diferenças não staged | `git diff` |
| `git diff --staged` | Mostra diferenças na staging area | `git diff --staged` |
| `git diff <branch1> <branch2>` | Compara duas branches | `git diff main feature/novo` |
| `git diff HEAD~2 HEAD` | Compara commits | `git diff HEAD~2 HEAD` |

---

## Repositórios Remotos

| Comando | Descrição | Exemplo |
|---------|-----------|----------|
| `git remote` | Lista repositórios remotos | `git remote` |
| `git remote -v` | Lista repositórios com URLs | `git remote -v` |
| `git remote add <nome> <url>` | Adiciona novo repositório remoto | `git remote add origin https://github.com/usuario/repo.git` |
| `git remote remove <nome>` | Remove um repositório remoto | `git remote remove origin` |
| `git remote rename <nome-antigo> <nome-novo>` | Renomeia repositório remoto | `git remote rename origin upstream` |
| `git remote set-url <nome> <url>` | Altera URL de um remoto | `git remote set-url origin https://github.com/novo/repo.git` |
| `git push <remoto> <branch>` | Envia commits para o remoto | `git push origin main` |
| `git push -u <remoto> <branch>` | Envia e define upstream | `git push -u origin feature/novo` |
| `git push <remoto> --all` | Envia todas as branches | `git push origin --all` |
| `git push <remoto> <branch> --force` | Força envio (CUIDADO!) | `git push origin main --force` |
| `git pull` | Puxa e merge automaticamente | `git pull` |
| `git pull <remoto> <branch>` | Puxa de um remoto específico | `git pull origin main` |
| `git fetch` | Busca dados do remoto sem merge | `git fetch` |
| `git fetch <remoto>` | Busca de um remoto específico | `git fetch origin` |

---

## Desfazendo Mudanças

| Comando | Descrição | Exemplo |
|---------|-----------|----------|
| `git restore <arquivo>` | Descarta mudanças não staged | `git restore main.js` |
| `git restore --staged <arquivo>` | Remove da staging area | `git restore --staged main.js` |
| `git reset <arquivo>` | Remove arquivo da staging area | `git reset main.js` |
| `git reset --soft HEAD~1` | Desfaz último commit (mantém staged) | `git reset --soft HEAD~1` |
| `git reset --mixed HEAD~1` | Desfaz último commit (padrão) | `git reset --mixed HEAD~1` |
| `git reset --hard HEAD~1` | Desfaz último commit (descarta mudanças) | `git reset --hard HEAD~1` |
| `git reset --hard <commit>` | Reseta para um commit específico | `git reset --hard abc123def` |
| `git revert <commit>` | Cria novo commit revertendo mudanças | `git revert abc123def` |
| `git clean -fd` | Remove arquivos não rastreados | `git clean -fd` |

---

## Stash e Tags

| Comando | Descrição | Exemplo |
|---------|-----------|----------|
| `git stash` | Salva mudanças temporariamente | `git stash` |
| `git stash save "descrição"` | Stash com descrição | `git stash save "trabalho em progresso"` |
| `git stash list` | Lista todos os stash | `git stash list` |
| `git stash pop` | Restaura e remove o stash mais recente | `git stash pop` |
| `git stash apply` | Restaura sem remover | `git stash apply` |
| `git stash apply stash@{n}` | Aplica um stash específico | `git stash apply stash@{0}` |
| `git stash drop` | Deleta o stash mais recente | `git stash drop` |
| `git stash clear` | Deleta todos os stash | `git stash clear` |
| `git tag` | Lista todas as tags | `git tag` |
| `git tag <nome>` | Cria uma tag (leve) | `git tag v1.0.0` |
| `git tag -a <nome> -m "mensagem"` | Cria tag anotada | `git tag -a v1.0.0 -m "Versão 1.0"` |
| `git push origin <tag>` | Envia uma tag | `git push origin v1.0.0` |
| `git push origin --tags` | Envia todas as tags | `git push origin --tags` |

---

## Merge e Rebase

| Comando | Descrição | Exemplo |
|---------|-----------|----------|
| `git merge <branch>` | Faz merge de uma branch na atual | `git merge feature/novo` |
| `git merge --no-ff <branch>` | Merge criando commit de merge | `git merge --no-ff feature/novo` |
| `git merge --squash <branch>` | Combina commits antes de merge | `git merge --squash feature/novo` |
| `git rebase <branch>` | Reaplica commits em outra base | `git rebase main` |
| `git rebase -i HEAD~3` | Rebase interativo dos últimos 3 commits | `git rebase -i HEAD~3` |
| `git merge --abort` | Cancela um merge em progresso | `git merge --abort` |
| `git rebase --abort` | Cancela um rebase em progresso | `git rebase --abort` |

---

## Dicas Avançadas

| Comando | Descrição | Exemplo |
|---------|-----------|----------|
| `git cherry-pick <commit>` | Aplica um commit específico aqui | `git cherry-pick abc123def` |
| `git reflog` | Mostra histórico de referências | `git reflog` |
| `git blame <arquivo>` | Mostra quem fez cada linha | `git blame main.js` |
| `git bisect start` | Inicia busca binária de bug | `git bisect start` |
| `git grep "padrão"` | Busca padrão nos arquivos | `git grep "TODO"` |
| `git alias.co checkout` | Cria um alias | `git config --global alias.co checkout` |
| `git shortlog` | Resumo de commits por autor | `git shortlog` |

---

## Fluxo Típico de Trabalho

```bash
# 1. Clonar repositório
git clone https://github.com/usuario/projeto.git
cd projeto

# 2. Criar branch para novo recurso
git checkout -b feature/novo-recurso

# 3. Fazer mudanças e commits
git add .
git commit -m "Adiciona novo recurso"

# 4. Enviar para remoto
git push -u origin feature/novo-recurso

# 5. Criar Pull Request no GitHub
# (no site do GitHub)

# 6. Após aprovação, voltar para main e sincronizar
git checkout main
git pull origin main

# 7. Merge local (opcional)
git merge feature/novo-recurso

# 8. Deletar branch
git branch -d feature/novo-recurso
```

---

## Mensagens de Commit Melhores

```
✅ BOM:
- "Corrige bug de autenticação"
- "Adiciona validação de email"
- "Refatora função de login"

❌ RUIM:
- "fix"
- "update"
- "mudanças"
```

---

## Referências Rápidas

- `HEAD` = Commit atual
- `HEAD~1` = Commit anterior
- `HEAD~2` = 2 commits atrás
- `origin` = Repositório remoto padrão
- `main/master` = Branch padrão

---

**Desenvolvido para ajudar iniciantes a dominar Git! 🚀**

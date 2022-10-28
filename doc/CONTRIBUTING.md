# Contributing to BuyChain

* [Code Contributions](#code-contributions)
* [Commit message guidelines](#commit-message-guidelines)

## Code Contributions

#### Step 1: Clone

Clone the project on [GitHub](https://github.com/buychain/accounting-api.git)

```text
  $ git clone https://github.com/buychain/accounting-api.git
  $ cd accounting-api
```   

#### Step 2: Branch

Create a new topic branch (from development branch) to contain your feature, change, or fix:

```text
  $ git checkout -b <topic-branch-name>
```

#### Step 3: Before Commit

Your code is unlikely be committed if linting is not applied. Make sure you apply linting before the commit:

```text
  $ npm run lint
``` 

#### Step 4: Commit

Make sure git knows your name and email address:

```text
  $ git config --global user.name "Example User"
  $ git config --global user.email "user@example.com"
```

Add and commit:

```text
  $ git add my/changed/files
  $ git commit
```

Commit your changes in logical chunks. Please adhere to these [Commit message guidelines](#commit-message-guidelines).

#### Step 5: Rebase

Use git rebase to synchronize your work with the repository.

```text
  $ git fetch upstream
  $ git rebase upstream/master
```

#### Step 6: Push

Push your topic branch:

```text
  $ git push origin <topic-branch-name>
```

#### Step 7: Pull Request

Open a Pull Request with a clear title and description against the `development` branch using our Pull Request template.

## Commit message guidelines

The commit message should describe what changed and why.

1. The first line should:
  * contain a short description of the change (no more than 72 characters)
  * be prefixed with the name of the changed subsystem
  * be entirely in lowercase with the exception of proper nouns, acronyms, and the words that refer to code, like
    function/variable names

   Examples:

  * `lib: implement getStatus() method in status lib`
  * `deps: add eslint package in dev dependencies`
2. Keep the second line blank.
3. Wrap all other lines at 72 columns.
  * describe each line in logical chunks
  * start each line with: space hyphen space ( - ...)
  * be entirely in lowercase with the exception of proper nouns, acronyms, and the words that refer to code, like
    function/variable names

   Examples:

  * ` - add order field support`
  * ` - sync JSDoc`
  * ` - update usage`

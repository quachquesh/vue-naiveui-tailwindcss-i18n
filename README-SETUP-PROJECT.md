# Install packages

## [husky](https://typicode.github.io/husky/)

```bash
# install
npm install --save-dev husky
```

## [lint-staged](https://github.com/lint-staged/lint-staged)

```bash
npm install --save-dev lint-staged
```

## [commitlint](https://commitlint.js.org/)

```bash
npm install --save-dev @commitlint/config-conventional @commitlint/cli
```

## [cz-git](https://cz-git.qbb.sh/)

```bash
# global installation commitizen, that you can quickly use the cz or git cz command to start.
npm install -g commitizen
```

### Install dependencies

```bash
npm install -D cz-git
```

# Config

### Step 1: Init husky

```bash
npx husky init
```

### Step 2: Create `.husky/pre-commit` file

```bash
npm run lint:lint-staged

npm run typecheck
```

### Step 3: Create `.husky/commit-msg` file

```bash
npx --no -- commitlint --edit \
```

### Step 4: Create `.husky/lintstagedrc.mjs` file

```javascript
export default {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '!(package)*.json': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['eslint --fix', 'prettier --write'],
  '*.{vue,css,scss,postcss,less}': ['prettier --write'],
  '*.md': ['prettier --write']
}
```

### Step 5: Create `commitlint.config.ts` file

<details>
  <summary>Show code</summary>

```typescript
import type { UserConfig } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'

const configuration: UserConfig = {
  ignores: [(commit) => commit.includes('init') || /^dev\d+\.\d+\.\d+/.test(commit)],
  extends: ['@commitlint/config-conventional'],
  rules: {
    // https://commitlint.js.org/#/reference-rules
    'body-leading-blank': [RuleConfigSeverity.Error, 'always'],
    'footer-leading-blank': [RuleConfigSeverity.Warning, 'always'],
    'header-max-length': [RuleConfigSeverity.Error, 'always', 108],
    'subject-empty': [RuleConfigSeverity.Error, 'never'],
    'type-empty': [RuleConfigSeverity.Error, 'never'],
    'type-case': [RuleConfigSeverity.Error, 'always', 'sentence-case'],
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      ['Add', 'Fix', 'Update', 'Build', 'Docs', 'Optz', 'Chore', 'Style', 'Test']
    ]
  }
}

export default configuration
// <type>(<scope>): <subject> (#issue)

// type-case: [
//   'lower-case', // default
//   'upper-case', // UPPERCASE
//   'camel-case', // camelCase
//   'kebab-case', // kebab-case
//   'pascal-case', // PascalCase
//   'sentence-case', // Sentence case
//   'snake-case', // snake_case
//   'start-case', // Start Case
// ];
```

</details>

### Step 6: Create [`config/cz.config.mjs`](https://cz-git.qbb.sh/config/) file

<details>
  <summary>Show code</summary>

```javascript
/** @type {import('cz-git').CommitizenGitOptions} */
export default {
  skipQuestions: ['body', 'breaking'],
  messages: {
    type: 'Chọn TYPE đang commit:',
    scope: 'SCOPE (optional):',
    customScope: 'Nhập SCOPE:',
    subject: 'MESSAGE - Viết mô tả ngắn gọn về sự thay đổi:\n',
    body: 'BODY - Cung cấp mô tả DÀI HƠN về thay đổi (optional). Sử dụng "|" để ngắt dòng mới:\n',
    breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
    footerPrefixesSelect: 'Select the ISSUES type of changeList by this change (optional):',
    customFooterPrefix: 'Prefix ISSUES: ',
    footer: 'Liệt kê ISSUES. VD: #31, #34: ',
    generatingByAI: 'Generating your AI commit subject...',
    generatedSelectByAI: 'Select suitable subject by AI generated:',
    confirmCommit: 'Bạn có chắc chắn muốn tiếp tục với commit ở trên không??'
  },
  types: [
    {
      value: 'Add',
      name: 'Add:       Thêm tính năng mới (feature)'
    },
    {
      value: 'Update',
      name: 'Update:    Sửa code nhưng không thêm tính năng mới'
    },
    {
      value: 'Fix',
      name: 'Fix:       Sửa lỗi (bug fix)'
    },
    {
      value: 'Build',
      name: 'Build:     Những thay đổi hướng đến quá trình build'
    },
    {
      value: 'Docs',
      name: 'Docs:      Chỉ thay đổi documentation'
    },
    {
      value: 'Optz',
      name: 'Optz:      Cải thiện hiệu năng'
    },
    {
      value: 'Chore',
      name: 'Chore:     Các thay đổi khác mà không sửa đổi src hoặc test'
    },
    {
      value: 'Style',
      name: 'Style:     Thay đổi code không ảnh hưởng đến logic (chỉ thay đổi style)'
    },
    {
      value: 'Test',
      name: 'Test:      Thêm các test case bị thiếu hoặc sửa các test case hiện có'
    }
  ],
  issuePrefixes: [
    {
      value: 'link',
      name: 'link:     Link to ISSUES'
    }
  ]
}
```

</details>

### Step 7: Modify `package.json` to add `config` Specify the adapter use

```json
{
  "scripts": {
    "typecheck": "vue-tsc --build --force",
    "lint:lint-staged": "lint-staged -c ./.husky/lintstagedrc.mjs"
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-git",
      "czConfig": "./cz.config.mjs"
    }
  }
}
```

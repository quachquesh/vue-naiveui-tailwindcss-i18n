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

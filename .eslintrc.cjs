module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'standard',
    'prettier' // 就是这段配置
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/no-multiple-template-root': 0,
    'no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }],
    'prefer-const':0,
    'vue/no-v-model-argument':0,
    'vue/multi-word-component-names':0,
    'vue/no-mutating-props':0,
    'vue/valid-v-for':0,
    'eqeqeq':0,
    'no-var':0,
    'spaced-comment':0
  }
}
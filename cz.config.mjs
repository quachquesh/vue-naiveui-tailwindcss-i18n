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

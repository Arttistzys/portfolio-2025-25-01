import withTM from 'next-transpile-modules';

const originConfig = {
  reactStrictMode: true,
}
const nextConfig = withTM([
  'antd',
  '@ant-design/icons-svg',
  '@ant-design/icons',
  'rc-util',
  "rc-image",
  "rc-cascader",
  "rc-checkbox",
  "rc-collapse",
  "rc-dialog",
  "rc-drawer",
  "rc-dropdown",
  "rc-field-form",
  "rc-image",
  "rc-input",
  "rc-input-number",
  "rc-mentions",
  "rc-menu",
  "rc-motion",
  "rc-notification",
  "rc-pagination",
  "rc-picker",
  "rc-progress",
  "rc-rate",
  "rc-resize-observer",
  "rc-segmented",
  "rc-select",
  "rc-slider",
  "rc-steps",
  "rc-switch",
  "rc-table",
  "rc-tabs",
  "rc-textarea",
  "rc-tooltip",
  "rc-tree",
  "rc-tree-select",
  "rc-upload"
])(originConfig);

export default nextConfig;

/**
 * @typedef {import('unified').Preset} Preset
 */

import remarkReferenceLinks from 'remark-reference-links';
import remarkOrderLinks from 'remark-order-reference-links';
import remarkDirective from 'remark-directive';
import { preserveDirectiveSpacing } from './preserve-directive-spacing.js';

/** @type {Preset} */
const mdxlintPresetWebPro = {
  // https://github.com/remarkjs/remark/blob/main/packages/remark-stringify/readme.md#options
  settings: {
    bullet: '-',
    emphasis: '_',
    tightDefinitions: true
  },
  plugins: [
    ['remark-frontmatter', ['yaml']],
    remarkDirective,
    preserveDirectiveSpacing,
    remarkOrderLinks,
    remarkReferenceLinks
  ]
};

export default mdxlintPresetWebPro;

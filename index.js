/**
 * @typedef {import('unified').Preset} Preset
 */

import remarkReferenceLinks from 'remark-reference-links';
import remarkOrderLinks from 'remark-order-reference-links';
import remarkDirective from 'remark-directive';
import remarkGFM from 'remark-gfm';
import remarkValidateRelativeLinks from 'remark-validate-relative-links';
import remarkWrapProse from '@webpro/remark-wrap-prose';
import { preserveDirectiveSpacing } from './preserve-directive-spacing.js';
import { preserveGfmAlerts } from './preserve-gfm-alerts.js';

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
    preserveGfmAlerts,
    remarkWrapProse,
    remarkGFM,
    remarkReferenceLinks,
    remarkOrderLinks,
    remarkValidateRelativeLinks
  ]
};

export default mdxlintPresetWebPro;

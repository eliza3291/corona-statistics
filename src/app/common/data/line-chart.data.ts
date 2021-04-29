import { BreakpointItem } from '../models';

export const DEFAULT_ITEM_WIDTH = 35;

/**
 * List of avaibales breakpoint width and the number of items to show for each one.
 */
export const ITEMS_PER_BREAKPOINT: BreakpointItem[] = [
  {
    width: 576,
    nrItems: 7
  },
  {
    width: 768,
    nrItems: 14
  },
  {
    width: 992,
    nrItems: 21
  },
  {
    width: 1600,
    nrItems: 28
  }
];

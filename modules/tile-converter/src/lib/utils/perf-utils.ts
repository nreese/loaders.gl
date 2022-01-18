import {promises as fs} from 'fs';
import {PerformanceObserver, PerformanceObserverEntryList, PerformanceEntry} from 'perf_hooks';

let obs: PerformanceObserver;
let perfData: PerformanceEntry[] = [];

/**
 * Create observer that will gather performance measure data
 */
export function initPerformanceObserver(): void {
  resetPerfData();
  obs = new PerformanceObserver((items: PerformanceObserverEntryList) => {
    const perfEntry = items.getEntries()[0];
    perfData.push(perfEntry);
  });
  obs.observe({entryTypes: ['measure']});
}

/**
 * Reset perfData array
 */
export function resetPerfData() {
  perfData = [];
}

/**
 * Save `perfData` log in `json` file
 * @param tilesetName Tileset name to save log with unique file name
 */
export async function writePerformanceLog(tilesetName: string): Promise<void> {
  await fs.writeFile(`./${tilesetName}.perf-log.json`, JSON.stringify(perfData));
}
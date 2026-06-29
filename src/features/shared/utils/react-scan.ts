import { scan } from 'react-scan';

export function scanReactApp() {
  scan({
    enabled: true,
    log: true, // logs render info to console (default: false)
  });
}

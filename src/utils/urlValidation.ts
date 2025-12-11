/**
 * Validates that a URL is safe to use in href attributes.
 * Prevents javascript:, data:, and other dangerous protocols.
 * 
 * @param url - The URL to validate
 * @returns The validated URL if safe, or '#' if unsafe
 */
export function validateUrl(url: string | undefined): string {
  if (!url) {
    return '#';
  }

  try {
    const urlObj = new URL(url, window.location.origin);
    const protocol = urlObj.protocol.toLowerCase();

    // Allow only safe protocols
    const allowedProtocols = ['http:', 'https:', 'mailto:'];
    
    if (!allowedProtocols.includes(protocol)) {
      console.warn(`Unsafe URL protocol detected: ${protocol}. URL: ${url}`);
      return '#';
    }

    return url;
  } catch (error) {
    // If URL parsing fails, it might be a relative URL or invalid URL
    // For relative URLs starting with /, allow them
    if (url.startsWith('/')) {
      return url;
    }
    
    // For mailto links without protocol, add it
    if (url.startsWith('mailto:')) {
      return url;
    }

    console.warn(`Invalid URL format: ${url}`);
    return '#';
  }
}

/**
 * Checks if a URL is external (not same origin)
 * 
 * @param url - The URL to check
 * @returns true if the URL is external
 */
export function isExternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url, window.location.origin);
    return urlObj.origin !== window.location.origin;
  } catch {
    // If parsing fails, assume it's relative (not external)
    return !url.startsWith('/') && !url.startsWith('#');
  }
}


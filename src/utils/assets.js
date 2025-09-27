/**
 * Get the correct path for public assets (images, audio, etc.)
 * Automatically handles base path for GitHub Pages deployment
 * 
 * Examples:
 *   getAssetPath("images/logo.png") → "/images/logo.png" (development)
 *   getAssetPath("images/logo.png") → "/my-repo/images/logo.png" (GitHub Pages)
 *   getAssetPath("audio/music.mp3") → "/my-repo/audio/music.mp3" (GitHub Pages)
 * 
 * @param {string} path - Path to asset (without leading slash)
 * @returns {string} - Complete path with base URL
 */
export function getAssetPath(path) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.startsWith("/") ? path.slice(1) : path}`;
}

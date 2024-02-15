/**
 * A wait function to simulate slow network for testing loading skeletons
 * 
 * @param timeout The timeout duration in milliseconds
 * @returns Promise
 */
export async function wait(timeout = 2000) {
  return await new Promise((r) => setTimeout(r, timeout));
}
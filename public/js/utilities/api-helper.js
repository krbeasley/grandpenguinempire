
export const ROOT_URL = () => {
  let current_url = new URL(window.location.href)
  let hasPort = current_url.port.length > 0;

  return `${current_url.protocol}//${current_url.hostname}${hasPort ? ":" + current_url.port : ""}`;
}

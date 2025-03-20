export { projects } from "../../data/projects.js";

export const GET = () => {
  return new Response(JSON.stringify(projects), {
    headers: { "Content-Type": "application/json" },
  });
};

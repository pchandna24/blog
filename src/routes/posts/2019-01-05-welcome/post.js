export default {
  title: `blog.init()`,
  tags: ["first", "post"],
  spoiler: "First blog post.",
  getContent: () => import("./document.mdx")
};

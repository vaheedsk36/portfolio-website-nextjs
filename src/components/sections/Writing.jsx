import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import Container from "../Container";
import BorderBeam from "../ui/BorderBeam";
import { FadeInUp } from "../ui/TextReveal";
import { getMediumPosts } from "@/lib/medium";
import { formatDateMono } from "@/lib/utils";

export default async function Writing() {
  const posts = await getMediumPosts(3);

  return (
    <section id="writing" className="py-24 md:py-32 relative">
      <Container>
        <FadeInUp>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                § 05 — Writing
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-fg">
                Notes from the trenches
              </h2>
              <p className="mt-3 text-muted">Recent posts on Medium.</p>
            </div>
            <a
              href="https://medium.com/@vaheedsk36"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted hover:text-accent transition-colors group inline-flex items-center gap-1.5"
            >
              All posts
              <IconArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </FadeInUp>

        {posts.length === 0 ? (
          <p className="mt-12 text-muted">No posts to show right now.</p>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 group-dim">
            {posts.map((p, i) => (
              <FadeInUp key={p.slug} delay={i * 0.08}>
                <PostCard post={p} />
              </FadeInUp>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

function PostCard({ post }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      data-group-item
      className="group/card relative h-full flex flex-col rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      <BorderBeam size={150} duration={9} />

      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">
          {formatDateMono(post.publishedAt)}
        </span>
        {post.readTimeInMinutes && (
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-subtle">
            {post.readTimeInMinutes} min read
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg md:text-xl font-semibold text-fg group-hover/card:text-accent transition-colors">
        {post.title}
      </h3>
      <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3 flex-1">
        {post.brief}
      </p>

      <div className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-fg/70 group-hover/card:text-accent transition-colors">
        Read post
        <IconArrowUpRight className="size-3 transition-transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5" />
      </div>
    </a>
  );
}

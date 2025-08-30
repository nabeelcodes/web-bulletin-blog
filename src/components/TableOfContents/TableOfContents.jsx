import { useEffect, useState } from "react";

const HeadingAnchor = ({ item, isItemActive }) => {
  return (
    <a
      target="_self"
      href={`#${item}`}
      className={isItemActive ? "active" : ""}
    >
      {item.replaceAll("-", " ")}
    </a>
  );
};

export default function TableOfContents({ parsedHeadingIds }) {
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    // insert proper comment
    const headingNodes = document.querySelectorAll(
      "#main-content-body h2, #main-content-body h3, #main-content-body h4, #main-content-body h5, #main-content-body h6",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting && setActiveItem(entry.target.id);
        });
      },
      {
        rootMargin: "0px 0px -25% 0px",
      },
    );

    headingNodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <aside className="navigationPane">
      <h3>In this article</h3>

      <div>
        {parsedHeadingIds.map((item, index) => (
          <HeadingAnchor
            item={item}
            key={index}
            isItemActive={item === activeItem}
          />
        ))}
      </div>
    </aside>
  );
}

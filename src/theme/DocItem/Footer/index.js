import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { ThemeClassNames } from "@docusaurus/theme-common";
import TagsListInline from "@theme/TagsListInline";
import clsx from "clsx";
import { LifeBuoy, MessageSquareMore, Pencil } from "lucide-react";
import React from "react";

import s from "./styles.module.css";

export default function DocItemFooter() {
  const { metadata } = useDoc();
  const { editUrl, lastUpdatedAt, lastUpdatedBy, tags } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }
  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, "docusaurus-mt-lg")}
    >
      {canDisplayTagsRow && (
        <div
          className={clsx(
            "row margin-top--sm",
            ThemeClassNames.docs.docFooterTagsRow,
          )}
        >
          <div className="col">
            <TagsListInline tags={tags} />
          </div>
        </div>
      )}
      <div className={s.actions}>
        {canDisplayEditMetaRow && (
          <a href={editUrl} target={"_blank"} rel="noreferrer">
            <Pencil size={12} />
            Edit this page
          </a>
        )}

        <a
          href={"https://discord.gg/XjPDqEWyC7"}
          target={"_blank"}
          rel="noreferrer"
        >
          <LifeBuoy size={12} />
          Help
        </a>
        <a
          href={
            "https://github.com/fobe-projects/fobe-documentation-web/issues/new"
          }
          target={"_blank"}
          rel="noreferrer"
        >
          <MessageSquareMore size={12} />
          Feedback
        </a>
      </div>

      <div className={s.links}>
        Copyright © 2024–{new Date().getFullYear()} FoBE Studio. All rights
        reserved. | <a href={"disclaimer"}>Disclaimer</a> |{" "}
        <a href={"privacy"}>Privacy</a> |{" "}
        {/* The cookie consent modal only shows when theres attached GTM container with CookieYes integration */}
        <a href="#" className="cky-banner-element">
          Manage Cookies Settings
        </a>
      </div>
    </footer>
  );
}

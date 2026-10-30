import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-2 sm:mb-4">
      <ol className="flex flex-nowrap items-center gap-x-1 overflow-hidden text-[10px] leading-tight text-[var(--ink-soft)] sm:gap-x-2 sm:text-sm sm:leading-normal">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={`${item.label}-${index}`}
              className={`flex min-w-0 items-center gap-1 sm:gap-2 ${
                isLast ? "min-w-0 flex-1" : "flex-shrink-0"
              }`}
            >
              {index > 0 && (
                <span aria-hidden="true" className="flex-shrink-0 text-[var(--line)]">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="whitespace-nowrap transition-colors hover:text-[var(--cognac)]"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast
                      ? "truncate font-medium text-[var(--ink)]"
                      : "whitespace-nowrap"
                  }
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

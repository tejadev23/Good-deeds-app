"use client";

import { CloseCircleLinear, MagniferLinear } from "solar-icon-set";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CATEGORY_LIST } from "@/config/categories";
import { cn } from "@/lib/utils";
import type { DeedCategory } from "@/types";

type FeedFiltersProps = {
  category: DeedCategory | "all";
  search: string;
  scope: "all" | "following";
  onCategory: (category: DeedCategory | "all") => void;
  onSearch: (search: string) => void;
  onScope: (scope: "all" | "following") => void;
};

export function FeedFilters({ category, search, scope, onCategory, onSearch, onScope }: FeedFiltersProps) {
  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <MagniferLinear size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search deeds, people or places"
            aria-label="Search the feed"
            className="rounded-full pl-11 pr-11"
          />
          {search && (
            <Button variant="subtle" size="icon-xs" className="absolute right-1.5 top-1/2 -translate-y-1/2" onClick={() => onSearch("")} aria-label="Clear search">
              <CloseCircleLinear size={18} />
            </Button>
          )}
        </div>
        <Tabs value={scope} onValueChange={(v) => onScope(v as "all" | "following")}>
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="all" className="flex-1">
              Everyone
            </TabsTrigger>
            <TabsTrigger value="following" className="flex-1">
              Following
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-none sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter by category">
        <Button
          size="xs"
          variant={category === "all" ? "default" : "outline"}
          onClick={() => onCategory("all")}
          aria-pressed={category === "all"}
          className="h-9 px-4 text-sm"
        >
          All deeds
        </Button>
        {CATEGORY_LIST.map(({ id, label, icon: Icon, textClass, bgClass }) => {
          const active = category === id;
          return (
            <Button
              key={id}
              size="xs"
              variant="outline"
              onClick={() => onCategory(active ? "all" : id)}
              aria-pressed={active}
              className={cn("h-9 px-4 text-sm", active && cn(bgClass, textClass, "border-transparent hover:opacity-90"))}
            >
              <Icon size={16} className={cn(!active && textClass)} />
              {label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

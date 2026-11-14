"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { Deed } from "@/types";

import { DeedCard } from "./DeedCard";

const PAGE_SIZE = 8;

/** Renders deeds in pages so long feeds stay light. */
export function DeedList({ deeds, resetKey }: { deeds: Deed[]; resetKey?: string }) {
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [resetKey]);

  return (
    <div className="space-y-5">
      {deeds.slice(0, visible).map((deed) => (
        <DeedCard key={deed.id} deed={deed} />
      ))}
      {visible < deeds.length && (
        <div className="flex justify-center pt-2">
          <Button variant="outline" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
            Show more deeds ({deeds.length - visible} more)
          </Button>
        </div>
      )}
      {visible >= deeds.length && deeds.length > PAGE_SIZE && (
        <p className="py-4 text-center text-sm text-muted-foreground">You&apos;re all caught up 🌿 Thanks for spreading kindness.</p>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function PriceFilter() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);

  return (
    <AccordionItem value="price">
      <AccordionTrigger className="hover:no-underline">
        Price Range
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-4 ">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Label htmlFor="min-price">Min</Label>
              <Input
                id="min-price"
                type="number"
                min="0"
                max={priceRange[1]}
                value={priceRange[0]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setPriceRange([value, priceRange[1]]);
                }}
                className="h-8 w-13"
              />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="max-price">Max</Label>
              <Input
                id="max-price"
                type="number"
                min={priceRange[0]}
                max="200"
                value={priceRange[1]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setPriceRange([priceRange[0], value]);
                }}
                className="h-8 w-13"
              />
            </div>
          </div>
          <Slider
            min={0}
            max={200}
            step={1}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}+</span>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

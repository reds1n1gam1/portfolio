<script setup lang="ts">
import { ExternalLinkIcon } from "lucide-vue-next";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
</script>

<template>
  <div class="md:container md:mx-auto px-4 py-12">
    <div class="grid grid-cols-3 gap-4">
      <div>
        <section>
          <img src="" alt="" />
          <h2
            class="scroll-m-20 border-b pb-2 mb-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          >
            Intro
          </h2>
          <p class="leading-7 [&:not(:first-child)]:mt-6">
            Frontend Engineer with 6+ years of experience building user-facing web
            applications. <br />
            Strong focus on high-quality UI, pixel-perfect implementation, responsive
            design and performance optimization
          </p>
          <p class="leading-7 [&:not(:first-child)]:mt-6">
            Experienced in translating Figma designs into production-ready interfaces and
            working across Angular, Vue and React ecosystems
          </p>
        </section>
        <Separator class="my-4" />
        <section>
          <h2>Links</h2>
          <div>github</div>
          <div>linkedin</div>
        </section>
      </div>

      <div>
        <section>
          <h2
            class="scroll-m-20 border-b pb-2 mb-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          >
            Projects
          </h2>
          <div class="flex w-full max-w-md flex-col gap-4">
            <Item variant="outline" as-child>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ItemContent>
                  <ItemTitle>External resource</ItemTitle>
                  <ItemDescription>
                    Opens in a new tab with security attributes.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ExternalLinkIcon class="size-4" />
                </ItemActions>
              </a>
            </Item>
          </div>
        </section>
      </div>

      <div>
        <section>
          <h2
            class="scroll-m-20 border-b pb-2 mb-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          >
            Open source
          </h2>
          <div class="flex w-full max-w-md flex-col gap-4">
            <Item variant="outline" as-child>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ItemContent>
                  <ItemTitle>External resource</ItemTitle>
                  <ItemDescription>
                    Opens in a new tab with security attributes.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ExternalLinkIcon class="size-4" />
                </ItemActions>
              </a>
            </Item>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

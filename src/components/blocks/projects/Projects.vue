<template>
    <div class="flex w-full max-w-md flex-col gap-4">
        <Item variant="outline" as-child v-for="project in projects">
            <a :href="project.link" target="_blank" rel="noopener noreferrer">
                <ItemContent>
                    <ItemTitle>{{ project.name }}</ItemTitle>
                    <ItemDescription>
                        {{ project.description }}
                    </ItemDescription>
                </ItemContent>
                <ItemActions>
                    <IconExternalLinkFilled class="size-4" />
                </ItemActions>
            </a>
        </Item>
    </div>
</template>

<script setup lang="ts">
import { IconExternalLinkFilled } from "@tabler/icons-vue";
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemTitle,
} from "@/components/ui/item";
import { ref, type Ref } from "vue";

type Project = {
    link: string,
    name: string,
    description: string;
}

const projects: Ref<Project[]> = ref([
    {
        link: 'https://swot-online.com/',
        name: 'SWOT online tool',
        description: 'small web-based SWOT analysis tool from scratch using Vue 3 and TypeScript'
    }
])

</script>

<style scoped></style>
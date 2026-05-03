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
import { type Ref, ref } from "vue";



type Project = {
    link: string,
    name: string,
    description: string;
}

const projects: Ref<Project[]> = ref([
    {
        link: 'https://github.com/reds1n1gam1/w1251-decoder',
        name: 'Windows file decoding utility — JavaScript  ',
        description: 'Developed a small utility for decoding Windows-specific file formats.'
    },
    {
        link: 'https://gitlab.com/s1n1gam1-public-projects/RSADecrypt',
        name: 'RSA decryption tool — Java  ',
        description: 'Developed a utility for decrypting data using the RSA algorithm.'
    },
])
</script>

<style scoped></style>
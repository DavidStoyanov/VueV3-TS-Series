<template>
    <div class="job-list">
        <ul>
            <li v-for="job in jobs" :key="job.id">
                <h2><span v-case:pascal>{{ job.title }}</span> in <span v-case:pascal>{{ job.location }}</span></h2>
                <div class="salary">
                    <span>position: {{ job.title }}</span>
                    <span>salary: {{ job.salary }}$</span>
                </div>
                <div class="description">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ad hic quia.
                        Recusandae excepturi voluptatum aperiam dolores. Nostrum ad cupiditate,
                        quasi error ab nesciunt sequi soluta,consectetur in modi praesentium?
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Job from '@/types/Job'

export default defineComponent({
    props: {
        jobs: {
            required: true,
            type: Array as PropType<Job[]>
        }
    }
})
</script>

<style>
    * {
        font-size: 1.10rem;
    }

    .salary span {
        display: inline-block;
        background: #BBB;
        padding: 0.75rem 1rem;
        margin: 0.3rem 0.5rem;
        font-size: large;
        font-weight: bold;
        border: 1px solid black;
        border-radius: 1rem;
    }

    .description p {
        max-width: 1200px;
        margin-left: 0.5rem;
    }
</style>
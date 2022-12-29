<template>
    <div class="job-list">
        <ul>
            <li v-for="job in orderedJobs" :key="job.id">
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
import { computed, defineComponent, PropType } from 'vue'
import Job from '@/types/Job'
import OrderTerm from '@/types/OrderTerm'
import { sortStringMixin, sortNumberMixin } from '@/utils/sort'

export default defineComponent({
    props: {
        jobs: {
            required: true,
            type: Array as PropType<Job[]>
        },
        order: {
            required: false,
            type: String as PropType<OrderTerm>
        }
    },
    setup(props) {
        const getJobsSorted = (a: Job, b: Job): number => {
            switch (props.order) {
                case 'default': return sortStringMixin(a.id, b.id)
                case 'title-low': return sortStringMixin(a.title, b.title)
                case 'title-high': return sortStringMixin(b.title, a.title)
                case 'location-low': return sortStringMixin(a.location, b.location)
                case 'location-high': return sortStringMixin(b.location, a.location)
                case 'salary-low': return sortNumberMixin(a.salary, b.salary)
                case 'salary-high': return sortNumberMixin(b.salary, a.salary)
                default: return sortStringMixin(a.id, b.id)
            }
        }

        const orderedJobs = computed(() => {
            return [...props.jobs].sort((a: Job, b: Job) => getJobsSorted(a, b))
        })

        return { orderedJobs }
    }
})
</script>

<style>
    li {
        margin-bottom: 2.5rem;
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
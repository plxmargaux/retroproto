<template>
    <div class="dashboard project">
        <h2>{{ project.title }}</h2>
        <p>Date de création: <span class="project__date">{{ project.date }}</span></p>

        <v-layout row>
            <v-flex sm12>
                <v-card>
                    <v-list class="retros">
                        <v-list-tile
                                v-for="retro in project.retros"
                                :key="retro.title"
                                :class="retro.archived ? 'archived' : ''">

                            <v-list-tile-title v-html="retro.title">
                            </v-list-tile-title>

                            <v-list-tile-action>
                                <v-btn :disabled="retro.archived" @click="linkToProject(retro.id)" class="default small">
                                    Consulter
                                </v-btn>

                                <a v-if="!retro.archived" @click="archive(retro)">Archiver</a>
                                <a v-if="retro.archived" @click="reopen(retro)">Réouvrir</a>
                            </v-list-tile-action>

                            <v-list-tile-content>
                                <span>{{ retro.date }}</span>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: 'Project',
        props: ['projectId'],
        data() {
            return {
                project: {},
                sharedState: this.$store.state
            }
        },
        mounted() {
            if (this.projectId) {
                this.project = this.sharedState.projects[this.projectId]
            }
        },
        methods: {
            archive(retro) {
                retro.archived = true
            },

            reopen(retro) {
                retro.archived = false
            },

            linkToProject(retroId) {
                this.$router.push({
                    name: 'retro',
                    params: {
                        retroId: retroId,
                        projectId: this.projectId
                    }
                })
            }

        },
        watch: {
            '$route' () {
                if (this.projectId) {
                    this.project = this.sharedState.projects[this.projectId]
                }
            }
        }
    }
</script>

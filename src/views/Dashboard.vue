<template>
    <div class="dashboard">
        <h2>Liste des projets</h2>

        <v-container grid-list-xl text-xs-center>
            <v-layout row wrap>
                <v-flex class="project" v-for="project in sharedState.projects" :key="project.title" xs6>
                    <v-card>
                        <v-avatar class="project__img">
                            <v-img class="project__img-img" :src="project.icon"></v-img>
                        </v-avatar>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{ project.title }}</h3>
                                <div>{{ project.desc }}</div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-btn @click="linkToProject(project.id)" class="default" color="primary">Consulter</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard',
        data () {
            return {
                privateState: {},
                sharedState: this.$store.state
            }
        },
        methods: {
            linkToProject (projectId) {
                this.$router.push({
                    name: 'project',
                    params: {
                        projectId: projectId
                    }
                })
            }
        }
    }
</script>

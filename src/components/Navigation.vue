<template>
    <v-content>
        <v-navigation-drawer
                :mini-variant.sync="mini"
                v-model="drawer"
                stateless
                app

                class="navigation"
        >

            <v-list class="py-20" two-line>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-list-tile-title class="navigation__title-logo">
                            <router-link to="/dashboard">Retro.</router-link>
                        </v-list-tile-title>
                    </v-list-tile-action>
                    <v-list-tile-content></v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon
                               @click.stop="mini = !mini"
                        >
                            <v-icon>chevron_left</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
                <v-divider></v-divider>
            </v-list>

            <v-list class="pt-10" dense>
                <div v-for="project in sharedState.projects"
                     :key="project.title"
                     class="navigation__project">
                    <a class="d-flex" @click="linkToProject(project.id)">
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-list-tile-avatar>
                                    <img :src="project.icon">
                                </v-list-tile-avatar>
                            </v-list-tile-action>

                            <v-list-tile-content>
                                <v-list-tile-title>{{ project.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </a>
                </div>

                <v-list-tile class="navigation__project">
                    <v-list-tile-action>
                        <v-list-tile-avatar>
                            <img src="./../assets/more.jpg">
                        </v-list-tile-avatar>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>Ajouter</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

            </v-list>

            <v-list class="pa-10">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/women/78.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>Nom de l'user</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </v-content>
</template>

<script>
    export default {
        name: 'Navigation',
        data() {
            return {
                drawer: true,
                mini: true,
                right: null,
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
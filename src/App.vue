<template>
    <v-app>
        <v-content>
            <div v-if="$route.name != 'home'">
                <Navigation/>
                <Toolbar/>
            </div>
            <transition name="fade" mode="out-in">
                <router-view key="$route.fullPath"></router-view>
            </transition>
        </v-content>
        <v-footer class="pa-3">
            <v-spacer></v-spacer>
            <div>Emakina &copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<script>
    import Navigation from './components/Navigation'
    import Toolbar from './components/Toolbar'

    export default {
        name: 'App',
        components: {
            Navigation,
            Toolbar
        },
        data() {
            return {
               //
            }
        }
    }
</script>

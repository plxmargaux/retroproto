<template>
    <v-toolbar flat prominent class="toolbar">
        <div class="search">
            <v-text-field
                    label="Rechercher"
                    append-icon="search"
            ></v-text-field>
        </div>
        <v-spacer></v-spacer>

        <v-btn class="default" color="primary">Commencer une Rétro</v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name: 'Toolbar',
        data () {
            return {
               //
            }
        }
    }
</script>
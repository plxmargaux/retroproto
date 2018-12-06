<template>
    <div class="retro">
        <h2>{{ retro.title }}</h2>
        <v-container grid-list-md text-xs-center>
            <v-layout row nowrap>
                <!-- Columns -->
                <v-flex class="retro__column" v-for="(column, columnkey) in columns" :key="columnkey">
                    <v-card class="retro__card-container">
                        <v-card-text class="pa-10 d-flex">
                            <span>{{ column.name }}</span>
                            <a title="supprimer une colonne" @click="removeColumn(columnkey)">supprimer</a>
                        </v-card-text>

                        <!-- Cards -->
                        <v-card v-for="(card, cardKey) in column.cards" :key="cardKey" class="card-container__element">
                            {{ card.content }}
                            <a class="card-container__delete" title="supprimer une carte"
                               @click="removeCard(columnkey, cardKey)">✕</a>
                        </v-card>

                        <!--Add a card-->
                        <v-card class="card-container__element">
                            <v-textarea
                                    box
                                    name="cardName"
                                    label="Écrivez quelque chose..."
                                    auto-grow
                                    v-model="column.cardContent"
                            ></v-textarea>
                            <v-btn :disabled="!column.cardContent" class="default small ma-0"
                                   @click="addCard(columnkey)">
                                Ajouter
                            </v-btn>
                        </v-card>
                    </v-card>
                </v-flex>

                <!-- Add a column-->
                <v-flex class="retro__column">
                    <v-card class="retro__card-container add">
                        <v-card-text class="px-2 pb-10 pt-0">
                            <v-text-field
                                    name="retroName"
                                    label="Ajouter"
                                    single-line
                                    v-model="retroName"
                            ></v-text-field>
                            <v-btn :disabled="!retroName" class="default small ma-0" @click="addColumn">Ajouter</v-btn>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <div class="d-inline-flex retro__pdf-btn">
            <v-text-field name="pdfName"
                          label="Nom du pdf"
                          v-model="pdfName"
                          single-line></v-text-field>
            <v-btn :disabled="!pdfName" @click="exportPdf" class="default">Exporter</v-btn>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import jsPDF from 'jspdf'
    import 'jspdf-autotable'

    export default {
        name: 'Retro',
        props: ['retroId', 'projectId'],
        data() {
            return {
                retro: {},
                pdfName: '',
                maxCards: 0,
                sharedState: this.$store.state,
                retroName: '',
                card: null,
                cards: [],
                columns: {
                    'startdoing': {
                        name: 'Start doing'
                    },
                    'stopdoing': {
                        name: 'Stop doing'
                    },
                    'continuedoing': {
                        name: 'Continue doing'
                    }
                }
            }
        },
        mounted() {
            if (this.projectId && this.retroId) {
                this.retro = this.sharedState.projects[this.projectId].retros[this.retroId]
            }
        },
        methods: {
            addColumn() {
                let name = this.retroName
                let key = this.retroName.replace(/\s+/g, '').toLowerCase();
                Vue.set(this.columns, key, {name: name})
            },

            removeColumn(key) {
                Vue.delete(this.columns, key)
            },

            addCard(column) {
                let content = this.columns[column].cardContent

                if (!this.columns[column].cards) {
                    Vue.set(this.columns[column], 'cards', new Array())
                }

                this.columns[column].cards.push({
                    content: content
                })

                if (this.columns[column].cards.length > this.maxCards) {
                    this.maxCards = this.columns[column].cards.length
                }

                console.log(this.maxCards)
            },

            removeCard(column, cardId) {
                const _column = this.columns[column]

                if (_column.cards.length === 1) {
                    Vue.delete(_column, 'cards')
                } else {
                    this.columns[column].cards.splice(cardId, 1)
                }
            },

            exportPdf() {
                let columns = [],
                    rows = []

                for (let column in this.columns) {
                    if (this.columns.hasOwnProperty(column)) {
                        let currentColumn = this.columns[column]
                        columns.push(currentColumn.name)

                        for (let i = 0; i < this.maxCards; i++) {
                            if (typeof rows[i] === 'undefined') {
                                rows[i] = []
                            }

                            if (currentColumn.cards && typeof currentColumn.cards[i] !== 'undefined' && typeof currentColumn.cards[i].content !== 'undefined') {
                                rows[i].push(currentColumn.cards[i].content)
                            } else {
                                rows[i].push(" ")
                            }
                        }
                    }
                }

                let doc = new jsPDF('p', 'pt')
                doc.autoTable(columns, rows);
                doc.save(this.pdfName + '.pdf')
            }
        }

    }
</script>

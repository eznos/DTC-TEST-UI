<template>
  <v-app>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      height="350"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 mb-4">Calendar</h1>
          <h4 class="subheading">ปฏิทินในรูปแบบต่าง ๆ</h4>
          <h4 class="subheading">ตั่งโต็ะ แขวน พกพา และโปสเตอร์</h4>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row>
      <template>
        <v-container fluid>
          <v-data-iterator
            :items="items"
            :items-per-page.sync="itemsPerPage"
            hide-default-footer
            :sort-by="sortBy.toLowerCase()"
            :sort-desc="sortDesc"
          >
            <template v-slot:header>
              <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
              </v-toolbar>
            </template>
            <template v-slot:default="props">
              <v-row>
                <v-col
                  v-for="item in props.items"
                  :key="item.id"
                  cols="12"
                  xs="12"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-card :disabled="item.deleted">
                    <v-card-title class="subheading font-weight-bold">
                      {{ item.name }}
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>ราคา:</v-list-item-content>
                        <v-list-item-content class="align-end">
                          {{ item.price }} บาท
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>จำนวน:</v-list-item-content>
                        <v-list-item-content class="align-end">
                          {{ item.amount }}
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>ประเภท:</v-list-item-content>
                        <v-list-item-content
                          class="align-end"
                          v-if="item.type == 'desk'"
                        >
                          <!-- {{ item.type }} -->
                          ตั้งโต็ะ
                        </v-list-item-content>
                        <v-list-item-content
                          class="align-end"
                          v-if="item.type == 'hanging'"
                        >
                          <!-- {{ item.type }} -->
                          แขวน
                        </v-list-item-content>
                        <v-list-item-content
                          class="align-end"
                          v-if="item.type == 'pocket'"
                        >
                          <!-- {{ item.type }} -->
                          พกพา
                        </v-list-item-content>
                        <v-list-item-content
                          class="align-end"
                          v-if="item.type == 'poster'"
                        >
                          <!-- {{ item.type }} -->
                          โปสเตอร์
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>สถานะ</v-list-item-content>
                        <v-list-item-content
                          class="align-end"
                          v-if="item.deleted == true"
                        >
                          <v-chip color="red">ยกเลิก</v-chip>
                        </v-list-item-content>
                        <v-list-item-content
                          class="align-end"
                          v-if="item.deleted == false"
                        >
                          <v-chip color="green">ขายปกติ</v-chip>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>ภาพประกอบ</v-list-item-content>
                        <v-list-item-content class="align-end">
                          <v-img
                            :src="`${item.image}`"
                            height="200"
                            width="200"
                          >
                          </v-img>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
              </v-row>
            </template>
          </v-data-iterator>
        </v-container>
      </template>
    </v-row>
  </v-app>
</template>

<script>
import axios from "axios";
import { apiUrl } from "../../url";
export default {
  data: () => {
    return {
      keys: ["name"],
      search: "",
      filter: {},
      sortDesc: false,
      sortBy: "name",
      itemsPerPage: "",
      items: [],
    };
  },

  created() {
    this.getData();
  },
  methods: {
    getData() {
      var config = {
        method: "get",
        url: apiUrl + "/v1/overviews/test",
        headers: {
          "x-api-key": "339ea1bdb4c96a94b5291cec559b50e2",
        },
      };

      axios(config)
        .then((response) => {
          this.items = response.data.result;
          this.itemsPerPage = this.items.length;
          console.log(this.items.length);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>

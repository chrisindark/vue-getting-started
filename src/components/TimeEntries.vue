<template>
  <div class="row">
    <div class="col-sm-3">
      <sidebar :time="totalTime"></sidebar>
    </div>
    <div class="col-sm-9">
      <!--<div v-if="$route.path !== '/time-entries/log-time'">-->
        <!--<button class="btn btn-primary" @click="goToRoute">-->
          <!--Log Time-->
        <!--</button>-->
      <!--</div>-->

      <!--<div v-if="$route.path === '/time-entries/log-time'">-->
        <!--<h3>Log Time</h3>-->
      <!--</div>-->
      <div>
        <button class="btn btn-primary" @click="showLog = !showLog">
          Log Time
        </button>
      </div>

      <hr>

      <!--<router-view></router-view>-->
      <logtime :timeEntries="timeEntries" v-if="showLog" v-on:timeUpdate="timeUpdate"></logtime>

      <div class="time-entries">
        <p v-if="!timeEntries.length"><strong>No time entries yet</strong></p>

        <div class="list-group">

          <a class="list-group-item" v-for="timeEntry in timeEntries" v-bind:key="timeEntry.id">
            <div class="row">

              <div class="col-sm-2 user-details">
                <img :src="timeEntry.user.image" class="avatar img-circle img-responsive" />
                <p class="text-center">
                  <strong>
                    {{ timeEntry.user.firstName }}
                    {{ timeEntry.user.lastName }}
                  </strong>
                </p>
              </div>

              <div class="col-sm-2 text-center time-block">
                <h3 class="list-group-item-text total-time">
                  <i class="glyphicon glyphicon-time"></i>
                  {{ timeEntry.totalTime }}
                </h3>
                <p class="label label-primary text-center">
                  <i class="glyphicon glyphicon-calendar"></i>
                  {{ timeEntry.date }}
                </p>
              </div>

              <div class="col-sm-7 comment-section">
                <p>{{ timeEntry.comment }}</p>
              </div>

              <div class="col-sm-1">
                <button class="btn btn-xs btn-danger delete-button"
                        @click="deleteTimeEntry(timeEntry)">x</button>
              </div>

            </div>
          </a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import LogTime from './LogTime.vue';

export default {
  components: {
    sidebar: Sidebar,
    logtime: LogTime,
  },
  name: 'timeEntries',
  data() {
    this.$on('totalTimeDelete', (timeEntry) => {
      this.totalTimeDelete(timeEntry);
    });

    this.$on('totalTimeUpdate', (timeEntry) => {
      this.totalTimeUpdate(timeEntry);
    });

    // We want to start with an existing time entry
    const existingEntry = {
      id: 1,
      user: {
        id: 1,
        firstName: 'Ryan',
        lastName: 'Chenkie',
        email: 'ryanchenkie@gmail.com',
        image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250',
      },
      comment: 'First time entry',
      totalTime: 1.5,
      date: '2016-04-08',
    };
    return {
      // Start out with the existing entry
      // by placing it in the array
      timeEntries: [existingEntry],
      // Start with the same value as our
      // first time entry. Hard-coded for now
      // because we'll use a different approach
      // in the next article anyway
      totalTime: 1.5,
      showLog: false,
    };
  },
  methods: {
    goToRoute() {
      this.$router.push({
        name: 'LogTime',
      });
    },
    deleteTimeEntry(timeEntry) {
      // Get the index of the clicked time entry and splice it out
      const index = this.timeEntries.indexOf(timeEntry);
      this.timeEntries.splice(index, 1);
      this.$emit('totalTimeDelete', timeEntry);
    },
    timeUpdate(timeEntry) {
      this.timeEntries.push(timeEntry);
      this.$emit('totalTimeUpdate', timeEntry);
    },
    // Increment the totalTime value based on the new
    // time entry that is emitted up
    totalTimeUpdate(timeEntry) {
      this.totalTime += parseFloat(timeEntry.totalTime);
    },
    // Decrement totalTime when a time entry is deleted
    totalTimeDelete(timeEntry) {
      this.totalTime -= parseFloat(timeEntry.totalTime);
    },
  },
};
</script>

<style>
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>

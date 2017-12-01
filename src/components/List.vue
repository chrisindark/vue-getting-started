<template>
  <div>
    <h1>My To Do List</h1>
    <br>
    <form>
      <div class="form-group">
        <label for="newItem"></label>
        <input id="newItem" name="newItem" v-model="newItem" >
        <button @click="addItemToList">Add</button>
      </div>
    </form>
    <br>
    <!--displays list -->
    <ul>
      <li v-for="item in listItems" v-bind:key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data() {
    return {
      listItems: [
        {
          id: 1,
          name: 'buy food',
        },
        {
          id: 2,
          name: 'play games',
        },
        {
          id: 3,
          name: 'sleep',
        },
      ],
      newItem: '',
    };
  },
  methods: {
    addItemToList() {
      const tempItem = {};
      tempItem.id = this.listItems[this.listItems.length];
      tempItem.name = this.newItem;
      this.listItems.push(tempItem);
      this.newItem = '';
    },
  },
};
</script>

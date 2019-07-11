<template>
  <div>
    <h2>Home</h2>
    <transctions></transctions>
    <edit-transactions></edit-transactions>
  </div>
</template>

<script>
import Transctions from './Transactions.vue'
import EditTransactions from './EditTransactions.vue'

export default {
  components: {
    Transctions,
    EditTransactions
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <h3>Profile</h3>
    <br>
    <p><strong>NAME: </strong>{{ user.name }}</p>
    <p><strong>AGE: </strong>{{ user.age }}</p>
    <p><strong>FAVE ANIMAL: </strong>{{ user.faveAnimal }}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: () => ({
    user: {
      name: 'Orrie',
      age: 10,
      faveAnimal: 'Penguin',
    },
  }),
};
</script>

<style lang="scss" scoped>

</style>

<template>
  <Layout>
    
    <h1>Contentful + Gridsome Live Preview</h1>

    <article v-for="edge in $page.posts.edges" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
      <p>{{ edge.node.body }}</p>
    </article>
   
  </Layout>
</template>

<page-query>
query Posts {
  posts: allContentfulBlog {
    edges {
      node {
        id
        title
        body
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.article {
  margin-bottom: 40px;
}
</style>

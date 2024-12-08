---
aside: false
outline: false
title: Data Management Tool
tags: test, orm, schema
---

<script setup lang="ts">
import { useRoute, useData } from 'vitepress'

const route = useRoute()

const { isDark } = useData()

const tag = route.data.params.tag
console.log('James tag::', tag)
console.log('James params::', route.data.params)

const temp = 'James'

</script>

<OASpec :tags="[temp]" :isDark="isDark" hide-info hide-servers hide-paths-summary />

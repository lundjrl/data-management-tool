---
aside: false
outline: false
title: Data Management Tool
---

<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import {DEFAULT_OPERATION_SLOTS, useOpenapi, useTheme} from 'vitepress-openapi'

const route = useRoute()

const { isDark } = useData()

const openapi = useOpenapi()

const operationId = route.data.params.operationId
const operation = openapi.getOperation(operationId)

useTheme({
  operation: {
    slots: [
      ...DEFAULT_OPERATION_SLOTS,
      'tags'
    ]
  },
  response: {
    codeSelector: Object.keys(operation.responses).length > 3 ? 'select' : 'tabs'
  }
})

</script>

<OAOperation :operationId="operationId" :isDark="isDark" />

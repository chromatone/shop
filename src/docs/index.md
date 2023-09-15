---
title: Docs
desctiptions: Legal statements and agreements texts
---

<script setup>
import {data} from '../../db/shop.data'

</script>

<ul>
<li v-for="doc in data?.docs" :key="doc">
<a :href="`/docs/${doc.slug}/`">{{doc}}</a>
</li>
</ul>

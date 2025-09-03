<script lang="ts">
export default {   
    name: 'Timeline',
    data() {
        return {
            events: [
                { id: 0, date: '2020', title: 'Début de mes études', description: "J'ai commencé mes études en informatique." },
                { id: 1, date: '2021', title: 'Stage chez XYZ', description: "J'ai effectué un stage chez XYZ où j'ai travaillé sur des projets web." },
                { id: 2, date: '2022', title: 'Projet Open Source', description: "J'ai contribué à un projet open source populaire." },
                { id: 3, date: '2023', title: 'Alternance chez ABC', description: "Je travaille actuellement en alternance chez ABC, spécialisé en data et IA." },
            ]
        };
    }
};
</script>

<template>
    <div class="timeline">
      <div
        class="timeline-item"
        v-for="(event, index) in events"
        :key="event.id"
        :class="index % 2 === 0 ? 'left' : 'right'"
      >
        <div class="timeline-content">
          <h3>{{ event.title }}</h3>
          <span class="date">{{ event.date }}</span>
          <p>{{ event.description }}</p>
        </div>
      </div>
    </div>
  </template>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 2rem;
  height: 100%;
  margin: 2rem 0;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 0.5rem;
  background-color: black;
  top: 0;
  bottom: 0;
  left: 50%;
}

.timeline-item {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.timeline-item.left {
  align-self: flex-start;
  margin-right: auto;
}

.timeline-item.right {
  align-self: flex-end;
  margin-left: auto;
}

.timeline-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.date {
  font-size: 1rem;
  color: #888;
  margin-bottom: 0.5rem;
}
</style>

<template>
  <div>
    <div v-for="item in feed" class="item">
      <p class="idline"><span class="user">{{item.name}}</span><router-link :to="{ name: 'UserPage', params: {userID: item.userID}}"><span class="handle">@{{item.username}}</span></router-link><span class="time">{{item.created | since}}</span></p>
      <p class="comment">{{item.comment}}</p>
    </div>
  </div>
</template>

<script>
 import moment from 'moment';
 export default {
   name: 'FeedList',
   props: ['feed'],
   filters: {
     since: function(datetime) {
       moment.locale('en', {
	 relativeTime: {
	   future: 'in %s',
	   past: '%s',
	   s:  'seconds',
	   ss: '%ss',
	   m:  '1m',
	   mm: '%dm',
	   h:  'h',
	   hh: '%dh',
	   d:  'd',
	   dd: '%dd',
	   M:  ' month',
	   MM: '%dM',
	   y:  'a year',
	   yy: '%dY'
	 }
       });
       return moment(datetime).fromNow();
     },
   },
 }
</script>


<style scoped>
 .item {
     border-bottom: 1px solid #ddd;
     padding: 10px;
 }
 .comment {
     margin-top: 0px;
 }
 .idline {
     margin-bottom: 0px;
 }
 .user {
     font-weight: bold;
     margin-right: 10px;
 }
 .handle {
     margin-right: 10px;
     color: #666;
 }
 .time {
     float: right;
     color: #666;
 }
</style>
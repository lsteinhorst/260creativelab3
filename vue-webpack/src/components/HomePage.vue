<template>
    <div class="hero">
	<h1>WELCOME!</h1>
	<img v-bind:src="imagePath"/>
    <p>Picture By: <a href="https://www.flickr.com/photos/jryde/7989376286/in/photolist-daZDe1-8bGjXG-ai8prj-peFXAX-eka91Z-7DLMht-mEf8co-mEdEsx-8xyYT7-mEdApc-dMR13Q-7kLN94-7N9JBB-eb9Kfn-rS2keZ-8SddgH-8m8QcL-oTMCRy-G21z4V-2333CK-mEdDUZ-sbXuze-ceXoZ7-6jAVBk-cfqjW1-J7pQk-f2MbXR-mYNSKT-e9mqmf-bX8God-a21ZAR-nt4Qxk-dGGuo-eFG2jC-cUWM8u-nh3jNr-9YXhXR-4jKd5-4YSusq-faqcPK-eTrCue-9p2cyH-6vx6LE-233knn-d55wCf-5789Bd-232sbc-eP2TAT-7kSMFK-rNd6WE">Jay</a></p>
    <p><a href="https://github.com/lsteinhorst/260lab3">GitHub</a></p>
    </div>
</template>

<script>
 export default {
     name: 'HomePage',
     data () {
	 return {
	     imagePath: '/static/images/flower.jpg'
	 }
     }
 }
</script>

<style scoped>
 body {
     padding: 0px;
     margin: 0px;
 }
 .hero {
     text-align: center;
 }
 h1 {
     font-size: 2.5em;
     letter-spacing: .2rem;
     color: #999;
     margin-bottom: 2px;
 }
 img {
     width: 100%;
 }
</style>

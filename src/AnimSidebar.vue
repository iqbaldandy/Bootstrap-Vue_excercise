<template>
    <div id="sidebar">
        <div class="toggle-btn">
            <b-button v-on:click="toggleSidebar" class="toggle">
                <span></span>
                <span></span>
                <span></span>
            </b-button>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

    </div>

</template>

<script>
export default {
    methods: {
        toggleSidebar: function(){
                document.getElementByID("sidebar").style.left = "0px";
            }
    }
}

</script>

<style>
 #sidebar {
     position:fixed;
     width:200px;
     height:100px;
     background:black;
     left:-200px;
     transition: all 500ms linear;
 }

 #sidebar.active {
     left:0px;
 }

 #sidebar ul li {
     color:rgba(230,230,230,0.9);
     list-style:none;
     padding:15px 10px;
     border-bottom: 1px solid rgba(100,100,100,0.3);
 }

 #sidebar .toggle-btn {
     position:absolute;
     left: 230px;
     top:20px;
 }

 #sidebar .toggle-btn span{
     display: block;
     width:30px;
     height:5px;
     background:#151719;
     margin: 5px 0px;
 }
</style>
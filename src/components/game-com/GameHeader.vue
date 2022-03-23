<template>
    <div class="text-gray-600 border-y-2 border-slate-300 p-3">
        <div class="container mx-auto flex items-center sm:flex-row flex-col">
            <span class="text-sm text-gray-900 sm:border-l-2 sm:px-1 sm:border-gray-700">遊戲人數: {{this.$store.getters.getPlayerNum}}</span>
            <template v-if="this.$store.getters.getIsPlaying">
                <span class="text-sm inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start btn-reset" @click="reset()">重新開始</span>
            </template>
            <span class="text-sm text-gray-900 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">現在時間 {{this.nowTime}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'GameHeader',
    data(){
        return{
            nowDay: '',
            nowTime: ''
        }
    },
    methods:{
        timeFormate(timeStamp) {
        let newdate = new Date(timeStamp);
        
        let year  = newdate.getFullYear();
        let month = newdate.getMonth() + 1 < 10? "0" + (newdate.getMonth() + 1): newdate.getMonth() + 1;
        let date  = newdate.getDate() < 10? "0" + newdate.getDate(): newdate.getDate();
        let hh    = newdate.getHours() < 10? "0" + newdate.getHours(): newdate.getHours();
        let mm    = newdate.getMinutes() < 10? "0" + newdate.getMinutes(): newdate.getMinutes();
        let ss    = newdate.getSeconds() < 10? "0" + newdate.getSeconds(): newdate.getSeconds();

        this.nowTime = hh+":"+mm + ":" + ss;
        this.nowDay = year + "年" + month + "月" + date +"日";
     },
     nowTimes(){        
        let self = this;
        self.timeFormate(new Date());
        setInterval(function(){
          self.timeFormate(new Date());
        }, 1000);
      },
      reset(){
        switch(this.$route.name){
            case 'HigherNumber':
                this.$store.commit('gameBasic/UPDATE_RESETCOUNT')
                this.$store.commit('higherNumber/RESET_HIGHERNUMBER')
                break
            case 'GuessingNumber':
                this.$store.commit('gameBasic/UPDATE_RESETCOUNT')
                this.$store.commit('guessingNumber/RESET_ISBINGO')
                this.$store.commit('guessingNumber/CREATE_BINGONUM')
                break
        }
      }
    },
    mounted(){
        this.nowTimes();
    }
}
</script>
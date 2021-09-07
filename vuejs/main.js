const app = new Vue({
  el: '#app',
  data() {
      return {
        inputText: '',
        lists: [    //リストの配列
            {
                name: '',
                isDisplay: false
            }
        ]
      };
  },
  methods: {
      onAdd() { //テキストボックスに入力されたものをリストに追加して表示させる
          if(this.inputText){   //テキストボックスに文字が入力されていたらtrue
              this.lists.push({
                  name: this.inputText, //listsのnameに、入力されたものを格納する
                  isDisplay: false
              });
              this.inputText = '';  //テキストボックスを空にする
          }
      },
      onDelete(index) {
          this.lists.splice(index, 1);  //消したいリストのindexを取得して削除する
      }
  },
  computed: {
    finTask() { //チェックされたリストの件数を数える
        var sum = 0;
        var i = 0;
        for(i = 0;i < this.lists.length; i++){
            if(this.lists[i].isDisplay){
              sum++;
            }
        }
        return sum;
      },
  },
});
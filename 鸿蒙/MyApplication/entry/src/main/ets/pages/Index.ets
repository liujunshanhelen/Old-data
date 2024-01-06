import http from '@ohos.net.http';
import router from '@ohos.router';
@Entry
@Component
struct Index {
  @State movieList: Array<object> = []


  aboutToAppear() {
    http.createHttp().request(
      'http://172.17.235.172:8080/hit/DoubanServlet?type=movie',
      (err, data) => {
        if(!err) {
          let t: any = JSON.parse(data.result.toString());
          this.movieList = t.subjects;
        }
      }
    )

  }

  build() {
    Row() {
      Column() {
        List({ space: 20, initialIndex: 0 }) {
          ForEach(this.movieList, (item) => {
            ListItem() {
              Row() {
                Text(item.title).fontSize(20)
                Text(item.url).fontSize(20)
              }
            }.onClick(() => {
              router.pushUrl({
                url: 'pages/Login',
                params: {
                  url: item.url
                }
              })
            })
          }, item => item.id)
        }
        .width('100%')
        .height('100%')

      }
      .width('100%')
      .height('100%')
      .backgroundColor(Color.Pink)
    }
    .height('100%')
    .backgroundColor(Color.Green)
  }
}
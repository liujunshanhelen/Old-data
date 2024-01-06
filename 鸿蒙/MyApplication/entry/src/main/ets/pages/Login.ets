import web_webview from '@ohos.web.webview'
import router from '@ohos.router';
@Entry
@Component
struct Index {
  controller: web_webview.WebviewController
    = new web_webview.WebviewController()
  private url: string = router.getParams()['url'];
  build() {
    Column() {
      Web({ src: this.url, controller: this.controller })
        .width('100%')
        .height('90%')
      Row() {
        Button('后退')
          .onClick((): void => {
            this.controller.backward()
          })
        Button('前进')
          .onClick((): void => {
            this.controller.forward()
          })
      }
    }
    .width('100%')
    .height('100%')
  }
}

import http from "@ohos.net.http";
import router from '@ohos.router';

export default {
    data: {
        city: '',
        weather: '',
        date: '',
        high_temperature: '',
        low_temperature: '',
        wind_direction: '',
        wind_level: ''
    },
    onInit() {
        let httpRequest = http.createHttp();
        let city = '';
        if(router.getParams() != null) {
            city = router.getParams()['city']
        }
        else {
            city = '哈尔滨'
        }
        httpRequest.request(
            "https://qqlykm.cn/api/free/weather/get?key=密钥&city=" + city,
            (err, data) => {
                if(!err) {
                    let t = JSON.parse(data.result);
                    this.city = t.city;
                    this.weather = t.data.forecast_list[1].weather;
                    this.date = t.data.forecast_list[1].date;
                    this.high_temperature = t.data.forecast_list[1].high_temperature;
                    this.low_temperature = t.data.forecast_list[1].low_temperature;
                    this.wind_direction = t.data.forecast_list[1].wind_direction;
                    this.wind_level = t.data.forecast_list[1].wind_level;
                } else {
                    console.info("Error");
                }
            }
        );
    },
    buttonClick() {
        router.replace({
            url: 'pages/city/city'
        });
    }
}

import http from '@ohos.net.http';
import router from '@ohos.router';
export default {
    data: {
        title: "",
        city:'',
        weather:'',
        date:'',
        high_temperature: '',
        low_temperature: '',
        wind_direction: '',
        wind_level: ''
    },
    onInit() {
       let httpRequest =http.createHttp();
        let city_1 ='';
        if(router.getParams() != null) {
            city_1 = router.getParams()['city']
        }
        else {
            city_1 = '哈尔滨'
        }

        httpRequest.request("https://qqlykm.cn/api/free/weather/get?key=nAIr2Cd73SlynDV2apc44SuY2K&city="+city_1,(_, data)=>{
            let t = JSON.parse(data.result);
            this.city = t.city;
            this.weather = t.data.forecast_list[1].weather;
            this.date = t.data.forecast_list[1].date;
            this.high_temperature = t.data.forecast_list[1].high_temperature;
            this.low_temperature = t.data.forecast_list[1].low_temperature;
            this.wind_direction = t.data.forecast_list[1].wind_direction;
            this.wind_level = t.data.forecast_list[1].wind_level;
        });
    },

    buttonClick() {
        router.replace({
            url: 'pages/weather/weather'
        });
    }
}




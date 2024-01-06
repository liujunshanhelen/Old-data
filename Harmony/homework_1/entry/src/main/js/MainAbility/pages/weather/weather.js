import promptAction from '@ohos.promptAction';
import router from '@ohos.router';
import data_preferences from '@ohos.data.preferences';
import featureAbility from '@ohos.ability.featureAbility';
export default {
    data: {
        title:"",
        city: "",
        cityList:[]
    },
    onInit() {
        this.title = "城市";
        let context = featureAbility.getContext();
        let preferences = null;
        let promise = data_preferences.getPreferences(context, 'mystore');
        promise.then((object) => {
            preferences = object;
            preferences.get('cityList', ['哈尔滨']).then((value) => {
                this.cityList = this.cityList.concat(value);
            });
            console.info("Succeeded in getting preferences.");
        })

    },
    getCity(e){
        this.city = e.value.trim();
    },
    buttonClick() {
        console.log(this.cityList.length)
        let context = featureAbility.getContext();
        let preferences = null;
        let promise = data_preferences.getPreferences(context, 'mystore');
        promise.then((object) => {
            preferences = object;
            this.cityList.push(this.city);

            preferences.put('cityList', this.cityList).then(() => {
                preferences.flush();
                console.info("Succeeded in putting value of 'fontColor'.");
            })/*
            preferences.delete('cityList').then(() => {
                preferences.flush();
                console.info("Succeeded in putting value of 'fontColor'.");
            });*/
            console.info("Succeeded in getting preferences.");
        })
    },
    itemClick(e){
        router.replace({
            url: 'pages/index/index',
            params: {
                city: e
            }
        })
    }


}

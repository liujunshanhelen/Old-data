import promptAction from '@ohos.promptAction';
import router from '@ohos.router';
import data_preferences from '@ohos.data.preferences';
import featureAbility from '@ohos.ability.featureAbility';

export default {
    data: {
        city: "",
        cityList: []
    },
    onInit() {
        this.title = "城市列表";
        let context = featureAbility.getContext();
        let preferences = null;
        let promise = data_preferences.getPreferences(context, 'mystore');
        promise.then((object) => {
            preferences = object;
            preferences.get('cityList', ['哈尔滨']).then((value) => { this.cityList = this.cityList.concat(value); });
            console.info("Succeeded in getting preferences.");
        }).catch((err) => {
            console.log("Failed to get preferences. code = " + err.code + ", message = " + err.message);
        })

    },
    getCity(e) {
        this.city = e.value.trim();
    },
    buttonClick() {
        if(this.city.trim().length === 0) {
            promptAction.showToast({
                message: '城市名称不能为空',
                duration: 5000
            });
            return;
        }
        if(this.cityList.includes(this.city)) {
            promptAction.showToast({
                message: '该城市已经存在',
                duration: 5000
            });
            return;
        }
        let context = featureAbility.getContext();
        let preferences = null;
        let promise = data_preferences.getPreferences(context, 'mystore');
        promise.then((object) => {
            preferences = object;
            this.cityList.push(this.city);
            preferences.put('cityList', this.cityList).then(() => {
                preferences.flush();
                console.info("Succeeded in putting value of 'fontColor'.");
            }).catch((err) => {
                console.info("Failed to put value of 'fontColor'. code = " + err.code +", message = " + err.message);
            })
            console.info("Succeeded in getting preferences.");
        }).catch((err) => {
            console.log("Failed to get preferences. code = " + err.code + ", message = " + err.message);
        })

    },
    itemClick(value) {
        router.replace({
            url: 'pages/index/index',
            params: {
                city: value
            }
        })
    }
}

// Create the Vue app
const app = Vue.createApp({
  data() {
    return {
      studentName: 'Vraj Patel',
      gasLevelValue: 55,
      gasLevels: [
        { id: 'danger-low', color: 'danger',  name: 'Danger - Low Gas Levels!',    min: 0,  max: 10  },
        { id: 'warn-low',   color: 'warning', name: 'Warning - Low Gas Levels',    min: 11, max: 31  },
        { id: 'safe',       color: 'safe',    name: 'Safe Gas Levels',             min: 32, max: 70  },
        { id: 'warn-high',  color: 'warning', name: 'Warning - High Gas Levels',   min: 71, max: 91  },
        { id: 'danger-high',color: 'danger',  name: 'Danger - High Gas Levels!',   min: 92, max: 100 }
      ]
    };
  },
  methods: {
    activeGasLevel(gaslevel) {
        if ((this.gasLevelValue >= gaslevel.min && this.gasLevelValue <= gaslevel.max)) {
            return true;
        }
        else {
        return false;
        }
    }
  }
})
app.mount('#app');


/* --   ASYNCHRONOUS COMPONENTS   -- 
========================================

-There are certain components which we do not need everytime this App is loaded

-e.g . <base-dialog></base-dialog> component is only needed during login - And therefore we might not always need it.

-Implication is that we don't need to download the source code behind that component everytime the App is loaded all the time.

- <base-dialog></base-dialog> could be a component which we can load lazily / asynchronously only when needed and not in advance

-<coach-register></coach-register> is also another example , since we are already registered , chances are , we don't need it and actually we don't see it once we register

-So definitely , we don't need the code for that to be downloaded everytime , yet we don't need it;

-And that is something Vue can help us with:

1. Starting with <BaseDialog />

    -We import BaseDialog  :- import BaseDialog from './components/ui/BaseDialog.vue';
        then register it app.component('base-dialog', BaseDialog)

        -import tells vue that the code you are importing is needed   

        -All the imports are kinda merged into 1 big file - you could say
        
        -Therefore it would be great if we wouldn't import it all the time - but only when we need it
        -Thus it would'nt be merged into a big file but instead Vue will try to download the required code only when its needed

-And for that Vue has defineAsyncComponent()

-With this we can define a component , which is loaded asynchronously/only when it's needed

-defineAsyncComponent() takes a callback function that in the end revokes import() function

-The import takes in the url / path to the Component

        const BaseDialog = defineAsyncComponent( ()=> import('./components/ui/BaseDialog.vue'))
        
-But Vue only calls that function  which then calls import() only when the component is needed

-We can not use defineAsyncComponent() on just global component but also in local components

--For example in router.js too - --
        
        
-As a side note : We can use a diff name ; but that is what we started with and therefore no need to change further
*/


import { createApp, defineAsyncComponent } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
// import BaseDialog from './components/ui/BaseDialog.vue';

const BaseDialog = defineAsyncComponent(() => import('./components/ui/BaseDialog.vue') )

const app = createApp(App)

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');

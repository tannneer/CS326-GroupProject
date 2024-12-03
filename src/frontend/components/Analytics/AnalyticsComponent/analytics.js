export function renderAnalytics() { 

    //template render to be used for other components of analytics
    const baseAnalytics = document.createElement('analytics');

    baseAnalytics.innerHTML = `dynamically rendered analytics`; 

    return baseAnalytics;

}
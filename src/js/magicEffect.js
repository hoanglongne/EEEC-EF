function magicEffectRemove(before, after) {
    //remember to add . before the before element, and always put them in a string
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add(after);
            } else{
                entry.target.classList.remove(after);
            }
        })
    });
    
    
    const hiddenElements = document.querySelectorAll(before);
    hiddenElements.forEach((el) => observer.observe(el));
    
}

function magicEffect(before, after) {
    //remember to add . before the before element, and always put them in a string
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add(after);
            }
        })
    });
    
    
    const hiddenElements = document.querySelectorAll(before);
    hiddenElements.forEach((el) => observer.observe(el));
    
}

magicEffectRemove('.fade1', 'show1')
magicEffectRemove('.fade2', 'show2')
magicEffectRemove('.solar-system', 'solar-system-change')
magicEffectRemove('.fade3','show3')
magicEffectRemove('.bump','bumpafter')
magicEffectRemove('.linking','linked')
magicEffectRemove('.hero','hero1')
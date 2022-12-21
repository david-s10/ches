(function(){
    
    let board = document.querySelector('.wrapper')
    let num = 0

    for (let i = 0; i < 8; i++){
        
        for(let e = 0; e < 8; e++){

            if(num % 2 === 0){

                board.innerHTML += `<div data-x="${e}" data-y="${i}" class="sell"></div>`

            }else{

                board.innerHTML += `<div data-x="${e}" data-y="${i}" class="sell black"></div>`

            }

            num++

        }

        num++
    }

    console.log(num)

    let sell = document.querySelectorAll('.sell')

    sell.forEach(function(e){
        e.onclick = horse
    })

    // function horse(){
    //     for(let i = 0; i < sell.length; i++){
    //         sell[i].classList.remove('active')
    //     }
    //     let x = this.dataset.x
    //     let y = this.dataset.y
    //     if(+x + 2 < 8 && +y + 1 < 8){
    //         document.querySelector(`.sell[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.add('active')
    //     }
    //     if(+x + 2 < 8 && +y - 1 >= 0){
    //         document.querySelector(`.sell[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.add('active')
    //     }
    //     if(+x - 2 >= 0 && +y - 1 >= 0){
    //         document.querySelector(`.sell[data-x="${+x - 2}"][data-y="${+y - 1}"]`).classList.add('active')
    //     }
    //     if(+x - 2 >= 0 && +y + 1 < 8){
    //         document.querySelector(`.sell[data-x="${+x - 2}"][data-y="${+y + 1}"]`).classList.add('active')
    //     }
    //     if(+x + 1 < 8 && +y + 2 < 8){
    //         document.querySelector(`.sell[data-x="${+x + 1}"][data-y="${+y + 2}"]`).classList.add('active')
    //     }
    //     if(+x + 1 < 8 && +y - 2 >= 0){
    //         document.querySelector(`.sell[data-x="${+x + 1}"][data-y="${+y - 2}"]`).classList.add('active')
    //     }
    //     if(+x - 1 >= 0 && +y + 2 < 8){
    //         document.querySelector(`.sell[data-x="${+x - 1}"][data-y="${+y + 2}"]`).classList.add('active')
    //     }
    //     if(+x - 1 >= 0 && +y - 2 >= 0){
    //         document.querySelector(`.sell[data-x="${+x - 1}"][data-y="${+y - 2}"]`).classList.add('active')
    //     }
        
        
        
    // }
    function horse(){
        sell.forEach(function(e){
            e.classList.remove('active')
        })
        const dx = [2,2,1,-1,-2,-2,1,-1],
              dy = [1,-1,2,2,1,-1,-2,-2]

              let x = +this.dataset.x
              let y = +this.dataset.y
              for(let i = 0; i < 8; i++){
                  let xx = x + dx[i]
                  let yy = y + dy[i] 
                  
                  if(xx >= 0 && yy >= 0 && xx < 8 && yy < 8){
                    document.querySelector(`.sell[data-x="${xx}"][data-y="${yy}"]`).classList.add('active')
                  }
              }
    }
    
    
    

    

})()






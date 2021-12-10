const request=require("request")


const news= (collback)=>{
    const url= "https://newsapi.org/v2/top-headlines?country=eg&apiKey=b21b9319d57c4cc8b8af2fdca6172edb"
    const key ="b21b9319d57c4cc8b8af2fdca6172edb"
    request({url , json:true},(err ,response)=>{
        if (err) {
            collback("not find anything", undefined)
        } else if (response.body.message) {
            collback(response.body.message ,undefined )
        } else {
            // console.log(response.body.articles)
            let date=[]
            response.body.articles.forEach(element => {
                date.push({
                    src:element.urlToImage,
                    title:element.title,
                })
            });
            collback(undefined,date)
        }
    })
}

// news((err , date)=>{
//     if (date === undefined) {
//         console.log(err)
//     }
// })


module.exports={
    news
}
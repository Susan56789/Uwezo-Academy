const courses=require('./mock-articles');

module.exports = async (app)=>{
    app.get("api-2.0/courses/", async(req,res)=>{
      res.send(courses)
    });

    app.get("/articles/:key", async(req, res)=>{
      res.send(ARTICLES.filter(article => article.key === req.params.key)[0])
    });
}
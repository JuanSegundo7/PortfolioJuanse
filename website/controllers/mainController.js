// ************ Controller ************

const main = {
    index: (req,res) => {
        return res.render("portfolio");
    },
    curriculum: (req,res) => {
        let file = "curriculumVitae.pdf"
        // return res.send(file)
        return res.download(file);
    }
}

module.exports = main;
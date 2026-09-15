PennController.ResetPrefix()

var showProgressBar = false;
                         
var defaults = [
    "Separator", {
        transfer: 1000,                                      // How long between sentences? (ms)
        normalMessage: "Please wait for the next sentence."  // What is message presented between stims? Can be blank.
    }
];

// this is set up to use classic ibex latin squaring                         
Template("experiment.csv", row => {
    items.push(
        [[row.label, row.item] , "PennController", newTrial(
            newController("AcceptabilityJudgment", {s: row.sentence,
                            as: ["1", "2", "3", "4", "5", "6", "7"],  
                            presentAsScale: true,                             
                            instructions: "Use number keys or click boxes to answer.",    
                            leftComment: "(Bad)", 
                            rightComment: "(Good)"})
                .print()
                .log()
                .wait()
        )
        .log("sentence", row.sentence)
        .log("counter", __counter_value_from_server__)
        .log("label", row.label)
        .log("latinitem", row.item)]
    );
   return newTrial('_dummy_',null);
})

var items = [
    ["sep", "Separator", { }],
    ["setcounter", "__SetCounter__", { }],
    ["sendresults", "__SendResults__", { }],    
    ["consent", "Form", { html: { include: "consent.html" } }],
    ["demo", "Form", { html: { include: "demo.html" }, validators: { age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019";} } }],
    ["intro", "Form", { html: { include: "intro.html" } }],
    ["startpractice", Message, {consentRequired: false, html: ["div", ["p", "First you can do eight practice sentences."]]}],
  // message that experiment is beginning
    ["starter", Message, {consentRequired: false, html: ["div", ["p", "Time to start the main portion of the experiment!"]]}],
    ["completion", "Form", {continueMessage: null, html: { include: "completion.html" } } ]
];
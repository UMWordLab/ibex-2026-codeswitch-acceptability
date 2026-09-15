PennController.ResetPrefix()

var shuffleSequence = seq("consent", "demo", "IDentry", "intro",
                        //    "startpractice",
                        //   sepWith("sep", seq("practice")),
                            "setcounter",
                            sepWith("sep", rshuffle(startsWith("kutas"))),
                            "sendresults",
                            "completion"
                         )
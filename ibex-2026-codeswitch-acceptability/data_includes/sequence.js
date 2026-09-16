PennController.ResetPrefix()

var shuffleSequence = seq("consent", "demo", "IDentry", "norming",
                        //    "startpractice",
                        //   sepWith("sep", seq("practice")),
                            "setcounter",
                            sepWith("sep", rshuffle(startsWith("switch"))),
                            "sendresults",
                            "completion"
                         )
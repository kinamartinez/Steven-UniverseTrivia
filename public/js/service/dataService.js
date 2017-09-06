/**
 * Created by kinamartinez on 8/30/17.
 */
app.service('dataService', function () {

    const dataObj = {
        gemsData: gemsData,
        quizQuestions: quizQuestions,
        correctAnswers: correctAnswers
    };

    // returning the dataObj to anything that uses this factory as a 
    // dependency
    return dataObj;


    /*
     * all of the below variables are simulating data that would typically be
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app
     *
     * The correctAnswers variable would be retrieved when the user has
     * finished the quiz and would be used to mark the users answers against
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected
     *                          an answer yet.
     *                          - Whether the user got the question correct or
     *                              not
     *
     * The final gemsData variable hold the information that will be
     * displayed in the list view when the app loads. This includes the name
     * and an image of each character as well as other information s
     *
     */

    const correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];

    const quizQuestions = [
        {
            type: 'text',
            text: "Who is the Onion's Mom?",
            possibilities: [
                {
                    answer: 'Yellow Diamond'
                },
                {
                    answer: 'Rose Quartz'
                },
                {
                    answer: 'Yellowtail'
                },
                {
                    answer: 'Vidalia'
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: 'text',
            text: 'Which of these can Peridot NOT do?',
            possibilities: [
                {
                    answer: 'Gun Hand'
                },
                {
                    answer: 'Laser Eyes'
                },
                {
                    answer: 'Runnning Up Walls'
                },
                {
                    answer: 'Helicopter Fingers'
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: 'image',
            text: "Who is Ruby's Partner",
            possibilities: [
                {
                    answer: 'https://carboncostume.com/wordpress/wp-content/uploads/2015/10/Ruby.jpg'
                },
                {
                    answer: 'https://vignette3.wikia.nocookie.net/steven-universe/images/6/64/Dan_Sapphy_ur_Freezies_with_Gem.png/revision/latest/scale-to-width-down/1000?cb=20151106214440'
                },
                {
                    answer: 'https://vignette1.wikia.nocookie.net/steven-universe/images/1/16/GarnetByKmes.png/revision/latest/scale-to-width-down/1000?cb=20160123075715'
                },
                {
                    answer: 'https://pre04.deviantart.net/7c3a/th/pre/f/2017/206/3/d/steven_universe___emerald_by_afroampharos-dbhm758.png'
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: 'image',
            text: "Who is Lapis, Jasper and Peridot's leader",
            possibilities: [
                {
                    answer: 'https://vignette1.wikia.nocookie.net/steven-universe/images/d/df/That_Will_Be_All_YD_with_Cloak_by_Lenhi.png/revision/latest/scale-to-width-down/1000?cb=20170531201946'
                },
                {
                    answer: 'http://ll-c.ooyala.com/e1/Yzb3Z3YjE6j_3VqEHM0w0lkdd6FtWLVe/Ut_HKthATH4eww8X4xMDoxOjBzMTt2bJ'
                },
                {
                    answer: 'https://vignette4.wikia.nocookie.net/steven-universe/images/3/31/Topaz_%28fusion%29.png/revision/latest?cb=20170506072835'
                },
                {
                    answer: 'http://ll-c.ooyala.com/e1/91MXd0YjE6EE7YuIX2PQqvuPI5tVDskv/promo323650836'
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: 'text',
            text: 'Why did Garnet get mad at Pearl?',
            possibilities: [
                {
                    answer: 'Pearl made Garnet unfuse'
                },
                {
                    answer: 'Pearl tricked her into fusing'
                },
                {
                    answer: 'Pearl made fun of Garnet'
                },
                {
                    answer: 'Pearl accidently hit Garnet with her spear'
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: 'text',
            text: "What does Steven say to activate Rose's Light Cannon",
            possibilities: [
                {
                    answer: ' Let me drive my van into your heart '
                },
                {
                    answer: 'What I can do for you?'
                },
                {
                    answer: "One way ticket and i'm ready to ride!"
                },
                {
                    answer: " If every porkchop were perfect we wouldn't have hotdogs"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: 'text',
            text: 'What was Peridot sent to Earth to do?',
            possibilities: [
                {
                    answer: 'Check on the Cluster '
                },
                {
                    answer: 'Reactivate the Kindergarten'
                },
                {
                    answer: ' Fix the Homeworld Warp pad'
                },
                {
                    answer: ' Get rid of the Crystal Gems'
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: 'image',
            text: 'Which Of These Gems Is NOT A Fusion?',
            possibilities: [
                {
                    answer: 'https://carboncostume.com/wordpress/wp-content/uploads/2015/10/Garnet.jpg'
                },
                {
                    answer: 'https://vignette1.wikia.nocookie.net/steven-universe/images/f/f9/Rose_Quartz_-_Weaponized.png/revision/latest?cb=20160822210727'
                },
                {
                    answer: 'https://i.pinimg.com/736x/df/e5/77/dfe577854bb84ed682928949c1270b19--steven-universe-pictures-steven-universe-sardonyx.jpg'
                },
                {
                    answer: 'https://vignette3.wikia.nocookie.net/gemcrust/images/7/73/SugilitebyJudgekoo.png/revision/latest?cb=20160911185913'
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: 'text',
            text: 'How did Steven first activate his shield?',
            possibilities: [
                {
                    answer: 'Fighting Jasper'
                },
                {
                    answer: 'Eating a Cookie Cat'
                },
                {
                    answer: 'Defending his Dad'
                },
                {
                    answer: 'He got mad at the TV'
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: 'text',
            text: ' What was the name of the episode where Lapis Lazuli made her first appearance? ',
            possibilities: [
                {
                    answer: 'Coach Steven'
                },
                {
                    answer: 'Ocean Gem'
                },
                {
                    answer: ' Rising Tides/Crashing Skies'
                },
                {
                    answer: 'Mirror Gem'
                }
            ],
            selected: null,
            correct: null
        }
    ];



});
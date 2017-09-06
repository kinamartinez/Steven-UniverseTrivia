/* Created by kinamartinez on 8/16/17.
 */

app.controller('listCtrl', [function () {
    const vm = this;
    vm.gemsData = gemsData;
    vm.activeCharacter = {};
    vm.changeActiveCharacter = changeActiveCharacter;
    vm.searchText = '';
    vm.searchTextChange = searchTheCharacters;
    vm.filteredCharacters = [];
    vm.pageData = [];
    vm.currentPage = 1;
    vm.itemsPerPage = 4;
    vm.searchTextChange = searchTheCharacters;
    vm.onPageChange = updateThePage;
    vm.maxSize = 5;

    function changeActiveCharacter(index) {
        vm.activeCharacter = index;
    }

    function searchTheCharacters(newSearch) {
        vm.searchText = newSearch;
        filterCharacters();

    }

    function updateThePage(currentPage) {
        vm.currentPage = currentPage;
        updatePageData();
    }


    function updatePageData() {
        vm.pageData = vm.filteredCharacters.slice(
            (vm.currentPage - 1) * vm.itemsPerPage,
            vm.currentPage * vm.itemsPerPage
        );
    }


    function filterCharacters() {
        let newFilteredCharacters = [];
        if (vm.searchText || vm.searchText.trim() === '') {
            newFilteredCharacters = gemsData;
        } else {
            for (let i = 0; i < vm.gemsData.length; i++) {
                character = vm.gemsData[i];
                if (character.name.includes(vm.searchText.charAt(0).toUpperCase() + vm.searchText.slice(1).toLowerCase())) {
                    newFilteredCharacters.push(character);
                }

            }
        }
        console.log(newFilteredCharacters);
        vm.filteredCharacters = newFilteredCharacters;
        vm.currentPage = 1;
        vm.totalItems = vm.filteredCharacters.length;
        updatePageData();
    }
    filterCharacters();
}]);
const gemsData = [
    {
        name: 'Steven Quartz Universe',
        sex: 'Male',
        image: 'https://vignette2.wikia.nocookie.net/universosteven/images/c/c2/Steven_Universe_-_With_Weapon3.png/revision/latest?cb=20151214201131&path-prefix=es',
        species: '50% Gem and 50% Human',
        weapons: 'Shield',
        gemType: 'Quartz',
        gemstone: 'Rose Quartz',
        description: "Steven Quartz Universe is the titular main protagonist of the show of the same name. He is the son of Greg Universe and Rose Quartz, and the first and only member of human descent and hybrid nature of the Crystal Gems. A human-Gem hybrid as a result of his parentage, Steven is an extraordinarily unique being with innate powers beyond that of both normal humans and Gems. While only a child, Steven has steadily grown from a tag-along to the Crystal Gems into an equal amongst their ranks thanks to his good-hearted nature and resourcefulness. Though he is a part of a monumental legacy, Steven is devoted to fulfilling his destiny as protector of humanity, just as his mother was before him."
    },
    {
        name: 'Amethyst',
        sex: 'Sexless',
        image: 'http://vignette1.wikia.nocookie.net/steven-universe/images/2/2e/Amethyst.png/revision/latest?cb=20140805021729',
        species: '100% Gem',
        weapons: 'Whip',
        gemType: 'Quartz',
        gemstone: 'Amethyst',
        description: "Amethyst is shorter than most of the characters, rivaling Steven's height (she is about half the height of a Quartz Gem soldier such as Jasper and Rose, due to remaining in the ground for an extra 500 years), with a somewhat stout build. Amethyst's skin is a bright lilac, and she has thick, messy pale lavender hair that goes down to her ankles, with a large bang that obscures her left eye. She has plump lips, a small, upturned nose, and dark indigo eyes. Her gemstone is located on her chest, and the bottom half of it is usually covered by her shirt."
    },
    {
        name: 'Garnet',
        sex: 'Sexless',
        image: 'https://vignette1.wikia.nocookie.net/steven-universe/images/a/a3/Save_The_Light_Garnet_by_Pearl.png/revision/latest?cb=20170326102047',
        species: '100% Gem',
        weapons: 'Gauntlets',
        gemType: 'Garnet',
        gemstone: 'Fusion',
        description: "Garnet is the fusion of Ruby and Sapphire and the current de-facto leader of the Crystal Gems. Garnet is one of the last surviving Gems on Earth who joined the Crystal Gems in the rebellion against the Gem Homeworld, and afterwards assisted her friends in protecting the Earth over the next few millennia. After Rose Quartz gave up her physical form to give birth to her son, Steven Universe, Garnet took over as the leader of the group."
    },
    {
        name: 'Pearl',
        sex: 'Sexless',
        image: 'https://vignette2.wikia.nocookie.net/universosteven/images/9/98/Flower_Pearl.jpg/revision/latest?cb=20160423165612&path-prefix=es',
        species: '100% Gem',
        weapons: 'Spear and Swords',
        gemType: 'Pearl',
        gemstone: 'Pearl',
        description: "Pearl is a member of the Crystal Gems. One of Rose Quartz's closest followers and her sole confidant, Pearl is one of the last surviving Gems on Earth who joined the Crystal Gems in their rebellion against the Gem Homeworld. Pearl would afterward protect the Earth over the next several millennia alongside her friends, while later teaching Rose's son, Steven, the ways of Gems."
    },
    {
        name: 'Lapis Lazuli',
        sex: 'Sexless',
        image: 'https://vignette2.wikia.nocookie.net/p__/images/3/38/Lapis_Lazuli_SU.png/revision/latest?cb=20160612011653&path-prefix=protagonist',
        species: '100% Gem',
        weapons: 'Hydrokinesis',
        gemType: 'Lapis Lazuli',
        gemstone: 'Lapis Lazuli',
        description: "Lapis Lazuli has a slim figure, cyan skin, and blue chin-length hair, arranged in almost the same as that of Pearl, although her bangs are slightly longer, with a fringe that covers her entire forehead, and it occasionally looks messier. She is also about the same height as Pearl. She wears a flowing, blue skirt, which is knee-length with a downward-facing navy triangle. Underneath her skirt she has navy blue shorts, as seen in 'Gem Harvest'. She also wears a backless, blue halter crop top with an upward-facing navy triangle that ties into a blue sash ribbon on the back of her shoulders. She has a blue lapis lazuli gemstone embedded in her back, in the form of a water droplet, from which she is able to summon and remove wings created out of water at will. Before Steven healed her, she had reflective eyes without pupils. After Steven heals her gemstone, her eyes are discovered to be royal blue."
    },
    {
        name: 'Blue Diamond',
        sex: 'Sexless',
        image: 'https://i.pinimg.com/originals/bb/b7/4b/bbb74b3eb500b78f020da72b1f5095a0.png',
        species: '100% Gem',
        weapons: "No Weapons",
        gemType: 'Diamond',
        gemstone: 'Blue Diamond',
        description: "Blue Diamond's debut portrays her as a very mellow Diamond who treats high-ranking members of her court with respect. According to Holly Blue Agate, Blue Diamond has a reputation for mercy and forgiveness. 'Saving' Greg from the threat of the Cluster after taking a liking to him, unaware that the Cluster is no longer active, demonstrates this. However, as with Yellow Diamond, her true nature may be at odds with her reputation, as she sentences Ruby to shattering for accidentally fusing with Sapphire while trying to do her job and saving her by accident. However, it is unknown if her personality has changed over the millennia after Pink Diamond's death. Blue Diamond's temperament appears to have changed significantly in the 5,000 years following the death of Pink Diamond. She is currently in a state of great depression, still mourning over the shattering of her fellow diamond. She is unable to let go of the past, becoming fixated on preserving Pink Diamond's legacy. Her efforts to maintain the late diamond's zoo, save Earth specimens from the Cluster's emergence, and her refusal to shatter the rose quartzes that once served under Pink Diamond shows this behavior. She continues to regard the Earth as Pink Diamond's colony, and, due to being unaware that the Cluster is bubbled, is visibly saddened by the fact that the planet will eventually be destroyed."
    },
    {
        name: 'Peridot',
        sex: 'Sexless',
        image: 'http://i0.kym-cdn.com/entries/icons/original/000/021/374/peridot-steven-universe-episode-barn-mates-3838383.jpg',
        species: '100% Gem',
        weapons: 'Modern Gem Technology, Ferrokinesis',
        gemType: 'Peridot',
        gemstone: 'Peridot',
        description: "Peridot (specifically Peridot Facet-2F5L Cut-5XG) is a member of the Crystal Gems who made her debut in 'Warp Tour'. She was originally a Homeworld Gem technician and a certified Kindergartner. After being stranded on Earth following the events of 'Jail Break', she acted as a recurring antagonist until becoming more of an antihero and pseudo-antagonist by establishing a truce with the Crystal Gems in 'When It Rains' to help them save the Earth from the Cluster. She officially became a member of the Crystal Gems in 'Message Received' after she defied and insulted her Homeworld superior, Yellow Diamond. Peridot is currently living at the Barn with Lapis Lazuli."
    },
    {
        name: 'Sugilite',
        sex: 'Sexless',
        image: 'https://vignette.wikia.nocookie.net/steven-universe/images/d/d2/Sugilite_-_Cry_for_Help_with_Flail.png/revision/latest/scale-to-width-down/1000?cb=20151213211659',
        species: '100% Gem',
        weapons: "Flail",
        gemType: 'Fusion',
        gemstone: 'Sugilite',
        description: "Laramie Barriga, better known simply as Lars, is a resident of Beach City and an employee at the Big Donut along with Sadie. He debuted in the Pilot. Lars was previously a normal human, before his abduction to the Gem Homeworld, where he died and was resurrected by Steven's healing powers. As a result of his revival, Lars was turned pink and given his own set of magical abilities. He is currently still stuck on Homeworld, acting as the link between Homeworld to Earth through a shared pocket dimension, accessible on either end via Lars' hair and Lion's mane."
    },
    {
        name: 'Connie Maheswaran',
        sex: 'Female',
        image: 'https://vignette4.wikia.nocookie.net/steven-universe/images/1/12/ConnieNewIntro.png/revision/latest?cb=20160920145959',
        species: '100% Human',
        weapons: "Rose's Sword  and Pearl's Swords (during training)",
        gemType: 'No Gem Type cause is Human!',
        gemstone: 'No GemStone cause is Human!',
        description: "Connie is introverted, curious, and intelligent. Due to her parents' lifestyle, specifically her father's job, Connie rarely stays in one place for long and has been unable to form lasting friendships, which left her frequently feeling lonely. Her parents are very strict and do not allow her to participate in common childhood activities (such as eating donuts or anything with trans fats, although she ate one in 'Crack the Whip'). This has led her to flat-out lie about Steven's non-nuclear family, due to paranoia at how her parents may react. Despite her obedience to them, Connie is not above exploiting loopholes, such as not buying snacks at a theater and instead bringing them from Steven's home. Connie has grown used to the strange dynamic of her friendship with Steven despite her initial uncertainty of it. For example, in 'Marble Madness' when the Gems destroy one of Peridot's robonoids in front of her, she reacts passively awed and only comments that she loves hanging out at Steven's place. She can be a bit deadpan at times, such as when she jokes about cutting off Steven's hand in 'Lion 2: The Movie' and in that same instance quickly understands that by poking/tickling Steven she could provoke a reaction from Rose's Secret Armory. Her hobbies appear to include tennis and reading, and she also plays the violin, as seen in 'Fusion Cuisine', 'Sworn to the Sword', and 'Nightmare Hospital'."
    },
    {
        name: 'Laramie "Lars" Barriga',
        sex: 'Male',
        image: 'https://vignette2.wikia.nocookie.net/universosteven/images/c/c1/The_New_Lars_HD2.png/revision/latest?cb=20160729151531&path-prefix=es',
        species: '100% Human',
        weapons: "As a cashier in Big Donut, no time for weapons!",
        gemType: 'No Gem Type cause is Human!',
        gemstone: 'No GemStone cause is Human!',
        description: "Laramie Barriga, better known simply as Lars, is a resident of Beach City and an employee at the Big Donut along with Sadie. He debuted in the Pilot. Lars was previously a normal human, before his abduction to the Gem Homeworld, where he died and was resurrected by Steven's healing powers. As a result of his revival, Lars was turned pink and given his own set of magical abilities. He is currently still stuck on Homeworld, acting as the link between Homeworld to Earth through a shared pocket dimension, accessible on either end via Lars' hair and Lion's mane."
    },

];
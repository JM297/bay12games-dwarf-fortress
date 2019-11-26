import React from 'react';

const Log_Data = [
    {
        id: 2019,
        year: "2019",
        logs: [
            {
                id: 1,
                logid: "09-25",
                date: "09/25/2019",
                stuff: <p>
                    Alright, I did the last two things I wanted to do in this network rewrite:
                    having plots that last longer (using the existing civ-based
                    spies as a model), and allowing plots to pass even further down the criminal
                    organization networks (so that more evidence will be created while making the
                    leaves of the org chart more active.) This has been good, and I think we're
                    ready for investigation now! Hopefully! I also discovered a few problems with
                    my org chart displayer, which is another way to make the networks look even more
                    rich, ha ha (it wasn't printing certain assets.) This has been a long detour,
                    but we should be to the heart of the adventure mode update now.
                    Once that all works, fun for forts.
                </p>
            },
            {
                id: 2,
                logid: "09-18",
                date: "09/18/2019",
                stuff: <p>
                    This week I mostly pushed forward the ideas from last time. Plots can propagate
                    out into dedicated criminal organizations from the non-criminal position
                    holders (often through intermediaries), and criminal organizations can also
                    expand out into other cities, forming branches much as the merchant companies
                    do, where they then try to muscle out and subordinate local groups. These
                    together have led to even more pleasantly rich and geographically-varied
                    networks. We'll take a few more steps along these lines before trying to implement
                    player-led investigations, but we're almost ready to give them a shot.
                </p>
            },
            {
                id: 3,
                logid: "09-11",
                date: "09/11/2019",
                stuff: <p>
                    I am mostly recovered from the traveling and am back to work. As mentioned in
                    the log before the travels, it turned out that we needed more work to link up
                    networks and to make sure every link was generating some evidence. As stated
                    there, we decided to focus on criminal organizations, and the linkages are much
                    better now! For villains without brighter ideas, doing some petty crime with a
                    few like-minded individuals is a start, and then these groups can fuse and
                    otherwise associate, with various skimming and tribute and so forth as some of them grow
                    more powerful. This allows the standard anti-bandit/criminal quests to lead into
                    evidence network crawling, as the most successful groups can draw back to a more
                    villainous status (ie they need discovering rather than generating direct
                    quests.)
                    The next steps will include linking the more important, position-holding
                    villains to these groups in a few ways, and also bringing in the bandits and
                    perhaps certain hearth lords into the mix as criminal organization analogues. I'm much happier
                    with how the network graphs look now, but we'll need to see an actual
                    investigation to know if it's sufficient.<br/><br/>
                    The individual network links will also need to be strengthened by adding more
                    long-term jobs for the important villains; the big assassination/etc. plots
                    resolve too
                    quickly, and so feel a bit like old news when you start adventuring. This can be
                    solved by treating them a little bit more like the existing civ-based agents,
                    with some
                    work to be done over some in-game months before any job can be pulled off, and
                    by making position-holder corruption being easier to accomplish when some
                    relationship
                    groundwork has been laid. After this tweaking, we should have an evidence-rich
                    environment that doesn't feel as artificially urgent.<br/><br/>
                    Here's <a href="https://www.youtube.com/watch?v=WW_dHPtC2wg">a recording of the
                    live play of DF at PAX</a> with Nate Crowley of RockPaperShotgun and Victoria
                    Tran of Kitfox, along with Zach and I. And for people that haven't seen the
                    systems panel at PAX, here's a <a
                    href="https://player.twitch.tv/?video=475872864&amp;t=02h">recording on
                    Twitch.</a>
                </p>
            },
            {
                id: 4,
                logid: "09-04",
                date: "09/04/2019",
                stuff: <p className="light">
                    And here's the delayed Future of the Fortress:
                    <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg8020553#msg8020553">Part
                        1</a>
                    and <a
                    href="http://www.bay12forums.com/smf//index.php?topic=169696.msg8020554#msg8020554">Part
                    2</a>.
                    I'm almost back together and will be programming again starting tomorrow.
                </p>
            },
            {
                id: 5,
                logid: "09-01",
                date: "09/01/2019",
                stuff: <p>
                    Here's <a href="http://www.bay12forums.com/smf//index.php?topic=174576.0">the
                    report</a>. PAX is underway.
                    We've met a bunch of people at the Kitfox booth so far, and we'll also be there
                    tomorrow from 3-6 (#6120). People that
                    haven't seen the original Steam trailer (the ten second transformation from
                    ASCII to graphics, as well as some screenshots)
                    can be quite surprised by it! After five days of what turned out to be a very
                    intense academic conference (I must have seen
                    40-50 paper presentations), Future of the Fortress will be delayed a few days,
                    as expected. I feel like I could sleep for many
                    years currently, but one more day of PAX first, then some sleep, and I should be
                    back to adventure mode investigations!
                </p>
            },
            {
                id: 6,
                logid: "08-21",
                date: "08/21/2019",
                stuff: <p>
                    The new info screen has highlighted several defects in the plots and villainous behavior. We'll have to do some additional work
                    to get more organizations merged or at least linked (there are too many isolated failed organizations with one person bossing one
                    other person around for decades), and to make sure that more of the lower level members have their fingers in some evidence-creating
                    cookie jar. Currently, too many of the low-level people try one gig and otherwise sit quiet for years. Our planned solution is to use
                    the existing criminal organizations and bandit gangs; we put that off previously, but it'll have to be done now in some abridged fashion
                    that addresses these issues. At the same time, it was really cool to see a 25 member gang all laid out, from the leader hidden in an
                    abandoned monastery, to their lieutenant goblin childhood friend that actually did all the organizing, to the low-level members, to various
                    thieves and snatchers they'd hired for jobs down at the leaves, along with one embezzler and a highly-placed asset connected to the tree
                    through their handler.<br/><br/>

                    I realized after the last dev log that I should probably clarify what I meant by FDG-PAX extravaganza. People found some intriguing acronyms.
                    For us, this means the Foundations of Digital Games conference down in San Luis Obispo at the end of the month, and the Penny Arcade Expo in
                    Seattle overlapping with it. I'll be giving a keynote down at FDG, and generally talking to the academic people about systems and emergent
                    narrative and whatever else. At PAX, I'll be on a
                    <a href="https://west.paxsite.com/schedule/panel/system-design-on-fire-all-the-time-controlling-chaos">systems panel</a>
                    (which should be livestreamed), doing a
                    <a href="https://west.paxsite.com/schedule/panel/rps-presents-dwarf-fortress-live">Rockpapershotgun stream with a live DF game</a>, and Zach
                    and I will also be there bravely staffing our own tiny DF section of the Kitfox booth on Sunday and Monday.<br/><br/>

                    So yeah, no dev log next week, as there won't be any DF work until the month changes. Hopefully I can get the Future of the Fortress up on time
                    between the events. It'll be exciting to get the first evidence-investigation conversations in the game soon.
                </p>
            },
            {
                id: 7,
                logid: "08-15",
                date: "08/15/2019",
                stuff: <p>
                    Ha, the prediction we'd be easing into adventure mode villainy was correct. Work was mostly on paper this week, as we reconciled various knowledge
                    and investigatory/evidence data structures with what we want them to be able to accomplish. Knowledge was already stored in partial fragments due to
                    how interrogation works in world generation, but we need to tease apart every little piece even more finely if we want you to be able to feel like
                    you're actually piecing clues together (whether that's in adventure mode, or in the fort mode justice system.) Real-life family stuff came up as well
                    (everything's fine, now.) But we should have some more tangible action to report next week before the whole FDG-PAX extravaganza begins.
                </p>
            },
            {
                id: 8,
                logid: "08-07",
                date: "08/07/2019",
                stuff: <p>
                    The necessary map work I was set to do this week is now mostly completed. That included bandit and mercenary forts, merchant company
                    counting houses, guildhalls, monasteries, and improved necromancer towers. The necros still need a bit of work, but overall it's in good shape.
                    As usual, actually creating the maps and populating them brought various bugs and nonsense to the surface, some of it very old. I fixed the
                    problems that I found, with the occasional collapsed roof and infinite pit to the underworld along the way.<br/><br/>

                    We've also been convinced by this process that doing the map rewrite as part of the Big Wait is necessary. For instance, I was able to get
                    guildhalls and counting houses to appear in non-player dwarf forts, but it was an iffy thing, and there are bandaids all over the place. The
                    inability to extend map code smoothly is going to inhibit a lot of what we want to do with magic and beyond, so we'll definitely be tackling
                    that. We were leaning that way anyway, since planes and portals and multiple cameras (e.g. seeing off-site dwarf battles while running your
                    fort) are all pretty cool, but now it feels compelled. There are a ton of benefits to this, but the Big Wait will indeed be Big, even if the map
                    rewrite is most of what we do at first.<br/><br/>

                    (As a reminder, the Big Wait is the development time for the first myth/magic release. This will happen after the Steam/itch release, and after
                    any immediate improvements that follow Steam/itch - candidates are listed on dev, like improved sieges, adventurer mode medical improvements,
                    etc. The length is unavoidable due to the interlinking of systems, but we'll try to make it as short as we can.)<br/><br/>

                    We'll be easing into adventure mode villainy now! Then to adv investigations, and fort mode. How we handle evidence and interrogation and so forth
                    in adventure mode will directly inform how the player deals with villains in fort mode.
                </p>
            },
            {
                id: 9,
                logid: "08-01",
                date: "08/01/2019",
                stuff: <p>
                    August's <a href="http://www.bay12forums.com/smf//index.php?topic=174393.0">report</a>. The Future of
                    the Fortress: <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg8004239#msg8004239">part 1</a>, <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg8004240#msg8004240">part 2</a>.<br/><br/>

                    As we finished off the month, which is mostly an administrative period, there was also a last bit of tangentry and
                    excitement over in necro and demon land.  Summons were expanded to include larger nightmarish beings.  They last
                    for a short time and can't be called often, but they are trouble.  Raising intelligent undead was expanded to include ghosts.
                    These can act as plotters and agents (you can put them down with their names, and likely that'll also come up when we get to
                    interrogating them about their role in plots.)  Both of these should also contribute to fun in the fort when we arrive at that part.<br/><br/>

                    Finally, certain necromancers and certain demons can also magically experiment on or otherwise corruptly transform the citizens and
                    livestock of cities that they capture.  This leads to a variety of humanoids and quadrupeds and others (like little failed experiment winged blobs),
                    some of which can escape into the wilderness and perhaps even rarely reintegrate into society (and thereby possibly become playable in adv mode
                    and available as fort travelers and migrants.)  Collections of citizens can also be amalgamated into monstrous giants.<br/><br/>

                    The creature description includes the conditions under which the creature first appeared, and their creature name often includes the name of the
                    necromancer or demon (e.g. humanoids called Tura's hands), and they are uncommon enough that I think it's a relatively safe step in terms of exposition
                    and potential confusion. That is, while elves, goblins, animal people, etc. are easy enough for most players to parse, along with the occasional forgotten beast,
                    we were worried about throwing tons of procedural beings in before myth generation can cohere them.  With the experiments though, despite being random,
                    they still occupy a controlled position that seems to work in the contexts where they appear.<br/><br/>

                    I think the tangents are finally out of my system now, for the time being, and we can get these maps done at long last. These new additions have been very
                    good for the villain theme, though, and it'll be wholesome to see them out in the worlds.
                </p>
            },
            {
                id: 10,
                logid: "07-25",
                date: "07/25/2019",
                stuff: <p>
                    I began work on the in-play maps of new locations, the last major bit to do before all the villainy comes to play.
                    The new evil regions were first, making sure the ones that spread out from necromantic activity properly killed
                    plants and so forth. Working on this led to a number of changes. Evil that spread now fades away over many years
                    if there's no new activity in the region. The primordial evil areas don't fade. Certain demons can now spread evil
                    from their towers (or disaster forts), and the properties of the evil areas are related to the spheres of the demon.
                    That is, a blight demon might kill vegetation, while a deformity demon can spread evil creature populations and wormy
                    eyeball grass and so forth. This was a natural segue into restricting bogeymen to certain primordial evil regions and to
                    nightmare demons, which puts an end to that little years-long experiment in annoying people. To compensate, bogeymen
                    have been given some new powers, but they are way more rare overall.<br/><br/>

                    These considerations led (there is a lot of leading this time) to undead lieutenants being given a variety of new powers.
                    Many of them are based on existing syndromes, like the ability to temporarily blind and so forth, but I added some new
                    effects as well. For instance, some of these undead can raise a heavy fog (when outdoors), and others can propel people
                    away from them. I also added a summon power, and new tags to make polymorph-type abilities more versatile. Demons with
                    the knowledge of life and death (that is, death demons, mainly) will now use their lieutenant raising property. They don't
                    animate zombies because animated zombies aren't friendly to their goblin and other buddies, but the lieutenants fit in just
                    fine. I made sure the goblins don't chase them away for being unnaturally immortal, he he he.<br/><br/>

                    Having escaped from all these tangents, I dutifully went to work on shrine maps. They are now distributed throughout sites
                    based on their historical prevalence, with the dominant religions claiming e.g. large plots, while the minor religions might just
                    have a single altar on a single curbside. Being full of tangents this week, that of course meant adding dice, for divination. With
                    face sets (images, words, numerals or dots) and sides according to their shape (platonic or 'long die' prisms), and certain divination
                    practices working with combinations of dice, and the ability to roll either one die or all the dice you are holding (which matters if
                    the divination practice requires two dice, say.) And, um, the divinations doing things sometimes. I went to a shrine, rolled a tin icosahedral
                    die and it was a bad roll and I was cursed to be a snowy owl for a week. So I flew up to a nearby rooftop and pondered tangents. But I
                    will relax and finish my maps now. Working on worldgen villain plot details for months made an unwind like this overdue, I think. At least
                    when I finally do get to tavern games and gambling, dice will be ready.
                </p>
            },
            {
                id: 11,
                logid: "07-17",
                date: "07/17/2019",
                stuff: <p>
                    I started with some character sheet issues this time around. To keep up with some promises from old Future of the Fortresses for the new adventurers, I allowed the purchase of item quality in chargen, and the selection of religion, including the organized ones, depending on what town you start in and its history. I also changed the 'hearthperson or not' choice to allow for a variety of regular professional backgrounds, which mostly don't do anything in adv mode yet, but they give free skills which'll allow you to have some useful skills if you decide to retire in or move to a fort. At some point we'll get to wider skill use in adventure mode, but not yet!<br/><br/>
                    I also finished the tactical mode for parties of adventurers. Once you enter tactical mode, you can either control all of your characters manually, or designate a subset you want to control and let the rest be controlled like regular companions. You can change how each individual is controlled on the fly, which can be convenient if there's, for instance, a straggler you don't want to manually walk into the fray while everybody else is already in action, or an archer you don't want to keep popping back to (or vice versa with a frontline fighter.) If all of your manually-controlled characters are incapacitated, it'll give you a little announcement and pop you over to one of your automated ones. Now that the basic implementation is finished, there are a lot of different ways to add to it, naturally, but I'll wait for some feedback on this new system before going too far with it now.<br/><br/>
                    Finally this week, I made a change to aquifers. Most of them will now run about 1/500th as slow as they used to, allowing you time to come up with a strategy to wall or channel or pump or whatever you like, while remaining a fairly immediate flooding danger. The old-style near-artesian aquifers are still in the game, but they make up about 5% of the total and are clearly marked on embark and in the site finder, so people can play around with the aquifer-busting methods that have been invented or just have an easy flowing water supply. The new slower aquifers can still be used for wells, but if overused, there is more danger now that they won't fill fast enough, in which case you just need to make an additional well or make the well excavation larger. All old forts loaded into the new version will have the old type of aquifer to avoid breaking existing fluid-mechanical setups, but the old worlds will have the new aquifer distribution for any future embarks.
                </p>
            },
            {
                id: 12,
                logid: "07-10",
                date: "07/10/2019",
                stuff: <p>
                    I finished up the basic features with pets and mounts. You can set the mount speed (which lets you see their gaits, like gallop, canter, trot, etc.), and party members will speed up to try to catch up with you. Of course, that doesn't mean anything if they don't use their own mounts, so they do that now. They will move to mount their own mountable pets after you do, and they will dismount when you dismount, if there isn't an ongoing combat or something like that drawing their immediate attention.<br/><br/>
                    I also made sure that necromancer adventurers can ride undead mounts that they raise. This was flumoxed at first since the undead creatures don't have souls and so weren't taking the commands properly, but that's fixed now, though the nature of undead animation magic is still not pinned down (and won't be until much later.)<br/><br/>
                    You can pet animals now. Necromancers can pet their zombie animals too, and the living can try too if they are foolish. Hmm, I think a necromancer might also be able to pet their zombie humanoids, due to how it does the detection.<br/><br/>
                    Next up is the tactical party combat and other party issues for next week. Then either map updates or adventurer mode investigations and villainy.
                </p>
            },
            {
                id: 13,
                logid: "07-04",
                date: "07/04/2019",
                stuff: <p>
                    As a quick start for this month, I finished the other major plots with hireable moving pieces (sabotage, abduction, and artifact theft), up to their world generation level - sabotage, for instance, still just affects an abstract economic number, since there's nothing else for it to do until we get to fort mode, where it'll likely have a starring role which you'll all enjoy very much.<br/><br/>
                    I'm finding the work a tad too abstract now that we're out of world gen, so I'm going to bring adventure mode into the mix now. This will start with completing mounts and tactical party combat to clear the plate, and perhaps the necessary map updates, and then we'll finally be ready to attach all of this plotting to an actual played game.
                </p>
            },
            {
                id: 14,
                logid: "07-01",
                date: "07/01/2019",
                stuff: <p>
                    Here's <a href="http://www.bay12forums.com/smf//index.php?topic=174195.0">the report</a> to start off July. And a short <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg7990286#msg7990286">Future of the Fortress</a> as well. I think the transition from world gen to detailing the same matter for post world gen has sparked less questions, but that's to be expected. Things should pick up again when we get to the actual play changes.
                </p>
            },
            {
                id: 15,
                logid: "06-27",
                date: "06/27/2019",
                stuff: <p>
                    This week I continued on with the in-play plot updates. The first thing I did was to get cutouts/handlers to work with assassins. Just as in world generation, the villains no longer need to hire assassins and other agents themselves. In the case where a villain or a handler is duty-bound and important, where a journey that might take several days would seem inappropriate, I've allowed them to send messages more abstractly, over the same period of time. These will still form the basis of evidence etc. during the investigation period. For villains and handlers that aren't so fortunate, they actually have to make the relevant journey. This will be particularly important once we get to fort mode, since this is where they'll be sneaking into your tavern and so forth.  I also spent a bit of time with the other (non-assassination) plots, though the transfer there is not yet complete.<br/><br/>
                    The supporting features from world generation have also needed to make the transition to play. In particular, I spent some time moving over the new cultural/population religious information that was stored in a more expedient form for world generation. I'll also have to do this with some of the new relationship data.<br/><br/>
                    Finally, I took a first look back at the unfinished adventure mode stuff I'd left behind last year with parties and mounts, and fixed up some movement and announcement issues there to refresh my memory.
                </p>
            },
            {
                id: 16,
                logid: "06-19",
                date: "06/19/2019",
                stuff: <p>
                    I went to the Interplanetary Festival in Santa Fe, where I was part of a game design panel. They've already posted <a href="https://youtu.be/ONW-EPwEwfY?t=16814">a video (should start around 4:40:15)</a>. The audience was seated out in the grass and there were many dogs (and a wolf from a wolf sanctuary!), so it was much more relaxed than the background would have you believe, which is why I perhaps do even more odd dancing than usual. Should have more normal sorts of news for next week.
                </p>
            },
            {
                id: 17,
                logid: "06-12",
                date: "06/12/2019",
                stuff: <p>
                    We now have our first complete plot pulled off in play, after world generation is complete.  The lucky (and one unlucky) actors were a dwarven necromancer named Ustuth, the dwarf Count Limul Treatyvessels, and Jonu the human assassin.  Ustuth had quite a run through world generation.  Before becoming immortal, he was the Sacred Night of the dream religion, the Veiled Fellowship, but was too proud to give in to death and sought to extend his life.  A necromancer was all too happy to arrange this, and Ustuth joined as a lieutenant of a small zombie horde which had rampaged through a few villages.  The dwarves led an alliance with the humans and elves to put an end to this after a decade or so, and Ustuth was taken prisoner.<br/><br/>
                    Normally these stories have ended with some giant monster just killing everybody, but Ustuth had another 80 years to go.  Ustuth escaped from prison after a few years and settled in a town which was captured by goblins, and he was reimprisoned in a goblin tower.  Freed during a dwarven invasion, Ustuth settled in a dwarf fortress and became an engineer while running a highly-successful criminal operation.  I'm not actually sure why he didn't try to start a zombie horde of his own instead, but this is okay.  After another few decades, he moved to the center of scholarship of the dwarves, Roomlantern, and began working more seriously, inventing valves and writing a few books about how they work.  Even among dwarves though,
                    agelessness is noticed, and Ustuth had to flee for his life, to the hillocks of Questrelic, where he blended in as a miner.  Then, love!  He married Urdim Craftdells and moved back to the original fortress where he had settled after goblin prison, Basementcave.  He joined the bonecarvers guild, the Prime Guild, and became their recordkeeper.<br/><br/>
                    This didn't last long, though, as he was already known at Basementcave and the suspicions arose again.  Ustoth fled again to hillocks where he was not known.  It was at this point that he had had just about enough, and grew to hate the ruler of Basementcave, Count Limul, very deeply.  From the hillocks, Ustoth took up the traveling life and became a bard, studying under an elf who immediately joined Ustuth's criminal network, which had been operating all this time.<br/><br/>
                    When the game started, Ustoth was hanging out with several criminal musician elves in a human village.  From the world debugger, I watched him travel to the mercenary fort where the Blockades of Chaos made their base, worshipping the god of strength.  Some of them were still freelancing though, and Jonu was one of these.  Excellently equipped by her group, and highly experienced, sneaking into Basementcave still wasn't going to be easy, but it wasn't beyond her.  After she successfully slipped past the guards, Count Limul didn't stand a chance.<br/><br/>
                    Several of the other plots will come mostly for free with this, and handling the infrastructure for this has solidified the idea that adventurer villains that can give similar orders are going to work.  There are going to be some near misses, as people can move around at times, but enough people stay in place for long enough that it hopefully won't be too frustrating to have your companions and fellow plotters come back empty-handed too often.  Before testing any of that, though, I need to finish up the plot conversions.
                </p>
            },
            {
                id: 18,
                logid: "06-05",
                date: "06/05/2019",
                stuff: <p>
                    Ah, the month slipped by on the dev log here.  This is <a href="http://www.bay12forums.com/smf//index.php?topic=174035.0">the monthly report</a>, and here is the Future of the Fortress: <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg7977325#msg7977325">Part 1</a> and <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg7977326#msg7977326">Part 2</a>. Also, <a href="https://www.gamasutra.com/view/news/343859/QA_Dissecting_the_development_of_Dwarf_Fortress_with_creator_Tarn_Adams.php">a Gamasutra interview with John Harris that goes into some technical details.</a><br/><br/>
                    For most of the days since the last log, I've been doing month changeover work with emails and rewards etc.  I did manage to find some time to start the post world-gen villain work, and it looks like everything will transfer over about as incompletely as I could have hoped.  There is a lot to do with meetings, and travel, and infiltration-style actions at sites, etc., but it can all use roughly the same basic data structures and framework as we have from world generation.  That's the hope.  We'll see how that goes!
                </p>
            },
            {
                id: 19,
                logid: "05-29",
                date: "05/29/2019",
                stuff: <p>
                    A dry but productive week of historical data structures and text.  They don't read as well as the stories from the dev logs, but the information is there now, and in the XML export.  And that marks the end of the world generation work!  Finally, we'll be moving on to everything else.  Since it has been a while, a reminder of what that looks like in recent years, roughly speaking.  First, we bring over the core of the world generation mechanics that'll be needed in both modes of the game, with finer detail since the map is more detailed and time is more granular.  This time, that mostly means getting the villainous agents to actually move on the map, continuing the plots from world gen.  Then, we work on adventure mode, since it's easier to see things up close there and do necessary tweaks and patch up flaws.  Here, we'll be doing adventure mode investigations and adventurers-as-villains, as well as finishing some items we left for parties and realizing some maps and things from world generation.  Finally, with all the core mechanics and tweaks in place, we hit the fortress mode changes:  relationship improvements sparked by the villain upgrade, villains against the fort, any plotting that you yourself can do as a fort (either as counter-espionage or more actively), and any other bits from religions, mercenaries, etc. that make it over, though these last are undecided.<br/><br/>
                    Here are some items I forgot to link from earlier in the month:<br/><br/>
                    <a href="https://kakebytes.com/2019/05/02/ep-25-dwarf-fortress-toady-one-returns/">Discussing Steam/itch release and more on Kake Bytes, with Scamps.</a>  This doesn't have the video, but the very good cat was crawling all over me intermittently.<br/><br/>
                    <a href="http://www.indiehangover.com/interview-tarn-adams-of-bay-12-games/">And here's a 27 minute video interview with IndieHangover, during which Scamps is almost always on screen.</a><br/><br/>
                    And finally, <a href="https://usesthis.com/interviews/tarn.adams/">my list of stuffs on Uses This.</a>
                </p>
            },
            {
                id: 20,
                logid: "05-22",
                date: "05/22/2019",
                stuff: <p>
                    Fortunately, the bug from last week lasted only one more work day.  The divergent butchered meats were tied to different livestock populations, which came back to differently initialized labor pools due to the game being confused about zombie work forces.  It was particularly bad since the seeds of the two worlds diverged but then realigned before things got too bad (and then diverged again for keeps ~38 weeks later).  This happens sometimes, since the number of dice rolls can resync, with just a slight change that doesn't become apparent until it blows things up later.  So, in any case, I was able to get back on top of things.<br/><br/>
                    First, alliances.  When civilizations are feeling set upon by the more evil threats (any group that requires the killing of neutrals, like gobs and the undead), they can join up now, for as long as feels necessary, and beyond, if they get along.  This has had the desired effect of keeping the necromancers in line.  A typical scenario is that the necromancer will bide their time, raise many zombies, and attack a small market to attempt to get a snowball going.  This sets an alliance to be formed, and the necromancer is subsequently be defeated.  In one such case, the necromancer Morul Searedgorge did exactly that to a coastal town of humans, and the next year found himself captured by an alliance of humans, elves and dwarves in roughly equal numbers.  He was imprisoned in a dwarf fortress for 20 years.  He might have escaped, but a hydra came and ate him and everybody else.  I did have to fix a bug where the human and dwarven allies also ate the dead if the elves led the attack.<br/><br/>
                    There are all sorts of variations on the general pattern.  In one world, a militia commander obsessed with their own mortality defected to the necromancers, was killed, raised, and imprisoned for decades (and still in prison at game start.)  In the same world, the main necromancer was also killed, but was brought back by an apprentice who had assumed control, who was later killed, and the now truly undead main necromancer became the leader again, until the alliance was finally fully successful.  I only had one small world where the wind just blew the wrong way for everybody and the necromancer completely won, after 700 years of tracking down the last villages.  In the end, heroic animal people were the last resistance, settling in the final holdout locations, slaying multiple forlorn butcher lieutenants as they inevitable fell to the army of 10000+ zombies and became forlorn butcher animal people themselves.  By the year 834, every settlement was destroyed, and history effectively stopped, aside from chronic book writing and some animal heroes that still arose and wandered the regions (they found nowhere to settle and died of old age peacefully.)  The necromancers don't yet attack the wilderness.<br/><br/>
                    I was able to finish a few more supernatural events as well.  World gen dwarves can break into the underworld now.  It gives them a chance to fight off the demons, but this generally goes poorly, as they aren't as clever as you all, making theme parks down there, heh.  Some goblins are thrown into the mix, and this becomes a new civilization in the mountains.  Artifacts can now be stored in tombs, and if thieves go for them, this can cause disturbances, as in adventure mode currently.  The resulting mummies form a grudge against the thieves, but also generally take up necromantic and villainous ways.  Here is <a href="http://bay12games.com/dwarves/imgs/mummy.png">one coast that went sour</a> after the mummy decided to attack the nearby city that had built the tomb.  They executed and raised everybody there as zombies.  The mummy never managed to recover the iron ring that was stolen from the tomb, and the thief died in an unrelated combat a few years after the theft (before the tomb eruption even happened.)  The mummy also raised his own mother from the tomb as an 'interred ghoul', along with every other notable personage buried there.  I've given the intelligent undead raised by mummied more 'crypty' adjectives to distinguish them.  We'll probably have to wait for the magic stuff before a more natural system can be used.<br/><br/>
                    I also finished the villainous/merc/etc. XML exporting I needed to do, and have started on the remaining historical event writeups.
                </p>
            },
            {
                id: 21,
                logid: "05-15",
                date: "05/15/2019",
                stuff: <p>
                    In preparation for alliances, I searched for a world with a formidable necromancer.  I didn't find one initially, as it took quite a bit of tweaking to get them to take off properly.  During this process, I found a random intelligent undead, a gorlak night shade, that was taken captive during a human counterattack, enslaved, and made to milk cows for some years.  The citizens eventually became bothered that the creature did not age, then suspicious, then hostile...  I suppose that's fair, as the curse doesn't currently change their appearance from the one they had in life, but still, it was leading a zombie army.  In any case, the night shade escaped their wrath, and returned to its tower, where it died (again) defending against another necromancer's attack.<br/><br/>
                    Eventually, as I made changes, the necromancers started conquering larger swaths of land more often, as intended (pre-alliance.)  The elves had to conquer an entire mountain range filled with zombies that used to be a dwarven civilization of thirty or so sites.  Their first attack on a zombie fort failed, but most of the zombies were put down then, and the elves eventually cleared out the halls.  In other cases, the initial counter-attack started trouble for the world.  The dwarves took a necromancer tower that had attacked their hillocks, and they took the necromancer's forbidden death-god slab as a prize to one of their fortresses, where the local historians started reading it and corrupting themselves.  I also gave necromancers and vampires the ability to use their secrets and their blood respectively to entice people to join their villainous schemes.  Grateful and dutiful villains actually carry through and share their power when an asset proves themselves useful, but others never fulfill their promise.<br/><br/>
                    At last, I found a great world for testing alliances.  A necromancer took over an entire elf civilization, choosing their battles well enough that the elves never mounted an effective counter-attack (though there was a bit of luck involved there too, I'm sure), after which they were pretty much unstoppable.  The whole time, the neighboring humans and dwarves stood by, because there are no alliances yet, but they could have easily stopped the undead.  This, of course, was the perfect time for another world gen non-reproducibility bug, which I've been working on for two full days.  I've traced it from the main necromancer being assassinated (or not) in the year 205, to a migration happening (or not) in year 183 week 40, to a debt being to one city or another in week 38, to whether or not a site wanted stone cabinets, to the size of their meat stockpile in 183 week 2, to ten particular stacks of meat which have random amounts even when the world seed is the same.  I'll get it eventually, but I have to generate the medium island world out to year 183 at least twice every time I want to log, usually more, so that's fun, ha ha ha.  I was planning to wrap up the supernatural changes this week, and now may end up just doing alliances, but we'll see how the bug chasing concludes.
                </p>
            },
            {
                id: 22,
                logid: "05-08",
                date: "05/08/2019",
                stuff: <p>
                    Necromancers are having fun.  I've added a bit more information to the necromancer towers, allowing the zombies to build them up a bit to increase a site zombie cap.  If the necromancer is at their zombie cap, they can still raise more zombies, but they are added to a wilderness population instead.  The wilderness population can still be used for invasions, but they are also able to roam on to player forts in the region and also encounter adventurers.  Such regions become evil slowly, emanating outward visibly from the tower tile by tile.  Necromancers can infiltrate site graves and catacombs to sneak out some zombies, before they are ready to attack (in the currently released version, they only raid old battlefields.)  Necromancers captured during such risky infiltrations are generally executed.<br/><br/>
                    Once the necromancer is feeling powerful enough, they attack the outlying villages of a market town and if the snowball gets big enough, the market town as well, all in the same invasion during a given year.  So far, this has caused some minor pain, but hasn't ever turned into a world-ending cascade, as history is usually too messy for that (sudden dragon attacks, opportunistic goblin attacks, etc.)  But I'm still planning on adding alliances, as the necromancers will only get better at seeing through their new ambitions as I do a few tweaks to make them more effective.<br/><br/>
                    For instance, in order to handle some of the logistics of taking over the world, necromancers can now raise a new type of intelligent undead from historical graves and battlefields.  These currently have silly names like hollow haunt and doomed zombie and so forth.  They are under the control of the necromancer, but can retain much of their old identity.  (There are bugs to wrangle - sometimes they take off and join performance troupes.)  I'm also currently letting the necromancer use them as assets during villainous schemes, though I should grapple a bit with what that means in terms of, like, their intimidation rolls and how they get reported to the authorities.
                </p>
            },
            {
                id: 23,
                logid: "05-01",
                date: "05/01/2019",
                stuff: <p>
                    The report to start May:  <a href="http://www.bay12forums.com/smf//index.php?topic=173824.0">Bay 12 Report</a>.  And here's the monthly Q&amp;A, Future of the Fortress:  <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg7963854#msg7963854">Part 1</a>, and <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg7963855#msg7963855">Part 2</a>. Now to begin supernatural villains and perhaps our first end of the world.
                </p>
            },
            {
                id: 24,
                logid: "04-26",
                date: "04/26/2019",
                stuff: <p>
                    The civilizations in world generation now have some basic counter-intelligence abilities, and though it's abstract like the rest of world generation, the spy masters and law enforcement position holders, like the villains, have to work in a more-or-less fair fashion to earn their victories.  The game keeps track of the evidence they've collected from witnesses, interrogation and surveillance, and this gives them leads on further steps to take, in terms of who to surveil and who to interrogate.  They don't take any complicated steps, forming plots against villains etc., as there simply wasn't time.  But they can defend themselves adequately and stop the world from falling into compromised ruin.  Hopefully that'll be enough for now.  We'll come back and adjust after we see how fort mode plays if necessary.<br/><br/>
                    But first, we need to finish world generation, and that means it's time for the supernatural critters and persons to have their shot at earning proper villainous credentials.  We spent some time this week narrowing down a very long list of possibilities.  Most matter to do with the supernatural is best saved for the magic release, but since there will be a Big Wait for that, adding as well the work on the graphical release, we've been planning to add a certain amount of Fun elements to help tide everybody over.  I previewed one of these at my talk at the last Roguelike Celebration, which was a plot for a necromancer to take over the world with an army of undead soldiers raised from the chaos of plot-caused wars.  Conveniently, we have almost all of the tools necessary to do that now.  This'll also very likely lead to a non-villainous addition - alliances.  At least, our suspicion is that in some worlds, those will be very necessary for survival.  But it's not all undead armies in the notes.  We'll see what we get to in the time we've set aside for this.
                </p>
            },
            {
                id: 25,
                logid: "04-19",
                date: "04/19/2019",
                stuff: <p>
                    I've finished the final non-supernatural plots for villains to employ now.  As stated last month just before all the excitement, these are corrupt imprisonment, framing, snatching, sabotage and directing wars to their enemies.  They also include intentionally corrupting the government of an enemy (rather than targeting based on location or current assets.)  The most complicated plot here was snatching, as it involves the new hideouts and also the disposition of the hostage afterward.  They can obtain a ransom (depending on the position and family of the hostage), imprison the hostage for a period, or just murder them if they run out of ideas.  If the villain holds a particularly strong grudge and is vengeful and cruel, they might torture and/or sell the hostage (depending on their values and which civilizations are around).  So, that's kind of bleak.  One bright side is that personal prisoners have a chance to escape now (it is harder to escape from towers, especially those with dungeons), including those taken by night trolls.<br/><br/>
                    Most of it is bleak, though.  Corrupt imprisonment and framing are similar to each other, but the first requires the villain to either personally hold or have influence over the leader or law enforcement of a civilization, while the latter involves excellent intrigue skill use against those same position holders as well as the target.  If successful, the target (either a grudge or somebody else to be neutralized) will be charged with a crime and receive whatever punishment is due for it, from exile to imprisonment or execution.  The villains make sure to check the laws first before they attempt to use either of these techniques.<br/><br/>
                    Starting wars, also bleak, involves corrupt leaders, advisors and generals associated to civilizations with which the target civilization is currently at peace.  Skilled intrigue here can disturb diplomatic relations, though I didn't set aside a lot of time to get into specifics there (we need to finish sometime!)  Similarly, sabotage is a bit thin, but if successful, the agent harms the abstract 'account' of either a grudge or the company/guild they are a part of, which does have an effect on them (I didn't yet do actual building destruction.)  Now we can move on to our criminal organization tweaks and counter-intelligence.<br/><br/>
                    Here is Annie and Kate's second <a href="https://medium.com/the-fortress-is-for-everyone/community-generation-e77d90081232">The Fortress is for Everyone</a> post.
                </p>
            },
            {
                id: 26,
                logid: "04-11",
                date: "04/11/2019",
                stuff: <p>
                    I finally pulled together all of the corruption techniques and goals into a single place along with skills, personality, and the relationship variables (love-hate + trust + loyalty + fear + respect), and...  it seems to be working out.  It was spread out and disjointed before, so I wasn't able to get the villain's decision-making to consider every factor reliably.  Now it's much more compact.  The current set of corruption techniques, which is looking more final as we slowly wrap world-gen up: intimidation, asserting rank, blackmail, flattery, exploiting religious sympathies, promising to take revenge on an enemy, and direct bribery.  These are used to corrupt position holders variously and to gain new agents.<br/><br/>
                    The villain or their agent chooses a technique based on whichever one they think will provide the best outcome, but if an organization has not been penetrated or the agent isn't good at their job (intrigue, judging intent, etc.), their assessment of which technique will work can be incorrect (by design.)  For instance, they might think a bribe is a good idea, but if they are a terrible judge of character and have nobody inside the target's organization, they might not realize that the target is not greedy and not in debt.  But if the target were greedy, or in debt, and the agent has an insider and a good judge-intent roll, they will correctly assess bribery as a useful possibility.  It'd be nice to remove more of the rolls from the system, but we don't have enough data and getting there might be hard, especially in world generation where so many parts need to move quickly.  It is good enough for this venue; there might be a few additions for the fort or adventurer villains if it starts to feel too rough.<br/><br/>
                    Generally, the moments of intimidation, flattery and bribery from the previous blogs, now have cleaner and more unified modifiers based on skill, personality, and the relationship variables (e.g. intimidation is more successful if the target fears the villain already, and flattery works better if the target trusts them) and can be selected more intelligently, with the ability (upcoming in a bit) to expose most of the factors in the decision-making to legends mode.  A wholesome rewrite, and we can check off that bit and move to finish the final mundane plots and do some necessary tweaks to criminal organizations.
                </p>
            },
            {
                id: 27,
                logid: "04-08",
                date: "04/08/2019",
                stuff: <p>
                    Life is beginning to settle down again, though we have quite a few rewards to work on, so there'll be intermittent delays - we'll eventually get them all sent out!  My internet computer died a few days ago, but I managed to salvage the hard drive, so aside from a lost day, no serious damage there.  I'm back working on schemers and should have another log on Wednesday or Thursday about the week's work (that time of the week works best with the rhythm of the week's work, as it stands.)  To get out of world generation, I still need to finish the plots I mentioned just before the big announcement, do some more work with compromise methods and the intrigue skill, mess a bit with criminal organizations, handle counterintelligence, handle supernatural villains, and tie up some expository loose ends (mostly around historical event text, xml, etc etc.)  That's not *that* much, given all that we've handled to this point.  We'll see how far I get this month!<br/><br/>
                    Here are all the parts of the PC Gamer interview I did at GDC (I posted the first one last week): <a href="https://www.pcgamer.com/if-dwarf-fortress-sells-millions-on-steam-its-creators-will-give-the-money-away-as-fast-as-possible/">Part 1</a>, <a href="https://www.pcgamer.com/tutorials-and-mouse-support-could-make-dwarf-fortress-on-steam-vastly-easier-to-play/">Part 2</a>, <a href="https://www.pcgamer.com/dwarf-fortresss-next-big-update-will-let-you-play-its-adventure-mode-with-a-proper-rpg-party/">Part 3</a>, and <a href="https://www.pcgamer.com/meanwhile-in-dwarf-fortress-players-build-computers-powered-by-vampires/">Part 4</a>.
                </p>
            },
            {
                id: 28,
                logid: "04-01",
                date: "04/01/2019",
                stuff: <p>
                    A <a href="http://www.bay12forums.com/smf//index.php?topic=173628.0">Bay 12 Report</a> to start the month.  And the Future of the Fortress in two parts: <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg7952064#msg7952064">Part 1</a> and <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg7952065#msg7952065">Part 2</a>.<br/><br/>
                    Following the announcement, Zach's wife Annie and cousin Dr. Kate Ringland began <a href="https://medium.com/@kateringland/the-fortress-is-for-everyone-3f5eddb737d0">a series of posts</a> about Dwarf Fortress, healthcare, and some of what's been going on.<br/><br/>
                    Here are some of the recent articles (ones for which we were interviewed): <a href="https://motherboard.vice.com/en_us/article/pan94n/dwarf-fortress-is-abandoning-its-text-based-graphics-but-not-its-soul">Motherboard</a>, <a href="https://kotaku.com/dwarf-fortress-is-coming-to-steam-because-its-developer-1833333064">Kotaku (1)</a>, <a href="https://kotaku.com/dwarf-fortress-creators-favorite-bug-questions-the-natu-1833375249">Kotaku (2)</a>,
                    <a href="https://www.pcgamer.com/if-dwarf-fortress-sells-millions-on-steam-its-creators-will-give-the-money-away-as-fast-as-possible/">PC Gamer</a>, <a href="https://www.pcgamesn.com/dwarf-fortress/dwarf-fortress-steam-healthcare">PCGamesN</a>, <a href="https://www.polygon.com/features/2019/3/14/18264569/dwarf-fortress-steam-tarn-adams-villains-health-care">Polygon</a>, and <a href="https://waypoint.vice.com/en_us/article/8xypb5/the-dwarf-fortress-creators-werent-in-it-for-money-but-now-they-need-it">Waypoint</a>.
                </p>
            },
            {
                id: 29,
                logid: "03-13",
                date: "03/13/2019",
                stuff: <p>
                    It's announcement day!  Dwarf Fortress is coming to Steam and itch.io with a new tile set and enhanced graphics support and audio.  We'll continue updating the free ASCII version on the Bay 12 web page as Dwarf Fortress Classic.  We posted a longer <a href="https://www.patreon.com/posts/25343688">message to our Patreon supporters</a> (anybody can read) with more information.<br/><br/>
                    I'll be in <a href="https://discord.gg/kitfoxgames">the Kitfox Discord</a> all day today.  I'm also doing two Reddit AMAs on Thursday the 14th: one at <a href="https://www.reddit.com/r/dwarffortress">/r/dwarfortress at noon US Pacific</a> and one at <a href="https://www.reddit.com/r/gamedev">/r/gamedev at 2PM US Pacific</a>.
                </p>
            },
            {
                id: 30,
                logid: "03-09",
                date: "03/09/2019",
                stuff: <p>
                    Hmm, matters have still been hectic, so I don't have enough for a story. I've been working on several final plots for villains in order to round things
                    out and make use of the new dungeons and so forth, as I mentioned earlier. These include corrupt imprisonment, framing, snatching, sabotage and trying
                    to ignite warfare involving their enemies. This work will continue until and then after GDC, which happens from the 18th to the 22nd, though we're going
                    to have that DF announcement on the 13th to keep matters interesting!<br/><br/>
                    In much smaller announcement news <a href="http://bay12games.com/dwarves/imgs/four_pigs.jpg">Threetoe now keeps four threetoes.</a> From the left: Harry, Ramone, Sid and Bowie.
                </p>
            },
            {
                id: 31,
                logid: "03-02",
                date: "03/02/2019",
                stuff: <p>
                    As foretold: <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg7937882#msg7937882">Part 1</a> and <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg7937883#msg7937883">Part 2</a>.
                </p>
            },
            {
                id: 32,
                logid: "03-01",
                date: "03/01/2019",
                stuff: <p>
                    Here is the <a href="http://www.bay12forums.com/smf//index.php?topic=173387.0">Bay 12 Report</a> for this month. Stuff still a little busy, so I should have the Future of the Fortress tomorrow! Then we'll be back to villains.
                </p>
            },
            {
                id: 33,
                logid: "02-28",
                date: "02/28/2019",
                stuff: <p>
                    Nothing villainous to report on the dev log this week, as the bulk of my work time was spent preparing material for an upcoming Dwarf Fortress announcement.  That'll happen in a few weeks!  GDC is also coming up in the second half of March, so we'll be entering what will prove to be an unusual month, but we should still make some decent progress toward the villain release.
                </p>
            },
            {
                id: 34,
                logid: "02-21",
                date: "02/21/2019",
                stuff: <p>
                    Some time frustratingly burned on another butterfly-effect style world generation bug, where the same seed would occasionally produce different results.  I had to trace it through different temples being built in year 100, to different lovers being selected in year 60, to different shrines being constructed in year 35 (a RNG state alteration which caused somebody's gender to change on the other side of the world at birth, hence the lover difference), to the actual mistake in the code where leaders selected which shrines to encourage.  That took a few days of diligent logging and world regeneration.  But it's fixed now.  I've been adding stuff to world generation for some months, so it was inevitable this sort of thing would happen from time to time.<br/><br/>
                    I did make progress on hideouts.  Plotters can use their organization and leadership locations, whether that's a monastery or a mercenary compound or their own castle.  But we needed a few options for people without those social structures, for artifact storage among other things, so now anybody with a sufficient account can grab a house or have a tower built in a city.  (Given how dwarf maps and fort mode room assignments work, I don't have options for fortresses yet.)  The buildings pass on to family members currently, and buildings that don't pass to anybody can be obtained by somebody (instead of having them build a new one, sometimes.)  Merchants and wealthy officials have generally been the tower-builders in my first passes, as they are very expensive.  There's a cap on the amount of towers based on city size to prevent a Towers of Bologna situation from being too common, but there can still be a number of them.  Towers can also be reconstructed and extended - feast halls, added fortifications and gated yards are common, but plotters can also add a dungeon, the purpose of which is shortly to arrive, heh.<br/><br/>
                    The previous owners of towers and houses are referenced in the histories, so we can follow their passage reasonably easily.  I found one named the Luxurious Bejeweled Executions first built by a corrupt official who had tremendous luck gambling.  When he died, his wealthy merchant ex-lover purchased the tower.  She died shortly thereafter, and the Executions was purchased by another official, who died and left it to his son Gal.  That happened over the course of a hundred year, so we should see some wholesome layers of history develop on these structures.<br/><br/>
                    For instance, if a villain, say, passes on in an unfortunate way and has no family in the area to inherit their artifacts or house, the artifacts will simply be in that house, hidden and lost.  In the very likely event that the house is purchased later, the artifacts will be unknown to the homebuyer (at first), but they will nevertheless possibly have a problem on their hands, depending on who might be searching for the treasures.  I haven't actually seen this yet, with random homebuyers.  The world I checked had the orderly passage of eight hidden artifacts to heirs of houses and towers that contained them, but they could easily have gone on the market instead, and even in my case, the heirs weren't all told about the hidden treasures, as they weren't all family heirlooms.<br/><br/>
                    In fact, Bax Doomedwane was a descendent of kidnapped dwarves who grew up in a goblin tower, but she left to become a dancer in a human city.  That didn't last long, but she was out of the goblin civilization and somewhat integrated in her new home, and became the chief executioner in town after a few years.  Being raised a goblin, Bax was a natural for villainy, and soon had the harvest administrator embezzling money for her.  She soon corrupted the local magistrate and turned her eyes to thievery, having her gang steal two artifacts in particular, an alder figurine of an ant and a pig leather quiver, both rightfully claimed by the dwarf fortresses where they were made.  These were quite coveted objects, but in the year 183, when Bax died, she had them both, squirreled away in the house she bought with her ill-gotten gains.<br/><br/>
                    Bax had six children still living at the time of her passing, and the house went to Usbu Menaceflew.  He had a goblin name, and grew up in a tower, but like his mother, his art took him outside its bounds, and he became a bard, a lasting career for him.  For almost 120 years he'd been composing, his latest being "And He Sang 'Toasts!'" and "We See Depression."  Usbu never committed a villainous act of any sort.  Married three times, he moved around the world, and was living in a forest retreat named Entrancedsparkled when news came that he'd come into some property.  World generation ended at the time when he moved to the human city, to his newly-inherited house, which contained the two hidden dwarven artifacts.  Nobody aside from the dwarves had an outstanding claim on the quiver, but the alder figurine was also sought by Lema Furnaceteach and Ngoso Dreaddirge, two goblin bandit lords as old as the world.  They'd each stolen it from Bax before, and their minds would still often turn to the treasure.
                </p>
            },
            {
                id: 35,
                logid: "02-14",
                date: "02/14/2019",
                stuff: <p>
                    I decided to do the religious work I mentioned for worldgen last time, in the form of persecution and riots, religious grievances and personal grudges against abusive rulers, as well as allowing priests to reduce (or further inflame) tensions, according to their character.<br/><br/>
                    Stodir Valeinked was a dwarf born deep underground in what was becoming a heavily religious community.  His father had joined the Crystalline Denomination four years before Stodir was born, and would later become a priest of Limul, the dwarven goddess of metals.  Stodir followed the family religion ardently, but a love of history took him to the human town of Combatfoot, on the east coast not far from the mountains.  The first and greatest library of the world was there, the Bastion of Poets, and Stodir studied diligently for many years.  For reasons unclear, Stodir was elevated to be the baron of the town when the former ruler died...  this did not suit Stodir well, as he was greedy and somewhat cruel.  It wasn't long before he began accepting bribes from a goblin criminal.  (Unrelatedly, a fell mood dwarf in the town also gifted him a human bone floodgate which he made the symbol of his rule.)<br/><br/>
                    Over the years, his eye was drawn several times to the Occult Coven.  This religion of fate was older than the Crystalline Denomination, and in Combatfoot stood their temple, the Church of Veils.  The first high priestess, Exalted God Ongu Furnacecloaks, died peacefully in 75, leaving the Heavenly Wonders, a perfect wax opal, in the Church.  The next high priest was Nani Lushslops.  Worship of the Tenebrous Aura continued in the Church, until, overcome by a decade's weight of greed and driven by fervency, Stodir made his move in the year 88.<br/><br/>
                    The Church of Veils was the only temple destroyed in the first 125 years of history.  Many minor shrines to the Coven in Combatfoot were also razed during the persecution.  The possessions of followers were confiscated, and they were expelled from Combatfoot.  Overall, eleven historical figures and seventy others made the journey south to the peninsula town of Northpranks, still in the same human empire, but outside of Stodir's domain.  The Occult Coven had a priest there, but their one great house of worship was gone.  The Heavenly Wonders was destroyed with the temple, fervency having outmatched greed in the end.<br/><br/>
                    In Northpranks, tensions were high.  The Crystalline Denomination didn't have a temple in town, but there was a simple dwarven shrine and a few worshippers that had trickled in from the mountains over the last fifty years.  The Occult Coven's local priest, Sacred Dawn Gasem, preached on the subject of love and tolerance toward the Crystalline Denomination specifically, that tensions might abate, but a year later the wound was still remembered and a riot broke out.  Including the eighty or so recent arrivals, just over 200 of the town's 300 citizens were Occult, and they rose up together and destroyed the shrine.  Nobody was hurt among the eighteen followers of Limul, but that was by no means a sure thing.  The shrine, the reminder of their suffering and exile, having been destroyed, the riot ended and they pondered no further violence.  The local Denomination believers nursed a grievance of their own, but didn't try anything.  Tensions abated over the next thirty years.  When the displaced high priest Nani passed away in 127, he left a lump of clay in the new Occult Coven temple in Northpranks, constructed in 120.<br/><br/>
                    I found one historical instance of the story going the other direction.  The humans conquered a forest retreat and placed an administrator in charge, who was an ardent Occult Coven follower.  She was greedy, but not particularly harsh, and confiscated some goods from the few Crystalline Denomination worshippers that were there, without expelling them or destroying the shrines.  This created some tension, but their local priest managed to talk them out of doing anything.  Oddly enough, this priest, Libash, was also a historian who had studied in Combatfoots, twenty years after the Church of Veils had been torn down.  Before joining the priesthood, he had discovered the technique of comparative biography, which is more than Stodir even managed.<br/><br/>
                    Incidentally, priests do not always take the high road when preaching to their flock.  There were three other human religions inciting violence against each other repeatedly as they took turns abusing the power of petty lordships, leading to various riots and trouble.  These were more deadly...  at one point, a few people were fed to beasts to honor the nature god.
                </p>
            },
            {
                id: 36,
                logid: "02-06",
                date: "02/06/2019",
                stuff: <p>
                    Various consolidation and small moves to start the month.  I traced accounts for embezzlement networks and smoothed out some rough edges there, and made sure the mercenary groups based on organized religions (as opposed to generic worship) functioned correctly.  I also fixed some frequency issues with religions and updated the November update to temple profaning to make it compatible with upcoming religious strife.  Ruining random temples no longer matters to the deity.  In order to be cursed, the act must be against a god the offender worships, for some specific reason (how this manifests in post-worldgen is TBD, but at a minimum it can just check the worship of, say, a tantrumer -- curse one way, religious tension the other.)  In order to avoid werebeasts and vampire curses exploding like popcorn during religious riots, something had to give, and in general, making the curse stories a little more personal seemed appropriate now.  I still have to do religious tension etc. of course; something will be added for this time, even if it ends up kinda basic.<br/><br/>
                    I now have punishment in terms of sentences of a number of years understood by worldgen, vaguely aligned to dwarf mode and the (wholly-inadequate-but-good-enough-for-now) ethics definitions.  Before, prisoners were just prisoners, for as long as it lasted (escape/conquest/etc.)  Now an embezzler might spend five years in the dungeon, not try to escape, and then go on to do something else, which is important as we move toward non-assassination problem-solving by villains.  They should have the option soon to engineer false charges or otherwise corrupt imprisonment.
                </p>
            },
            {
                id: 37,
                logid: "02-01",
                date: "02/01/2019",
                stuff: <p>
                    A <a href="http://www.bay12forums.com/smf//index.php?topic=173159.0">Bay 12 Report</a> to start the month. A Future of the Fortress too:
                    <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg7924237#msg7924237">Part 1</a> and
                    <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg7924238#msg7924238">Part 2</a>.
                </p>
            },
            {
                id: 38,
                logid: "01-30",
                date: "01/30/2019",
                stuff: <p>
                    Worldgen mercenaries now participate in battles.  If they do well, and survive for a time, they can pull together some of the other mercenaries participating, as well as some of the other non-historical people participating, and create a mercenary company.  These can be quite different from each other.<br/><br/>
                    The last one I looked at was founded by Oddom Weatherbrass, whose great grandmother was a bookkeeper who feel in love with a necromancer, became obsessed with her own mortality a few years later (unrelatedly, somehow), and began worshipping the skeletal death god Rakust.  Kadol received Necroskull, a slab with the secrets of life and death, from the god and became a necromancer herslf.  She was murdered decades later by a criminal assassin and so forth, but the important point for this log is that she had a large family and they were all death god worshippers.  Not necromancers, but Kadol's non-traditional religious beliefs passed down.  Oddom was devout, and after a few battles, she founded a mercenary order devoted to the worship of Rakust and dedicated to the mastery of the mace and the battle axe, the mace being her favorite weapon.  Oddom's daughter was also a mercenary by that time, and being a death-worshipper, she joined the order when it was founded.  Over several battles of recruitment, they came to have over sixty soldiers (non-historical converts, as it was hard for them to find co-religious historical people), created a treasurer position to manage the income (taken by daughter Inod), founded a fort which they inventively named Necrodie, and there constructed the Chapel of Oblivion for the worship of Rakust.  Pilgrims, often from their extended family, but sometimes from other necromancer families, often visited the Chapel to pray, and sometimes became prophets and formed their own religions and temples in other parts of the world.  (Military orders can also be founded aligned with specific organized religions, but that wasn't the case here.)<br/><br/>
                    As a mercenary order dedicated to a few weapons (Oddom valued skill, like many dwarves), they had honors which they bestowed at various skill levels and other milestones (battles, kills, years of service.)  Oddom was exempt from the general rank system as overlord, but Inod was made a 'Soldier' after her first battle.  She didn't manage to become a Mace Adept like her mother, as she died in the goblin wars.  Her mother died a few years later fighting in a battle, opposed by the Oily Spikes, a militant religious order devoted to the wolverine mountain goddess of the dwarves.  The death mercenaries fared poorly overall here...  they all died.  This happens sometimes.  The group was officially disbanded at that point (this can also happen after heavy but not total losses.)<br/><br/>
                    "Soldier" and "Mace Adept" aren't creative names, and the death mercenaries only had three or four general and skill-based ranks, but even more skill-oriented groups with orderly founders can have rank systems with 15 flowerly-named levels for each type of weapon they utilize, and they refine their skills more on their off time.  Other mercenary groups focus on military tactics, leadership and organization, and others rely on stealth, and can contract out their members individually for thefts and assassinations.  These shadowy groups focus on scouting when they take company-level battle contracts, staying away from most of the danger and offering a tactical bonus to their side's commander.  The most versatile companies can do all of the above.<br/><br/>
                    Aside from forts and temples, mercenary groups can also spend money to upgrade the average quality of their equipment; this impacts their performance in battles but also increases upkeep costs.  A group that runs into a long dry patch can go broke and disband, though this doesn't happen often (heavy losses/group wipes are more common.)  When groups disband, the survivors can rejoin other groups, though they often take some time off (when the Oily Spikes ran into trouble and disbanded after 20 years in action, their founder went off to have a peaceful life as a butcher in a nearby city.)  Individual mercenaries can also use their money to upgrade their own equipment.  This typically happens before their company (if any) steps up, but a wealthy company can pay to equip joining members if they are behind.
                </p>
            },
            {
                id: 39,
                logid: "01-23",
                date: "01/23/2019",
                stuff: <p>
                    I've mainly been 'consolidating gains' this week (that is, finding horrible bugs and wondering how anything worked in the first place.)
                    After cleaning up after myself, I started in on bandit forts as a preliminary to villain hideouts. The bandits were also horribly bugged,
                    but now the largest groups can make forts out in the wilderness somewhat near to the civilizations they are associated with. Along with
                    the new monasteries and the return of castles and the old tombs and necromancer towers, it's starting to look more interesting away from
                    the cities, and we aren't quite done with new site placement yet. More next week.
                </p>
            },
            {
                id: 40,
                logid: "01-16",
                date: "01/16/2019",
                stuff: <p>
                    Zach's final surgery went great!  Hopefully life here will be calm for a time.<br/><br/>
                    I ran a medium world out 100 years, and it's getting a little hard to decide which stories to write up, which is a good sign.  I was just looking at the ruler of one of the goblin sites, Nguslu, notable for being a war buddy of the demon lord (to the extent demon lords respect the buddy notion), who hammered out a villainous life (like many goblins) for 68 years before being assassinated by a dwarven mercenary Dodok Ochrevises.  Dodok was hired by Erush Castlegild, a snatched dwarf that became a goblin-style bandit and was sick of Nguslu's stymieing authority over the fortress of Evilchant.  Dodok failed to get the drop on Nguslu, and they were evenly matched, but after two failed assassination attempts, Nguslu's luck finally ran out.<br/><br/>
                    But perhaps we should talk about the king of the dwarves, Aslot Sinentered, a goblin, ruling for the last 55 years.  Back in the year 24, 21 years before his reign began, Aslot was a bandit, like Erush or any of dozens of others.  Styled 'overlord', but ruling nothing.  He operated near the dwarven capital of Targetroad, and his first attempt at villainy was to try to extort money from the broker Nish.  He failed.  The manager Adil?  Failed.  The bookkeeper Dakost?  Nope.  The chief medical dwarf, Erith?  No again.  (I'm chuckling to myself reading the events, as I know that Aslot becomes king, but this is new to me and not looking promising so far.)<br/><br/>
                    Over the next ten years, Aslot only managed to subordinate Reg Figuresavior, the tavern keeper of the Chestnut of Spices, and Reg went on to do absolutely nothing of value for him.  Finally, in 39, six years before his ascension, Aslot managed to get the outpost liaison Alath Whippedlances; Aslot was a world-class flatterer by this time and was bound to be successful (since there's not enough cost for repeated failure, yet, in terms of punishment.)  Aslot set the liaison to work immediately, using the new access to attempt to turn the until-then unapproachable General Mafol.  Mafol was incorruptible.  Alath's ex-wife, the diplomat Dumat, however, was another story, and Alath managed to pull her into Aslot's web.<br/><br/>
                    It was at this point that Aslot first thought about seizing the throne, but it seemed hopeless.  A few insiders had less than a fifth of the pull necessary to orchestrate something that grand.  So what happened?  (I don't know yet, he he, reading...)  Using Dumat's access, Aslot turned one of the many landholders in the year 43; Baroness Besmar enjoyed the cloak-and-dagger games so much she took the name "Sikel the Foggy."  The coup soon followed, but it only worked because in the year 45, Besmar went from being "one of the many landholders" to being "one of the two landholders."  A war with the elves had begun.  General Mafol was killed by an elven grizzly bear in 45 leading the defence of the fortress Shipskunk.  The dwarves won the battle, but several barons were killed.  That year, the power equation having swung just barely in Aslot's favor, he pounced, using Besmar, Alath and Dumat to seize power from the Queen Ducim Windfang.  The deposed queen was imprisoned in Targetroad, though the gracious King Aslot later gave her a minor barony where she lived out her days until a quiet death in 82.  Besmar became a countess, then a duchess.  She married Alath, but they divorced after thirty years.  He remained outpost liaison under Aslot until his death in 84.  Dumat remains the diplomat, where she regular competes in battle axe throwing competition with Duchess Besmar.<br/><br/>
                    Over those forty years, King Aslot fiddled with his network and attempted to control his subordinates with varying success.  Several coups were idly plotted against him, but nobody managed to turn more than one of his now numerous landholders.  The one major villainous event Aslot pulled off during his kingship was in the year 86, when the king hatched an assassination plot on a different Alath, Alath Glovedbrass, his own guard captain, after tavern keeper Reg failed to loop him in on some low-grade scheming (the rulers don't yet have other tools in their box, like simply firing the guard captain, he he.)  Aslot used new asset logId Steelarmors to send a message to famed assassin Nushrat Exitrulers to set up the job.  Nushrat performed the job flawlessly, her fifth kill earning her the name "Nushrat Exitrulers the Sacrificial Gaze."<br/><br/>
                    It wasn't always that easy.  Nushrat was a human criminal born in the town of Focusesteem, where she learned to skulk about well enough doing petty crimes, though her most notable achievement by then was being boxed in the face by a cyclops and losing some teeth.  Nushrat's first real job was in the year 55, when a bandit hired her to kill a baronness who refused to take a bribe to ignore his operation.  Unsurprisingly, she failed, but somehow survived, and continued learning.  In 61, she was approached by Jal Mirrotboots, the master of beasts of the Curious Realm, who wanted her to kill the Realm's justiciar.  (Nushrat never knew that Jal had been sent by Dang Strokedhorrors, the only other goblin in history that managed to overthrow a civilization, becoming law-giver of the Curious Realm 24 years later after turning both the chancellor and the previous law-giver's advisor.)  This time, Nushrat was successful.  Next, the harrowing job of killing a goblin lord for a goblin bandit in a dark fortress, but Nushrat was getting good and pulled it off.  She did her fourth job for a necromancer's apprentice.  The master necromancer had it out for the Justice who had rebuffed the apprentice's attempt to bribe him.  In 80, it was the captain of the guard of a dwarf fortress, marked for death by his own mayor for refusing to ignore the embezzlement of the chief medical dwarf (of which the mayor was taking a cut.)  The mayor was a goofus styling himself "Azmol the Lone", but Nushrat never met him, just his messenger, a local mercenary who the mayor later appointed the broker.<br/><br/>
                    In 81, five years before the job for Aslot, Nushrat put her stealth to use on a side job for the bandit Snang Beardplague.  The Contemptible Straps was a famous copper short sword, made in a strange mood by dwarven weaponsmith Onul Playedcrafted sixty years before.  Onul offered it to the Queen (not Queen Ducim, we are with other dwarves not far away.)  It was only a few years before the greedy and villainous hammerer got his mind to working and had the corrupt bookkeeper steal it for him (when we add hideouts, he'll hide it somewhere sensible instead of carrying it around, he he.)  When the hammerer died in 81, and the Contemptible Straps was found and restored to the fortress, our bandit Snang, who had been pining after the sword for years, wasted no time and hired Nushrat to swipe it for him.  She did this easily.  Snang still carries it.<br/><br/>
                    Nushrat carried out three more assassinations after her work for Aslot in 86.  Then she stole three more artifacts.  And assassinated two more people.  And lives happily at age 97, never married, with her seven remaining children, waiting to take a job to come to your fort and take your things or deal with your pesky sheriff.  Or somebody like her.<br/><br/>
                    Interestingly, none of the major historical events described were precipitated by large villainous networks, just the networks that were well-placed or lucky.  Osnun Enddungeons and Atera Ivoryowl were both running ten people and I have no idea what they were up to.  Ah, Atera was a druid!  But I should stop now.
                </p>
            },
            {
                id: 41,
                logid: "01-08",
                date: "01/08/2019",
                stuff: <p>
                    First, a Zach update: he's going in for followup surgery tomorrow. The initial procedure went pretty
                    deep so there needs to be some reconstruction and moving about of bits, but we're hopeful he's
                    cancer-free at this point.<br/><br/>
                    I'm underway on additional worldgen villain mechanics, continuing into schemes to acquire artifacts
                    (and then keep, sell or pass them along) and then on to shenanigans involving positions beyond
                    embezzlement, up to and including coups. Then we'll need to cover at least assassinations and hideouts,
                    perhaps more if we feel like there's time, but that'll be enough to make dwarf mode interesting when we
                    get there. I'll have another villain story when I finish this set.
                </p>
            },
            {
                id: 42,
                logid: "01-01",
                date: "01/01/2019",
                stuff: <p>
                    Here's the first <a href="http://www.bay12forums.com/smf//index.php?topic=172935.0">Bay 12 Report</a> of 2019!
                    Here's the Future of the Fortress: <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg7908714#msg7908714">Part 1</a> and <a href="http://www.bay12forums.com/smf//index.php?topic=169696.msg7908715#msg7908715">Part 2</a>.
                </p>
            }
        ]
    },
    {
        id: 2018,
        year: "2018",
        logs: [
            {
                id: 1,
                logid: "01-01-test",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 2,
                logid: "02-02",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 3,
                logid: "03-03",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 4,
                logid: "04-04",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 5,
                logid: "05-05",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 6,
                logid: "06-06",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 7,
                logid: "07-07",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            }
        ]
    },
    {
        id: 2017,
        year: "2017",
        logs: [
            {
                id: 1,
                logid: "01-01-test",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 2,
                logid: "02-02",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 3,
                logid: "03-03",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 4,
                logid: "04-04",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 5,
                logid: "05-05",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 6,
                logid: "06-06",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 7,
                logid: "07-07",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            }
        ]
    },
    {
        id: 2016,
        year: "2016",
        logs: [
            {
                id: 1,
                logid: "01-01-test",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 2,
                logid: "02-02",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 3,
                logid: "03-03",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 4,
                logid: "04-04",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 5,
                logid: "05-05",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 6,
                logid: "06-06",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 7,
                logid: "07-07",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            }
        ]
    },
    {
        id: 2015,
        year: "2015",
        logs: [
            {
                id: 1,
                logid: "01-01-test",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 2,
                logid: "02-02",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 3,
                logid: "03-03",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 4,
                logid: "04-04",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 5,
                logid: "05-05",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 6,
                logid: "06-06",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 7,
                logid: "07-07",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            }
        ]
    },
    {
        id: 2014,
        year: "2014",
        logs: [
            {
                id: 1,
                logid: "01-01-test",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 2,
                logid: "02-02",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 3,
                logid: "03-03",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 4,
                logid: "04-04",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 5,
                logid: "05-05",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 6,
                logid: "06-06",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 7,
                logid: "07-07",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            }
        ]
    },
    {
        id: 2013,
        year: "2013",
        logs: [
            {
                id: 1,
                logid: "01-01-test",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 2,
                logid: "02-02",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 3,
                logid: "03-03",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 4,
                logid: "04-04",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 5,
                logid: "05-05",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 6,
                logid: "06-06",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 7,
                logid: "07-07",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            }
        ]
    },
    {
        id: 2012,
        year: "2012",
        logs: [
            {
                id: 1,
                logid: "01-01-test",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 2,
                logid: "02-02",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 3,
                logid: "03-03",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 4,
                logid: "04-04",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 5,
                logid: "05-05",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 6,
                logid: "06-06",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 7,
                logid: "07-07",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            }
        ]
    },
    {
        id: 2011,
        year: "2011",
        logs: [
            {
                id: 1,
                logid: "01-01-test",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 2,
                logid: "02-02",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 3,
                logid: "03-03",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 4,
                logid: "04-04",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 5,
                logid: "05-05",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 6,
                logid: "06-06",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 7,
                logid: "07-07",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            }
        ]
    },
    {
        id: 2010,
        year: "2010",
        logs: [
            {
                id: 1,
                logid: "01-01-test",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 2,
                logid: "02-02",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 3,
                logid: "03-03",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 4,
                logid: "04-04",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 5,
                logid: "05-05",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 6,
                logid: "06-06",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 7,
                logid: "07-07",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            }
        ]
    },
    {
        id: 2009,
        year: "2009",
        logs: [
            {
                id: 1,
                logid: "01-01-test",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 2,
                logid: "02-02",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 3,
                logid: "03-03",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 4,
                logid: "04-04",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 5,
                logid: "05-05",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 6,
                logid: "06-06",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 7,
                logid: "07-07",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            }
        ]
    },
    {
        id: 2008,
        year: "2008",
        logs: [
            {
                id: 1,
                logid: "01-01-test",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 2,
                logid: "02-02",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 3,
                logid: "03-03",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 4,
                logid: "04-04",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 5,
                logid: "05-05",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 6,
                logid: "06-06",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 7,
                logid: "07-07",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            }
        ]
    },
    {
        id: 2007,
        year: "2007",
        logs: [
            {
                id: 1,
                logid: "01-01-test",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 2,
                logid: "02-02",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 3,
                logid: "03-03",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 4,
                logid: "04-04",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 5,
                logid: "05-05",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 6,
                logid: "06-06",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 7,
                logid: "07-07",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            }
        ]
    },
    {
        id: 2006,
        year: "2006",
        logs: [
            {
                id: 1,
                logid: "01-01-test",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 2,
                logid: "02-02",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 3,
                logid: "03-03",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 4,
                logid: "04-04",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 5,
                logid: "05-05",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 6,
                logid: "06-06",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 7,
                logid: "07-07",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            }
        ]
    },
    {
        id: 2005,
        year: "2005",
        logs: [
            {
                id: 1,
                logid: "01-01-test",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 2,
                logid: "02-02",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 3,
                logid: "03-03",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 4,
                logid: "04-04",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 5,
                logid: "05-05",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 6,
                logid: "06-06",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 7,
                logid: "07-07",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            }
        ]
    },
    {
        id: 2004,
        year: "2004",
        logs: [
            {
                id: 1,
                logid: "01-01-test",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 2,
                logid: "02-02",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 3,
                logid: "03-03",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 4,
                logid: "04-04",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 5,
                logid: "05-05",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 6,
                logid: "06-06",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            },
            {
                id: 7,
                logid: "07-07",
                date: "MM/DD/YYYY",
                stuff: "Stuff goes here"
            }
        ]
    },
];

export default Log_Data;
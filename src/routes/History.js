import React from "react";
import people from "./images/Memphis-group.png";
import design from "./images/Memphis-Design.png";
import sottsass from "./images/ettore-sottsass.png";

function History () {
    return (
        <main style={{ padding: "0.25rem 0" }}>
          <div>
            <div>
              <p className="p-history">
              It’s the evening of December 11, 1980. A group of young designers and architects has gathered in Ettore Sottsass’s living room. The record Stuck Inside of Mobile with the Memphis Blues Again by Bob Dylan plays over and over again: thus Memphis was born, with a two-fold reference to the ancient capital of the Egyptian pharaohs and the birthplace of Aretha Franklin and Elvis Presley in Tennessee. A few days later, a revolutionary collection of design objects was discussed and outlined, one which was to take shape over a few months in the drawings of Ettore Sottsass, Aldo Cibic, Matteo Thun, Marco Zanini, Martine Bedin, Michele De Lucchi, Nathalie Du Pasquier, and George Sowden.
              </p>
              <div className="fixed-bg-1">
                <img className="image-1" src={people}/>
              </div>
            </div>
            <div>
              <p className="p-history">
              Memphis' colorful furniture has been described as "bizarre", "misunderstood", "loathed", and "a shotgun wedding between Bauhaus and Fisher-Price".
                    During their active years, the group designed a series of non-conformist furniture. One of their most popular and well known designs is the "Carlton" Room Divider, a totemic pole incorporating a variety of bright colours, solid shapes and voids. The structure itself is constructed using cheap plastic laminates, though designed to be sold by a luxury market, and incorporates a series of equilateral triangles, both real and implied.
                    The 1980 design of furniture, architecture, household items, and clothes were heavily influenced by Memphis Design. Surfing, skateboarding, skiing and BMX companies were quick to adopt the aesthetic into their designs. Television shows such as Miami Vice showcased many architectural examples. Memphis designs served as inspiration for the Fall/Winter 2011–2012 Christian Dior haute couture collection fashion show, for the Winter 2015 Missoni collection,
                    Notable Memphis design collectors included fashion designer Karl Lagerfeld and musician David Bowie. After Bowie's death in 2016, his collection was auctioned off at Sotheby's for a total of £1,387,000.
                    A "flat, geometric, figurative" illustration style "usually made up of solid colours", popular in the late 2010s particularly with startups, was dubbed "Corporate Memphis" by Wired Magazine for its resemblance to Memphis designs.
              </p>
              <div className="fixed-bg-1">
                <img className="image-1" src={design}/>
              </div>
            </div>
            <div>
              <p className="p-history">
              Being the founder of the group, Ettore Sottsass became the leader of the Memphis Group and is now one of the most well known Italian post-War designers.
                    Martine Bedin, a French designer, was also a member of Memphis. She first joined the group when she was in her twenties and was deemed in charge of over-looking all Memphis lighting that was produced. Her father had been an engineer and she was also continuously 'playing with forbidden things', all which contributed to her designated position. During her time in Memphis, Bedin designed and thought of numerous ideas. Her design of the Super lamp placed on wheels, first designed in 1978, supposedly represented, along with a group of other objects, 'friend-like' items. Bedin's lamp was later produced in an artisanal workshop, where all Memphis products were manufactured, and her first prototype is now featured in the Victoria & Albert Museum, in London, England.
                    Peter Shire, a sculptor, designer and potter originally from California, was another figure who formed the Memphis Group. He was first discovered thanks to Wet: The Magazine of Gourmet Bathing, a lifestyle publication in the west coast that Sottsass' partner on occasion would contribute to. In one article featuring Shire's teapots in 1977, he quoted "I'm not much of a tea-drinker [...] Actually my first impulse is to put Coke in teapots. I'm a big Coke drinker and I'd love to see Coke flowing out of the teapots and foaming on the ground." His unique approach and attitude later secured him a spot as a member of Memphis.
                    After Memphis' disbandment in 1987, members went their separate ways. Some like Nathalie Du Pasquier, a French born ex-member of the group, have collaborated with brands and companies in recent years. In 2013, she and the Danish company HAY collaborated where she designed and created Memphis-esque patterned bags. She later on also collaborated with American Apparel, a Canadian-founded fashion company that moved to California, where she designed one of their collections.
                    The designs of the Memphis Group have acted as inspiration to many other fashion companies, like Dior and Missoni, who both were inspired to design fashion collections based on Memphis' original work.
                    Memphis included contributions from many international architects and designers.
              </p>
              <div className="fixed-bg-1">
                <img className="image-1" src={sottsass}/>
              </div>
            </div>

            <div className="p-history">
                <p>Being the founder of the group, Ettore Sottsass became the leader of the Memphis Group and is now one of the most well known Italian post-War designers.
                    Martine Bedin, a French designer, was also a member of Memphis. She first joined the group when she was in her twenties and was deemed in charge of over-looking all Memphis lighting that was produced. Her father had been an engineer and she was also continuously 'playing with forbidden things', all which contributed to her designated position. During her time in Memphis, Bedin designed and thought of numerous ideas. Her design of the Super lamp placed on wheels, first designed in 1978, supposedly represented, along with a group of other objects, 'friend-like' items. Bedin's lamp was later produced in an artisanal workshop, where all Memphis products were manufactured, and her first prototype is now featured in the Victoria & Albert Museum, in London, England.
                    Peter Shire, a sculptor, designer and potter originally from California, was another figure who formed the Memphis Group. He was first discovered thanks to Wet: The Magazine of Gourmet Bathing, a lifestyle publication in the west coast that Sottsass' partner on occasion would contribute to. In one article featuring Shire's teapots in 1977, he quoted "I'm not much of a tea-drinker [...] Actually my first impulse is to put Coke in teapots. I'm a big Coke drinker and I'd love to see Coke flowing out of the teapots and foaming on the ground." His unique approach and attitude later secured him a spot as a member of Memphis.
                    After Memphis' disbandment in 1987, members went their separate ways. Some like Nathalie Du Pasquier, a French born ex-member of the group, have collaborated with brands and companies in recent years. In 2013, she and the Danish company HAY collaborated where she designed and created Memphis-esque patterned bags. She later on also collaborated with American Apparel, a Canadian-founded fashion company that moved to California, where she designed one of their collections.
                    The designs of the Memphis Group have acted as inspiration to many other fashion companies, like Dior and Missoni, who both were inspired to design fashion collections based on Memphis' original work.
                    Memphis included contributions from many international architects and designers.
                </p>    
            </div>
            <p className="wiki">All text from Wikipedia</p>
          </div>
        </main>
    )
}

export default History;
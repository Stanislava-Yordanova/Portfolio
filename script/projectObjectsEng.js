const slideshows = [
    {
        slideshowTitle: "3D models",
        projects: [
            {
                title: {
                    text: "Cider can",
                    color: "#242730"
                },
                explorer_name: "sider_can",
                types: ["Poly modeling", "UV mapping"],
                category: "3D models",
                used_software:["blender", "photoshop"],
                links: [
                    {
                        isProject: true,
                        project_explorer_name: "packages",
                        button_text: "Cider Can design"
                    }
                ],
                sections: [
                    {
                        text: `For the final visualization of the group project in Graphic Design, I had to create a mockup to present our project—cider packaging. To achieve this, I modeled a can, following the dimensions of a 500 ml Somersby can.`,
                    },
                    {
                        title: `UV mapping`,
                        text: "The next step was to create UV mapping on the can so that I could apply the finished labels as textures in the correct places.",
                        images: {
                            count: 1
                        }
                    },
                    {
                        text: `After rendering the compositions, the images are sent to Photoshop for final processing and color adjustments.`,
                        images: {
                            count: 1
                        }
                    }
                ]
            },
            {
                title: {
                    text: "Desk lamp - pantograph",
                    color: "#242730"
                },
                explorer_name: "desk_lamp",
                types: ["Product design", "CAD modeling"],
                category: "3D models",
                used_software:["fusion"],
                sections: [
                    {
                        text: `<span class="centered-text">The task was to design a desk lamp with a pantograph mechanism and then model it in a CAD program.</span>`,
                        images: {
                            count: 1
                        }
                    },
                    {
                        title: `Renders - details`,
                        images: {
                            count: 1
                        }
                    },
                    {
                        text: `<span class="centered-text">Here, I have shown different positions of the lamp.</span>`,
                        images: {
                            count: 2,
                            gap: "0 56px"
                        }
                    }
                ]
            },
            {
                title: {
                    text: "Eco Household Containers",
                    color: "#242730"
                },
                explorer_name: "trash_bins",
                types: ["Product design", "CAD modeling"],
                category: "3D models",
                used_software:["sw"],
                sections: [
                    {
                        text: `The task was to design household containers for waste separation, with the idea that the containers could be rearranged according to the needs of the users, allowing for various configurations.<br><span>Based on research, I found that different amounts of waste are discarded daily, with plastic being the most common, followed by paper and then glass. Using this information, I determined the sizes of the containers.</span><br><span>The connection between the containers was inspired by construction toys. I wanted it to be possible to create different configurations by combining them with other containers of the same type.</span>`,
                    },
                    {
                        title: `Development of the idea`,
                        text: `I planned that since the container for plastic waste should be the largest, it would be placed underneath the other two. However, to make it easy to open, I needed to come up with a foot-operated opening mechanism, specifically using a pedal to open a lid located at the top of the container.`,
                        images: {
                            count: 2,
                            openable: true,
                            gap: "0 62px"
                        }
                    },
                    {
                        text: `To connect the containers together, I added protruding small cylinders in the lids, which fit into the bases of the other containers. This will help prevent the bins from tipping over.<br><span>The front side of the containers is angled so that the lid of the lower container can attach to the upper one. I calculated that a 57-degree angle is sufficient for a person to easily dispose of waste into the container, so I chose this angle to avoid losing volume in the upper containers.</span><br><span>For the plastic container, I decided to make the angle 65° to match the character of the other containers, while also making it comfortable to press the pedal.</span>`,
                        images: {
                            count: 2,
                            openable: true,
                            gap: "0 24px"
                        }
                    },
                    {
                        title: `Colour solutions`,
                        text: `I decided to go with pastel colors because they are more pleasant to the eye and do not draw too much attention. After all, no one wants their trash bins to become the central element of their interior design.`,
                        images: {
                            count: 1
                        }
                    },
                ]
            },
            {
                title: {
                    text: "Project “My room”",
                    color: "#242730"
                },
                explorer_name: "my_room",
                types: ["Interior design", "Poly modeling"],
                category: "3D models",
                used_software:["3ds_max", "blender"],
                sections: [
                    {
                        text: `The goal of the project was to create a new layout for my room. The room is shared by two adult women and serves as a bedroom, workspace, and rest area.`,
                    },
                    {
                        title: `Furnishing plan - drawings`,
                        text: `On the left drawing, the current layout of the main furniture in the room is shown, including the light fixtures, electrical outlets, and switches for the lamps. I've also included the room's measurements, with the height of the room being 250 cm.<br><span>On the right, you can see the new proposed layout for the room's furnishing.</span>`,
                        images: {
                            count: 2,
                            openable: true,
                            gap: "0 82px",
                            languageVariants:true
                        }
                    },
                    {
                        title: `Wall elevations`,
                        images: {
                            count: 1
                        }
                    },
                    {
                        images: {
                            count: 4,
                            openable: true,
                            gap: "70px 105px"
                        }
                    },
                    {
                        title: `Interior style`,
                        text: `I drew inspiration from both Coastal style and Biophilic design. Both styles use nature-inspired colors, including blues, greens, sandy, and earthy tones, which create a calm and relaxing atmosphere.<br><span>Plants are an important part of both styles. They not only add visual beauty but also improve air quality and create a sense of freshness.</span><br><br><span>The room features a combination of light blue, green, white, and wood tones. I focused more on light colors, as they give the space an airy and open feel.</span>`,
                    },
                    {
                        title: `Modeling the objects`,
                        text: `The room and furniture were modeled in 3Ds Max, then transferred to Blender for texturing and rendering.<br><span>The modeled objects include: The bunk bed with the bookshelf; The bed on the first floor; Wardrobes for clothes; Pull-out rod for hangers; Desk and The interior space.</span>`,
                        images: {
                            count: 1
                        }
                    },
                    {
                        title: `Renders`,
                        images: {
                            count: 4,
                            languageVariants:true
                        }
                    },
                ]
            },
        ]
    },
    {
        slideshowTitle: "Graphic design",
        projects: [
            {
                title: {
                    text: "Golden cat - poster",
                    color: "#242730"
                },
                explorer_name: "golden_cat_poster",
                types: ["Poster design", "Vectorization of logo"],
                category: "Graphic design",
                used_software:["illustrator", "photoshop"],
                sections: [
                    {
                        text: `The task was to create a poster for an event, and I chose the Magic Gathering "Golden Cat" festival.<br><br><span>The festival takes place annually in Gabrovo, where competitors engage in a battle for various awards, the most prestigious of which is the "Golden Cat" prize. This award is given to the participant with the highest score in the competition.</span>`,
                    },
                    {
                        title: `Vectorization of the logo`,
                        images: {
                            count: 1
                        }
                    },
                    {
                        title: `Choosing the colours for the logo`,
                        images: {
                            count: 1
                        }
                    }, 
                    {
                        title: `Concept`,
                        text: `As the central attention-grabbing element, I wanted to use a symbol typical of the event—the Golden Cat. I decided to reimagine it as a genie, inspired by Aladdin’s lamp. However, instead of a lamp, I wanted something more closely related to illusionists, so I chose the Ace of Diamonds card.<br><span>I selected the Diamonds suit because it is often associated with wealth and abundance due to its resemblance to a diamond shape. The Ace, in most cases, is seen as the strongest card in the deck.</span><br><br><span>I wanted the message to be mysterious, encouraging people to attend the event. That’s why I shaped the cat-genie into a question mark, adding an element of intrigue and mystery.</span>`,
                        images: {
                            count: 1
                        }
                    },
                    {
                        text: `Below, I have shown the process of concept development. My initial idea was to use the King card instead of the Ace, as I wanted to tie it to the message "Kings of Magic."`,
                        images: {
                            count: 3,
                            gap: "0 110px",
                            openable: true
                        }
                    }
                ]
            },
            {
                title: {
                    text: "Bauhaus 93",
                    color: "#242730"
                },
                explorer_name: "bauhaus",
                types: ["Cyrillization of font"],
                category: "Graphic design",
                used_software:["illustrator"],
                sections: [
                    {
                        text: `Тhe task was to choose a font that does not have Cyrillic support and then to Cyrillicize only the uppercase letters. I chose the BAUHAUS 93 font because it doesn’t have a Bulgarian Cyrillic version, and I love how retro it looks.<br><br><span>Bauhaus 93 is a decorative font with simple geometric forms and even strokes that give the font a clean and distinctive look.</span>`,
                    },
                    {
                        title: `Uppercase letters - Latin`,
                        images: {
                            count: 1
                        }
                    },
                    {
                        title: `Uppercase letters - Cyrillic`,
                        images: {
                            count: 1
                        }
                    },
                    {
                        text: `Below, I have shown the presentation materials I used to present the font. I opted for pastel colors without gradients and simple shapes to maintain the retro feel that the font carries.`,
                        images: {
                            count: 2,
                            gap: "0 73px"
                        }
                    }
                ]
            },
            {
                title: {
                    text: "Gato Boracho",
                    color: "#242730"
                },
                explorer_name: "gato_boracho",
                types: ["Logo design", "Group project"],
                category: "Graphic design",
                used_software:["illustrator"],
                links: [
                    {
                        isProject: true,
                        project_explorer_name: "packages",
                        button_text: "Package design"
                    }
                ],
                sections: [
                    {
                        text: `The task was to create a brand for a cider. The target audience includes young people and families who enjoy light, refreshing drinks during hot weather and appreciate life's moments.<br><br><span>We aimed for an exotic concept reminiscent of summer vacations in a warm country like Spain, which is why we chose a Spanish name.</span><br><br><span>We wanted to include a mascot—a cat—on the label, as advertising characters attract attention and give the brand a fun and playful identity. Since we were developing a cider brand, we decided to depict the mascot as a drunken cat in different scenarios based on the product’s flavors. The name Gato Borracho translates to "Drunken Cat."</span>`,
                    },
                    {
                        title: `Logo design`,
                        text: `For the final design, the Geson Bamer font was used, with modifications to the letters "G" and "h."<br><span>I chose this font because it has a playful feel, and the serifs resemble cat tails. To further enhance the effect of the mascot, I emphasized the "cat-like" aspect by incorporating cat heads into both words of the brand name. I positioned them in a way that balances the visual "weight" of the typography.</span>`,
                        images: {
                            count: 1
                        }
                    },
                    {
                        text: `Below, I have shown two font options considered for the Gato Borracho logo.<br><span>On the right, you can see how the letter "G" originally looked before the modifications made to the Geson Bamer font.</span>`,
                        images: {
                            count: 2
                        }
                    }
                ]
            },
            {
                title: {
                    text: "Cider Can design",
                    color: "#242730"
                },
                explorer_name: "packages",
                types: ["Packaging design", "Group project"],
                category: "Graphic design",
                used_software:["illustrator", "photoshop"],
                links: [
                    {
                        isProject: true,
                        project_explorer_name: "gato_boracho",
                        button_text: "Logo"
                    },
                    {
                        isProject: true,
                        project_explorer_name: "sider_can",
                        button_text: "3D model"
                    }
                ],
                sections: [
                    {
                        text: `The task was to design packaging for a cider. The target audience includes young people and families who enjoy light, refreshing drinks during hot weather and appreciate life's moments.<br><br><span>We wanted to include a mascot—a cat—on the label, as advertising characters attract attention and give the brand a more fun and appealing look. We decided to portray the mascot in different scenes depending on the cider’s flavor.</span>`,
                        images: {
                            count: 1,
                            width: "100%"
                        }
                    },
                    {
                        title: `Market survey`,
                        text: `According to a survey and consumer research, aluminum cans were found to be preferred over glass bottles.<br><span>This preference is based on the fact that cans are more convenient for transport and cooling compared to glass bottles, which are often heavier and more fragile. Additionally, metal cans protect the cider from light, helping to maintain its freshness.</span>`,
                        images: {
                            count: 1,
                            languageVariants:true
                        }
                    },
                    {
                        title: `Stages of packaging development`,
                        images: {
                            count: 4,
                            gap: "35px 83px"
                        }
                    },
                    {
                        title: `Final result`,
                        text: `Below, I have shown the label layouts for the different flavors — apple, orange, pomegranate, grape, and pear. The dimensions of the layouts were calculated based on a 500 ml Somersby can.`,
                        images: {
                            count: 5,
                            gap: "35px 35px",
                            openable: true
                        } 
                    }
                ]
            },
            {
                title: {
                    text: "Puzzle Piece",
                    color: "#242730"
                },
                explorer_name: "puzzle_piece",
                types: ["Logo design"],
                category: "Graphic design",
                used_software:["illustrator"],
                links: [
                    {
                        isProject: false,
                        path: "./brand_book_eng.pdf",
                        button_text: "BRAND BOOK"
                    }
                ],
                sections: [
                    {
                        text: `The goal of the task was to develop a brand identity for a company in both Cyrillic and Latin scripts. I decided to create a logo for an imaginary puzzle company called "Puzzle Piece", aiming for a design that combines typographic and figurative elements.<br><span>For more details, you can check out the brand book I created for the company. Here, I will briefly showcase the process I went through to reach the final design.</span>`,
                        images: {
                            count: 1
                        }
                    },
                    {
                        title: `Selection of a figurative mark`,
                        text: `For the final version of the figurative mark, I chose the leftmost logo, as it maintains its readability even at very small sizes.`,
                        images: {
                            count: 1
                        }
                    },
                    {
                        title: `Logotype combinations - looking for solution`,
                        images: {
                            count: 1
                        }
                    },
                    {
                        title: `Final result - Cyrillic and Latin`,
                        images: {
                            count: 2,
                            gap: "0 105px"
                        }
                    }
                ]
            }   
        ]
    },
    {
        slideshowTitle: "Illustrations",
        projects: [
            {
                title: {
                    text: "Into the world of Herasks",
                    color: "#242730"
                },
                explorer_name: "herasks",
                types: ["Character design"],
                category: "Illustrations",
                used_software:["photoshop"],
                finalImageLanguageVariants: true,
                sections: [
                    {
                        text: `I designed an aquatic representative based on thoroughgoing research of bioluminescent species in the ocean depths.<br><span>The character inhabits the Twilight zone. It uses bioluminescence for predatory purposes, but also to communicate. The glowing character has the ability of the Dragonfish that sees the red color but with the difference that The Herask can emit a blue light to attract other living organisms.</span><br><span>I named the character Herask. Its name is derived from the Greek goddess Hera, who is the patron saint of marriage and family. I focused on this name because the species I created is one of the few, if not the only one at this depth in the ocean, which is concerned about protecting its family.</span>`,
                        images: {
                            count: 1
                        }
                    },
                    {
                        title: `The male`,
                        text: `The male is a fast swimmer, so it has a bioluminescent "fishing rod" on its tail, through which to attract other aquatic representatives. When the creature is close enough, the male retracts its glowing tentacle into its tail, leaving its prey in complete darkness, unaware that this predator has the ability to emit red light through the photophores located around its eyes.`,
                    },
                    {
                        title: `The female`,
                        text: `Photophores are located on the female's exoskeleton to emit blue light if the female feels threatened by another predator. The other two light elements are adapted to emit red light so that the little one can navigate where its mother is.`,
                        images: {
                            count: 2,
                            gap: "0 85px",
                            openable: true,
                            languageVariants:true
                        }
                    }
                ]
            },
            {
                title: {
                    text: "The devil “Hot hands”",
                    color: "#242730"
                },
                explorer_name: "devil",
                types: ["Character design"],
                category: "Illustrations",
                used_software:["photoshop"],
                sections: [
                    {
                        text: `<span class="centered-text">The work is inspired by the drawing of Chris Ryniak.</span>`,
                        images: {
                            count: 1
                        }
                    },
                    {
                        text: `This was an observational drawing from 2018. After 5 years I decided to create a character based on his design which was my first attempt to character design. <br><br><span>The final render is my representation of the place where the devil lives.</span>`,
                        images: {
                            count: 1
                        }
                    }
                ]
            },
            {
                title: {
                    text: "Golden cat - T-shirt",
                    color: "#242730"
                },
                explorer_name: "golden_cat_T-shirt",
                types: ["T-shirt design", "Year 2024"],
                category: "Illustrations",
                used_software:["photoshop"],
                sections: [
                    {
                        text: `The goal of the project was to create a T-shirt design for the participants of the Magic Gathering GOLDEN CAT festival. The design had to be suitable for both men and women, which is why I chose a gray T-shirt, as it is a versatile option for both genders.`,
                        images: {
                            count: 1
                        }
                    },
                    {
                        text: `I have shown below how the idea for the T-shirt developed.<br><br><span>The symbol of the event is the Golden Cat, which is also the award given to the first-place winner. That’s why I wanted to include it in the T-shirt design as a central element, interacting with objects used for performing illusion tricks.</span>`,
                        images: {
                            count: 2,
                            gap: "0 81px"
                        }
                    }
                ]
            }
        ]
    }
];
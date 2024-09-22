/*Project Goal - Write a program that prints random message to the console.
Project Idea - Random messages will be movie related and a short description of the movie.
The program should print a random message according to your genre preferences, 
which will return a random movie and description.

Movie list: 

Action

    Mad Max: Fury Road (2015)
        In a post-apocalyptic wasteland, 
        Max teams up with Furiosa to escape a tyrant who controls the land's water supply, 
        leading to a relentless, high-octane chase.

Comedy

    Superbad (2007)
        Two high school friends aim to make the most of their final days before graduation, 
        leading to a wild night of misadventures as they attempt to buy alcohol for a party.

Drama

    The Shawshank Redemption (1994)
        Wrongly imprisoned, Andy Dufresne forms an unlikely friendship with fellow inmate Red, 
        and over the years, he quietly devises a plan for freedom and redemption.

Horror

    Hereditary (2018)
        After the death of her secretive mother, 
        Annie and her family are haunted by terrifying, 
        and mysterious occurrences that reveal dark secrets about their ancestry.

Science Fiction

    Inception (2010)
        A skilled thief is tasked with planting an idea into a target's subconscious,
        by navigating through complex and layered dream worlds, leading to a mind-bending journey.
*/

function buttonSelect(){

    const inputField = document.getElementById('dynamicInput');
    const outputParagraph = document.getElementById('liveOutput');
    const submitButton = document.getElementById('submitButton');

    const movies = {
        a: { name: 'Mad Max: Fury Road (2015)', 
            description: 'In a post-apocalyptic wasteland,<br>Max teams up with Furiosa to escape a tyrant who controls the land\'s water supply,<br>leading to a relentless, high-octane chase.',
            image: 'https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg'
        },
        c: { name: 'Superbad (2007)', 
            description: 'Two high school friends aim to make the most of their final days before graduation, <br>leading to a wild night of misadventures as they attempt to buy alcohol for a party.', 
            image: 'https://m.media-amazon.com/images/M/MV5BY2VkMDg4ZTYtN2M3Yy00NWZiLWE2ODEtZjU5MjZkYWNkNGIzXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_FMjpg_UX1000_.jpg'
        },
        d: { name: 'The Shawshank Redemption (1994)', 
            description: 'Wrongly imprisoned, Andy Dufresne forms an unlikely friendship with fellow inmate Red, <br>and over the years, he quietly devises a plan for freedom and redemption.',
            image: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg'
        },
        h: { name: 'Hereditary (2018)', 
            description: 'After the death of her secretive mother, Annie and her family are haunted by alarming, <br>and mysterious occurrences that reveal dark secrets about their ancestry.', 
            image: 'https://m.media-amazon.com/images/I/715S7D8QY2L._AC_UF1000,1000_QL80_.jpg'
        },
        s: { name: 'Inception (2010)', 
            description: 'A skilled thief is tasked with planting an idea into a target\'s subconscious, by navigating through complex and layered dream worlds, <br>leading to a mind-bending journey.', 
            image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
        }
        
};
    const trailer = {
        a: 'https://youtu.be/hEJnMQG9ev8?feature=shared',
        c: 'https://youtu.be/4eaZ_48ZYog?feature=shared',
        d: 'https://youtu.be/PLl99DlL6b4?feature=shared',
        h: 'https://youtu.be/YHxcDbai7aU?feature=shared',
        s: 'https://youtu.be/YoHD9XEInc0?feature=shared',
    }

        function getRandomMovie(){
            const keys = Object.keys(movies);
            const randomkey= keys[Math.floor(Math.random() * keys.length)];
            return movies[randomkey];
            
    }
        function getRandomTrailer(){
            const keys = Object.keys(trailer);
            const randomkey= keys[Math.floor(Math.random() * keys.length)];
            return trailer[randomkey];
            
    }

    submitButton.addEventListener('click', function(){
        const userInput = inputField.value.toLowerCase();
        if(userInput === 'r'){
            const random = getRandomMovie();
            setTimeout(function(){
                const video = document.createElement('iframe');
                video.src = getRandomTrailer();
                video.width = '600';
                video.height = '340';
                video.style.border = 'none';
                video.style.display = 'block';
                video.style.margin = 'auto';
                imageContainer.innerHTML = '';
                imageContainer.appendChild(video);
            }, 2000);
            outputParagraph.innerHTML = random.name + ' - ' + random.description;
            imageContainer.innerHTML = '';
            const img = document.createElement('img'); 
            img.src = random.image;
            img.alt = random.name;
            img.style.width = '300px';
            img.style.height = 'auto';
            imageContainer.appendChild(img);
        
        }else if (movies[userInput]){
            outputParagraph.innerHTML = movies[userInput].name + ' - ' + movies[userInput].description;
            imageContainer.innerHTML = '';
        const img = document.createElement('img'); 
        img.src = movies[userInput].image;
        img.alt = movies[userInput].name;
        img.style.width = '300px';
        img.style.height = 'auto';
        imageContainer.appendChild(img);
        } else {
            outputParagraph.textContent = 'Invalid input. Please enter one of the following: A, C, D, H, S.';
        }

        
        
    });
    
}


buttonSelect();
import React from 'react';
import ItemLayout from './ItemLayout';

const AboutDetails = () => {
    return (
      <section className="py-20 w-full">
        <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
          <ItemLayout
            className={
              "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
            }
          >
            <h2 className="text-xl md:text-2xl tex-left w-full capitalize">
              Architect of enchantment
            </h2>
            <p className="font-light text-xs sm:text-sm md:text-base">
              I am an aspiring Junior Software Engineer, a humble apprentice in the vast
              and magical world of programming. My journey began with the
              incantations of JavaScript, SQL, Python, and Java, earning me
              several scrolls of wisdom from Sololearn. With these spells in
              hand, I forge applications and craft solutions to bring ideas to
              life. I wield the powers of HTML, CSS, and JavaScript to conjure
              dynamic user experiences, while also commanding the mystic arts of
              Node.js and Express to build powerful back-end spells. As an
              eternal student of code, I’m always exploring new realms like
              React, MongoDB, and API development, eager to learn and master new
              arcane skills. Whether it’s solving cryptic bugs or crafting
              seamless user interfaces, I seek to use my growing powers to make
              the digital world a little brighter. Join me on this enchanted
              journey, and let’s create something magical!
            </p>
          </ItemLayout>

          <ItemLayout
            className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
          >
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
              +830 <sub className="font-semibold text-base">Study Hours</sub>
            </p>
          </ItemLayout>

          <ItemLayout
            className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
          >
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
              1+{" "}
              <sub className="font-semibold text-base">years of experience</sub>
            </p>
          </ItemLayout>

          <ItemLayout
            className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
          >
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=S-Lencovsky&theme=transparent&hide_border=true&title_color=fefe5b&text_color=ffffff&icon_color=fefe5b&text_bold=false&layout=donut-vertical"
              alt="S-Lencovsky"
              loading="lazy"
            />
          </ItemLayout>

          <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api?username=S-Lencovsky&theme=transparent&hide_border=true&title_color=fefe5b&text_color=ffffff&icon_color=fefe5b&text_bold=false&show_icon=true"
              alt="S-Lencovsky"
              loading="lazy"
            />
          </ItemLayout>

          <ItemLayout className={"col-span-full"}>
            <img
              className="w-full h-auto"
              src="https://skillicons.dev/icons?i=js,html,css,angular,bash,bootstrap,express,java,nextjs,nodejs,py,react,git,github,npm,redux,sass,tailwind,threejs,vscode"
              alt="S-Lencovsky"
              loading="lazy"
            />
          </ItemLayout>

          <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
            <img
              className="w-full h-auto"
              src="https://github-readme-streak-stats.herokuapp.com?user=S-Lencovsky&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
              alt="S-Lencovsky"
              loading="lazy"
            />
          </ItemLayout>

          <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/pin/?username=S-Lencovsky&repo=Projects&theme=transparent&hide_border=true&title_color=fefe5b&text_color=ffffff&icon_color=fefe5b&text_bold=false&description_lines_count=3"
              alt="S-Lencovsky"
              loading="lazy"
            />
          </ItemLayout>
        </div>
      </section>
    );
}

export default AboutDetails;
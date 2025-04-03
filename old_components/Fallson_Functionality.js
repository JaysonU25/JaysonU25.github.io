// Size Calcs
char_size = 14.5
info_size = document.getElementById("info-container").offsetWidth
console.log(info_size)
char_per_line = Math.floor(info_size/char_size)
console.log(char_per_line)

const about_info =  `
                    <div class="line"> {</div>
                    <div class="line"> Name : Jayson Urena</div>
                    <div class="line"> Current Employment : Virginia State Police Intern</div>
                    <div class="line"> About : I am a highly motivated and ambitious Java</div>
                    <div class="line"> Python, and C coding 4th year Computer Science </div>
                    <div class="line"> student with internship and leadership experience.</div>
                    <div class="line"> }</div>`

const experience_info = `
                    <div class="line"> {</div>
                    <div class="line"> Experiences : [</div>
                    <div class="line"> Walmart Global Tech: Software Engineering Intern II </div>
                    <div class="line"> Virginia State Police: Cyber Forensics Intern</div>
                    <div class="line"> Commonwealth Cyber Initiative: AI Research Intern</div>
                    <div class="line"> ]</div>
                    <div class="line"> }</div>`

const skills_info = `
                    <div class="line"> {</div>
                    <div class="line"> Skills : [</div>
                    <div class="line" style="text-indent: 30px;"> Python</div>
                    <div class="line" style="text-indent: 30px;"> Java</div>
                    <div class="line" style="text-indent: 30px;"> SQL</div>
                    <div class="line" > ]</div>
                    <div class="line"> }</div>`

const certs_info = `
                    <div class="line"> {</div>
                    <div class="line"> Certifications : [</div>
                    <div class="line" style="text-indent: 30px;"> Scala Certification</div>
                    <div class="line" style="text-indent: 30px;"> IBM Z Advanced</div>
                    <div class="line" style="text-indent: 30px;"> IBM Z Core</div>
                    <div class="line" style="text-indent: 30px;"> Introduction to Cloud</div>
                    <div class="line" style="text-indent: 30px;"> Big Data 101</div>
                    <div class="line  style="text-indent: 30px;""> ]</div>
                    <div class="line"> }</div>`

const links_info = `
                    <div class="line"> {</div>
                    <div class="line"> Links : [</div>
                    <div class="line" style="text-indent: 30px;"> Linkedin</div>
                    <div class="line" style="text-indent: 30px;"> Github</div>
                    <div class="line" style="text-indent: 30px;"> Handshake</div>
                    <div class="line" style="text-indent: 30px;"> Coursra</div>
                    <div class="line"> }</div>`

const smiley = `                
<pre style="display: flex; width: 100%; justify-content: center;">
    _.-'''''-._
  .'  _     _  '.
 /   (o)   (o)   \\
|                 |
|  \\           /  |
 \\  '.       .'  /
  '.  \`'---'\`  .'
    '-._____.-'

    ALL ABOUT ME
</pre>`

const briefcase = `
<pre style="display: flex; width: 100%; justify-content: center; font-size: 2vw;">
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠠⠿⠉⠉⠉⠉⠿⠄
⣠⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣄⠀
⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀
⡀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢀⠀
⣿⣆⠘⢿⡿⠿⠿⢿⣿⣿⣿⣿⣿⣿⡿⠿⠿⣿⡿⠃⣰⣿⠀
⣿⣿⣧⣈⡁⢰⡆⢈⣉⣉⣉⣉⣉⣉⡀⣶⠀⣉⣁⣼⣿⣿⠀
⣿⣿⣿⣿⣇⣈⣁⣸⣿⣿⣿⣿⣿⣿⣇⣉⣀⣿⣿⣿⣿⣿⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀
⠙⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠋

      MY JOB EXEPRIENCE
</pre>`

const skills_star = `
<pre style="display: flex; width: 100%; justify-content: center; font-size: 1vw;">

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠔⠣⣔⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠠⠞⠁⠀⠀⣿⠇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⡰⠋⠀⠀⠀⠀⠀⣿⢁
⠀⠀⢀⠄⢀⣀⣠⠤⠄⠤⣤⠰⠆⠓⠁⠀⠀⠀⠀⠀⠀⣿
⠀⠀⣇⡁⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣏⡄
⠀⠀⠸⡅⡀⠀⠀⠀⠀⠀⠀⢠⣔⣄⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣖⡀
⠀⠀⠀⣷⠅⠀⠀⠀⠀⠀⣰⣿⣟⡟⠀⠀⠀⣠⣤⣄⠀⠀⠀⠀⠘⠯⣆⢄⠀⠀⠀⠀
⠀⠀⠀⢠⡿⠀⠀⠀⠀⢠⣿⡟⡼⠁⠀⠀⣰⣿⡟⡟⠀⠀⠀⠀⠀⠀⠈⠑⠮⣔⡠⢀
⠀⠀⠀⢸⡟⠀⠀⠀⠀⣼⣿⣱⠁⠀⠀⢰⣿⡿⣹⠁⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠉⠓⢦⣆⡀
⠀⠀⠀⠸⡁⠀⠀⠀⠀⠹⠿⠁⠀⠀⠀⣾⣿⢷⠇⠀⠀⠀⠀⠀⠀⠀⢀⠀⡀⠶⣀⠆⣆⣾⢰
⠀⠀⠀⠯⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⠞⠀⠀⠀⠀⠀⢀⠈⡈⡄⢥⣘⣴⡶⢾⠺⠑⠁
⠀⠀⣸⠕⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣀⢦⣴⡽⡛⠏⠃⠈⠀
⠀⢰⡎⠔⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⡄⣱⡼⠋⠐
⢠⣝⠠⡁⠤⡂⠴⡐⡠⢀⠀⡀⠀⠀⠀⠀⠀⠀⡀⢐⢰⢱
⠈⠡⠞⠚⠲⠣⠭⠍⠁⠣⠗⡜⡢⢄⠀⡂⡡⢄⠌⡥⢢
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠐⢆⠺⡐⡑⠎⠮⡱⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢴⣁⢎⢒⡡⣹⢱⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢈⡊⡔⣻⠸⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢵⡧⠃

</pre>
<pre style="display: flex; width: 100%; justify-content: center; font-size: 3vw;">MY SKILLS</pre>`


const certs_art = `
<pre style="display: flex; width: 100%; justify-content: center;font-size: 2vw;">
 _______________
|@@@@|     |####|
|@@@@|     |####|
|@@@@|     |####|
\\@@@@|     |####/
 \\@@@|     |###/
  \`@@|_____|##'
       (O)
    .-'''''-.
  .'  * * *  \`.
 :  *       *  :
: ~    # 1    ~ :
: ~   D E V   ~ :
 :  *       *  :
  \`.  * * *  .'
    \`-.....-'  

    MY CERTIFICATIONS
</pre>`


const links_art = `
<pre style="display: flex; width: 100%; justify-content: center; font-size: 1vw;">

    _,aaaaaaaaaaaaaaaaaaa,_                _,aaaaaaaaaaaaaaaaaaa,_
  ,P"                     "Y,            ,P"                     "Y,
 d'    ,aaaaaaaaaaaaaaa,    \`b          d'    ,aaaaaaaaaaaaaaa,    \`b
d'   ,d"            ,aaabaaaa8aaaaaaaaaa8aaaadaaa,            "b,   \`b
I    I              I                            I      ,adba,  I    I
Y,   \`Y,            \`aaaaaaaaaaaaaaaaaaaaaaaaaaaa'      I    I,P'   ,P
 Y,   \`baaaaaaaaaaaaaaad'   ,P          Y,   \`baaaaaaaaaI    Id'   ,P
  \`b,                     ,d'            \`b,            I    I   ,d'
    \`baaaaaaaaaaaaaaaaaaad'                \`baaaaaaaaaaaI    Iaad'
                                                        I    I
                                                        I    I
                                                        I    I
    _,aaaaaaaaaaaaaaaaaaa,_                _,aaaaaaaaaaaI    Iaa,_
  ,P"                     "Y,            ,P"            I    I   "Y,
 d'    ,aaaaaaaaaaaaaaa,    \`b          d'    ,aaaaaaaaaI    I,    \`b
d'   ,d"            ,aaabaaaa8aaaaaaaaaa8aaaadaaa,      I    I"b,   \`b
I    I  ,adba,      I                            I      \`"YP"'  I    I
Y,   \`Y,I    I      \`aaaaaaaaaaaaaaaaaaaaaaaaaaaa'            ,P'   ,P
 Y,   \`bI    Iaaaaaaaaad'   ,P          Y,   \`baaaaaaaaaaaaaaad'   ,P
  \`b,   I    I            ,d'            \`b,                     ,d'
    \`baaI    Iaaaaaaaaaaad'                \`baaaaaaaaaaaaaaaaaaad'
        I    I
        I    I                 
        I    I
    _,aaI    Iaaaaaaaaaaa,_                _,aaaaaaaaaaaaaaaaaaa,_
  ,P"   I    I            "Y,            ,P"                     "Y,
 d'    ,I    Iaaaaaaaaa,    \`b          d'    ,aaaaaaaaaaaaaaa,    \`b
d'   ,d"I    I      ,aaabaaaa8aaaaaaaaaa8aaaadaaa,            "b,   \`b
I    I  \`"YP"'      I                            I              I    I
Y,   \`Y,            \`aaaaaaaaaaaaaaaaaaaaaaaaaaaa'            ,P'   ,P
 Y,   \`baaaaaaaaaaaaaaad'   ,P          Y,   \`baaaaaaaaaaaaaaad'   ,P
  \`b,                     ,d'            \`b,                     ,d'
    \`baaaaaaaaaaaaaaaaaaad'                \`baaaaaaaaaaaaaaaaaaad'

</pre>
<pre style="display: flex; width: 100%; justify-content: center; font-size: 3vw;">MY LINKS</pre>`


document.getElementById("about-button").addEventListener('click', function() {
    console.log("ABOUT PRESSED");

    const info = document.getElementById("info-container").innerHTML = about_info
    const extra = document.getElementById("extra-screen").innerHTML = smiley

    const lines = document.querySelectorAll('.line');
    console.log(lines.length)
    // Add the 'visible' class to each line with a delay
    lines.forEach((line, index) => {
        console.log(line.textContent.length)
        line.style.setProperty('--char-count', line.textContent.length);
      setTimeout(() => {
        line.classList.add('visible');
      }, index * 1000); // Delay for each line based on its position
    });
  });


document.getElementById("experience-button").addEventListener('click', function() {
  console.log("EXPERIENCE PRESSED");

  const info = document.getElementById("info-container").innerHTML = experience_info
  const extra = document.getElementById("extra-screen").innerHTML = briefcase


  const lines = document.querySelectorAll('.line');
  console.log(lines.length)
  // Add the 'visible' class to each line with a delay
  lines.forEach((line, index) => {
      console.log(line.textContent.length)
      line.style.setProperty('--char-count', line.textContent.length);
    setTimeout(() => {
      line.classList.add('visible');
    }, index * 1000); // Delay for each line based on its position
  });
});


document.getElementById("certs-button").addEventListener('click', function() {
  console.log("CERTS PRESSED");

  const info = document.getElementById("info-container").innerHTML = certs_info
  const extra = document.getElementById("extra-screen").innerHTML = certs_art


  const lines = document.querySelectorAll('.line');
  console.log(lines.length)
  // Add the 'visible' class to each line with a delay
  lines.forEach((line, index) => {
      console.log(line.textContent.length)
      line.style.setProperty('--char-count', line.textContent.length);
    setTimeout(() => {
      line.classList.add('visible');
    }, index * 1000); // Delay for each line based on its position
  });
});

document.getElementById("links-button").addEventListener('click', function() {
  console.log("CERTS PRESSED");

  const info = document.getElementById("info-container").innerHTML = links_info
  const extra = document.getElementById("extra-screen").innerHTML = links_art

  const lines = document.querySelectorAll('.line');
  console.log(lines.length)
  // Add the 'visible' class to each line with a delay
  lines.forEach((line, index) => {
      console.log(line.textContent.length)
      line.style.setProperty('--char-count', line.textContent.length);
    setTimeout(() => {
      line.classList.add('visible');
    }, index * 1000); // Delay for each line based on its position
  });
});

document.getElementById("skills-button").addEventListener('click', function() {
  console.log("CERTS PRESSED");

  const info = document.getElementById("info-container").innerHTML = skills_info
  const extra = document.getElementById("extra-screen").innerHTML = skills_star


  const lines = document.querySelectorAll('.line');
  console.log(lines.length)
  // Add the 'visible' class to each line with a delay
  lines.forEach((line, index) => {
      console.log(line.textContent.length)
      line.style.setProperty('--char-count', line.textContent.length);
    setTimeout(() => {
      line.classList.add('visible');
    }, index * 1000); // Delay for each line based on its position
  });
});
# Toggle Nav v2
Another toggleable navigator that I created. Started August 22, and finished afternon of the day after that August 23, 2024.

## Core Learnings Stroke
<details>
  <summary>Creation of <code>header__logo</code> stroke</strong>:</summary>

  - color: var(--clr-white);
  - background: var(--clr-yellow);
  - background-clip: text;
  - -webkit-text-stroke: transparent;
  - -webkit-text-stroke-width: calc(1em / 16); /* the one the   makes the STROKE happen */
  - -webkit-background-clip: text;

  ### Explanation:
  This basically does, it gives the text a <code>background-color</code> property of yellow. However with the usage of <code>background-clip: text;</code> & <code>-webkit-background-clip: text;</code> the background color will only around the text and not the element itself.
  <br>
  <br>Then all of this will be finished with the combination of <code>-webkit-text-stroke: transparent;</code> & <code>-webkit-text-stroke-width: calc(1em / 16);</code> adopting the color passed, in this case yellow at the background-image property, and due to transparentcy of the stroke hence showing that the text's stroke is yelllow.
</details>

<details>
  <summary>Creation of Hamburger</summary>
  <ul>
    <li>Select the element itself first</li>
    <li>Select the element and the ::before and ::after of it to add the main styling. Most important is the <code>display: block;</code></li>
    <li>Then select the ::before and ::after seperatly to add <code>width: 100%</code> and <code>content: '';</code>. Ensure that you will <code>transform: tranlateY();</code></li> 
  </ul>
</details>

<details>
  <summary>Transition of Hamburger Icon to 'X'</summary>
  <ul>
  <li>After the nav is toggle or is showned I just created another class that will be passed into the <code>hamburger</code> this is the code <br>
  <pre style="color: yellow">
  .hamburger__toggle::before {
  color: var(--clr-white);
  content: '\2716';
  display: block;
}
  </pre>
  </li>
  </ul>
</details>

## Issue
- The animation for mobile is not implemented.
- When the nav--on is passed into the navbar and switched back to desktop view there's misalignment happening to header__logo (see the PC-Issue.png)



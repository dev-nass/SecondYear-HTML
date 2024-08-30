# Skill Bar
Recreation of what I did last time on my portfolio web v1.0. Did this on August 30, 2024.

## Core Learning
- I learned the usage of <code>animation-fill-mode</code> property. What basically happens is the moment I set the property to <code>forward</code> the <code>span.fill__bar__span</code> animates from 0% to 100% smoothly without the animation going back to 0% again -- that result in issue.
- The <code>div.bar__div</code> is given <code>position: relative</code> enabling the <code>span.fill__bar__span</code> to have <code>position: absolute</code> hence fixing the issue and the fill bar is displaying properly.
- Glass effect & stroke is once again used.
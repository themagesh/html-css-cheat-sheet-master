// Auto-generated from the original static HTML by
// scripts/convert-html-to-jsx.mjs - do not edit by hand.
import '../../animate.css';
export default function Animation() {
  return (
    <>

    

    
<section id="animation-transitions">
        <h1>Animation and Transitions</h1>
        <section id="transition-template">
            <h2>Transition template</h2>
            <div className="snippet transition span-8">
                <h2>Transition all properties</h2>
                <div className="codeblock">
                    <code>.element &#123;</code>
                    <code>  transition: 1s all;</code>
                    <code>  </code>
                    <code>  /* Add other properties such as transform, margin, etc. */</code>
                    <code>&#125;</code>
                </div>
            </div>
        </section>
        <section id="transition-css">
            <h2>Transitions</h2>
            <h3>Different states may be defined using pseudo-classes like
                <span className="code">:hover</span> or
                <span className="code">:active</span> or dynamically set using JavaScript.</h3>
            <div className="snippet transition">
                <h2 className="code">transition-duration:</h2>
                <div className="codeblock">
                    <div className="ex-transition">
                        <div className="box" style={{ transitionDuration: '0.7s' }}></div>
                    </div>
                    <code>0.7s;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-transition">
                        <div className="box" style={{ transitionDuration: '1s' }}></div>
                    </div>
                    <code>1s;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-transition">
                        <div className="box" style={{ transitionDuration: '2s' }}></div>
                    </div>
                    <code>2s;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-transition">
                        <div className="box" style={{ transitionDuration: '3s' }}></div>
                    </div>
                    <code>3s;</code>
                </div>
            </div>
            <div className="snippet span-5 transition">
                <h2 className="code">transition-timing-function:</h2>
                <div className="ex-transition-timing-function">
                    <div className="codeblock">
                        <div className="ex-transition">
                            <div className="box" style={{ transitionTimingFunction: 'linear' }}></div>
                        </div>
                        <code>linear;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-transition">
                            <div className="box" style={{ transitionTimingFunction: 'ease' }}></div>
                        </div>
                        <code>ease;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-transition">
                            <div className="box" style={{ transitionTimingFunction: 'ease-in' }}></div>
                        </div>
                        <code>ease-in;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-transition">
                            <div className="box" style={{ transitionTimingFunction: 'ease-out' }}></div>
                        </div>
                        <code>ease-out;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-transition">
                            <div className="box" style={{ transitionTimingFunction: 'ease-in-out' }}></div>
                        </div>
                        <code>ease-in-out;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-transition">
                            <div className="box" style={{ transitionTimingFunction: 'steps(4)' }}></div>
                        </div>
                        <code>steps(4);</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-transition">
                            <div className="box" style={{ transitionTimingFunction: 'steps(10)' }}></div>
                        </div>
                        <code>steps(10);</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-transition">
                            <div className="box" style={{ transitionTimingFunction: 'step-start' }}></div>
                        </div>
                        <code>step-start;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-transition">
                            <div className="box" style={{ transitionTimingFunction: 'step-end' }}></div>
                        </div>
                        <code>step-end;</code>
                    </div>
                </div>
            </div>
            <div className="snippet transition">
                <h2 className="code">transition-delay:</h2>
                <div className="codeblock">
                    <div className="ex-transition">
                        <div className="box" style={{ transitionDelay: '0s' }}></div>
                    </div>
                    <code>0s;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-transition">
                        <div className="box" style={{ transitionDelay: '0.3s' }}></div>
                    </div>
                    <code>0.3s;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-transition">
                        <div className="box" style={{ transitionDelay: '0.7s' }}></div>
                    </div>
                    <code>0.7s;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-transition">
                        <div className="box" style={{ transitionDelay: '1.5s' }}></div>
                    </div>
                    <code>1.5s;</code>
                </div>
            </div>
            <div className="snippet">
                <h2 className="code">transition-property:</h2>
                <h3>Transition a specific property (other properties jump to final state).</h3>
                <div className="codeblock">
                    <div className="ex-transition property all">
                        <div className="box" style={{ transitionProperty: 'all' }}>A</div>
                    </div>
                    <code>all;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-transition property color">
                        <div className="box" style={{ transitionProperty: 'color' }}>A</div>
                    </div>
                    <code>color;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-transition property margin">
                        <div className="box" style={{ transitionProperty: 'margin' }}>A</div>
                    </div>
                    <code>margin;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-transition property background">
                        <div className="box" style={{ transitionProperty: 'background' }}>A</div>
                    </div>
                    <code>background;</code>
                </div>
            </div>
        </section>
        <section id="transition-examples">
            <h2>Transition examples</h2>
            <div className="snippet span-5">
                <h2>Card</h2>
                <div className="codeblock">
                    <div className="ex-card">
                        <div className="card">
                            <div className="card-front">A</div>
                            <div className="card-back">B</div>
                        </div>
                    </div>
                    <fieldset>
                        <legend>HTML</legend>
                        <code>&lt;div class=&quot;ex-card&quot;&gt;</code>
                        <code>  &lt;div class=&quot;card&quot;&gt;</code>
                        <code>    &lt;div class=&quot;card-front&quot;&gt;A&lt;/div&gt;</code>
                        <code>    &lt;div class=&quot;card-back&quot;&gt;B&lt;/div&gt;</code>
                        <code>  &lt;/div&gt;</code>
                        <code>&lt;/div&gt;</code>
                    </fieldset>
                    <fieldset>
                        <legend>CSS</legend>
                        <code>.ex-card:hover .card &#123;</code>
                        <code>  transform: rotateY(180deg) translateX(100%);</code>
                        <code>&#125;</code>
                        <code></code>
                        <code>.ex-card &#123;</code>
                        <code>  perspective: 300px;</code>
                        <code>&#125;</code>
                        <code></code>
                        <code>.card &#123;</code>
                        <code>  transition: 0.7s;</code>
                        <code>  transform-style: preserve-3d;</code>
                        <code>  transform-origin: right;</code>
                        <code>  position: relative;</code>
                        <code>&#125;</code>
                        <code></code>
                        <code>.card-front, .card-back &#123;</code>
                        <code>  backface-visibility: hidden;</code>
                        <code>  position: absolute;</code>
                        <code>&#125;</code>
                        <code></code>
                        <code>.card-back &#123;</code>
                        <code>  transform: rotateY(180deg) translateZ(1px);</code>
                        <code>&#125;</code>
                    </fieldset>
                </div>
            </div>
            <div className="snippet span-5">
                <h2>Tooltip</h2>
                <div className="codeblock">
                    <div className="ex-tooltip">
                        <div className="box biggest"></div>
                        <p className="tooltip">This is a tooltip message.</p>
                    </div>
                    <fieldset>
                        <legend>HTML</legend>
                        <code>&lt;div class=&quot;ex-tooltip&quot;&gt;</code>
                        <code>  &lt;div class=&quot;box biggest&quot;&gt;&lt;/div&gt;</code>
                        <code>  &lt;p class=&quot;tooltip&quot;&gt;This is a tooltip message.&lt;/p&gt;</code>
                        <code>&lt;/div&gt;</code>
                    </fieldset>
                    <fieldset>
                        <legend>CSS</legend>
                        <code>.tooltip &#123;</code>
                        <code>  background-color: transparent;</code>
                        <code>  border-radius: 8px;</code>
                        <code>  color: transparent;</code>
                        <code>  font-size: 0.7em;</code>
                        <code>  position: absolute;</code>
                        <code>  transition: 0.5s;</code>
                        <code>  padding: 0.5em 1em;</code>
                        <code>  margin-top: 0;</code>
                        <code>  z-index: 1000;</code>
                        <code>&#125;</code>
                        <code></code>
                        <code>.ex-tooltip:hover &gt; .tooltip &#123;</code>
                        <code>  background-color: yellow;</code>
                        <code>  color: black;</code>
                        <code>  font-size: 1.2em;</code>
                        <code>&#125;</code>
                    </fieldset>
                </div>
            </div>
            <div className="snippet span-3">
                <h2>Translation</h2>
                <div className="codeblock">
                    <div className="ex-transition-translate">
                        <div className="box biggest"></div>
                    </div>
                    <fieldset>
                        <legend>CSS</legend>
                        <code>.container .box &#123;</code>
                        <code>  transition: 1s all;</code>
                        <code>&#125;</code>
                        <code></code>
                        <code>.container:hover .box &#123;</code>
                        <code>  transform: translateX(200px);</code>
                        <code>&#125;</code>
                    </fieldset>
                </div>
            </div>
            <div className="snippet span-8">
                <h2>Translation</h2>

            </div>
        </section>
        <section id="animation-css">
            <h2>CSS animation</h2>
            <h3>See
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations">MDN on CSS animations</a>. Also check out
                <a href="https://greensock.com/">GreenSock</a>.</h3>
            <div className="snippet animation">
                <h2 className="code">animation-duration:</h2>
                <div className="codeblock">
                    <div className="ex-animation">
                        <div className="box" style={{ animationDuration: '0.7s' }}></div>
                    </div>
                    <code>0.7s;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <div className="box" style={{ animationDuration: '1s' }}></div>
                    </div>
                    <code>1s;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <div className="box" style={{ animationDuration: '2s' }}></div>
                    </div>
                    <code>2s;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <div className="box" style={{ animationDuration: '3s' }}></div>
                    </div>
                    <code>3s;</code>
                </div>
            </div>
            <div className="snippet animation">
                <h2 className="code">animation-direction:</h2>
                <div className="codeblock">
                    <div className="ex-animation">
                        <div className="box" style={{ animationDirection: 'normal' }}></div>
                    </div>
                    <code>normal;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <div className="box" style={{ animationDirection: 'alternate' }}></div>
                    </div>
                    <code>alternate;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <div className="box" style={{ animationDirection: 'reverse' }}></div>
                    </div>
                    <code>reverse;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <div className="box" style={{ animationDirection: 'alternate-reverse' }}></div>
                    </div>
                    <code>alternate-reverse;</code>
                </div>
            </div>
            <div className="snippet animation">
                <h2 className="code">animation-iteration-count:</h2>
                <div className="codeblock">
                    <div className="ex-animation">
                        <div className="box" style={{ animationIterationCount: '1' }}></div>
                    </div>
                    <code>1;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <div className="box" style={{ animationIterationCount: '2' }}></div>
                    </div>
                    <code>2;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <div className="box" style={{ animationIterationCount: 'infinite' }}></div>
                    </div>
                    <code>infinite;</code>
                </div>
            </div>
            <div className="snippet span-5 animation alternate">
                <h2 className="code">animation-timing-function:</h2>
                <div className="ex-animation-timing-function">
                    <div className="codeblock">
                        <div className="ex-animation">
                            <div className="box" style={{ animationTimingFunction: 'linear' }}></div>
                        </div>
                        <code>linear;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <div className="box" style={{ animationTimingFunction: 'ease' }}></div>
                        </div>
                        <code>ease;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <div className="box" style={{ animationTimingFunction: 'ease-in' }}></div>
                        </div>
                        <code>ease-in;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <div className="box" style={{ animationTimingFunction: 'ease-out' }}></div>
                        </div>
                        <code>ease-out;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <div className="box" style={{ animationTimingFunction: 'ease-in-out' }}></div>
                        </div>
                        <code>ease-in-out;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <div className="box" style={{ animationTimingFunction: 'steps(4)' }}></div>
                        </div>
                        <code>steps(4);</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <div className="box" style={{ animationTimingFunction: 'steps(10)' }}></div>
                        </div>
                        <code>steps(10);</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <div className="box" style={{ animationTimingFunction: 'step-start' }}></div>
                        </div>
                        <code>step-start;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <div className="box" style={{ animationTimingFunction: 'step-end' }}></div>
                        </div>
                        <code>step-end;</code>
                    </div>
                </div>
            </div>
            <div className="snippet animation ex-animation-fill-mode">
                <h2 className="code">animation-fill-mode:</h2>
                <h3>
                    <span className="fillmode-initial">Initial state</span>
                    <span className="fillmode-delay">Delay state 1s</span>
                    <span className="fillmode-animate">Animate 1s</span>
                    <span className="fillmode-end">End state</span>
                </h3>
                <div className="codeblock">
                    <div className="ex-animation">
                        <div className="box" style={{ animationFillMode: 'none' }}>A</div>
                    </div>
                    <code>none;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <div className="box" style={{ animationFillMode: 'forwards' }}>A</div>
                    </div>
                    <code>forwards;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <div className="box" style={{ animationFillMode: 'backwards' }}>A</div>
                    </div>
                    <code>backwards;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <div className="box" style={{ animationFillMode: 'both' }}>A</div>
                    </div>
                    <code>both;</code>
                </div>
            </div>
        </section>
        

        <section id="animation-keyframes">
            <h2>Animation Keyframes</h2>
            <div className="snippet animation">
                <h2>Slide right</h2>
                <div className="codeblock">
                    <div className="ex-keyframe">
                        <div className="box"></div>
                    </div>
                    <code>@keyframes slideright &#123;</code>
                    <code>    from &#123;</code>
                    <code>        margin-left: 0%;</code>
                    <code>    &#125;</code>
                    <code>    to &#123;</code>
                    <code>        margin-left: 80%;</code>
                    <code>    &#125;</code>
                    <code>&#125;</code>
                </div>
            </div>
            <div className="snippet span-4 animation">
                <h2>Set background color</h2>
                <div className="codeblock">
                    <div className="ex-keyframe">
                        <div className="box backgroundcolor"></div>
                    </div>
                    <code>@keyframes showbackground &#123;</code>
                    <code>    from &#123;</code>
                    <code>        background-color: blue;</code>
                    <code>    &#125;</code>
                    <code>    to &#123;</code>
                    <code>        background-color: red;</code>
                    <code>    &#125;</code>
                    <code>&#125;</code>
                </div>
            </div>
            <div className="snippet animation">
                <h2>Grow size</h2>
                <div className="codeblock">
                    <div className="ex-keyframe">
                        <div className="box size"></div>
                    </div>
                    <code>@keyframes growsize &#123;</code>
                    <code>    from &#123;</code>
                    <code>        height: 1em;</code>
                    <code>        width: 1em;</code>
                    <code>    &#125;</code>
                    <code>    to &#123;</code>
                    <code>        height: 4em;</code>
                    <code>        width: 4em;</code>
                    <code>    &#125;</code>
                    <code>&#125;</code>
                </div>
            </div>
            <div className="snippet span-4 animation">
                <h2>Cursor</h2>
                <div className="codeblock">
                    <div className="ex-keyframe">
                        <div className="cursor"></div>
                    </div>
                    <code>@keyframes cursor &#123;</code>
                    <code>    50% &#123;</code>
                    <code>        border-color: transparent;</code>
                    <code>    &#125;</code>
                    <code>&#125;</code>
                </div>
            </div>
        </section>

        <section id="animation-animate-css">
            <h2>Using animate.css</h2>
            <div className="snippet animation span-6">
                <h2>Attention</h2>
                <div className="grid col-2">
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated bounce">bounce</h2>
                        </div>
                        <code>class=&quot;animated bounce&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated flash">flash</h2>
                        </div>
                        <code>class=&quot;animated flash&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated pulse">pulse</h2>
                        </div>
                        <code>class=&quot;animated pulse&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated rubberBand">rubberBand</h2>
                        </div>
                        <code>class=&quot;animated rubberBand&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated shake">shake</h2>
                        </div>
                        <code>class=&quot;animated shake&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated headShake">headShake</h2>
                        </div>
                        <code>class=&quot;animated headShake&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated swing">swing</h2>
                        </div>
                        <code>class=&quot;animated swing&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated tada">tada</h2>
                        </div>
                        <code>class=&quot;animated tada&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated wobble">wobble</h2>
                        </div>
                        <code>class=&quot;animated wobble&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated jello">jello</h2>
                        </div>
                        <code>class=&quot;animated jello&quot;</code>
                    </div>
                </div>
            </div>
            <div className="snippet animation">
                <h2>Bouncing entrances</h2>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated bounceIn">bounceIn</h2>
                    </div>
                    <code>class=&quot;animated bounceIn&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated bounceInDown">bounceInDown</h2>
                    </div>
                    <code>class=&quot;animated bounceInDown&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated bounceInLeft">bounceInLeft</h2>
                    </div>
                    <code>class=&quot;animated bounceInLeft&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated bounceInRight">bounceInRight</h2>
                    </div>
                    <code>class=&quot;animated bounceInRight&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated bounceInUp">bounceInUp</h2>
                    </div>
                    <code>class=&quot;animated bounceInUp&quot;</code>
                </div>
            </div>
            <div className="snippet animation">
                <h2>Bouncing exits</h2>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated bounceOut">bounceOut</h2>
                    </div>
                    <code>class=&quot;animated bounceOut&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated bounceOutDown">bounceOutDown</h2>
                    </div>
                    <code>class=&quot;animated bounceOutDown&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated bounceOutLeft">bounceOutLeft</h2>
                    </div>
                    <code>class=&quot;animated bounceOutLeft&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated bounceOutRight">bounceOutRight</h2>
                    </div>
                    <code>class=&quot;animated bounceOutRight&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated bounceOutUp">bounceOutUp</h2>
                    </div>
                    <code>class=&quot;animated bounceOutUp&quot;</code>
                </div>
            </div>
            <div className="snippet animation span-6">
                <h2>Fading entrances</h2>
                <div className="grid col-2">
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeIn">fadeIn</h2>
                        </div>
                        <code>class=&quot;animated fadeIn&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeInDown">fadeInDown</h2>
                        </div>
                        <code>class=&quot;animated fadeInDown&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeInDownBig">fadeInDownBig</h2>
                        </div>
                        <code>class=&quot;animated fadeInDownBig&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeInLeft">fadeInLeft</h2>
                        </div>
                        <code>class=&quot;animated fadeInLeft&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeInLeftBig">fadeInLeftBig</h2>
                        </div>
                        <code>class=&quot;animated fadeInLeftBig&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeInRight">fadeInRight</h2>
                        </div>
                        <code>class=&quot;animated fadeInRight&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeInRightBig">fadeInRightBig</h2>
                        </div>
                        <code>class=&quot;animated fadeInRightBig&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeInUp">fadeInUp</h2>
                        </div>
                        <code>class=&quot;animated fadeInUp&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeInUpBig">fadeInUpBig</h2>
                        </div>
                        <code>class=&quot;animated fadeInUpBig&quot;</code>
                    </div>
                </div>
            </div>
            <div className="snippet animation span-6">
                <h2>Fading exits</h2>
                <div className="grid col-2">
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeOut">fadeOut</h2>
                        </div>
                        <code>class=&quot;animated fadeOut&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeOutDown">fadeOutDown</h2>
                        </div>
                        <code>class=&quot;animated fadeOutDown&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeOutDownBig">fadeOutDownBig</h2>
                        </div>
                        <code>class=&quot;animated fadeOutDownBig&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeOutLeft">fadeOutLeft</h2>
                        </div>
                        <code>class=&quot;animated fadeOutLeft&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeOutLeftBig">fadeOutLeftBig</h2>
                        </div>
                        <code>class=&quot;animated fadeOutLeftBig&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeOutRight">fadeOutRight</h2>
                        </div>
                        <code>class=&quot;animated fadeOutRight&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeOutRightBig">fadeOutRightBig</h2>
                        </div>
                        <code>class=&quot;animated fadeOutRightBig&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeOutUp">fadeOutUp</h2>
                        </div>
                        <code>class=&quot;animated fadeOutUp&quot;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-animation">
                            <h2 className="animated fadeOutUpBig">fadeOutUpBig</h2>
                        </div>
                        <code>class=&quot;animated fadeOutUpBig&quot;</code>
                    </div>
                </div>
            </div>
            <div className="snippet animation">
                <h2>Flips</h2>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated flipInX">flipInX</h2>
                    </div>
                    <code>class=&quot;animated flipInX&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated flipInY">flipInY</h2>
                    </div>
                    <code>class=&quot;animated flipInY&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated flipOutX">flipOutX</h2>
                    </div>
                    <code>class=&quot;animated flipOutX&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated flipOutY">flipOutY</h2>
                    </div>
                    <code>class=&quot;animated flipOutY&quot;</code>
                </div>
            </div>
            <div className="snippet animation">
                <h2>Lightspeed</h2>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated lightSpeedIn">lightSpeedIn</h2>
                    </div>
                    <code>class=&quot;animated lightSpeedIn&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated lightSpeedOut">lightSpeedOut</h2>
                    </div>
                    <code>class=&quot;animated lightSpeedOut&quot;</code>
                </div>
            </div>
            <div className="snippet animation span-4">
                <h2>Rotating entrances</h2>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated rotateIn">rotateIn</h2>
                    </div>
                    <code>class=&quot;animated rotateIn&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated rotateInDownLeft">rotateInDownLeft</h2>
                    </div>
                    <code>class=&quot;animated rotateInDownLeft&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated rotateInDownRight">rotateInDownRight</h2>
                    </div>
                    <code>class=&quot;animated rotateInDownRight&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated rotateInUpLeft">rotateInUpLeft</h2>
                    </div>
                    <code>class=&quot;animated rotateInUpLeft&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated rotateInUpRight">rotateInUpRight</h2>
                    </div>
                    <code>class=&quot;animated rotateInUpRight&quot;</code>
                </div>
            </div>
            <div className="snippet animation span-4">
                <h2>Rotating exits</h2>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated rotateOut">rotateOut</h2>
                    </div>
                    <code>class=&quot;animated rotateOut&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated rotateOutDownLeft">rotateOutDownLeft</h2>
                    </div>
                    <code>class=&quot;animated rotateOutDownLeft&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated rotateOutDownRight">rotateOutDownRight</h2>
                    </div>
                    <code>class=&quot;animated rotateOutDownRight&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated rotateOutUpLeft">rotateOutUpLeft</h2>
                    </div>
                    <code>class=&quot;animated rotateOutUpLeft&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated rotateOutUpRight">rotateOutUpRight</h2>
                    </div>
                    <code>class=&quot;animated rotateOutUpRight&quot;</code>
                </div>
            </div>
            <div className="snippet animation">
                <h2>Zoom entrances</h2>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated zoomIn">zoomIn</h2>
                    </div>
                    <code>class=&quot;animated zoomIn&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated zoomInDown">zoomInDown</h2>
                    </div>
                    <code>class=&quot;animated zoomInDown&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated zoomInLeft">zoomInLeft</h2>
                    </div>
                    <code>class=&quot;animated zoomInLeft&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated zoomInRight">zoomInRight</h2>
                    </div>
                    <code>class=&quot;animated zoomInRight&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated zoomInUp">zoomInUp</h2>
                    </div>
                    <code>class=&quot;animated zoomInUp&quot;</code>
                </div>
            </div>
            <div className="snippet animation">
                <h2>Zoom exits</h2>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated zoomOut">zoomOut</h2>
                    </div>
                    <code>class=&quot;animated zoomOut&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated zoomOutDown">zoomOutDown</h2>
                    </div>
                    <code>class=&quot;animated zoomOutDown&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated zoomOutLeft">zoomOutLeft</h2>
                    </div>
                    <code>class=&quot;animated zoomOutLeft&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated zoomOutRight">zoomOutRight</h2>
                    </div>
                    <code>class=&quot;animated zoomOutRight&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated zoomOutUp">zoomOutUp</h2>
                    </div>
                    <code>class=&quot;animated zoomOutUp&quot;</code>
                </div>
            </div>
            <div className="snippet animation">
                <h2>Slide entrances</h2>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated slideInDown">slideInDown</h2>
                    </div>
                    <code>class=&quot;animated slideInDown&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated slideInLeft">slideInLeft</h2>
                    </div>
                    <code>class=&quot;animated slideInLeft&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated slideInRight">slideInRight</h2>
                    </div>
                    <code>class=&quot;animated slideInRight&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated slideInUp">slideInUp</h2>
                    </div>
                    <code>class=&quot;animated slideInUp&quot;</code>
                </div>
            </div>
            <div className="snippet animation">
                <h2>Slide exits</h2>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated slideOutDown">slideOutDown</h2>
                    </div>
                    <code>class=&quot;animated slideOutDown&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated slideOutLeft">slideOutLeft</h2>
                    </div>
                    <code>class=&quot;animated slideOutLeft&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated slideOutRight">slideOutRight</h2>
                    </div>
                    <code>class=&quot;animated slideOutRight&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated slideOutUp">slideOutUp</h2>
                    </div>
                    <code>class=&quot;animated slideOutUp&quot;</code>
                </div>
            </div>
            <div className="snippet animation">
                <h2>Specials</h2>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated hinge">hinge</h2>
                    </div>
                    <code>class=&quot;animated hinge&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated jackInTheBox">jackInTheBox</h2>
                    </div>
                    <code>class=&quot;animated jackInTheBox&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated rollIn">rollIn</h2>
                    </div>
                    <code>class=&quot;animated rollIn&quot;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-animation">
                        <h2 className="animated rollOut">rollOut</h2>
                    </div>
                    <code>class=&quot;animated rollOut&quot;</code>
                </div>
            </div>
        </section>
    </section>


    </>
  );
}

// Auto-generated from the original static HTML by
// scripts/convert-html-to-jsx.mjs - do not edit by hand.

export default function HtmlCssCheatSheet() {
  return (
    <>










    


    


    
<section id="html">
        <h1>HTML</h1>
        <section id="html-templates">
            <h2>Templates</h2>
            <div className="snippet span-7">
                <h2>HTML Document</h2>
                <div className="codeblock">
                    <code>&lt;!DOCTYPE html&gt;</code>
                    <code>&lt;html&gt;</code>
                    <code>&lt;head&gt;</code>
                    <code>  &lt;title&gt;Title&lt;/title&gt;</code>
                    <code>  &lt;link href="style.css" type="text/css" rel="stylesheet"&gt;</code>
                    <code>  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</code>
                    <code>  &lt;meta charset=&quot;utf-8&quot;&gt;</code>
                    <code>&lt;/head&gt;</code>
                    <code>&lt;body&gt;</code>
                    <code>  ...</code>
                    <code>&lt;/body&gt;</code>
                    <code>&lt;/html&gt;</code>
                </div>
            </div>
        </section>
        </section>

            
<h2>Elements</h2>

            
<div className="snippet span-rows-2 span-2">
                <h2>Headers</h2>
                <div className="codeblock ex-header">
                    <code><h1>&lt;h1&gt;</h1></code>
                </div>
                <div className="codeblock ex-header">
                    <code><h2>&lt;h2&gt;</h2></code>
                </div>
                <div className="codeblock ex-header">
                    <code><h3>&lt;h3&gt;</h3></code>
                </div>
                <div className="codeblock ex-header">
                    <code><h4>&lt;h4&gt;</h4></code>
                </div>
                <div className="codeblock ex-header">
                    <code><h5>&lt;h5&gt;</h5></code>
                </div>
                <div className="codeblock ex-header">
                    <code><h6>&lt;h6&gt;</h6></code>
                </div>
            </div>

            
<div className="snippet span-2">
                <h2>Paragraph</h2>
                <div className="codeblock">
                    <code>&lt;p&gt;content&lt;/p&gt;</code>
                </div>
            </div>

            
<div className="snippet span-1">
                <h2>Line break</h2>
                <div className="codeblock">
                    <code>&lt;br&gt;</code>
                </div>
            </div>

            
<div className="snippet span-2">
                <h2>Horizontal rule</h2>
                <div className="codeblock">
                    <hr />
                    <code>&lt;hr&gt;</code>
                </div>
            </div>

            
<div className="snippet">
                <h2>Division</h2>
                <h3>Block-level generic grouping element</h3>
                <div className="codeblock">
                    <code>&lt;div class=&quot;kind&quot;&gt;</code>
                    <code>    content</code>
                    <code>&lt;/div&gt;</code>
                </div>
            </div>

            
<div className="snippet">
                <h2>Span</h2>
                <h3>Inline generic grouping element</h3>
                <div className="codeblock">
                    <code>&lt;span class=&quot;kind&quot;&gt;</code>
                    <code>    content</code>
                    <code>&lt;/span&gt;</code>
                </div>
            </div>

            
<div className="snippet">
                <h2>Article</h2>
                <h3>A self-contained unit of content</h3>
                <div className="codeblock">
                    <code>&lt;article&gt;</code>
                    <code>  &lt;h2&gt;Header&lt;/h2&gt;</code>
                    <code>  content</code>
                    <code>&lt;/article&gt;</code>
                </div>
            </div>

            
<div className="snippet">
                <h2>Section</h2>
                <h3>A unit of content</h3>
                <div className="codeblock">
                    <code>&lt;section&gt;</code>
                    <code>  &lt;h2&gt;Header&lt;/h2&gt;</code>
                    <code>  content</code>
                    <code>&lt;/section&gt;</code>
                </div>
            </div>

            
<div className="snippet span-5">
                <h2>Figure</h2>
                <div className="codeblock">
                    <code>&lt;figure&gt;</code>
                    <code>  content</code>
                    <code>  &lt;figcaption&gt;Caption&lt;/figcaption&gt;</code>
                    <code>&lt;/figure&gt;</code>
                </div>
            </div>

            
<div className="snippet span-6">
                <h2>Navigation</h2>
                <div className="codeblock" id="html-elements-nav">
                    <div className="ex-element">
                        See navigation bar at the top.
                    </div>
                    <code>&lt;nav&gt;</code>
                    <code>    &lt;ul&gt;</code>
                    <code>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;First&lt;/a&gt;&lt;/li&gt;</code>
                    <code>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Second&lt;/a&gt;&lt;/li&gt;</code>
                    <code>        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Third&lt;/a&gt;&lt;/li&gt;</code>
                    <code>    &lt;/ul&gt;</code>
                    <code>&lt;/nav&gt;</code>
                </div>
            </div>

            
<div className="snippet span-12">
                <h2>Text</h2>
                <div className="grid col-3">
                    <div className="codeblock">
                        <div className="ex-element">
                            <strong>strong</strong>
                        </div>
                        <code>&lt;strong&gt;strong&lt;/strong&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <em>emphasized</em>
                        </div>
                        <code>&lt;em&gt;emphasized&lt;/em&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <i>semantic</i>
                        </div>
                        <code>&lt;i&gt;semantic&lt;/i&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <s>strikethrough</s>
                        </div>
                        <code>&lt;s&gt;strikethrough&lt;/s&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <abbr title="abbreviation">abbr</abbr>
                        </div>
                        <code>&lt;abbr title=&quot;abbreviation&quot;&gt;abbr&lt;/abbr&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <mark>mark</mark>
                        </div>
                        <code>&lt;mark&gt;mark&lt;/mark&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <u>underline</u>
                        </div>
                        <code>&lt;u&gt;underline&lt;/u&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            x
                            <sup>sup</sup>
                        </div>
                        <code>&lt;sup&gt;sup&lt;/sup&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            x
                            <sub>sub</sub>
                        </div>
                        <code>&lt;sub&gt;sub&lt;/sub&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <q>inline quote</q>
                        </div>
                        <code>&lt;q&gt;inline quote&lt;/q&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <time datetime="2017-05-18T15:31">May 18</time>
                        </div>
                        <code>&lt;time datetime=&quot;2017-05-18T13:30&quot;&gt;<br />&nbsp;&nbsp;May 18<br />&lt;/time&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <blockquote>block quote</blockquote>
                        </div>
                        <code>&lt;blockquote&gt;block quote&lt;/blockquote&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <dfn>term</dfn> definition
                        </div>
                        <code>&lt;dfn&gt;term&lt;/dfn&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <cite>citation</cite>
                        </div>
                        <code>&lt;cite&gt;citation&lt;/cite&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <data value="42">data</data>
                        </div>
                        <code>&lt;data value="42"&gt;data&lt;/data&gt;</code>
                    </div>
                </div>
            </div>

            
<div className="snippet span-5">
                <h2>Code</h2>
                <div className="codeblock">
                    <div className="ex-element">
                        <code>code()</code>
                    </div>
                    <code>&lt;code&gt;code()&lt;/code&gt;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-element">
                        <samp>sample output</samp>
                    </div>
                    <code>&lt;samp&gt;sample output&lt;/samp&gt;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-element">
                        Press
                        <kbd>Ctrl</kbd>+
                        <kbd>S</kbd>
                    </div>
                    <code>&lt;kbd&gt;Ctrl&lt;/kbd&gt;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-element">
                        <var>variable</var>
                    </div>
                    <code>&lt;var&gt;variable&lt;/var&gt;</code>
                </div>
            </div>

            
<div className="snippet span-7">
                <h2>Forms</h2>
                <div className="codeblock">
                    <div className="ex-form">
                        <form action="" method="get">
                            <label htmlFor="html-elements-forms-name">Name:</label>
                            <input type="text" id="html-elements-forms-name" name="name" />
                            <input type="submit" value="Save" />
                        </form>
                    </div>
                    <code>&lt;form action=&quot;&quot; method=&quot;get&quot;&gt;</code>
                    <code>  &lt;label for=&quot;name&quot;&gt;Name:&lt;/label&gt;</code>
                    <code>  &lt;input id=&quot;name&quot; name=&quot;name&quot;&gt;</code>
                    <code>  &lt;input type=&quot;submit&quot; value=&quot;Save&quot;&gt;</code>
                    <code>&lt;/form&gt;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-form">
                        <form action="" method="post">
                            <fieldset>
                                <legend>Title</legend>
                                <label htmlFor="html-elements-forms-field">Label:</label>
                                <input type="text" id="html-elements-forms-field" name="field" />
                                <input type="submit" value="Save" />
                            </fieldset>
                        </form>
                    </div>
                    <code>&lt;form action=&quot;&quot; method=&quot;post&quot;&gt;</code>
                    <code>  &lt;fieldset&gt;</code>
                    <code>    &lt;legend&gt;Title&lt;/legend&gt;</code>
                    <code>    &lt;label for=&quot;fid&quot;&gt;Label:&lt;/label&gt;</code>
                    <code>    &lt;input id=&quot;fid&quot; name=&quot;field&quot;&gt;</code>
                    <code>    &lt;input type=&quot;submit&quot; value=&quot;Save&quot;&gt;</code>
                    <code>  &lt;/fieldset&gt;</code>
                    <code>&lt;/form&gt;</code>
                </div>
            </div>

            
<div className="snippet span-9" id="html-ui-elements">
                <h2>UI elements</h2>
                </div>

                    
<div className="codeblock">
                        <div className="ex-element">
                            <button>button</button>
                        </div>
                        <code>&lt;button&gt;button&lt;/button&gt;</code>
                    </div>

                    
<div className="codeblock">
                        </div>

                            

                        

                        
<code>&lt;meter value="0.6"&gt;</code>

                    

                    
<div className="codeblock span-rows-2">
                        <div className="ex-element">
                            <select>
                                <option>Value 1</option>
                                <option>Value 2</option>
                                <option>Value 3</option>
                            </select>
                        </div>
                        <code>&lt;select&gt;</code>
                        <code>  &lt;option&gt;Value 1&lt;/option&gt; </code>
                        <code>  &lt;option&gt;Value 2&lt;/option&gt;</code>
                        <code>  &lt;option&gt;Value 3&lt;/option&gt;</code>
                        <code>&lt;/select&gt;</code>
                    </div>

                    
<div className="codeblock span-rows-2">
                        <div className="ex-element">
                            <select>
                                <optgroup label="Group 1">
                                    <option>Value 1</option>
                                    <option>Value 2</option>
                                </optgroup>
                                <optgroup label="Group 2">
                                    <option>Value 3</option>
                                    <option>Value 4</option>
                                </optgroup>
                            </select>
                        </div>
                        <code>&lt;select&gt;</code>
                        <code>  &lt;optgroup label=&quot;Group 1&quot;&gt;</code>
                        <code>    &lt;option&gt;Value 1&lt;/option&gt;</code>
                        <code>    &lt;option&gt;Value 2&lt;/option&gt;</code>
                        <code>  &lt;/optgroup&gt;</code>
                        <code>  &lt;optgroup label=&quot;Group 2&quot;&gt;</code>
                        <code>    &lt;option&gt;Value 3&lt;/option&gt;</code>
                        <code>    &lt;option&gt;Value 4&lt;/option&gt;</code>
                        <code>  &lt;/optgroup&gt;</code>
                        <code>&lt;/select&gt;</code>
                    </div>

                    
<div className="codeblock">
                        </div>

                            

                        

                        
<code>&lt;progress value="0.6"&gt;</code>

                    

                    
<div className="codeblock">
                        <div className="ex-element">
                            <textarea rows="3" cols="30">content</textarea>
                        </div>
                        <code>&lt;textarea&gt;content&lt;/textarea&gt;</code>
                    </div>

                    
<div className="codeblock">
                        <div className="ex-element">
                            <details>
                                <summary>Summary</summary>
                                <p>The gory details.</p>
                            </details>
                        </div>
                        <code>&lt;details&gt;</code>
                        <code>  &lt;summary&gt;Summary&lt;/summary&gt;</code>
                        <code>  &lt;p&gt;The gory details.&lt;/p&gt;</code>
                        <code>&lt;/details&gt;</code>
                    </div>

                    
<div className="codeblock">
                        <div className="ex-element">
                            <label>label
                                <input placeholder="labelled ui element" />
                            </label>
                        </div>
                        <code>&lt;label&gt;label &lt;input&gt;&lt;/label&gt;</code>
                    </div>

                    
<div className="codeblock">
                        <div className="ex-element">
                            <label>label
                                <input placeholder="labelled ui element" />
                            </label>
                        </div>
                        <code>&lt;label for="name"&gt;label&lt;/label&gt;</code>
                        <code>&lt;input id="name"&gt;</code>
                    </div>

                

            

            
<div className="snippet span-12">
                <h2>Input types</h2>
                <div className="grid col-4">
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="button" value="ok" />
                        </div>
                        <code>&lt;input type=&quot;button&quot; value=&quot;ok&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="checkbox" checked="" />
                        </div>
                        <code>&lt;input type=&quot;checkbox&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="color" />
                        </div>
                        <code>&lt;input type=&quot;color&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="date" />
                        </div>
                        <code>&lt;input type=&quot;date&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="datetime-local" />
                        </div>
                        <code>&lt;input type=&quot;datetime-local&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="email" placeholder="andy@example.com" />
                        </div>
                        <code>&lt;input type=&quot;email&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="file" />
                        </div>
                        <code>&lt;input type=&quot;file&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="month" />
                        </div>
                        <code>&lt;input type=&quot;month&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="number" placeholder="123" />
                        </div>
                        <code>&lt;input type=&quot;number&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="password" value="password" />
                        </div>
                        <code>&lt;input type=&quot;password&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="radio" checked="" />
                        </div>
                        <code>&lt;input type=&quot;radio&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="range" value="75" />
                        </div>
                        <code>&lt;input type=&quot;range&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="reset" />
                        </div>
                        <code>&lt;input type=&quot;reset&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="search" placeholder="search term" />
                        </div>
                        <code>&lt;input type=&quot;search&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="submit" />
                        </div>
                        <code>&lt;input type=&quot;submit&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="tel" placeholder="415-123-4567" />
                        </div>
                        <code>&lt;input type=&quot;tel&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="text" placeholder="input" />
                        </div>
                        <code>&lt;input type=&quot;text&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="hidden" />
                        </div>
                        <code>&lt;input type=&quot;hidden&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="time" />
                        </div>
                        <code>&lt;input type=&quot;time&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="url" placeholder="https://www.google.com" />
                        </div>
                        <code>&lt;input type=&quot;url&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="week" />
                        </div>
                        <code>&lt;input type=&quot;week&quot;&gt;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-element">
                            <input type="image" src="https://www.w3schools.com/html/html5.gif" width="50px" />
                        </div>
                        <code>&lt;input type=&quot;image&quot;&gt;</code>
                    </div>
                </div>
            </div>

        

        
<section id="html-links">
            <h2>Links</h2>
            <div className="snippet span-4">
                <h2>Link</h2>
                <div className="codeblock">
                    <code>&lt;a href=&quot;URL&quot;&gt;open link&lt;/a&gt;</code>
                </div>
            </div>
            <div className="snippet span-8">
                <h2>Link in new tab</h2>
                <h3>See this
                    <a href="https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c">article</a> on the need for "noopener noreferrer"
                </h3>
                <div className="codeblock">
                    <code>&lt;a href=&quot;URL&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;&gt;open link in new tab&lt;/a&gt;</code>
                </div>
            </div>
        </section>

        
<section id="html-images">
            <h2>Images</h2>
            <div className="snippet">
                <h2>Image</h2>
                <div className="codeblock">
                    <code>&lt;img src=&quot;URL&quot;&gt;</code>
                </div>
            </div>
            <div className="snippet span-6">
                <h2>Image with description</h2>
                <div className="codeblock">
                    <code>&lt;img src=&quot;URL&quot; alt=&quot;image description&quot;&gt;</code>
                </div>
            </div>
        </section>

        
<section id="html-lists">
            <h2>Lists</h2>
            <div className="snippet">
                <h2>Unordered list</h2>
                <div className="codeblock">
                    <code>&lt;ul&gt;</code>
                    <code>    &lt;li&gt;Item 1&lt;/li&gt;</code>
                    <code>    &lt;li&gt;Item 2&lt;/li&gt;</code>
                    <code>&lt;/ul&gt;</code>
                </div>
            </div>
            <div className="snippet">
                <h2>Ordered list</h2>
                <div className="codeblock">
                    <code>&lt;ol&gt;</code>
                    <code>    &lt;li&gt;Item 1&lt;/li&gt;</code>
                    <code>    &lt;li&gt;Item 2&lt;/li&gt;</code>
                    <code>&lt;/ol&gt;</code>
                </div>
            </div>
            <div className="snippet span-4">
                <h2>Description list</h2>
                <div className="codeblock">
                    <code>&lt;dl&gt;</code>
                    <code>    &lt;dt&gt;Term&lt;/dt&gt;</code>
                    <code>    &lt;dd&gt;Definition&lt;/dd&gt;</code>
                    <code>&lt;/dl&gt;</code>
                </div>
            </div>
        </section>

        
<section id="html-comments">
            <h2>Comments</h2>
            <div className="snippet">
                <h2>Comments</h2>
                <div className="codeblock">
                    <code>&lt;!-- comment --&gt;</code>
                </div>
            </div>
        </section>

        
<section id="html-tables">
            <h2>Tables</h2>
            <div className="snippet">
                <h2>Basic table</h2>
                <h3>Also see
                    <a href="#css-table">display: table</a>
                </h3>
                <div className="codeblock">
                    <div className="ex-table">
                        <table>
                            <tr>
                                <td>data</td>
                            </tr>
                        </table>
                    </div>
                    <code>&lt;table&gt;&#10;    &lt;tr&gt;&#10;        &lt;td&gt;data&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;&lt;/table&gt;</code>
                </div>
            </div>
            <div className="snippet span-6 span-rows-2">
                <h2>Full Table</h2>
                <div className="codeblock">
                    <div className="ex-full-table-elements">
                        <table className="ex-full-table">
                            <caption>caption</caption>
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>number</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <td>Footer</td>
                                    <td>Total</td>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <th>Andy</th>
                                    <td>42</td>
                                </tr>
                                <tr>
                                    <th>Kevin</th>
                                    <td>1024</td>
                                </tr>
                            </tbody>
                        </table>
                        <code>&lt;table&gt;&#10;    &lt;caption&gt;caption&lt;/caption&gt;&#10;    &lt;thead&gt;&#10;        &lt;tr&gt;&#10;            &lt;th&gt;col-header&lt;/th&gt;&#10;            &lt;th&gt;col-header&lt;/th&gt;&#10;        &lt;/tr&gt;&#10;    &lt;/thead&gt;&#10;    &lt;tfoot&gt;&#10;        &lt;tr&gt;&#10;            &lt;td&gt;footer&lt;/td&gt;&#10;            &lt;td&gt;footer&lt;/td&gt;&#10;        &lt;/tr&gt;&#10;    &lt;/tfoot&gt;&#10;    &lt;tbody&gt;&#10;        &lt;tr&gt;&#10;            &lt;th&gt;row-header&lt;/th&gt;&#10;            &lt;td&gt;data&lt;/td&gt;&#10;        &lt;/tr&gt;&#10;    &lt;/tbody&gt;&#10;&lt;/table&gt;&#10;</code>
                    </div>
                </div>
            </div>
            <div className="snippet">
                <h2>Span columns</h2>
                <div className="codeblock">
                    <div className="ex-table">
                        <table className="ex-full-table">
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Andy</td>
                                    <td>42</td>
                                </tr>
                                <tr>
                                    <td colspan="2">Kevin</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <code>&lt;td colspan=&quot;2&quot;&gt;Kevin&lt;/td&gt;</code>
                </div>
            </div>
            <div className="snippet">
                <h2>Span rows</h2>
                <div className="codeblock">
                    <div className="ex-table">
                        <table className="ex-full-table">
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowspan="2">Andy</td>
                                    <td>42</td>
                                </tr>
                                <tr>
                                    <td>1024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <code>&lt;td rowspan=&quot;2&quot;&gt;Andy&lt;/td&gt;</code>
                </div>
            </div>
            <div className="snippet span-5">
                <h2>Column groups</h2>
                <h3>Operate on an entire column</h3>
                <div className="codeblock">
                    <div className="ex-table">
                        <table className="ex-full-table">
                            <colgroup>
                                <col style={{ backgroundColor: '#bbb' }} />
                            </colgroup>
                            <tr>
                                <td>Andy</td>
                                <td>42</td>
                            </tr>
                            <tr>
                                <td>Kevin</td>
                                <td>1024</td>
                            </tr>
                        </table>
                    </div>
                    <code>&lt;colgroup&gt;&#10;    &lt;col style=&quot;...&quot;&gt;&lt;/col&gt;&#10;&lt;/colgroup&gt;&#10;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-table">
                        <table className="ex-full-table">
                            <colgroup>
                                <col span="2" style={{ backgroundColor: '#bbb' }} />
                            </colgroup>
                            <tr>
                                <td>Andy</td>
                                <td>42</td>
                            </tr>
                            <tr>
                                <td>Kevin</td>
                                <td>1024</td>
                            </tr>
                        </table>
                    </div>
                    <code>&lt;colgroup&gt;&#10;    &lt;col span=&quot;2&quot; style=&quot;...&quot;&gt;&lt;/col&gt;&#10;&lt;/colgroup&gt;&#10;</code>
                </div>
            </div>
            <div className="snippet span-4">
                <h2>Footers</h2>
                <div className="codeblock">
                    <div className="ex-table">
                        <table className="ex-full-table">
                            <thead></thead>
                            <tfoot style={{ backgroundColor: '#bbb' }}>
                                <tr>
                                    <td>Name</td>
                                    <td>Total</td>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td>Andy</td>
                                    <td>42</td>
                                </tr>
                                <tr>
                                    <td>Kevin</td>
                                    <td>1024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <code>&lt;tfoot&gt;&#10;    &lt;tr&gt;&#10;        &lt;td&gt;Name&lt;/td&gt;&#10;        &lt;td&gt;Total&lt;/td&gt;&#10;    &lt;/tr&gt;&#10;&lt;/tfoot&gt;</code>
                </div>
            </div>
        </section>

    

    


    
<section id="css">
        <h1>CSS</h1>
        <section id="css-structure">
            <h2>Basic structure (
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference">reference</a>)</h2>
            <div className="snippet span-3">
                <h2>Selectors</h2>
                <div className="ex-css">
                    <div className="codeblock">
                        <div className="ex-css-element">
                            <code>&lt;element&gt;</code>
                        </div>
                        <code>element</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-css-element">
                            <code>&lt;element class="a"&gt;</code>
                        </div>
                        <code>.a</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-css-element">
                            <code>&lt;element id="id"&gt;</code>
                        </div>
                        <code>#id</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-css-element">
                            <code>&lt;element class="a b"&gt;</code>
                        </div>
                        <code>element.a.b</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-css-element">
                            <code>&lt;any&gt;</code>
                        </div>
                        <code>*</code>
                    </div>
                </div>
            </div>
            <div className="snippet span-3">
                <h2>Combinators</h2>
                <div className="ex-css">
                    <div className="codeblock">
                        <div className="ex-css-element">
                            <code>&lt;parent&gt;</code>
                            <code>  &vellip;</code>
                            <code>  &lt;descendant&gt;</code>
                        </div>
                        <code>parent descendant</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-css-element">
                            <code>&lt;parent&gt;</code>
                            <code>  &lt;child&gt;</code>
                        </div>
                        <code>parent &gt; child</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-css-element">
                            <code>&lt;sibling&gt;</code>
                            <code>&lt;self&gt;</code>
                        </div>
                        <code>sibling + self</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-css-element">
                            <code>&lt;sibling&gt;</code>
                            <code>&lt;self&gt;</code>
                            <code>  &vellip;</code>
                            <code>&lt;self&gt;</code>
                        </div>
                        <code>sibling ~ self</code>
                    </div>
                </div>
            </div>
            <div className="snippet span-6">
                <h2>Attribute selectors</h2>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-css-element">
                                <code>&lt;div attr=*&gt;</code>
                            </div>
                            <code>div[attr]</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-css-element">
                                <code>&lt;div attr="value"&gt;</code>
                            </div>
                            <code>div[attr="value"]</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-css-element">
                                <code>&lt;div attr="v1 v2"&gt;</code>
                            </div>
                            <code>div[attr~="v1"]</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-css-element">
                                <code>&lt;div attr="value"&gt;</code>
                                <code>&lt;div attr="value-*"&gt;</code>
                            </div>
                            <code>div[attr|="value"]</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-css-element">
                                <code>&lt;div attr="value*"&gt;</code>
                            </div>
                            <code>div[attr^="value"]</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-css-element">
                                <code>&lt;div attr="*value"&gt;</code>
                            </div>
                            <code>div[attr$="value"]</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-css-element">
                                <code>&lt;div attr="*value*"&gt;</code>
                            </div>
                            <code>div[attr*="value"]</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-css-element">
                                <code>&lt;div attr="VaLuE"&gt;</code>
                            </div>
                            <code>div[attr="value" i]</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet span-6">
                <h2>Variables</h2>
                <h3>Limited
                    <a href="http://caniuse.com/#feat=css-variables">platform support</a>.</h3>
                <div className="ex-css">
                    <div className="codeblock">
                        <code>:root &#123;</code>
                        <code>    --bg-color: white;</code>
                        <code>&#125;</code>
                        <code></code>
                        <code>.class &#123;</code>
                        <code>    background-color: var(--bg-color);</code>
                        <code>&#125;</code>
                    </div>
                </div>
            </div>
        </section>
        

        <section id="css-pseudo">
            <h2>Pseudo</h2>
            <div className="snippet span-4">
                <h2>Pseudo classes</h2>
                <h3>Ordering matters for link, visited, hover, active.</h3>
                <h3>There are many
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">other pseudo-classes</a> useful for creating CSS queries.</h3>
                <div className="codeblock">
                    <div className="ex-pseudo">
                        <a className="ps-link" id="css-pseudo-1" href="#css-pseudo-1">link one</a>
                        <a className="ps-link" id="css-pseudo-2" href="#css-pseudo-2">link two</a>
                        <a className="ps-link" id="css-pseudo-3" href="#css-pseudo-3">link three</a>
                    </div>
                    <code>a:link &#123; background-color: yellow &#125;</code>
                    <code>a:visited &#123; background-color: #ccc &#125;</code>
                    <code>a:hover &#123; background-color: green &#125;</code>
                    <code>a:active &#123; background-color: red &#125;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-pseudo">
                        <a className="ps-active">I'm red when clicked</a>
                    </div>
                    <code>a:active &#123; background-color: red &#125;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-pseudo">
                        <a className="ps-hover">I'm green when hovering</a>
                    </div>
                    <code>a:hover &#123; background-color: green &#125;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-pseudo">
                        <a className="ps-target" id="css-pseudo-target">I'm red when I'm the active target.</a>
                        <a className="ps-plain" href="#css-pseudo-target">This links to the target above.</a>
                        <a className="ps-plain" href="#css-pseudo-nonexistent">This links to a nonexistent target.</a>
                    </div>
                    <code>a:target &#123; background-color: red &#125;</code>
                </div>
            </div>
            <div className="snippet span-8">
                <h2>Pseudo elements</h2>
                <div className="grid col-2">
                    <div className="codeblock">
                        <div className="ex-pseudo">
                            <a className="ps-after">The element content.</a>
                        </div>
                        <code>a::after &#123; </code>
                        <code>  content:" The added content. ";</code>
                        <code>  color: green;</code>
                        <code>&#125;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-pseudo">
                            <a className="ps-before">The element content.</a>
                        </div>
                        <code>a::before &#123; </code>
                        <code>  content:" The added content. ";</code>
                        <code>  color: green;</code>
                        <code>&#125;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-pseudo">
                            <a className="underline">An underline.</a>
                        </div>
                        <code>.underline &#123;</code>
                        <code>    position: relative;</code>
                        <code>&#125;</code>
                        <code></code>
                        <code>.underline::after &#123;</code>
                        <code>    position: absolute;</code>
                        <code>    content: " ";</code>
                        <code>    display: block;</code>
                        <code>    border-top: 1px solid #999;</code>
                        <code>    width: 70%;</code>
                        <code>&#125;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-pseudo">
                            <a className="overline">An overline.</a>
                        </div>
                        <code>.overline &#123;</code>
                        <code>    position: relative;</code>
                        <code>&#125;</code>
                        <code></code>
                        <code>.overline::before &#123;</code>
                        <code>    position: absolute;</code>
                        <code>    content: " ";</code>
                        <code>    display: block;</code>
                        <code>    border-bottom: 1px solid #999;</code>
                        <code>    width: 70%;</code>
                        <code>&#125;</code>
                    </div>
                </div>
            </div>
        </section>

        <section id="css-fonts">
            <h2>Fonts</h2>
            <div className="snippet span-3">
                <h2 className="code">font-family:</h2>
                <h3>Additional
                    <a href="https://fonts.google.com/">google fonts</a>
                </h3>
                <div className="codeblock">
                    <div className="font-example" style={{ fontFamily: '"Times New Roman", serif' }}>Aa Bb Cc</div>
                    <code>"Times New Roman", serif;</code>
                </div>
                <div className="codeblock">
                    <div className="font-example" style={{ fontFamily: '"Arial", sans-serif' }}>Aa Bb Cc</div>
                    <code>"Arial", sans-serif;</code>
                </div>
                <div className="codeblock">
                    <div className="font-example" style={{ fontFamily: '"Courier", monospace' }}>Aa Bb Cc</div>
                    <code>"Courier", monospace;</code>
                </div>
                <div className="codeblock">
                    <div className="font-example" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>Aa Bb Cc</div>
                    <code>"Source Sans Pro", sans-serif;</code>
                </div>
                <div className="codeblock">
                    <div className="font-example" style={{ fontFamily: '"Source Code Pro", monospace' }}>Aa Bb Cc</div>
                    <code>"Source Code Pro", monospace;</code>
                </div>
            </div>
            <div className="snippet span-6">
                <h2 className="code">font-size:</h2>
                <h3>Browser default size 16px. </h3>
                <h3>
                    <span className="code">em</span> and
                    <span className="code">%</span> are relative to parent font size.</h3>
                <h3>
                    <span className="code">rem</span> is like
                    <span className="code">em</span> relative to
                    <span className="code">html</span> element font size.</h3>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: 'xx-large' }}>Aa</div>
                            <code>xx-large;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: 'x-large' }}>Aa</div>
                            <code>x-large;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: 'large' }}>Aa</div>
                            <code>large;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: 'medium' }}>Aa</div>
                            <code>medium;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: 'small' }}>Aa</div>
                            <code>small;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: 'x-small' }}>Aa</div>
                            <code>x-small;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '32px' }}>Aa</div>
                            <code>32px;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '24px' }}>Aa</div>
                            <code>24px;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '18px' }}>Aa</div>
                            <code>18px;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '16px' }}>Aa</div>
                            <code>16px;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '13px' }}>Aa</div>
                            <code>13px;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '10px' }}>Aa</div>
                            <code>10px;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '8px' }}>Aa</div>
                            <code>8px;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '2em' }}>Aa</div>
                            <code>2em;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '1.5em' }}>Aa</div>
                            <code>1.5em;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '1.125em' }}>Aa</div>
                            <code>1.125em;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '1em' }}>Aa</div>
                            <code>1em;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '0.813em' }}>Aa</div>
                            <code>0.813em;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '0.625em' }}>Aa</div>
                            <code>0.625em;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '0.5em' }}>Aa</div>
                            <code>0.5em;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '200%' }}>Aa</div>
                            <code>200%;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '150%' }}>Aa</div>
                            <code>150%;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '112.5%' }}>Aa</div>
                            <code>112.5%;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '100%' }}>Aa</div>
                            <code>100%;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '81.3%' }}>Aa</div>
                            <code>81.3%;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '62.5%' }}>Aa</div>
                            <code>62.5%;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontSize: '50%' }}>Aa</div>
                            <code>50%;</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet span-2">
                <h2 className="code">font-weight:</h2>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="font-example" style={{ fontWeight: 'lighter' }}>Aa</div>
                            <code>lighter;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontWeight: 'normal' }}>Aa</div>
                            <code>normal;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontWeight: 'bolder' }}>Aa</div>
                            <code>bolder;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="font-example" style={{ fontWeight: '300' }}>Aa</div>
                            <code>300;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontWeight: '400' }}>Aa</div>
                            <code>400;</code>
                        </div>
                        <div className="codeblock">
                            <div className="font-example" style={{ fontWeight: '700' }}>Aa</div>
                            <code>700;</code>
                        </div>
                    </div>
                </div>
            </div>

            <div className="snippet span-4">
                <h2>Misc font properties</h2>
                <div className="codeblock">
                    <div className="font-example" style={{ fontStyle: 'italic' }}>Aa Bb Cc</div>
                    <code>font-style: italic;</code>
                </div>
                <div className="codeblock">
                    <div className="font-example" style={{ fontVariant: 'small-caps' }}>Aa Bb Cc</div>
                    <code>font-variant: small-caps;</code>
                </div>
                <div className="codeblock">
                    <div className="font-example" style={{ fontKerning: 'none', fontSize: '14pt' }}>AVAVAV|AVAVAV|AVAVAV|AVAVAV</div>
                    <code>font-kerning: none;</code>
                </div>
                <div className="codeblock">
                    <div className="font-example" style={{ fontKerning: 'normal', fontSize: '14pt' }}>AVAVAV|AVAVAV|AVAVAV|AVAVAV</div>
                    <code>font-kerning: normal;</code>
                </div>
            </div>

            
        </section>
        

        <section id="css-text">
            <h2>Text and inline elements</h2>
            <div className="snippet span-2">
                <h2 className="code">text-align:</h2>
                <div className="codeblock">
                    <div className="text-example align" style={{ textAlign: 'left' }}>
                        abc abc abc abc abc abc
                    </div>
                    <code>left;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example align" style={{ textAlign: 'center' }}>
                        abc abc abc abc abc abc
                    </div>
                    <code>center;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example align" style={{ textAlign: 'right' }}>
                        abc abc abc abc abc abc
                    </div>
                    <code>right;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example align" style={{ textAlign: 'justify' }}>
                        abc abc abc abc abc abc
                    </div>
                    <code>justify;</code>
                </div>
            </div>
            <div className="snippet span-2">
                <h2 className="code">line-height:</h2>
                <div className="codeblock">
                    <div className="text-example" style={{ lineHeight: '0.8em' }}>
                        abc abc abc abc
                        <br /> abc abc abc abc
                        <br /> abc abc abc abc
                        <br />
                    </div>
                    <code>0.8em;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example" style={{ lineHeight: '1em' }}>
                        abc abc abc abc
                        <br /> abc abc abc abc
                        <br /> abc abc abc abc
                        <br />
                    </div>
                    <code>1em;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example" style={{ lineHeight: '1.5em' }}>
                        abc abc abc abc
                        <br /> abc abc abc abc
                        <br /> abc abc abc abc
                        <br />
                    </div>
                    <code>1.5em;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example" style={{ lineHeight: '2em' }}>
                        abc abc abc abc
                        <br /> abc abc abc abc
                        <br /> abc abc abc abc
                        <br />
                    </div>
                    <code>2em;</code>
                </div>
            </div>
            <div className="snippet span-3">
                <h2 className="code">word-spacing:</h2>
                <div className="codeblock">
                    <div className="text-example" style={{ wordSpacing: '0.1em' }}>
                        abc abc abc abc
                        <br /> abc abc abc abc
                        <br /> abc abc abc abc
                        <br />
                    </div>
                    <code>0.1em;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example" style={{ wordSpacing: '0.3em' }}>
                        abc abc abc abc
                        <br /> abc abc abc abc
                        <br /> abc abc abc abc
                        <br />
                    </div>
                    <code>0.3em;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example" style={{ wordSpacing: '0.5em' }}>
                        abc abc abc abc
                        <br /> abc abc abc abc
                        <br /> abc abc abc abc
                        <br />
                    </div>
                    <code>0.5em;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example" style={{ wordSpacing: '1em' }}>
                        abc abc abc abc
                        <br /> abc abc abc abc
                        <br /> abc abc abc abc
                        <br />
                    </div>
                    <code>1em;</code>
                </div>
            </div>
            <div className="snippet span-3">
                <h2 className="code">letter-spacing:</h2>
                <div className="codeblock">
                    <div className="text-example" style={{ letterSpacing: '0.1em' }}>
                        abc abc
                        <br /> abc abc
                        <br /> abc abc
                        <br />
                    </div>
                    <code>0.1em;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example" style={{ letterSpacing: '0.3em' }}>
                        abc abc
                        <br /> abc abc
                        <br /> abc abc
                        <br />
                    </div>
                    <code>0.3em;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example" style={{ letterSpacing: '0.5em' }}>
                        abc abc
                        <br /> abc abc
                        <br /> abc abc
                        <br />
                    </div>
                    <code>0.5em;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example" style={{ letterSpacing: '1em' }}>
                        abc abc
                        <br /> abc abc
                        <br /> abc abc
                        <br />
                    </div>
                    <code>1em;</code>
                </div>
            </div>
            <div className="snippet span-2">
                <h2 className="code">text-transform:</h2>
                <div className="codeblock">
                    <div className="text-example" style={{ textTransform: 'none' }}>
                        abc ABC
                        <br />
                    </div>
                    <code>none;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example" style={{ textTransform: 'capitalize' }}>
                        abc ABC
                        <br />
                    </div>
                    <code>capitalize;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example" style={{ textTransform: 'lowercase' }}>
                        abc ABC
                        <br />
                    </div>
                    <code>lowercase;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example" style={{ textTransform: 'uppercase' }}>
                        abc ABC
                        <br />
                    </div>
                    <code>uppercase;</code>
                </div>
            </div>
            <div className="snippet span-8" id="css-text-vertical-align">
                <h2 className="code">vertical-align:</h2>
                <h3>Inline elements only. To align block elements, use flex. Also see section on
                    <a href="#css-table-vertical-align">table cells</a>.</h3>
                <div className="grid col-2">
                    <div className="callout">
                        <div className="ex-vertical-align-text">
                            <div className="ex-align-box">box</div>
                        </div>
                        <span className="code">line-height = height</span>
                    </div>
                    <div className="callout">
                        <div className="ex-vertical-align-text">
                            <span className="ex-align-text" style={{ verticalAlign: 'baseline' }}>base</span>
                            <div className="ex-align-box"></div>
                        </div>
                        <h3>Inline block without text</h3>
                    </div>
                </div>
                <div className="grid col-4">
                    <div className="codeblock">
                        <div className="ex-vertical-align-text">
                            <div className="ex-align-box">box</div>
                            <span className="ex-align-text" style={{ verticalAlign: 'baseline' }}>base</span>
                        </div>
                        <code>baseline;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-vertical-align-text">
                            <div className="ex-align-box">box</div>
                            <span className="ex-align-text" style={{ verticalAlign: 'top' }}>top</span>
                        </div>
                        <code>top;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-vertical-align-text">
                            <div className="ex-align-box">box</div>
                            <span className="ex-align-text" style={{ verticalAlign: 'middle' }}>middle</span>
                        </div>
                        <code>middle;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-vertical-align-text">
                            <div className="ex-align-box">box</div>
                            <span className="ex-align-text" style={{ verticalAlign: 'bottom' }}>bottom</span>
                        </div>
                        <code>bottom;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-vertical-align-text">
                            <span className="ex-align-text" style={{ verticalAlign: 'baseline' }}>base</span>
                            <span className="ex-align-text" style={{ verticalAlign: 'super' }}>super</span>
                        </div>
                        <code>super;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-vertical-align-text">
                            <span className="ex-align-text" style={{ verticalAlign: 'baseline' }}>base</span>
                            <span className="ex-align-text" style={{ verticalAlign: 'sub' }}>sub</span>
                        </div>
                        <code>sub;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-vertical-align-text">
                            <span className="ex-align-text" style={{ verticalAlign: 'baseline' }}>base</span>
                            <span className="ex-align-text" style={{ verticalAlign: '50%' }}>50%</span>
                        </div>
                        <code>50%;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-vertical-align-text">
                            <span className="ex-align-text" style={{ verticalAlign: 'baseline' }}>base</span>
                            <span className="ex-align-text" style={{ verticalAlign: '-50%' }}>-50%</span>
                        </div>
                        <code>-50%;</code>
                    </div>
                </div>
            </div>
        </section>
        <section id="css-list">
            <h2>Lists</h2>
            <div className="snippet span-10">
                <h2 className="code">list-style:</h2>
                <h3>Adjust list style type, position, and image.</h3>
                <div className="grid col-4">
                    <div className="codeblock">
                        <div className="ex-list">
                            <ul style={{ listStyle: 'none' }}>
                                <li>first</li>
                                <li>second</li>
                                <li>third</li>
                            </ul>
                        </div>
                        <code>none;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-list">
                            <ul style={{ listStyle: 'circle' }}>
                                <li>first</li>
                                <li>second</li>
                                <li>third</li>
                            </ul>
                        </div>
                        <code>circle;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-list">
                            <ul style={{ listStyle: 'decimal' }}>
                                <li>first</li>
                                <li>second</li>
                                <li>third</li>
                            </ul>
                        </div>
                        <code>decimal;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-list">
                            <ul style={{ listStyle: 'disc' }}>
                                <li>first</li>
                                <li>second</li>
                                <li>third</li>
                            </ul>
                        </div>
                        <code>disc;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-list">
                            <ul style={{ listStyle: 'lower-alpha' }}>
                                <li>first</li>
                                <li>second</li>
                                <li>third</li>
                            </ul>
                        </div>
                        <code>lower-alpha;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-list">
                            <ul style={{ listStyle: 'lower-roman' }}>
                                <li>first</li>
                                <li>second</li>
                                <li>third</li>
                            </ul>
                        </div>
                        <code>lower-roman;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-list">
                            <ul style={{ listStyle: 'upper-alpha' }}>
                                <li>first</li>
                                <li>second</li>
                                <li>third</li>
                            </ul>
                        </div>
                        <code>upper-alpha;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-list">
                            <ul style={{ listStyle: 'upper-roman' }}>
                                <li>first</li>
                                <li>second</li>
                                <li>third</li>
                            </ul>
                        </div>
                        <code>upper-roman;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-list">
                            <ul style={{ listStyle: 'inside lower-roman' }}>
                                <li>first</li>
                                <li>second</li>
                                <li>third</li>
                            </ul>
                        </div>
                        <code>inside lower-roman;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-list">
                            <ul style={{ listStyle: 'outside lower-roman' }}>
                                <li>first</li>
                                <li>second</li>
                                <li>third</li>
                            </ul>
                        </div>
                        <code>outside lower-roman;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-list">
                            <ul style={{ listStyle: 'url( \'https://mdn.mozillademos.org/files/11981/starsolid.gif\')' }}>
                                <li>first</li>
                                <li>second</li>
                                <li>third</li>
                            </ul>
                        </div>
                        <code>url('...');</code>
                    </div>
                </div>
            </div>
        </section>

        <section id="css-box">
            <h2>Box model</h2>
            <div className="snippet span-3" id="css-box-display">
                <h2 className="code">display:</h2>
                <h3>Basic display modes</h3>
                <div className="codeblock">
                    <div className="text-example">
                        <div className="box placeholder"></div>
                        <div className="box none">x</div>
                        <div className="box none">y</div>
                        <div className="box none">z</div>
                        <div className="box placeholder"></div>
                    </div>
                    <code>none;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example">
                        <div className="box placeholder"></div>
                        <div className="box block">x</div>
                        <div className="box block">y</div>
                        <div className="box block">z</div>
                        <div className="box placeholder"></div>
                    </div>
                    <code>block;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example">
                        <div className="box placeholder"></div>
                        <div className="box inline-block">x</div>
                        <div className="box inline-block">y</div>
                        <div className="box inline-block">z</div>
                        <div className="box placeholder"></div>
                    </div>
                    <code>inline-block;</code>
                </div>
                <div className="codeblock">
                    <div className="text-example">
                        <div className="box placeholder"></div>
                        <div className="box inline">x</div>
                        <div className="box inline">y</div>
                        <div className="box inline">z</div>
                        <div className="box placeholder"></div>
                    </div>
                    <code>inline;</code>
                    <p className="tooltip">Inline elements have no padding or margin.</p>
                </div>
            </div>
            <div className="snippet span-3" id="css-box-sizing">
                <h2 className="code">box-sizing:</h2>
                <div className="codeblock">
                    <div className="ex-box-sizing">
                        <div className="margin-box">
                            <code>margin</code>
                            <div className="border-box">
                                <code>border</code>
                                <div className="padding-box">
                                    <code>padding</code>
                                    <div className="content-box highlight-border">
                                        <code>content</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <code>content-box;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-box-sizing">
                        <div className="margin-box">
                            <code>margin</code>
                            <div className="border-box highlight-border">
                                <code>border</code>
                                <div className="padding-box">
                                    <code>padding</code>
                                    <div className="content-box">
                                        <code>content</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <code>border-box;</code>
                </div>
            </div>
            <div className="snippet" id="css-width">
                <h2 className="code">width:</h2>
                <h3>%-widths are relative to parent entity</h3>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="bar" style={{ width: '100px' }}></div>
                            <code>100px;</code>
                        </div>
                        <div className="codeblock">
                            <div className="bar" style={{ width: '50px' }}></div>
                            <code>50px;</code>
                        </div>
                        <div className="codeblock">
                            <div className="bar" style={{ width: '20px' }}></div>
                            <code>20px;</code>
                        </div>
                        <div className="codeblock">
                            <div className="bar" style={{ width: '8px' }}></div>
                            <code>8px;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="bar" style={{ width: '10em' }}></div>
                            <code>10em;</code>
                        </div>
                        <div className="codeblock">
                            <div className="bar" style={{ width: '4em' }}></div>
                            <code>4em;</code>
                        </div>
                        <div className="codeblock">
                            <div className="bar" style={{ width: '1em' }}></div>
                            <code>1em;</code>
                        </div>
                        <div className="codeblock">
                            <div className="bar" style={{ width: '0.5em' }}></div>
                            <code>0.5em;</code>
                        </div>
                    </div>
                    
                    <div className="column" style={{ width: '10em' }}>
                        <div className="codeblock">
                            <div className="bar" style={{ width: '100%' }}></div>
                            <code>100%;</code>
                        </div>
                        <div className="codeblock">
                            <div className="bar" style={{ width: '40%' }}></div>
                            <code>40%;</code>
                        </div>
                        <div className="codeblock">
                            <div className="bar" style={{ width: '20%' }}></div>
                            <code>20%;</code>
                        </div>
                        <div className="codeblock">
                            <div className="bar" style={{ width: '10%' }}></div>
                            <code>10%;</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet span-4">
                <h2 className="code">height:</h2>
                <h3>%-heights are tricky; use Flexbox</h3>
                <div className="flex-column">
                    <div className="ex-css-height">
                        <div className="codeblock">
                            <div className="bar vertical" style={{ height: '100px' }}></div>
                            <code>100px;</code>
                        </div>
                        <div className="codeblock">
                            <div className="bar vertical" style={{ height: '50px' }}></div>
                            <code>50px;</code>
                        </div>
                        <div className="codeblock">
                            <div className="bar vertical" style={{ height: '20px' }}></div>
                            <code>20px;</code>
                        </div>
                        <div className="codeblock">
                            <div className="bar vertical" style={{ height: '8px' }}></div>
                            <code>8px;</code>
                        </div>
                    </div>
                    <div className="ex-css-height">
                        <div className="codeblock">
                            <div className="bar vertical" style={{ height: '10em' }}></div>
                            <code>10em; </code>
                        </div>
                        <div className="codeblock">
                            <div className="bar vertical" style={{ height: '4em' }}></div>
                            <code>4em;</code>
                        </div>
                        <div className="codeblock">
                            <div className="bar vertical" style={{ height: '1em' }}></div>
                            <code>1em;</code>
                        </div>
                        <div className="codeblock">
                            <div className="bar vertical" style={{ height: '0.5em' }}></div>
                            <code>0.5em;</code>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className="snippet" id="css-padding">
                <h2 className="code">padding:</h2>
                <div className="grid col-3 center">
                    <div className="codeblock">
                        <div className="box ex-padding" style={{ padding: '4px' }}>
                            <div className="box absolute" style={{ top: '4px', left: '4px' }}></div>
                        </div>
                        <code>4px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="box ex-padding" style={{ padding: '10px' }}>
                            <div className="box absolute" style={{ top: '10px', left: '10px' }}></div>
                        </div>
                        <code>10px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="box ex-padding" style={{ padding: '20px' }}>
                            <div className="box absolute" style={{ top: '20px', left: '20px' }}></div>
                        </div>
                        <code>20px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="box ex-padding" style={{ padding: '4px 0' }}>
                            <div className="box absolute" style={{ top: '4px', left: '0' }}></div>
                        </div>
                        <code>4px 0;</code>
                    </div>
                    <div className="codeblock">
                        <div className="box ex-padding" style={{ padding: '10px 0' }}>
                            <div className="box absolute" style={{ top: '10px', left: '0px' }}></div>
                        </div>
                        <code>10px 0;</code>
                    </div>
                    <div className="codeblock">
                        <div className="box ex-padding" style={{ padding: '20px 0' }}>
                            <div className="box absolute" style={{ top: '20px', left: '0px' }}></div>
                        </div>
                        <code>20px 0;</code>
                    </div>
                    <div className="codeblock">
                        <div className="box ex-padding" style={{ padding: '0 4px' }}>
                            <div className="box absolute" style={{ top: '0', left: '4px' }}></div>
                        </div>
                        <code>0 4px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="box ex-padding" style={{ padding: '0 10px' }}>
                            <div className="box absolute" style={{ top: '0', left: '10px' }}></div>
                        </div>
                        <code>0 10px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="box ex-padding" style={{ padding: '0 20px' }}>
                            <div className="box absolute" style={{ top: '0', left: '20px' }}></div>
                        </div>
                        <code>0 20px;</code>
                    </div>
                </div>
            </div>
            <div className="snippet span-5">
                <h2>Other padding</h2>
                <div className="flex-column">
                    <div className="codeblock">
                        <code>padding-top: 20px;</code>
                    </div>
                    <div className="flex-column">
                        <div className="box ex-padding" style={{ paddingTop: '20px' }}>
                            <div className="box absolute" style={{ top: '20px', left: '0' }}></div>
                        </div>
                        <div className="flex-row">
                            <div className="codeblock">
                                <code>padding-left: <br />20px;</code>
                            </div>
                            <div className="box ex-padding" style={{ paddingLeft: '20px' }}>
                                <div className="box absolute" style={{ top: '0', left: '20px' }}></div>
                            </div>
                            <div className="box invisible"></div>
                            <div className="box ex-padding" style={{ paddingRight: '20px' }}>
                                <div className="box absolute" style={{ top: '0', right: '20px' }}></div>
                            </div>
                            <div className="codeblock">
                                <code>padding-right:<br />20px;</code>
                            </div>
                        </div>
                        <div className="box ex-padding" style={{ paddingBottom: '20px' }}>
                            <div className="box absolute" style={{ bottom: '20px', left: '0' }}></div>
                        </div>
                    </div>
                    <div className="codeblock">
                        <code>padding-bottom: 20px;</code>
                    </div>
                </div>
            </div>
            <div className="snippet" id="css-margin">
                <h2 className="code">margin:</h2>
                <h3>Adjacent top and bottom margins may
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">collapse.</a>
                </h3>
                <div className="callout">
                    <div className="ex-margin" style={{ position: 'relative', top: '12px' }}>
                        <div className="box" style={{ padding: '0', margin: '10px' }}></div>
                    </div>
                    
                    <div className="ex-margin">
                        <div className="box" style={{ padding: '0', margin: '20px' }}></div>
                    </div>
                </div>
                <div className="grid col-3 center">
                    <div className="codeblock">
                        <div className="ex-margin">
                            <div className="box" style={{ margin: '4px' }}></div>
                        </div>
                        <code>4px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-margin">
                            <div className="box" style={{ margin: '10px' }}></div>
                        </div>
                        <code>10px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-margin">
                            <div className="box" style={{ margin: '20px' }}></div>
                        </div>
                        <code>20px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-margin">
                            <div className="box" style={{ margin: '4px 0' }}></div>
                        </div>
                        <code>4px 0;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-margin">
                            <div className="box" style={{ margin: '10px 0' }}></div>
                        </div>
                        <code>10px 0;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-margin">
                            <div className="box" style={{ margin: '20px 0' }}></div>
                        </div>
                        <code>20px 0;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-margin">
                            <div className="box" style={{ margin: '0 4px' }}></div>
                        </div>
                        <code>0 4px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-margin">
                            <div className="box" style={{ margin: '0 10px' }}></div>
                        </div>
                        <code>0 10px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-margin">
                            <div className="box" style={{ margin: '0 20px' }}></div>
                        </div>
                        <code>0 20px;</code>
                    </div>
                </div>
            </div>
            <div className="snippet span-5">
                <h2>Other margins</h2>
                <div className="flex-row">
                    <div className="codeblock" title="Horizontal centering for block elements">
                        <div className="ex-margin" style={{ width: '300px' }}>
                            <div className="box bigger" style={{ display: 'block', width: '1.5em', margin: '0 auto' }}></div>
                        </div>
                        <code>margin: 0 auto;</code>
                        <p className="tooltip">Center block elements</p>
                    </div>
                </div>
                <div className="flex-column">
                    <div className="codeblock">
                        <code>margin-top: 20px;</code>
                    </div>
                    <div className="ex-margin">
                        <div className="box nomargin" style={{ marginTop: '20px' }}></div>
                    </div>
                    <div className="flex-row">
                        <div className="codeblock">
                            <code>margin-left: <br />20px;</code>
                        </div>
                        <div className="ex-margin">
                            <div className="box nomargin" style={{ marginLeft: '20px' }}></div>
                        </div>
                        <div className="box invisible"></div>
                        <div className="ex-margin">
                            <div className="box nomargin" style={{ marginRight: '20px' }}></div>
                        </div>
                        <div className="codeblock">
                            <code>margin-right:<br />20px;</code>
                        </div>
                    </div>
                    <div className="ex-margin">
                        <div className="box nomargin" style={{ marginBottom: '20px' }}></div>
                    </div>
                    <div className="codeblock">
                        <code>margin-bottom: 20px;</code>
                    </div>

                </div>
            </div>
            <div className="snippet span-4">
                <h2 className="code">overflow:</h2>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-overflow-box scroll">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam leo fringilla hendrerit efficitur. Maecenas bibendum
                                iaculis purus eget placerat. Nunc aliquet tristique mauris, elementum suscipit ante congue
                                sit amet.
                            </div>
                            <code>scroll;</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-overflow-box hidden">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam leo fringilla hendrerit efficitur. Maecenas bibendum
                                iaculis purus eget placerat. Nunc aliquet tristique mauris, elementum suscipit ante congue
                                sit amet.
                            </div>
                            <code>hidden;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-overflow-box visible">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam leo fringilla hendrerit efficitur. Maecenas bibendum
                                iaculis purus eget placerat. Nunc aliquet tristique mauris, elementum suscipit ante congue
                                sit amet.
                            </div>
                            <code>visible;</code>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="css-positioning">
            <h2>Positioning</h2>
            <div className="snippet">
                <h2 className="code">position: static;</h2>
                <div className="codeblock">
                    <div className="box placeholder"></div>
                    <div className="box" style={{ position: 'static' }}></div>
                    <div className="box placeholder"></div>
                </div>
            </div>
            <div className="snippet span-4">
                <h2 className="code">position: relative;</h2>
                <div className="row">
                    <div className="codeblock">
                        <div className="box placeholder"></div>
                        <div className="box" style={{ position: 'relative', top: '10px' }}></div>
                        <div className="box placeholder"></div>
                        <code className="nudge-top">top: 10px;</code>
                    </div>
                    <div className="codeblock nudge-top">
                        <div className="box placeholder"></div>
                        <div className="box" style={{ position: 'relative', bottom: '10px' }}></div>
                        <div className="box placeholder"></div>
                        <code>bottom: 10px;</code>
                    </div>
                </div>
                <div className="row">
                    <div className="codeblock">
                        <div className="box placeholder"></div>
                        <div className="box" style={{ position: 'relative', left: '10px' }}></div>
                        <div className="box placeholder"></div>
                        <code>left: 10px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="box placeholder"></div>
                        <div className="box" style={{ position: 'relative', right: '10px' }}></div>
                        <div className="box placeholder"></div>
                        <code>right: 10px;</code>
                    </div>
                </div>
            </div>
            <div className="snippet span-5 span-rows-2">
                <h2 className="code">position: absolute;</h2>
                <h3>Requires positioned parent element</h3>
                <div className="callout">
                    <code>   (relative | absolute | fixed) </code>
                    <code>                                &#8600;</code>
                    <div className="ex-positioned">
                        <div className="box biggest placeholder wider">
                            <code className="subtle">static<br />position</code>
                        </div>
                        <div className="box" style={{ position: 'absolute', backgroundColor: 'var(--bg-color-semitransparent)' }}>
                            <code className="subtle" style={{ color: '#eee', padding: '4px 10px' }}>Absolute<br />position</code>
                        </div>
                        <div className="box biggest placeholder wider">
                            <code className="subtle">static<br />position</code>
                        </div>
                        <div className="box biggest placeholder wider">
                            <code className="subtle">static<br />position</code>
                        </div>
                    </div>
                </div>
                <div className="grid col-2">
                    <div className="codeblock">
                        <div className="ex-positioned">
                            <div className="box biggest placeholder"></div>
                            <div className="box" style={{ position: 'absolute', left: '0', top: '0' }}></div>
                            <div className="box biggest placeholder"></div>
                            <div className="box biggest placeholder"></div>
                        </div>
                        <code>left:0; top:0;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-positioned">
                            <div className="box biggest placeholder"></div>
                            <div className="box" style={{ position: 'absolute', right: '0', top: '0' }}></div>
                            <div className="box biggest placeholder"></div>
                            <div className="box biggest placeholder"></div>
                        </div>
                        <code>right:0; top:0;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-positioned">
                            <div className="box biggest placeholder"></div>
                            <div className="box" style={{ position: 'absolute', left: '0', bottom: '0' }}></div>
                            <div className="box biggest placeholder"></div>
                            <div className="box biggest placeholder"></div>
                        </div>
                        <code>left:0; bottom:0;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-positioned">
                            <div className="box biggest placeholder"></div>
                            <div className="box" style={{ position: 'absolute', right: '0', bottom: '0' }}></div>
                            <div className="box biggest placeholder"></div>
                            <div className="box biggest placeholder"></div>
                        </div>
                        <code>right:0; bottom:0;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-positioned">
                            <div className="box biggest placeholder"></div>
                            <div className="box" style={{ position: 'absolute', left: '0', right: '0' }}></div>
                            <div className="box biggest placeholder"></div>
                            <div className="box biggest placeholder"></div>
                        </div>
                        <code>left:0; right:0;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-positioned">
                            <div className="box biggest placeholder"></div>
                            <div className="box" style={{ position: 'absolute', top: '0', bottom: '0' }}></div>
                            <div className="box biggest placeholder"></div>
                            <div className="box biggest placeholder"></div>
                        </div>
                        <code>top:0; bottom:0;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-positioned">
                            <div className="box biggest placeholder"></div>
                            <div className="box" style={{ position: 'absolute', left: '0', right: '0', top: '0', bottom: '0' }}></div>
                            <div className="box biggest placeholder"></div>
                            <div className="box biggest placeholder"></div>
                        </div>
                        <code>left:0; right:0;</code>
                        <code>top:0; bottom:0;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-positioned">
                            <div className="box biggest placeholder"></div>
                            <div className="box" style={{ position: 'absolute', left: '10%', right: '10%', top: '10%', bottom: '10%' }}></div>
                            <div className="box biggest placeholder"></div>
                            <div className="box biggest placeholder"></div>
                        </div>
                        <code>left:10%; right:10%;</code>
                        <code>top:10%; bottom:10%;</code>
                    </div>
                </div>
            </div>
            <div className="snippet span-5">
                <h2 className="code">position: fixed;</h2>
                <h3>Same rules as absolute positioning, but fixed relative to viewport.</h3>
                <code>      viewport</code>
                <code>            &#8600;</code>
                <code></code>
                <iframe style={{ height: '65%', width: '90%' }} id="css-positioning-fixed" src="fixed-position-example.html"></iframe>
            </div>
            <div className="snippet span-4">
                <h2 className="code">float:</h2>
                <div className="codeblock">
                    <div className="ex-float">
                        <div className="box placeholder"></div>
                        <div className="box placeholder"></div>
                        <div className="box placeholder"></div>
                        <div className="box float-left" style={{ float: 'left' }}></div>
                    </div>
                    <code>left;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-float">
                        <div className="box placeholder"></div>
                        <div className="box placeholder"></div>
                        <div className="box placeholder"></div>
                        <div className="box" style={{ float: 'right' }}></div>
                    </div>
                    <code>right;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-float">
                        <div className="box biggest" style={{ float: 'left' }}></div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam leo fringilla hendrerit efficitur.
                    </div>
                    <code>left;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-float">
                        <div className="box biggest" style={{ float: 'right' }}></div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam leo fringilla hendrerit efficitur.
                    </div>
                    <code>right;</code>
                </div>
            </div>
            <div className="snippet span-6">
                <h2 className="code">clear:</h2>
                <h3>Allow an element to avoid being adjacent to a floated element.</h3>
                <div className="codeblock">
                    <div className="ex-clear-row">
                        <div className="ex-clear">
                            <div className="box to-clear" style={{ float: 'left' }}>float:
                                <br />left</div>
                            <p style={{ clear: 'left' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam leo fringilla hendrerit efficitur.
                            </p>
                        </div>
                        <div className="ex-clear">
                            <div className="box to-clear" style={{ float: 'right' }}>float:
                                <br />right</div>
                            <p style={{ clear: 'left' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam leo fringilla hendrerit efficitur.
                            </p>
                        </div>
                    </div>
                    <code>clear: left;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-clear-row">
                        <div className="ex-clear">
                            <div className="box to-clear" style={{ float: 'left' }}>float:
                                <br />left</div>
                            <p style={{ clear: 'right' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam leo fringilla hendrerit efficitur.
                            </p>
                        </div>
                        <div className="ex-clear">
                            <div className="box to-clear" style={{ float: 'right' }}>float:
                                <br />right</div>
                            <p style={{ clear: 'right' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam leo fringilla hendrerit efficitur.
                            </p>
                        </div>
                    </div>
                    <code>clear: right;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-clear-row">
                        <div className="ex-clear">
                            <div className="box to-clear" style={{ float: 'left' }}>float:
                                <br />left</div>
                            <p style={{ clear: 'both' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam leo fringilla hendrerit efficitur.
                            </p>
                        </div>
                        <div className="ex-clear">
                            <div className="box to-clear" style={{ float: 'right' }}>float:
                                <br />right</div>
                            <p style={{ clear: 'both' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam leo fringilla hendrerit efficitur.
                            </p>
                        </div>
                    </div>
                    <code>clear: both;</code>
                </div>
            </div>
            <div className="snippet span-2">
                <h2 className="code">z-index:</h2>
                <h3>For positioned elements only</h3>
                <div className="codeblock">
                    <div className="ex-zindex">
                        <div className="box box-zindex placeholder" style={{ zIndex: '20' }}>20</div>
                        <div className="box box-zindex" style={{ zIndex: '0' }}>0</div>
                    </div>
                    <code>0;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-zindex">
                        <div className="box box-zindex placeholder" style={{ zIndex: '20' }}>20</div>
                        <div className="box box-zindex" style={{ zIndex: '20' }}>20</div>
                    </div>
                    <code>20;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-zindex">
                        <div className="box box-zindex placeholder" style={{ zIndex: '20' }}>20</div>
                        <div className="box box-zindex" style={{ zIndex: '100' }}>100</div>
                    </div>
                    <code>100;</code>
                </div>
            </div>
        </section>
        

        <section id="css-flexbox-containers">
            <h2>Flexbox containers</h2>
            <div className="snippet">
                <h2 className="code">display:</h2>
                <h3>Flexbox container mode</h3>
                <div className="codeblock" title="A block using flexbox for child elements">
                    <div className="box placeholder"></div>
                    <div className="flex">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <div className="box placeholder"></div>
                    <code>flex;</code>
                </div>
                <div className="codeblock" title="An inline block using flexbox for child elements">
                    <div className="box placeholder"></div>
                    <div className="flex inline">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <div className="box placeholder"></div>
                    <code>inline-flex;</code>
                </div>
            </div>
            <div className="snippet span-6">
                <h2 className="code">flex-flow:</h2>
                <div className="container">
                    <h3>Flex direction and wrap</h3>
                    <div className="codeblock">
                        <code>&lt;flex-direction&gt; &lt;flex-wrap&gt;;</code>
                    </div>
                    <div className="flex ex-flow">
                        <div className="snippet">
                            <h2 className="code">flex-direction: </h2>
                            <h3>Direction of main axis</h3>
                            <div className="grid col-2">
                                <div className="codeblock">
                                    <div className="flex" style={{ flexDirection: 'row' }}>
                                        <div className="box">1</div>
                                        <div className="box">2</div>
                                        <div className="box">3</div>
                                    </div>
                                    <code className="center">row;</code>
                                </div>
                                <div className="codeblock">
                                    <div className="flex" style={{ flexDirection: 'row-reverse' }}>
                                        <div className="box">1</div>
                                        <div className="box">2</div>
                                        <div className="box">3</div>
                                    </div>
                                    <code>row-reverse;</code>
                                </div>
                                <div className="codeblock">
                                    <div className="flex" style={{ flexDirection: 'column' }}>
                                        <div className="box">1</div>
                                        <div className="box">2</div>
                                        <div className="box">3</div>
                                    </div>
                                    <code>column;</code>
                                </div>
                                <div className="codeblock">
                                    <div className="flex" style={{ flexDirection: 'column-reverse' }}>
                                        <div className="box">1</div>
                                        <div className="box">2</div>
                                        <div className="box">3</div>
                                    </div>
                                    <code>column-reverse;</code>
                                </div>
                            </div>
                        </div>
                        <div className="snippet">
                            <h2 className="code">flex-wrap:</h2>
                            <h3>Wrap items across lines</h3>
                            <div className="codeblock">
                                <div className="flex ex-wrap" style={{ flexWrap: 'wrap' }}>
                                    <div className="box">1</div>
                                    <div className="box">2</div>
                                    <div className="box">3</div>
                                    <div className="box">4</div>
                                    <div className="box">5</div>
                                    <div className="box">6</div>
                                    <div className="box">7</div>
                                    <div className="box">8</div>
                                    <div className="box">9</div>
                                    <div className="box">10</div>
                                </div>
                                <code>wrap;</code>
                            </div>
                            <div className="codeblock">
                                <div className="flex ex-wrap" style={{ flexWrap: 'nowrap', overflow: 'scroll' }}>
                                    <div className="box">1</div>
                                    <div className="box">2</div>
                                    <div className="box">3</div>
                                    <div className="box">4</div>
                                    <div className="box">5</div>
                                    <div className="box">6</div>
                                    <div className="box">7</div>
                                    <div className="box">8</div>
                                    <div className="box">9</div>
                                    <div className="box">10</div>
                                </div>
                                <code>nowrap;</code>
                            </div>
                            <div className="codeblock">
                                <div className="flex ex-wrap" style={{ flexWrap: 'wrap-reverse' }}>
                                    <div className="box">1</div>
                                    <div className="box">2</div>
                                    <div className="box">3</div>
                                    <div className="box">4</div>
                                    <div className="box">5</div>
                                    <div className="box">6</div>
                                    <div className="box">7</div>
                                    <div className="box">8</div>
                                    <div className="box">9</div>
                                    <div className="box">10</div>
                                </div>
                                <code>wrap-reverse;</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet">
                <h2 className="code">justify-content:</h2>
                <h3>Justification of items</h3>
                <div className="codeblock" title="Justify items at the start of the flexbox container along main axis">
                    <div className="flex" style={{ justifyContent: 'flex-start' }}>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <code>flex-start;</code>
                </div>
                <div className="codeblock" title="Justify items at the center of the flexbox container along main axis">
                    <div className="flex" style={{ justifyContent: 'center' }}>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <code>center;</code>
                </div>
                <div className="codeblock" title="Justify items at the end of the flexbox container along main axis">
                    <div className="flex" style={{ justifyContent: 'flex-end' }}>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <code>flex-end;</code>
                </div>
                <div className="codeblock" title="Justify items with equal space between items along main axis">
                    <div className="flex" style={{ justifyContent: 'space-between' }}>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <code>space-between;</code>
                </div>
                <div className="codeblock" title="Justify items with equal space on either side of each item along main axis">
                    <div className="flex" style={{ justifyContent: 'space-around' }}>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <code>space-around;</code>
                </div>
            </div>
            <div className="snippet span-6">
                <h2 className="code">align-items:</h2>
                <h3>Alignment on cross axis</h3>
                <div className="grid col-3">
                    <div className="codeblock">
                        <div className="flex ex-align-items" style={{ alignItems: 'flex-start' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>flex-start;</code>
                    </div>
                    <div className="codeblock">
                        <div className="flex ex-align-items" style={{ alignItems: 'center' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>center;</code>
                    </div>
                    <div className="codeblock">
                        <div className="flex ex-align-items" style={{ alignItems: 'flex-end' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>flex-end;</code>
                    </div>
                    <div className="codeblock">
                        <div className="flex ex-align-items" style={{ alignItems: 'baseline' }}>
                            <div className="line"></div>
                            <div className="box">a</div>
                            <div className="box bigger">b</div>
                            <div className="box biggest">c</div>
                        </div>
                        <code>baseline;</code>
                    </div>
                    <div className="codeblock">
                        <div className="flex ex-align-items" style={{ alignItems: 'stretch' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>stretch;</code>
                    </div>
                </div>
            </div>
            <div className="snippet span-5">
                <h2 className="code">align-content:</h2>
                <h3>Alignment of wrapped lines</h3>
                <div className="grid col-3">
                    <div className="codeblock">
                        <div className="flex ex-align-content" style={{ alignContent: 'flex-start' }}>
                            <div className="box flatter fullwidth"></div>
                            <div className="box flatter fullwidth"></div>
                            <div className="box flatter fullwidth"></div>
                        </div>
                        <code>flex-start;</code>
                    </div>
                    <div className="codeblock">
                        <div className="flex ex-align-content" style={{ alignContent: 'center' }}>
                            <div className="box flatter fullwidth"></div>
                            <div className="box flatter fullwidth"></div>
                            <div className="box flatter fullwidth"></div>
                        </div>
                        <code>center;</code>
                    </div>
                    <div className="codeblock">
                        <div className="flex ex-align-content" style={{ alignContent: 'flex-end' }}>
                            <div className="box flatter fullwidth"></div>
                            <div className="box flatter fullwidth"></div>
                            <div className="box flatter fullwidth"></div>
                        </div>
                        <code>flex-end;</code>
                    </div>
                    <div className="codeblock">
                        <div className="flex ex-align-content" style={{ alignContent: 'space-between' }}>
                            <div className="box flatter fullwidth"></div>
                            <div className="box flatter fullwidth"></div>
                            <div className="box flatter fullwidth"></div>
                        </div>
                        <code>space-between;</code>
                    </div>
                    <div className="codeblock">
                        <div className="flex ex-align-content" style={{ alignContent: 'space-around' }}>
                            <div className="box flatter fullwidth"></div>
                            <div className="box flatter fullwidth"></div>
                            <div className="box flatter fullwidth"></div>
                        </div>
                        <code>space-around;</code>
                    </div>
                    <div className="codeblock">
                        <div className="flex ex-align-content" style={{ alignContent: 'stretch' }}>
                            <div className="box flatter fullwidth"></div>
                            <div className="box flatter fullwidth"></div>
                            <div className="box flatter fullwidth"></div>
                        </div>
                        <code>stretch;</code>
                    </div>
                </div>
            </div>
        </section>
        

        <section id="css-flexbox-items">
            <h2>Flexbox items</h2>
            <div className="snippet span-8">
                <h2 className="code">flex:</h2>
                <div className="container">
                    <h3>Combine grow, shrink, basis</h3>
                    <div className="codeblock">
                        <code>&lt;flex-grow&gt; &lt;flex-shrink&gt;? || &lt;flex-basis&gt;;</code>
                    </div>
                    <div className="grid col-3">
                        <div className="snippet span-1">
                            <h2 className="code">flex-grow:</h2>
                            <h3>Item growth multiplier</h3>
                            <div className="codeblock">
                                <div className="flex">
                                    <div className="box" style={{ flexGrow: '0' }}>0</div>
                                    <div className="box" style={{ flexGrow: '0' }}>0</div>
                                </div>
                                <code>0;</code>
                                <p className="tooltip">no grow</p>
                            </div>
                            <div className="codeblock">
                                <div className="flex">
                                    <div className="box" style={{ flexGrow: '1' }}>1</div>
                                    <div className="box" style={{ flexGrow: '1' }}>1</div>
                                </div>
                                <code>1;</code>
                            </div>
                            <div className="codeblock">
                                <div className="flex">
                                    <div className="box" style={{ flexGrow: '10' }}>10</div>
                                    <div className="box placeholder" style={{ flexGrow: '20' }}>20</div>
                                </div>
                                <code>10;</code>
                            </div>
                            <div className="codeblock">
                                <div className="flex">
                                    <div className="box" style={{ flexGrow: '99' }}>99</div>
                                    <div className="box placeholder" style={{ flexGrow: '20' }}>20</div>
                                </div>
                                <code>99;</code>
                            </div>
                        </div>
                        <div className="snippet span-1">
                            <h2 className="code">flex-shrink:</h2>
                            <h3>Item shrink multiplier</h3>
                            <div className="codeblock">
                                <div className="flex">
                                    <div className="box fullwidth" style={{ flexShrink: '0' }}>0</div>
                                    <div className="box fullwidth" style={{ flexShrink: '0' }}>0</div>
                                </div>
                                <code>0;</code>
                                <p className="tooltip">no shrink</p>
                            </div>
                            <div className="codeblock">
                                <div className="flex">
                                    <div className="box fullwidth" style={{ flexShrink: '1' }}>1</div>
                                    <div className="box fullwidth" style={{ flexShrink: '1' }}>1</div>
                                </div>
                                <code>1;</code>
                            </div>
                            <div className="codeblock">
                                <div className="flex">
                                    <div className="box fullwidth" style={{ flexShrink: '10' }}>10</div>
                                    <div className="box fullwidth placeholder" style={{ flexShrink: '20' }}>20</div>
                                </div>
                                <code>10;</code>
                            </div>
                            <div className="codeblock">
                                <div className="flex">
                                    <div className="box fullwidth" style={{ flexShrink: '99' }}>99</div>
                                    <div className="box fullwidth placeholder" style={{ flexShrink: '20' }}>20</div>
                                </div>
                                <code>99;</code>
                            </div>
                        </div>
                        <div className="snippet span-1" title="Flex item 's initial size along main axis">
                            <h2 className="code">flex-basis:</h2>
                            <h3>Size of a flex item as the basis for grow and shrink factors.</h3>
                            <div className="codeblock">
                                <div className="flex">
                                    <div className="box" style={{ flexBasis: 'content' }}>abc</div>
                                </div>
                                <code>content;</code>
                            </div>
                            <div className="codeblock">
                                <div className="flex">
                                    <div className="box" style={{ flexBasis: '50px' }}>abc</div>
                                </div>
                                <code>50px;</code>
                            </div>
                            <div className="codeblock">
                                <div className="flex">
                                    <div className="box" style={{ flexBasis: '50%' }}>abc</div>
                                </div>
                                <code>50%;</code>
                            </div>
                            <div className="codeblock">
                                <div className="flex">
                                    <div className="box" style={{ flexBasis: '100%' }}>abc</div>
                                </div>
                                <code>100%;</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet span-5">
                <h2 className="code">align-self:</h2>
                <h3>Item-specific cross axis alignment</h3>
                <div className="grid col-3">
                    <div className="codeblock">
                        <div className="flex ex-align-self">
                            <div className="box placeholder"></div>
                            <div className="box" style={{ alignSelf: 'flex-start' }}></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>flex-start;</code>
                    </div>
                    <div className="codeblock">
                        <div className="flex ex-align-self">
                            <div className="box placeholder"></div>
                            <div className="box" style={{ alignSelf: 'center' }}></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>center;</code>
                    </div>
                    <div className="codeblock">
                        <div className="flex ex-align-self">
                            <div className="box placeholder"></div>
                            <div className="box" style={{ alignSelf: 'flex-end' }}></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>flex-end;</code>
                    </div>
                    <div className="codeblock">
                        <div className="flex ex-align-self">
                            <div className="box placeholder">a</div>
                            <div className="line-short" style={{ alignSelf: 'baseline' }}></div>
                            <div className="box" style={{ alignSelf: 'baseline' }}>b</div>
                            <div className="box bigger" style={{ alignSelf: 'baseline' }}>c</div>
                        </div>
                        <code>baseline;</code>
                    </div>
                    <div className="codeblock">
                        <div className="flex ex-align-self">
                            <div className="box placeholder"></div>
                            <div className="box" style={{ alignSelf: 'stretch' }}></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>stretch;</code>
                    </div>
                </div>
            </div>
            <div className="snippet" title="Higher order items appear after lower order items. Samer order items appear in source order. Default 0.">
                <h2 className="code">order:</h2>
                <h3>Display order of an item</h3>
                <div className="codeblock">
                    <code>&lt;div class=&quot;first&quot;&gt;1&lt;/div&gt;</code>
                    <code>&lt;div class=&quot;second&quot;&gt;2&lt;/div&gt;</code>
                    <code>&lt;div class=&quot;third&quot;&gt;3&lt;/div&gt;</code>
                </div>
                <div className="codeblock">
                    <div className="flex">
                        <div className="box first">1</div>
                        <div className="box second">2</div>
                        <div className="box third">3</div>
                    </div>
                    <code>.first, .second &#123;</code>
                    <code>  order: 1;</code>
                    <code>&#125;</code>
                </div>
            </div>
        </section>
        

        <section className="css-grid-containers">
            <h2>Grid containers</h2>
            <h3>Experimental. Limited support in Safari, Edge.</h3>
            <div className="snippet" id="css-grid-display">
                <h2 className="code">display:</h2>
                <h3>Grid container mode</h3>
                <div className="codeblock">
                    <div className="box placeholder"></div>
                    <div className="ex-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <div className="box placeholder"></div>
                    <code>grid;</code>
                </div>
                <div className="codeblock">
                    <div className="box placeholder"></div>
                    <div className="ex-grid" style={{ display: 'inline-grid', gridTemplateColumns: '1fr 1fr' }}>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <div className="box placeholder"></div>
                    <code>inline-grid;</code>
                </div>
            </div>
            <div className="snippet span-4" id="css-grid-template-columns">
                <h2 className="code">grid-template-columns:</h2>
                <div className="codeblock">
                    <div className="ex-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <code>1fr 1fr;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-grid" style={{ gridTemplateColumns: '1fr 2fr' }}>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <code>1fr 2fr;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-grid" style={{ gridTemplateColumns: '1fr 2fr 1fr' }}>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <code>1fr 2fr 1fr;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-grid" style={{ gridTemplateColumns: '50% 1fr 2fr' }}>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <code>50% 1fr 2fr;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-grid" style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <code>repeat(12, 1fr);</code>
                </div>
                <div className="codeblock">
                    <div className="ex-grid" style={{ gridTemplateColumns: 'auto auto' }}>
                        <div className="box">fit</div>
                        <div className="box">long content</div>
                    </div>
                    <code>auto auto;</code>
                </div>
            </div>
            <div className="snippet span-4" id="css-grid-template-rows">
                <h2 className="code">grid-template-rows:</h2>
                <div className="grid-template-rows-container">
                    <div className="codeblock">
                        <div className="ex-grid inline" style={{ gridTemplateRows: '1fr 1fr' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>1fr 1fr;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid inline" style={{ gridTemplateRows: '1fr 2fr' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>1fr 2fr;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid inline" style={{ gridTemplateRows: '1fr 2fr 1fr' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>1fr 2fr 1fr;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid inline" style={{ gridTemplateRows: 'repeat(4, 1fr)' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>repeat(4, 1fr);</code>
                    </div>
                </div>
            </div>
            <div className="snippet span-4" id="css-grid-gap">
                <h2 className="code">grid-gap:</h2>
                <div className="callout">
                    <div className="codeblock">
                        <div className="ex-grid grid-gap" style={{ gridGap: '0' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>0;</code>
                    </div>
                </div>
                <div className="grid-gap-container">
                    <div className="codeblock">
                        <div className="ex-grid grid-gap" style={{ gridGap: '2px' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>2px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-gap" style={{ gridGap: '4px' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>4px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-gap" style={{ gridGap: '8px' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>8px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-gap" style={{ gridGap: '0 2px' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>0 2px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-gap" style={{ gridGap: '0 4px' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>0 4px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-gap" style={{ gridGap: '0 8px' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>0 8px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-gap" style={{ gridGap: '2px 0' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>2px 0;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-gap" style={{ gridGap: '4px 0' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>4px 0;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-gap" style={{ gridGap: '8px 0' }}>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        <code>8px 0;</code>
                    </div>
                </div>
            </div>
            <div className="snippet" id="css-grid-auto">
                <h2>Implicit row and column sizes</h2>
                <h3>Size implicit rows and columns</h3>
                <div className="codeblock">
                    <div className="ex-grid" style={{ display: 'inline-grid', gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: '100px' }}>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <code>grid-auto-rows: 100px;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-grid" style={{ gridAutoColumns: '100px' }}>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <code>grid-auto-columns: 100px;</code>
                </div>
            </div>
            <div className="snippet span-5" id="css-grid-template">
                <h2 className="code">grid-template:</h2>
                <h3>Use
                    <a href="#css-grid-area">grid-area</a> to refer to named areas.</h3>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-grid grid-template-area" style={{ gridTemplate: '\'nav nav nav \' 1fr \'left body right \' 3fr \'foot foot foot \' 1fr / 1fr 2fr 1fr' }}>
                                <div className="box" style={{ gridArea: 'nav' }}>nav</div>
                                <div className="box" style={{ gridArea: 'left' }}>left</div>
                                <div className="box" style={{ gridArea: 'body' }}>body</div>
                                <div className="box" style={{ gridArea: 'right' }}>right</div>
                                <div className="box" style={{ gridArea: 'foot' }}>foot</div>
                            </div>
                            <code> "nav  nav  nav"   1fr</code>
                            <code> "left body right" 3fr</code>
                            <code> "foot foot foot"  1fr</code>
                            <code>/ 1fr  2fr  1fr;</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-grid grid-template-area" style={{ gridTemplate: '\'nav nav \' 1fr \'side body \' 3fr / 1fr 2fr' }}>
                                <div className="box" style={{ gridArea: 'nav' }}>nav</div>
                                <div className="box" style={{ gridArea: 'side' }}>side</div>
                                <div className="box" style={{ gridArea: 'body' }}>body</div>
                            </div>
                            <code> "nav  nav " 1fr</code>
                            <code> "side body" 3fr</code>
                            <code>/ 1fr  2fr;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-grid grid-template-area" style={{ gridTemplate: '\'d1 d2 d3 \' 1fr \'d4 d5 d6 \' 1fr \'d7 d8 d9 \' 1fr \'. d0 . \' 1fr / 1fr 1fr 1fr', lineHeight: '2em' }}>
                                <div className="box" style={{ gridArea: 'd1' }}>1</div>
                                <div className="box" style={{ gridArea: 'd2' }}>2</div>
                                <div className="box" style={{ gridArea: 'd3' }}>3</div>
                                <div className="box" style={{ gridArea: 'd4' }}>4</div>
                                <div className="box" style={{ gridArea: 'd5' }}>5</div>
                                <div className="box" style={{ gridArea: 'd6' }}>6</div>
                                <div className="box" style={{ gridArea: 'd7' }}>7</div>
                                <div className="box" style={{ gridArea: 'd8' }}>8</div>
                                <div className="box" style={{ gridArea: 'd9' }}>9</div>
                                <div className="box" style={{ gridArea: 'd0' }}>0</div>
                            </div>
                            <code> "d1   d2   d3" 1fr</code>
                            <code> "d4   d5   d6" 1fr</code>
                            <code> "d7   d8   d9" 1fr</code>
                            <code> ".    d0    ." 1fr</code>
                            <code>/ 1fr  1fr  1fr;</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-grid grid-template-area" style={{ gridTemplate: '1fr 2fr / 1fr 2fr 1fr' }}>
                                <div className="box"></div>
                                <div className="box"></div>
                                <div className="box"></div>
                                <div className="box"></div>
                                <div className="box"></div>
                                <div className="box"></div>
                            </div>
                            <code>  1fr 2fr<br />/ 1fr 2fr 1fr;</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet span-5" id="css-grid-auto-flow">
                <h2 className="code">grid-auto-flow:</h2>
                <h3>Highlighted grid cell has grid position explicitly set.</h3>
                <div className="grid-auto-flow-container">
                    <div className="grid-heading"></div>
                    <div className="grid-heading">
                        <u>sparse</u>
                    </div>
                    <div className="grid-heading">
                        <u>dense</u>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-auto-flow" style={{ gridAutoFlow: 'row' }}>
                            <div className="box">1</div>
                            <div className="box">2</div>
                            <div className="box">3</div>
                            <div className="box">4</div>
                            <div className="box">5</div>
                            <div className="box">6</div>
                        </div>
                        <code>row;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-auto-flow" style={{ gridAutoFlow: 'row' }}>
                            <div className="box" style={{ gridColumn: '2/span 1' }}>1</div>
                            <div className="box">2</div>
                            <div className="box">3</div>
                            <div className="box">4</div>
                            <div className="box">5</div>
                            <div className="box">6</div>
                        </div>
                        <code>row;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-auto-flow" style={{ gridAutoFlow: 'row dense' }}>
                            <div className="box" style={{ gridColumn: '2/span 1' }}>1</div>
                            <div className="box">2</div>
                            <div className="box">3</div>
                            <div className="box">4</div>
                            <div className="box">5</div>
                            <div className="box">6</div>
                        </div>
                        <code>row dense;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-auto-flow" style={{ gridAutoFlow: 'column' }}>
                            <div className="box">1</div>
                            <div className="box">2</div>
                            <div className="box">3</div>
                            <div className="box">4</div>
                            <div className="box">5</div>
                            <div className="box">6</div>
                        </div>
                        <code>column;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-auto-flow" style={{ gridAutoFlow: 'column' }}>
                            <div className="box" style={{ gridRow: '2/span 1' }}>1</div>
                            <div className="box">2</div>
                            <div className="box">3</div>
                            <div className="box">4</div>
                            <div className="box">5</div>
                            <div className="box">6</div>
                        </div>
                        <code>column;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-auto-flow" style={{ gridAutoFlow: 'column dense' }}>
                            <div className="box" style={{ gridRow: '2/span 1' }}>1</div>
                            <div className="box">2</div>
                            <div className="box">3</div>
                            <div className="box">4</div>
                            <div className="box">5</div>
                            <div className="box">6</div>
                        </div>
                        <code>column dense;</code>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="css-grid-items">
            <h2>Grid items</h2>
            <div className="snippet span-5" id="css-grid-column">
                <h2 className="code">grid-column:</h2>
                <h3>Negative starts from opposing side (explicit grid only)</h3>
                <h3>
                    <code>grid-column: left / right</code>
                </h3>
                <div className="grid-column-container">
                    <div className="codeblock">
                        <div className="ex-grid grid-column">
                            <div className="box" style={{ gridColumn: '1/span 1' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>1/span 1;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-column">
                            <div className="box placeholder"></div>
                            <div className="box" style={{ gridColumn: '2/span 1' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>2/span 1;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-column">
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box" style={{ gridColumn: 'span 1/-1' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>span 1/-1;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-column">
                            <div className="box" style={{ gridColumn: '1/span 2' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>1/span 2;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-column">
                            <div className="box" style={{ gridColumn: '1/-1' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>1/-1;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-column">
                            <div className="box placeholder"></div>
                            <div className="box" style={{ gridColumn: 'span 2/-1' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>span 2/-1;</code>
                    </div>
                </div>
            </div>
            <div className="snippet span-5" id="css-grid-rows">
                <h2 className="code">grid-row:</h2>
                <h3>Negative starts from opposing side (explicit grid only)</h3>
                <h3>
                    <code>grid-row: top / bottom</code>
                </h3>
                <div className="grid-row-container">
                    <div className="codeblock">
                        <div className="ex-grid grid-row">
                            <div className="box" style={{ gridRow: '1/span 1' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>1/span 1;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-row">
                            <div className="box placeholder"></div>
                            <div className="box" style={{ gridRow: '2/span 1' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>2/span 1;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-row">
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box" style={{ gridRow: 'span 1/-1' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>span 1/-1;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-row">
                            <div className="box" style={{ gridRow: '1/span 2' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>1/span 2;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-row">
                            <div className="box" style={{ gridRow: '1/-1' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>1/-1;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-row">
                            <div className="box placeholder"></div>
                            <div className="box" style={{ gridRow: 'span 2/-1' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>span 2/-1;</code>
                    </div>
                </div>
            </div>
            <div className="snippet span-5" id="css-grid-area">
                <h2 className="code">grid-area:</h2>
                <h3>Negative starts from opposing side (explicit grid only)</h3>
                <h3>Can also name grid area, see
                    <a href="#css-grid-template">
                        <span className="code">css-grid-template</span>
                    </a>
                </h3>
                <h3>
                    <code>grid-area: top / left / bottom / right;</code>
                </h3>
                <div className="grid-area-container">
                    <div className="codeblock">
                        <div className="ex-grid grid-area">
                            <div className="box" style={{ gridArea: 'span 2' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>span 2;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-area">
                            <div className="box" style={{ gridArea: '1/span 2' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>1/span 2;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-area">
                            <div className="box" style={{ gridArea: '1/1/span 2/span 2' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>1/1/span 2/span 2;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-area">
                            <div className="box placeholder"></div>
                            <div className="box" style={{ gridArea: '1/span 2/span 2/-1' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>1/span 2/span 2/-1;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-area">
                            <div className="box placeholder"></div>
                            <div className="box" style={{ gridArea: 'span 2/1/-1/span 2' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>span 2/1/-1/span 2;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-grid grid-area">
                            <div className="box" style={{ gridArea: 'span 2/span 2/-1/-1' }}></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                            <div className="box placeholder"></div>
                        </div>
                        <code>span 2/span 2/-1/-1;</code>
                    </div>
                </div>
            </div>
        </section>
        

        <section id="css-table">
            <h2>Table display</h2>
            <div className="snippet span-4" id="css-table-display">
                <h2 className="code">display:</h2>
                <div className="grid col-2" style={{ alignItems: 'flex-end' }}>
                    <div className="codeblock">
                        <div className="ex-table">
                            <table className="highlight">
                                <tr>
                                    <td>A</td>
                                    <td>B</td>
                                </tr>
                                <tr>
                                    <td>C</td>
                                    <td>D</td>
                                </tr>
                            </table>
                        </div>
                        <code>table;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-table">
                            <table>
                                <tr className="highlight">
                                    <td>A1</td>
                                    <td>B1</td>
                                </tr>
                                <tr>
                                    <td>A2</td>
                                    <td>B2</td>
                                </tr>
                            </table>
                        </div>
                        <code>table-row;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-table">
                            <table>
                                <tr>
                                    <td className="cell highlight">A1</td>
                                    <td>B1</td>
                                </tr>
                                <tr>
                                    <td>A2</td>
                                    <td>B2</td>
                                </tr>
                            </table>
                        </div>
                        <code>table-cell;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-table">
                            abc
                            <table className="highlight" style={{ display: 'inline-table' }}>
                                <tr>
                                    <td>A1</td>
                                    <td>B1</td>
                                </tr>
                                <tr>
                                    <td>A2</td>
                                    <td>B2</td>
                                </tr>
                            </table>
                            def
                        </div>
                        <code>inline-table;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-table">
                            <table>
                                <tr>
                                    <td>A1</td>
                                    <td>B1</td>
                                </tr>
                                <tr>
                                    <td>A2</td>
                                    <td>B2</td>
                                </tr>
                                <caption className="caption highlight">A caption</caption>
                            </table>
                        </div>
                        <code>table-caption;</code>
                    </div>
                </div>
            </div>
            <div className="snippet span-6">
                <h2>Table borders</h2>
                <div className="grid col-2">
                    <div className="codeblock">
                        <div className="ex-table">
                            <table>
                                <tr>
                                    <td className="border">A1</td>
                                    <td className="border">B1</td>
                                </tr>
                                <tr>
                                    <td className="border">A2</td>
                                    <td className="border">B2</td>
                                </tr>
                            </table>
                        </div>
                        <code>td &#123;</code>
                        <code>  border: 2px solid black;</code>
                        <code>&#125;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-table">
                            <table className="border">
                                <tr>
                                    <td>A1</td>
                                    <td>B1</td>
                                </tr>
                                <tr>
                                    <td>A2</td>
                                    <td>B2</td>
                                </tr>
                            </table>
                        </div>
                        <code>table &#123;</code>
                        <code>  border: 2px solid black;</code>
                        <code>&#125;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-table">
                            <table>
                                <tr className="border">
                                    <td>A1</td>
                                    <td>B1</td>
                                </tr>
                                <tr className="border">
                                    <td>A2</td>
                                    <td>B2</td>
                                </tr>
                            </table>
                        </div>
                        <code>tr &#123;</code>
                        <code>  border: 2px solid black;</code>
                        <code>&#125;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-table">
                            <table className="column-borders">
                                <tr>
                                    <td>A1</td>
                                    <td>B1</td>
                                </tr>
                                <tr>
                                    <td>A2</td>
                                    <td>B2</td>
                                </tr>
                            </table>
                        </div>
                        <code>table td + td &#123;</code>
                        <code>  border-left: 2px solid black;</code>
                        <code>&#125;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-table">
                            <table className="row-borders">
                                <tr>
                                    <td>A1</td>
                                    <td>B1</td>
                                </tr>
                                <tr>
                                    <td>A2</td>
                                    <td>B2</td>
                                </tr>
                            </table>
                        </div>
                        <code>table tr + tr &#123;</code>
                        <code>  border-top: 2px solid black;</code>
                        <code>&#125;</code>
                    </div>
                </div>
            </div>
            <div className="snippet span-2">
                <h2 className="code">border-collapse:</h2>
                <div className="codeblock">
                    <div className="ex-table">
                        <table className="all-borders" style={{ borderCollapse: 'collapse' }}>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <code>collapse;</code>
                </div>
                <div className="codeblock">
                    <div className="ex-table">
                        <table className="all-borders" style={{ borderCollapse: 'separate', borderSpacing: '4px' }}>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <code>separate;</code>
                </div>
            </div>
            <div className="snippet">
                <h2 className="code">border-spacing:</h2>
                <h3>Requires border-collapse: separate</h3>
                <div className="l-table">
                    <div className="row">
                        <div className="codeblock">
                            <div className="ex-table">
                                <table className="all-borders" style={{ borderCollapse: 'separate', borderSpacing: '0px' }}>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>
                            <code>0px;</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-table">
                                <table className="all-borders" style={{ borderCollapse: 'separate', borderSpacing: '2px' }}>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>
                            <code>2px;</code>
                        </div>
                    </div>
                    <div className="row">
                        <div className="codeblock">
                            <div className="ex-table">
                                <table className="all-borders" style={{ borderCollapse: 'separate', borderSpacing: '4px' }}>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>
                            <code>4px;</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-table">
                                <table className="all-borders" style={{ borderCollapse: 'separate', borderSpacing: '8px' }}>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>
                            <code>8px;</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet">
                <h2 className="code">caption-side:</h2>
                <h3>Requires
                    <a href="#css-table-display">display: table-caption</a>
                </h3>
                <div className="row">
                    <div className=" codeblock">
                        <div className="ex-caption">
                            <table className="all-borders">
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <caption style={{ captionSide: 'top' }}>A caption</caption>
                                <caption style={{ captionSide: 'bottom', visibility: 'hidden' }}>empty</caption>
                            </table>
                        </div>
                        <code>top;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-caption">
                            <table className="all-borders">
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <caption style={{ captionSide: 'bottom' }}>A caption</caption>
                            </table>
                        </div>
                        <code>bottom;</code>
                    </div>
                </div>
            </div>
            <div className="snippet span-6" id="css-table-vertical-align">
                <h2 className="code">vertical-align:</h2>
                <h3>Works in
                    <a href="#css-table-display">table cells</a>. Also works for
                    <a href="#css-text-vertical-align">inline elements</a>.</h3>
                <div className="ex-vertical-align">
                    <div className="codeblock">
                        <div className="ex-table">
                            <table>
                                <td className="ex-vertical-align-cell" style={{ verticalAlign: 'top' }}>abc</td>
                            </table>
                        </div>
                        <code>top;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-table">
                            <table>
                                <td className="ex-vertical-align-cell" style={{ verticalAlign: 'middle' }}>abc</td>
                            </table>
                        </div>
                        <code>middle;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-table">
                            <table>
                                <td className="ex-vertical-align-cell" style={{ verticalAlign: 'bottom' }}>bottom</td>
                            </table>
                        </div>
                        <code>bottom;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-table">
                            <table>
                                <td className="ex-vertical-align-cell" style={{ verticalAlign: 'baseline' }}>
                                    ab
                                    <span style={{ fontSize: '36px' }}>cd</span>
                                </td>
                            </table>
                        </div>
                        <code>baseline;</code>
                    </div>
                </div>
            </div>
        </section>
        

        <section id="css-borders">
            <h2>Borders and Shadows</h2>
            <div className="snippet span-5">
                <h2 className="code">border:</h2>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="box bigger" style={{ border: 'none' }}></div>
                            <code>none;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box bigger" style={{ border: '2px solid black' }}></div>
                            <code>2px solid black;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box bigger" style={{ border: '2px dotted black' }}></div>
                            <code>2px dotted black;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box bigger" style={{ border: '2px dashed black' }}></div>
                            <code>2px dashed black;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ border: '8px double black' }}></div>
                            <code>8px double black;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="box" style={{ border: '8px groove lightgray' }}></div>
                            <code>8px groove lightgray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ border: '8px ridge lightgray' }}></div>
                            <code>8px ridge lightgray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ border: '8px inset lightgray' }}></div>
                            <code>8px inset lightgray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ border: '8px outset lightgray' }}></div>
                            <code>8px outset lightgray;</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet span-6">
                <h2>Border sides</h2>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="box ex-border-side single" style={{ borderTop: '3px solid black' }}></div>
                            <code>border-top: 3px solid black;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box ex-border-side single" style={{ borderRight: '3px solid black' }}></div>
                            <code>border-right: 3px solid black;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box ex-border-side single" style={{ borderBottom: '3px solid black' }}></div>
                            <code>border-bottom: 3px solid black;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box ex-border-side single" style={{ borderLeft: '3px solid black' }}></div>
                            <code>border-left: 3px solid black;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="box ex-border-side" style={{ borderTop: '0' }}></div>
                            <code>border-top: 0;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box ex-border-side" style={{ borderRight: '0' }}></div>
                            <code>border-right: 0;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box ex-border-side" style={{ borderBottom: '0' }}></div>
                            <code>border-bottom: 0;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box ex-border-side" style={{ borderLeft: '0' }}></div>
                            <code>border-left: 0;</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet span-2">
                <h2 className="code">border-width:</h2>
                <div className="codeblock">
                    <div className="box bigger ex-border-width" style={{ borderWidth: '1px' }}></div>
                    <code>1px;</code>
                </div>
                <div className="codeblock">
                    <div className="box bigger ex-border-width" style={{ borderWidth: '2px' }}></div>
                    <code>2px;</code>
                </div>
                <div className="codeblock">
                    <div className="box bigger ex-border-width" style={{ borderWidth: '3px' }}></div>
                    <code>3px;</code>
                </div>
                <div className="codeblock">
                    <div className="box bigger ex-border-width" style={{ borderWidth: '4px' }}></div>
                    <code>4px;</code>
                </div>
            </div>
            <div className="snippet span-2">
                <h2 className="code">border-radius:</h2>
                <div className="codeblock">
                    <div className="box bigger ex-border-radius" style={{ borderRadius: '4px' }}></div>
                    <code>4px;</code>
                </div>
                <div className="codeblock">
                    <div className="box bigger ex-border-radius" style={{ borderRadius: '8px' }}></div>
                    <code>8px;</code>
                </div>
                <div className="codeblock">
                    <div className="box bigger ex-border-radius" style={{ borderRadius: '0px 16px' }}></div>
                    <code>0px 16px;</code>
                </div>
                <div className="codeblock">
                    <div className="box bigger ex-border-radius" style={{ borderRadius: '100%' }}></div>
                    <code>100%;</code>
                </div>
            </div>
            <div className="snippet span-4">
                <h2 className="code">box-shadow:</h2>
                <h3>Shadow x and y position</h3>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: '-10px -10px gray' }}></div>
                            <code>-10px -10px gray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: '-5px -5px gray' }}></div>
                            <code>-5px -5px gray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: '-5px 5px gray' }}></div>
                            <code>-5px 5px gray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: '-10px 10px gray' }}></div>
                            <code>-10px 10px gray;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: '10px -10px gray' }}></div>
                            <code>10px -10px gray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: '5px -5px gray' }}></div>
                            <code>5px -5px gray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: '5px 5px gray' }}></div>
                            <code>5px 5px gray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: '10px 10px gray' }}></div>
                            <code>10px 10px gray;</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet span-5">
                <h2 className="code">box-shadow:</h2>
                <h3>Shadow blur and spread</h3>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: '10px 10px gray' }}></div>
                            <code>10px 10px gray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: '10px 10px 5px gray' }}></div>
                            <code>10px 10px 5px gray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: '10px 10px 10px gray' }}></div>
                            <code>10px 10px 10px gray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: '10px 10px 20px gray' }}></div>
                            <code>10px 10px 20px gray;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: '0 0 20px 2px black' }}></div>
                            <code>0 0 20px 2px black;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: '0 0 20px 10px white' }}></div>
                            <code>0 0 20px 10px white;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: 'inset 0 0 10px 8px gray' }}></div>
                            <code>inset 0 0 10px 8px gray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box bigger ex-box-shadow" style={{ boxShadow: '0 0 20px 5px white, 10px 10px 20px gray' }}></div>
                            <code>0 0 20px 5px white,<br />10px 10px 20px gray;</code>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section id="css-colors">
            <h2>Colors</h2>
            <div className="snippet span-7">
                <h2 className="code">color:</h2>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="box" style={{ color: 'white' }}>A</div>
                            <code>white;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: 'black' }}>A</div>
                            <code>black;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: 'gray' }}>A</div>
                            <code>gray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: 'red' }}>A</div>
                            <code>red;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: 'green' }}>A</div>
                            <code>green;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: 'blue' }}>A</div>
                            <code>blue;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="box" style={{ color: '#fff' }}>A</div>
                            <code>#fff;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: '#000' }}>A</div>
                            <code>#000;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: '#808080' }}>A</div>
                            <code>#808080;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: '#f00' }}>A</div>
                            <code>#f00;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: '#008000' }}>A</div>
                            <code>#008000;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: '#00f' }}>A</div>
                            <code>#00f;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="box" style={{ color: 'rgb(255, 255, 255)' }}>A</div>
                            <code>rgb(255, 255, 255);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: 'rgb(0, 0, 0)' }}>A</div>
                            <code>rgb(0, 0, 0);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: 'rgb(128, 128, 128)' }}>A</div>
                            <code>rgb(128, 128, 128);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: 'rgb(255, 0, 0)' }}>A</div>
                            <code>rgb(255, 0, 0);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: 'rgb(0, 128, 0)' }}>A</div>
                            <code>rgb(0, 128, 0);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: 'rgb(0, 0, 255)' }}>A</div>
                            <code>rgb(0, 0, 255);</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="box" style={{ color: 'hsl(0, 0%, 100%)' }}>A</div>
                            <code>hsl(0, 0%, 100%);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: 'hsl(0, 0%, 0%)' }}>A</div>
                            <code>hsl(0, 0%, 0%);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: 'hsl(0, 0%, 50%)' }}>A</div>
                            <code>hsl(0, 0%, 50%);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: 'hsl(0, 100%, 50%)' }}>A</div>
                            <code>hsl(0, 100%, 50%);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: 'hsl(120, 100%, 25%)' }}>A</div>
                            <code>hsl(120, 100%, 25%);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: 'hsl(240, 100%, 50%)' }}>A</div>
                            <code>hsl(240, 100%, 50%);</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet span-2">
                <h2 className="code">color:</h2>
                <h3>Grayscale</h3>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: '#000' }}>A</div>
                            <code>#000;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: '#222' }}>A</div>
                            <code>#222;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: '#555' }}>A</div>
                            <code>#555;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: '#777' }}>A</div>
                            <code>#777;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: '#999' }}>A</div>
                            <code>#999;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: '#bbb' }}>A</div>
                            <code>#bbb;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: '#ccc' }}>A</div>
                            <code>#ccc;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box placeholder" style={{ color: '#eee' }}>A</div>
                            <code>#eee;</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet span-7">
                <h2 className="code">background-color:</h2>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'white', color: 'black' }}></div>
                            <code>white;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'black' }}></div>
                            <code>black;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'gray' }}></div>
                            <code>gray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'red' }}></div>
                            <code>red;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'green' }}></div>
                            <code>green;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'blue' }}></div>
                            <code>blue;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: '#fff', color: 'black' }}></div>
                            <code>#fff;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: '#000' }}></div>
                            <code>#000;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: '#808080' }}></div>
                            <code>#808080;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: '#f00' }}></div>
                            <code>#f00;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: '#008000' }}></div>
                            <code>#008000;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: '#00f' }}></div>
                            <code>#00f;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'black' }}></div>
                            <code>rgb(255, 255, 255);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'rgb(0, 0, 0)' }}></div>
                            <code>rgb(0, 0, 0);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'rgb(128, 128, 128)' }}></div>
                            <code>rgb(128, 128, 128);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'rgb(255, 0, 0)' }}></div>
                            <code>rgb(255, 0, 0);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'rgb(0, 128, 0)' }}></div>
                            <code>rgb(0, 128, 0);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'rgb(0, 0, 255)' }}></div>
                            <code>rgb(0, 0, 255);</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'hsl(0, 0%, 100%)', color: 'black' }}></div>
                            <code>hsl(0, 0%, 100%);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'hsl(0, 0%, 0%)' }}></div>
                            <code>hsl(0, 0%, 0%);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'hsl(0, 0%, 50%)' }}></div>
                            <code>hsl(0, 0%, 50%);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'hsl(0, 100%, 50%)' }}></div>
                            <code>hsl(0, 0%, 50%);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'hsl(120, 100%, 25%)' }}></div>
                            <code>hsl(120, 100%, 25%);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'hsl(240, 100%, 50%)' }}></div>
                            <code>hsl(240, 100%, 50%);</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet span-2">
                <h2 className="code">background-color:</h2>
                <h3>Grayscale</h3>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: '#000' }}></div>
                            <code>#000;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: '#222' }}></div>
                            <code>#222;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: '#555' }}></div>
                            <code>#555;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: '#777' }}></div>
                            <code>#777;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: '#999' }}></div>
                            <code>#999;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: '#bbb' }}></div>
                            <code>#bbb;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: '#ccc' }}></div>
                            <code>#ccc;</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: '#eee' }}></div>
                            <code>#eee;</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet span-rows-2 span-5">
                <h2 className="code">background-color:</h2>
                <h3>Transparent colors</h3>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)' }}></div>
                            <code>rgba(255, 0, 0, 0.1);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'rgba(255, 0, 0, 0.2)' }}></div>
                            <code>rgba(255, 0, 0, 0.2);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'rgba(255, 0, 0, 0.3)' }}></div>
                            <code>rgba(255, 0, 0, 0.3);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}></div>
                            <code>rgba(255, 0, 0, 0.5);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'rgba(255, 0, 0, 0.7)' }}></div>
                            <code>rgba(255, 0, 0, 0.7);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'rgba(255, 0, 0, 0.9)' }}></div>
                            <code>rgba(255, 0, 0, 0.9);</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'hsla(0, 100%, 50%, 0.1)' }}></div>
                            <code>hsla(0, 100%, 50%, 0.1);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'hsla(0, 100%, 50%, 0.2)' }}></div>
                            <code>hsla(0, 100%, 50%, 0.2);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'hsla(0, 100%, 50%, 0.3)' }}></div>
                            <code>hsla(0, 100%, 50%, 0.3);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'hsla(0, 100%, 50%, 0.5)' }}></div>
                            <code>hsla(0, 100%, 50%, 0.5);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'hsla(0, 100%, 50%, 0.7)' }}></div>
                            <code>hsla(0, 100%, 50%, 0.7);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box" style={{ backgroundColor: 'hsla(0, 100%, 50%, 0.9)' }}></div>
                            <code>hsla(0, 100%, 50%, 0.9);</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet span-2">
                <h2 className="code">background-image:</h2>
                <div className="codeblock">
                    <div className="box biggest ex-background-image" style={{ backgroundImage: 'url(github.svg)' }}></div>
                    <code>url(...);</code>
                </div>
            </div>
            <div className="snippet span-6">
                <h2 className="code">background-image: linear-gradient</h2>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="box biggest ex-background-image" style={{ backgroundImage: 'linear-gradient(to bottom, black, #ccc)' }}></div>
                            <code>(to bottom, black, #ccc);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box biggest ex-background-image" style={{ backgroundImage: 'linear-gradient(to bottom, blue, black)' }}></div>
                            <code>(to bottom, blue, black);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box biggest ex-background-image" style={{ backgroundImage: 'linear-gradient(to bottom, green, black)' }}></div>
                            <code>(to bottom, green, black);</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="box biggest ex-background-image" style={{ backgroundImage: 'linear-gradient(to bottom, red, black)' }}></div>
                            <code>(to bottom, red, black);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box biggest ex-background-image" style={{ backgroundImage: 'linear-gradient(to right bottom, red, black)' }}></div>
                            <code>(to right bottom, red, black);</code>
                        </div>
                        <div className="codeblock">
                            <div className="box biggest ex-background-image" style={{ backgroundImage: 'linear-gradient(to left bottom, red, black)' }}></div>
                            <code>(to left bottom, red, black);</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet span-7">
                <h2 className="code">border-color:</h2>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-border light" style={{ borderColor: 'white', color: 'black' }}></div>
                            <code>white;</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: 'black' }}></div>
                            <code>black;</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: 'gray' }}></div>
                            <code>gray;</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: 'red' }}></div>
                            <code>red;</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: 'green' }}></div>
                            <code>green;</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: 'blue' }}></div>
                            <code>blue;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-border light" style={{ borderColor: '#fff', color: 'black' }}></div>
                            <code>#fff;</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: '#000' }}></div>
                            <code>#000;</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: '#808080' }}></div>
                            <code>#808080;</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: '#f00' }}></div>
                            <code>#f00;</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: '#008000' }}></div>
                            <code>#008000;</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: '#00f' }}></div>
                            <code>#00f;</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-border light" style={{ borderColor: 'rgb(255, 255, 255)', color: 'black' }}></div>
                            <code>rgb(255, 255, 255);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: 'rgb(0, 0, 0)' }}></div>
                            <code>rgb(0, 0, 0);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: 'rgb(128, 128, 128)' }}></div>
                            <code>rgb(128, 128, 128);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: 'rgb(255, 0, 0)' }}></div>
                            <code>rgb(255, 0, 0);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: 'rgb(0, 128, 0)' }}></div>
                            <code>rgb(0, 128, 0);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: 'rgb(0, 0, 255)' }}></div>
                            <code>rgb(0, 0, 255);</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-border light" style={{ borderColor: 'hsl(0, 0%, 100%)', color: 'black' }}></div>
                            <code>hsl(0, 0%, 100%);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: 'hsl(0, 0%, 0%)' }}></div>
                            <code>hsl(0, 0%, 0%);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: 'hsl(0, 0%, 50%)' }}></div>
                            <code>hsl(0, 0%, 50%);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: 'hsl(0, 100%, 50%)' }}></div>
                            <code>hsl(0, 0%, 50%);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: 'hsl(120, 100%, 25%)' }}></div>
                            <code>hsl(120, 100%, 25%);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-border dark" style={{ borderColor: 'hsl(240, 100%, 50%)' }}></div>
                            <code>hsl(240, 100%, 50%);</code>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <h2>Transforms</h2>
            <div className="snippet span-4" id="transform-rotate">
                <h2 className="code">transform: rotate</h2>
                <table>
                    <tr>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform">
                                    <div className="box bigger transform" style={{ transform: 'rotate(-45deg)' }}>&uarr;</div>
                                </div>
                                <code>(-45deg);</code>
                            </div>
                        </td>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform">
                                    <div className="box bigger transform" style={{ transform: 'rotate(0)' }}>&uarr;</div>
                                </div>
                                <code>(0);</code>
                            </div>
                        </td>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform">
                                    <div className="box bigger transform" style={{ transform: 'rotate(45deg)' }}>&uarr;</div>
                                </div>
                                <code>(45deg);</code>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform">
                                    <div className="box bigger transform" style={{ transform: 'rotate(-90deg)' }}>&uarr;</div>
                                </div>
                                <code>(-90deg);</code>
                            </div>
                        </td>
                        <td></td>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform">
                                    <div className="box bigger transform" style={{ transform: 'rotate(90deg)' }}>&uarr;</div>
                                </div>
                                <code>(90deg);</code>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform">
                                    <div className="box bigger transform" style={{ transform: 'rotate(-135deg)' }}>&uarr;</div>
                                </div>
                                <code>(-135deg);</code>
                            </div>
                        </td>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform">
                                    <div className="box bigger transform" style={{ transform: 'rotate(180deg)' }}>&uarr;</div>
                                </div>
                                <code>(180deg);</code>
                            </div>
                        </td>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform">
                                    <div className="box bigger transform" style={{ transform: 'rotate(135deg)' }}>&uarr;</div>
                                </div>
                                <code>(135deg);</code>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="snippet span-5">
                <h2 className="code">transform:</h2>
                <h3>Rotation in 3D</h3>
                <h3>
                    <code>perspective: 100px;</code>
                </h3>
                <div className="column">
                    <div className="columns">
                        <div className="column">
                            <div className="codeblock">
                                <div className="ex-transform">
                                    <div className="box biggest transform" style={{ transform: 'rotateX(45deg)' }}>&uarr;</div>
                                </div>
                                <code>rotateX(45deg);</code>
                            </div>
                            <div className="codeblock">
                                <div className="ex-transform">
                                    <div className="box biggest transform" style={{ transform: 'rotateY(45deg)' }}>&uarr;</div>
                                </div>
                                <code>rotateY(45deg);</code>
                            </div>
                            <div className="codeblock">
                                <div className="ex-transform">
                                    <div className="box biggest transform" style={{ transform: 'rotateZ(45deg)' }}>&uarr;</div>
                                </div>
                                <code>rotateZ(45deg);</code>
                            </div>
                        </div>
                        <div className="column">
                            <div className="codeblock">
                                <div className="ex-transform">
                                    <div className="box biggest transform" style={{ transform: 'rotate3d(1, 0, 0, 45deg)' }}>&uarr;</div>
                                </div>
                                <code>rotate3d(1, 0, 0, 45deg);</code>
                            </div>
                            <div className="codeblock">
                                <div className="ex-transform">
                                    <div className="box biggest transform" style={{ transform: 'rotate3d(0, 1, 0, 45deg)' }}>&uarr;</div>
                                </div>
                                <code>rotate3d(0, 1, 0, 45deg);</code>
                            </div>
                            <div className="codeblock">
                                <div className="ex-transform">
                                    <div className="box biggest transform" style={{ transform: 'rotate3d(0, 0, 1, 45deg)' }}>&uarr;</div>
                                </div>
                                <code>rotate3d(0, 0, 1, 45deg);</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet span-7">
                <h2 className="code">transform:</h2>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-transform">
                                <div className="box biggest transform" style={{ transform: 'scaleX(0.5)' }}>&uarr;</div>
                            </div>
                            <code>scaleX(0.5);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-transform">
                                <div className="box biggest transform" style={{ transform: 'scaleY(0.5)' }}>&uarr;</div>
                            </div>
                            <code>scaleY(0.5);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-transform">
                                <div className="box biggest transform" style={{ transform: 'translateZ(20px)' }}>&uarr;</div>
                            </div>
                            <code>translateZ(20px);</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-transform">
                                <div className="box biggest transform" style={{ transform: 'scale(0.5, 1)' }}>&uarr;</div>
                            </div>
                            <code>scale(0.5, 1);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-transform">
                                <div className="box biggest transform" style={{ transform: 'scale(1, 0.5)' }}>&uarr;</div>
                            </div>
                            <code>scale(1, 0.5);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-transform">
                                <div className="box biggest transform" style={{ transform: 'scaleZ(2) translateZ(10px)' }}>&uarr;</div>
                            </div>
                            <code>scaleZ(2)<br />translateZ(10px);</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-transform">
                                <div className="box biggest transform" style={{ transform: 'scale3d(0.5, 1, 1)' }}>&uarr;</div>
                            </div>
                            <code>scale3d(0.5, 1, 1);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-transform">
                                <div className="box biggest transform" style={{ transform: 'scale3d(1, 0.5, 1)' }}>&uarr;</div>
                            </div>
                            <code>scale3d(1, 0.5, 1);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-transform">
                                <div className="box biggest transform" style={{ transform: 'scale3d(1,1,2) translateZ(10px)' }}>&uarr;</div>
                            </div>
                            <code>scale3d(1, 1, 2)<br />translateZ(10px);</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet">
                <h2 className="code">transform: skew</h2>
                <div className="codeblock">
                    <div className="ex-transform tb-border">
                        <div className="box bigger transform" style={{ transform: 'skew(20deg, 0deg)' }}>&uarr;</div>
                    </div>
                    <code>(20deg, 0deg);</code>
                </div>
                <div className="codeblock">
                    <div className="ex-transform tb-border">
                        <div className="box bigger transform" style={{ transform: 'skew(-20deg, 0deg)' }}>&uarr;</div>
                    </div>
                    <code>(-20deg, 0deg);</code>
                </div>
                <div className="codeblock">
                    <div className="ex-transform lr-border">
                        <div className="box bigger transform" style={{ transform: 'skew(0deg, 20deg)' }}>&uarr;</div>
                    </div>
                    <code>(0deg, 20deg);</code>
                </div>
                <div className="codeblock">
                    <div className="ex-transform lr-border">
                        <div className="box bigger transform" style={{ transform: 'skew(0deg, -20deg)', marginBottom: '10px' }}>&uarr;</div>
                    </div>
                    <code>(0deg, -20deg);</code>
                </div>
            </div>
            <div className="snippet span-7">
                <h2 className="code">transform: translate</h2>
                <h3>2D translation</h3>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translateX(0)' }}></div>
                            </div>
                            <code>translateX(0);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translateX(25px)' }}></div>
                            </div>
                            <code>translateX(25px);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translateY(25px)' }}></div>
                            </div>
                            <code>translateY(25px);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translateX(25px) translateY(25px)' }}></div>
                            </div>
                            <code>translateX(25px)<br />translateY(25px);</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translate(0, 0)' }}></div>
                            </div>
                            <code>translate(0, 0);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translate(25px, 0)' }}></div>
                            </div>
                            <code>translate(25px, 0);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translate(0, 25px)' }}></div>
                            </div>
                            <code>translate(0, 25px);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translate(25px, 25px)' }}></div>
                            </div>
                            <code>translate(25px, 25px);</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translate3d(0, 0, 0)' }}></div>
                            </div>
                            <code>translate3d(0, 0, 0);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translate3d(25px, 0, 0)' }}></div>
                            </div>
                            <code>translate3d(25px, 0, 0);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translate3d(0, 25px, 0)' }}></div>
                            </div>
                            <code>translate3d(0, 25px, 0);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translate3d(25px, 25px, 0)' }}></div>
                            </div>
                            <code>translate3d(25px, 25px, 0);<br /> </code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet">
                <h2 className="code">transform: translate</h2>
                <h3>3D z-axis translation</h3>
                <h3>
                    <span className="code">perspective: 60px;
                        <br />perspective-origin: top left;</span>
                </h3>
                <div className="columns">
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translateZ(-25px)' }}></div>
                            </div>
                            <code>translateZ(-25px);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translateZ(25px)' }}></div>
                            </div>
                            <code>translateZ(25px);</code>
                        </div>
                    </div>
                    <div className="column">
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translate3d(0, 0, -25px)' }}></div>
                            </div>
                            <code>translate3d(0, 0, -25px);</code>
                        </div>
                        <div className="codeblock">
                            <div className="ex-translate">
                                <div className="box" style={{ transform: 'translate3d(0, 0, 25px)' }}></div>
                            </div>
                            <code>translate3d(0, 0, 25px);</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snippet">
                <h2 className="code">perspective:</h2>
                <h3>See this
                    <a href="https://desandro.github.io/3dtransforms/docs/perspective.html">tutorial on 3D transforms</a>.</h3>
                <h3>
                    <code>perspective-origin: 300% -200%;</code>
                </h3>
                <div className="perspective">
                    <div className="codeblock">
                        <div className="ex-perspective cube right-top" style={{ perspective: '1000px' }}>
                            <div className="face front">F</div>
                            <div className="face top">T</div>
                            <div className="face right">R</div>
                            <div className="face left">L</div>
                            <div className="face bottom">B</div>
                            <div className="face back">K</div>
                        </div>
                        <code>1000px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-perspective cube right-top" style={{ perspective: '400px' }}>
                            <div className="face front">F</div>
                            <div className="face top">T</div>
                            <div className="face right">R</div>
                            <div className="face left">L</div>
                            <div className="face bottom">B</div>
                            <div className="face back">K</div>
                        </div>
                        <code>400px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-perspective cube right-top" style={{ perspective: '300px' }}>
                            <div className="face front">F</div>
                            <div className="face top">T</div>
                            <div className="face right">R</div>
                            <div className="face left">L</div>
                            <div className="face bottom">B</div>
                            <div className="face back">K</div>
                        </div>
                        <code>300px;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-perspective cube right-top" style={{ perspective: '200px', marginBottom: '-15px' }}>
                            <div className="face front">F</div>
                            <div className="face top">T</div>
                            <div className="face right">R</div>
                            <div className="face left">L</div>
                            <div className="face bottom">B</div>
                            <div className="face back">K</div>
                        </div>
                        <code>200px;</code>
                    </div>
                </div>
            </div>
            <div className="snippet span-3">
                <h2 className="code">perspective-origin:</h2>
                <h3>See this
                    <a href="https://desandro.github.io/3dtransforms/docs/perspective.html">tutorial on 3D transforms</a>.</h3>
                <h3>
                    <code>perspective: 400px</code>
                </h3>
                <h3>Also
                    <span className="code">top, bottom, left, right</span>
                </h3>
                <div className="callout">
                    <div className="codeblock">
                        <div className="ex-perspective cube center" style={{ perspective: '400px' }}>
                            <div className="face front">F</div>
                            <div className="face top">T</div>
                            <div className="face right">R</div>
                            <div className="face left">L</div>
                            <div className="face bottom">B</div>
                            <div className="face back">K</div>
                        </div>
                        <code>50% 50%;</code>
                    </div>
                </div>
                <div className="perspective">
                    <div className="codeblock">
                        <div className="ex-perspective cube right-bottom" style={{ perspective: '400px' }}>
                            <div className="face front">F</div>
                            <div className="face top">T</div>
                            <div className="face right">R</div>
                            <div className="face left">L</div>
                            <div className="face bottom">B</div>
                            <div className="face back">K</div>
                        </div>
                        <code>300% 200%;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-perspective cube left-bottom" style={{ perspective: '400px' }}>
                            <div className="face front">F</div>
                            <div className="face top">T</div>
                            <div className="face right">R</div>
                            <div className="face left">L</div>
                            <div className="face bottom">B</div>
                            <div className="face back">K</div>
                        </div>
                        <code>-300% 200%;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-perspective cube right-top" style={{ perspective: '400px' }}>
                            <div className="face front">F</div>
                            <div className="face top">T</div>
                            <div className="face right">R</div>
                            <div className="face left">L</div>
                            <div className="face bottom">B</div>
                            <div className="face back">K</div>
                        </div>
                        <code>300% -200%;</code>
                    </div>
                    <div className="codeblock">
                        <div className="ex-perspective cube left-top" style={{ perspective: '400px' }}>
                            <div className="face front">F</div>
                            <div className="face top">T</div>
                            <div className="face right">R</div>
                            <div className="face left">L</div>
                            <div className="face bottom">B</div>
                            <div className="face back">K</div>
                        </div>
                        <code>-300% -200%;</code>
                    </div>
                </div>
            </div>
            <div className="snippet span-5">
                <h2 className="code">transform-origin:</h2>
                <h3>
                    <code>perspective: 100px;</code>
                </h3>
                <table className="transform-origin">
                    <caption>
                        <code>transform-origin:</code>
                    </caption>
                    <tr>
                        <th>
                            <code>rotateY(60deg);</code>
                        </th>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform-origin">
                                    <div className="door rotate-y" style={{ transformOrigin: '50%' }}>&uarr;</div>
                                </div>
                                <code>50%;</code>
                            </div>
                        </td>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform-origin">
                                    <div className="door rotate-y" style={{ transformOrigin: 'left' }}>&uarr;</div>
                                </div>
                                <code>left;</code>
                            </div>
                        </td>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform-origin">
                                    <div className="door rotate-y" style={{ transformOrigin: 'right' }}>&uarr;</div>
                                </div>
                                <code>right;</code>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <code>rotateY(-60deg);</code>
                        </th>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform-origin">
                                    <div className="door rotate-y2" style={{ transformOrigin: '50%' }}>&uarr;</div>
                                </div>
                                <code>50%;</code>
                            </div>
                        </td>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform-origin">
                                    <div className="door rotate-y2" style={{ transformOrigin: 'left' }}>&uarr;</div>
                                </div>
                                <code>left;</code>
                            </div>
                        </td>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform-origin">
                                    <div className="door rotate-y2" style={{ transformOrigin: 'right' }}>&uarr;</div>
                                </div>
                                <code>right;</code>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <code>rotateX(60deg);</code>
                        </th>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform-origin">
                                    <div className="door rotate-x" style={{ transformOrigin: '50%' }}>&uarr;</div>
                                </div>
                                <code>50%;</code>
                            </div>
                        </td>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform-origin">
                                    <div className="door rotate-x" style={{ transformOrigin: 'top' }}>&uarr;</div>
                                </div>
                                <code>top;</code>
                            </div>
                        </td>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform-origin">
                                    <div className="door rotate-x" style={{ transformOrigin: 'bottom' }}>&uarr;</div>
                                </div>
                                <code>bottom;</code>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <code>rotateX(-60deg);</code>
                        </th>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform-origin">
                                    <div className="door rotate-x2" style={{ transformOrigin: '50%' }}>&uarr;</div>
                                </div>
                                <code>50%;</code>
                            </div>
                        </td>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform-origin">
                                    <div className="door rotate-x2" style={{ transformOrigin: 'top' }}>&uarr;</div>
                                </div>
                                <code>top;</code>
                            </div>
                        </td>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform-origin">
                                    <div className="door rotate-x2" style={{ transformOrigin: 'bottom' }}>&uarr;</div>
                                </div>
                                <code>bottom;</code>
                            </div>
                        </td>
                    </tr>
                </table>
                <table className="transform-origin">
                    <tr>
                        <th>
                            <code>rotateZ(45deg);</code>
                        </th>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform-origin">
                                    <div className="door rotate-z" style={{ transformOrigin: '50%' }}>&uarr;</div>
                                </div>
                                <code>50%;</code>
                            </div>
                        </td>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform-origin" style={{ marginLeft: '20px' }}>
                                    <div className="door rotate-z" style={{ transformOrigin: 'top left' }}>&uarr;</div>
                                </div>
                                <code>top left;</code>
                            </div>
                        </td>
                        <td>
                            <div className="codeblock">
                                <div className="ex-transform-origin">
                                    <div className="door rotate-z" style={{ transformOrigin: 'bottom right' }}>&uarr;</div>
                                </div>
                                <code>bottom right;</code>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </section>

        <section id="css-responsive">
            <h2>Responsive design</h2>
            <h3>See
                <a href="https://developers.google.com/web/fundamentals/design-and-ui/responsive/">MDN on responsive design</a>
            </h3>
            <div className="snippet">
                <h2>Media queries</h2>
                <div className="codeblock">
                    <div className="ex-css-element">
                        Observe nav bar when reducing screen width
                    </div>
                    <code>@media(max-width: 600px) &#123;</code>
                    <code>    element &#123;</code>
                    <code>        display: none;</code>
                    <code>    &#125;</code>
                    <code>&#125;</code>
                </div>
            </div>
        </section>
    </section>

    





    </>
  );
}

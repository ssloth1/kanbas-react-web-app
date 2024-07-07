export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and
        subsections. Each section is usually prefaced with a short title or
        heading that attempts to summarize the topic of the section it precedes.
        For instance this paragraph is preceded by the heading Heading Tags. The
        font of the section headings are usually larger and bolder than their
        subsection headings. This document uses headings to introduce topics
        such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags
        can be used to format plain text so that it renders in a browser as
        large headings. There are 6 heading tags for different sizes: h1, h2,
        h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest
        heading.
      </div>
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>
        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make a grilled cheese sandwich:
        <ol id="wd-grilled-cheese">
          <li>Spread butter on one side of each slice of bread.</li>
          <li>
            Place a slice of cheese on the unbuttered side of one slice of
            bread.
          </li>
          <li>
            Place the other slice of bread on top, so that the buttered sides
            are facing out.
          </li>
          <li>Heat a frying pan over medium heat.</li>
          <li>Place the sandwich in the pan.</li>
          <li>Cook each side until they are golden brown.</li>
          <li>
            Remove from the pan and let cool for a minute before cutting and
            serving.
          </li>
        </ol>
        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
          <li>Blood Meridian</li>
          <li>Dune</li>
          <li>The Man in the High Castle</li>
          <li>Contact</li>
          <li>Flowers for Algernon</li>
        </ul>
      </div>
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>React</td>
              <td>2/24/21</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>Node.js</td>
              <td>3/3/21</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>Express</td>
              <td>3/10/21</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>MongoDB</td>
              <td>3/17/21</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>GraphQL</td>
              <td>3/24/21</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>REST</td>
              <td>3/31/21</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>WebSockets</td>
              <td>4/7/21</td>
              <td>100</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>100</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
        <img
          id="wd-starship"
          width="400px"
          alt="it's the first image"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <br />
        Loading a local image:
        <br />
        <img
          id="wd-teslabot"
          src="images/teslabot.jpg"
          height="200px"
          alt="It's the second image."
        />
      </div>
      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input
            type="password"
            id="wd-text-fields-password"
            value="123@#$asd"
          />
          <br />
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" id="wd-text-fields-first-name" title="John" />{" "}
          <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input
            type="text"
            id="wd-text-fields-last-name"
            placeholder="Doe"
            value="Wonderland"
            title="The last name"
          />
        </form>
        <h5>Text boxes</h5>
        <label>Biography:</label>
        <br />
        <textarea id="wd-textarea" cols={30} rows={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          suscipit lacus non ex pellentesque, nec laoreet urna scelerisque.
          Curabitur auctor egestas eros, hendrerit molestie augue scelerisque
          sit amet. Nullam non tincidunt magna, a aliquam nisl. Pellentesque
          consequat, dolor eu feugiat convallis, orci metus molestie ex, non
          ullamcorper nisi nisi non magna. Vestibulum vel ultricies eros. Nulla
          vel diam nisl. Fusce eget feugiat turpis, in euismod augue. Nulla
          bibendum et diam et efficitur. Fusce dapibus nunc nec sapien
          vulputate, nec gravida neque malesuada. Nam viverra lacus a elit
          efficitur, sed ultricies mauris tincidunt. Phasellus dui arcu,
          bibendum nec suscipit in, lobortis at ante. Donec vulputate vitae urna
          ac imperdiet. Donec eu eros lorem. Vestibulum vel justo fringilla
          lorem finibus fermentum et eget lacus. Etiam in feugiat enim, sit amet
          ornare justo. Suspendisse sit amet massa vitae sem sodales congue.
          Etiam dapibus iaculis ipsum id efficitur. Mauris ac finibus mi. Donec
          ut ullamcorper arcu. Morbi at ornare ipsum. Maecenas scelerisque
          venenatis blandit. Phasellus vel mi vulputate, iaculis nisi sed,
          mollis tellus. Vivamus nec pulvinar turpis. Nulla non elit feugiat,
          ultrices est at, rutrum nulla. Nullam non velit vel nisl lacinia
          pretium. Proin suscipit ante eget lacus feugiat fringilla. Duis
          aliquet est faucibus eros bibendum, ut pharetra ipsum vestibulum.
          Donec at dictum nibh, in porta turpis. Etiam facilisis purus vel mi
          iaculis porttitor. Vivamus vestibulum lacinia enim in suscipit. Nulla
          congue venenatis nulla, id pharetra nunc tincidunt eu. Morbi maximus
          tincidunt aliquet. Aenean congue enim ut aliquet egestas. Nullam
          varius vestibulum vulputate. Donec semper purus tristique felis
          dapibus, at pellentesque mauris faucibus. Quisque gravida, eros id
          sodales vulputate, massa metus egestas velit, a mollis elit erat sit
          amet velit. Aliquam volutpat varius metus, sit amet laoreet mauris
          eleifend sed. Proin tincidunt lacus ut viverra rhoncus. Vestibulum
          velit quam, vestibulum et est nec, placerat feugiat lectus. Curabitur
          fermentum odio in neque malesuada blandit. Morbi venenatis tortor
          neque, ac blandit leo rhoncus et. Phasellus a mi bibendum, consequat
          tellus et, tincidunt erat. Nunc laoreet purus at dictum varius. Fusce
          dapibus tellus dui, eu sollicitudin neque feugiat vitae. Integer
          egestas mauris at est porta cursus. Duis nec dolor a libero fringilla
          suscipit. Fusce sit amet ultrices neque. Integer nec nisi id erat
          tincidunt eleifend ac in dolor. Mauris finibus libero porttitor tortor
          venenatis, eu blandit orci sagittis. Proin vel ipsum tincidunt, cursus
          purus quis, elementum nulla. Morbi sapien erat, consequat vitae
          dignissim non, consectetur sed urna. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec eget ligula non risus blandit
          maximus. Quisque sodales congue velit, quis consequat odio placerat
          id. Suspendisse potenti. Maecenas eu porta eros, vitae volutpat dui.
          Vestibulum dictum elit vel eros pellentesque fermentum. Phasellus
          elementum arcu quis dui suscipit elementum. Donec sodales risus id
          elit porta commodo. Aliquam blandit molestie cursus. Donec commodo
          scelerisque neque ac tincidunt. Morbi mattis varius nibh, dapibus
          euismod mauris fermentum ac. Aliquam tempor, magna hendrerit mattis
          tincidunt, odio quam pulvinar eros, quis imperdiet ante lectus ut
          augue. Nam purus sem, congue vel purus ac, egestas facilisis dolor.
          Morbi rhoncus, est sit amet cursus tempus, enim turpis aliquet metus,
          ac malesuada felis tortor eget quam. Curabitur et lectus pellentesque,
          mollis augue at, feugiat eros. Suspendisse potenti. Curabitur euismod
          leo a tincidunt eleifend. Nulla commodo suscipit turpis a porttitor.
          Nunc sed venenatis neque. In hac habitasse platea dictumst.
        </textarea>
        <h5 id="wd-buttons">Buttons</h5>
        <button
          id="wd-all-good"
          onClick={() => alert("Life is Good!")}
          type="button"
        >
          Hello World!
        </button>
        <h5>File upload</h5>
        <input id="wd-upload" type="file" />
        <h5 id="wd-radio-buttons">Radio buttons</h5>
        <label>Favorite movie genre:</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-comedy" />
        <label htmlFor="wd-radio-comedy">Comedy</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-drama" />
        <label htmlFor="wd-radio-drama">Drama</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-scifi" />
        <label htmlFor="wd-radio-scifi">Science Fiction</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
        <label htmlFor="wd-radio-fantasy">Fantasy</label>
        <h5 id="wd-checkboxes">Checkboxes</h5>
        <label>Favorite movie genre:</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
        <label htmlFor="wd-chkbox-comedy">Comedy</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
        <label htmlFor="wd-chkbox-drama">Drama</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
        <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
        <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
        <h4 id="wd-dropdowns">Dropdowns</h4>
        <h5>Select one</h5>
        <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label>
        <br />
        <select id="wd-select-one-genre">
          <option value="COMEDY">Comedy</option>
          <option value="DRAMA">Drama</option>
          <option selected value="SCIFI">
            Science Fiction
          </option>
          <option value="FANTASY">Fantasy</option>
        </select>
        <h5>Select many</h5>
        <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label>
        <br />
        <select id="wd-select-many-genre" multiple>
          <option selected value="COMEDY">
            Comedy
          </option>
          <option value="DRAMA">Drama</option>
          <option selected value="SCIFI">
            Science Fiction
          </option>
          <option value="FANTASY">Fantasy</option>
        </select>
        <h4>Other HTML field types</h4>
        <label htmlFor="wd-text-fields-email"> Email: </label>
        <input
          type="email"
          placeholder="jdoe@somewhere.com"
          id="wd-text-fields-email"
        />
        <br />
        <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
        <input
          type="number"
          id="wd-text-fields-salary-start"
          placeholder="1000"
          value="100000"
        />
        <br />
        <label htmlFor="wd-text-fields-rating"> Rating: </label>
        <input
          type="range"
          id="wd-text-fields-rating"
          placeholder="Doe"
          max="5"
          value="4"
        />
        <br />
        <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
        <input type="date" id="wd-text-fields-dob" value="2000-01-21" />
        <br />
        <h4>Anchor tag</h4>
        Please&nbsp;
        <a id="wd-lipsum" href="https://www.lipsum.com">
          <span>click here</span>
        </a>
        &nbsp;to get dummy text
        <br />
        <h4>Github Repository</h4>
        Please&nbsp;
        <a id="wd-github" href="https://github.com/ssloth1/kanbas-react-web-app">
          <span>click here</span>
        </a>
        &nbsp;to see my repository
      </div>
    </div>
  );
}

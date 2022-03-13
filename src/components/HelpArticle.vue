<template>
  <article>
    <div class="row text-left">
      <div class="collapsible">
        <input id="collapsible1" type="radio" name="help-article" />
        <label for="collapsible1">Convert weekdays to numbers</label>
        <div class="collapsible-body">
          <p>
            Converting Weekdays to numbers makes all the calculations way
            easier.
          </p>
          <table>
            <thead>
              <tr>
                <th>Weekday</th>
                <th>Number</th>
                <th>Mnemonic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sunday</td>
                <td>0</td>
                <td><strong>None</strong>day</td>
              </tr>
              <tr>
                <td>Monday</td>
                <td>1</td>
                <td><strong>One</strong>day</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>2</td>
                <td><strong>Two</strong>sday</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>3</td>
                <td><strong>Three</strong>sday</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>4</td>
                <td><strong>Four</strong>day</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>5</td>
                <td><strong>Five</strong>day</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>6</td>
                <td><strong>Six</strong>day</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="collapsible">
        <input id="collapsible2" type="radio" name="help-article" />
        <label for="collapsible2"> <h2>What are common doomsdays?</h2></label>
        <div class="collapsible-body">
          <ul class="text-left">
            <li>day / month</li>
            <li>3 / 1 (4 / 1 in leap years)</li>
            <li>28 / 2 (29 / 2 in leap years)</li>
            <li>14 / 3</li>
            <li>4 / 4</li>
            <li>9 / 5</li>
            <li>6 / 6</li>
            <li>11 / 7</li>
            <li>8 / 8</li>
            <li>5 / 9</li>
            <li>10 / 10</li>
            <li>7 / 11</li>
            <li>12 / 12</li>
          </ul>
        </div>
      </div>
      <div class="collapsible">
        <input id="collapsible3" type="radio" name="help-article" />
        <label for="collapsible3">Doomsdays of centuries</label>
        <div class="collapsible-body">
          <table>
            <thead>
              <tr>
                <th>Century</th>
                <th>Doomsday</th>
                <th>Doomsday Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1600</td>
                <td>...</td>
                <td>...</td>
              </tr>
              <tr>
                <td>1700</td>
                <td>Sun</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1800</td>
                <td>Fri</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1900</td>
                <td>Wed</td>
                <td>3</td>
              </tr>
              <tr>
                <td>2000</td>
                <td>Tue</td>
                <td>2</td>
              </tr>
              <tr>
                <td>2100</td>
                <td>Sun</td>
                <td>0</td>
              </tr>
              <tr>
                <td>2200</td>
                <td>...</td>
                <td>...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="collapsible">
        <input id="collapsible4" type="radio" name="help-article" />
        <label for="collapsible4">Shortcuts to break up centuries</label>
        <div class="collapsible-body">
          <p>
            The following years have the given offset to the centuries doomsday.
          </p>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <th scope="row">Year</th>
                <th>xxx0</th>
                <th>xx28</th>
                <th>xx56</th>
                <th>xx84</th>
              </tr>
              <tr>
                <th scope="row">Offset</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <div class="table-wrapper">
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <th scope="row">Year</th>
                  <th>xxx0</th>
                  <th>xx12</th>
                  <th>xx24</th>
                  <th>xx36</th>
                  <th>xx48</th>
                  <th>xx60</th>
                  <th>xx72</th>
                  <th>xx84</th>
                  <th>xx96</th>
                </tr>
                <tr>
                  <th scope="row">Offset</th>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="collapsible">
        <input id="collapsible5" type="radio" name="help-article" />
        <label for="collapsible5">Calculate doomsday of year</label>
        <div class="collapsible-body">
          <ol>
            <li>Remember Doomsday of a year near by (preferably just under)</li>
            <li>Add the number of years to that doomsday</li>
            <li>Add the number of leap years (years / 4 rounded down)</li>
            <li>you have your doomsday for any year 🎉</li>
          </ol>
        </div>
      </div>
      <div class="collapsible">
        <input id="collapsible6" type="radio" name="help-article" />
        <label for="collapsible6">Why? About this Project</label>
        <div class="collapsible-body">
          <p>
            I think it's a cool skill to calculate the weekday of any date. I
            got inspired by
            <a
              href="https://youtu.be/eSpW4I5moiA"
              target="_blank"
              rel="noreferrer"
              >a video by Mike Boyd</a
            >
            and
            <a
              href="https://youtu.be/z2x3SSBVGJU"
              target="_blank"
              rel="noreferrer"
              >Numberphile</a
            >. I highly recommend watching those videos. 🎬
          </p>
          <p>
            In order to learn the skill myself I created this little training
            app.
            <a
              href="https://github.com/adrianjost/doomsday"
              target="_blank"
              rel="noreferrer"
              >Check it out on GitHub</a
            >
            and make it even better if you want 💖.
          </p>
          <p>
            Created with ❤️ by
            <a href="https://adrianjost.dev" target="_blank">Adrian Jost</a>.
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
h2 {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
}
.collapsible {
  width: 100%;
}

.table-wrapper {
  overflow-x: auto;
  overflow-y: visible;
}

table {
  margin: 0.5rem 0;
}

table th {
  padding: 0 0.25rem;
}

.collapsible-body a {
  margin: 0;
}
</style>

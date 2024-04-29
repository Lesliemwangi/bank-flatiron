// Declare the function Header that displays the title of the application.
function Header() {
  // Returns a JSX element representing the header section.
  return (
    // Add a div element with a class of "text-primary" to apply primary text styling.
    <div className="text-primary">
      {/* Add a div element with a class of "text-header" to apply header text styling. */}
      <div className="text-header">
        <h1>
          {/*The b element to make the text bold. */}
          <b>
            {/*The u element to underline the text. */}
            <u>THE ROYAL BANK OF FLATIRON</u>
          </b>
        </h1>
      </div>
    </div>
  );
}
// Export the Header component as the default export.

export default Header;
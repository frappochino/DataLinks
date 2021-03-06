# Datalink's client documentation
## Contents
* [Structure](#structure)
* [Styling](#styling)

## Structure
All important files in the client are located in the src directory. This folder has the following structure:  
* **assets**: Only holds static content, aka only images and files whose only purpose is to be delivered or used somewhere.  
* **components**: Holds all react components, basically all UI, and together with most of the logic for the application.
  * **screens**: Screens is a folder containing directories for each "view" or "page" on the site. In our case we only have two pages, thus two subfolders, one for `Subjects` and one for `SubjectView` (Detailed view of one subject). Each of these subfolders has its component folder containing components that are **not** reusable in the rest of the applications (these components are made to specifically work for the screen they are serving).
  * **templates**: Templates are exactly the opposite of screens components, these are components made to be flexible and work in multiple places throughout the website.
* **functions**: Specifically only logic files that have nothing with UI to do. These are functions that should be able to be highly reusable.
* **state**: Directory for all redux specifics. It's a storage for all data that should be accessible for the whole web application.

## Styling
The application uses regular CSS, so nothing special here. However, what might be good to point out here is that CSS files should always exist in the same folder as the .tsx file they are serving (if it's a multipurpose CSS-file then the file should exist in the client root directory however multipurpose CSS files isn't recommended).

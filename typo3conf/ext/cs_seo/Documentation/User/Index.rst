﻿.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../Includes.txt


.. _user-manual:

Users Manual
============

With this extension editors can easily set some advanced properties for SEO in the page settings.
With the Google search result preview the editor can see the effects of some properties directly.

Without this extension it is a problem that the speaking URL changes also, when the editor changes a page title.
The page is not available with the old URL anymore. So now when the user creates a new page,
the RealURL path segment will be set automatically.

We also change the max characters settings in some fields so that they are not too long for search results.
Furthermore the new configurations are good explained. You can see the explanation as usual by hovering the label.

Page Properties
^^^^^^^^^^^^^^^

.. container:: ts-properties

	============================== ================================== ======================= ====================
	Property                       Label                                 Tab                     Type
	============================== ================================== ======================= ====================
	`tx\_csseo\_title`_            Browser title                      SEO                     string
	`tx\_csseo\_title\_only`_      Title only                         SEO                     boolean
	`tx\_csseo\_canonical`_        Canonical URL                      SEO                     string
	`tx\_csseo\_no\_index`_        No Index                           SEO                     boolean
	`tx\_csseo\_og\_title`_        Facebook Title                     Social Media            string
	`tx\_csseo\_og\_description`_  Facebook Description               Social Media            text
	`tx\_csseo\_og\_image`_        Facebook Image                     Social Media            file
	`tx\_csseo\_tw\_title`_        Twitter Title                      Social Media            string
	`tx\_csseo\_tw\_description`_  Twitter Description                Social Media            text
	`tx\_csseo\_tw\_image`_        Twitter Image                      Social Media            file
	`tx\_csseo\_tw\_creator`_      Twitter Creator                    Social Media            string
	============================== ================================== ======================= ====================

Property details
^^^^^^^^^^^^^^^^
.. _tx_csseo_title:

Browser title
"""""""""""""

.. container:: table-row

   Property
         tx_csseo_title
   Data type
         string
   Description
        This title will be shown in the browser tab and in the search engines. Place some keywords here,
        but not only separated by commas. The user should be animated to click.

.. _tx_csseo_title_only:

Title only
""""""""""

.. container:: table-row

   Property
         tx_csseo_title_only
   Data type
         boolean
   Description
        Show the browser title without the site title in case the space isn't enough.

.. _tx_csseo_canonical:

Canonical URL
"""""""""""""

.. container:: table-row

   Property
         tx_csseo_canonical
   Data type
         string
   Description
        Provides from duplicate content. If another page shows mainly the same content,
        type here the link to this page, if it should be rather indexed then the current.

.. _tx_csseo_no_index:

No index
""""""""

.. container:: table-row

   Property
         tx_csseo_no_index
   Data type
         boolean
   Description
        If checked, this page will not be visible in search engines.


.. _tx_csseo_og_title:

Facebook Title
""""""""""""""

.. container:: table-row

   Property
         tx_csseo_og_title
   Data type
         string
   Description
        This title will be shown, if the user shares this page on facebook, LinkedIn etc.

.. _tx_csseo_og_description:

Facebook Description
""""""""""""""""""""

.. container:: table-row

   Property
         tx_csseo_og_description
   Data type
         text
   Description
        This description will be shown, if the user shares this page on facebook, LinkedIn etc.

.. _tx_csseo_og_image:

Facebook Image
""""""""""""""

.. container:: table-row

   Property
         tx_csseo_og_image
   Data type
         file
   Description
        This image will be shown, if the user shares this page on facebook, LinkedIn etc.
        It will be scaled to 1200 x 628 pixels.

.. _tx_csseo_tw_title:

Twitter Title
"""""""""""""

.. container:: table-row

   Property
         tx_csseo_tw_title
   Data type
         string
   Description
        This title will be shown, if the user shares this page on twitter. Fallback is the open graph title.

.. _tx_csseo_tw_description:

Twitter Description
"""""""""""""""""""

.. container:: table-row

   Property
         tx_csseo_tw_description
   Data type
         text
   Description
        This description will be shown, if the user shares this page on twitter.
        Fallback is the open graph description.

.. _tx_csseo_tw_image:

Twitter Image
"""""""""""""

.. container:: table-row

   Property
         tx_csseo_tw_image
   Data type
         file
   Description
        This image will be shown, if the user shares this page on twitter. Fallback is the open graph image.
        It will be scaled to 1024 x 512 pixels.

.. _tx_csseo_tw_creator:

Twitter Creator
"""""""""""""""

.. container:: table-row

   Property
         tx_csseo_tw_creator
   Data type
         string
   Description
        Enter a twitter username without the @ sign. If the user shares the page on twitter,
        this account will be shown as creator.

.. _user-faq:

FAQ
---

Do I have to insert open graph and twitter cards properties always?

The title, description and an image should be available on every page. The title is default given by the page title.
You can set the description in the SEO tab. A default image for sharing can be set by the open graph image field in the Social
Media tab.
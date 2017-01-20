.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../Includes.txt


.. _admin-manual:

Administrator manual
====================


Installation
------------
* You can install the extension using the extension manager/TYPO3 repository or via git (bitbucket).
* Once installed it will be active immediately.
* You only have to add/use the static template if you want to use any additional configuration options.



Reference
^^^^^^^^^

.. _plugin-tx-htmlminifier:


plugin.tx\_htmlminifier.settings
^^^^^^^^^^^^^^^^^^^^^


ignorePids
""""""""""""""""

.. container:: table-row

   Property
         ignorePids

   Data type
         string

   Description
         comma separated list of uids of pages which should be excluded from minification

   Default
         (empty)